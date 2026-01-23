// Change import to include getApps and getApp to check for existing instances
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// --- CONFIGURATION ---
const firebaseConfig = {
    apiKey: "AIzaSyAgOsKAZWwExUzupxSNytsfOo9BOppF0ng",
    authDomain: "jlvcpa-quizzes.firebaseapp.com",
    projectId: "jlvcpa-quizzes",
    storageBucket: "jlvcpa-quizzes.firebasestorage.app",
    messagingSenderId: "629158256557",
    appId: "1:629158256557:web:b3d1a424b32e28cd578b24"
};

// --- SAFE INITIALIZATION ---
// Check if an app is already initialized to prevent the duplicate-app error
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp(); // Use the existing app instance
}

const db = getFirestore(app);

// --- TEMPLATES & SAMPLES ---

// SVG Icons for visuals
const svgs = {
    upload: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    // Icons for sample panel header
    list: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
    calc: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>`,
    pen: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
};

const samples = {
    multiple: {
        title: "Multiple Choice",
        icon: svgs.list,
        code: `{
  "qbMultipleChoice": {
    "FABM1-History-001": {
      "subject": "FABM 1",
      "type": "Multiple Choice",
      "topic": "History of Accounting",
      "competency": "Remember",
      "question": "When was the ASC established?",
      "options": ["1973", "1981", "1995", "2001"],
      "answer": 1,
      "explanation": "Established in 1981."
    }
  }
}`
    },
    problem: {
        title: "Problem Solving",
        icon: svgs.calc,
        code: `{
  "qbProblemSolving": {
    "FABM1-COGS-002": {
      "subject": "FABM 1",
      "type": "Problem Solving",
      "topic": "Cost of Goods Sold",
      "competency": "Apply",
      "question": "TGAS is 300k. Ending Inv is 50k. Compute COGS.",
      "solution": 250000.00,
      "explanation": "300k - 50k = 250k"
    }
  }
}`
    },
    journal: {
        title: "Journalizing",
        icon: svgs.pen,
        code: `{
  "qbJournalizing": {
    "FABM1-Journal-Set1": {
      "subject": "FABM 1",
      "type": "journalizing",
      "topic": "Periodic System",
      "id": "set1_periodic",
      "title": "Set 1: Periodic System",
      "instructions": "Journalize the following...",
      "transactions": [
        {
          "date": "Jan 2",
          "description": "Purchased goods...",
          "rows": 3,
          "solution": [
             { "date": "Jan 2", "account": "Purchases", "debit": 1000, "credit": "" },
             { "date": "", "account": "Cash", "debit": "", "credit": 1000 },
             { "date": "", "account": "Explanation...", "isExplanation": true }
          ]
        }
      ]
    }
  }
}`
    }
};

// --- MAIN RENDER FUNCTION ---

export function renderQuestionImporter(targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return;

    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .qi-container { display: flex; gap: 20px; font-family: 'Segoe UI', sans-serif; height: 85vh; }
        .qi-left { flex: 6; display: flex; flex-direction: column; }
        .qi-right { flex: 4; background: #1e1e1e; border-radius: 8px; color: #d4d4d4; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .qi-header { text-align: center; color: #007acc; margin-bottom: 10px; font-size: 1.5rem; font-weight: 600; }
        .qi-controls { margin-bottom: 15px; display: flex; align-items: center; gap: 10px; background: white; padding: 10px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .qi-textarea { flex-grow: 1; width: 100%; padding: 15px; font-family: 'Consolas', 'Monaco', monospace; font-size: 13px; border: 1px solid #ccc; border-radius: 5px; resize: none; margin-bottom: 10px; background-color: #f8fafc; color: #334155; }
        .qi-textarea:focus { outline: 2px solid #007acc; border-color: transparent; }
        .qi-btn { background-color: #007acc; color: white; border: none; padding: 12px 20px; border-radius: 5px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bold; transition: background 0.2s; }
        .qi-btn:hover { background-color: #005fa3; }
        .qi-log { height: 150px; background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 10px; overflow-y: auto; font-family: monospace; font-size: 12px; white-space: pre-wrap; }
        
        /* Sample Panel Styles */
        .sample-header { background: #252526; padding: 15px; border-bottom: 1px solid #333; display: flex; align-items: center; gap: 12px; }
        .sample-title { font-weight: bold; color: #fff; font-size: 14px; }
        .sample-body { padding: 20px; overflow-y: auto; font-family: 'Consolas', 'Monaco', monospace; font-size: 13px; line-height: 1.5; color: #d4d4d4; }
        
        /* Syntax Highlighting Colors */
        .key { color: #9cdcfe; }      /* Light Blue for Keys */
        .string { color: #ce9178; }   /* Orange/Red for Strings */
        .number { color: #b5cea8; }   /* Light Green for Numbers */
        .boolean { color: #569cd6; }  /* Blue for Booleans */
        .null { color: #569cd6; }     /* Blue for Null */
    `;
    document.head.appendChild(style);

    // Inject HTML Layout
    container.innerHTML = `
        <h2 class="qi-header">📤 QuestionBank Firestore Uploader</h2>
        <div class="qi-container">
            <div class="qi-left">
                <div class="qi-controls">
                    <label for="qiTypeSelector"><strong>Target Collection:</strong></label>
                    <select id="qiTypeSelector" style="padding: 6px; font-size: 14px; border-radius: 4px; flex-grow: 1; border: 1px solid #ccc;">
                        <option value="multiple">Multiple Choice (qbMultipleChoice)</option>
                        <option value="problem">Problem Solving (qbProblemSolving)</option>
                        <option value="journal">Journalizing (qbJournalizing)</option>
                    </select>
                </div>

                <textarea id="qiInputData" class="qi-textarea" placeholder="Paste your JavaScript Object or JSON here..."></textarea>
                
                <button id="qiUploadBtn" class="qi-btn">
                    ${svgs.upload} Upload to Firebase
                </button>
                
                <div style="margin-top:10px; font-weight:bold; font-size:12px; color:#555;">Activity Log:</div>
                <div id="qiLog" class="qi-log"></div>
            </div>

            <div class="qi-right" id="qiSamplePanel">
                </div>
        </div>
    `;

    // Initialize Event Listeners
    document.getElementById('qiTypeSelector').addEventListener('change', updateSampleView);
    document.getElementById('qiUploadBtn').addEventListener('click', handleUpload);

    // Initial Render
    updateSampleView();
}

// --- VIEW LOGIC ---

function updateSampleView() {
    const type = document.getElementById('qiTypeSelector').value;
    const panel = document.getElementById('qiSamplePanel');
    const data = samples[type];

    // Simple syntax highlighting for the demo
    const highlightedCode = syntaxHighlight(data.code);

    panel.innerHTML = `
        <div class="sample-header">
            ${data.icon}
            <div>
                <div class="sample-title">${data.title}</div>
            </div>
        </div>
        <div class="sample-body">
            ${highlightedCode}
        </div>
    `;
}

function syntaxHighlight(json) {
    // Basic regex based highlighter for visual purposes matching the screenshot colors
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function log(msg, type = 'info') {
    const logDiv = document.getElementById("qiLog");
    const timestamp = new Date().toLocaleTimeString();
    const color = type === 'error' ? 'red' : (type === 'success' ? 'green' : 'black');
    logDiv.innerHTML = `<div style="color:${color}">[${timestamp}] ${msg}</div>` + logDiv.innerHTML;
}

// --- UPLOAD LOGIC ---

async function handleUpload() {
    const rawData = document.getElementById("qiInputData").value.trim();
    if (!rawData) {
        log("Input is empty. Please paste your data object.", "error");
        return;
    }

    let parsedData;
    try {
        // Using eval to allow loose JSON (keys without quotes) as per common JS object pasting
        // In a strict env, JSON.parse is better, but eval provides better UX for copy-pasting JS objects
        parsedData = eval("(" + rawData + ")");
    } catch (e) {
        log("Syntax Error: Could not parse the input. Ensure it is valid JSON or JS Object.", "error");
        console.error(e);
        return;
    }

    // Determine the root collection key based on user input structure
    // Expected: { "qbMultipleChoice": { ... } }
    const rootKeys = Object.keys(parsedData);
    if (rootKeys.length === 0) {
        log("Error: Empty object provided.", "error");
        return;
    }

    // We assume the first key is the Collection Name (e.g., "qbMultipleChoice")
    const collectionName = rootKeys[0];
    const documents = parsedData[collectionName];

    if (!documents || typeof documents !== 'object') {
        log(`Error: Structure incorrect. Expected { "${collectionName}": { "doc-id": {data} } }`, "error");
        return;
    }

    log(`Starting upload to collection: [${collectionName}]...`);

    let successCount = 0;
    let failCount = 0;

    const docIds = Object.keys(documents);
    const total = docIds.length;

    for (const docId of docIds) {
        const docData = documents[docId];
        
        try {
            const docRef = doc(collection(db, collectionName), docId);
            await setDoc(docRef, docData, { merge: true }); // Merge to update if exists
            log(`✅ Saved: ${docId}`, "success");
            successCount++;
        } catch (error) {
            log(`❌ Failed: ${docId} - ${error.message}`, "error");
            failCount++;
        }
    }

    log(`--- Upload Finished ---`);
    log(`Success: ${successCount} | Failed: ${failCount} | Total: ${total}`);
    
    if(successCount > 0) {
        alert(`Successfully uploaded/updated ${successCount} questions to ${collectionName}.`);
    }
}
