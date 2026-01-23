import { getFirestore, collection, getDocs, doc, getDoc, setDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// Placeholder imports (commented out until created)
// import { getRandomMCQ } from './multipleChoiceQ.js';
// import { getRandomProblem } from './problemSolvingQ.js';
// import { getRandomJournal } from './journalizingQ.js';

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

export async function renderQuizzesActivitiesPage() {
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
        // Ideally: where('students', 'array-contains', currentUser.name/id)
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

function renderQuizRunner(data) {
    const container = document.getElementById('qa-runner-container');
    
    // 1. Generate Questions based on topics and types
    // Since imported files don't exist, we use a helper to mock data
    const generatedContent = generateQuizContent(data);

    container.innerHTML = `
        <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div class="bg-blue-800 text-white p-6">
                <h1 class="text-2xl font-bold mb-2">${data.activityname}</h1>
                <div class="flex flex-wrap gap-4 text-sm opacity-90">
                    <span><i class="far fa-clock mr-1"></i> ${data.timeLimit} Minutes</span>
                    <span><i class="fas fa-list mr-1"></i> ${data.topics}</span>
                </div>
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

// --- MOCK CONTENT GENERATOR ---
// This replaces the logic of importing from multipleChoiceQ.js etc for now.
function generateQuizContent(data) {
    let html = '';
    let questionData = []; // To store answer keys and details for submission logic

    if (!data.testQuestions || !Array.isArray(data.testQuestions)) {
        return { html: '<p>No test sections defined.</p>', data: [] };
    }

    data.testQuestions.forEach((section, index) => {
        html += `
            <div class="test-section">
                <h3 class="text-xl font-bold text-gray-800 mb-2 border-b pb-2">Test ${index + 1}: ${section.type}</h3>
                <div class="bg-blue-50 p-3 rounded text-sm text-blue-800 mb-4 italic">
                    <strong>Instructions:</strong> ${section.instructions}
                </div>
        `;

        const count = parseInt(section.noOfQuestions) || 5;

        // --- RENDER LOGIC PER TYPE ---
        for (let i = 1; i <= count; i++) {
            const qId = `s${index}_q${i}`;
            
            if (section.type === "Multiple Choice") {
                // Mock Random MCQ
                const mockQ = {
                    id: qId,
                    type: 'mcq',
                    question: `This is a sample generated Multiple Choice Question #${i} about ${data.topics.split(',')[0] || 'Accounting'}.`,
                    options: ['Debit Cash', 'Credit Sales', 'Debit Expenses', 'Credit Equity'],
                    correct: 0
                };
                questionData.push(mockQ);

                const opts = mockQ.options.map((opt, idx) => `
                    <label class="flex items-center p-2 border rounded hover:bg-gray-50 cursor-pointer">
                        <input type="radio" name="${qId}" value="${idx}" class="mr-3 text-blue-600">
                        <span class="text-sm">${opt}</span>
                    </label>
                `).join('');

                html += `
                    <div class="mb-6 p-4 bg-gray-50 rounded border border-gray-100">
                        <p class="font-bold text-gray-700 mb-3">${i}. ${mockQ.question}</p>
                        <div class="space-y-2">${opts}</div>
                    </div>
                `;

            } else if (section.type === "Problem Solving") {
                // Mock Problem
                const mockQ = {
                    id: qId,
                    type: 'problem',
                    question: `Calculate the Cost of Goods Sold given the following data... (Sample Problem #${i})`
                };
                questionData.push(mockQ);

                html += `
                    <div class="mb-6 p-4 bg-gray-50 rounded border border-gray-100">
                        <p class="font-bold text-gray-700 mb-3">${i}. ${mockQ.question}</p>
                        <textarea name="${qId}" class="w-full p-3 border rounded h-32 focus:ring-2 focus:ring-blue-500" placeholder="Type your solution here..."></textarea>
                    </div>
                `;

            } else if (section.type === "Journalizing") {
                // Mock Journal
                const mockQ = {
                    id: qId,
                    type: 'journal',
                    question: `Journalize the transaction for Jan ${i}: Purchased inventory on account.`
                };
                questionData.push(mockQ);

                html += `
                    <div class="mb-6 p-4 bg-gray-50 rounded border border-gray-100">
                        <p class="font-bold text-gray-700 mb-3">${i}. ${mockQ.question}</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border bg-white">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-2 w-24">Date</th>
                                        <th class="border p-2">Account Titles</th>
                                        <th class="border p-2 w-24">Debit</th>
                                        <th class="border p-2 w-24">Credit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border p-0"><input type="text" class="w-full h-full p-2 outline-none"></td>
                                        <td class="border p-0"><input type="text" class="w-full h-full p-2 outline-none"></td>
                                        <td class="border p-0"><input type="number" class="w-full h-full p-2 outline-none"></td>
                                        <td class="border p-0"><input type="number" class="w-full h-full p-2 outline-none"></td>
                                    </tr>
                                    <tr>
                                        <td class="border p-0"><input type="text" class="w-full h-full p-2 outline-none"></td>
                                        <td class="border p-0"><input type="text" class="w-full h-full p-2 outline-none pl-8" placeholder="    (Indent)"></td>
                                        <td class="border p-0"><input type="number" class="w-full h-full p-2 outline-none"></td>
                                        <td class="border p-0"><input type="number" class="w-full h-full p-2 outline-none"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            }
        }
        
        html += `</div>`; // End Section
    });

    return { html, data: questionData };
}

async function submitQuiz(activityData, questionData) {
    if(!confirm("Are you sure you want to submit your answers?")) return;

    // Collect Answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    // Simple extraction logic
    questionData.forEach(q => {
        if(q.type === 'mcq') {
            answers[q.id] = formData.get(q.id);
        } else if (q.type === 'problem') {
            answers[q.id] = formData.get(q.id);
        }
        // Journalizing extraction would require specific ID targeting on inputs, simplified here
        else if (q.type === 'journal') {
            answers[q.id] = "Journal Entry Data Submitted"; 
        }
    });

    const submissionPayload = {
        activityId: activityData.id,
        studentName: "Current Student", // Replace with currentUser.name if available
        timestamp: new Date().toISOString(),
        answers: answers,
        activitySnapshot: activityData // Saving context
    };

    try {
        await setDoc(doc(collection(db, "student_submissions")), submissionPayload);
        alert("Submission Successful! Your answers have been recorded.");
        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600">
                <i class="fas fa-check-circle text-5xl mb-4"></i>
                <h2 class="text-2xl font-bold">Submitted Successfully</h2>
                <p class="text-gray-500 mt-2">You may select another activity from the menu.</p>
            </div>
        `;
    } catch (e) {
        console.error("Submission Error:", e);
        alert("Error submitting quiz. Please check your connection and try again.");
    }
}
