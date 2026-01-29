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

let quizTimerInterval = null;
let currentAntiCheat = null;

export async function renderQuizzesAndActivities(containerElement, user) {
    const contentArea = document.getElementById('content-area');
    
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

    const sidebar = document.getElementById('qa-sidebar');
    document.getElementById('qa-toggle-sidebar').addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
    });
    document.getElementById('qa-close-sidebar').addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    await loadStudentActivities(user);
}

async function loadStudentActivities(user) {
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
            data.id = docSnap.id; 
            
            if (user.role === 'student' && data.section !== user.Section) {
                return; 
            }
            
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
                if (isFuture && user.role !== 'teacher') {
                    alert(`This activity starts on ${start.toLocaleString()}`);
                } else {
                    if(quizTimerInterval) clearInterval(quizTimerInterval); 
                    if(currentAntiCheat) currentAntiCheat.stopMonitoring();
                    
                    renderQuizRunner(data, user);
                    document.getElementById('qa-sidebar').classList.add('-translate-x-full');
                }
            };

            listContainer.appendChild(card);
        });
        
        if (listContainer.innerHTML === '') {
             listContainer.innerHTML = '<p class="text-center text-gray-400 mt-4 text-sm">No activities available for your section.</p>';
        }

    } catch (e) {
        console.error("Error loading activities:", e);
        listContainer.innerHTML = '<p class="text-center text-red-400 mt-4 text-sm">Error loading data.</p>';
    }
}

async function renderQuizRunner(data, user) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Checking Permissions...</span></div>';
    
    if (user.role !== 'teacher' && data.students && !data.students.includes(user.Idnumber)) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-red-600 bg-white p-8 text-center">
                <i class="fas fa-user-slash text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Access Denied</h2>
                <p class="text-gray-500 mt-2 text-lg">You are not included in the list of students for this activity.</p>
                <p class="text-gray-800 mt-4 font-bold">You are marked as ABSENT.</p>
                <p class="text-gray-500 text-sm mt-2">Please contact your teacher if you believe this is an error.</p>
            </div>
        `;
        return;
    }

    const collectionName = `results_${data.activityname}_${data.section}`;
    const docId = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
    
    try {
        const resultDoc = await getDoc(doc(db, collectionName, docId));
        if (resultDoc.exists()) {
            await renderQuizResultPreview(data, user, resultDoc.data());
            return;
        }
    } catch (e) {
        console.error("Error checking submission:", e);
    }

    const now = new Date();
    const expireTime = new Date(data.dateTimeExpire);

    if (now > expireTime && user.role !== 'teacher') {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-gray-500 bg-white p-8 text-center">
                <i class="fas fa-calendar-times text-6xl mb-6 text-red-400"></i>
                <h2 class="text-3xl font-bold text-gray-700">Activity Expired</h2>
                <p class="mt-2 text-lg">The due date for this activity has passed.</p>
                <p class="text-sm mt-4 text-gray-400 font-bold">No submission recorded.</p>
                <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="mt-6 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                    Back to List
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Generating Activity...</span></div>';
    
    const generatedContent = await generateQuizContent(data);

    const antiCheatHtml = `
        <div id="black-curtain" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background-color:black; z-index:9999;"></div>
        <div id="cheat-lockout" class="hidden fixed inset-0 bg-gray-900 z-[100] flex items-center justify-center text-white p-6 text-center">
            <div class="max-w-md w-full">
                <div class="text-6xl mb-4">⚠️</div>
                <h1 class="text-3xl font-bold mb-4 text-red-500">Activity Paused</h1>
                <p class="text-lg mb-6">Focus lost. Navigation away is monitored.</p>
                <p class="text-sm text-red-300 italic mb-4">Warning: Resuming may penalize your progress.</p>
                <button id="btn-unlock" onclick="window.handleUnlockClick()" class="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xl shadow-lg transition-transform transform active:scale-95">
                    Resume Activity (3)
                </button>
            </div>
        </div>
    `;

    container.innerHTML = `
        ${antiCheatHtml}
        <div class="flex flex-col h-full bg-gray-100">
            <div class="bg-blue-800 text-white p-2 flex justify-between items-center shadow-md z-30 sticky top-0">
                 <h1 class="text-xl md:text-2xl font-bold truncate pl-2">${data.activityname}</h1>
                 <div class="flex items-center space-x-2 bg-blue-900 px-3 py-1 rounded border border-blue-700">
                    <i class="fas fa-stopwatch text-yellow-400"></i>
                    <span id="quiz-timer" class="font-mono text-lg font-bold">--:--:--</span>
                 </div>
            </div>
            
            <form id="quiz-form" class="flex-1 flex flex-col overflow-y-auto relative scrollbar-thin">
                ${generatedContent.html}
            </form>
        </div>
    `;

    initializeQuizManager(data, generatedContent.data, user);
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
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
        <div class="ml-auto pl-4 py-2">
            <button type="button" id="btn-submit-quiz" disabled class="bg-gray-400 cursor-not-allowed text-white text-sm font-bold px-4 py-1.5 rounded shadow transition whitespace-nowrap">
                Submit
            </button>
        </div>
    </div>`;

    sectionsHtml = `<div class="w-full max-w-7xl mx-auto p-2 md:p-4">`; 

    for (const [index, section] of activityData.testQuestions.entries()) {
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        const isHidden = index === 0 ? '' : 'hidden'; 

        sectionsHtml += `<div id="test-section-${index}" class="test-section-panel w-full ${isHidden}" data-section-type="${section.type}">`;

        let questions = [];
        const count = parseInt(section.noOfQuestions) || 5;

        // REVISED SELECTION LOGIC: Pull from local JS files instead of Firestore
        let localSource = [];
        if (section.type === "Multiple Choice") localSource = qbMerchMultipleChoice;
        else if (section.type === "Problem Solving") localSource = qbMerchProblemSolving;
        else if (section.type === "Journalizing") localSource = qbMerchJournalizing;

        // Flatten the array of objects into a standard array of questions
        const flattenedCandidates = localSource.map(obj => {
            const id = Object.keys(obj)[0];
            return { id, ...obj[id] };
        });

        // Filter by subject and topic
        let candidates = flattenedCandidates.filter(q => 
            q.subject === "FABM1" && sectionTopics.includes(q.topic)
        );

        // Randomize and slice
        candidates.sort(() => 0.5 - Math.random());
        questions = candidates.slice(0, count);
        
        let questionsHtml = '';
        let trackerHtml = '';

        questions.forEach((q, qIdx) => {
            const uiId = `s${index}_q${qIdx}`;
            
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
                            <span class="font-bold text-blue-800">Type:</span> ${section.type}
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
                
                trackerHtml += `
                    <button type="button" class="tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 text-sm font-bold flex items-center justify-center hover:bg-blue-100 focus:outline-none ${qIdx===0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700'}" data-target-question="${uiId}">
                        ${qIdx + 1}
                    </button>
                `;

                let innerContent = '';
                if (section.type === "Multiple Choice") {
                    const opts = q.options ? q.options.map((opt, optIdx) => `
                        <label class="flex items-start p-3 border border-gray-200 rounded hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-2 shadow-sm">
                            <input type="radio" name="${uiId}" value="${optIdx}" class="input-checker mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0">
                            <span class="text-sm text-gray-700">${opt}</span>
                        </label>
                    `).join('') : '';
                    
                    innerContent = `<div class="flex flex-col mt-2">${opts}</div>`;
                } else {
                    innerContent = `
                        <textarea name="${uiId}" class="input-checker w-full mt-2 p-3 border border-gray-300 rounded h-32 md:h-48 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-y" placeholder="Type your answer here..."></textarea>
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
                const jHiddenClass = qIdx === 0 ? '' : 'hidden'; 
                
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
                        rows += `
                        <tr class="border-b border-gray-200 bg-white">
                            <td class="p-0 border-r border-gray-300 w-24"><input type="text" name="${transUiId}_r${r}_date" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder=""></td>
                            <td class="p-0 border-r border-gray-300 w-auto"><input type="text" name="${transUiId}_r${r}_acct" class="input-checker w-full p-2 text-left outline-none bg-transparent font-mono text-sm" placeholder=""></td>
                            <td class="p-0 border-r border-gray-300 w-28"><input type="number" name="${transUiId}_r${r}_dr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm" style="appearance: textfield; -moz-appearance: textfield; -webkit-appearance: none;" placeholder=""></td>
                            <td class="p-0 w-28"><input type="number" name="${transUiId}_r${r}_cr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm" style="appearance: textfield; -moz-appearance: textfield; -webkit-appearance: none;" placeholder=""></td>
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
                    <div id="${uiId}" class="question-block w-full ${jHiddenClass}" data-is-journal="true">
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
            const sectionHeaderHtml = `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <h3 class="text-lg font-semibold border-b pb-1 text-blue-900">
                            <span class="font-bold text-blue-800">Type:</span> ${section.type}
                        </h3>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Instruction:</span> ${section.instructions || "Select the best answer."}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}
                        </div>
                    </div>
                </div>
            `;

            sectionsHtml += `
                ${sectionHeaderHtml}
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
            sectionsHtml += `
                <div class="w-full">
                    ${questionsHtml}
                </div>
            `;
        }

        sectionsHtml += `</div>`; 
    }

    sectionsHtml += `</div>`; 

    return { html: tabsHtml + sectionsHtml, data: questionData };
}

// --- QUIZ MANAGER (INTERACTIVITY) ---

function initializeQuizManager(activityData, questionData, user) {
    const expireTime = new Date(activityData.dateTimeExpire).getTime();
    const timerDisplay = document.getElementById('quiz-timer');
    const submitBtn = document.getElementById('btn-submit-quiz');
    const form = document.getElementById('quiz-form');

    // --- ANTICHEAT LOGIC ---
    const highStakesKeywords = ['Summative', 'Prelim', 'Midterm', 'Semi-final', 'Final', 'Performance'];
    const isHighStakes = highStakesKeywords.some(keyword => activityData.activityname.includes(keyword));
    
    // Stop any existing anti-cheat before starting new one
    if (currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    if (isHighStakes) {
        currentAntiCheat = new AntiCheatSystem({
            onCheatDetected: () => {
                // Penalty Logic: In this context, we reload the runner to force a restart/refresh
                if(quizTimerInterval) clearInterval(quizTimerInterval);
                alert("Anti-Cheat Violation Detected! The activity will now reload.");
                // Simply calling renderQuizRunner again acts as a refresh
                renderQuizRunner(activityData, user);
            }
        });
        
        // Expose unlock function for the HTML button
        window.handleUnlockClick = () => currentAntiCheat.handleUnlockClick();
        
        currentAntiCheat.startMonitoring();
    }
    // -----------------------

    function updateTimer() {
        const now = new Date().getTime();
        const dist = expireTime - now;

        if (dist < 0) {
            clearInterval(quizTimerInterval);
            timerDisplay.innerHTML = "EXPIRED";
            timerDisplay.parentElement.classList.add('bg-red-600');
            alert("Time is up! Submitting answers now.");
            submitQuiz(activityData, questionData, user); // Auto submit
            return;
        }

        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${h > 0 ? h + ':' : ''}${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }
    updateTimer(); 
    quizTimerInterval = setInterval(updateTimer, 1000);

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

    sections.forEach(section => {
        const type = section.dataset.sectionType;
        
        if (type !== 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const trackers = section.querySelectorAll('.tracker-btn');
            const prevBtns = section.querySelectorAll('.nav-prev-btn');
            const nextBtns = section.querySelectorAll('.nav-next-btn');
            
            let currentIndex = 0;

            function showQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                trackers.forEach((t, i) => {
                    if (i === index) {
                        t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-blue-600 bg-blue-600 text-white font-bold flex items-center justify-center ring-2 ring-blue-300";
                    } else {
                        if (t.dataset.isAnswered === "true") {
                             t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                             t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
                    }
                });
                currentIndex = index;
            }

            trackers.forEach((t, idx) => {
                t.addEventListener('click', () => showQuestion(idx));
            });

            prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentIndex > 0) showQuestion(currentIndex - 1);
                });
            });
            
            nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentIndex < questions.length - 1) showQuestion(currentIndex + 1);
                });
            });
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

            // Bind Previous Question Buttons
            prevQuestionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentJournalIndex > 0) showJournalQuestion(currentJournalIndex - 1);
                });
            });

            // Bind Next Question Buttons
            nextQuestionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentJournalIndex < questions.length - 1) showJournalQuestion(currentJournalIndex + 1);
                });
            });
            
            // Internal Transaction Navigation
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
                              if (b.dataset.isAnswered === "true") {
                                  b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100';
                              } else {
                                  b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                              }
                          }
                      });
                };
                
                transBtns.forEach((btn, idx) => {
                    btn.addEventListener('click', () => switchTransaction(idx));
                });

                internalPrevBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const targetIdx = parseInt(btn.dataset.targetIdx);
                        switchTransaction(targetIdx);
                    });
                });

                internalNextBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const targetIdx = parseInt(btn.dataset.targetIdx);
                        switchTransaction(targetIdx);
                    });
                });
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
                if (checked) isQuestionAnswered = true;
                else allAnswered = false;
                
                const trackerBtn = document.querySelector(`button[data-target-question="${q.uiId}"]`);
                if (trackerBtn) {
                    trackerBtn.dataset.isAnswered = isQuestionAnswered ? "true" : "false";
                    if (!trackerBtn.classList.contains('bg-blue-600')) {
                        if (isQuestionAnswered) {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
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
                        if (isQuestionAnswered) {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
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
                        if (transHasData) {
                            btn.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100';
                        } else {
                            btn.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                        }
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

    submitBtn.addEventListener('click', () => submitQuiz(activityData, questionData, user));
}

async function submitQuiz(activityData, questionData, user) {
    if(!confirm("Are you sure you want to submit your answers?")) return;
    
    // Stop AntiCheat
    if(currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    if(quizTimerInterval) clearInterval(quizTimerInterval);

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

    const sectionScores = {};

    activityData.testQuestions.forEach((section, index) => {
        let sectionScore = 0;
        let sectionMaxScore = 0;

        const sectionQs = questionData.filter(q => q.uiId.startsWith(`s${index}_`));

        sectionQs.forEach(q => {
            const studentAnswer = answers[q.uiId];

            if (section.type === "Multiple Choice") {
                sectionMaxScore++;
                // FIXED: Treat matching strings OR student "0" matching null answer key as correct
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
                        // FIXED: Adjusted key format to match saved data (t0_r0 instead of 0_0)
                        const cellKey = `t${tIdx}_r${r}`;
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        const solRow = solRows[r] || null;

                        const sDate = cellData.date.trim();
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++; 
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 
                                 // FIXED: Date validation logic
                                 let isDateCorrect = false;
                                 if (tIdx === 0) {
                                     // First transaction: Must match full date (e.g., "Dec 1")
                                     isDateCorrect = (sDate === solRow.date);
                                 } else {
                                     // Subsequent transactions: Match only the day part of the solution
                                     // Handle "Dec 2" -> "2" or "2" -> "2"
                                     const parts = solRow.date.split(' ');
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

        // Initialize Score Counters
        let sectionScore = 0;
        let sectionMaxScore = 0;
        let sectionBodyHtml = '';

        if (sectionQuestions.length === 0) {
            sectionBodyHtml += `<p class="text-gray-400 italic">No data available for this section.</p>`;
        }

        // FIXED: Add Sticky Header ONCE at the top for Multiple Choice / Problem Solving in Preview too
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

            const instructionText = (section.type === 'Journalizing' && q.instructions) 
                ? q.instructions 
                : (section.instructions || "Refer to specific question details.");

            const stickyHeaderHtml = `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics || 'N/A'}
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
            
            // --- 1. MULTIPLE CHOICE ---
            if (section.type === "Multiple Choice") {
                sectionMaxScore++;
                // FIXED: Check match OR check if student 0 matches null key
                const isCorrect = String(studentAnswer) === String(q.correctAnswer) || 
                                  (String(studentAnswer) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                
                if(isCorrect) sectionScore++;

                const optionsHtml = (q.options || []).map((opt, optIdx) => {
                    const isSelected = String(studentAnswer) === String(optIdx);
                    // FIXED: Correct option is the defined one OR 0 if defined is null
                    const isOptCorrect = String(q.correctAnswer) === String(optIdx) ||
                                         (String(optIdx) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                    
                    let bgClass = "bg-white border-gray-200";
                    let icon = "";
                    
                    if (isSelected && isOptCorrect) { bgClass = "bg-green-100 border-green-400 font-bold text-green-800"; icon = '<i class="fas fa-check text-green-600 ml-auto"></i>'; }
                    else if (isSelected && !isOptCorrect) { bgClass = "bg-red-100 border-red-400 text-red-800"; icon = '<i class="fas fa-times text-red-600 ml-auto"></i>'; }
                    else if (!isSelected && isOptCorrect) { bgClass = "bg-green-50 border-green-300 text-green-800 border-dashed"; icon = '<i class="fas fa-check text-green-600 ml-auto opacity-50"></i>'; }

                    return `<div class="p-2 border rounded mb-1 text-sm flex items-center ${bgClass}">${opt} ${icon}</div>`;
                }).join('');

                // FIXED: Removed stickyHeaderHtml from individual card
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
            
            // --- 2. PROBLEM SOLVING ---
            } else if (section.type === "Problem Solving") {
                sectionMaxScore++;
                const isCorrect = studentAnswer && q.correctAnswer && studentAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                if(isCorrect) sectionScore++;

                // FIXED: Removed stickyHeaderHtml from individual card
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

            // --- 3. JOURNALIZING (FIXED LAYOUT & SCORING) ---
            } else if (section.type === "Journalizing") {
                let transactionsHtml = '';
                const transactions = q.transactions || [];

                transactions.forEach((trans, tIdx) => {
                    const rowCount = trans.rows || 2;
                    let studentRowsHtml = '';
                    let solutionRowsHtml = ''; 

                    const solRows = trans.solution || [];

                    // --- Build Student Answer Table WITH SCORING ---
                    for(let r=0; r < rowCount; r++) {
                        // FIXED: Adjusted key format to match saved data (t0_r0 instead of 0_0)
                        const cellKey = `t${tIdx}_r${r}`; 
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        
                        const solRow = solRows[r] || null;

                        let dateValid = false;
                        let acctValid = false;
                        let drValid = false;
                        let crValid = false;
                        
                        const checkMark = '<i class="fas fa-check text-green-600 text-[10px]"></i>';

                        // === DATE VALIDATION ===
                        const sDate = cellData.date.trim();
                        // 1. Is an answer expected here?
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++; // Expecting answer
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 
                                 // FIXED: Date validation logic matching submitQuiz
                                 let isDateCorrect = false;
                                 if (tIdx === 0) {
                                     isDateCorrect = (sDate === solRow.date);
                                 } else {
                                     const parts = solRow.date.split(' ');
                                     const solDay = parts.length > 1 ? parts[parts.length - 1] : parts[0];
                                     isDateCorrect = (sDate === solDay);
                                 }

                                 if (sDate.match(expectedRegex) && isDateCorrect) {
                                     dateValid = true;
                                     sectionScore++;
                                 }
                             } else {
                                 // Non-first rows should be empty if row exists in solution
                                 if (sDate === '') { dateValid = true; sectionScore++; }
                             }
                        } else {
                            // NOT Expecting Answer
                            if (sDate !== '') {
                                sectionScore--; // DEDUCTION
                            }
                        }

                        // === ACCOUNT / EXPLANATION VALIDATION ===
                        const sAcct = cellData.acct;
                        if (solRow) {
                             sectionMaxScore++; // Expecting answer
                             if (solRow.isExplanation) {
                                 if (sAcct.match(/^\s{5,8}\S/)) { acctValid = true; sectionScore++; }
                             } else {
                                 const cleanInput = sAcct.trim();
                                 const cleanSol = solRow.account.trim();
                                 if (cleanInput.toLowerCase() === cleanSol.toLowerCase()) {
                                     if (solRow.credit) {
                                         if (sAcct.match(/^\s{3,5}\S/)) { acctValid = true; sectionScore++; }
                                     } else {
                                         if (sAcct.match(/^\S/)) { acctValid = true; sectionScore++; }
                                     }
                                 }
                             }
                        }

                        // === DEBIT AMOUNT VALIDATION ===
                        const sDr = cellData.dr.trim();
                        const cleanSolDr = (solRow && solRow.debit) ? Number(solRow.debit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolDr !== "") {
                            sectionMaxScore++; // Expecting Answer
                            if (sDr === cleanSolDr && sDr.match(/^\d+\.\d{2}$/)) {
                                drValid = true;
                                sectionScore++;
                            }
                        } else {
                            // Not Expecting Answer
                            if (sDr !== "") sectionScore--; // Deduction
                        }

                        // === CREDIT AMOUNT VALIDATION ===
                        const sCr = cellData.cr.trim();
                        const cleanSolCr = (solRow && solRow.credit) ? Number(solRow.credit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolCr !== "") {
                            sectionMaxScore++; // Expecting Answer
                            if (sCr === cleanSolCr && sCr.match(/^\d+\.\d{2}$/)) {
                                crValid = true;
                                sectionScore++;
                            }
                        } else {
                            // Not Expecting Answer
                            if (sCr !== "") sectionScore--; // Deduction
                        }

                        // --- MODIFIED LAYOUT: CONCATENATED CHECKMARKS ---
                        // DATE: Checkmark LEFT
                        const dateContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${dateValid ? checkMark : ''} <span>${cellData.date}</span>
                            </div>`;
                        
                        // ACCOUNT: Checkmark RIGHT
                        const acctContent = `
                            <div class="flex justify-between items-center w-full">
                                <span class="whitespace-pre-wrap">${cellData.acct}</span> ${acctValid ? checkMark : ''}
                            </div>`;

                        // DR/CR: Checkmark LEFT
                        const drContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${drValid ? checkMark : ''} <span>${cellData.dr}</span>
                            </div>`;
                        const crContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${crValid ? checkMark : ''} <span>${cellData.cr}</span>
                            </div>`;

                        studentRowsHtml += `
                        <tr class="border-b border-gray-100 bg-white">
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-24">${dateContent}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-auto">${acctContent}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-28">${drContent}</td>
                            <td class="p-1.5 font-mono text-xs align-middle w-28">${crContent}</td>
                        </tr>`;
                    }

                    // --- B. Build Correct Solution Table ---
                    if (trans.solution && Array.isArray(trans.solution)) {
                        trans.solution.forEach(solRow => {
                            if (solRow.isExplanation) {
                                const indentHtml = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-green-50/30">
                                    <td class="p-1.5 border-r border-green-100"></td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left italic text-gray-500">${indentHtml}(${solRow.account})</td>
                                    <td class="p-1.5 border-r border-green-100"></td>
                                    <td class="p-1.5"></td>
                                </tr>`;
                            } else {
                                const indentHtml = solRow.credit ? '&nbsp;&nbsp;&nbsp;' : '';
                                const drFmt = solRow.debit ? Number(solRow.debit).toFixed(2) : '';
                                const crFmt = solRow.credit ? Number(solRow.credit).toFixed(2) : '';

                                // FIXED: Display Date Format in Solution Table
                                // If tIdx > 0 (second transaction onwards), show only the day (d/dd)
                                let displayDate = solRow.date || '';
                                if (tIdx > 0 && displayDate.includes(' ')) {
                                    const parts = displayDate.split(' ');
                                    displayDate = parts[parts.length - 1]; // Take only the last part (the day)
                                }

                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-white">
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${displayDate}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left font-semibold text-gray-800">${indentHtml}${solRow.account || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${drFmt}</td>
                                    <td class="p-1.5 font-mono text-xs text-right text-gray-800">${crFmt}</td>
                                </tr>`;
                            }
                        });
                    } else {
                        solutionRowsHtml = '<tr><td colspan="4" class="p-2 text-center text-xs italic text-gray-400">No solution key available.</td></tr>';
                    }

                    // --- VERTICAL LAYOUT FOR PREVIEW ---
                    transactionsHtml += `
                        <div class="mb-6 border border-gray-300 rounded overflow-hidden">
                            <div class="bg-gray-100 px-3 py-2 border-b border-gray-300">
                                <span class="font-bold text-gray-700 text-sm">Transaction ${tIdx + 1}:</span>
                                <span class="text-xs text-gray-600 ml-2 italic">${trans.date} - ${trans.description}</span>
                            </div>
                            
                            <div class="flex flex-col gap-0 divide-y divide-gray-300">
                                <div>
                                    <div class="bg-blue-50 py-1 px-3 text-[10px] font-bold text-blue-800 uppercase border-b border-blue-100">Your Answer</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead>
                                            <tr class="bg-gray-5 text-[10px] text-gray-500 uppercase border-b border-gray-200">
                                                <th class="py-1 px-1 w-24 text-right">Date</th>
                                                <th class="py-1 px-2 text-left w-auto">Account</th>
                                                <th class="py-1 px-1 w-28 text-right">Dr</th>
                                                <th class="py-1 px-1 w-28 text-right">Cr</th>
                                            </tr>
                                        </thead>
                                        <tbody>${studentRowsHtml}</tbody>
                                    </table>
                                </div>
                                <div>
                                    <div class="bg-green-50 py-1 px-3 text-[10px] font-bold text-green-800 uppercase border-b border-green-100">Standard Solution</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead>
                                            <tr class="bg-green-50/50 text-[10px] text-green-700 uppercase border-b border-green-100">
                                                <th class="py-1 px-1 w-24 text-right">Date</th>
                                                <th class="py-1 px-2 text-left w-auto">Account</th>
                                                <th class="py-1 px-1 w-28 text-right">Dr</th>
                                                <th class="py-1 px-1 w-28 text-right">Cr</th>
                                            </tr>
                                        </thead>
                                        <tbody>${solutionRowsHtml}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    `;
                });

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                         ${stickyHeaderHtml}
                        <div class="p-4">
                            ${transactionsHtml}
                        </div>
                    </div>`;
            }
        });

        // Score Calculation
        const percent = sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0;
        const letter = getLetterGrade(sectionScore, sectionMaxScore);

        contentHtml += `
            <div class="mb-8 border-b border-gray-300 pb-4">
                <div class="flex justify-between items-center mb-2">
                     <h3 class="font-bold text-lg text-blue-900 uppercase">Test ${index + 1}: ${section.type}</h3>
                     <span class="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">
                        Score: ${sectionScore} / ${sectionMaxScore} | ${percent.toFixed(2)}% | ${letter}
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
