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

            <div id="qa-runner-container" class="flex-1 overflow-hidden relative bg-gray-100">
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
            // Store ID in data object for easier access
            data.id = docSnap.id; 
            
            // --- ENHANCEMENT: SECTION FILTERING ---
            // If user is a student, only show activities for their section.
            // If user is a teacher (or any other role), show all.
            if (user.role === 'student' && data.section !== user.Section) {
                return; // Skip this iteration
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
                if (isExpired) {
                    alert("This activity has expired.");
                } else if (isFuture) {
                    alert(`This activity starts on ${start.toLocaleString()}`);
                } else {
                    if(quizTimerInterval) clearInterval(quizTimerInterval); // Clear any existing timer
                    renderQuizRunner(data, user);
                    // Close mobile sidebar if open
                    document.getElementById('qa-sidebar').classList.add('-translate-x-full');
                }
            };

            listContainer.appendChild(card);
        });
        
        // Handle case where filtering resulted in empty list
        if (listContainer.innerHTML === '') {
             listContainer.innerHTML = '<p class="text-center text-gray-400 mt-4 text-sm">No activities available for your section.</p>';
        }

    } catch (e) {
        console.error("Error loading activities:", e);
        listContainer.innerHTML = '<p class="text-center text-red-400 mt-4 text-sm">Error loading data.</p>';
    }
}

// --- QUIZ RUNNER LOGIC ---

async function renderQuizRunner(data, user) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Checking Permissions...</span></div>';
    
    // 1. ACCESS CONTROL CHECK
    // Check if user is in the student list for this activity
    if (data.students && !data.students.includes(user.Idnumber)) {
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

    // 2. CHECK FOR EXISTING SUBMISSION
    const collectionName = `results_${data.activityname}_${data.section}`;
    const docId = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
    
    try {
        const resultDoc = await getDoc(doc(db, collectionName, docId));
        
        if (resultDoc.exists()) {
            // Student has already answered -> Render PREVIEW
            await renderQuizResultPreview(data, user, resultDoc.data());
            return;
        }
    } catch (e) {
        console.error("Error checking submission:", e);
    }

    // 3. START QUIZ (No submission found)
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Generating Activity...</span></div>';
    
    // Generate Questions
    const generatedContent = await generateQuizContent(data);

    // Header with Timer Layout
    container.innerHTML = `
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

    // Initialize Logic (Timer, Tabs, Pagination, Validation)
    initializeQuizManager(data, generatedContent.data, user);
}

// --- RESULT PREVIEW GENERATOR ---
async function renderQuizResultPreview(activityData, user, resultData) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Loading Results...</span></div>';

    let contentHtml = '';
    
    // ENHANCEMENT: Use the saved questions in resultData instead of fetching randomly again
    const savedQuestions = resultData.questionsTaken || {};

    // Group saved questions by section index (s0, s1, etc.)
    const questionsBySection = {};
    Object.keys(savedQuestions).forEach(key => {
        // Key format: s0_q1
        const sectionIdx = key.split('_')[0].replace('s',''); // 0
        if(!questionsBySection[sectionIdx]) questionsBySection[sectionIdx] = [];
        questionsBySection[sectionIdx].push({ uiId: key, ...savedQuestions[key] });
    });

    activityData.testQuestions.forEach((section, index) => {
        const sectionQuestions = questionsBySection[index] || [];
        
        // Sort questions by their q index to maintain order (q0, q1, q2...)
        sectionQuestions.sort((a, b) => {
            const aIdx = parseInt(a.uiId.split('_')[1].replace('q',''));
            const bIdx = parseInt(b.uiId.split('_')[1].replace('q',''));
            return aIdx - bIdx;
        });

        // Generate Section HTML
        contentHtml += `<div class="mb-8 border-b border-gray-300 pb-4">
            <h3 class="font-bold text-lg text-blue-900 uppercase mb-2">Part ${index + 1}: ${section.type}</h3>
            `;

        if (sectionQuestions.length === 0) {
            contentHtml += `<p class="text-gray-400 italic">No data available for this section.</p>`;
        }

        sectionQuestions.forEach((q, qIdx) => {
            const studentAnswer = resultData.answers ? resultData.answers[q.uiId] : "No Answer";
            
            // Render logic based on type
            if (section.type === "Multiple Choice") {
                const optionsHtml = (q.options || []).map((opt, optIdx) => {
                    const isSelected = String(studentAnswer) === String(optIdx);
                    const isCorrect = String(q.correctAnswer) === String(optIdx); 
                    
                    let bgClass = "bg-white border-gray-200";
                    let icon = "";
                    
                    if (isSelected && isCorrect) { bgClass = "bg-green-100 border-green-400 font-bold text-green-800"; icon = '<i class="fas fa-check text-green-600 ml-auto"></i>'; }
                    else if (isSelected && !isCorrect) { bgClass = "bg-red-100 border-red-400 text-red-800"; icon = '<i class="fas fa-times text-red-600 ml-auto"></i>'; }
                    else if (!isSelected && isCorrect) { bgClass = "bg-green-50 border-green-300 text-green-800 border-dashed"; icon = '<i class="fas fa-check text-green-600 ml-auto opacity-50"></i>'; }

                    return `<div class="p-2 border rounded mb-1 text-sm flex items-center ${bgClass}">${opt} ${icon}</div>`;
                }).join('');

                contentHtml += `
                    <div class="bg-white p-4 rounded shadow-sm border border-gray-200 mb-4">
                        <p class="font-bold text-gray-800 mb-2">${qIdx+1}. ${q.questionText}</p>
                        <div class="mb-3">${optionsHtml}</div>
                        <div class="bg-gray-50 p-2 rounded text-xs text-gray-600">
                            <strong>Explanation:</strong> ${q.explanation || 'No explanation provided.'}
                        </div>
                    </div>
                `;
            } else if (section.type === "Problem Solving") {
                contentHtml += `
                    <div class="bg-white p-4 rounded shadow-sm border border-gray-200 mb-4">
                        <p class="font-bold text-gray-800 mb-2">${qIdx+1}. ${q.questionText}</p>
                        <div class="mb-2">
                            <p class="text-xs font-bold text-blue-600">Your Answer:</p>
                            <div class="p-2 bg-blue-50 border border-blue-100 rounded text-sm font-mono whitespace-pre-wrap">${studentAnswer}</div>
                        </div>
                        <div class="mb-2">
                            <p class="text-xs font-bold text-green-600">Answer Key:</p>
                            <div class="p-2 bg-green-50 border border-green-100 rounded text-sm font-mono whitespace-pre-wrap">${q.correctAnswer}</div>
                        </div>
                        <div class="bg-gray-50 p-2 rounded text-xs text-gray-600">
                            <strong>Explanation:</strong> ${q.explanation || 'No explanation provided.'}
                        </div>
                    </div>
                `;
            } else if (section.type === "Journalizing") {
                // Simplified preview for Journalizing
                contentHtml += `
                    <div class="bg-white p-4 rounded shadow-sm border border-gray-200 mb-4">
                        <p class="font-bold text-gray-800 mb-2">${q.questionText || 'Journal Entry'}</p>
                        <div class="p-2 bg-gray-100 rounded text-sm text-center italic text-gray-500">
                            Journal entry preview details are complex to render here. <br>
                            Please refer to the Answer Key below.
                        </div>
                        <div class="mt-2">
                             <p class="text-xs font-bold text-green-600">Answer Key:</p>
                             <div class="p-2 bg-green-50 border border-green-100 rounded text-sm font-mono whitespace-pre-wrap">
                                 Check standard solution provided in class or click to view details if available.
                             </div>
                        </div>
                    </div>
                `;
            }
        });
        
        contentHtml += `</div>`;
    });

    // Render Full Preview Layout
    const dateTaken = resultData.timestamp ? new Date(resultData.timestamp).toLocaleString() : "N/A";
    
    container.innerHTML = `
        <div class="h-full bg-gray-100 overflow-y-auto p-4 md:p-8">
            <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <div class="mt-2 text-right">
                        <span class="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm border border-yellow-300">
                            Score: <span class="italic">Pending Computation</span>
                        </span>
                    </div>
                </div>

                <div class="p-6">
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


// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let tabsHtml = '';
    let sectionsHtml = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<div class="p-8 text-center text-gray-500">No test sections defined.</div>', data: [] };
    }

    // --- Generate Tabs Header ---
    tabsHtml = `<div class="bg-white border-b border-gray-300 flex items-center px-2 overflow-x-auto whitespace-nowrap shrink-0 z-20 sticky top-0 shadow-sm">`;
    
    activityData.testQuestions.forEach((section, index) => {
        const isActive = index === 0 ? 'border-blue-800 text-blue-800 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600';
        tabsHtml += `
            <button type="button" class="tab-btn px-4 py-3 mr-2 font-semibold text-sm border-b-2 transition-colors focus:outline-none ${isActive}" data-target="test-section-${index}">
                Test ${index + 1}
            </button>
        `;
    });

    // Add Submit Button to the right end of Tabs
    tabsHtml += `
        <div class="ml-auto pl-4 py-2">
            <button type="button" id="btn-submit-quiz" disabled class="bg-gray-400 cursor-not-allowed text-white text-sm font-bold px-4 py-1.5 rounded shadow transition whitespace-nowrap">
                Submit
            </button>
        </div>
    </div>`;

    // --- Generate Sections ---
    sectionsHtml = `<div class="w-full max-w-7xl mx-auto p-2 md:p-4">`; 

    for (const [index, section] of activityData.testQuestions.entries()) {
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        const isHidden = index === 0 ? '' : 'hidden'; // Only show first section initially

        // Section Wrapper
        sectionsHtml += `<div id="test-section-${index}" class="test-section-panel w-full ${isHidden}" data-section-type="${section.type}">`;

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

        // --- Render Content Area & Tracker Area ---
        
        let questionsHtml = '';
        let trackerHtml = '';

        questions.forEach((q, qIdx) => {
            const uiId = `s${index}_q${qIdx}`;
            
            // --- ENHANCEMENT: STORE RICH DATA ---
            // Store Metadata AND Full content for saving later
            questionData.push({ 
                uiId: uiId, 
                dbId: q.id, 
                type: section.type,
                // Rich Data for Saving/Preview
                questionText: q.question || (q.title || 'Journal Activity'),
                correctAnswer: q.answer || q.solution,
                options: q.options || [],
                explanation: q.explanation || '',
                transactions: q.transactions || []
            });

            // --- Sticky Info Header Content ---
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

            // --- Multiple Choice & Problem Solving Logic ---
            if (section.type !== "Journalizing") {
                const hiddenClass = qIdx === 0 ? '' : 'hidden';
                
                // Tracker Button
                trackerHtml += `
                    <button type="button" class="tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 text-sm font-bold flex items-center justify-center hover:bg-blue-100 focus:outline-none ${qIdx===0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700'}" data-target-question="${uiId}">
                        ${qIdx + 1}
                    </button>
                `;

                // Question Content
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
                            ${stickyHeader}
                            
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
            
            // --- Journalizing Logic ---
            else {
                const transactions = q.transactions || [];
                const jHiddenClass = qIdx === 0 ? '' : 'hidden'; 
                
                // Tracker for Transactions
                let transTrackerList = '';
                let transContent = '';

                transactions.forEach((trans, tIdx) => {
                    const transUiId = `${uiId}_t${tIdx}`;
                    const tHidden = tIdx === 0 ? '' : 'hidden';
                    const tActive = tIdx === 0 ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-800' : 'bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';

                    transTrackerList += `
                        <button type="button" class="trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none ${tActive}" data-target-trans="${transUiId}" data-t-index="${tIdx}">
                            <div class="font-bold whitespace-nowrap">${trans.date}</div>
                            <div class="truncate opacity-80 text-xs">${trans.description}</div>
                        </button>
                    `;

                    // 2. Transaction Content (Input Table)
                    const rowCount = trans.rows || 2;
                    let rows = '';
                    for(let r=0; r < rowCount; r++) {
                        rows += `
                        <tr class="border-b border-gray-200 bg-white">
                            <td class="p-0 border-r border-gray-300"><input type="text" name="${transUiId}_r${r}_date" class="input-checker w-full p-2 text-center outline-none bg-transparent font-mono text-sm" placeholder="Date"></td>
                            <td class="p-0 border-r border-gray-300"><input type="text" name="${transUiId}_r${r}_acct" class="input-checker w-full p-2 text-left outline-none bg-transparent font-mono text-sm" placeholder="Account Title"></td>
                            <td class="p-0 border-r border-gray-300 w-24"><input type="number" name="${transUiId}_r${r}_dr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                            <td class="p-0 w-24"><input type="number" name="${transUiId}_r${r}_cr" class="input-checker w-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                        </tr>`;
                    }

                    transContent += `
                        <div id="${transUiId}" class="journal-trans-block w-full ${tHidden}">
                            <div class="bg-blue-50 p-3 rounded mb-3 border border-blue-100">
                                <span class="text-xs text-blue-500 font-bold uppercase">Transaction Details</span>
                                <p class="text-md font-bold text-gray-800">${trans.description}</p>
                                <p class="text-xs text-gray-600">Date: ${trans.date}</p>
                            </div>

                            <div class="w-full overflow-x-auto border border-gray-300 rounded shadow-sm bg-white mb-2">
                                <table class="w-full border-collapse min-w-[600px]">
                                    <thead><tr class="bg-gray-100 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                        <th class="py-2 border-r border-gray-300 w-24">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-24 text-right pr-2">Debit</th>
                                        <th class="py-2 w-24 text-right pr-2">Credit</th>
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

                // Wrap entire journal question
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

        // Assemble Layout for this Section
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
            sectionsHtml += `
                <div class="w-full">
                    ${questionsHtml}
                </div>
            `;
        }

        sectionsHtml += `</div>`; // End Section Wrapper
    }

    sectionsHtml += `</div>`; // End All Sections Container

    return { html: tabsHtml + sectionsHtml, data: questionData };
}

// --- QUIZ MANAGER (INTERACTIVITY) ---

function initializeQuizManager(activityData, questionData, user) {
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
            submitQuiz(activityData, questionData, user); // Auto submit
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

    // 3. Question Navigation & Tracker Logic (Scoped per section)
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
                // Update tracker
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
        
        // --- Journalizing Navigation (Internal Transactions) ---
        else if (type === 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            
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

    // 4. Input Validation (Unlock Submit Button) & Color Updates
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

    // Submit Action
    submitBtn.addEventListener('click', () => submitQuiz(activityData, questionData, user));
}

async function submitQuiz(activityData, questionData, user) {
    if(!confirm("Are you sure you want to submit your answers?")) return;
    
    // Clear Timer
    if(quizTimerInterval) clearInterval(quizTimerInterval);

    // Collect Answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    // --- ENHANCEMENT: CAPTURE RICH QUESTION DATA ---
    const questionsTaken = {};

    questionData.forEach(q => {
        // 1. Capture the full details of this specific random question
        questionsTaken[q.uiId] = {
            questionText: q.questionText,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            type: q.type,
            options: q.options || null,
            transactions: q.transactions || null
        };

        // 2. Capture Student Answer
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
        // Save the rich question data here
        questionsTaken: JSON.parse(JSON.stringify(questionsTaken, (k, v) => v === undefined ? null : v))
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
