import { getFirestore, collection, getDocs, doc, setDoc, query, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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

// --- CONSTANTS ---
const ACCOUNTING_STEPS = [
    'Step 01 - Transaction Analysis',
    'Step 02 - Journalizing Transactions',
    'Step 03 - Posting to the Ledger',
    'Step 04 - Preparing the Unadjusted Trial Balance',
    'Step 05 - Preparing the 10-Columns Worksheet',
    'Step 06 - Preparing the Financial Statements',
    'Step 07 - Journalizing and Posting the Adjusting Entries',
    'Step 08 - Journalizing and Posting the Closing Entries',
    'Step 09 - Preparing the Post-Closing Trial Balance',
    'Step 10 - Reversing Entries'
];

// --- STATE ---
let currentSection = null;

export async function renderAccountingCycleCreator(container) {
    container.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6 h-full p-4 overflow-hidden bg-gray-100 font-sans">
            <div class="flex-[3] bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden">
                <div class="p-4 border-b border-gray-200 bg-indigo-50 flex justify-between items-center">
                    <h2 class="font-bold text-lg text-indigo-900"><i class="fas fa-cogs mr-2"></i>Accounting Cycle Manager</h2>
                    <button id="btn-save-ac-activity" class="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-indigo-700 transition shadow-sm">
                        <i class="fas fa-save mr-2"></i>Save Activity
                    </button>
                </div>
                
                <div class="flex flex-col md:flex-row h-full overflow-hidden">
                    <div class="w-full md:w-[65%] p-6 overflow-y-auto space-y-6 border-r border-gray-200">
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">School Year</label>
                                <select id="ac-school-year" class="w-full p-2 border border-gray-300 rounded bg-gray-50 focus:border-indigo-500 outline-none">
                                    <option value="25-26">25-26</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Activity Name</label>
                                <select id="ac-activity-name" class="w-full p-2 border border-gray-300 rounded focus:border-indigo-500 outline-none">
                                    <option value="">-- Select Activity --</option>
                                    <option value="S2T1 Performance Task 01">S2T1 Performance Task 01</option>
                                    <option value="S2T2 Performance Task 01">S2T2 Performance Task 01</option>
                                </select>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <div class="flex justify-between items-center mb-4">
                                <label class="block text-sm font-extrabold text-gray-700 uppercase tracking-wide">
                                    <i class="fas fa-list-ol mr-1"></i> Accounting Cycle Tasks
                                </label>
                                <button id="btn-add-task" class="text-xs bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded hover:bg-indigo-200 transition font-bold">
                                    <i class="fas fa-plus mr-1"></i> Add Step
                                </button>
                            </div>
                            <div id="ac-task-container" class="space-y-6">
                                <p id="no-tasks-msg" class="text-center text-gray-400 italic text-sm py-4">No tasks added yet. Click "Add Step" to begin.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-[35%] p-4 bg-gray-50 flex flex-col h-full border-l border-gray-200">
                        <div class="mb-4">
                            <div class="flex justify-between items-end mb-1">
                                <label class="block text-xs font-bold text-gray-500 uppercase">Assign to Section</label>
                                <button id="btn-ac-select-all" class="text-xs text-indigo-600 font-bold hover:underline">Select All</button>
                            </div>
                            <select id="ac-section" class="w-full p-2 border border-gray-300 rounded bg-white text-sm focus:border-indigo-500 outline-none shadow-sm">
                                <option value="">Loading Sections...</option>
                            </select>
                        </div>
                        
                        <div class="flex-1 overflow-hidden flex flex-col">
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Student List</label>
                            <div id="ac-student-list" class="flex-1 overflow-y-auto border border-gray-300 rounded p-2 bg-white text-sm shadow-inner">
                                <p class="text-gray-400 italic text-center mt-8">Select a section to load students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/4 bg-white border border-gray-200 flex flex-col rounded-lg shadow-sm">
                <div class="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                    <h3 class="font-bold text-gray-700 text-sm uppercase tracking-wide">Saved Activities</h3>
                </div>
                <div id="ac-saved-list" class="flex-1 overflow-y-auto p-4 space-y-3">
                    <p class="text-gray-400 text-sm italic text-center mt-8">Select a section to view saved work.</p>
                </div>
            </div>
        </div>
    `;

    attachListeners();
    loadSections();
}

function attachListeners() {
    // Add Task Button
    document.getElementById('btn-add-task').addEventListener('click', () => addTaskUI());

    // Section Change -> Load Students & Saved List
    document.getElementById('ac-section').addEventListener('change', async (e) => {
        currentSection = e.target.value;
        if (currentSection) {
            await loadStudents(currentSection);
            await loadSavedActivities(currentSection);
        }
    });

    // Select All Students
    document.getElementById('btn-ac-select-all').addEventListener('click', () => {
        document.querySelectorAll('.student-checkbox').forEach(cb => cb.checked = true);
    });

    // Save Button
    document.getElementById('btn-save-ac-activity').addEventListener('click', saveActivityToFirebase);
}

// --- UI GENERATORS ---

function addTaskUI(existingData = null) {
    const container = document.getElementById('ac-task-container');
    const noTasksMsg = document.getElementById('no-tasks-msg');
    if (noTasksMsg) noTasksMsg.style.display = 'none';

    // Calculate Task Number (Task 1, Task 2...) based on current children count
    const taskIndex = container.querySelectorAll('.task-card').length + 1;

    const div = document.createElement('div');
    div.className = "task-card bg-white p-4 rounded-lg border border-gray-300 shadow-sm relative text-sm border-l-4 border-l-indigo-500 hover:shadow-md transition-shadow";
    
    // Generate Options HTML
    const optionsHTML = ACCOUNTING_STEPS.map(step => `<option value="${step}">${step}</option>`).join('');

    div.innerHTML = `
        <div class="flex justify-between items-center mb-3">
            <h4 class="font-bold text-indigo-800 text-base">Task ${taskIndex}</h4>
            <button class="text-red-400 hover:text-red-600 transition" onclick="this.closest('.task-card').remove(); reorderTasks();">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="mb-3">
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Accounting Cycle Step</label>
            <select class="task-step w-full p-2 border rounded bg-gray-50 focus:border-indigo-500 outline-none">
                ${optionsHTML}
            </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Start Date/Time</label>
                <input type="datetime-local" class="task-start w-full p-2 border rounded focus:border-indigo-500">
            </div>
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Time Limit (Mins)</label>
                <input type="number" class="task-limit w-full p-2 border rounded focus:border-indigo-500" value="60">
            </div>
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry Date/Time</label>
                <input type="datetime-local" class="task-expire w-full p-2 border rounded focus:border-indigo-500">
            </div>
        </div>

        <div class="mb-3">
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Instructions</label>
            <textarea class="task-instructions w-full p-2 border rounded h-16 text-xs focus:border-indigo-500 resize-none" placeholder="Enter specific instructions for this step..."></textarea>
        </div>

        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Rubrics</label>
            <textarea class="task-rubrics w-full p-2 border rounded h-16 text-xs focus:border-indigo-500 resize-none" placeholder="Enter grading criteria..."></textarea>
        </div>
    `;

    container.appendChild(div);

    // Attach local logic for time calculation
    const startInput = div.querySelector('.task-start');
    const limitInput = div.querySelector('.task-limit');
    const expireInput = div.querySelector('.task-expire');

    // Auto-calculate expiry based on limit
    limitInput.addEventListener('input', () => {
        if (startInput.value && limitInput.value) {
            const start = new Date(startInput.value);
            const mins = parseInt(limitInput.value);
            const expire = new Date(start.getTime() + mins * 60000);
            // Adjust for local timezone to string
            expireInput.value = new Date(expire.getTime() - (expire.getTimezoneOffset() * 60000)).toISOString().slice(0, 16);
        }
    });

    // Populate existing data if editing
    if (existingData) {
        div.querySelector('.task-step').value = existingData.stepName;
        startInput.value = existingData.dateTimeStart;
        limitInput.value = existingData.timeLimit;
        expireInput.value = existingData.dateTimeExpire;
        div.querySelector('.task-instructions').value = existingData.instructions;
        div.querySelector('.task-rubrics').value = existingData.rubrics;
        
        // Update the header index in case we are reloading a specific set
        const header = div.querySelector('h4');
        if(header && existingData.taskLabel) header.innerText = existingData.taskLabel; 
    }
}

// Helper to keep "Task 1", "Task 2" labels correct after deletion
window.reorderTasks = function() {
    const container = document.getElementById('ac-task-container');
    const cards = container.querySelectorAll('.task-card');
    cards.forEach((card, index) => {
        card.querySelector('h4').innerText = `Task ${index + 1}`;
    });
    if (cards.length === 0) {
        document.getElementById('no-tasks-msg').style.display = 'block';
    }
};

// --- DATA FETCHING ---

async function loadSections() {
    const select = document.getElementById('ac-section');
    try {
        const q = query(collection(db, "students"));
        const querySnapshot = await getDocs(q);
        const sections = new Set();
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if(data.Section) sections.add(data.Section);
        });

        select.innerHTML = '<option value="">-- Select Section --</option>';
        Array.from(sections).sort().forEach(sec => {
            const option = document.createElement('option');
            option.value = sec;
            option.text = sec;
            select.appendChild(option);
        });
    } catch (e) {
        console.error("Error loading sections:", e);
        select.innerHTML = '<option value="">Error loading</option>';
    }
}

async function loadStudents(sectionName) {
    const listDiv = document.getElementById('ac-student-list');
    listDiv.innerHTML = '<p class="text-xs text-gray-500 text-center mt-4">Loading students...</p>';
    
    try {
        const q = query(collection(db, "students"), where("Section", "==", sectionName));
        const querySnapshot = await getDocs(q);
        
        listDiv.innerHTML = '';
        
        if (querySnapshot.empty) {
            listDiv.innerHTML = '<p class="text-xs text-gray-400 text-center mt-4">No students found in this section.</p>';
            return;
        }

        const students = [];
        querySnapshot.forEach((doc) => {
            students.push(doc.data());
        });

        students.sort((a, b) => a.LastName.localeCompare(b.LastName));

        students.forEach((data) => {
            const fullName = `${data.LastName}, ${data.FirstName}`;
            const id = data.Idnumber; 

            const div = document.createElement('div');
            div.className = "flex items-start gap-2 mb-2 p-1.5 hover:bg-indigo-50 rounded transition border-b border-gray-100 last:border-0";
            div.innerHTML = `
                <input type="checkbox" class="student-checkbox mt-1 accent-indigo-600 cursor-pointer" value="${id}" id="chk-${id}">
                <label for="chk-${id}" class="text-gray-700 cursor-pointer text-xs leading-tight select-none w-full">
                    <span class="font-bold text-indigo-900">${fullName}</span><br>
                    <span class="text-gray-400 text-[10px]">${id}</span>
                </label>
            `;
            listDiv.appendChild(div);
        });

    } catch (e) {
        console.error("Error loading students:", e);
        listDiv.innerHTML = '<p class="text-xs text-red-500 text-center mt-4">Error loading data.</p>';
    }
}

async function loadSavedActivities(section) {
    const container = document.getElementById('ac-saved-list');
    container.innerHTML = '<p class="text-xs text-gray-500 text-center mt-4"><i class="fas fa-spinner fa-spin mr-1"></i> Loading activities...</p>';
    
    try {
        // Query quiz_list where type is 'accounting_cycle' OR structure implies it (has 'tasks' array)
        const q = query(collection(db, "quiz_list"), where("section", "==", section));
        const snapshot = await getDocs(q);
        
        container.innerHTML = '';
        const activities = [];

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            // Filter: Only show activities that have 'tasks' array (Identifying them as Accounting Cycle)
            if (data.tasks && Array.isArray(data.tasks)) {
                activities.push(data);
            }
        });

        if (activities.length === 0) {
            container.innerHTML = '<p class="text-xs text-gray-400 text-center mt-4">No Accounting Cycle tasks found.</p>';
            return;
        }

        activities.forEach(data => {
            const btn = document.createElement('button');
            btn.className = "w-full text-left bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition mb-2 group relative overflow-hidden";
            btn.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                <div class="pl-2">
                    <div class="font-bold text-indigo-900 text-xs group-hover:text-indigo-600 truncate">${data.activityname}</div>
                    <div class="text-[10px] text-gray-500 mt-1 flex items-center gap-2">
                        <span><i class="far fa-clock mr-1"></i>${new Date(data.dateTimeCreated).toLocaleDateString()}</span>
                        <span class="bg-indigo-100 text-indigo-700 px-1 rounded font-bold">${data.tasks.length} Steps</span>
                    </div>
                </div>
            `;
            btn.onclick = () => populateCreatorForm(data);
            container.appendChild(btn);
        });

    } catch (e) {
        console.error(e);
        container.innerHTML = '<p class="text-xs text-red-400 text-center mt-4">Error loading list.</p>';
    }
}

// --- FORM HANDLING ---

function populateCreatorForm(data) {
    document.getElementById('ac-school-year').value = data.schoolYear || '25-26';
    document.getElementById('ac-activity-name').value = data.activityname;
    // Section is already selected if we clicked from the list, but strictly:
    document.getElementById('ac-section').value = data.section; 

    // Clear and Populate Tasks
    const container = document.getElementById('ac-task-container');
    container.innerHTML = ''; // Clear current
    
    if (data.tasks && Array.isArray(data.tasks)) {
        data.tasks.forEach((taskData, index) => {
            // Add label index for visual consistency
            taskData.taskLabel = `Task ${index + 1}`; 
            addTaskUI(taskData);
        });
    }

    // Select Students
    if (data.students && Array.isArray(data.students)) {
        document.querySelectorAll('.student-checkbox').forEach(cb => {
            cb.checked = data.students.includes(cb.value);
        });
    }
    
    // Hide empty msg
    const noTasksMsg = document.getElementById('no-tasks-msg');
    if (noTasksMsg) noTasksMsg.style.display = 'none';
}

async function saveActivityToFirebase() {
    const schoolYear = document.getElementById('ac-school-year').value;
    const activityName = document.getElementById('ac-activity-name').value;
    const section = document.getElementById('ac-section').value; 

    if (!activityName || !section) {
        alert("Please select an Activity Name and a Section.");
        return;
    }

    // Gather Students
    const selectedStudents = [];
    document.querySelectorAll('.student-checkbox:checked').forEach(cb => {
        selectedStudents.push(cb.value);
    });

    if (selectedStudents.length === 0) {
        alert("Please select at least one student.");
        return;
    }

    // Gather Tasks
    const tasks = [];
    const taskCards = document.querySelectorAll('.task-card');
    
    if (taskCards.length === 0) {
        alert("Please add at least one Accounting Cycle Task.");
        return;
    }

    let validationError = false;

    taskCards.forEach((card, index) => {
        const stepName = card.querySelector('.task-step').value;
        const start = card.querySelector('.task-start').value;
        const limit = card.querySelector('.task-limit').value;
        const expire = card.querySelector('.task-expire').value;
        const instructions = card.querySelector('.task-instructions').value;
        const rubrics = card.querySelector('.task-rubrics').value;

        if (!stepName || !start || !limit || !expire) {
            validationError = true;
        }

        tasks.push({
            taskId: index + 1,
            stepName,
            dateTimeStart: start,
            timeLimit: limit,
            dateTimeExpire: expire,
            instructions,
            rubrics
        });
    });

    if (validationError) {
        alert("Please fill in all Date and Time fields for every task.");
        return;
    }

    // Generate ID
    const cleanActName = activityName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const cleanSection = section.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const docId = `AC_${schoolYear}_${cleanActName}_${cleanSection}`; // Added AC_ prefix to distinguish ID

    const payload = {
        id: docId,
        type: 'accounting_cycle', // Flag to distinguish from standard quizzes
        schoolYear,
        activityname: activityName,
        section: section,
        students: selectedStudents,
        tasks: tasks, // Array of steps
        dateTimeCreated: new Date().toISOString()
    };

    try {
        await setDoc(doc(db, "quiz_list", docId), payload);
        alert("Accounting Activity saved successfully!");
        loadSavedActivities(section);
    } catch (e) {
        console.error("Error saving:", e);
        alert("Error saving activity: " + e.message);
    }
}
