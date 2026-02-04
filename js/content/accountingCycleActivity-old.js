// --- js/content/accountingCycleActivity.js ---

import React, { useState, useEffect, useMemo, useCallback } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import { ArrowLeft, Save, CheckCircle, Lock, Clock, AlertTriangle, BookOpen } from 'https://esm.sh/lucide-react@0.263.1';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// --- Import Question Bank Data ---
import { merchTransactionsExamData } from './questionBank/qbMerchTransactions.js';

// --- Import Cycle Steps & Logic ---
import { getAccountType, sortAccounts } from './accountingCycle/utils.js';
import { TaskSection } from './accountingCycle/steps.js';

// --- Import Validators ---
import { validateStep01 } from './accountingCycle/steps/Step01Analysis.js';
import { validateStep02 } from './accountingCycle/steps/Step02Journalizing.js';
import { validateStep03 } from './accountingCycle/steps/Step03Posting.js';
import { validateStep04 } from './accountingCycle/steps/Step04TrialBalance.js';
import { validateStep05 } from './accountingCycle/steps/Step05Worksheet.js';
import { validateStep06 } from './accountingCycle/steps/Step06FinancialStatements.js';
import { validateStep07 } from './accountingCycle/steps/Step07AdjustingEntries.js';
import { validateStep08 } from './accountingCycle/steps/Step08ClosingEntries.js';
import { validateStep09 } from './accountingCycle/steps/Step09PostClosingTB.js';
import { validateStep10 } from './accountingCycle/steps/Step10ReversingEntries.js';

const html = htm.bind(React.createElement);
const db = getFirestore();

// --- HELPER: MAP STATIC DATA TO SIMULATOR FORMAT ---
// The Step components expect a specific data structure (activityData). 
// We must convert the static QB JSON into this dynamic structure.
const adaptStaticDataToSimulator = (questionData) => {
    const { transactions, adjustments } = questionData;
    
    // 1. Normalize Transactions (Convert 'solution' array to debits/credits for the logic engine)
    const normalizedTransactions = transactions.map((t, idx) => {
        const debits = [];
        const credits = [];
        t.solution.forEach(line => {
            if (line.debit) debits.push({ account: line.account, amount: Number(line.debit) });
            if (line.credit) credits.push({ account: line.account, amount: Number(line.credit) });
        });
        return {
            id: idx + 1,
            date: t.date, // Keep string format "Jan 1"
            description: t.description,
            debits,
            credits,
            analysis: {} // Step 1 analysis expectation would need to be derived or mocked
        };
    });

    // 2. Build the "Answer Key" Ledger based on these transactions
    const ledger = {};
    const validAccounts = new Set();

    // Helper to add to ledger
    const addToLedger = (acc, dr, cr) => {
        validAccounts.add(acc);
        if (!ledger[acc]) ledger[acc] = { debit: 0, credit: 0 };
        ledger[acc].debit += dr;
        ledger[acc].credit += cr;
    };

    // Process Transactions for Ledger Key
    normalizedTransactions.forEach(t => {
        t.debits.forEach(d => addToLedger(d.account, d.amount, 0));
        t.credits.forEach(c => addToLedger(c.account, 0, c.amount));
    });

    // 3. Process Adjustments for Ledger Key
    const normalizedAdjustments = adjustments.map((a, idx) => {
        // Extract Dr/Cr from solution
        const drLine = a.solution.find(s => s.debit);
        const crLine = a.solution.find(s => s.credit);
        const amt = drLine ? Number(drLine.debit) : 0;
        
        if (drLine) validAccounts.add(drLine.account);
        if (crLine) validAccounts.add(crLine.account);

        return {
            id: `adj-${idx}`,
            desc: a.description,
            drAcc: drLine ? drLine.account : '',
            crAcc: crLine ? crLine.account : '',
            amount: amt
        };
    });

    return {
        config: { 
            businessType: 'Merchandising', 
            inventorySystem: 'Periodic', // Inferred from "Purchases" account in JSON
            isSubsequentYear: false,
            deferredExpenseMethod: 'Asset', // Default assumption unless specified
            deferredIncomeMethod: 'Liability' 
        },
        transactions: normalizedTransactions,
        ledger: ledger,
        validAccounts: sortAccounts(Array.from(validAccounts)),
        beginningBalances: null, // Static problems usually start from scratch or text
        adjustments: normalizedAdjustments
    };
};

// --- COMPONENT: Activity Runner ---
const ActivityRunner = ({ activityDoc, user, goBack }) => {
    const [loading, setLoading] = useState(true);
    const [activityData, setActivityData] = useState(null);
    const [studentProgress, setStudentProgress] = useState({ answers: {}, stepStatus: {}, scores: {} });
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [questionId, setQuestionId] = useState(null);

    // 1. Initialize: Load or Assign Question & Fetch Progress
    useEffect(() => {
        const init = async () => {
            const resultDocId = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
            const resultCollection = `results_${activityDoc.activityname}_${activityDoc.section}`;
            const resultRef = doc(db, resultCollection, resultDocId);

            // Real-time listener for progress
            const unsubscribe = onSnapshot(resultRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setStudentProgress({
                        answers: data.answers || {},
                        stepStatus: data.stepStatus || {},
                        scores: data.scores || {}
                    });
                    
                    // Retrieve assigned question ID or pick new one if missing
                    let qId = data.questionId;
                    if (!qId) {
                        qId = pickRandomQuestion();
                        // Save the assigned question immediately
                        setDoc(resultRef, { questionId: qId }, { merge: true });
                    }
                    setQuestionId(qId);
                } else {
                    // New Student: Pick random question and initialize
                    const qId = pickRandomQuestion();
                    setQuestionId(qId);
                    setDoc(resultRef, {
                        studentName: `${user.LastName}, ${user.FirstName}`,
                        studentId: user.Idnumber,
                        section: activityDoc.section,
                        questionId: qId,
                        startedAt: new Date().toISOString()
                    });
                }
                setLoading(false);
            });

            return () => unsubscribe();
        };
        init();
    }, [activityDoc, user]);

    // 2. Hydrate Simulator Data when Question ID is set
    useEffect(() => {
        if (questionId) {
            const rawQ = merchTransactionsExamData.find(q => q.id === questionId);
            if (rawQ) {
                const adaptedData = adaptStaticDataToSimulator(rawQ);
                setActivityData(adaptedData);
                
                // Set initial task if none selected
                if (!currentTaskId && activityDoc.tasks.length > 0) {
                    setCurrentTaskId(activityDoc.tasks[0].taskId);
                }
            }
        }
    }, [questionId, activityDoc]);

    const pickRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * merchTransactionsExamData.length);
        return merchTransactionsExamData[randomIndex].id;
    };

    // --- SAVE & SUBMIT HANDLER ---
    const handleSaveStep = async (stepId, newData, isSubmitting = false) => {
        const taskConfig = activityDoc.tasks.find(t => t.taskId === stepId);
        
        // Map Task ID to Accounting Step ID (1-10) based on string analysis
        // The Creator saved "Step 01...", "Step 02..." in stepName.
        const stepNum = parseInt(taskConfig.stepName.split(' ')[1]);

        // Validation Logic
        let scoreData = null;
        let isComplete = false;

        if (isSubmitting) {
            if (!confirm("Are you sure you want to submit? You cannot change answers after submission.")) return;
            
            // Run specific validator
            let result = { score: 0, maxScore: 0 };
            
            // Note: We pass newData (current user answer) and activityData (answer key)
            if (stepNum === 1) result = validateStep01(activityData.transactions, newData);
            else if (stepNum === 2) result = validateStep02(activityData.transactions, newData);
            else if (stepNum === 3) result = validateStep03(activityData, newData);
            else if (stepNum === 4) result = validateStep04(activityData.transactions, newData, activityData.ledger);
            else if (stepNum === 5) result = validateStep05(activityData.ledger, activityData.adjustments, newData);
            else if (stepNum === 6) result = validateStep06(activityData.ledger, activityData.adjustments, activityData, newData);
            else if (stepNum === 7) result = validateStep07(activityData.adjustments, newData.journal, newData.ledger, activityData.transactions);
            else if (stepNum === 8) result = validateStep08(newData, activityData);
            else if (stepNum === 9) result = validateStep09(newData, activityData);
            else if (stepNum === 10) result = validateStep10(newData, activityData);

            scoreData = { score: result.score, maxScore: result.maxScore };
            isComplete = true;
        }

        // Construct Payload
        const resultDocId = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
        const resultRef = doc(db, `results_${activityDoc.activityname}_${activityDoc.section}`, resultDocId);

        const updatePayload = {
            [`answers.${stepNum}`]: newData,
            lastUpdated: new Date().toISOString()
        };

        if (isComplete) {
            updatePayload[`stepStatus.${stepNum}`] = { completed: true, submittedAt: new Date().toISOString() };
            updatePayload[`scores.${stepNum}`] = scoreData;
        }

        try {
            await setDoc(resultRef, updatePayload, { merge: true });
            if (isSubmitting) alert(`Task Submitted! Score: ${scoreData.score}/${scoreData.maxScore}`);
        } catch (e) {
            console.error("Save error", e);
            alert("Error saving progress: " + e.message);
        }
    };

    if (loading || !activityData) return html`<div className="p-8 text-center text-gray-500">Loading activity data...</div>`;

    // --- RENDER CURRENT TASK ---
    const activeTaskConfig = activityDoc.tasks.find(t => t.taskId === currentTaskId);
    const stepNum = parseInt(activeTaskConfig.stepName.split(' ')[1]);
    
    // Status Checks
    const now = new Date();
    const start = new Date(activeTaskConfig.dateTimeStart);
    const expire = new Date(activeTaskConfig.dateTimeExpire);
    const isLocked = now < start;
    const isExpired = now > expire;
    const isSubmitted = studentProgress.stepStatus[stepNum]?.completed;
    
    // Step Props construction
    const stepProps = {
        step: { id: stepNum, title: activeTaskConfig.stepName, description: activeTaskConfig.instructions },
        activityData: activityData,
        answers: studentProgress.answers,
        stepStatus: { [stepNum]: { completed: isSubmitted, attempts: isSubmitted ? 0 : 3 } }, // Logic adaptation
        isCurrentActiveTask: true,
        isPrevStepCompleted: true, // In this Exam mode, we usually allow jumping or enforce via time. Let's assume unlocked by time.
        
        // This 'onValidate' is used by the internal components for feedback. 
        // In Exam mode, we might want to disable intermediate validation or hook it to save.
        // We pass a dummy or a save handler depending on isSubmitted.
        onValidate: () => () => {}, // Disable the internal "Validate" buttons of Step components
        
        updateAnswerFns: {
            updateAnswer: (id, val) => handleSaveStep(currentTaskId, val, false),
            updateNestedAnswer: (id, key, subKey, val) => {
                const current = studentProgress.answers[id] || {};
                const nested = current[key] || {};
                const newData = { ...current, [key]: { ...nested, [subKey]: val } };
                handleSaveStep(currentTaskId, newData, false);
            }
        }
    };

    return html`
        <div className="flex flex-col h-screen bg-gray-50 font-sans">
            <header className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center z-20">
                <div className="flex items-center gap-4">
                    <button onClick=${goBack} className="text-gray-500 hover:text-gray-800"><${ArrowLeft} size=${20}/></button>
                    <div>
                        <h1 className="font-bold text-lg text-blue-900">${activityDoc.activityname}</h1>
                        <p className="text-xs text-gray-500">Student: ${user.LastName}, ${user.FirstName}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    ${activityDoc.tasks.map(t => {
                        const sNum = parseInt(t.stepName.split(' ')[1]);
                        const isDone = studentProgress.stepStatus[sNum]?.completed;
                        const isActive = t.taskId === currentTaskId;
                        return html`
                            <button key=${t.taskId} 
                                onClick=${() => setCurrentTaskId(t.taskId)}
                                className=${`px-3 py-1 rounded text-xs font-bold border transition-colors flex items-center gap-1 ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                            >
                                ${isDone && html`<${CheckCircle} size=${12} />`} Task ${t.taskId}
                            </button>
                        `;
                    })}
                </div>
            </header>

            <main className="flex-1 overflow-hidden flex flex-col p-4 max-w-7xl mx-auto w-full">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">${activeTaskConfig.stepName}</h2>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                            <span className="flex items-center gap-1"><${Clock} size=${14}/> Start: ${new Date(activeTaskConfig.dateTimeStart).toLocaleString()}</span>
                            <span className="flex items-center gap-1"><${AlertTriangle} size=${14}/> Due: ${new Date(activeTaskConfig.dateTimeExpire).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        ${isLocked 
                            ? html`<div className="bg-gray-100 text-gray-500 px-4 py-2 rounded font-bold flex items-center gap-2"><${Lock} size=${16}/> Locked</div>`
                            : isSubmitted 
                                ? html`
                                    <div className="text-right mr-2">
                                        <div className="text-xs text-gray-500 uppercase font-bold">Score</div>
                                        <div className="text-2xl font-bold text-blue-600">${studentProgress.scores[stepNum]?.score} <span className="text-sm text-gray-400">/ ${studentProgress.scores[stepNum]?.maxScore}</span></div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded font-bold border border-green-200 flex items-center gap-2"><${CheckCircle} size=${18}/> Submitted</div>
                                `
                                : isExpired
                                    ? html`<div className="bg-red-100 text-red-700 px-4 py-2 rounded font-bold border border-red-200">Expired</div>`
                                    : html`<button onClick=${() => handleSaveStep(currentTaskId, studentProgress.answers[stepNum], true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md font-bold transition-colors flex items-center gap-2"><${Save} size=${18}/> Submit Task</button>`
                        }
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 text-sm text-blue-900">
                    <strong><${BookOpen} size=${14} className="inline mr-1"/> Instructions:</strong> ${activeTaskConfig.instructions}
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
                    ${isLocked 
                        ? html`<div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10 text-gray-400 font-bold">Task is currently locked.</div>`
                        : html`
                            <div className="h-full overflow-y-auto p-4 custom-scrollbar">
                                <${TaskSection} ...${stepProps} />
                            </div>
                        `
                    }
                </div>
            </main>
        </div>
    `;
};

// --- ENTRY POINT ---
export async function renderAccountingCycleActivity(container, activityDoc, user, goBack) {
    const root = createRoot(container);
    root.render(html`<${ActivityRunner} activityDoc=${activityDoc} user=${user} goBack=${goBack} />`);
}
