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

            <div id="qa-runner-container" class="flex-1 overflow-y-auto p-4 md:p-8 relative">
                <div class="h-full flex flex-col items-center justify-center text-gray-400">
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
    
    // 1. Generate Questions based on topics and types from Firebase Collections
    const generatedContent = await generateQuizContent(data);

    container.innerHTML = `
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div class="bg-blue-800 text-white p-1">
                <h1 class="text-2xl font-bold mb-2">${data.activityname}</h1>
            </div>
            
            <form id="quiz-form" class="p-6 space-y-8">
                ${generatedContent.html}
                
                <div class="pt-6 border-t border-gray-200">
                    <button type="button" id="btn-submit-quiz" class="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 shadow-md transition text-lg">
                        Submit Activity
                    </button>
                </div>
            </form>
        </div>
    `;

    document.getElementById('btn-submit-quiz').addEventListener('click', () => submitQuiz(data, generatedContent.data));
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let html = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<p>No test sections defined.</p>', data: [] };
    }

    // Loop through each test section (e.g., Test 1: Multiple Choice, Test 2: Problem Solving)
    for (const [index, section] of activityData.testQuestions.entries()) {
        
        // 1. Get topics SPECIFIC to this section only
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];

        // 2. Render Section Header
        html += `
            <div class="test-section">
                <h3 class="text-xl font-bold text-gray-800 mb-2 border-b pb-2">Test ${index + 1}: ${section.type}</h3>
                
                <div class="text-sm text-gray-600 mb-2">
                    <strong>Topics:</strong> <span class="text-blue-700">${section.topics || 'General'}</span>
                </div>

                <div class="bg-blue-50 p-3 rounded text-sm text-blue-800 mb-4 italic">
                    <strong>Instructions:</strong> ${section.instructions}
                </div>
        `;

        const count = parseInt(section.noOfQuestions) || 5;
        let questions = [];

        // 3. Determine Collection Name
        let collectionName = '';
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        // 4. Fetch Questions
        if (collectionName && sectionTopics.length > 0) {
            try {
                const qRef = collection(db, collectionName);
                
                // *** CRITICAL FIX HERE ***
                // 1. Changed "FABM 1" to "FABM1" to match your database.
                // 2. Used 'sectionTopics' to ensure we get the right topics for this specific test.
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

                // Randomize and limit to the requested count
                candidates.sort(() => 0.5 - Math.random());
                questions = candidates.slice(0, count);

            } catch (error) {
                console.error(`Error fetching ${section.type} questions:`, error);
                html += `<p class="text-red-500">Error loading questions: ${error.message}</p>`;
            }
        } else if (sectionTopics.length === 0) {
             html += `<p class="text-gray-400 italic">No topics selected for this section.</p>`;
        }

        // 5. Render Questions based on Type
        questions.forEach((q, i) => {
            const qId = `s${index}_q${i}`;
            
            // Store data for submission/checking
            questionData.push({ 
                uiId: qId, 
                dbId: q.id, 
                type: section.type,
                correctAnswer: q.answer || q.solution 
            });

            // --- RENDER MULTIPLE CHOICE ---
            if (section.type === "Multiple Choice") {
                const opts = q.options ? q.options.map((opt, idx) => `
                    <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-2">
                        <input type="radio" name="${qId}" value="${idx}" class="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300">
                        <span class="text-sm text-gray-700 font-medium">${opt}</span>
                    </label>
                `).join('') : '<p class="text-red-400">Error: Options missing</p>';

                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.question}</p>
                        <div class="flex flex-col">${opts}</div>
                    </div>
                `;

            // --- RENDER PROBLEM SOLVING ---
            } else if (section.type === "Problem Solving") {
                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.question}</p>
                        <textarea name="${qId}" class="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow font-mono text-sm" placeholder="Type your final answer and solution here..."></textarea>
                    </div>
                `;

            // --- RENDER JOURNALIZING ---
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
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_date" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="Date"></td>
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_acct" class="w-full h-full p-2 text-left outline-none bg-transparent font-mono text-sm" placeholder="Account Title"></td>
                               <td class="p-0 border-r border-gray-300 w-32"><input type="number" name="${tId}_r${r}_dr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                               <td class="p-0 w-32"><input type="number" name="${tId}_r${r}_cr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                           </tr>`;
                       }
                       transactionHtml += `
                           <div class="mb-4 border border-gray-300 rounded-lg overflow-hidden">
                               <div class="bg-gray-100 px-4 py-2 border-b border-gray-300 flex justify-between items-center text-sm font-semibold text-gray-700"><span>${trans.date} - ${trans.description}</span></div>
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
                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.title || 'Journalize the transactions'}</p>
                        ${transactionHtml}
                    </div>
                `;
            }
        });

        html += `</div>`; // End Test Section Wrapper
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
        if(q.type === 'Multiple Choice') { // Matching firebase type string 'Multiple Choice'
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Problem Solving') {
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Journalizing') {
            // Journalizing extraction: We need to iterate over known structure
            // Re-finding DOM elements to scrape the table inputs
            // Logic: Iterate inputs starting with q.uiId
            const journalEntry = [];
            // We assume max 10 transactions and 5 rows per trans as a safe loop limit or use DOM query
            // Better: Select inputs by name prefix
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            
            // Organize flat inputs into structure
            // Name format: s0_q1_t0_r0_date
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
        studentName: "Current Student", // Replace with user.LastName + ", " + user.FirstName
        timestamp: new Date().toISOString(),
        answers: answers,
        // Optional: Save snapshot of questions to know what they answered if Qs are random
        // questionSnapshot: questionData 
    };

    try {
        await setDoc(doc(collection(db, "student_submissions")), submissionPayload);
        alert("Submission Successful! Your answers have been recorded.");
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
