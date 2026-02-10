import { getFirestore, collection, getDocs, doc, setDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// --- IMPORTS FROM QUESTION BANK ---
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

// State
let currentSection = null;
let selectedStudents = [];

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
                                    <option value="S2T1 Formative Test 02">S2T1 Formative Test 02</option>
                                    <option value="S2T1 Summative Test 01">S2T1 Summative Test 01</option>
                                    <option value="S2T1 Summative Test 02">S2T1 Summative Test 02</option>
                                    <option value="S2T1 Midterm Exam">S2T1 Midterm Exam</option>
                                    <option value="S2T1 Midterm Formative Exam">S2T1 Midterm Formative Exam</option>
                                    <option value="S2T2 Final Exam">S2T2 Final Exam</option>
                                </select>
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
    
    // HTML Structure
    // NOTE: Changed Selects to 'multiple' and added 'h-32' to keep them open for convenient selection
    div.innerHTML = `
        <div class="absolute top-2 right-2 cursor-pointer text-red-400 hover:text-red-600" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </div>
        <h4 class="font-bold text-gray-800 mb-2">Test Section ${index}</h4>
        
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
            <label class="block text-xs text-purple-600 font-bold mb-1">1. Filter by Competency</label>
            <div class="flex flex-col gap-1">
                <textarea class="section-competency-area w-full p-1 border rounded bg-white h-8 text-xs bg-purple-50" placeholder="All Competencies (Select below to filter)..."></textarea>
                <select multiple class="section-competency-select w-full p-1 border rounded bg-white text-xs h-32 cursor-pointer scrollbar-thin">
                    <option value="">Loading...</option>
                </select>
            </div>
        </div>

        <div class="mb-2">
            <label class="block text-xs text-blue-600 font-bold mb-1">2. Filter by Topic</label>
            <div class="flex flex-col gap-1">
                <textarea class="section-topics-area w-full p-1 border rounded bg-white h-8 text-xs bg-blue-50" placeholder="All Topics (Select below to filter)..."></textarea>
                <select multiple class="section-topic-select w-full p-1 border rounded bg-white text-xs h-32 cursor-pointer scrollbar-thin">
                    <option value="">Loading...</option>
                </select>
            </div>
        </div>

        <div class="mb-2">
            <label class="block text-xs text-green-600 font-bold mb-1">3. Filter by Subtopic</label>
             <div class="flex flex-col gap-1">
                <textarea class="section-subtopics-area w-full p-1 border rounded bg-white h-8 text-xs bg-green-50" placeholder="All Subtopics (Select below to filter)..."></textarea>
                <select multiple class="section-subtopic-select w-full p-1 border rounded bg-white text-xs h-32 cursor-pointer scrollbar-thin">
                    <option value="">Loading...</option>
                </select>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-2 mb-2 bg-blue-100 p-2 rounded">
            <div>
                <label class="block text-[10px] font-bold text-blue-800 uppercase mb-1">Start</label>
                <input type="datetime-local" class="section-start-time w-full p-1 border rounded text-xs">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-blue-800 uppercase mb-1">Mins</label>
                <input type="number" class="section-time-limit w-full p-1 border rounded text-xs" value="60">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-blue-800 uppercase mb-1">Expire</label>
                <input type="datetime-local" class="section-expire-time w-full p-1 border rounded text-xs">
            </div>
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

    // References
    const typeSelect = div.querySelector('.section-type');
    
    const competencySelect = div.querySelector('.section-competency-select');
    const competencyArea = div.querySelector('.section-competency-area');
    
    const topicSelect = div.querySelector('.section-topic-select');
    const topicArea = div.querySelector('.section-topics-area');
    
    const subtopicSelect = div.querySelector('.section-subtopic-select');
    const subtopicArea = div.querySelector('.section-subtopics-area');

    const startInput = div.querySelector('.section-start-time');
    const limitInput = div.querySelector('.section-time-limit');
    const expireInput = div.querySelector('.section-expire-time');

    // === DYNAMIC FILTERING LOGIC ===
    
    // Main function to refresh all dropdowns based on current textarea values
    const refreshAllDropdowns = () => {
        // Capture current selected filters
        const filters = {
            competency: competencyArea.value ? competencyArea.value.split(',').map(s => s.trim()).filter(Boolean) : [],
            topic: topicArea.value ? topicArea.value.split(',').map(s => s.trim()).filter(Boolean) : [],
            subtopic: subtopicArea.value ? subtopicArea.value.split(',').map(s => s.trim()).filter(Boolean) : []
        };
        const type = typeSelect.value;

        // Update Competency Dropdown (Filtered by Topic & Subtopic, but NOT by Competency to allow adding more)
        updateDropdownOptions(competencySelect, type, 'competency', { topic: filters.topic, subtopic: filters.subtopic });

        // Update Topic Dropdown (Filtered by Competency & Subtopic)
        updateDropdownOptions(topicSelect, type, 'topic', { competency: filters.competency, subtopic: filters.subtopic });

        // Update Subtopic Dropdown (Filtered by Competency & Topic)
        updateDropdownOptions(subtopicSelect, type, 'subtopic', { competency: filters.competency, topic: filters.topic });
    };

    // Initialize
    refreshAllDropdowns();

    // Event: Type Changed (Clear inputs and refresh)
    typeSelect.addEventListener('change', () => {
        competencyArea.value = "";
        topicArea.value = "";
        subtopicArea.value = "";
        refreshAllDropdowns();
    });

    // Helper to attach listeners to Select boxes (Click to add, then refresh others)
    const attachInteraction = (select, area) => {
        // Use 'click' on options or 'change' on select. 
        // For 'multiple' select, 'change' works best.
        select.addEventListener('change', (e) => {
            const selectedVals = Array.from(select.selectedOptions).map(opt => opt.value);
            
            // Append selections to textarea
            let current = area.value ? area.value.split(',').map(s => s.trim()).filter(Boolean) : [];
            
            selectedVals.forEach(val => {
                if(!current.includes(val)) current.push(val);
            });
            
            area.value = current.join(', ');
            
            // Unselect visual highlights in listbox to indicate "added" (optional, but cleaner for repeated adding)
            select.selectedIndex = -1; 
            
            // Trigger filtering of OTHER boxes
            refreshAllDropdowns();
        });
    };

    // Helper to attach listeners to TextAreas (Manual typing updates filters)
    const attachManualTyping = (area) => {
        area.addEventListener('input', () => {
             refreshAllDropdowns();
        });
    };

    attachInteraction(competencySelect, competencyArea);
    attachInteraction(topicSelect, topicArea);
    attachInteraction(subtopicSelect, subtopicArea);

    attachManualTyping(competencyArea);
    attachManualTyping(topicArea);
    attachManualTyping(subtopicArea);

    // === TIME LOGIC (Per Section) ===
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

    // === POPULATE EXISTING DATA ===
    if(existingData) {
        typeSelect.value = existingData.type;
        div.querySelector('.section-count').value = existingData.noOfQuestions;
        div.querySelector('.section-instructions').value = existingData.instructions;
        div.querySelector('.section-rubrics').value = existingData.gradingRubrics;
        
        competencyArea.value = existingData.competencies || "";
        topicArea.value = existingData.topics || "";
        subtopicArea.value = existingData.subtopics || "";

        if(existingData.dateTimeStart) startInput.value = existingData.dateTimeStart;
        if(existingData.timeLimit) limitInput.value = existingData.timeLimit;
        if(existingData.dateTimeExpire) expireInput.value = existingData.dateTimeExpire;
        
        // Refresh options based on the loaded text data
        refreshAllDropdowns();
    }
}

/**
 * Filtered Metadata Loader
 * Loads unique values for targetField from sourceData,
 * but only includes rows that match the constraints in filterCriteria.
 */
function updateDropdownOptions(selectElement, type, targetField, filterCriteria) {
    let sourceData = [];
    
    if (type === "Multiple Choice") sourceData = qbMerchMultipleChoice;
    else if (type === "Problem Solving") sourceData = qbMerchProblemSolving;
    else if (type === "Journalizing") sourceData = qbMerchJournalizing;

    if (!sourceData || sourceData.length === 0) {
        selectElement.innerHTML = '<option value="">No data found</option>';
        return;
    }

    try {
        const uniqueValues = new Set();

        sourceData.forEach(item => {
            const q = Object.values(item)[0]; // Get the question object
            
            // CHECK FILTERS
            // 1. If competency filters exist, does this question match?
            if (filterCriteria.competency && filterCriteria.competency.length > 0) {
                if (!q.competency || !filterCriteria.competency.includes(q.competency.trim())) return;
            }

            // 2. If topic filters exist, does this question match?
            if (filterCriteria.topic && filterCriteria.topic.length > 0) {
                if (!q.topic || !filterCriteria.topic.includes(q.topic.trim())) return;
            }

            // 3. If subtopic filters exist, does this question match?
            if (filterCriteria.subtopic && filterCriteria.subtopic.length > 0) {
                if (!q.subtopic || !filterCriteria.subtopic.includes(q.subtopic.trim())) return;
            }

            // If we passed all filters, add the target field value
            if (q[targetField]) {
                uniqueValues.add(q[targetField].trim());
            }
        });

        const sortedValues = Array.from(uniqueValues).filter(t => t).sort();

        selectElement.innerHTML = ''; // Clear existing
        if (sortedValues.length === 0) {
            const opt = document.createElement('option');
            opt.text = "-- No matching options --";
            opt.disabled = true;
            selectElement.appendChild(opt);
        } else {
            sortedValues.forEach(val => {
                const opt = document.createElement('option');
                opt.value = val;
                opt.text = val;
                selectElement.appendChild(opt);
            });
        }

    } catch (e) {
        console.error(`Error filtering ${targetField}:`, e);
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
            // Get earliest start time from test sections for display, or N/A
            let displayDate = "N/A";
            if (data.testQuestions && data.testQuestions.length > 0 && data.testQuestions[0].dateTimeStart) {
                displayDate = new Date(data.testQuestions[0].dateTimeStart).toLocaleDateString();
            }

            const btn = document.createElement('button');
            btn.className = "w-full text-left bg-white p-3 rounded border border-gray-200 shadow-sm hover:border-blue-400 transition mb-2 group";
            btn.innerHTML = `
                <div class="font-bold text-blue-900 text-xs group-hover:text-blue-600">${data.activityname}</div>
                <div class="text-[10px] text-gray-400 mt-1">
                    <i class="far fa-clock mr-1"></i>${displayDate}
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
    
    // Clear existing sections
    const sectionContainer = document.getElementById('qc-test-sections');
    sectionContainer.innerHTML = '';

    // Populate new sections with their specific time/filter data
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

    if(!activityName || !section) {
        alert("Please fill in Activity Name and Section.");
        return;
    }

    const selectedStudents = [];
    document.querySelectorAll('.student-checkbox:checked').forEach(cb => {
        selectedStudents.push(cb.value);
    });

    const testQuestions = [];
    const sectionDivs = document.getElementById('qc-test-sections').children;
    
    // Collect all topics/competencies for global metadata if needed (optional)
    let allTopics = new Set();

    for(let div of sectionDivs) {
        // Collect raw string values from textareas
        const topics = div.querySelector('.section-topics-area').value;
        const competencies = div.querySelector('.section-competency-area').value;
        const subtopics = div.querySelector('.section-subtopics-area').value;

        // Collect Time Data Per Section
        const start = div.querySelector('.section-start-time').value;
        const limit = div.querySelector('.section-time-limit').value;
        const expire = div.querySelector('.section-expire-time').value;

        if(!start || !expire) {
            alert("Please ensure all test sections have Start and Expiry times.");
            return;
        }

        if(topics) topics.split(',').forEach(t => allTopics.add(t.trim()));

        testQuestions.push({
            type: div.querySelector('.section-type').value,
            noOfQuestions: div.querySelector('.section-count').value,
            
            // Filters
            competencies: competencies,
            topics: topics,
            subtopics: subtopics,
            
            // Per-Section Timing
            dateTimeStart: start,
            timeLimit: limit,
            dateTimeExpire: expire,

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
        topics: Array.from(allTopics).join(', '),
        testQuestions,
        // Removed global time properties (dateTimeStart, timeLimit, dateTimeExpire)
        // as they are now strictly inside testQuestions
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
