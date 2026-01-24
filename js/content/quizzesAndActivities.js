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

// State Management for the Runner
let quizState = {
    currentSectionIndex: 0,
    currentSlideIndex: 0, // Index within the section
    sections: [], // { name, type, slides: [ { id, trackerLabel, isAnswered } ] }
    timerInterval: null,
    answers: {} // Track answered status
};

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

            <div id="qa-runner-container" class="flex-1 overflow-y-auto relative flex flex-col">
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
    
    // Generate Content & Metadata
    const content = await generateQuizContent(data);
    quizState.sections = content.sections;
    quizState.currentSectionIndex = 0;
    quizState.currentSlideIndex = 0;

    // Start Timer
    if(quizState.timerInterval) clearInterval(quizState.timerInterval);
    const expireTime = new Date(data.dateTimeExpire).getTime();

    // Render Basic Layout
    container.innerHTML = `
        <div class="flex flex-col h-full bg-gray-100">
            <div class="bg-blue-900 text-white p-3 flex justify-between items-center shadow-md z-20">
                <h1 class="text-lg md:text-xl font-bold truncate mr-4">${data.activityname}</h1>
                <div class="flex items-center bg-blue-800 px-3 py-1 rounded border border-blue-700">
                    <i class="far fa-clock mr-2 text-yellow-400"></i>
                    <span id="quiz-timer" class="font-mono font-bold text-lg">00:00:00</span>
                </div>
            </div>

            <div class="bg-white border-b border-gray-200 px-2 md:px-4 flex justify-between items-center shadow-sm h-12">
                <div id="quiz-tabs" class="flex space-x-1 overflow-x-auto h-full items-end no-scrollbar">
                    </div>
                <div class="pl-2">
                    <button id="btn-submit-quiz" disabled class="bg-gray-400 text-white px-4 py-1.5 rounded text-sm font-bold shadow transition opacity-50 cursor-not-allowed">
                        Submit
                    </button>
                </div>
            </div>

            <div class="flex-1 flex overflow-hidden relative">
                <form id="quiz-form" class="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 relative">
                    ${content.html}
                </form>

                <div class="w-16 md:w-64 bg-white border-l border-gray-200 flex flex-col shadow-lg z-10 transition-all duration-300" id="right-sidebar">
                     <div class="p-2 md:p-4 border-b border-gray-100 bg-gray-50 flex flex-col gap-2">
                        <div class="flex gap-2">
                            <button id="btn-prev" class="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-blue-50 transition shadow-sm">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button id="btn-next" class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition shadow-sm">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                     </div>

                     <div class="flex-1 overflow-y-auto p-2">
                         <div id="quiz-tracker" class="grid grid-cols-1 gap-2">
                             </div>
                     </div>
                     
                     <button id="toggle-tracker" class="md:hidden w-full py-2 bg-gray-100 text-gray-500 text-xs border-t">
                        <i class="fas fa-expand"></i> Details
                     </button>
                </div>
            </div>
        </div>
    `;

    // Initialize UI
    updateTimer(expireTime);
    quizState.timerInterval = setInterval(() => updateTimer(expireTime), 1000);
    
    renderTabs();
    showSection(0);
    
    // Event Listeners
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
    document.getElementById('btn-submit-quiz').addEventListener('click', () => submitQuiz(data, content.data));
    
    // Mobile toggle logic
    const rightSidebar = document.getElementById('right-sidebar');
    document.getElementById('toggle-tracker').addEventListener('click', () => {
        rightSidebar.classList.toggle('w-16');
        rightSidebar.classList.toggle('w-64');
        rightSidebar.classList.toggle('absolute');
        rightSidebar.classList.toggle('right-0');
        rightSidebar.classList.toggle('h-full');
    });

    // Input Change Listener for "Answered" state
    document.getElementById('quiz-form').addEventListener('input', (e) => {
        // Find closest slide ID
        const slide = e.target.closest('.quiz-slide');
        if(slide) {
            const slideId = slide.id;
            const currentSec = quizState.sections[quizState.currentSectionIndex];
            const slideObj = currentSec.slides.find(s => s.id === slideId);
            
            if(slideObj && !slideObj.isAnswered) {
                // Check if value actually exists
                if(e.target.value.trim() !== '') {
                    slideObj.isAnswered = true;
                    updateTrackerUI();
                    checkSubmitEligibility();
                }
            }
        }
    });
}

// --- UI HELPERS ---

function updateTimer(expireTime) {
    const now = new Date().getTime();
    const distance = expireTime - now;
    const timerEl = document.getElementById('quiz-timer');
    
    if(!timerEl) return;

    if (distance < 0) {
        clearInterval(quizState.timerInterval);
        timerEl.innerHTML = "EXPIRED";
        timerEl.classList.add('text-red-500');
        document.getElementById('quiz-form').classList.add('opacity-50', 'pointer-events-none');
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerEl.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function renderTabs() {
    const tabContainer = document.getElementById('quiz-tabs');
    tabContainer.innerHTML = '';
    
    quizState.sections.forEach((sec, idx) => {
        const btn = document.createElement('button');
        btn.className = `px-4 py-2 text-sm font-bold border-b-2 transition whitespace-nowrap ${idx === quizState.currentSectionIndex ? 'border-blue-800 text-blue-900 bg-blue-50' : 'border-transparent text-gray-500 hover:text-blue-600'}`;
        btn.innerText = `Test ${idx + 1}`;
        btn.onclick = () => showSection(idx);
        tabContainer.appendChild(btn);
    });
}

function showSection(index) {
    quizState.currentSectionIndex = index;
    quizState.currentSlideIndex = 0; // Reset to first question of section
    renderTabs();
    
    // Hide all slides
    document.querySelectorAll('.quiz-slide').forEach(el => el.classList.add('hidden'));
    
    // Update Tracker UI for this section
    updateTrackerUI();
    
    // Show first slide
    updateSlideView();
}

function updateTrackerUI() {
    const trackerContainer = document.getElementById('quiz-tracker');
    const currentSec = quizState.sections[quizState.currentSectionIndex];
    trackerContainer.innerHTML = '';

    // Determine layout: Grid for items, List for journal transactions
    const isList = currentSec.type === 'Journalizing';
    trackerContainer.className = isList ? 'flex flex-col gap-1' : 'grid grid-cols-1 md:grid-cols-3 gap-2';

    currentSec.slides.forEach((slide, idx) => {
        const btn = document.createElement('button');
        const isActive = idx === quizState.currentSlideIndex;
        const isAnswered = slide.isAnswered;
        
        let baseClass = "text-xs p-2 rounded border transition text-left truncate";
        let colorClass = isAnswered ? "bg-green-100 border-green-300 text-green-800" : "bg-gray-50 border-gray-200 text-gray-500";
        if(isActive) colorClass = "bg-blue-600 border-blue-600 text-white ring-2 ring-blue-200";
        
        btn.className = `${baseClass} ${colorClass}`;
        
        if(isList) {
             // Journal List View
             btn.innerHTML = `<i class="fas ${isAnswered ? 'fa-check-circle' : 'fa-circle'} mr-2 text-[10px]"></i>${slide.trackerLabel}`;
        } else {
             // Calendar Grid View (Just numbers usually)
             btn.className += " text-center";
             btn.innerHTML = slide.trackerLabel;
        }

        btn.onclick = () => {
            quizState.currentSlideIndex = idx;
            updateSlideView();
        };
        trackerContainer.appendChild(btn);
    });
}

function updateSlideView() {
    const currentSec = quizState.sections[quizState.currentSectionIndex];
    const slideId = currentSec.slides[quizState.currentSlideIndex].id;
    
    // Hide all slides again to be safe
    document.querySelectorAll('.quiz-slide').forEach(el => el.classList.add('hidden'));
    
    // Show specific slide
    const slideEl = document.getElementById(slideId);
    if(slideEl) slideEl.classList.remove('hidden');

    // Update Tracker Highlight
    updateTrackerUI();
    
    // Update Buttons
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    prevBtn.disabled = quizState.currentSlideIndex === 0;
    prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
    
    const isLast = quizState.currentSlideIndex === currentSec.slides.length - 1;
    // We allow next to loop or stop? Usually stop at end of section
    nextBtn.disabled = isLast;
    nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
}

function navigate(direction) {
    const currentSec = quizState.sections[quizState.currentSectionIndex];
    const newIndex = quizState.currentSlideIndex + direction;
    
    if(newIndex >= 0 && newIndex < currentSec.slides.length) {
        quizState.currentSlideIndex = newIndex;
        updateSlideView();
    }
}

function checkSubmitEligibility() {
    const btn = document.getElementById('btn-submit-quiz');
    // Check if ALL slides in ALL sections are answered
    const allAnswered = quizState.sections.every(sec => sec.slides.every(s => s.isAnswered));
    
    if(allAnswered) {
        btn.disabled = false;
        btn.classList.remove('bg-gray-400', 'opacity-50', 'cursor-not-allowed');
        btn.classList.add('bg-green-600', 'hover:bg-green-700');
    }
}

// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let fullHtml = '';
    let questionData = []; // DB mapping
    let sectionsMetadata = []; // UI mapping

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<p>No test sections defined.</p>', data: [], sections: [] };
    }

    for (const [index, section] of activityData.testQuestions.entries()) {
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];
        let sectionSlides = [];

        // Determine Collection
        let collectionName = '';
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        let questions = [];

        if (collectionName && sectionTopics.length > 0) {
            try {
                const qRef = collection(db, collectionName);
                // Important: Ensure "subject" matches your DB ("FABM1" vs "FABM 1")
                const qQuery = query(
                    qRef, 
                    where("subject", "==", "FABM1"), 
                    where("topic", "in", sectionTopics.slice(0, 10)) 
                );
                const qSnap = await getDocs(qQuery);
                let candidates = [];
                qSnap.forEach(doc => { candidates.push({ id: doc.id, ...doc.data() }); });
                candidates.sort(() => 0.5 - Math.random());
                const count = parseInt(section.noOfQuestions) || 5;
                questions = candidates.slice(0, count);
            } catch (error) {
                console.error(error);
            }
        }

        // --- RENDER QUESTIONS ---
        questions.forEach((q, qIdx) => {
            const qUiId = `s${index}_q${qIdx}`;
            
            // Shared Header for all slides of this question
            const headerHtml = `
                 <div class="mb-4">
                    <h3 class="text-lg font-bold text-gray-800 mb-1">Test ${index+1}: Question ${qIdx+1}</h3>
                    <div class="text-sm text-gray-500 mb-2 italic">${section.instructions}</div>
                    <div class="p-4 bg-white rounded border border-gray-200 shadow-sm text-gray-800 font-medium">
                        ${q.question}
                    </div>
                 </div>
            `;

            // Data storage for submit
            questionData.push({ 
                uiId: qUiId, 
                dbId: q.id, 
                type: section.type, 
                correctAnswer: q.answer || q.solution 
            });

            // --- MULTIPLE CHOICE & PROBLEM SOLVING (1 Slide per Question) ---
            if (section.type === "Multiple Choice") {
                 const opts = q.options ? q.options.map((opt, idx) => `
                    <label class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-2 shadow-sm">
                        <input type="radio" name="${qUiId}" value="${idx}" class="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300">
                        <span class="text-sm text-gray-700 font-medium">${opt}</span>
                    </label>
                `).join('') : '';

                const slideId = `slide_${qUiId}`;
                fullHtml += `
                    <div id="${slideId}" class="quiz-slide hidden flex flex-col h-full">
                        ${headerHtml}
                        <div class="flex flex-col">${opts}</div>
                    </div>
                `;
                sectionSlides.push({ id: slideId, trackerLabel: `${qIdx+1}`, isAnswered: false });

            } else if (section.type === "Problem Solving") {
                const slideId = `slide_${qUiId}`;
                fullHtml += `
                    <div id="${slideId}" class="quiz-slide hidden flex flex-col h-full">
                        ${headerHtml}
                        <textarea name="${qUiId}" class="w-full p-4 border border-gray-300 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-none shadow-inner" placeholder="Type your solution here..."></textarea>
                    </div>
                `;
                sectionSlides.push({ id: slideId, trackerLabel: `${qIdx+1}`, isAnswered: false });

            } 
            // --- JOURNALIZING (Multiple Slides per Question: 1 per Transaction) ---
            else if (section.type === "Journalizing") {
                if(q.transactions && Array.isArray(q.transactions)) {
                    q.transactions.forEach((trans, tIdx) => {
                        const tId = `${qUiId}_t${tIdx}`;
                        const slideId = `slide_${tId}`;
                        
                        // Transaction Header
                        const transHeader = `
                            <div class="bg-blue-50 px-4 py-3 border-l-4 border-blue-500 mb-4 rounded-r shadow-sm">
                                <span class="block text-xs font-bold text-blue-500 uppercase">Transaction</span>
                                <span class="font-bold text-gray-800">${trans.date}</span> - ${trans.description}
                            </div>
                        `;

                        // Input Rows
                        let rows = '';
                        const rowCount = trans.rows || 2;
                        for(let r=0; r < rowCount; r++) {
                            rows += `
                               <tr class="border-b border-gray-200 bg-white">
                                   <td class="p-1 border-r border-gray-300"><input type="text" name="${tId}_r${r}_date" class="w-full p-2 text-right outline-none bg-transparent font-mono text-xs" placeholder="Date"></td>
                                   <td class="p-1 border-r border-gray-300"><input type="text" name="${tId}_r${r}_acct" class="w-full p-2 text-left outline-none bg-transparent font-mono text-xs" placeholder="Account Title"></td>
                                   <td class="p-1 border-r border-gray-300 w-24"><input type="number" name="${tId}_r${r}_dr" class="w-full p-2 text-right outline-none bg-transparent font-mono text-xs" placeholder="0.00"></td>
                                   <td class="p-1 w-24"><input type="number" name="${tId}_r${r}_cr" class="w-full p-2 text-right outline-none bg-transparent font-mono text-xs" placeholder="0.00"></td>
                               </tr>`;
                        }

                        const tableHtml = `
                            <div class="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                                <table class="w-full border-collapse">
                                    <thead><tr class="bg-gray-100 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                         <th class="py-2 border-r border-gray-300 w-20">Date</th>
                                         <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                         <th class="py-2 border-r border-gray-300 w-24 text-right pr-2">Debit</th>
                                         <th class="py-2 w-24 text-right pr-2">Credit</th>
                                    </tr></thead>
                                    <tbody>${rows}</tbody>
                                </table>
                            </div>
                        `;

                        fullHtml += `
                            <div id="${slideId}" class="quiz-slide hidden flex flex-col h-full">
                                ${headerHtml}
                                ${transHeader}
                                ${tableHtml}
                            </div>
                        `;
                        
                        // Tracker Label: "Jan 1 - Invest..."
                        const shortDesc = trans.description.length > 15 ? trans.description.substring(0,15)+"..." : trans.description;
                        sectionSlides.push({ id: slideId, trackerLabel: `${trans.date} - ${shortDesc}`, isAnswered: false });
                    });
                }
            }
        });

        sectionsMetadata.push({
            name: `Test ${index+1}`,
            type: section.type,
            slides: sectionSlides
        });
    }

    return { html: fullHtml, data: questionData, sections: sectionsMetadata };
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
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            let currentRow = {};
            inputs.forEach(input => {
                 const parts = input.name.split('_'); // [s0, q1, t0, r0, field]
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
