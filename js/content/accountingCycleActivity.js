import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import { ArrowLeft, Save, CheckCircle, Lock, Clock, AlertTriangle, CheckSquare, Timer } from 'https://esm.sh/lucide-react@0.263.1';
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

import { merchTransactionsExamData } from './questionBank/qbMerchTransactions.js';
// Added ActivityHelper to imports
import { getAccountType, sortAccounts, getLetterGrade, ActivityHelper } from './accountingCycle/utils.js';

// --- NEW IMPORT: Get the Global Year from root utils ---
import { COURSE_YEAR } from '../utils.js';

import { TaskSection } from './accountingCycle/steps.js';

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

const generateResultDocId = (user) => {
    const cn = String(user.CN || '').trim();
    const id = String(user.Idnumber || '').trim();
    const last = String(user.LastName || '').trim();
    const first = String(user.FirstName || '').trim();
    if (!cn || !id || !last) return null;
    return `${cn}-${id}-${last} ${first}`;
};

const getStepNumber = (taskConfig, index) => {
    if (!taskConfig) return index + 1;
    if (taskConfig.taskId) {
        const idNum = parseInt(taskConfig.taskId);
        if (!isNaN(idNum) && idNum > 0 && idNum <= 10) return idNum;
    }
    const nameMatch = taskConfig.stepName ? taskConfig.stepName.match(/Step\s*0?(\d+)/i) : null;
    if (nameMatch) return parseInt(nameMatch[1]);
    return index + 1;
};

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
    const validAccounts = new Set(); 

    const normalizedTransactions = transactions.map((t, idx) => {
        const debits = []; const credits = [];
        
        // Populate validAccounts from transaction solutions
        if (t.solution) {
            t.solution.forEach(line => {
                if (line.account && !line.isExplanation) {
                    validAccounts.add(line.account);
                }
                
                if (line.debit) debits.push({ account: line.account, amount: Number(line.debit) });
                if (line.credit) credits.push({ account: line.account, amount: Number(line.credit) });
            });
        }
        
        const analysis = deriveAnalysis(debits, credits);
        return { id: idx + 1, date: t.date, description: t.description, debits, credits, analysis };
    });

    const ledger = {}; 
    const addToLedger = (acc, dr, cr) => { 
        validAccounts.add(acc); // Fail-safe: Ensure accounts used in ledger are also in the list
        if (!ledger[acc]) ledger[acc] = { debit: 0, credit: 0 }; 
        ledger[acc].debit += dr; 
        ledger[acc].credit += cr; 
    };
    normalizedTransactions.forEach(t => { t.debits.forEach(d => addToLedger(d.account, d.amount, 0)); t.credits.forEach(c => addToLedger(c.account, 0, c.amount)); });

    const normalizedAdjustments = adjustments.map((a, idx) => {
        const drLine = a.solution.find(s => s.debit); 
        const crLine = a.solution.find(s => s.credit);
        const amt = drLine ? Number(drLine.debit) : 0;
        
        // Populate validAccounts from adjustments
        if (drLine) validAccounts.add(drLine.account); 
        if (crLine) validAccounts.add(crLine.account);
        
        return { id: `adj-${idx}`, desc: a.description, drAcc: drLine ? drLine.account : '', crAcc: crLine ? crLine.account : '', amount: amt };
    });

    // console.log("DEBUG: Constructed validAccounts list:", Array.from(validAccounts));
    // 1. Create the sorted list first
    const sortedList = sortAccounts(Array.from(validAccounts));
    
    // 2. Log it to see exactly what is being sent out
    // console.log("DEBUG: Sorted Accounts ready for return:", sortedList);

    return {
        config: { 
            businessType: 'Merchandising', 
            inventorySystem: questionData.inventorySystem || 'Periodic', 
            isSubsequentYear: false, 
            deferredExpenseMethod: 'Asset', 
            deferredIncomeMethod: 'Liability' 
        },
        transactions: normalizedTransactions, 
        ledger: ledger, 
        
        // 3. Use the variable here
        validAccounts: sortedList, 
        
        beginningBalances: null, 
        adjustments: normalizedAdjustments
    };
};

const normalizeFirebaseData = (data) => {
    if (!data) return { answers: {}, stepStatus: {}, scores: {} };

    const normalized = {
        answers: data.answers || {},
        stepStatus: data.stepStatus || {},
        scores: data.scores || {},
        ...data 
    };

    Object.keys(data).forEach(key => {
        if (key.includes('.')) {
            const [parent, child] = key.split('.');
            if (['answers', 'stepStatus', 'scores'].includes(parent)) {
                if (!normalized[parent]) normalized[parent] = {};
                normalized[parent][child] = data[key];
            }
        }
    });

    return normalized;
};

// 1. ADD THIS HELPER FUNCTION BEFORE ActivityRunner
const removeUndefined = (obj) => {
    return JSON.parse(JSON.stringify(obj, (k, v) => (v === undefined ? null : v)));
};

// --- HELPER: DATA INJECTOR (FIXED) ---
const injectYearToQuestion = (question, year) => {
    const q = JSON.parse(JSON.stringify(question));
    
    // Inject into Transactions Array
    if (q.transactions && Array.isArray(q.transactions)) {
        q.transactions.forEach(t => {
            if (t.date && !t.date.toString().includes(year)) {
                t.date = `${t.date}, ${year}`;
            }
        });
    }
    
    // Inject into Adjustments Array (if they have dates, though usually generic)
    if (q.adjustments && Array.isArray(q.adjustments)) {
        q.adjustments.forEach(a => {
            if (a.date && !a.date.toString().includes(year)) {
                a.date = `${a.date}, ${year}`;
            }
        });
    }
    
    return q;
};

const ActivityRunner = ({ activityDoc, user, goBack }) => {
    const [loading, setLoading] = useState(true);
    const [activityData, setActivityData] = useState(null);
    const [studentProgress, setStudentProgress] = useState({ answers: {}, stepStatus: {}, scores: {} });
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [questionId, setQuestionId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if(!activityDoc) return;
        const init = async () => {
            const resultDocId = generateResultDocId(user);
            if (!resultDocId) return;

            const resultRef = doc(db, `results_${activityDoc.activityname}_${activityDoc.section}`, resultDocId);
            const unsubscribe = onSnapshot(resultRef, (docSnap) => {
                if (docSnap.exists()) {
                    const rawData = docSnap.data();
                    const data = normalizeFirebaseData(rawData);
                    
                    setStudentProgress(prev => ({
                        answers: { ...prev.answers, ...(data.answers || {}) },
                        stepStatus: { ...prev.stepStatus, ...(data.stepStatus || {}) },
                        scores: { ...prev.scores, ...(data.scores || {}) }
                    }));
                    
                    let qId = data.questionId;
                    if (!qId) { 
                        qId = pickRandomQuestion();
                    }
                    setQuestionId(qId);
                } else {
                    const qId = pickRandomQuestion();
                    setQuestionId(qId);
                }
                setLoading(false);
            });
            return () => unsubscribe();
        };
        init();
    }, [activityDoc.activityname, activityDoc.section, user.CN, user.Idnumber]);

    // EFFECT 1: Load Activity Data (Only runs when questionId changes)
    useEffect(() => {
        if (questionId) {
            const rawQ = merchTransactionsExamData.find(q => q.id === questionId);
            if (rawQ) {
                // --- NEW LOGIC: INJECT YEAR ---
                // We inject the year BEFORE adapting the data for the simulator
                const datedQ = injectYearToQuestion(rawQ, COURSE_YEAR);

                const adaptedData = adaptStaticDataToSimulator(datedQ);
                setActivityData(adaptedData);
            }
        }
    }, [questionId]); 

    // EFFECT 2: Set Initial Task ID
    useEffect(() => {
        if (!currentTaskId && activityDoc?.tasks?.length > 0) {
            setCurrentTaskId(activityDoc.tasks[0].taskId);
        }
    }, [currentTaskId, activityDoc?.tasks?.[0]?.taskId]);

    const activeTaskIndex = activityDoc.tasks?.findIndex(t => String(t.taskId) === String(currentTaskId));
    const validIndex = activeTaskIndex >= 0 ? activeTaskIndex : 0;
    const activeTaskConfig = activityDoc.tasks ? activityDoc.tasks[validIndex] : null;
    const stepNum = getStepNumber(activeTaskConfig, validIndex);

    const currentStepStatus = studentProgress.stepStatus[stepNum] || {};
    const isSubmitted = currentStepStatus.completed;

    const now = new Date();
    const startTime = new Date(activeTaskConfig.dateTimeStart);
    const isEarly = now < startTime;

    let isLockedBySequence = false;
    if (stepNum > 1) {
        const prevStepNum = stepNum - 1;
        const prevStatus = studentProgress.stepStatus[prevStepNum] || {};
        if (!prevStatus.completed) {
            isLockedBySequence = true;
        }
    }

    const isLocked = isEarly || isLockedBySequence;

    // --- FIXED TIMER EFFECT ---
    useEffect(() => {
        // 1. Safety Checks: If submitted, no config, OR NO DATA YET, do not run timer.
        if (isSubmitted) { setTimeLeft(null); return; }
        if (!activeTaskConfig || !activityData) return; // <--- CRITICAL FIX

        let intervalId = null;

        const updateTimer = () => {
            const currentTime = new Date();
            const start = new Date(activeTaskConfig.dateTimeStart);
            const expire = new Date(activeTaskConfig.dateTimeExpire);

            if (currentTime < start) {
                setTimeLeft("Not Started");
                return;
            }

            const diff = expire - currentTime;
            if (diff <= 0) {
                setTimeLeft("00:00:00");
                if (intervalId) clearInterval(intervalId);
                
                // Now safe to call because we ensured activityData exists
                handleActionClick(stepNum, true); 
                
                if (!isSubmitted) alert("Time Expired! Your answer has been automatically submitted.");
                return;
            }

            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
        };

        updateTimer();
        intervalId = setInterval(updateTimer, 1000); 
        
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    // 2. Added activityData to dependencies so timer restarts once data loads
    }, [activeTaskConfig, isSubmitted, stepNum, activityData]);

    const pickRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * merchTransactionsExamData.length);
        return merchTransactionsExamData[randomIndex].id;
    };

    const handleSaveStep = (stepNum, newData) => {
        setStudentProgress(prev => ({ 
            ...prev, 
            answers: { ...prev.answers, [stepNum]: newData } 
        }));
    };

    const handleActionClick = async (stepNum, isFinalSubmit = false) => {
        if (!activityData) {
            console.warn("Cannot validate: Activity Data is missing.");
            return;
        }
        if (isLocked && !isFinalSubmit) {
            console.warn("Attempted to validate a locked task.");
            return;
        }

        const currentAns = studentProgress.answers[stepNum] || {};
        let result = { score: 0, maxScore: 0 };
        
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
            [`answers.${stepNum}`]: removeUndefined(currentAns), 
            [`stepStatus.${stepNum}`]: newStatus,
            [`scores.${stepNum}`]: { score: result.score, maxScore: result.maxScore },
            lastUpdated: new Date().toISOString()
        }, { merge: true });
    };

    if (loading || !activityData) return html`<div className="p-8 text-center text-gray-500">Loading activity data...</div>`;
    if (!activityDoc.tasks || activityDoc.tasks.length === 0) return html`<div className="p-8 text-center text-red-500">Error: No tasks defined.</div>`;

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
    } else if (isLocked) { 
        btnLabel = "Task Locked";
        btnColor = "bg-gray-300 cursor-not-allowed text-gray-500";
        btnAction = () => {};
        btnIcon = Lock;
    } else if (attemptsLeft <= 0) {
        btnLabel = "Submit Step";
        btnColor = "bg-green-600 hover:bg-green-700";
        btnAction = () => handleActionClick(stepNum, true); 
        btnIcon = Save;
    }

    const stepInstructions = (activeTaskConfig && activityData) 
        ? ActivityHelper.getInstructionsHTML(
            stepNum,
            activeTaskConfig.stepName,
            activityData.validAccounts,
            activityData.config.isSubsequentYear,
            activityData.beginningBalances,
            activityData.config.deferredExpenseMethod,
            activityData.config.deferredIncomeMethod,
            activityData.config.inventorySystem
          )
        : (activeTaskConfig ? activeTaskConfig.instructions : '');

    const stepProps = {
        step: { id: stepNum, title: activeTaskConfig.stepName, description: stepInstructions },
        activityData: activityData,
        answers: studentProgress.answers,
        stepStatus: studentProgress.stepStatus, 
        isReadOnly: isSubmitted || isEarly, 
        isLockedBySequence: isLockedBySequence, 
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
                <div className="flex items-center gap-4 flex-shrink-0">
                    <button onClick=${goBack} className="text-gray-500 hover:text-gray-800"><${ArrowLeft} size=${20}/></button>
                    <div>
                        <h1 className="font-bold text-lg text-blue-900">${activityDoc.activityname}</h1>
                        <p className="text-xs text-gray-500">Student: ${user.LastName}, ${user.FirstName}</p>
                    </div>
                </div>
                
                <div className="flex gap-1 overflow-x-auto max-w-[60vw] md:max-w-none pb-1 items-center custom-scrollbar">
                    ${activityDoc.tasks.map(t => {
                        const idx = activityDoc.tasks.indexOf(t);
                        const sNum = getStepNumber(t, idx);
                        const isDone = studentProgress.stepStatus[sNum]?.completed;
                        const isActive = String(t.taskId) === String(currentTaskId);
                        return html`
                            <button key=${t.taskId} 
                                onClick=${() => setCurrentTaskId(t.taskId)}
                                className=${`px-3 py-1 rounded text-xs font-bold border transition-colors flex-shrink-0 whitespace-nowrap flex items-center gap-1 ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                            >
                                ${isDone && html`<${CheckCircle} size=${12} />`} Task ${t.taskId}
                            </button>
                        `;
                    })}
                </div>
            </header>

            <main className="flex-1 overflow-hidden flex flex-col p-0 max-w-7xl mx-auto w-full">
                
                <div className="bg-white p-0 rounded-lg shadow-sm border border-gray-200 mb-1 flex flex-col gap-0">
                    
                    <div className="flex justify-between items-center w-full px-2 pt-1">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 leading-tight">${activeTaskConfig.stepName}</h2>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 leading-none">
                                <span className="flex items-center gap-1"><${Clock} size=${14}/> Start: ${new Date(activeTaskConfig.dateTimeStart).toLocaleString()}</span>
                                <span className="flex items-center gap-1"><${AlertTriangle} size=${14}/> Due: ${new Date(activeTaskConfig.dateTimeExpire).toLocaleString()}</span>
                                
                                ${timeLeft && !isSubmitted && html`
                                    <span className="flex items-center gap-1 font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 ml-2">
                                        <${Timer} size=${14}/> Remaining: ${timeLeft}
                                    </span>
                                `}
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-0">
                            ${isSubmitted && scoreData && html`
                                <div className="text-right">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Result</div>
                                    <div className="text-xl font-bold text-blue-800 flex items-center gap-2 leading-none">
                                        ${scoreData.score} <span className="text-sm text-gray-400 font-normal">/ ${scoreData.maxScore}</span>
                                        <span className="bg-blue-100 text-blue-700 text-sm px-2 py-0.5 rounded ml-1">${getLetterGrade(scoreData.score, scoreData.maxScore)}</span>
                                    </div>
                                </div>
                            `}
                            
                            <div className="flex flex-col items-end">
                                <button onClick=${btnAction} disabled=${isSubmitted || isLocked} className=${`${btnColor} text-white px-6 py-2 rounded shadow-md font-bold transition-colors flex items-center gap-2 min-w-[160px] justify-center`}>
                                    <${btnIcon} size=${18}/> ${btnLabel}
                                </button>
                                ${!isSubmitted && !isLocked && html`
                                    <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wide leading-none">
                                        Attempts Left: <span className=${attemptsLeft === 0 ? "text-red-500" : "text-blue-600"}>${attemptsLeft}</span>
                                    </span>
                                `}
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-1 bg-blue-50 text-blue-900 text-xs rounded-lg border border-blue-100 shadow-sm leading-tight" 
                         dangerouslySetInnerHTML=${{ __html: stepInstructions }}>
                    </div>

                </div>

                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
                     <div className="h-full overflow-y-auto custom-scrollbar">
                        <${TaskSection} key=${stepNum} ...${stepProps} />
                    </div>
                </div>
            </main>
        </div>
    `;
};

// At the bottom of accountingCycleActivity.js

export async function renderAccountingCycleActivity(container, activityDoc, user, goBack) {
    
    // --- DEBUG CHECK ---
    if (window.lastContainer && window.lastContainer !== container) {
        console.error("🔥 CRITICAL ISSUE: Parent is passing a DIFFERENT container div!");
    } else if (container.innerHTML === "") {
        console.warn("⚠️ WARNING: Container DOM was wiped empty (innerHTML = '')!");
    } else {
        console.log("✅ Container is stable.");
    }
    window.lastContainer = container;
    // -------------------

    if (!container._reactRoot) {
        container._reactRoot = createRoot(container);
    }
    container._reactRoot.render(html`<${ActivityRunner} activityDoc=${activityDoc} user=${user} goBack=${goBack} />`);
}
