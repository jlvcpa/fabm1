// --- js/content/accountingCycleActivity.js ---

import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import { ArrowLeft, Save, CheckCircle, Lock, Clock, AlertTriangle, CheckSquare } from 'https://esm.sh/lucide-react@0.263.1';
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// --- Import Data & Utils ---
import { merchTransactionsExamData } from './questionBank/qbMerchTransactions.js';
import { getAccountType, sortAccounts, getLetterGrade } from './accountingCycle/utils.js';
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

// --- 1. CRITICAL FIX: ID GENERATOR HELPER ---
// Ensures we find the student's saved data even if name has extra spaces
const generateResultDocId = (user) => {
    const cn = String(user.CN || '').trim();
    const id = String(user.Idnumber || '').trim();
    const last = String(user.LastName || '').trim();
    const first = String(user.FirstName || '').trim();
    
    if (!cn || !id || !last) return null;
    return `${cn}-${id}-${last} ${first}`;
};

// --- LOGIC ENGINE ---
const deriveAnalysis = (debits, credits) => {
    let analysis = { assets: 'No Effect', liabilities: 'No Effect', equity: 'No Effect', cause: '' };
    debits.forEach(d => {
        const type = getAccountType(d.account);
        if (type === 'Asset') analysis.assets = 'Increase';
        else if (type === 'Liability') analysis.liabilities = 'Decrease';
        else if (type === 'Equity') {
            analysis.equity = 'Decrease';
            if(d.account.includes('Drawings') || d.account.includes('Withdrawal')) analysis.cause = 'Increase in Drawings';
            else analysis.cause = 'Decrease in Capital';
        }
        else if (type === 'Expense') { analysis.equity = 'Decrease'; analysis.cause = 'Increase in Expense'; }
    });
    credits.forEach(c => {
        const type = getAccountType(c.account);
        if (type === 'Asset') analysis.assets = (analysis.assets === 'Increase') ? 'No Effect' : 'Decrease';
        else if (type === 'Liability') analysis.liabilities = (analysis.liabilities === 'Decrease') ? 'No Effect' : 'Increase';
        else if (type === 'Equity') {
            analysis.equity = (analysis.equity === 'Decrease') ? 'No Effect' : 'Increase';
            if(c.account.includes('Capital')) analysis.cause = 'Increase in Capital';
        }
        else if (type === 'Revenue') { analysis.equity = (analysis.equity === 'Decrease') ? 'No Effect' : 'Increase'; analysis.cause = 'Increase in Income'; }
    });
    return analysis;
};

const adaptStaticDataToSimulator = (questionData) => {
    const { transactions, adjustments } = questionData;
    const normalizedTransactions = transactions.map((t, idx) => {
        const debits = []; const credits = [];
        t.solution.forEach(line => {
            if (line.debit) debits.push({ account: line.account, amount: Number(line.debit) });
            if (line.credit) credits.push({ account: line.account, amount: Number(line.credit) });
        });
        const analysis = deriveAnalysis(debits, credits);
        return { id: idx + 1, date: t.date, description: t.description, debits, credits, analysis };
    });

    const ledger = {}; const validAccounts = new Set();
    const addToLedger = (acc, dr, cr) => { validAccounts.add(acc); if (!ledger[acc]) ledger[acc] = { debit: 0, credit: 0 }; ledger[acc].debit += dr; ledger[acc].credit += cr; };
    normalizedTransactions.forEach(t => { t.debits.forEach(d => addToLedger(d.account, d.amount, 0)); t.credits.forEach(c => addToLedger(c.account, 0, c.amount)); });

    const normalizedAdjustments = adjustments.map((a, idx) => {
        const drLine = a.solution.find(s => s.debit); const crLine = a.solution.find(s => s.credit);
        const amt = drLine ? Number(drLine.debit) : 0;
        if (drLine) validAccounts.add(drLine.account); if (crLine) validAccounts.add(crLine.account);
        return { id: `adj-${idx}`, desc: a.description, drAcc: drLine ? drLine.account : '', crAcc: crLine ? crLine.account : '', amount: amt };
    });

    return {
        config: { businessType: 'Merchandising', inventorySystem: 'Periodic', isSubsequentYear: false, deferredExpenseMethod: 'Asset', deferredIncomeMethod: 'Liability' },
        transactions: normalizedTransactions, ledger: ledger, validAccounts: sortAccounts(Array.from(validAccounts)), beginningBalances: null, adjustments: normalizedAdjustments
    };
};

// --- RUNNER ---
const ActivityRunner = ({ activityDoc, user, goBack }) => {
    const [loading, setLoading] = useState(true);
    const [activityData, setActivityData] = useState(null);
    const [studentProgress, setStudentProgress] = useState({ answers: {}, stepStatus: {}, scores: {} });
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [questionId, setQuestionId] = useState(null);

    // Initial Load & Realtime Sync
    useEffect(() => {
        if(!activityDoc) return;
        const init = async () => {
            // FIX: Use Consistent ID Generation
            const resultDocId = generateResultDocId(user);
            if (!resultDocId) return;

            const resultRef = doc(db, `results_${activityDoc.activityname}_${activityDoc.section}`, resultDocId);
            const unsubscribe = onSnapshot(resultRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // FIX: Deep merge to prevent state loss
                    setStudentProgress(prev => ({
                        answers: { ...prev.answers, ...(data.answers || {}) },
                        stepStatus: { ...prev.stepStatus, ...(data.stepStatus || {}) },
                        scores: { ...prev.scores, ...(data.scores || {}) }
                    }));
                    let qId = data.questionId;
                    if (!qId) { qId = pickRandomQuestion(); setDoc(resultRef, { questionId: qId }, { merge: true }); }
                    setQuestionId(qId);
                } else {
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

    useEffect(() => {
        if (questionId) {
            const rawQ = merchTransactionsExamData.find(q => q.id === questionId);
            if (rawQ) {
                const adaptedData = adaptStaticDataToSimulator(rawQ);
                setActivityData(adaptedData);
                if (!currentTaskId && activityDoc.tasks?.length > 0) setCurrentTaskId(activityDoc.tasks[0].taskId);
            }
        }
    }, [questionId, activityDoc]);

    // FIX: String comparison for safer Task ID matching
    const activeTaskConfig = activityDoc.tasks?.find(t => String(t.taskId) === String(currentTaskId));
    
    // FIX: Safer Step Number parsing using Regex to find the number in "Step 01 ..."
    const stepNumMatch = activeTaskConfig ? activeTaskConfig.stepName.match(/Step\s+(\d+)/i) : null;
    const stepNum = stepNumMatch ? parseInt(stepNumMatch[1]) : 1;

    const currentStepStatus = studentProgress.stepStatus[stepNum] || {};
    const isSubmitted = currentStepStatus.completed;

    // --- AUTO-SUBMIT TIMER ---
    useEffect(() => {
        if (!activeTaskConfig || isSubmitted) return;
        const interval = setInterval(() => {
            const now = new Date();
            const expire = new Date(activeTaskConfig.dateTimeExpire);
            if (now > expire) {
                clearInterval(interval);
                handleActionClick(stepNum, true); 
                alert("Time Expired! Your answer has been automatically submitted.");
            }
        }, 5000); 
        return () => clearInterval(interval);
    }, [activeTaskConfig, isSubmitted, stepNum]);

    const pickRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * merchTransactionsExamData.length);
        return merchTransactionsExamData[randomIndex].id;
    };

    const handleSaveStep = async (stepNum, newData) => {
        setStudentProgress(prev => ({ ...prev, answers: { ...prev.answers, [stepNum]: newData } }));
        const resultDocId = generateResultDocId(user);
        if (!resultDocId) return;
        const resultRef = doc(db, `results_${activityDoc.activityname}_${activityDoc.section}`, resultDocId);
        try { await setDoc(resultRef, { [`answers.${stepNum}`]: newData, lastUpdated: new Date().toISOString() }, { merge: true }); } catch (e) { console.error("Save error", e); }
    };

    // --- VALIDATION & SUBMIT LOGIC ---
    const handleActionClick = async (stepNum, isFinalSubmit = false) => {
        const currentAns = studentProgress.answers[stepNum] || {};
        let result = { score: 0, maxScore: 0 };
        
        // Validation Routing
        if (stepNum === 1) result = validateStep01(activityData.transactions, currentAns);
        else if (stepNum === 2) result = validateStep02(activityData.transactions, currentAns);
        else if (stepNum === 3) result = validateStep03(activityData, currentAns);
        else if (stepNum === 4) result = validateStep04(activityData.transactions, currentAns, activityData.ledger);
        else if (stepNum === 5) result = validateStep05(activityData.ledger, activityData.adjustments, currentAns);
        else if (stepNum === 6) result = validateStep06(activityData.ledger, activityData.adjustments, activityData, currentAns);
        else if (stepNum === 7) result = validateStep07(activityData.adjustments, currentAns.journal, currentAns.ledger, activityData.transactions);
        else if (stepNum === 8) result = validateStep08(currentAns, activityData);
        else if (stepNum === 9) result = validateStep09(currentAns, activityData);
        else if (stepNum === 10) result = validateStep10(currentAns, activityData);

        const isCorrect = result.score === result.maxScore && result.maxScore > 0;
        const currentAttempts = studentProgress.stepStatus[stepNum]?.attempts ?? 3;
        let newStatus = {};

        if (isFinalSubmit || isCorrect) {
            newStatus = { completed: true, correct: isCorrect, attempts: currentAttempts };
            if(!isFinalSubmit && isCorrect) alert("Validation Passed! Step Completed.");
            else if(!isCorrect && isFinalSubmit) alert(`Step Submitted.\nFinal Score: ${result.score}/${result.maxScore}`);
        } else {
            const attemptsLeft = Math.max(0, currentAttempts - 1);
            if (attemptsLeft === 0) {
                newStatus = { completed: true, correct: false, attempts: 0 };
                alert(`No attempts remaining. Step Submitted.\nFinal Score: ${result.score}/${result.maxScore}`);
            } else {
                newStatus = { completed: false, correct: false, attempts: attemptsLeft };
                alert(`Incorrect. You have ${attemptsLeft} attempt(s) remaining.`);
            }
        }

        setStudentProgress(prev => ({
            ...prev,
            stepStatus: { ...prev.stepStatus, [stepNum]: newStatus },
            scores: { ...prev.scores, [stepNum]: { score: result.score, maxScore: result.maxScore } }
        }));

        const resultDocId = generateResultDocId(user);
        if (!resultDocId) return;
        const resultRef = doc(db, `results_${activityDoc.activityname}_${activityDoc.section}`, resultDocId);
        
        await setDoc(resultRef, {
            [`stepStatus.${stepNum}`]: newStatus,
            [`scores.${stepNum}`]: { score: result.score, maxScore: result.maxScore }
        }, { merge: true });
    };

    if (loading || !activityData) return html`<div className="p-8 text-center text-gray-500">Loading activity data...</div>`;
    if (!activityDoc.tasks || activityDoc.tasks.length === 0) return html`<div className="p-8 text-center text-red-500">Error: No tasks defined.</div>`;

    // UI Logic
    const scoreData = studentProgress.scores[stepNum];
    const attemptsLeft = studentProgress.stepStatus[stepNum]?.attempts ?? 3;
    
    let btnLabel = "Validate Answer";
    let btnColor = "bg-blue-600 hover:bg-blue-700";
    let btnAction = () => handleActionClick(stepNum, false);
    let btnIcon = CheckSquare;

    if (isSubmitted) {
        btnLabel = "Step Submitted";
        btnColor = "bg-gray-400 cursor-not-allowed";
        btnAction = () => {};
        btnIcon = CheckCircle;
    } else if (attemptsLeft <= 0) {
        btnLabel = "Submit Step";
        btnColor = "bg-green-600 hover:bg-green-700";
        btnAction = () => handleActionClick(stepNum, true); 
        btnIcon = Save;
    }

    const stepProps = {
        step: { id: stepNum, title: activeTaskConfig.stepName, description: activeTaskConfig.instructions },
        activityData: activityData,
        answers: studentProgress.answers,
        stepStatus: { ...studentProgress.stepStatus, [stepNum]: { completed: isSubmitted, attempts: attemptsLeft } },
        isReadOnly: isSubmitted, 
        isPerformanceTask: true, 
        showFeedback: isSubmitted, 
        updateAnswerFns: {
            updateAnswer: (id, val) => handleSaveStep(stepNum, val),
            updateNestedAnswer: (id, key, subKey, val) => {
                const currentStepData = studentProgress.answers[stepNum] || {};
                const currentRowData = currentStepData[key] || {};
                const newData = { ...currentStepData, [key]: { ...currentRowData, [subKey]: val } };
                handleSaveStep(stepNum, newData);
            },
            updateTrialBalanceAnswer: (stepId, acc, side, val) => {
                const current = studentProgress.answers[stepNum] || {};
                const accData = current[acc] || {};
                const newData = { ...current, [acc]: { ...accData, [side]: val } };
                handleSaveStep(stepNum, newData);
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
                        const sNumMatch = t.stepName.match(/Step\s+(\d+)/i);
                        const sNum = sNumMatch ? parseInt(sNumMatch[1]) : 1;
                        const isDone = studentProgress.stepStatus[sNum]?.completed;
                        const isActive = String(t.taskId) === String(currentTaskId);
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
                    
                    <div className="flex items-center gap-6">
                        ${/* SCORE DISPLAY */''}
                        ${isSubmitted && scoreData && html`
                            <div className="text-right">
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Result</div>
                                <div className="text-xl font-bold text-blue-800 flex items-center gap-2">
                                    ${scoreData.score} <span className="text-sm text-gray-400 font-normal">/ ${scoreData.maxScore}</span>
                                    <span className="bg-blue-100 text-blue-700 text-sm px-2 py-0.5 rounded ml-1">${getLetterGrade(scoreData.score, scoreData.maxScore)}</span>
                                </div>
                            </div>
                        `}
                        
                        <div className="flex flex-col items-end">
                            <button onClick=${btnAction} disabled=${isSubmitted} className=${`${btnColor} text-white px-6 py-2 rounded shadow-md font-bold transition-colors flex items-center gap-2 min-w-[160px] justify-center`}>
                                <${btnIcon} size=${18}/> ${btnLabel}
                            </button>
                            ${!isSubmitted && html`
                                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wide">
                                    Attempts Left: <span className=${attemptsLeft === 0 ? "text-red-500" : "text-blue-600"}>${attemptsLeft}</span>
                                </span>
                            `}
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
                     <div className="h-full overflow-y-auto custom-scrollbar">
                        ${/* FIX: key={stepNum} forces React to destroy the old step and build the new one when you switch tasks */ }
                        <${TaskSection} key=${stepNum} ...${stepProps} />
                    </div>
                </div>
            </main>
        </div>
    `;
};

export async function renderAccountingCycleActivity(container, activityDoc, user, goBack) {
    const root = createRoot(container);
    root.render(html`<${ActivityRunner} activityDoc=${activityDoc} user=${user} goBack=${goBack} />`);
}
