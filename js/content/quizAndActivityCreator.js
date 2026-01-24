import { getFirestore, collection, getDocs, doc, setDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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
let currentSection = null;
let selectedStudents = [];
let testSections = [];

export async function renderQuizActivityCreator(container) {
    container.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6 h-full p-4 overflow-hidden">
            <div class="flex-[3] bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden">
                <div class="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h2 class="font-bold text-lg text-blue-900"><i class="fas fa-magic mr-2"></i>Create/Edit Activity</h2>
                    <button id="btn-save-activity" class="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-green-700 transition">
                        <i class="fas fa-save mr-2"></i>Save
                    </button>
                </div>
                
                <div class="flex flex-col md:flex-row h-full overflow-hidden">
                    <div class="w-full md:w-[70%] p-6 overflow-y-auto space-y-4 border-r border-gray-200">
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
                                <select id="qc-activity-name" class="w-full p-2 border rounded">
                                    <option value="">-- Select Activity --</option>
                                    <option value="S1T2 Summative Test 01">S1T2 Summative Test 01</option>
                                    <option value="S1T2 Performance Task 01">S1T2 Performance Task 01</option>
                                    <option value="S1T2 Performance Task 02">S1T2 Performance Task 02</option>
                                    <option value="S2T1 Summative Test 01">S2T1 Summative Test 01</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-50 p-4 rounded border border-blue-100">
                            <div>
                                <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Start Date/Time</label>
                                <input type="datetime-local" id="qc-start-time" class="w-full p-2 border rounded text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Time Limit (Mins)</label>
                                <input type="number" id="qc-time-limit" class="w-full p-2 border rounded text-sm" value="60">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-blue-800 uppercase mb-1">Expiry Date/Time</label>
                                <input type="datetime-local" id="qc-expire-time" class="w-full p-2 border rounded text-sm">
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label class="block text-xs font-bold text-gray-500 uppercase">Test Sections</label>
                                <button id="btn-add-section" class="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                                    <i class="fas fa-plus mr-1"></i> Add
                                </button>
                            </div>
                            <div id="qc-test-sections" class="space-y-4"></div>
                        </div>
                    </div>

                    <div class="w-full md:w-[30%] p-4 bg-gray-50 flex flex-col h-full">
                        <div class="mb-2">
                            <div class="flex justify-between items-end mb-1">
                                <label class="block text-xs font-bold text-gray-500 uppercase">Section</label>
                                <button id="btn-select-all-students" class="text-xs text-blue-600 font-bold hover:underline">Select All</button>
                            </div>
                            <select id="qc-section" class="w-full p-2 border rounded bg-white text-sm">
                                <option value="">Loading Sections...</option>
                            </select>
                        </div>
                        
                        <div class="flex-1 overflow-hidden flex flex-col">
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Students</label>
                            <div id="qc-student-list" class="flex-1 overflow-y-auto border rounded p-2 bg-white text-sm">
                                <p class="text-gray-400 italic text-center mt-4">Select a section to load students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/4 bg-gray-50 border-l border-gray-200 flex flex-col rounded-lg border">
                <div class="p-4 border-b border-gray-200 bg-white rounded-t-lg">
                    <h3 class="font-bold text-gray-700 text-sm">Saved Activities</h3>
                </div>
                <div id="qc-saved-list" class="flex-1 overflow-y-auto p-4 space-y-2">
                    <p class="text-gray-400 text-sm italic text-center mt-4">Select a section to view saved work.</p>
                </div>
            </div>
        </div>
    `;

    attachCreatorListeners();
    loadSections();
}

function attachCreatorListeners() {
    // Section Change
    document.getElementById('qc-section').addEventListener('change', async (e) => {
        currentSection = e.target.value;
        if(currentSection) {
            await loadStudents(currentSection);
            await loadSavedQuizzes(currentSection);
        }
    });

    // Select All Students
    document.getElementById('btn-select-all-students').addEventListener('click', () => {
        document.querySelectorAll('.student-checkbox').forEach(cb => cb.checked = true);
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
    document.getElementById('btn-add-section').addEventListener('click', () => addTestSectionUI());

    // Save Button
    document.getElementById('btn-save-activity').addEventListener('click', saveActivityToFirebase);
}

function addTestSectionUI(existingData = null) {
    const container = document.getElementById('qc-test-sections');
    const index = container.children.length + 1;
    
    const div = document.createElement('div');
    div.className = "bg-gray-50 p-3 rounded border border-gray-300 shadow-sm relative text-sm section-card";
    div.innerHTML = `
        <div class="absolute top-2 right-2 cursor-pointer text-red-400 hover:text-red-600" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </div>
        <h4 class="font-bold text-gray-800 mb-2">Test ${index}</h4>
        <div class="grid grid-cols-2 gap-2 mb-2">
            <div>
                <label class="block text-xs text-gray-500 mb-1">Type</label>
                <select class="section-type w-full p-1 border rounded bg-white">
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="Problem Solving">Problem Solving</option>
                    <option value="Journalizing">Journalizing</option>
                </select>
            </div>
            <div>
                <label class="block text-xs text-gray-500 mb-1">Qty</label>
                <input type="number" class="section-count w-full p-1 border rounded bg-white" value="5">
            </div>
        </div>
        
        <div class="mb-2">
            <label class="block text-xs text-gray-500 mb-1">Topics (Filtered by Type)</label>
            <select class="section-topic-select w-full p-1 border rounded bg-white mb-1">
                <option value="">Loading topics...</option>
            </select>
            <textarea class="section-topics-area w-full p-1 border rounded bg-white h-10 text-xs" placeholder="Selected topics..."></textarea>
        </div>

        <div class="mb-2">
            <label class="block text-xs text-gray-500 mb-1">Instructions</label>
            <input type="text" class="section-instructions w-full p-1 border rounded bg-white">
        </div>
        <div>
            <label class="block text-xs text-gray-500 mb-1">Rubrics</label>
            <textarea class="section-rubrics w-full p-1 border rounded bg-white h-12"></textarea>
        </div>
    `;
    container.appendChild(div);

    const typeSelect = div.querySelector('.section-type');
    const topicSelect = div.querySelector('.section-topic-select');
    const topicArea = div.querySelector('.section-topics-area');

    // Load initial topics for default type
    loadTopicsForType(typeSelect.value, topicSelect);

    // Event Listeners
    typeSelect.addEventListener('change', () => {
        loadTopicsForType(typeSelect.value, topicSelect);
        topicArea.value = ""; // Clear selected on type change
    });

    topicSelect.addEventListener('change', (e) => {
        if(e.target.value) {
            const current = topicArea.value ? topicArea.value + ', ' : '';
            topicArea.value = current + e.target.value;
            e.target.value = ""; // Reset dropdown
        }
    });

    if(existingData) {
        div.querySelector('.section-type').value = existingData.type;
        div.querySelector('.section-count').value = existingData.noOfQuestions;
        div.querySelector('.section-instructions').value = existingData.instructions;
        div.querySelector('.section-rubrics').value = existingData.gradingRubrics;
        div.querySelector('.section-topics-area').value = existingData.topics || "";
        
        // Reload topics for saved type
        loadTopicsForType(existingData.type, topicSelect);
    }
}

// Helper to fetch topics from Firebase based on Question Type
async function loadTopicsForType(type, selectElement) {
    selectElement.innerHTML = '<option value="">Loading...</option>';
    let collectionName = "";
    
    if (type === "Multiple Choice") collectionName = "qbMultipleChoice";
    else if (type === "Problem Solving") collectionName = "qbProblemSolving";
    else if (type === "Journalizing") collectionName = "qbJournalizing";

    if (!collectionName) {
        selectElement.innerHTML = '<option value="">Unknown Type</option>';
        return;
    }

    try {
        const q = query(collection(db, collectionName));
        const snapshot = await getDocs(q);
        const topics = new Set();

        snapshot.forEach(doc => {
            const data = doc.data();
            // Data structure: { "subject-topic-count": { topic: "..." } } 
            // OR flattened? Assuming standard doc data has 'topic' field inside.
            // Based on your prompt layout: { "qbMultipleChoice": { "id": { "topic": "..." } } }
            // Firestore collection queries return documents. 
            // If you uploaded using the importer: doc ID is key, data is value.
            if(data.topic) topics.add(data.topic);
        });

        selectElement.innerHTML = '<option value="">-- Add Topic --</option>';
        Array.from(topics).sort().forEach(topic => {
            const opt = document.createElement('option');
            opt.value = topic;
            opt.text = topic;
            selectElement.appendChild(opt);
        });

    } catch (e) {
        console.error(`Error loading topics for ${type}:`, e);
        selectElement.innerHTML = '<option value="">Error loading</option>';
    }
}

async function loadSections() {
    const select = document.getElementById('qc-section');
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
    const listDiv = document.getElementById('qc-student-list');
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
            div.className = "flex items-start gap-2 mb-2 p-1 hover:bg-blue-50 rounded transition";
            div.innerHTML = `
                <input type="checkbox" class="student-checkbox mt-1" value="${id}" id="chk-${id}">
                <label for="chk-${id}" class="text-gray-700 cursor-pointer text-xs leading-tight select-none">
                    <span class="font-bold">${fullName}</span><br>
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

async function loadSavedQuizzes(section) {
    const container = document.getElementById('qc-saved-list');
    container.innerHTML = '<p class="text-xs text-gray-500 text-center mt-4">Loading activities...</p>';
    
    try {
        const q = query(collection(db, "quiz_list"), where("section", "==", section));
        const snapshot = await getDocs(q);
        
        container.innerHTML = '';
        if(snapshot.empty) {
            container.innerHTML = '<p class="text-xs text-gray-400 text-center mt-4">No activities found for this section.</p>';
            return;
        }

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            const btn = document.createElement('button');
            btn.className = "w-full text-left bg-white p-3 rounded border border-gray-200 shadow-sm hover:border-blue-400 transition mb-2 group";
            btn.innerHTML = `
                <div class="font-bold text-blue-900 text-xs group-hover:text-blue-600">${data.activityname}</div>
                <div class="text-[10px] text-gray-400 mt-1">
                    <i class="far fa-clock mr-1"></i>${new Date(data.dateTimeStart).toLocaleDateString()}
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

function populateCreatorForm(data) {
    document.getElementById('qc-school-year').value = data.schoolYear || '25-26';
    document.getElementById('qc-activity-name').value = data.activityname;
    document.getElementById('qc-start-time').value = data.dateTimeStart;
    document.getElementById('qc-time-limit').value = data.timeLimit;
    document.getElementById('qc-expire-time').value = data.dateTimeExpire;
    
    const sectionContainer = document.getElementById('qc-test-sections');
    sectionContainer.innerHTML = '';
    if(data.testQuestions && Array.isArray(data.testQuestions)) {
        data.testQuestions.forEach(section => addTestSectionUI(section));
    }

    if(data.students && Array.isArray(data.students)) {
        document.querySelectorAll('.student-checkbox').forEach(cb => {
            cb.checked = data.students.includes(cb.value);
        });
    }
}

async function saveActivityToFirebase() {
    const schoolYear = document.getElementById('qc-school-year').value;
    const activityName = document.getElementById('qc-activity-name').value;
    const section = document.getElementById('qc-section').value; 
    const start = document.getElementById('qc-start-time').value;
    const limit = document.getElementById('qc-time-limit').value;
    const expire = document.getElementById('qc-expire-time').value;

    if(!activityName || !section || !start || !expire) {
        alert("Please fill in all required fields.");
        return;
    }

    const selectedStudents = [];
    document.querySelectorAll('.student-checkbox:checked').forEach(cb => {
        selectedStudents.push(cb.value);
    });

    const testQuestions = [];
    const sectionDivs = document.getElementById('qc-test-sections').children;
    
    // Collect all topics from sections for global metadata if needed
    let allTopics = new Set();

    for(let div of sectionDivs) {
        const topics = div.querySelector('.section-topics-area').value;
        if(topics) topics.split(',').forEach(t => allTopics.add(t.trim()));

        testQuestions.push({
            type: div.querySelector('.section-type').value,
            noOfQuestions: div.querySelector('.section-count').value,
            topics: topics, // Save topics per section
            instructions: div.querySelector('.section-instructions').value,
            gradingRubrics: div.querySelector('.section-rubrics').value
        });
    }

    const cleanActName = activityName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const cleanSection = section.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const docId = `${schoolYear}_${cleanActName}_${cleanSection}`;

    const payload = {
        id: docId,
        schoolYear,
        activityname: activityName,
        topics: Array.from(allTopics).join(', '), // Aggregated topics string
        testQuestions,
        dateTimeStart: start,
        timeLimit: limit,
        dateTimeExpire: expire,
        students: selectedStudents,
        section: section,
        dateTimeCreated: new Date().toISOString()
    };

    try {
        await setDoc(doc(db, "quiz_list", docId), payload);
        alert("Activity saved successfully!");
        loadSavedQuizzes(section);
    } catch (e) {
        console.error("Error saving:", e);
        alert("Error saving activity: " + e.message);
    }
}
