import { getFirestore, collection, getDocs, doc, getDoc, setDoc, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgOsKAZWwExUzupxSNytsfOo9BOppF0ng",
    authDomain: "jlvcpa-quizzes.firebaseapp.com",
    projectId: "jlvcpa-quizzes",
    storageBucket: "jlvcpa-quizzes.appspot.com",
    messagingSenderId: "629158256557",
    appId: "1:629158256557:web:b3d1a424b32e28cd578b24"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// State for navigation
let currentTestIndex = 0;
let currentQuestionIndices = {}; // Track current question per test section
let intervalId = null;

export async function renderQuizzesAndActivities(containerElement, user) {
    const contentArea = document.getElementById('content-area');
    
    // Layout: Collapsible Sidebar (Left) + Main Content (Right)
    contentArea.innerHTML = `
        <div class="flex h-full relative overflow-hidden bg-gray-50">
            <div id="qa-sidebar" class="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-full z-10 transition-transform absolute md:relative transform -translate-x-full md:translate-x-0">
                <div class="p-4 border-b border-gray-200 bg-blue-900 text-white flex justify-between items-center">
                    <h2 class="font-bold">Your Activities</h2>
                    <button id="qa-close-sidebar" class="md:hidden text-white"><i class="fas fa-times"></i></button>
                </div>
                <div id="qa-list-container" class="flex-1 overflow-y-auto p-2 space-y-2">
                    <p class="text-center text-gray-400 mt-4 text-sm">Loading activities...</p>
                </div>
            </div>

            <button id="qa-toggle-sidebar" class="md:hidden absolute top-4 left-4 z-20 bg-blue-900 text-white p-2 rounded shadow">
                <i class="fas fa-bars"></i>
            </button>

            <div id="qa-runner-container" class="flex-1 overflow-y-auto relative">
                <div class="h-full flex flex-col items-center justify-center text-gray-400 p-4 md:p-8">
                    <i class="fas fa-arrow-left text-4xl mb-4 hidden md:block"></i>
                    <p>Select an activity from the list to begin.</p>
                </div>
            </div>
        </div>
    `;

    // Mobile Sidebar Logic
    const sidebar = document.getElementById('qa-sidebar');
    document.getElementById('qa-toggle-sidebar').addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
    });
    document.getElementById('qa-close-sidebar').addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    await loadStudentActivities();
}

async function loadStudentActivities() {
    const listContainer = document.getElementById('qa-list-container');
    
    try {
        // Query quizzes. logic: fetch all, or filter by student ID if stored in 'students' array
        const q = query(collection(db, "quiz_list"), orderBy("dateTimeCreated", "desc"));
        const snapshot = await getDocs(q);

        listContainer.innerHTML = '';
        if(snapshot.empty) {
            listContainer.innerHTML = '<p class="text-center text-gray-400 mt-4 text-sm">No activities found.</p>';
            return;
        }

        const now = new Date();

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            const start = new Date(data.dateTimeStart);
            const expire = new Date(data.dateTimeExpire);
            const isExpired = now > expire;
            const isFuture = now < start;

            const card = document.createElement('div');
            card.className = `p-3 rounded border cursor-pointer hover:shadow-md transition bg-white ${isExpired ? 'border-red-200 bg-red-50 opacity-75' : 'border-blue-200'}`;
            
            let statusBadge = '';
            if(isExpired) statusBadge = '<span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold">Expired</span>';
            else if(isFuture) statusBadge = '<span class="text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded font-bold">Upcoming</span>';
            else statusBadge = '<span class="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded font-bold">Active</span>';

            card.innerHTML = `
                <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-gray-800 text-sm">${data.activityname}</h3>
                    ${statusBadge}
                </div>
                <div class="text-xs text-gray-500">
                    <p><i class="far fa-clock mr-1"></i> Due: ${expire.toLocaleString()}</p>
                    <p><i class="fas fa-hourglass-half mr-1"></i> Limit: ${data.timeLimit} mins</p>
                </div>
            `;

            card.onclick = () => {
                if (isExpired) {
                    alert("This activity has expired.");
                } else if (isFuture) {
                    alert(`This activity starts on ${start.toLocaleString()}`);
                } else {
                    renderQuizRunner(data);
                    // Close mobile sidebar if open
                    document.getElementById('qa-sidebar').classList.add('-translate-x-full');
                }
            };

            listContainer.appendChild(card);
        });

    } catch (e) {
        console.error("Error loading activities:", e);
        listContainer.innerHTML = '<p class="text-center text-red-400 mt-4 text-sm">Error loading data.</p>';
    }
}

// --- QUIZ RUNNER LOGIC ---

async function renderQuizRunner(data) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Generating Activity...</span></div>';
    
    // Initialize Navigation State
    currentTestIndex = 0;
    currentQuestionIndices = {};
    if(intervalId) clearInterval(intervalId);

    // 1. Generate Questions based on topics and types from Firebase Collections
    const generatedContent = await generateQuizContent(data);

    // Build Tab Headers
    let tabHeaders = '';
    data.testQuestions.forEach((section, index) => {
        currentQuestionIndices[index] = 0; // Init question index for this section
        tabHeaders += `
            <button class="px-6 py-3 font-bold text-sm border-b-2 transition-colors focus:outline-none ${index === 0 ? 'border-blue-800 text-blue-800 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'}" 
                onclick="switchTab(${index})" id="tab-btn-${index}">
                Test ${index + 1}
            </button>
        `;
    });

    container.innerHTML = `
        <div class="flex flex-col h-full bg-white overflow-hidden shadow-lg border-l border-gray-200">
            <div class="bg-blue-800 text-white p-2 flex justify-between items-center shadow-md z-20">
                <h1 class="text-xl font-bold pl-2 truncate">${data.activityname}</h1>
                <div id="activity-timer" class="font-mono text-lg font-bold bg-blue-900 px-3 py-1 rounded border border-blue-700 min-w-[100px] text-center shadow-inner">
                    Loading...
                </div>
            </div>

            <div class="flex border-b border-gray-200 overflow-x-auto whitespace-nowrap px-2 pt-2 bg-gray-50">
                ${tabHeaders}
            </div>
            
            <form id="quiz-form" class="flex-1 overflow-hidden relative">
                ${generatedContent.html}
            </form>
        </div>
    `;

    // Start Timer
    startTimer(data.dateTimeExpire);

    // Attach Global Functions for Tab & Question Navigation
    window.switchTab = (index) => {
        currentTestIndex = index;
        // Update Buttons
        document.querySelectorAll('[id^="tab-btn-"]').forEach(btn => {
            btn.className = "px-6 py-3 font-bold text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-700 focus:outline-none transition-colors";
        });
        const activeBtn = document.getElementById(`tab-btn-${index}`);
        if(activeBtn) activeBtn.className = "px-6 py-3 font-bold text-sm border-b-2 border-blue-800 text-blue-800 bg-blue-50 focus:outline-none transition-colors";

        // Update Panels
        document.querySelectorAll('.test-section-panel').forEach(panel => panel.classList.add('hidden'));
        document.getElementById(`test-panel-${index}`).classList.remove('hidden');
    };

    window.navQuestion = (testIdx, direction) => {
        const totalQs = document.querySelectorAll(`#test-panel-${testIdx} .question-card`).length;
        let newIdx = currentQuestionIndices[testIdx] + direction;
        
        if (newIdx >= 0 && newIdx < totalQs) {
            jumpToQuestion(testIdx, newIdx);
        }
    };

    window.jumpToQuestion = (testIdx, qIdx) => {
        currentQuestionIndices[testIdx] = qIdx;
        
        // Hide all Qs in this test
        const panel = document.getElementById(`test-panel-${testIdx}`);
        panel.querySelectorAll('.question-card').forEach(c => c.classList.add('hidden'));
        
        // Show target Q
        const target = document.getElementById(`q-card-${testIdx}-${qIdx}`);
        if(target) target.classList.remove('hidden');

        // Update Tracker UI
        panel.querySelectorAll('.tracker-item').forEach(item => {
            item.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
            item.classList.add('bg-white', 'text-gray-600', 'border-gray-300');
        });
        
        const trackerItem = document.getElementById(`tracker-${testIdx}-${qIdx}`);
        if(trackerItem) {
            trackerItem.classList.remove('bg-white', 'text-gray-600', 'border-gray-300');
            trackerItem.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
        }

        // Update Nav Buttons State
        const prevBtn = document.getElementById(`btn-prev-${testIdx}`);
        const nextBtn = document.getElementById(`btn-next-${testIdx}`);
        const total = panel.querySelectorAll('.question-card').length;

        if(prevBtn) prevBtn.disabled = qIdx === 0;
        if(nextBtn) nextBtn.disabled = qIdx === total - 1;
        
        if(prevBtn) prevBtn.classList.toggle('opacity-50', qIdx === 0);
        if(nextBtn) nextBtn.classList.toggle('opacity-50', qIdx === total - 1);
    };

    // Initialize View
    switchTab(0);
    // Initialize first question for all tabs
    data.testQuestions.forEach((_, idx) => jumpToQuestion(idx, 0));

    // Submit Listener
    // Note: We use a delegate listener or attach to all created submit buttons
    const submitBtns = document.querySelectorAll('.btn-submit-final'); 
    submitBtns.forEach(btn => btn.addEventListener('click', () => submitQuiz(data, generatedContent.data)));
}

function startTimer(expireDateStr) {
    const timerDisplay = document.getElementById('activity-timer');
    const expireTime = new Date(expireDateStr).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = expireTime - now;

        if (diff <= 0) {
            timerDisplay.innerText = "00:00:00";
            timerDisplay.classList.add('text-red-400');
            clearInterval(intervalId);
            alert("Time is up! The activity will be submitted.");
            // Optional: trigger submitQuiz here
            return;
        }

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerDisplay.innerText = 
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);
            
        // Visual warning for last 5 mins
        if(diff < 300000) { 
            timerDisplay.classList.add('text-yellow-300');
        }
    }

    update();
    intervalId = setInterval(update, 1000);
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let html = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<div class="p-8 text-center text-gray-500">No test sections defined.</div>', data: [] };
    }

    // Loop through each test section (e.g., Test 1: Multiple Choice, Test 2: Problem Solving)
    for (const [index, section] of activityData.testQuestions.entries()) {
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        const isJournal = section.type === "Journalizing";
        
        // Common Header HTML for the panel
        const headerHtml = `
            <div class="mb-4">
                <div class="text-sm text-gray-600 mb-1">
                    <strong>Type:</strong> ${section.type} <span class="mx-2">|</span> <strong>Topics:</strong> <span class="text-blue-700">${section.topics || 'General'}</span>
                </div>
                <div class="bg-blue-50 p-2 rounded text-sm text-blue-800 italic border border-blue-100">
                    <strong>Instructions:</strong> ${section.instructions}
                </div>
            </div>
        `;

        let questionsHtml = '';
        let trackerHtml = '';
        let questions = [];

        // Fetch Logic
        let collectionName = '';
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        if (collectionName && sectionTopics.length > 0) {
            try {
                const qRef = collection(db, collectionName);
                const qQuery = query(
                    qRef, 
                    where("subject", "==", "FABM1"), 
                    where("topic", "in", sectionTopics.slice(0, 10)) 
                );
                
                const qSnap = await getDocs(qQuery);
                let candidates = [];
                qSnap.forEach(doc => {
                    candidates.push({ id: doc.id, ...doc.data() });
                });

                // Randomize and limit
                candidates.sort(() => 0.5 - Math.random());
                const count = parseInt(section.noOfQuestions) || 5;
                questions = candidates.slice(0, count);

            } catch (error) {
                console.error(`Error fetching questions:`, error);
                questionsHtml = `<p class="text-red-500 p-4">Error loading questions: ${error.message}</p>`;
            }
        } else if (sectionTopics.length === 0) {
             questionsHtml = `<p class="text-gray-400 italic p-4">No topics selected for this section.</p>`;
        }

        // Generate Questions & Tracker Items
        questions.forEach((q, i) => {
            const qId = `s${index}_q${i}`;
            questionData.push({ 
                uiId: qId, dbId: q.id, type: section.type, correctAnswer: q.answer || q.solution 
            });

            // TRACKER ITEM GENERATION
            if(isJournal) {
                // List style tracker for Journaling
                let label = `Item ${i+1}`;
                if(q.transactions && q.transactions[0]) {
                    label = `${q.transactions[0].date} - ${q.transactions[0].description.substring(0, 15)}...`;
                }
                trackerHtml += `
                    <div id="tracker-${index}-${i}" onclick="jumpToQuestion(${index}, ${i})" 
                         class="tracker-item p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 text-xs text-gray-700 transition-colors bg-white">
                        <div class="font-bold text-gray-500 text-[10px] uppercase mb-1">Transaction ${i+1}</div>
                        <div class="truncate">${label}</div>
                    </div>
                `;
            } else {
                // Calendar Grid style for others
                trackerHtml += `
                    <div id="tracker-${index}-${i}" onclick="jumpToQuestion(${index}, ${i})" 
                         class="tracker-item w-10 h-10 flex items-center justify-center border border-gray-300 rounded shadow-sm cursor-pointer hover:bg-blue-50 text-sm font-bold text-gray-600 transition-all bg-white">
                        ${i+1}
                    </div>
                `;
            }

            // QUESTION CONTENT GENERATION
            let innerContent = '';
            
            // --- Multiple Choice ---
            if (section.type === "Multiple Choice") {
                const opts = q.options ? q.options.map((opt, idx) => `
                    <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-3 shadow-sm group">
                        <input type="radio" name="${qId}" value="${idx}" class="mr-4 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300">
                        <span class="text-sm text-gray-700 font-medium group-hover:text-blue-800">${opt}</span>
                    </label>
                `).join('') : '<p class="text-red-400">Error: Options missing</p>';

                innerContent = `
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div class="flex items-start mb-6">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mr-4 mt-1">${i+1}</span>
                            <p class="font-bold text-gray-800 text-lg leading-relaxed">${q.question}</p>
                        </div>
                        <div class="flex flex-col pl-12">${opts}</div>
                    </div>
                `;

            // --- Problem Solving ---
            } else if (section.type === "Problem Solving") {
                innerContent = `
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
                        <div class="flex items-start mb-4">
                            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mr-4 mt-1">${i+1}</span>
                            <p class="font-bold text-gray-800 text-lg leading-relaxed">${q.question}</p>
                        </div>
                        <textarea name="${qId}" class="w-full flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow font-mono text-sm resize-none" placeholder="Type your final answer and solution here..."></textarea>
                    </div>
                `;

            // --- Journalizing ---
            } else if (section.type === "Journalizing") {
                let transactionHtml = '';
                if(q.transactions && Array.isArray(q.transactions)) {
                   q.transactions.forEach((trans, tIdx) => {
                       const tId = `${qId}_t${tIdx}`;
                       const rowCount = trans.rows || 2;
                       let rows = '';
                       for(let r=0; r < rowCount; r++) {
                           rows += `
                           <tr class="border-b border-gray-200 bg-white">
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_date" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-xs focus:bg-blue-50" placeholder="Date"></td>
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_acct" class="w-full h-full p-2 text-left outline-none bg-transparent font-mono text-xs focus:bg-blue-50" placeholder="Account Title"></td>
                               <td class="p-0 border-r border-gray-300 w-24"><input type="number" name="${tId}_r${r}_dr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-xs focus:bg-blue-50" placeholder="0.00"></td>
                               <td class="p-0 w-24"><input type="number" name="${tId}_r${r}_cr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-xs focus:bg-blue-50" placeholder="0.00"></td>
                           </tr>`;
                       }
                       transactionHtml += `
                           <div class="mb-6 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                               <div class="bg-gray-100 px-4 py-2 border-b border-gray-300 flex justify-between items-center text-sm font-bold text-gray-700">
                                   <span>${trans.date} - ${trans.description}</span>
                               </div>
                               <table class="w-full border-collapse">
                                   <thead><tr class="bg-gray-200 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                        <th class="py-2 border-r border-gray-300 w-20">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-24 text-right pr-2">Debit</th>
                                        <th class="py-2 w-24 text-right pr-2">Credit</th>
                                   </tr></thead>
                                   <tbody>${rows}</tbody>
                               </table>
                           </div>`;
                   });
                }
                innerContent = `
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
                        <div class="flex items-start mb-4">
                             <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mr-4 mt-1">${i+1}</span>
                            <p class="font-bold text-gray-800 text-lg">${q.title || 'Journalize the transactions'}</p>
                        </div>
                        <div class="flex-1 overflow-y-auto pr-2">
                            ${transactionHtml}
                        </div>
                    </div>
                `;
            }

            questionsHtml += `<div id="q-card-${index}-${i}" class="question-card hidden h-full flex flex-col">${innerContent}</div>`;
        });

        // Submit Button (Bottom Right)
        const submitBtnHtml = `
            <button type="button" class="btn-submit-final ml-auto bg-green-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-green-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <span>Submit Activity</span> <i class="fas fa-paper-plane"></i>
            </button>
        `;

        // Assemble Layout based on type
        let panelContent = '';
        
        if (isJournal) {
            // Journal Layout: Tracker on LEFT (Collapsible)
            panelContent = `
                <div class="flex h-full w-full">
                    <div class="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-full shrink-0 hidden md:flex" id="journal-tracker-${index}">
                        <div class="p-3 bg-gray-200 font-bold text-gray-600 text-xs uppercase border-b shadow-sm">Transaction List</div>
                        <div class="flex-1 overflow-y-auto">
                            ${trackerHtml}
                        </div>
                    </div>
                    
                    <div class="flex-1 flex flex-col h-full overflow-hidden bg-white">
                        <div class="md:hidden p-2 bg-gray-100 border-b flex justify-between items-center cursor-pointer" onclick="document.getElementById('journal-tracker-${index}').classList.toggle('hidden')">
                            <span class="text-xs font-bold text-gray-600 uppercase">Show Transaction List</span>
                            <i class="fas fa-list"></i>
                        </div>

                        <div class="flex-1 overflow-hidden p-4 md:p-6 flex flex-col">
                            ${headerHtml}
                            <div class="flex-1 overflow-hidden relative">
                                ${questionsHtml}
                            </div>
                        </div>

                        <div class="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center shrink-0">
                            <div class="flex gap-2">
                                <button type="button" id="btn-prev-${index}" onclick="navQuestion(${index}, -1)" class="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 text-gray-700 font-bold text-sm">Previous</button>
                                <button type="button" id="btn-next-${index}" onclick="navQuestion(${index}, 1)" class="px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded shadow-sm hover:bg-blue-700 font-bold text-sm">Next</button>
                            </div>
                            ${submitBtnHtml}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Standard Layout: Tracker on RIGHT (Collapsible)
            panelContent = `
                <div class="flex h-full w-full flex-col md:flex-row">
                    <div class="flex-1 flex flex-col h-full overflow-hidden bg-white order-2 md:order-1">
                        <div class="flex-1 overflow-hidden p-4 md:p-6 flex flex-col">
                            ${headerHtml}
                            <div class="flex-1 overflow-hidden relative">
                                ${questionsHtml}
                            </div>
                        </div>

                        <div class="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center shrink-0">
                            <div class="flex gap-2">
                                <button type="button" id="btn-prev-${index}" onclick="navQuestion(${index}, -1)" class="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 text-gray-700 font-bold text-sm">Previous</button>
                                <button type="button" id="btn-next-${index}" onclick="navQuestion(${index}, 1)" class="px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded shadow-sm hover:bg-blue-700 font-bold text-sm">Next</button>
                            </div>
                            ${submitBtnHtml}
                        </div>
                    </div>

                    <div class="w-full md:w-72 bg-gray-50 border-l border-gray-200 flex flex-col shrink-0 order-1 md:order-2">
                        <div class="p-3 bg-gray-200 font-bold text-gray-600 text-xs uppercase border-b shadow-sm flex justify-between items-center cursor-pointer md:cursor-default"
                             onclick="document.getElementById('grid-tracker-${index}').classList.toggle('hidden')">
                            <span>Item Tracker</span>
                            <i class="fas fa-th md:hidden"></i>
                        </div>
                        <div id="grid-tracker-${index}" class="p-4 grid grid-cols-5 gap-2 overflow-y-auto hidden md:grid max-h-48 md:max-h-full content-start">
                            ${trackerHtml}
                        </div>
                    </div>
                </div>
            `;
        }

        html += `<div id="test-panel-${index}" class="test-section-panel h-full hidden">${panelContent}</div>`;
    }

    return { html, data: questionData };
}

async function submitQuiz(activityData, questionData) {
    if(!confirm("Are you sure you want to submit your answers?")) return;

    // Collect Answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    // Extraction logic
    questionData.forEach(q => {
        if(q.type === 'Multiple Choice' || q.type === 'Problem Solving') {
             answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Journalizing') {
            // Journalizing extraction: iterate inputs matching qId prefix
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            let currentRow = {};
            inputs.forEach(input => {
                 const name = input.name;
                 const parts = name.split('_'); // [s0, q1, t0, r0, field]
                 // parts[2] is transaction index, parts[3] is row index
                 const key = `${parts[2]}_${parts[3]}`;
                 if(!currentRow[key]) currentRow[key] = {};
                 currentRow[key][parts[4]] = input.value;
            });
            answers[q.uiId] = currentRow;
        }
    });

    const submissionPayload = {
        activityId: activityData.id,
        activityName: activityData.activityname,
        studentName: "Current Student", // Replace with actual user name
        timestamp: new Date().toISOString(),
        answers: answers
    };

    try {
        await setDoc(doc(collection(db, "student_submissions")), submissionPayload);
        
        // Clear Timer
        if(intervalId) clearInterval(intervalId);

        // Success UI
        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600 bg-white">
                <i class="fas fa-check-circle text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Submitted Successfully</h2>
                <p class="text-gray-500 mt-2 text-lg">Your response has been saved.</p>
                <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="mt-8 text-blue-600 hover:underline">Select another activity</button>
            </div>
        `;
    } catch (e) {
        console.error("Submission Error:", e);
        alert("Error submitting quiz. Please check your connection and try again.");
    }
}
