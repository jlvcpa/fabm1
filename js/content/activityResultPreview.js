// --- js/content/activityResultPreview.js ---

import React, { useState, useEffect, useMemo, useCallback } from 'https://esm.sh/react@18.2.0';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import htm from 'https://esm.sh/htm';
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { Check, X, User, ChevronRight, AlertCircle, BookOpen, RefreshCw, Save } from 'https://esm.sh/lucide-react@0.263.1';
import { getLetterGrade, ActivityHelper } from '../utils.js';

// --- IMPORTS FOR STANDARD QUIZZES ---
import { qbMerchMultipleChoice } from "./questionBank/qbMerchMultipleChoice.js";
import { qbMerchProblemSolving } from "./questionBank/qbMerchProblemSolving.js";
import { qbMerchJournalizing } from "./questionBank/qbMerchJournalizing.js";

// --- IMPORTS FOR ACCOUNTING CYCLE ---
import Step01Analysis from './accountingCycle/steps/Step01Analysis.js';
import Step02Journalizing from './accountingCycle/steps/Step02Journalizing.js';
import Step03Posting from './accountingCycle/steps/Step03Posting.js';
import Step04TrialBalance from './accountingCycle/steps/Step04TrialBalance.js';
import Step05Worksheet from './accountingCycle/steps/Step05Worksheet.js';
import Step06FinancialStatements from './accountingCycle/steps/Step06FinancialStatements.js';
import Step07AdjustingEntries from './accountingCycle/steps/Step07AdjustingEntries.js';
import Step08ClosingEntries from './accountingCycle/steps/Step08ClosingEntries.js';
import Step09PostClosingTB from './accountingCycle/steps/Step09PostClosingTB.js';
import Step10ReversingEntries from './accountingCycle/steps/Step10ReversingEntries.js';

import { adaptStaticDataToSimulator } from '../accountingCycleActivity.js';
import { merchTransactionsExamData } from './questionBank/qbMerchTransactions.js';

const html = htm.bind(React.createElement);
const db = getFirestore();

// Map Steps to Components
const STEP_COMPONENTS = {
    1: Step01Analysis, 2: Step02Journalizing, 3: Step03Posting, 4: Step04TrialBalance,
    5: Step05Worksheet, 6: Step06FinancialStatements, 7: Step07AdjustingEntries,
    8: Step08ClosingEntries, 9: Step09PostClosingTB, 10: Step10ReversingEntries
};

// --- GLOBAL QUESTION MAP ---
const globalQuestionMap = new Map();
function buildQuestionMap() {
    if (globalQuestionMap.size > 0) return;
    const allSources = [qbMerchMultipleChoice, qbMerchProblemSolving, qbMerchJournalizing];
    allSources.forEach(sourceArray => {
        if(Array.isArray(sourceArray)) {
            sourceArray.forEach(item => {
                const id = Object.keys(item)[0];
                globalQuestionMap.set(id, { id, ...item[id] });
            });
        }
    });
}
buildQuestionMap();

// -------------------------------------------------------------------------
// COMPONENT 1: ACCOUNTING CYCLE RESULT (Unchanged logic, kept for context)
// -------------------------------------------------------------------------
const AccountingCycleResultView = ({ resultData, activityConfig }) => {
    const [simData, setSimData] = useState(null);

    useEffect(() => {
        const qId = resultData.questionId;
        if (qId) {
            const rawQ = merchTransactionsExamData.find(q => q.id === qId);
            if (rawQ) {
                const dateTaken = new Date(resultData.timestamp);
                const year = dateTaken.getFullYear() || new Date().getFullYear();
                const qCopy = JSON.parse(JSON.stringify(rawQ));
                if (qCopy.transactions) qCopy.transactions.forEach(t => t.date = `${t.date}, ${year}`);
                const adapted = adaptStaticDataToSimulator(qCopy);
                setSimData(adapted);
            }
        }
    }, [resultData]);

    if (!simData) return html`<div className="p-8 text-center text-gray-500">Loading scenario data...</div>`;

    return html`
        <div className="flex flex-col gap-12">
            ${activityConfig.tasks.map((task, idx) => {
                const stepId = idx + 1;
                const StepComponent = STEP_COMPONENTS[stepId];
                const studentAnswer = resultData.answers?.[stepId] || {};
                const scoreData = resultData.scores?.[stepId] || { score: 0, maxScore: 0 };
                const status = resultData.stepStatus?.[stepId] || {};
                
                if (!status.completed && !studentAnswer) return null;

                const letterGrade = getLetterGrade(scoreData.score, scoreData.maxScore);
                const rubricHtml = ActivityHelper.getRubricHTML(stepId, task.stepName);

                return html`
                    <div key=${stepId} className="bg-white border rounded-lg shadow-sm overflow-hidden break-inside-avoid">
                        <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
                            <div><h3 className="text-lg font-bold">Step ${stepId}: ${task.stepName}</h3><div className="text-xs text-slate-300">Attempts: ${status.attempts || 0}</div></div>
                            <div className="text-right"><div className="text-2xl font-bold text-yellow-400">${scoreData.score} <span className="text-sm text-slate-400">/ ${scoreData.maxScore}</span></div><div className="text-xs font-bold px-2 py-0.5 bg-slate-600 rounded inline-block">${letterGrade}</div></div>
                        </div>
                        <div className="p-6">
                            <div className="mb-6 p-4 bg-blue-50 text-sm text-blue-900 rounded border border-blue-100" dangerouslySetInnerHTML=${{ __html: rubricHtml }}></div>
                            <div className="border border-gray-200 rounded p-2 bg-gray-50">
                                <${StepComponent} activityData=${simData} transactions=${simData.transactions} data=${studentAnswer} onChange=${() => {}} showFeedback=${true} isReadOnly=${true} />
                            </div>
                        </div>
                    </div>
                `;
            })}
        </div>
    `;
};

// -------------------------------------------------------------------------
// COMPONENT 2: STANDARD QUIZ RESULT (RESTORED FEATURES)
// -------------------------------------------------------------------------
const StandardQuizResultView = ({ resultData, activityConfig, onScoreUpdate }) => {
    
    // --- LEGACY POLYFILL (Restored) ---
    const getQuestionsTaken = () => {
        let qt = resultData.questionsTaken;
        if (!qt || Object.keys(qt).length === 0) {
            qt = {};
            const answers = resultData.answers || {};
            Object.keys(answers).forEach(k => {
                const parts = k.split('_');
                if (parts.length < 2) return;
                const sectionIdx = parseInt(parts[0].replace('s',''));
                const qKey = `${parts[0]}_${parts[1]}`;
                const sectionType = activityConfig.testQuestions[sectionIdx]?.type || 'Unknown';
                
                if (!qt[qKey]) {
                    qt[qKey] = {
                        uiId: qKey, type: sectionType,
                        questionText: "Legacy Question (Ref Unavailable)", correctAnswer: "N/A",
                        options: [], transactions: [], instructions: null
                    };
                }
                
                // Reconstruct journal structure if possible
                if (sectionType === 'Journalizing' && parts.length >= 4) {
                    const tIdx = parseInt(parts[2].replace('t',''));
                    const rIdx = parseInt(parts[3].replace('r',''));
                    if (!qt[qKey].transactions[tIdx]) qt[qKey].transactions[tIdx] = { date: `Trans ${tIdx+1}`, description: "Legacy", rows: 0 };
                    if (rIdx >= qt[qKey].transactions[tIdx].rows) qt[qKey].transactions[tIdx].rows = rIdx + 1;
                }
            });
        }
        return qt;
    };

    const questionsTaken = useMemo(() => getQuestionsTaken(), [resultData]);
    const [liveScores, setLiveScores] = useState({});

    // --- RE-CALCULATE SCORES LIVE (Restored logic) ---
    useEffect(() => {
        const newScores = {};
        
        activityConfig.testQuestions.forEach((section, idx) => {
            const sectionQs = Object.keys(questionsTaken)
                .filter(key => key.startsWith(`s${idx}_`))
                .map(key => ({ uiId: key, ...questionsTaken[key] }));

            let secScore = 0;
            let secMax = 0;

            sectionQs.forEach(q => {
                const studentAns = resultData.answers?.[q.uiId];
                const liveQ = (q.dbId && globalQuestionMap.has(q.dbId)) ? globalQuestionMap.get(q.dbId) : q;

                if (section.type === "Multiple Choice") {
                    secMax++;
                    const correctKey = (liveQ.answer !== undefined) ? liveQ.answer : liveQ.correctAnswer;
                    if (String(studentAns) === String(correctKey)) secScore++;
                } 
                else if (section.type === "Problem Solving") {
                    secMax++;
                    if (studentAns && liveQ.correctAnswer && studentAns.trim().toLowerCase() === liveQ.correctAnswer.trim().toLowerCase()) secScore++;
                }
                else if (section.type === "Journalizing") {
                    const transactions = liveQ.transactions || [];
                    transactions.forEach((trans, tIdx) => {
                        const solRows = trans.solution || [];
                        const rowCount = trans.rows || 2;
                        
                        for(let r=0; r<rowCount; r++) {
                            const cellKey = `t${tIdx}_r${r}`;
                            const cellData = (studentAns && studentAns[cellKey]) ? studentAns[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                            const solRow = solRows[r] || null;
                            const sDate = (cellData.date || '').trim();
                            const sAcct = (cellData.acct || '');
                            const sDr = (cellData.dr || '').trim();
                            const sCr = (cellData.cr || '').trim();

                            // 1. DATE
                            if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                                secMax++;
                                if (r === 0) {
                                    // Regex Check restoration
                                    const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                    let isDateCorrect = false;
                                    if (tIdx === 0) isDateCorrect = (sDate === solRow.date);
                                    else {
                                        const parts = solRow.date ? solRow.date.split(' ') : [];
                                        isDateCorrect = (sDate === parts[parts.length - 1]);
                                    }
                                    if (sDate.match(expectedRegex) && isDateCorrect) secScore++;
                                } else {
                                    if (sDate === '') secScore++;
                                }
                            } else if (sDate !== '') {
                                secScore--; // Penalty
                            }

                            // 2. ACCOUNT (Indentation Check restoration)
                            if (solRow) {
                                secMax++;
                                if (solRow.isExplanation) {
                                    if (sAcct.match(/^\s{5,8}\S/)) secScore++;
                                } else {
                                    const cleanInput = sAcct.trim().toLowerCase();
                                    const cleanSol = (solRow.account || '').trim().toLowerCase();
                                    if (cleanInput === cleanSol) {
                                        if (solRow.credit) {
                                            if (sAcct.match(/^\s{3,5}\S/)) secScore++;
                                        } else {
                                            if (sAcct.match(/^\S/)) secScore++;
                                        }
                                    }
                                }
                            }

                            // 3. DEBIT
                            if (solRow && !solRow.isExplanation && solRow.debit) {
                                secMax++;
                                const fmtSol = Number(solRow.debit).toFixed(2);
                                if (sDr === fmtSol) secScore++;
                            } else if (sDr !== '') { secScore--; }

                            // 4. CREDIT
                            if (solRow && !solRow.isExplanation && solRow.credit) {
                                secMax++;
                                const fmtSol = Number(solRow.credit).toFixed(2);
                                if (sCr === fmtSol) secScore++;
                            } else if (sCr !== '') { secScore--; }
                        }
                    });
                }
            });

            newScores[idx] = { 
                score: secScore, 
                maxScore: secMax, 
                letterGrade: getLetterGrade(secScore, secMax),
                percentage: secMax > 0 ? (secScore / secMax) * 100 : 0 
            };
        });

        setLiveScores(newScores);
        if (onScoreUpdate) onScoreUpdate(newScores);

    }, [resultData, questionsTaken]);

    return html`
        <div className="flex flex-col gap-8">
            ${activityConfig.testQuestions.map((section, idx) => {
                const live = liveScores[idx] || { score: 0, maxScore: 0, letterGrade: 'N/A' };
                // Find questions for this section
                const sectionQs = Object.keys(questionsTaken)
                    .filter(key => key.startsWith(`s${idx}_`))
                    .sort((a, b) => {
                        const aIdx = parseInt(a.split('_')[1].replace('q',''));
                        const bIdx = parseInt(b.split('_')[1].replace('q',''));
                        return aIdx - bIdx;
                    })
                    .map(key => ({ uiId: key, ...questionsTaken[key] }));

                return html`
                    <div key=${idx} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                        <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
                            <h3 className="font-bold uppercase">Test ${idx + 1}: ${section.type}</h3>
                            <div className="text-right">
                                <span className="text-xl font-bold text-yellow-300">${live.score} / ${live.maxScore}</span>
                                <span className="ml-2 text-xs bg-blue-800 px-2 py-1 rounded">${live.letterGrade}</span>
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col gap-6">
                            ${sectionQs.map((q, qIdx) => {
                                const studentAns = resultData.answers?.[q.uiId];
                                const liveQ = (q.dbId && globalQuestionMap.has(q.dbId)) ? globalQuestionMap.get(q.dbId) : q;

                                // --- RENDER: JOURNALIZING TABLE ---
                                if (section.type === "Journalizing") {
                                    return html`
                                        <div key=${q.uiId} className="border rounded p-4 bg-white">
                                            <div className="font-bold text-gray-800 mb-2">Question ${qIdx + 1}</div>
                                            <div className="text-sm italic text-gray-600 mb-4 bg-blue-50 p-2 rounded">${liveQ.question || "Journalize the following transactions."}</div>
                                            
                                            ${(liveQ.transactions || []).map((trans, tIdx) => {
                                                const solRows = trans.solution || [];
                                                const rowCount = trans.rows || 2;
                                                const rows = [];
                                                
                                                for(let r=0; r<rowCount; r++) {
                                                    const cellKey = `t${tIdx}_r${r}`;
                                                    const cellData = (studentAns && studentAns[cellKey]) ? studentAns[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                                                    const solRow = solRows[r] || { account: '', debit: '', credit: '' };
                                                    
                                                    // Basic visual check for correctness (green/red background)
                                                    const isAcctMatch = cellData.acct && solRow.account && cellData.acct.trim().toLowerCase() === solRow.account.trim().toLowerCase();
                                                    
                                                    rows.push({ cellData, solRow, isAcctMatch });
                                                }

                                                return html`
                                                    <div key=${tIdx} className="mb-4 border border-gray-300 rounded overflow-hidden">
                                                        <div className="bg-gray-100 px-3 py-2 text-sm font-bold border-b border-gray-300">
                                                            Transaction ${tIdx+1}: <span className="font-normal text-gray-600">${trans.date} - ${trans.description}</span>
                                                        </div>
                                                        <div className="grid grid-cols-2 text-xs">
                                                            <div className="border-r border-gray-300">
                                                                <div className="bg-blue-100 p-1 font-bold text-center text-blue-900 border-b border-blue-200">Your Answer</div>
                                                                <table className="w-full">
                                                                    ${rows.map((row, r) => html`
                                                                        <tr key=${r} className="border-b border-gray-100">
                                                                            <td className="p-1 w-12 text-center border-r font-mono">${row.cellData.date}</td>
                                                                            <td className="p-1 border-r font-mono whitespace-pre">${row.cellData.acct}</td>
                                                                            <td className="p-1 w-16 text-right border-r font-mono">${row.cellData.dr}</td>
                                                                            <td className="p-1 w-16 text-right font-mono">${row.cellData.cr}</td>
                                                                        </tr>
                                                                    `)}
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <div className="bg-green-100 p-1 font-bold text-center text-green-900 border-b border-green-200">Solution</div>
                                                                <table className="w-full">
                                                                    ${rows.map((row, r) => {
                                                                        const sol = row.solRow;
                                                                        const indent = sol.credit ? '   ' : (sol.isExplanation ? '     ' : '');
                                                                        return html`
                                                                            <tr key=${r} className="border-b border-gray-100 bg-green-50/30">
                                                                                <td className="p-1 w-12 text-center border-r font-mono text-gray-500">${sol.date || ''}</td>
                                                                                <td className="p-1 border-r font-mono whitespace-pre text-gray-700 font-bold">${indent}${sol.account || ''}</td>
                                                                                <td className="p-1 w-16 text-right border-r font-mono text-gray-700">${sol.debit || ''}</td>
                                                                                <td className="p-1 w-16 text-right font-mono text-gray-700">${sol.credit || ''}</td>
                                                                            </tr>
                                                                        `;
                                                                    })}
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                            })}
                                        </div>
                                    `;
                                }
                                
                                // --- RENDER: MULTIPLE CHOICE ---
                                else if (section.type === "Multiple Choice") {
                                    const correctKey = (liveQ.answer !== undefined) ? liveQ.answer : liveQ.correctAnswer;
                                    return html`
                                        <div key=${q.uiId} className="border rounded p-4 bg-white">
                                            <div className="font-bold text-gray-800 mb-2">${qIdx + 1}. ${liveQ.question}</div>
                                            <div className="flex flex-col gap-1">
                                                ${(liveQ.options || []).map((opt, oIdx) => {
                                                    const isSelected = String(studentAns) === String(oIdx);
                                                    const isOptCorrect = String(correctKey) === String(oIdx);
                                                    let style = "border-gray-200";
                                                    let icon = null;
                                                    if (isSelected && isOptCorrect) { style = "bg-green-100 border-green-500 text-green-900 font-bold"; icon = html`<${Check} size=${16} className="text-green-700"/>`; }
                                                    else if (isSelected && !isOptCorrect) { style = "bg-red-100 border-red-500 text-red-900"; icon = html`<${X} size=${16} className="text-red-700"/>`; }
                                                    else if (!isSelected && isOptCorrect) { style = "bg-green-50 border-green-300 border-dashed text-green-800"; icon = html`<${Check} size=${16} className="text-green-700 opacity-50"/>`; }
                                                    return html`<div className=${`p-2 border rounded text-sm flex justify-between items-center ${style}`}>${opt} ${icon}</div>`;
                                                })}
                                            </div>
                                        </div>
                                    `;
                                }

                                // --- RENDER: PROBLEM SOLVING ---
                                else if (section.type === "Problem Solving") {
                                    const isCorrect = studentAns && liveQ.correctAnswer && studentAns.trim().toLowerCase() === liveQ.correctAnswer.trim().toLowerCase();
                                    return html`
                                        <div key=${q.uiId} className="border rounded p-4 bg-white">
                                            <div className="font-bold text-gray-800 mb-2">${qIdx + 1}. ${liveQ.question}</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className=${`p-3 rounded border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                                    <div className="text-xs font-bold mb-1 text-gray-500">Student Answer</div>
                                                    <div className="font-mono text-sm whitespace-pre-wrap">${studentAns || '(No Answer)'}</div>
                                                </div>
                                                <div className="p-3 rounded border bg-gray-50 border-gray-200">
                                                    <div className="text-xs font-bold mb-1 text-gray-500">Correct Answer</div>
                                                    <div className="font-mono text-sm whitespace-pre-wrap">${liveQ.correctAnswer}</div>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                `;
            })}
        </div>
    `;
};

// -------------------------------------------------------------------------
// COMPONENT 3: TEACHER DASHBOARD (WITH UPDATE SCORE)
// -------------------------------------------------------------------------
const TeacherReviewDashboard = ({ container, currentUser }) => {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [sections, setSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState("");
    const [students, setStudents] = useState([]);
    const [selectedStudentResult, setSelectedStudentResult] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Staging for Score Updates
    const [pendingScores, setPendingScores] = useState(null);

    // 1. Fetch Activity List
    useEffect(() => {
        const fetchList = async () => {
            try {
                // Fetch from results_list to get all unique activities submitted
                const q = query(collection(db, "results_list")); 
                const snapshot = await getDocs(q);
                const acts = [];
                snapshot.forEach(doc => acts.push(doc.data()));
                
                const uniqueActs = [...new Set(acts.map(a => a.activityName))];
                setActivities(uniqueActs.map(name => ({
                    name,
                    sections: [...new Set(acts.filter(a => a.activityName === name).map(a => a.section))]
                })));
            } catch (e) {
                console.error("Error fetching activities", e);
            }
        };
        fetchList();
    }, []);

    // 2. Fetch Students
    useEffect(() => {
        if (selectedActivity && selectedSection) {
            const fetchStudents = async () => {
                setLoading(true);
                const collectionName = `results_${selectedActivity.name}_${selectedSection}`;
                try {
                    const q = query(collection(db, collectionName));
                    const snap = await getDocs(q);
                    const list = [];
                    snap.forEach(doc => {
                        const data = doc.data();
                        list.push({
                            docId: doc.id,
                            name: data.studentName,
                            idNumber: data.studentId,
                            cn: data.CN,
                            timestamp: data.timestamp
                        });
                    });
                    list.sort((a,b) => (Number(a.cn)||999) - (Number(b.cn)||999));
                    setStudents(list);
                } catch (e) {
                    console.error(e);
                }
                setLoading(false);
            };
            fetchStudents();
        } else {
            setStudents([]);
        }
        setSelectedStudentResult(null);
    }, [selectedActivity, selectedSection]);

    // 3. Fetch Student Result
    const handleStudentClick = async (studentDocId) => {
        setLoading(true);
        try {
            const collectionName = `results_${selectedActivity.name}_${selectedSection}`;
            const docRef = doc(db, collectionName, studentDocId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                const resultData = docSnap.data();
                
                // Fetch Original Config to determine type
                const actListQuery = query(collection(db, "quiz_list"), where("activityname", "==", selectedActivity.name));
                const actSnap = await getDocs(actListQuery);
                let fullConfig = null;
                if (!actSnap.empty) {
                    fullConfig = actSnap.docs[0].data();
                }

                setSelectedStudentResult({ 
                    result: resultData, 
                    config: fullConfig,
                    docId: studentDocId,
                    collectionName: collectionName
                });
                setPendingScores(null); // Reset pending
            }
        } catch (e) {
            console.error(e);
            alert("Error: " + e.message);
        }
        setLoading(false);
    };

    // 4. Update Score Handler
    const handleSaveScores = async () => {
        if (!selectedStudentResult || !pendingScores) return;
        if (!confirm("Overwrite the student's saved scores with these recalculated values?")) return;
        
        try {
            const ref = doc(db, selectedStudentResult.collectionName, selectedStudentResult.docId);
            await updateDoc(ref, { sectionScores: pendingScores });
            alert("Scores updated successfully!");
            // Refresh
            handleStudentClick(selectedStudentResult.docId);
        } catch (e) {
            alert("Update failed: " + e.message);
        }
    };

    return html`
        <div className="flex flex-col h-full bg-gray-50 font-sans">
            <div className="bg-white border-b px-6 py-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shrink-0">
                <div>
                    <h1 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                        <${BookOpen} size=${24}/> Teacher Results Review
                    </h1>
                    <p className="text-xs text-gray-500">Select an activity and section.</p>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                    <select className="border rounded px-3 py-2 text-sm w-1/2 md:w-64" onChange=${(e) => {
                        const act = activities.find(a => a.name === e.target.value);
                        setSelectedActivity(act);
                        setSections(act ? act.sections : []);
                        setSelectedSection("");
                    }}>
                        <option value="">-- Select Activity --</option>
                        ${activities.map(a => html`<option value=${a.name}>${a.name}</option>`)}
                    </select>

                    <select className="border rounded px-3 py-2 text-sm w-1/2 md:w-48" disabled=${!selectedActivity} value=${selectedSection} onChange=${(e) => setSelectedSection(e.target.value)}>
                        <option value="">-- Section --</option>
                        ${sections.map(s => html`<option value=${s}>${s}</option>`)}
                    </select>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0">
                    <div className="p-3 bg-gray-100 border-b font-bold text-xs uppercase text-gray-500">Students (${students.length})</div>
                    <div className="flex-1 overflow-y-auto">
                        ${students.map(s => html`
                            <button onClick=${() => handleStudentClick(s.docId)} className=${`w-full text-left p-3 border-b hover:bg-blue-50 flex items-center gap-3 ${selectedStudentResult?.docId === s.docId ? 'bg-blue-100' : ''}`}>
                                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-bold text-xs shrink-0">${s.cn || '#'}</div>
                                <div className="overflow-hidden">
                                    <div className="font-bold text-sm text-gray-800 truncate">${s.name}</div>
                                    <div className="text-xs text-gray-500">${new Date(s.timestamp).toLocaleDateString()}</div>
                                </div>
                                <${ChevronRight} size=${16} className="ml-auto text-gray-400"/>
                            </button>
                        `)}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto bg-gray-100 p-6 md:p-10 relative">
                    ${loading && html`<div className="absolute inset-0 bg-white/80 z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div></div>`}

                    ${!selectedStudentResult ? html`
                        <div className="h-full flex flex-col items-center justify-center text-gray-400">
                            <${User} size=${64} className="mb-4 opacity-20"/>
                            <p className="text-lg">Select a student.</p>
                        </div>
                    ` : html`
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-lg shadow p-6 mb-8 border-l-4 border-blue-600 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-1">${selectedStudentResult.result.studentName}</h2>
                                    <div className="flex gap-6 text-sm text-gray-600">
                                        <span>ID: <strong>${selectedStudentResult.result.studentId}</strong></span>
                                        <span>Submitted: <strong>${new Date(selectedStudentResult.result.timestamp).toLocaleString()}</strong></span>
                                    </div>
                                </div>
                                ${currentUser.role === 'teacher' && selectedStudentResult.config?.type !== 'accounting_cycle' && html`
                                    <button onClick=${handleSaveScores} className="px-4 py-2 bg-yellow-600 text-white text-sm font-bold rounded hover:bg-yellow-700 shadow flex items-center gap-2">
                                        <${Save} size=${16}/> Update Scores
                                    </button>
                                `}
                            </div>

                            ${selectedStudentResult.config?.type === 'accounting_cycle' || selectedStudentResult.config?.tasks
                                ? html`<${AccountingCycleResultView} resultData=${selectedStudentResult.result} activityConfig=${selectedStudentResult.config} />`
                                : html`<${StandardQuizResultView} 
                                    resultData=${selectedStudentResult.result} 
                                    activityConfig=${selectedStudentResult.config} 
                                    onScoreUpdate=${(scores) => setPendingScores(scores)} 
                                />`
                            }
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
};

// --- EXPORTED RENDERER ---
export function renderTeacherReviewDashboard(container, user) {
    if (!container._reactRoot) {
        container._reactRoot = createRoot(container);
    }
    container._reactRoot.render(html`<${TeacherReviewDashboard} container=${container} currentUser=${user} />`);
}

// Keep Legacy Function for safety
export async function renderQuizResultPreview(activityData, user, resultData, db, collectionName, docId) {
    console.warn("Direct renderQuizResultPreview is deprecated. Use renderTeacherReviewDashboard.");
}
