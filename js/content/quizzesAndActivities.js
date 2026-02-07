import { getFirestore, collection, getDocs, doc, getDoc, setDoc, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getLetterGrade } from "../utils.js"; 
import { AntiCheatSystem } from '../antiCheat.js';
import { qbMerchMultipleChoice } from "./questionBank/qbMerchMultipleChoice.js";
import { qbMerchProblemSolving } from "./questionBank/qbMerchProblemSolving.js";
import { qbMerchJournalizing } from "./questionBank/qbMerchJournalizing.js";

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

let sectionIntervals = []; // Array to hold intervals for each section
let currentAntiCheat = null;

// --- MAIN ENTRY POINT ---
export async function renderQuizzesAndActivities(containerElement, user, customRunner = null, filterType = null) {
    const contentArea = containerElement;

    // Render the sidebar layout
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

            <div id="qa-runner-container" class="flex-1 overflow-hidden relative bg-gray-100">
                <div class="h-full flex flex-col items-center justify-center text-gray-400 p-4 md:p-8">
                    <i class="fas fa-arrow-left text-4xl mb-4 hidden md:block"></i>
                    <p>Select an activity from the list to begin.</p>
                </div>
            </div>
        </div>
    `;

    // Attach Sidebar Event Listeners
    const sidebar = document.getElementById('qa-sidebar');
    const toggleBtn = document.getElementById('qa-toggle-sidebar');
    const closeBtn = document.getElementById('qa-close-sidebar');

    if (toggleBtn) toggleBtn.addEventListener('click', () => sidebar.classList.remove('-translate-x-full'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.add('-translate-x-full'));

    // Load Data
    await loadStudentActivities(user, customRunner, filterType);
}

async function loadStudentActivities(user, customRunner, filterType) {
    const listContainer = document.getElementById('qa-list-container');
    if (!listContainer) return;

    try {
        const q = query(collection(db, "quiz_list"), orderBy("dateTimeCreated", "desc"));
        const snapshot = await getDocs(q);

        listContainer.innerHTML = '';
        
        if(snapshot.empty) {
            listContainer.innerHTML = '<p class="text-center text-gray-400 mt-4 text-sm">No activities found.</p>';
            return;
        }

        const now = new Date();
        let hasItems = false;

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            data.id = docSnap.id; 
            
            // Filter by Section
            if (user.role === 'student' && data.section !== user.Section) return;
            
            // --- FILTER LOGIC ---
            const isPerformanceTask = (data.tasks && Array.isArray(data.tasks)) || 
                                      data.type === 'accounting_cycle' || 
                                      (data.activityname && data.activityname.includes('Task'));

            if (filterType === 'Task' || filterType === 'accounting_cycle') {
                if (!isPerformanceTask) return; 
            } 
            else if (filterType === 'standard') {
                if (isPerformanceTask) return;
            }

            hasItems = true;

            // Date Handling: Handle New Structure (Per Section) vs Old Structure (Global)
            let start, expire;
            if (data.testQuestions && data.testQuestions.length > 0 && data.testQuestions[0].dateTimeStart) {
                // New Structure: Use the first section's time as the "Activity" time for display
                start = new Date(data.testQuestions[0].dateTimeStart);
                expire = new Date(data.testQuestions[0].dateTimeExpire);
            } else {
                // Old Structure (Backwards Compatibility)
                start = new Date(data.dateTimeStart);
                expire = new Date(data.dateTimeExpire);
            }

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
                </div>
            `;

            card.onclick = () => {
                if (isFuture && user.role !== 'teacher') {
                    alert(`This activity starts on ${start.toLocaleString()}`);
                } else {
                    // Clear all intervals from previous runners
                    sectionIntervals.forEach(int => clearInterval(int));
                    sectionIntervals = [];

                    if(currentAntiCheat) {
                        currentAntiCheat.stopMonitoring();
                        currentAntiCheat = null;
                    }
                    
                    renderQuizRunner(data, user, customRunner);
                    document.getElementById('qa-sidebar').classList.add('-translate-x-full');
                }
            };

            listContainer.appendChild(card);
        });
        
        if (!hasItems) {
             listContainer.innerHTML = '<p class="text-center text-gray-400 mt-4 text-sm">No available activities for this category.</p>';
        }

    } catch (e) {
        console.error("Error loading activities:", e);
        if (listContainer) listContainer.innerHTML = '<p class="text-center text-red-400 mt-4 text-sm">Error loading data.</p>';
    }
}

async function renderQuizRunner(data, user, customRunner = null) {
    const container = document.getElementById('qa-runner-container');
    
    // --- SMART ROUTING LOGIC ---
    const isAccountingCycle = data.tasks && Array.isArray(data.tasks) && data.tasks.length > 0;

    if (isAccountingCycle && customRunner && typeof customRunner === 'function') {
        if (container._reactRoot) {
             // Reuse existing root logic if needed (React specific)
        } else {
             container.innerHTML = '';
        }
        
        const goBack = () => {
             if (container._reactRoot) {
                 delete container._reactRoot; 
             }
             document.getElementById('qa-toggle-sidebar').click(); 
             loadStudentActivities(user, customRunner);
        };

        customRunner(container, data, user, goBack);
        return; 
    }
    
    // --- STANDARD QUIZ LOGIC ---
    
    // Permission Check
    if (user.role !== 'teacher' && data.students && !data.students.includes(user.Idnumber)) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-red-600 bg-white p-8 text-center">
                <i class="fas fa-user-slash text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Access Denied</h2>
                <p class="text-gray-500 mt-2 text-lg">You are not included in the list of students for this activity.</p>
            </div>`;
        return;
    }

    const collectionName = `results_${data.activityname}_${data.section}`;
    const docId = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
    let savedState = null;

    // Check for existing results (Final Submission OR Saved Progress)
    try {
        const resultDoc = await getDoc(doc(db, collectionName, docId));
        if (resultDoc.exists()) {
            const rData = resultDoc.data();
            if (rData.status === "final") {
                // If already finally submitted, show read-only result
                await renderQuizResultPreview(data, user, rData);
                return;
            } else {
                // It is "saved" or "in_progress". Load it to resume.
                savedState = rData;
            }
        }
    } catch (e) { console.error(e); }

    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Generating Activity...</span></div>';
    
    // Pass savedState to generator to lock answered items and load specific questions
    const generatedContent = await generateQuizContent(data, savedState);

    // Standard Anti-Cheat HTML
    const antiCheatHtml = `
        <div id="black-curtain" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background-color:black; z-index:9999;"></div>
        <div id="cheat-lockout" class="hidden fixed inset-0 bg-gray-900 z-[100] flex items-center justify-center text-white p-6 text-center">
            <div class="max-w-md w-full">
                <h1 class="text-3xl font-bold mb-4 text-red-500">Activity Paused</h1>
                <p class="text-lg mb-6">Focus lost. Navigation away is monitored.</p>
                <button id="btn-unlock" onclick="window.handleUnlockClick()" class="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xl shadow-lg">Resume Activity</button>
            </div>
        </div>
    `;

    container.innerHTML = `
        ${antiCheatHtml}
        <div class="flex flex-col h-full bg-gray-100">
            <div class="bg-blue-800 text-white p-2 flex justify-between items-center shadow-md z-30 sticky top-0">
                 <h1 class="text-xl md:text-2xl font-bold truncate pl-2">${data.activityname}</h1>
                 </div>
            <form id="quiz-form" class="flex-1 flex flex-col overflow-y-auto relative scrollbar-thin">
                ${generatedContent.html}
            </form>
        </div>
    `;

    initializeQuizManager(data, generatedContent.data, user, savedState);
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData, savedState = null) {
    let tabsHtml = '';
    let sectionsHtml = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<div class="p-8 text-center text-gray-500">No test sections defined.</div>', data: [] };
    }

    tabsHtml = `<div class="bg-white border-b border-gray-300 flex items-center px-2 overflow-x-auto whitespace-nowrap shrink-0 z-20 sticky top-0 shadow-sm">`;
    
    activityData.testQuestions.forEach((section, index) => {
        const isActive = index === 0 ? 'border-blue-800 text-blue-800 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600';
        tabsHtml += `
            <button type="button" class="tab-btn px-4 py-3 mr-2 font-semibold text-sm border-b-2 transition-colors focus:outline-none ${isActive}" data-target="test-section-${index}">
                Test ${index + 1}
            </button>
        `;
    });

    tabsHtml += `
        <div class="ml-auto pl-4 py-2 flex gap-2">
            <button type="button" id="btn-save-progress" class="bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded shadow hover:bg-blue-700 transition whitespace-nowrap">
                <i class="fas fa-save mr-1"></i> Save
            </button>
            <button type="button" id="btn-submit-quiz" disabled class="bg-gray-400 cursor-not-allowed text-white text-sm font-bold px-4 py-1.5 rounded shadow transition whitespace-nowrap">
                Submit
            </button>
        </div>
    </div>`;

    sectionsHtml = `<div class="w-full max-w-7xl mx-auto p-2 md:p-4">`; 

    for (const [index, section] of activityData.testQuestions.entries()) {
        // --- 1. FILTERING LOGIC ---
        // Support old data (just "topics" string) and new data (competencies/subtopics)
        const sTopics = section.topics ? section.topics.split(',').map(t => t.trim()).filter(t => t) : [];
        const sCompetencies = section.competencies ? section.competencies.split(',').map(t => t.trim()).filter(t => t) : [];
        const sSubtopics = section.subtopics ? section.subtopics.split(',').map(t => t.trim()).filter(t => t) : [];

        const isHidden = index === 0 ? '' : 'hidden'; 

        sectionsHtml += `<div id="test-section-${index}" class="test-section-panel w-full ${isHidden}" data-section-type="${section.type}">`;

        // --- 2. PER-TEST TIMER UI ---
        // Backwards compatibility for dates
        const startTime = section.dateTimeStart ? new Date(section.dateTimeStart) : new Date(activityData.dateTimeStart);
        const expireTime = section.dateTimeExpire ? new Date(section.dateTimeExpire) : new Date(activityData.dateTimeExpire);
        
        sectionsHtml += `
            <div class="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4 flex flex-col md:flex-row justify-between items-center text-sm text-yellow-800 shadow-sm">
                <div class="flex gap-4">
                    <span><strong>Start:</strong> ${startTime.toLocaleString()}</span>
                    <span><strong>Due:</strong> ${expireTime.toLocaleString()}</span>
                </div>
                <div class="mt-2 md:mt-0 font-bold text-red-600 text-lg flex items-center">
                    <i class="fas fa-hourglass-half mr-2"></i>
                    <span id="timer-display-${index}">--:--:--</span>
                </div>
            </div>
        `;

        let questions = [];
        const count = parseInt(section.noOfQuestions) || 5;

        // Pull from local JS files
        let localSource = [];
        if (section.type === "Multiple Choice") localSource = qbMerchMultipleChoice;
        else if (section.type === "Problem Solving") localSource = qbMerchProblemSolving;
        else if (section.type === "Journalizing") localSource = qbMerchJournalizing;

        const flattenedCandidates = localSource.map(obj => {
            const id = Object.keys(obj)[0];
            return { id, ...obj[id] };
        });

        // --- 3. FILTERING IMPLEMENTATION ---
        let candidates = flattenedCandidates.filter(q => {
            const subjectMatch = q.subject === "FABM1";
            
            // If filter array is empty, it means "All" (return true). Else check inclusion.
            const topicMatch = sTopics.length === 0 || sTopics.includes(q.topic);
            const compMatch = sCompetencies.length === 0 || sCompetencies.includes(q.competency);
            const subMatch = sSubtopics.length === 0 || sSubtopics.includes(q.subtopic);

            return subjectMatch && topicMatch && compMatch && subMatch;
        });

        // --- 4. SELECTION & RESUME LOGIC ---
        candidates.sort(() => 0.5 - Math.random()); // Shuffle candidates first
        
        for(let i=0; i < count; i++) {
            const uiId = `s${index}_q${i}`;
            let selectedQ = null;

            // Check if this specific UI slot was answered and saved
            if (savedState && savedState.questionsTaken && savedState.questionsTaken[uiId]) {
                const savedQData = savedState.questionsTaken[uiId];
                // Use the saved snapshot
                selectedQ = {
                    id: savedQData.id || "legacy",
                    question: savedQData.questionText,
                    options: savedQData.options,
                    correctAnswer: savedQData.correctAnswer,
                    explanation: savedQData.explanation,
                    transactions: savedQData.transactions,
                    instructions: savedQData.instructions,
                    isSaved: true // Flag to disable input
                };
            } else {
                // New question for this slot (was not saved)
                if (candidates.length > 0) {
                    selectedQ = candidates.pop(); 
                    selectedQ.isSaved = false;
                }
            }

            if (selectedQ) {
                questions.push(selectedQ);
            }
        }
        
        let questionsHtml = '';
        let trackerHtml = '';

        questions.forEach((q, qIdx) => {
            const uiId = `s${index}_q${qIdx}`;
            
            // Logic to disable if saved
            const disabledAttr = q.isSaved ? 'disabled' : '';
            const lockIcon = q.isSaved ? '<i class="fas fa-lock text-gray-400 ml-2" title="Answer Saved"></i>' : '';
            
            // Get previous answer value if saved
            let savedValue = null;
            if (q.isSaved && savedState && savedState.answers) {
                savedValue = savedState.answers[uiId];
            }

            const getSafeCorrectAnswer = (q) => {
                if (q.answer !== undefined && q.answer !== null && q.answer !== "") return q.answer;
                if (q.solution !== undefined && q.solution !== null && q.solution !== "") return q.solution;
                if (q.correctAnswer !== undefined && q.correctAnswer !== null) return q.correctAnswer;
                return null;
            };

            questionData.push({ 
                uiId: uiId, 
                dbId: q.id, 
                type: section.type,
                questionText: q.question || (q.title || 'Journal Activity'),
                correctAnswer: getSafeCorrectAnswer(q),
                options: q.options || [],
                explanation: q.explanation || '',
                transactions: q.transactions || [],
                instructions: q.instructions || null
            });

            const instructionText = (section.type === 'Journalizing' && q.instructions) ? q.instructions : section.instructions;
            
            const stickyHeader = `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <h3 class="text-lg font-semibold border-b pb-1 text-blue-900">
                            <span class="font-bold text-blue-800">Type:</span> ${section.type} ${lockIcon}
                        </h3>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Instruction:</span> ${instructionText}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}
                        </div>
                    </div>
                </div>
            `;

            if (section.type !== "Journalizing") {
                const hiddenClass = qIdx === 0 ? '' : 'hidden';
                
                // If saved, show green in tracker
                const trackerClass = q.isSaved 
                    ? "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-bold flex items-center justify-center"
                    : (qIdx===0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700');

                trackerHtml += `
                    <button type="button" class="${trackerClass} w-9 h-9 m-0.5 rounded-full border text-sm font-bold flex items-center justify-center hover:bg-blue-100 focus:outline-none" data-target-question="${uiId}" ${q.isSaved ? 'data-is-answered="true"' : ''}>
                        ${qIdx + 1}
                    </button>
                `;

                let innerContent = '';
                if (section.type === "Multiple Choice") {
                    const opts = q.options ? q.options.map((opt, optIdx) => {
                        const isChecked = String(savedValue) === String(optIdx) ? 'checked' : '';
                        const dimClass = q.isSaved ? 'opacity-75 cursor-not-allowed bg-gray-50' : 'hover:bg-blue-50 cursor-pointer bg-white';
                        
                        return `
                        <label class="flex items-start p-3 border border-gray-200 rounded transition-colors mb-2 shadow-sm ${dimClass}">
                            <input type="radio" name="${uiId}" value="${optIdx}" class="input-checker mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0" ${disabledAttr} ${isChecked}>
                            <span class="text-sm text-gray-700">${opt}</span>
                        </label>
                    `}).join('') : '';
                    
                    innerContent = `<div class="flex flex-col mt-2">${opts}</div>`;
                } else {
                    const val = savedValue || '';
                    const dimClass = q.isSaved ? 'bg-gray-100 cursor-not-allowed text-gray-600' : 'bg-white';
                    innerContent = `
                        <textarea name="${uiId}" class="input-checker w-full mt-2 p-3 border border-gray-300 rounded h-32 md:h-48 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-y ${dimClass}" placeholder="Type your answer here..." ${disabledAttr}>${val}</textarea>
                    `;
                }

                questionsHtml += `
                    <div id="${uiId}" class="question-block w-full ${hiddenClass}">
                        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4">
                            <div class="p-4 md:p-6">
                                <div class="mb-2">
                                    <span class="text-xs font-bold text-gray-400 uppercase tracking-wide">Question ${qIdx+1}</span>
                                    <p class="text-base md:text-lg font-bold text-gray-800 mt-1 leading-snug">${q.question}</p>
                                </div>
                                ${innerContent}
                                <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                                    <button type="button" class="nav-prev-btn text-gray-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded hover:bg-gray-100">
                                        <i class="fas fa-arrow-left mr-1"></i> Previous
                                    </button>
                                    <button type="button" class="nav-next-btn bg-blue-800 text-white text-sm font-medium px-4 py-1.5 rounded hover:bg-blue-900 shadow">
                                        Next <i class="fas fa-arrow-right ml-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } 
            else {
                const transactions = q.transactions || [];
                let transTrackerList = '';
                let transContent = '';

                transactions.forEach((trans, tIdx) => {
                    const transUiId = `${uiId}_t${tIdx}`;
                    const tHidden = tIdx === 0 ? '' : 'hidden';
                    const tActive = tIdx === 0 ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-800' : 'bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';

                    transTrackerList += `
                        <button type="button" class="trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none ${tActive}" data-target-trans="${transUiId}" data-t-index="${tIdx}">
                            <div class="font-bold whitespace-nowrap">${trans.date}</div>
                            <div class="whitespace-normal opacity-80 text-xs">${trans.description}</div>
                        </button>
                    `;

                    const rowCount = trans.rows || 2;
                    let rows = '';
                    for(let r=0; r < rowCount; r++) {
                        const cellKey = `t${tIdx}_r${r}`;
                        const cellData = (savedValue && savedValue[cellKey]) ? savedValue[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        const dimClass = q.isSaved ? 'text-gray-500' : 'text-black';

                        rows += `
                        <tr class="border-b border-gray-200 bg-white">
                            <td class="p-0 border-r border-gray-300 w-24"><input type="text" name="${transUiId}_r${r}_date" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm ${dimClass}" placeholder="" value="${cellData.date}" ${disabledAttr}></td>
                            <td class="p-0 border-r border-gray-300 w-auto"><input type="text" name="${transUiId}_r${r}_acct" class="input-checker w-full p-2 text-left outline-none bg-transparent font-mono text-sm ${dimClass}" placeholder="" value="${cellData.acct}" ${disabledAttr}></td>
                            <td class="p-0 border-r border-gray-300 w-28"><input type="number" name="${transUiId}_r${r}_dr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm ${dimClass}" style="appearance: textfield; -moz-appearance: textfield; -webkit-appearance: none;" placeholder="" value="${cellData.dr}" ${disabledAttr}></td>
                            <td class="p-0 w-28"><input type="number" name="${transUiId}_r${r}_cr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm ${dimClass}" style="appearance: textfield; -moz-appearance: textfield; -webkit-appearance: none;" placeholder="" value="${cellData.cr}" ${disabledAttr}></td>
                        </tr>`;
                    }

                    transContent += `
                        <div id="${transUiId}" class="journal-trans-block w-full ${tHidden}">
                            <div class="bg-blue-50 p-3 rounded mb-3 border border-blue-100">
                                <span class="text-xs text-blue-500 font-bold uppercase">Transaction Details</span>
                                <p class="text-md font-bold text-gray-800">${trans.date} ${trans.description}</p>
                            </div>
                            <div class="w-full overflow-x-auto border border-gray-300 rounded shadow-sm bg-white mb-2">
                                <table class="w-full border-collapse table-fixed min-w-[600px]">
                                    <thead><tr class="bg-gray-100 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                        <th class="py-2 border-r border-gray-300 w-24">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4 w-auto">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-28 text-right pr-2">Debit</th>
                                        <th class="py-2 w-28 text-right pr-2">Credit</th>
                                    </tr></thead>
                                    <tbody>${rows}</tbody>
                                </table>
                            </div>
                            <div class="flex justify-between items-center mt-4 mb-2">
                                <div>
                                    ${tIdx > 0 ? `<button type="button" class="btn-prev-trans px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium border border-gray-300" data-target-idx="${tIdx - 1}"><i class="fas fa-chevron-left mr-1"></i> Previous Transaction</button>` : ''}
                                </div>
                                <div>
                                    ${tIdx < transactions.length - 1 ? `<button type="button" class="btn-next-trans px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium shadow-sm" data-target-idx="${tIdx + 1}">Next Transaction <i class="fas fa-chevron-right ml-1"></i></button>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });

                questionsHtml += `
                    <div id="${uiId}" class="question-block w-full ${isHidden}" data-is-journal="true">
                        <div class="bg-white rounded shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
                             <div class="flex-1 p-0 md:p-0 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
                                 ${stickyHeader}
                                 <div class="p-4 md:p-2 flex-1">
                                     ${transContent}
                                     ${questions.length > 1 ? `
                                     <div class="mt-4 pt-4 border-t border-gray-100 flex justify-end space-x-2">
                                          <button type="button" class="nav-prev-btn px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">Previous Question</button>
                                          <button type="button" class="nav-next-btn px-3 py-1 bg-blue-800 text-white rounded text-sm hover:bg-blue-900">Next Question</button>
                                     </div>` : ''}
                                 </div>
                             </div>
                             <div class="w-full md:w-64 bg-gray-50 flex flex-col max-h-64 md:max-h-full overflow-y-auto">
                                <div class="p-2 bg-gray-100 font-bold text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200 sticky top-0">
                                    Transactions
                                </div>
                                <div class="flex-1">
                                    ${transTrackerList}
                                </div>
                             </div>
                        </div>
                    </div>
                `;
            }
        });

        if (section.type !== "Journalizing") {
            sectionsHtml += `
                <div class="flex flex-col md:flex-row md:items-start gap-4">
                    <div class="flex-1 min-w-0">
                        ${questionsHtml}
                    </div>
                    <div class="w-full md:w-64 shrink-0">
                        <div class="bg-white rounded shadow-sm border border-gray-200 p-3 sticky top-20">
                            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pb-1 border-b border-gray-100">
                                Question Tracker
                            </div>
                            <div class="flex flex-wrap content-start">
                                ${trackerHtml}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            sectionsHtml += `<div class="w-full">${questionsHtml}</div>`;
        }

        sectionsHtml += `</div>`; 
    }

    sectionsHtml += `</div>`; 

    return { html: tabsHtml + sectionsHtml, data: questionData };
}

// --- QUIZ MANAGER ---
function initializeQuizManager(activityData, questionData, user, savedState) {
    const submitBtn = document.getElementById('btn-submit-quiz');
    const saveBtn = document.getElementById('btn-save-progress');
    const form = document.getElementById('quiz-form');

    // Anti-Cheat
    const highStakesKeywords = ['Summative', 'Prelim', 'Midterm', 'Semi-final', 'Final', 'Performance'];
    const isHighStakes = highStakesKeywords.some(keyword => activityData.activityname.includes(keyword));
    
    if (currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    if (isHighStakes) {
        currentAntiCheat = new AntiCheatSystem({
            onCheatDetected: () => {
                sectionIntervals.forEach(i => clearInterval(i));
                alert("Anti-Cheat Violation Detected! The activity will now reload.");
                renderQuizRunner(activityData, user);
            }
        });
        window.handleUnlockClick = () => currentAntiCheat.handleUnlockClick();
        currentAntiCheat.startMonitoring();
    }

    // Per-Section Timers
    activityData.testQuestions.forEach((section, index) => {
        const timerDisplay = document.getElementById(`timer-display-${index}`);
        const exp = section.dateTimeExpire ? new Date(section.dateTimeExpire).getTime() : new Date(activityData.dateTimeExpire).getTime();

        const updateSectionTimer = () => {
            const now = new Date().getTime();
            const dist = exp - now;

            if (dist < 0) {
                if(timerDisplay) {
                    timerDisplay.innerHTML = "EXPIRED";
                    timerDisplay.parentElement.classList.add('text-red-800');
                }
            } else {
                const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((dist % (1000 * 60)) / 1000);
                if(timerDisplay) timerDisplay.innerHTML = `${h > 0 ? h + ':' : ''}${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
            }
        };
        updateSectionTimer();
        const interval = setInterval(updateSectionTimer, 1000);
        sectionIntervals.push(interval);
    });

    // Tab Logic
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.test-section-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('border-blue-800', 'text-blue-800', 'bg-blue-50');
                t.classList.add('border-transparent', 'text-gray-600');
            });
            tab.classList.remove('border-transparent', 'text-gray-600');
            tab.classList.add('border-blue-800', 'text-blue-800', 'bg-blue-50');

            const targetId = tab.dataset.target;
            sections.forEach(sec => sec.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Nav Logic
    sections.forEach(section => {
        const type = section.dataset.sectionType;
        if (type !== 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const trackers = section.querySelectorAll('.tracker-btn');
            const prevBtns = section.querySelectorAll('.nav-prev-btn');
            const nextBtns = section.querySelectorAll('.nav-next-btn');
            
            let currentIndex = 0;
            for (let i = 0; i < trackers.length; i++) {
                if (trackers[i].dataset.isAnswered !== "true") { currentIndex = i; break; }
            }

            function showQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                trackers.forEach((t, i) => {
                    if (i === index) {
                        t.className = t.dataset.isAnswered === "true" 
                            ? "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-bold flex items-center justify-center ring-2 ring-blue-400"
                            : "tracker-btn w-9 h-9 m-0.5 rounded-full border border-blue-600 bg-blue-600 text-white font-bold flex items-center justify-center ring-2 ring-blue-300";
                    } else {
                        t.className = t.dataset.isAnswered === "true"
                            ? "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-bold flex items-center justify-center"
                            : "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                    }
                });
                currentIndex = index;
            }
            showQuestion(currentIndex);

            trackers.forEach((t, idx) => t.addEventListener('click', () => showQuestion(idx)));
            prevBtns.forEach(btn => btn.addEventListener('click', () => { if (currentIndex > 0) showQuestion(currentIndex - 1); }));
            nextBtns.forEach(btn => btn.addEventListener('click', () => { if (currentIndex < questions.length - 1) showQuestion(currentIndex + 1); }));
        } 
        else if (type === 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const prevQuestionBtns = section.querySelectorAll('.nav-prev-btn');
            const nextQuestionBtns = section.querySelectorAll('.nav-next-btn');
            let currentJournalIndex = 0;

            function showJournalQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                currentJournalIndex = index;
            }

            prevQuestionBtns.forEach(btn => btn.addEventListener('click', () => { if (currentJournalIndex > 0) showJournalQuestion(currentJournalIndex - 1); }));
            nextQuestionBtns.forEach(btn => btn.addEventListener('click', () => { if (currentJournalIndex < questions.length - 1) showJournalQuestion(currentJournalIndex + 1); }));
            
            questions.forEach(qBlock => {
                const transBtns = qBlock.querySelectorAll('.trans-tracker-btn');
                const transBlocks = qBlock.querySelectorAll('.journal-trans-block');
                const internalPrevBtns = qBlock.querySelectorAll('.btn-prev-trans');
                const internalNextBtns = qBlock.querySelectorAll('.btn-next-trans');

                const switchTransaction = (idx) => {
                      transBlocks.forEach(b => b.classList.add('hidden'));
                      if(transBlocks[idx]) transBlocks[idx].classList.remove('hidden');
                      transBtns.forEach((b, bIdx) => {
                          if (bIdx === idx) {
                              b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-blue-100 border-l-4 border-blue-600 text-blue-800';
                          } else {
                              b.className = b.dataset.isAnswered === "true"
                                  ? 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100'
                                  : 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                          }
                      });
                };
                
                transBtns.forEach((btn, idx) => btn.addEventListener('click', () => switchTransaction(idx)));
                internalPrevBtns.forEach(btn => btn.addEventListener('click', () => switchTransaction(parseInt(btn.dataset.targetIdx))));
                internalNextBtns.forEach(btn => btn.addEventListener('click', () => switchTransaction(parseInt(btn.dataset.targetIdx))));
            });
        }
    });

    form.addEventListener('input', checkCompletion);
    
    function checkCompletion() {
        let allAnswered = true;
        for (const q of questionData) {
            let isQuestionAnswered = false;
            if (q.type === 'Multiple Choice') {
                const checked = form.querySelector(`input[name="${q.uiId}"]:checked`);
                if (checked || document.querySelector(`input[name="${q.uiId}"][disabled]:checked`)) isQuestionAnswered = true;
                else allAnswered = false;
                
                const trackerBtn = document.querySelector(`button[data-target-question="${q.uiId}"]`);
                if (trackerBtn) {
                    trackerBtn.dataset.isAnswered = isQuestionAnswered ? "true" : "false";
                    if (!trackerBtn.classList.contains('bg-blue-600')) {
                        trackerBtn.className = isQuestionAnswered 
                            ? "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-bold flex items-center justify-center"
                            : "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                    }
                }
            } else if (q.type === 'Problem Solving') {
                const val = form.querySelector(`textarea[name="${q.uiId}"]`).value;
                if (val && val.trim() !== '') isQuestionAnswered = true;
                else allAnswered = false;

                const trackerBtn = document.querySelector(`button[data-target-question="${q.uiId}"]`);
                if (trackerBtn) {
                    trackerBtn.dataset.isAnswered = isQuestionAnswered ? "true" : "false";
                    if (!trackerBtn.classList.contains('bg-blue-600')) {
                        trackerBtn.className = isQuestionAnswered
                            ? "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-bold flex items-center justify-center"
                            : "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                    }
                }
            } else if (q.type === 'Journalizing') {
                const transBtns = document.querySelectorAll(`button[data-target-trans^="${q.uiId}_t"]`);
                let questionHasData = false;
                transBtns.forEach(btn => {
                    const transUiId = btn.dataset.targetTrans;
                    const inputs = form.querySelectorAll(`input[name^="${transUiId}"]`);
                    let transHasData = false;
                    inputs.forEach(i => { if(i.value) transHasData = true; });
                    btn.dataset.isAnswered = transHasData ? "true" : "false";
                    if(transHasData) questionHasData = true;
                    if (!btn.classList.contains('bg-blue-100')) {
                        btn.className = transHasData
                            ? 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100'
                            : 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                    }
                });
                if(!questionHasData) allAnswered = false; 
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

    checkCompletion();
    submitBtn.addEventListener('click', () => submitQuiz(activityData, questionData, user, true)); 
    saveBtn.addEventListener('click', () => saveProgress(activityData, questionData, user));
}

// --- SAVE PROGRESS ---
async function saveProgress(activityData, questionData, user) {
    if(!confirm("Save progress? Saved answers cannot be edited later.")) return;

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    const questionsTaken = {};

    questionData.forEach(q => {
        let hasValue = false;
        let value = null;

        if(q.type === 'Multiple Choice') { 
            value = formData.get(q.uiId);
            if (value !== null && value !== undefined) hasValue = true;
        } else if (q.type === 'Problem Solving') {
            value = formData.get(q.uiId);
            if (value && value.trim() !== '') hasValue = true;
        } else if (q.type === 'Journalizing') {
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            let currentRow = {};
            let hasRowData = false;
            inputs.forEach(input => {
                 if(input.value) hasRowData = true;
                 const name = input.name;
                 const parts = name.split('_'); 
                 const tIdx = parts[2];
                 const rIdx = parts[3];
                 const field = parts[4];
                 const key = `${tIdx}_${rIdx}`;
                 if(!currentRow[key]) currentRow[key] = {};
                 currentRow[key][field] = input.value;
            });
            if (hasRowData) { value = currentRow; hasValue = true; }
        }

        if (document.querySelector(`[name="${q.uiId}"][disabled]`)) {
             if (q.type === 'Multiple Choice') {
                 const chk = document.querySelector(`input[name="${q.uiId}"]:checked`);
                 if(chk) { value = chk.value; hasValue = true; }
             } else if (q.type === 'Problem Solving') {
                 const txt = document.querySelector(`textarea[name="${q.uiId}"]`);
                 if(txt) { value = txt.value; hasValue = true; }
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
                 value = currentRow; hasValue = true;
             }
        }

        if (hasValue) {
            answers[q.uiId] = value;
            questionsTaken[q.uiId] = {
                id: q.dbId,
                questionText: q.questionText,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                options: q.options || null,
                transactions: q.transactions || null,
                instructions: q.instructions || null
            };
        }
    });

    const collectionName = `results_${activityData.activityname}_${activityData.section}`;
    const docName = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;

    const payload = {
        status: "in_progress",
        activityId: activityData.id,
        activityName: activityData.activityname,
        studentName: `${user.LastName}, ${user.FirstName}`,
        studentId: user.Idnumber,
        CN: user.CN,
        section: activityData.section,
        timestamp: new Date().toISOString(),
        answers: JSON.parse(JSON.stringify(answers)),
        questionsTaken: JSON.parse(JSON.stringify(questionsTaken)),
        sectionScores: {}
    };

    try {
        await setDoc(doc(db, collectionName, docName), payload);
        alert("Progress saved! Page will reload to lock saved answers.");
        renderQuizRunner(activityData, user); 
    } catch (e) {
        console.error("Save Error:", e);
        alert("Error saving: " + e.message);
    }
}

// --- SUBMIT QUIZ (FINAL) ---
async function submitQuiz(activityData, questionData, user, isFinal = false) {
    if(!confirm("Are you sure you want to submit? This is final.")) return;
    
    if(currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    sectionIntervals.forEach(i => clearInterval(i));

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    const questionsTaken = {};

    questionData.forEach(q => {
        questionsTaken[q.uiId] = {
            questionText: q.questionText,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            type: q.type,
            options: q.options || null,
            transactions: q.transactions || null,
            instructions: q.instructions || null 
        };

        let val = null;
        if(q.type === 'Multiple Choice') val = formData.get(q.uiId);
        else if(q.type === 'Problem Solving') val = formData.get(q.uiId);
        else if(q.type === 'Journalizing') {
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
             val = currentRow;
        }

        if (!val || (typeof val === 'string' && val === '')) {
             const disabledInput = document.querySelector(`[name="${q.uiId}"][disabled]`);
             if (disabledInput) {
                 if (q.type === 'Multiple Choice') {
                     const chk = document.querySelector(`input[name="${q.uiId}"]:checked`);
                     if(chk) val = chk.value;
                 } else if (q.type === 'Problem Solving') {
                     val = disabledInput.value;
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
                     val = currentRow;
                 }
             }
        }
        
        answers[q.uiId] = val;
    });

    const sectionScores = {};

    activityData.testQuestions.forEach((section, index) => {
        let sectionScore = 0;
        let sectionMaxScore = 0;
        const sectionQs = questionData.filter(q => q.uiId.startsWith(`s${index}_`));

        sectionQs.forEach(q => {
            const studentAnswer = answers[q.uiId];

            if (section.type === "Multiple Choice") {
                sectionMaxScore++;
                const isZeroMatch = (String(studentAnswer) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                if (String(studentAnswer) === String(q.correctAnswer) || isZeroMatch) sectionScore++;
            } 
            else if (section.type === "Problem Solving") {
                sectionMaxScore++;
                if (studentAnswer && q.correctAnswer && studentAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) sectionScore++;
            } 
            else if (section.type === "Journalizing") {
                const transactions = q.transactions || [];
                transactions.forEach((trans, tIdx) => {
                    const solRows = trans.solution || [];
                    const rowCount = trans.rows || 2;

                    for(let r=0; r < rowCount; r++) {
                        const cellKey = `t${tIdx}_r${r}`;
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        const solRow = solRows[r] || null;

                        const sDate = cellData.date.trim();
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++; 
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 let isDateCorrect = false;
                                 if (tIdx === 0) {
                                     isDateCorrect = (sDate === solRow.date);
                                 } else {
                                     const parts = solRow.date ? solRow.date.split(' ') : [];
                                     const solDay = parts.length > 1 ? parts[parts.length - 1] : parts[0];
                                     isDateCorrect = (sDate === solDay);
                                 }
                                 if (sDate.match(expectedRegex) && isDateCorrect) sectionScore++;
                             } else {
                                 if (sDate === '') sectionScore++;
                             }
                        } else {
                            if (sDate !== '') sectionScore--; 
                        }

                        const sAcct = cellData.acct;
                        if (solRow) {
                             sectionMaxScore++; 
                             if (solRow.isExplanation) {
                                 if (sAcct.match(/^\s{5,8}\S/)) sectionScore++;
                             } else {
                                 const cleanInput = sAcct.trim();
                                 const cleanSol = solRow.account.trim();
                                 if (cleanInput.toLowerCase() === cleanSol.toLowerCase()) {
                                     if (solRow.credit) {
                                         if (sAcct.match(/^\s{3,5}\S/)) sectionScore++;
                                     } else {
                                         if (sAcct.match(/^\S/)) sectionScore++;
                                     }
                                 }
                             }
                        }

                        const sDr = cellData.dr.trim();
                        const cleanSolDr = (solRow && solRow.debit) ? Number(solRow.debit).toFixed(2) : "";
                        if (solRow && !solRow.isExplanation && cleanSolDr !== "") {
                            sectionMaxScore++; 
                            if (sDr === cleanSolDr && sDr.match(/^\d+\.\d{2}$/)) sectionScore++;
                        } else {
                            if (sDr !== "") sectionScore--; 
                        }

                        const sCr = cellData.cr.trim();
                        const cleanSolCr = (solRow && solRow.credit) ? Number(solRow.credit).toFixed(2) : "";
                        if (solRow && !solRow.isExplanation && cleanSolCr !== "") {
                            sectionMaxScore++; 
                            if (sCr === cleanSolCr && sCr.match(/^\d+\.\d{2}$/)) sectionScore++;
                        } else {
                            if (sCr !== "") sectionScore--; 
                        }
                    }
                });
            }
        });

        sectionScores[index] = {
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0,
            letterGrade: getLetterGrade(sectionScore, sectionMaxScore),
            type: section.type
        };
    });

    const collectionName = `results_${activityData.activityname}_${activityData.section}`;
    const docName = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
    
    const submissionPayload = {
        status: "final",
        activityId: activityData.id,
        activityName: activityData.activityname,
        studentName: `${user.LastName}, ${user.FirstName}`,
        studentId: user.Idnumber,
        CN: user.CN,
        section: activityData.section,
        timestamp: new Date().toISOString(),
        answers: JSON.parse(JSON.stringify(answers, (k, v) => v === undefined ? null : v)),
        questionsTaken: JSON.parse(JSON.stringify(questionsTaken, (k, v) => v === undefined ? null : v)),
        sectionScores: sectionScores
    };

    try {
        await setDoc(doc(db, collectionName, docName), submissionPayload);
        
        await setDoc(doc(db, "results_list", collectionName), { 
            created: new Date().toISOString(),
            activityName: activityData.activityname,
            section: activityData.section
        });

        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600 bg-white">
                <i class="fas fa-check-circle text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Submitted Successfully</h2>
                <p class="text-gray-500 mt-2 text-lg">Your response has been saved.</p>
                <div class="mt-8 flex gap-4">
                    <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="px-6 py-3 bg-gray-600 text-white rounded shadow hover:bg-gray-700">Back to List</button>
                    <button onclick="window.location.reload()" class="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">View Results</button>
                </div>
            </div>
        `;
    } catch (e) {
        console.error("Submission Error:", e);
        alert("Error saving to server: " + e.message);
    }
}

// --- RENDER RESULT PREVIEW (Restored) ---
async function renderQuizResultPreview(activityData, user, resultData) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Loading Results...</span></div>';

    let contentHtml = '';
    
    // Legacy Polyfill
    let savedQuestions = resultData.questionsTaken;
    if (!savedQuestions || Object.keys(savedQuestions).length === 0) {
        savedQuestions = {};
        const answers = resultData.answers || {};
        
        const ensureQ = (key, type) => {
            if (!savedQuestions[key]) {
                savedQuestions[key] = {
                    uiId: key,
                    type: type,
                    questionText: "Legacy Submission",
                    correctAnswer: "N/A",
                    explanation: "Details not available",
                    options: [], 
                    transactions: [],
                    instructions: null
                };
            }
            return savedQuestions[key];
        };

        Object.keys(answers).forEach(k => {
            const parts = k.split('_'); 
            if (parts.length < 2) return;
            const sectionIdx = parseInt(parts[0].replace('s',''));
            const qKey = `${parts[0]}_${parts[1]}`;
            const sectionType = activityData.testQuestions[sectionIdx] ? activityData.testQuestions[sectionIdx].type : 'Unknown';
            const qObj = ensureQ(qKey, sectionType);

            if (sectionType === 'Journalizing' && parts.length >= 4) {
                const tIdx = parseInt(parts[2].replace('t',''));
                const rIdx = parseInt(parts[3].replace('r',''));
                if (!qObj.transactions[tIdx]) qObj.transactions[tIdx] = { date: `Trans ${tIdx+1}`, description: "Legacy", rows: 0 };
                if (rIdx >= qObj.transactions[tIdx].rows) qObj.transactions[tIdx].rows = rIdx + 1;
            } 
        });
    }

    const questionsBySection = {};
    Object.keys(savedQuestions).forEach(key => {
        const sectionIdx = key.split('_')[0].replace('s',''); 
        if(!questionsBySection[sectionIdx]) questionsBySection[sectionIdx] = [];
        questionsBySection[sectionIdx].push({ uiId: key, ...savedQuestions[key] });
    });

    // --- RENDER SECTIONS ---
    activityData.testQuestions.forEach((section, index) => {
        const sectionQuestions = questionsBySection[index] || [];
        
        sectionQuestions.sort((a, b) => {
            const aIdx = parseInt(a.uiId.split('_')[1].replace('q',''));
            const bIdx = parseInt(b.uiId.split('_')[1].replace('q',''));
            return aIdx - bIdx;
        });

        // Calculate score from saved data
        const scoreData = resultData.sectionScores ? resultData.sectionScores[index] : { score: 0, maxScore: 0 };
        let sectionBodyHtml = '';

        if (sectionQuestions.length === 0) {
            sectionBodyHtml += `<p class="text-gray-400 italic">No data available for this section.</p>`;
        }

        if (section.type !== "Journalizing") {
            sectionBodyHtml += `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics || 'N/A'}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Instruction:</span> ${section.instructions || "Refer to specific question details."}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}
                        </div>
                    </div>
                </div>
            `;
        }

        sectionQuestions.forEach((q, qIdx) => {
            const studentAnswer = resultData.answers ? resultData.answers[q.uiId] : null;
            const instructionText = (section.type === 'Journalizing' && q.instructions) ? q.instructions : (section.instructions || "Refer to specific question details.");

            if (section.type === "Multiple Choice") {
                // Matching logic including the zero/null edge case
                const isCorrect = String(studentAnswer) === String(q.correctAnswer) || 
                                  (String(studentAnswer) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                
                const optionsHtml = (q.options || []).map((opt, optIdx) => {
                    const isSelected = String(studentAnswer) === String(optIdx);
                    const isOptCorrect = String(q.correctAnswer) === String(optIdx) || (String(optIdx) === "0" && !q.correctAnswer);
                    
                    let bgClass = "bg-white border-gray-200";
                    let icon = "";
                    if (isSelected && isOptCorrect) { bgClass = "bg-green-100 border-green-400 font-bold text-green-800"; icon = '<i class="fas fa-check text-green-600 ml-auto"></i>'; }
                    else if (isSelected && !isOptCorrect) { bgClass = "bg-red-100 border-red-400 text-red-800"; icon = '<i class="fas fa-times text-red-600 ml-auto"></i>'; }
                    else if (!isSelected && isOptCorrect) { bgClass = "bg-green-50 border-green-300 text-green-800 border-dashed"; icon = '<i class="fas fa-check text-green-600 ml-auto opacity-50"></i>'; }

                    return `<div class="p-2 border rounded mb-1 text-sm flex items-center ${bgClass}">${opt} ${icon}</div>`;
                }).join('');

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4">
                            <p class="font-bold text-gray-800 mb-2">${qIdx+1}. ${q.questionText}</p>
                            <div class="mb-3">${optionsHtml}</div>
                            <div class="bg-gray-50 p-2 rounded text-xs text-gray-600">
                                <strong>Explanation:</strong> ${q.explanation || 'No explanation provided.'}
                            </div>
                        </div>
                    </div>`;
            } 
            else if (section.type === "Problem Solving") {
                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4 space-y-4">
                            <p class="font-bold text-gray-800">${qIdx+1}. ${q.questionText}</p>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-blue-600">Your Answer:</p>
                                <div class="p-2 bg-blue-50 border border-blue-100 rounded text-sm font-mono whitespace-pre-wrap">${studentAnswer || "No Answer"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-green-600">Answer Key:</p>
                                <div class="p-2 bg-green-50 border border-green-100 rounded text-sm font-mono whitespace-pre-wrap">${q.correctAnswer || "N/A"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-gray-600">Explanation:</p>
                                <div class="bg-gray-50 p-2 rounded text-xs text-gray-700 whitespace-pre-wrap">${q.explanation || "No explanation provided."}</div>
                            </div>
                        </div>
                    </div>`;
            }
            else if (section.type === "Journalizing") {
                let transactionsHtml = '';
                const transactions = q.transactions || [];

                transactions.forEach((trans, tIdx) => {
                    const rowCount = trans.rows || 2;
                    let studentRowsHtml = '';
                    let solutionRowsHtml = ''; 
                    const solRows = trans.solution || [];

                    for(let r=0; r < rowCount; r++) {
                        const cellKey = `t${tIdx}_r${r}`;
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        
                        studentRowsHtml += `
                        <tr class="border-b border-gray-100 bg-white">
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-24">${cellData.date}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-auto">${cellData.acct}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-28 text-right">${cellData.dr}</td>
                            <td class="p-1.5 font-mono text-xs align-middle w-28 text-right">${cellData.cr}</td>
                        </tr>`;
                    }

                    if (trans.solution && Array.isArray(trans.solution)) {
                        trans.solution.forEach(solRow => {
                            if (solRow.isExplanation) {
                                solutionRowsHtml += `<tr class="border-b border-gray-100 bg-green-50/30"><td colspan="4" class="p-1.5 font-mono text-xs italic text-gray-500 pl-8">(${solRow.account})</td></tr>`;
                            } else {
                                const indent = solRow.credit ? '&nbsp;&nbsp;&nbsp;' : '';
                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-white">
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right">${solRow.date || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left font-semibold">${indent}${solRow.account || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right">${solRow.debit || ''}</td>
                                    <td class="p-1.5 font-mono text-xs text-right">${solRow.credit || ''}</td>
                                </tr>`;
                            }
                        });
                    } else {
                        solutionRowsHtml = '<tr><td colspan="4" class="p-2 text-center text-xs italic text-gray-400">No solution key available.</td></tr>';
                    }

                    transactionsHtml += `
                        <div class="mb-6 border border-gray-300 rounded overflow-hidden">
                            <div class="bg-gray-100 px-3 py-2 border-b border-gray-300">
                                <span class="font-bold text-gray-700 text-sm">Trans ${tIdx + 1}:</span>
                                <span class="text-xs text-gray-600 ml-2 italic">${trans.date} - ${trans.description}</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                                <div>
                                    <div class="bg-blue-50 py-1 px-3 text-[10px] font-bold text-blue-800 uppercase border-b border-blue-100">Your Answer</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead><tr class="bg-gray-5 text-[10px] text-gray-500 uppercase border-b border-gray-200"><th class="w-24">Date</th><th>Account</th><th class="w-28 text-right">Dr</th><th class="w-28 text-right">Cr</th></tr></thead>
                                        <tbody>${studentRowsHtml}</tbody>
                                    </table>
                                </div>
                                <div>
                                    <div class="bg-green-50 py-1 px-3 text-[10px] font-bold text-green-800 uppercase border-b border-green-100">Solution</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead><tr class="bg-green-50/50 text-[10px] text-green-700 uppercase border-b border-green-100"><th class="w-24">Date</th><th>Account</th><th class="w-28 text-right">Dr</th><th class="w-28 text-right">Cr</th></tr></thead>
                                        <tbody>${solutionRowsHtml}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    `;
                });

                const stickyHeader = `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <div class="border-b pb-1"><span class="font-bold text-blue-800">Topic:</span> ${section.topics || 'N/A'}</div>
                        <div class="border-b pb-1"><span class="font-bold text-blue-800">Instruction:</span> ${instructionText}</div>
                        <div class="border-b pb-1"><span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}</div>
                    </div>
                </div>`;

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        ${stickyHeader}
                        <div class="p-4">${transactionsHtml}</div>
                    </div>`;
            }
        });

        const percent = scoreData.maxScore > 0 ? (scoreData.score / scoreData.maxScore) * 100 : 0;
        const letter = getLetterGrade(scoreData.score, scoreData.maxScore);

        contentHtml += `
            <div class="mb-8 border-b border-gray-300 pb-4">
                <div class="flex justify-between items-center mb-2">
                     <h3 class="font-bold text-lg text-blue-900 uppercase">Test ${index + 1}: ${section.type}</h3>
                     <span class="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">
                       Score: ${scoreData.score} / ${scoreData.maxScore} | ${percent.toFixed(2)}% | ${letter}
                     </span>
                </div>
                ${sectionBodyHtml}
            </div>
        `;
    });

    const dateTaken = resultData.timestamp ? new Date(resultData.timestamp).toLocaleString() : "N/A";
    
    container.innerHTML = `
        <div class="h-full bg-gray-100 overflow-y-auto p-4 md:p-8">
            <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="bg-blue-900 text-white p-6 text-center">
                    <h1 class="text-2xl font-bold uppercase tracking-wider">FABM 1</h1>
                    <h2 class="text-xl font-semibold mt-1">${activityData.activityname}</h2>
                </div>
                <div class="bg-blue-50 p-4 border-b border-gray-200 text-sm md:text-base">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <div><strong>Class Number:</strong> ${user.CN || 'N/A'}</div>
                        <div><strong>Date:</strong> ${dateTaken}</div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between">
                        <div><strong>Name:</strong> ${user.LastName}, ${user.FirstName}</div>
                        <div><strong>Section:</strong> ${activityData.section}</div>
                    </div>
                </div>
                <div class="p-6 bg-gray-50/50">
                    ${contentHtml}
                </div>
                <div class="p-4 bg-gray-50 text-center border-t border-gray-200">
                    <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                        Back to Activity List
                    </button>
                </div>
            </div>
        </div>
    `;
}
