import { getFirestore, collection, getDocs, doc, setDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// Assuming you export 'db' from auth.js or init it here. 
// For safety, re-initializing using your config to ensure standalone functionality within the module context.
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

// State
let currentAttendanceId = null;
let selectedStudents = [];
let testSections = [];

export async function renderQuizActivityCreator(container) {
    container.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6 h-full p-4 overflow-hidden">
            <div class="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden">
                <div class="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h2 class="font-bold text-lg text-blue-900"><i class="fas fa-magic mr-2"></i>Create/Edit Activity</h2>
                    <button id="btn-save-activity" class="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-green-700 transition">
                        <i class="fas fa-save mr-2"></i>Save to Firebase
                    </button>
                </div>
                
                <div class="p-6 overflow-y-auto space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">School Year</label>
                            <select id="qc-school-year" class="w-full p-2 border rounded bg-gray-50">
                                <option value="25-26">25-26</option>
                                <option value="26-27">26-27</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Activity Name</label>
                            <select id="qc-activity-name" class="w-full p-2 border rounded" placeholder="e.g., Q1 Summative Test">
                                <option value="">-- Select Activity --</option>
                                <option value="S1T2 Summative Test 01">S1T2 Summative Test 01</option>
                                <option value="S1T2 Performance Task 01">S1T2 Performance Task 01</option>
                                <option value="S1T2 Performance Task 02">S1T2 Performance Task 02</option>
		                        <option value="S2T1 Summative Test 01">S2T1 Summative Test 01</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Attendance Record</label>
                            <select id="qc-attendance" class="w-full p-2 border rounded bg-gray-50">
                                <option value="">Loading...</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Select Students</label>
                            <div id="qc-student-list" class="h-32 overflow-y-auto border rounded p-2 bg-gray-50 text-sm">
                                <p class="text-gray-400 italic">Select an attendance record first.</p>
                            </div>
                            <div class="flex justify-end mt-1">
                                <button id="btn-select-all-students" class="text-xs text-blue-600 font-bold hover:underline">Select All</button>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-50 p-4 rounded border border-blue-100">
                        <div>
                            <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Start Date/Time</label>
                            <input type="datetime-local" id="qc-start-time" class="w-full p-2 border rounded text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Time Limit (Minutes)</label>
                            <input type="number" id="qc-time-limit" class="w-full p-2 border rounded text-sm" value="60">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Expiration Date/Time</label>
                            <input type="datetime-local" id="qc-expire-time" class="w-full p-2 border rounded text-sm">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Topics (Select/Type)</label>
                        <select id="qc-topic-select" class="w-full p-2 border rounded mb-2 bg-gray-50 text-sm">
                            <option value="">-- Add a Topic --</option>
                            <option value="Merchandising Operations">Merchandising Operations</option>
                            <option value="FIFO Costing">FIFO Costing</option>
                            <option value="Weighted Average Costing">Weighted Average Costing</option>
                            <option value="Moving Average Costing">Moving Average Costing</option>
                            <option value="Periodic Inventory System">Periodic Inventory System</option>
                            <option value="Perpetual Inventory System">Perpetual Inventory System</option>
                            <option value="Trade Discounts">Trade Discounts</option>
                            <option value="Cash Discounts">Cash Discounts</option>
                            <option value="Freight Cost">Freight Cost</option>
                        </select>
                        <textarea id="qc-topics-area" class="w-full p-2 border rounded font-mono text-sm h-20" placeholder="Selected topics will appear here..."></textarea>
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="block text-xs font-bold text-gray-500 uppercase">Test Sections</label>
                            <button id="btn-add-section" class="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                                <i class="fas fa-plus mr-1"></i> Add Test Type
                            </button>
                        </div>
                        <div id="qc-test-sections" class="space-y-4">
                            </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/3 bg-gray-50 border-l border-gray-200 flex flex-col">
                <div class="p-4 border-b border-gray-200 bg-white">
                    <h3 class="font-bold text-gray-700 text-sm">Saved Quizzes for Selected Record</h3>
                </div>
                <div id="qc-saved-list" class="flex-1 overflow-y-auto p-4 space-y-2">
                    <p class="text-gray-400 text-sm italic text-center mt-4">Select an attendance record to view existing quizzes.</p>
                </div>
            </div>
        </div>
    `;

    attachCreatorListeners();
    loadAttendanceRecords();
}

function attachCreatorListeners() {
    // Attendance Change
    document.getElementById('qc-attendance').addEventListener('change', async (e) => {
        currentAttendanceId = e.target.value;
        if(currentAttendanceId) {
            await loadStudentsForAttendance(currentAttendanceId);
            await loadSavedQuizzes(currentAttendanceId);
        }
    });

    // Select All Students
    document.getElementById('btn-select-all-students').addEventListener('click', () => {
        document.querySelectorAll('.student-checkbox').forEach(cb => cb.checked = true);
    });

    // Topic Selection
    document.getElementById('qc-topic-select').addEventListener('change', (e) => {
        const val = e.target.value;
        const area = document.getElementById('qc-topics-area');
        if(val) {
            const current = area.value ? area.value + ', ' : '';
            area.value = current + val;
            e.target.value = ""; // Reset
        }
    });

    // Time Logic
    const startInput = document.getElementById('qc-start-time');
    const limitInput = document.getElementById('qc-time-limit');
    const expireInput = document.getElementById('qc-expire-time');

    limitInput.addEventListener('input', () => {
        if(startInput.value && limitInput.value) {
            const start = new Date(startInput.value);
            const mins = parseInt(limitInput.value);
            const expire = new Date(start.getTime() + mins * 60000);
            // Format to datetime-local string (YYYY-MM-DDTHH:mm)
            expireInput.value = new Date(expire.getTime() - (expire.getTimezoneOffset() * 60000)).toISOString().slice(0, 16);
        }
    });

    expireInput.addEventListener('change', () => {
        if(startInput.value && expireInput.value) {
            const start = new Date(startInput.value);
            const end = new Date(expireInput.value);
            const diffMs = end - start;
            const diffMins = Math.floor(diffMs / 60000);
            if(diffMins > 0) limitInput.value = diffMins;
        }
    });

    // Add Test Section
    document.getElementById('btn-add-section').addEventListener('click', addTestSectionUI);

    // Save Button
    document.getElementById('btn-save-activity').addEventListener('click', saveActivityToFirebase);
}

function addTestSectionUI(existingData = null) {
    const container = document.getElementById('qc-test-sections');
    const index = container.children.length + 1;
    
    const div = document.createElement('div');
    div.className = "bg-white p-4 rounded border border-gray-300 shadow-sm relative";
    div.innerHTML = `
        <div class="absolute top-2 right-2 cursor-pointer text-red-400 hover:text-red-600" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </div>
        <h4 class="font-bold text-sm text-gray-800 mb-2">Test ${index}</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
                <label class="block text-xs text-gray-500 mb-1">Type</label>
                <select class="section-type w-full p-1 border rounded text-sm">
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="Problem Solving">Problem Solving</option>
                    <option value="Journalizing">Journalizing</option>
                </select>
            </div>
            <div>
                <label class="block text-xs text-gray-500 mb-1">No. of Questions</label>
                <input type="number" class="section-count w-full p-1 border rounded text-sm" value="5">
            </div>
        </div>
        <div class="mb-2">
            <label class="block text-xs text-gray-500 mb-1">Instructions</label>
            <input type="text" class="section-instructions w-full p-1 border rounded text-sm">
        </div>
        <div>
            <label class="block text-xs text-gray-500 mb-1">Grading Rubrics</label>
            <textarea class="section-rubrics w-full p-1 border rounded text-sm h-16"></textarea>
        </div>
    `;
    container.appendChild(div);

    if(existingData) {
        div.querySelector('.section-type').value = existingData.type;
        div.querySelector('.section-count').value = existingData.noOfQuestions;
        div.querySelector('.section-instructions').value = existingData.instructions;
        div.querySelector('.section-rubrics').value = existingData.gradingRubrics;
    }
}

async function loadAttendanceRecords() {
    const select = document.getElementById('qc-attendance');
    try {
        const q = query(collection(db, "attendance"), orderBy("date", "desc"), limit(20));
        const querySnapshot = await getDocs(q);
        select.innerHTML = '<option value="">-- Select Record --</option>';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const option = document.createElement('option');
            option.value = doc.id;
            option.text = `${data.date} - ${data.section} (${doc.id})`;
            select.appendChild(option);
        });
    } catch (e) {
        console.error("Error loading attendance:", e);
    }
}

async function loadStudentsForAttendance(docId) {
    const listDiv = document.getElementById('qc-student-list');
    listDiv.innerHTML = '<p class="text-xs text-gray-500">Loading students...</p>';
    
    try {
        // Assuming the attendance doc has a 'students' array or a subcollection. 
        // Based on typical logic, let's assume we fetch the doc to get the student list.
        // For this example, I'll mock extracting student names from the attendance record itself 
        // OR fetching from a 'students' collection where 'section' matches.
        // Let's assume the attendance document contains a list of student objects or IDs.
        
        // *Actual Implementation based on typical Firestore structure provided in previous prompts*:
        // Since I don't see the exact structure of "attendance" collection in provided code, 
        // I will assume the document has a field 'presentStudents' or similar, or we query the students collection.
        // Let's query the 'students' collection filtered by the section found in the attendance doc.
        
        // 1. Get Attendance Doc for Section Name
        // const attRef = doc(db, "attendance", docId);
        // const attSnap = await getDoc(attRef);
        // const section = attSnap.data().section;

        // Simplified: Just mocking names for visual representation as I cannot query your specific student DB structure without more info.
        // In production, replace this with actual query.
        const mockStudents = ["Student A", "Student B", "Student C", "Student D", "Student E"]; 
        
        listDiv.innerHTML = '';
        mockStudents.forEach(name => {
            const div = document.createElement('div');
            div.className = "flex items-center gap-2 mb-1";
            div.innerHTML = `
                <input type="checkbox" class="student-checkbox" value="${name}" id="chk-${name}">
                <label for="chk-${name}" class="text-gray-700">${name}</label>
            `;
            listDiv.appendChild(div);
        });

    } catch (e) {
        listDiv.innerHTML = 'Error loading students';
    }
}

async function loadSavedQuizzes(attId) {
    const container = document.getElementById('qc-saved-list');
    container.innerHTML = '<p class="text-xs text-gray-500">Loading...</p>';
    
    try {
        // Query quiz_list where attendanceRecord == attId
        const q = query(collection(db, "quiz_list"), where("attendanceRecord", "==", attId));
        const snapshot = await getDocs(q);
        
        container.innerHTML = '';
        if(snapshot.empty) {
            container.innerHTML = '<p class="text-sm text-gray-400 text-center">No quizzes found.</p>';
            return;
        }

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            const btn = document.createElement('button');
            btn.className = "w-full text-left bg-white p-3 rounded border border-gray-200 shadow-sm hover:border-blue-400 transition mb-2";
            btn.innerHTML = `
                <div class="font-bold text-blue-900 text-sm">${data.activityname}</div>
                <div class="text-xs text-gray-500">${data.dateTimeStart}</div>
            `;
            btn.onclick = () => populateCreatorForm(data);
            container.appendChild(btn);
        });

    } catch (e) {
        console.error(e);
        container.innerHTML = 'Error loading list';
    }
}

function populateCreatorForm(data) {
    document.getElementById('qc-school-year').value = data.schoolYear || '25-26';
    document.getElementById('qc-activity-name').value = data.activityname;
    document.getElementById('qc-start-time').value = data.dateTimeStart;
    document.getElementById('qc-time-limit').value = data.timeLimit;
    document.getElementById('qc-expire-time').value = data.dateTimeExpire;
    document.getElementById('qc-topics-area').value = data.topics;
    
    // Test Sections
    const sectionContainer = document.getElementById('qc-test-sections');
    sectionContainer.innerHTML = '';
    if(data.testQuestions && Array.isArray(data.testQuestions)) {
        data.testQuestions.forEach(section => addTestSectionUI(section));
    }

    // Students (Checkboxes)
    if(data.students && Array.isArray(data.students)) {
        document.querySelectorAll('.student-checkbox').forEach(cb => {
            cb.checked = data.students.includes(cb.value);
        });
    }
}

async function saveActivityToFirebase() {
    const schoolYear = document.getElementById('qc-school-year').value;
    const activityName = document.getElementById('qc-activity-name').value;
    const attendanceId = document.getElementById('qc-attendance').value;
    const topics = document.getElementById('qc-topics-area').value;
    const start = document.getElementById('qc-start-time').value;
    const limit = document.getElementById('qc-time-limit').value;
    const expire = document.getElementById('qc-expire-time').value;

    if(!activityName || !attendanceId || !start || !expire) {
        alert("Please fill in all required fields (Activity Name, Attendance, Dates).");
        return;
    }

    // Get Selected Students
    const selectedStudents = [];
    document.querySelectorAll('.student-checkbox:checked').forEach(cb => {
        selectedStudents.push(cb.value);
    });

    // Get Test Sections
    const testQuestions = [];
    const sectionDivs = document.getElementById('qc-test-sections').children;
    for(let div of sectionDivs) {
        testQuestions.push({
            type: div.querySelector('.section-type').value,
            noOfQuestions: div.querySelector('.section-count').value,
            instructions: div.querySelector('.section-instructions').value,
            gradingRubrics: div.querySelector('.section-rubrics').value
        });
    }

    // ID Format: [SY]_[Activity]_[AttendanceID]
    // Clean string for ID usage
    const cleanActName = activityName.replace(/\s+/g, '-').toLowerCase();
    const docId = `${schoolYear}_${cleanActName}_${attendanceId}`;

    const payload = {
        id: docId,
        schoolYear,
        activityname: activityName,
        topics,
        testQuestions,
        dateTimeStart: start,
        timeLimit: limit,
        dateTimeExpire: expire,
        students: selectedStudents,
        attendanceRecord: attendanceId,
        dateTimeCreated: new Date().toISOString()
    };

    try {
        await setDoc(doc(db, "quiz_list", docId), payload);
        alert("Activity saved successfully!");
        loadSavedQuizzes(attendanceId); // Refresh list
    } catch (e) {
        console.error("Error saving:", e);
        alert("Error saving activity: " + e.message);
    }
}
