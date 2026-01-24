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

// State for the runner
let timerInterval = null;
let currentTab = 0;
let questionTrackers = {}; // { tabIndex: currentQuestionIndex }

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
    
    // Clear previous timers
    if(timerInterval) clearInterval(timerInterval);
    currentTab = 0;
    questionTrackers = {};

    const generatedContent = await generateQuizContent(data);

    container.innerHTML = `
        <div class="flex flex-col h-full bg-white">
            <div class="bg-blue-800 text-white p-3 flex justify-between items-center shadow-md z-20">
                <h1 class="text-xl font-bold truncate pr-4">${data.activityname}</h1>
                <div id="quiz-timer" class="font-mono text-lg font-bold bg-blue-900 px-3 py-1 rounded text-yellow-300 border border-blue-700 shadow-inner min-w-[120px] text-center">
                    00:00:00
                </div>
            </div>
            
            <form id="quiz-form" class="flex-1 flex flex-col overflow-hidden relative">
                <div class="bg-gray-100 border-b border-gray-200 flex flex-wrap items-center justify-between p-2 gap-2">
                    <div id="tab-container" class="flex space-x-1 overflow-x-auto no-scrollbar">
                        ${generatedContent.tabs}
                    </div>
                    <button type="button" id="btn-submit-quiz" disabled class="bg-gray-400 text-white font-bold px-6 py-2 rounded shadow-sm text-sm transition cursor-not-allowed ml-auto">
                        Submit Activity
                    </button>
                </div>

                <div id="tab-content-area" class="flex-1 overflow-y-auto bg-gray-50 relative">
                     ${generatedContent.content}
                </div>
            </form>
        </div>
    `;

    // Start Timer
    startTimer(data.dateTimeExpire);

    // Initialize UI Behavior
    initializeRunnerBehavior(data, generatedContent.data);
}

function startTimer(expireDateString) {
    const expireTime = new Date(expireDateString).getTime();
    const timerDisplay = document.getElementById('quiz-timer');

    function update() {
        const now = new Date().getTime();
        const dist = expireTime - now;

        if (dist < 0) {
            clearInterval(timerInterval);
            timerDisplay.innerHTML = "EXPIRED";
            timerDisplay.classList.add("text-red-500");
            alert("Time is up! Your quiz will be submitted automatically.");
            document.getElementById('btn-submit-quiz').click(); 
            return;
        }

        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        
        // Visual warning for last 5 mins
        if(dist < 300000) timerDisplay.classList.add("text-red-400", "animate-pulse");
    }
    
    update();
    timerInterval = setInterval(update, 1000);
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let tabHtml = '';
    let contentHtml = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { tabs: '', content: '<p class="p-4">No sections defined.</p>', data: [] };
    }

    for (const [index, section] of activityData.testQuestions.entries()) {
        const tabId = `tab-${index}`;
        const activeClass = index === 0 ? 'bg-white border-b-white text-blue-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300';
        
        // Tab Button
        tabHtml += `
            <button type="button" class="tab-btn px-4 py-2 rounded-t-lg border border-gray-300 border-b-0 font-bold text-sm transition ${activeClass}" data-target="${tabId}" data-index="${index}">
                Test ${index + 1}
            </button>
        `;

        // Content Wrapper
        const hiddenClass = index === 0 ? '' : 'hidden';
        contentHtml += `<div id="${tabId}" class="tab-pane h-full flex flex-col ${hiddenClass} p-2 md:p-6" data-type="${section.type}">`;

        // Section Info Header
        contentHtml += `
            <div class="mb-4 bg-white p-4 rounded shadow-sm border border-blue-100">
                <h3 class="font-bold text-lg text-gray-800">Test ${index + 1}: ${section.type}</h3>
                <div class="text-xs text-gray-500 mt-1"><strong>Topics:</strong> ${section.topics || 'General'}</div>
                <div class="mt-2 text-sm text-blue-800 italic bg-blue-50 p-2 rounded border border-blue-100">
                    <i class="fas fa-info-circle mr-1"></i> ${section.instructions}
                </div>
            </div>
        `;

        // Fetch Questions Logic
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        const count = parseInt(section.noOfQuestions) || 5;
        let questions = [];
        let collectionName = '';
        
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        if (collectionName && sectionTopics.length > 0) {
            try {
                const qRef = collection(db, collectionName);
                const qQuery = query(qRef, where("subject", "==", "FABM1"), where("topic", "in", sectionTopics.slice(0, 10)));
                const qSnap = await getDocs(qQuery);
                let candidates = [];
                qSnap.forEach(doc => candidates.push({ id: doc.id, ...doc.data() }));
                candidates.sort(() => 0.5 - Math.random());
                questions = candidates.slice(0, count);
            } catch (error) {
                console.error(error);
                contentHtml += `<p class="text-red-500">Error loading questions.</p>`;
            }
        }

        // --- SINGLE QUESTION VIEW CONTAINER ---
        contentHtml += `<div class="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden relative">`;
        
        // 1. Question Display Area (Left/Top)
        contentHtml += `<div class="flex-1 overflow-y-auto bg-white rounded shadow-sm border p-4 relative" id="q-container-${index}">`;
        
        let trackerHtml = '';

        questions.forEach((q, qIndex) => {
            const qId = `s${index}_q${qIndex}`;
            questionData.push({ uiId: qId, dbId: q.id, type: section.type, correctAnswer: q.answer || q.solution });
            const isVisible = qIndex === 0 ? '' : 'hidden';

            // --- TRACKER ITEM GENERATION ---
            if(section.type === "Journalizing") {
                // For Journalizing: List of Transactions
                const transDesc = q.transactions && q.transactions[0] 
                    ? `${q.transactions[0].date} - ${q.transactions[0].description.substring(0, 30)}...` 
                    : `Transaction ${qIndex + 1}`;
                
                trackerHtml += `
                    <button type="button" class="tracker-item w-full text-left p-2 text-xs border-b hover:bg-blue-50 transition ${qIndex===0 ? 'bg-blue-100 font-bold text-blue-800' : 'text-gray-600'}" data-index="${qIndex}" data-tab="${index}">
                        <span class="inline-block w-5 h-5 bg-gray-200 text-center rounded-full mr-2 text-[10px] leading-5 tracking-index">${qIndex+1}</span>
                        ${transDesc}
                    </button>`;
            } else {
                // For MC/Problem Solving: Calendar Style Box
                trackerHtml += `
                    <button type="button" class="tracker-item w-10 h-10 border rounded flex items-center justify-center font-bold text-sm hover:bg-blue-100 transition ${qIndex===0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600'}" data-index="${qIndex}" data-tab="${index}">
                        ${qIndex + 1}
                    </button>`;
            }

            // --- QUESTION RENDER ---
            contentHtml += `<div class="question-slide ${isVisible} h-full flex flex-col" data-index="${qIndex}">`;
            
            // Question Text
            contentHtml += `
                <div class="mb-4">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold mb-2">Question ${qIndex+1} of ${questions.length}</span>
                    <p class="font-bold text-gray-800 text-lg whitespace-pre-wrap">${q.question}</p>
                </div>
            `;

            if (section.type === "Multiple Choice") {
                const opts = q.options ? q.options.map((opt, idx) => `
                    <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-3 shadow-sm group">
                        <input type="radio" name="${qId}" value="${idx}" class="q-input mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300">
                        <span class="text-gray-700 group-hover:text-blue-900">${opt}</span>
                    </label>
                `).join('') : '';
                contentHtml += `<div class="flex flex-col overflow-y-auto pr-2">${opts}</div>`;

            } else if (section.type === "Problem Solving") {
                contentHtml += `
                    <textarea name="${qId}" class="q-input w-full p-4 border border-gray-300 rounded-lg h-64 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-none shadow-inner bg-gray-50" placeholder="Type your final answer and solution here..."></textarea>
                `;

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
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_date" class="q-input w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="Date"></td>
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_acct" class="q-input w-full h-full p-2 text-left outline-none bg-transparent font-mono text-sm" placeholder="Account Title"></td>
                               <td class="p-0 border-r border-gray-300 w-32"><input type="number" name="${tId}_r${r}_dr" class="q-input w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                               <td class="p-0 w-32"><input type="number" name="${tId}_r${r}_cr" class="q-input w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                           </tr>`;
                       }
                       transactionHtml += `
                           <div class="mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                               <div class="bg-gray-100 px-4 py-2 border-b border-gray-300 text-sm font-semibold text-gray-700">
                                   Journal Entry
                               </div>
                               <table class="w-full border-collapse">
                                   <thead><tr class="bg-gray-200 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                        <th class="py-2 border-r border-gray-300 w-24">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-32 text-right pr-2">Debit</th>
                                        <th class="py-2 w-32 text-right pr-2">Credit</th>
                                   </tr></thead>
                                   <tbody>${rows}</tbody>
                               </table>
                           </div>`;
                   });
                }
                contentHtml += `<div class="flex-1 overflow-y-auto">${transactionHtml}</div>`;
            }

            contentHtml += `</div>`; // End Slide
        });
        contentHtml += `</div>`; // End Question Container

        // 2. Navigation & Tracker Area (Right/Bottom)
        // Responsive: Below on mobile, Right sidebar on desktop
        const trackerContainerClass = section.type === 'Journalizing' 
            ? "w-full md:w-80 flex flex-col border-t md:border-t-0 md:border-l bg-gray-50" 
            : "w-full md:w-64 flex flex-col border-t md:border-t-0 md:border-l bg-gray-50";

        const trackerGridClass = section.type === 'Journalizing'
            ? "flex-1 overflow-y-auto" // List view for transactions
            : "flex flex-wrap content-start gap-2 p-4 overflow-y-auto"; // Grid for numbers

        contentHtml += `
            <div class="${trackerContainerClass}">
                <div class="p-4 border-b bg-white flex justify-between items-center gap-2">
                    <button type="button" class="nav-prev bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300 font-bold text-sm w-1/2" data-dir="-1" data-tab="${index}" disabled><i class="fas fa-chevron-left mr-1"></i> Prev</button>
                    <button type="button" class="nav-next bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold text-sm w-1/2" data-dir="1" data-tab="${index}">Next <i class="fas fa-chevron-right ml-1"></i></button>
                </div>
                
                <div class="p-2 bg-gray-100 text-xs font-bold text-gray-500 uppercase text-center border-b">
                    ${section.type === 'Journalizing' ? 'Transaction List' : 'Question Tracker'}
                </div>

                <div class="${trackerGridClass}" id="tracker-container-${index}">
                    ${trackerHtml}
                </div>
            </div>
        `;

        contentHtml += `</div>`; // End Flex Container
        contentHtml += `</div>`; // End Tab Pane
    }

    return { tabs: tabHtml, content: contentHtml, data: questionData };
}

function initializeRunnerBehavior(data, questionData) {
    const submitBtn = document.getElementById('btn-submit-quiz');
    
    // 1. Tab Switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const tabIndex = parseInt(btn.dataset.index);
            
            // Update UI Tabs
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('bg-white', 'border-b-white', 'text-blue-800');
                b.classList.add('bg-gray-200', 'text-gray-600');
            });
            btn.classList.remove('bg-gray-200', 'text-gray-600');
            btn.classList.add('bg-white', 'border-b-white', 'text-blue-800');

            // Show Content
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
            
            currentTab = tabIndex;
        });
    });

    // 2. Question Navigation (Prev/Next) & Tracker Clicking
    data.testQuestions.forEach((_, tabIdx) => {
        questionTrackers[tabIdx] = 0; // Start at q0 for each tab
        const container = document.getElementById(`tab-${tabIdx}`);
        const slides = container.querySelectorAll('.question-slide');
        const trackers = container.querySelectorAll('.tracker-item');
        const btnPrev = container.querySelector('.nav-prev');
        const btnNext = container.querySelector('.nav-next');
        const total = slides.length;

        function updateView(newIndex) {
            questionTrackers[tabIdx] = newIndex;
            
            // Hide all slides, show active
            slides.forEach((s, i) => {
                s.classList.toggle('hidden', i !== newIndex);
            });

            // Update Buttons
            btnPrev.disabled = newIndex === 0;
            if(newIndex === 0) btnPrev.classList.add('opacity-50', 'cursor-not-allowed');
            else btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');

            btnNext.disabled = newIndex === total - 1;
            if(newIndex === total - 1) btnNext.classList.add('opacity-50', 'cursor-not-allowed');
            else btnNext.classList.remove('opacity-50', 'cursor-not-allowed');

            // Update Tracker Styling
            trackers.forEach((t, i) => {
                const isJournal = t.classList.contains('w-full'); // Check if list style or grid style
                if (i === newIndex) {
                    if(isJournal) {
                        t.classList.add('bg-blue-100', 'font-bold', 'text-blue-800');
                        t.classList.remove('text-gray-600');
                    } else {
                        t.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
                        t.classList.remove('bg-white', 'text-gray-600');
                    }
                } else {
                    if(isJournal) {
                        t.classList.remove('bg-blue-100', 'font-bold', 'text-blue-800');
                        t.classList.add('text-gray-600');
                    } else {
                        t.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
                        t.classList.add('bg-white', 'text-gray-600');
                    }
                }
            });
        }

        // Button Listeners
        btnPrev.addEventListener('click', () => {
            if(questionTrackers[tabIdx] > 0) updateView(questionTrackers[tabIdx] - 1);
        });
        
        btnNext.addEventListener('click', () => {
            if(questionTrackers[tabIdx] < total - 1) updateView(questionTrackers[tabIdx] + 1);
        });

        // Direct Tracker Click
        trackers.forEach(t => {
            t.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.dataset.index);
                updateView(idx);
            });
        });
    });

    // 3. Input Monitoring for Completion
    const inputs = document.querySelectorAll('.q-input');
    
    function checkCompletion() {
        // We iterate over logic questionData to find corresponding UI inputs
        let allAnswered = true;
        
        for (const q of questionData) {
            // Check based on type
            if (q.type === 'Multiple Choice') {
                const selected = document.querySelector(`input[name="${q.uiId}"]:checked`);
                if (!selected) { allAnswered = false; break; }
            } else if (q.type === 'Problem Solving') {
                const txt = document.querySelector(`textarea[name="${q.uiId}"]`);
                if (!txt || txt.value.trim() === '') { allAnswered = false; break; }
            } else if (q.type === 'Journalizing') {
                // Check if at least the first row of first transaction has data? 
                // Or check ALL inputs? Sticking to "All inputs must have value" might be too strict for empty rows.
                // Logic: Check if at least one Date and one Account is filled per transaction group
                const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
                // Simple check: user must have typed SOMETHING in this question block
                let hasInput = false;
                inputs.forEach(i => { if(i.value.trim() !== '') hasInput = true; });
                if (!hasInput) { allAnswered = false; break; }
            }
        }

        if (allAnswered) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.textContent = "Submit Activity";
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.textContent = "Complete all items to submit";
        }
    }

    // Attach input listeners
    inputs.forEach(input => {
        input.addEventListener('input', checkCompletion);
        input.addEventListener('change', checkCompletion);
    });

    // Submit Action
    submitBtn.addEventListener('click', () => submitQuiz(data, questionData));
}

async function submitQuiz(activityData, questionData) {
    if(!confirm("Are you sure you want to submit your answers?")) return;

    // Stop Timer
    if(timerInterval) clearInterval(timerInterval);

    // Collect Answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    questionData.forEach(q => {
        if(q.type === 'Multiple Choice') { 
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Problem Solving') {
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Journalizing') {
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            let currentRow = {};
            inputs.forEach(input => {
                 const name = input.name;
                 const parts = name.split('_'); 
                 const tIdx = parts[2];
                 const rIdx = parts[3];
                 const field = parts[4];
                 const key = `${tIdx}_${rIdx}`;

                 if(!currentRow[key]) currentRow[key] = {};
                 currentRow[key][field] = input.value;
            });
            answers[q.uiId] = currentRow;
        }
    });

    const submissionPayload = {
        activityId: activityData.id,
        activityName: activityData.activityname,
        studentName: "Current Student", 
        timestamp: new Date().toISOString(),
        answers: answers
    };

    try {
        await setDoc(doc(collection(db, "student_submissions")), submissionPayload);
        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600">
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
