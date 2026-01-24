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

// Global timer interval variable to clear it when navigating away
let quizTimerInterval = null;

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

            <div id="qa-runner-container" class="flex-1 overflow-y-auto relative bg-gray-100">
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
            // Store ID in data object for easier access
            data.id = docSnap.id; 
            
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
                    if(quizTimerInterval) clearInterval(quizTimerInterval); // Clear any existing timer
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
    
    // 1. Generate Questions based on topics and types
    const generatedContent = await generateQuizContent(data);

    // Header with Timer Layout
    container.innerHTML = `
        <div class="flex flex-col h-full bg-gray-100">
            <div class="bg-blue-800 text-white p-2 flex justify-between items-center shadow-md z-20">
                 <h1 class="text-xl md:text-2xl font-bold truncate pl-2">${data.activityname}</h1>
                 <div class="flex items-center space-x-2 bg-blue-900 px-3 py-1 rounded border border-blue-700">
                    <i class="fas fa-stopwatch text-yellow-400"></i>
                    <span id="quiz-timer" class="font-mono text-lg font-bold">--:--:--</span>
                 </div>
            </div>
            
            <form id="quiz-form" class="flex-1 flex flex-col overflow-hidden">
                ${generatedContent.html}
            </form>
        </div>
    `;

    // 2. Initialize Logic (Timer, Tabs, Pagination, Validation)
    initializeQuizManager(data, generatedContent.data);
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let tabsHtml = '';
    let sectionsHtml = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<div class="p-8 text-center text-gray-500">No test sections defined.</div>', data: [] };
    }

    // --- Generate Tabs Header ---
    tabsHtml = `<div class="bg-white border-b border-gray-300 flex items-center px-2 overflow-x-auto whitespace-nowrap scrollbar-hide shrink-0 h-14">`;
    
    activityData.testQuestions.forEach((section, index) => {
        const isActive = index === 0 ? 'border-blue-800 text-blue-800 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600';
        tabsHtml += `
            <button type="button" class="tab-btn px-4 py-2 mr-2 font-semibold text-sm border-b-2 transition-colors focus:outline-none ${isActive}" data-target="test-section-${index}">
                Test ${index + 1}
            </button>
        `;
    });

    // Add Submit Button to the right end of Tabs
    tabsHtml += `
        <div class="ml-auto pl-4">
            <button type="button" id="btn-submit-quiz" disabled class="bg-gray-400 cursor-not-allowed text-white text-sm font-bold px-6 py-2 rounded shadow transition">
                Submit Activity
            </button>
        </div>
    </div>`;

    // --- Generate Sections ---
    sectionsHtml = `<div class="flex-1 relative overflow-hidden">`; // Container for all sections

    for (const [index, section] of activityData.testQuestions.entries()) {
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        const isHidden = index === 0 ? '' : 'hidden'; // Only show first section initially

        // Section Wrapper
        sectionsHtml += `<div id="test-section-${index}" class="test-section-panel absolute inset-0 flex flex-col md:flex-row ${isHidden}" data-section-type="${section.type}">`;

        // Fetch Questions Logic
        let questions = [];
        let collectionName = '';
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        const count = parseInt(section.noOfQuestions) || 5;

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
                qSnap.forEach(doc => candidates.push({ id: doc.id, ...doc.data() }));
                candidates.sort(() => 0.5 - Math.random());
                questions = candidates.slice(0, count);
            } catch (error) {
                console.error(`Error fetching questions:`, error);
            }
        }

        // --- Render Content Area (Left/Top) & Tracker Area (Right/Bottom) ---
        
        // 1. Questions Container
        let questionsHtml = '';
        let trackerHtml = '';

        questions.forEach((q, qIdx) => {
            const uiId = `s${index}_q${qIdx}`;
            
            // Store Metadata
            questionData.push({ 
                uiId: uiId, 
                dbId: q.id, 
                type: section.type,
                correctAnswer: q.answer || q.solution 
            });

            // --- Multiple Choice & Problem Solving Logic ---
            if (section.type !== "Journalizing") {
                const hiddenClass = qIdx === 0 ? '' : 'hidden';
                
                // Tracker Button
                trackerHtml += `
                    <button type="button" class="tracker-btn w-10 h-10 m-1 rounded border border-gray-300 text-sm font-bold flex items-center justify-center hover:bg-blue-100 focus:outline-none ${qIdx===0 ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-300' : 'bg-white text-gray-700'}" data-target-question="${uiId}">
                        ${qIdx + 1}
                    </button>
                `;

                // Question Content
                let innerContent = '';
                if (section.type === "Multiple Choice") {
                    const opts = q.options ? q.options.map((opt, optIdx) => `
                        <label class="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-3 shadow-sm">
                            <input type="radio" name="${uiId}" value="${optIdx}" class="input-checker mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="text-sm md:text-base text-gray-700">${opt}</span>
                        </label>
                    `).join('') : '';
                    
                    innerContent = `<div class="flex flex-col">${opts}</div>`;
                } else {
                    innerContent = `
                        <textarea name="${uiId}" class="input-checker w-full p-4 border border-gray-300 rounded-lg h-64 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-none" placeholder="Type your answer here..."></textarea>
                    `;
                }

                questionsHtml += `
                    <div id="${uiId}" class="question-block h-full flex flex-col p-4 md:p-8 overflow-y-auto ${hiddenClass}">
                        <div class="mb-4">
                            <span class="text-xs font-bold text-gray-400 uppercase tracking-wide">Question ${qIdx+1}</span>
                            <p class="text-lg md:text-xl font-bold text-gray-800 mt-1 leading-relaxed">${q.question}</p>
                        </div>
                        ${innerContent}
                    </div>
                `;
            } 
            
            // --- Journalizing Logic (Nested Tracker) ---
            else {
                // For Journalizing, the "Question" is the header, but functionality is per-transaction.
                // We will render ALL questions, but within them, the transactions are navigated.
                // Note: If multiple Journalizing questions exist, we need outer logic. 
                // Assuming "One Journalizing Question set" per test usually, but loop handles multiple.
                
                const transactions = q.transactions || [];
                
                // Wrap the whole journalizing question setup
                const jHiddenClass = qIdx === 0 ? '' : 'hidden'; // If multiple journal problems, nav between them? 
                // Let's simplify: If section is Journalizing, usually 1 big problem. If multiple, we treat them as questions.
                
                // Tracker for Transactions
                let transTrackerList = '';
                let transContent = '';

                transactions.forEach((trans, tIdx) => {
                    const transUiId = `${uiId}_t${tIdx}`;
                    const tHidden = tIdx === 0 ? '' : 'hidden';
                    const tActive = tIdx === 0 ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-800' : 'bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';

                    // 1. Transaction Tracker Item
                    transTrackerList += `
                        <button type="button" class="trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none ${tActive}" data-target-trans="${transUiId}">
                            <div class="font-bold">${trans.date}</div>
                            <div class="truncate opacity-80">${trans.description}</div>
                        </button>
                    `;

                    // 2. Transaction Content (Input Table)
                    const rowCount = trans.rows || 2;
                    let rows = '';
                    for(let r=0; r < rowCount; r++) {
                        rows += `
                        <tr class="border-b border-gray-200 bg-white">
                            <td class="p-0 border-r border-gray-300"><input type="text" name="${transUiId}_r${r}_date" class="input-checker w-full h-full p-2 text-center outline-none bg-transparent font-mono text-xs md:text-sm" placeholder="Date"></td>
                            <td class="p-0 border-r border-gray-300"><input type="text" name="${transUiId}_r${r}_acct" class="input-checker w-full h-full p-2 text-left outline-none bg-transparent font-mono text-xs md:text-sm" placeholder="Account Title"></td>
                            <td class="p-0 border-r border-gray-300 w-24 md:w-32"><input type="number" name="${transUiId}_r${r}_dr" class="input-checker w-full h-full p-2 text-right outline-none bg-transparent font-mono text-xs md:text-sm" placeholder="0.00"></td>
                            <td class="p-0 w-24 md:w-32"><input type="number" name="${transUiId}_r${r}_cr" class="input-checker w-full h-full p-2 text-right outline-none bg-transparent font-mono text-xs md:text-sm" placeholder="0.00"></td>
                        </tr>`;
                    }

                    transContent += `
                        <div id="${transUiId}" class="journal-trans-block h-full flex flex-col ${tHidden}">
                            <div class="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
                                <span class="text-xs text-blue-500 font-bold uppercase">Transaction Details</span>
                                <p class="text-lg font-bold text-gray-800 mt-1">${trans.description}</p>
                                <p class="text-sm text-gray-600 mt-1">Date: ${trans.date}</p>
                            </div>

                            <div class="flex-1 overflow-auto border border-gray-300 rounded shadow-sm bg-gray-50">
                                <table class="w-full border-collapse min-w-[500px]">
                                    <thead><tr class="bg-gray-200 text-xs text-gray-600 font-bold uppercase border-b border-gray-300 sticky top-0">
                                        <th class="py-2 border-r border-gray-300 w-24">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-24 md:w-32 text-right pr-2">Debit</th>
                                        <th class="py-2 w-24 md:w-32 text-right pr-2">Credit</th>
                                    </tr></thead>
                                    <tbody>${rows}</tbody>
                                </table>
                            </div>
                        </div>
                    `;
                });

                // Wrap entire journal question
                questionsHtml += `
                    <div id="${uiId}" class="question-block h-full w-full ${jHiddenClass}" data-is-journal="true">
                        <div class="flex h-full flex-col md:flex-row">
                             <div class="flex-1 p-4 md:p-6 h-full overflow-hidden flex flex-col">
                                 <h3 class="font-bold text-gray-800 mb-2 border-b pb-2">${q.title || 'Journalize Transactions'}</h3>
                                 <div class="flex-1 relative">
                                    ${transContent}
                                 </div>
                             </div>
                             
                             <div class="w-full md:w-72 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col h-64 md:h-full">
                                <div class="p-3 bg-gray-100 font-bold text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                    Transactions List
                                </div>
                                <div class="flex-1 overflow-y-auto">
                                    ${transTrackerList}
                                </div>
                             </div>
                        </div>
                    </div>
                `;
            }
        });

        // Assemble Layout for this Section
        if (section.type !== "Journalizing") {
            sectionsHtml += `
                <div class="flex-1 relative bg-white overflow-hidden flex flex-col">
                    <div class="flex-1 relative overflow-hidden">
                        ${questionsHtml}
                    </div>
                    <div class="p-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50">
                        <button type="button" class="nav-prev-btn px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 text-gray-700">Previous</button>
                        <button type="button" class="nav-next-btn px-4 py-2 bg-blue-800 text-white rounded text-sm font-medium hover:bg-blue-900 shadow">Next</button>
                    </div>
                </div>

                <div class="w-full md:w-72 bg-gray-100 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col h-auto md:h-full">
                    <div class="p-3 bg-gray-200 font-bold text-xs text-gray-600 uppercase tracking-wider">
                        Question Tracker
                    </div>
                    <div class="p-3 flex-1 overflow-y-auto flex content-start flex-wrap">
                        ${trackerHtml}
                    </div>
                </div>
            `;
        } else {
            // Journalizing already has internal tracker structure built in 'questionsHtml' loop
            // But we need the prev/next for switching between multiple Journal problems if they exist
             sectionsHtml += `
                <div class="flex-1 relative bg-white overflow-hidden flex flex-col">
                    <div class="flex-1 relative overflow-hidden">
                        ${questionsHtml}
                    </div>
                    ${ questions.length > 1 ? `
                    <div class="p-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50">
                        <button type="button" class="nav-prev-btn px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium hover:bg-gray-100">Previous Problem</button>
                        <button type="button" class="nav-next-btn px-4 py-2 bg-blue-800 text-white rounded text-sm font-medium hover:bg-blue-900 shadow">Next Problem</button>
                    </div>` : ''}
                </div>
             `;
        }

        sectionsHtml += `</div>`; // End Section Wrapper
    }

    sectionsHtml += `</div>`; // End All Sections Container

    return { html: tabsHtml + sectionsHtml, data: questionData };
}

// --- QUIZ MANAGER (INTERACTIVITY) ---

function initializeQuizManager(activityData, questionData) {
    const expireTime = new Date(activityData.dateTimeExpire).getTime();
    const timerDisplay = document.getElementById('quiz-timer');
    const submitBtn = document.getElementById('btn-submit-quiz');
    const form = document.getElementById('quiz-form');

    // 1. Timer Logic
    function updateTimer() {
        const now = new Date().getTime();
        const dist = expireTime - now;

        if (dist < 0) {
            clearInterval(quizTimerInterval);
            timerDisplay.innerHTML = "EXPIRED";
            timerDisplay.parentElement.classList.add('bg-red-600');
            alert("Time is up! Submitting answers now.");
            submitQuiz(activityData, questionData); // Auto submit
            return;
        }

        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${h > 0 ? h + ':' : ''}${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }
    updateTimer(); // Initial call
    quizTimerInterval = setInterval(updateTimer, 1000);

    // 2. Tab Switching Logic
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.test-section-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // UI Toggle
            tabs.forEach(t => {
                t.classList.remove('border-blue-800', 'text-blue-800', 'bg-blue-50');
                t.classList.add('border-transparent', 'text-gray-600');
            });
            tab.classList.remove('border-transparent', 'text-gray-600');
            tab.classList.add('border-blue-800', 'text-blue-800', 'bg-blue-50');

            // Section Visibility
            const targetId = tab.dataset.target;
            sections.forEach(sec => sec.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // 3. Question Navigation & Tracker Logic (Scoped per section)
    sections.forEach(section => {
        const type = section.dataset.sectionType;
        
        if (type !== 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const trackers = section.querySelectorAll('.tracker-btn');
            const prevBtn = section.querySelector('.nav-prev-btn');
            const nextBtn = section.querySelector('.nav-next-btn');
            
            let currentIndex = 0;

            function showQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                // Update tracker
                trackers.forEach((t, i) => {
                    if (i === index) {
                        t.className = "tracker-btn w-10 h-10 m-1 rounded border border-blue-600 bg-blue-600 text-white font-bold flex items-center justify-center ring-2 ring-blue-300";
                    } else {
                        // Check if answered (simple check)
                        // This logic can be expanded, currently just resets styling
                        t.className = "tracker-btn w-10 h-10 m-1 rounded border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                    }
                });
                currentIndex = index;
            }

            // Click Tracker
            trackers.forEach((t, idx) => {
                t.addEventListener('click', () => showQuestion(idx));
            });

            // Prev/Next
            if(prevBtn) prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) showQuestion(currentIndex - 1);
            });
            if(nextBtn) nextBtn.addEventListener('click', () => {
                if (currentIndex < questions.length - 1) showQuestion(currentIndex + 1);
            });
        } 
        
        // --- Journalizing Navigation (Internal Transactions) ---
        else if (type === 'Journalizing') {
            // Handle Navigation between multiple journal problems if they exist (rare)
            // Focus: Handle Transaction Clicking
            const questions = section.querySelectorAll('.question-block');
            
            questions.forEach(qBlock => {
                const transBtns = qBlock.querySelectorAll('.trans-tracker-btn');
                const transBlocks = qBlock.querySelectorAll('.journal-trans-block');
                
                transBtns.forEach((btn, idx) => {
                    btn.addEventListener('click', () => {
                        // Hide all blocks
                        transBlocks.forEach(b => b.classList.add('hidden'));
                        // Show target
                        const targetId = btn.dataset.targetTrans;
                        document.getElementById(targetId).classList.remove('hidden');

                        // Update Active State
                        transBtns.forEach(b => {
                            b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                        });
                        btn.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-blue-100 border-l-4 border-blue-600 text-blue-800';
                    });
                });
            });
        }
    });

    // 4. Input Validation (Unlock Submit Button)
    // Listens to any change in the form
    form.addEventListener('input', checkCompletion);
    
    function checkCompletion() {
        let allAnswered = true;
        
        // Check standard inputs (Radio/Textarea)
        // This is a simplified check. For strict "All Answered", we iterate `questionData`
        // and check if specific fields related to them have values.
        
        for (const q of questionData) {
            if (q.type === 'Multiple Choice') {
                const checked = form.querySelector(`input[name="${q.uiId}"]:checked`);
                if (!checked) { allAnswered = false; break; }
            } else if (q.type === 'Problem Solving') {
                const val = form.querySelector(`textarea[name="${q.uiId}"]`).value;
                if (!val || val.trim() === '') { allAnswered = false; break; }
            } else if (q.type === 'Journalizing') {
                // Check if at least one row in every transaction has data? 
                // Or just check that inputs exist. 
                // Strict check: Ensure at least one debit/credit is entered per transaction.
                // Loose check for UI enabling:
                const inputs = form.querySelectorAll(`input[name^="${q.uiId}"]`);
                let hasData = false;
                inputs.forEach(i => { if(i.value) hasData = true; });
                if(!hasData) { allAnswered = false; break; } // Very loose check
            }
        }

        if (allAnswered) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.innerHTML = "Submit Activity";
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.innerHTML = "Finish All Questions";
        }
    }

    // Submit Action
    submitBtn.addEventListener('click', () => submitQuiz(activityData, questionData));
}

async function submitQuiz(activityData, questionData) {
    if(!confirm("Are you sure you want to submit your answers?")) return;
    
    // Clear Timer
    if(quizTimerInterval) clearInterval(quizTimerInterval);

    // Collect Answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    // Extraction logic
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
                 const parts = name.split('_'); // [s0, q1, t0, r0, field]
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
        studentName: "Current Student", // Replace with actual user object data
        timestamp: new Date().toISOString(),
        answers: answers,
    };

    try {
        await setDoc(doc(collection(db, "student_submissions")), submissionPayload);
        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600 bg-white">
                <i class="fas fa-check-circle text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Submitted Successfully</h2>
                <p class="text-gray-500 mt-2 text-lg">Your response has been saved.</p>
                <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="mt-8 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Select another activity</button>
            </div>
        `;
    } catch (e) {
        console.error("Submission Error:", e);
        alert("Error submitting quiz. Please check your connection.");
    }
}
