import React, { useState, useCallback, useEffect, useRef } from 'https://esm.sh/react@18.2.0';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import htm from 'https://esm.sh/htm';
import { Book, Check, RefreshCw, ArrowLeft, Save, Printer, FileText, Trash2, AlertCircle, Download } from 'https://esm.sh/lucide-react@0.263.1';
// FIXED: Import from the local utils.js in the same folder
import { APP_VERSION, STEPS, generateTransactions, generateBeginningBalances, sortAccounts, generateAdjustments, getAccountType } from './utils.js';
import { TaskSection } from './steps.js';

// Import all modular steps from the local folder
import Step01Analysis, { validateStep01 } from './steps/Step01Analysis.js';
import Step02Journalizing, { validateStep02 } from './steps/Step02Journalizing.js';
import Step03Posting, { validateStep03 } from './steps/Step03Posting.js';
import Step04TrialBalance, { validateStep04 } from './steps/Step04TrialBalance.js';
import Step05Worksheet, { validateStep05 } from './steps/Step05Worksheet.js';
import Step06FinancialStatements, { validateStep06 } from './steps/Step06FinancialStatements.js';
import Step07AdjustingEntries, { validateStep07 } from './steps/Step07AdjustingEntries.js';
import Step08ClosingEntries, { validateStep08 } from './steps/Step08ClosingEntries.js';
import Step09PostClosingTB, { validateStep09 } from './steps/Step09PostClosingTB.js';
import Step10ReversingEntries, { validateStep10 } from './steps/Step10ReversingEntries.js';
import GenericStep from './steps/GenericStep.js';

const html = htm.bind(React.createElement);

// --- ACTIVITY DATA ---
const ACTIVITY_DATA = {"config":{"businessType":"Service","ownership":"Sole Proprietorship","inventorySystem":"Periodic","numTransactions":10,"selectedSteps":[1,2,3,4,5,6,7,8,9,10],"numPartners":2,"isSubsequentYear":false,"deferredExpenseMethod":"Asset","deferredIncomeMethod":"Liability","fsFormat":"Single","includeCashFlows":false,"enableAutoSave":true,"options":{"includeTradeDiscounts":false,"includeCashDiscounts":false,"includeFreight":false}},"transactions":[{"type":"Investment","description":"Initial capital investment of P800,000","debits":[{"account":"Cash","amount":800000}],"credits":[{"account":"Owner, Capital","amount":800000}],"amount":800000,"analysis":{"assets":"Increase","liabilities":"No Effect","equity":"Increase","cause":"Increase in Capital"},"id":1,"date":"2023-01-02"},{"type":"Rent Advance","description":"Paid 3 months office rent in advance, P12,000","debits":[{"account":"Prepaid Rent","amount":12000}],"credits":[{"account":"Cash","amount":12000}],"amount":12000,"analysis":{"assets":"No Effect","liabilities":"No Effect","equity":"No Effect","cause":""},"id":2,"date":"2023-01-03"},{"type":"Supplies Credit","description":"Purchased office supplies on account for P4,800","debits":[{"account":"Supplies","amount":4800}],"credits":[{"account":"Accounts Payable","amount":4800}],"amount":4800,"analysis":{"assets":"Increase","liabilities":"Increase","equity":"No Effect","cause":""},"id":3,"date":"2023-01-05"},{"type":"Revenue Cash","description":"Provided services for cash, P26,200","debits":[{"account":"Cash","amount":26200}],"credits":[{"account":"Service Revenue","amount":26200}],"amount":26200,"analysis":{"assets":"Increase","liabilities":"No Effect","equity":"Increase","cause":"Increase in Income"},"id":4,"date":"2023-01-07"},{"type":"Revenue Credit","description":"Provided services on account, P16,200","debits":[{"account":"Accounts Receivable","amount":16200}],"credits":[{"account":"Service Revenue","amount":16200}],"amount":16200,"analysis":{"assets":"Increase","liabilities":"No Effect","equity":"Increase","cause":"Increase in Income"},"id":5,"date":"2023-01-14"},{"type":"Salary Expense","description":"Paid monthly salaries: P11,600","debits":[{"account":"Salaries Expense","amount":11600}],"credits":[{"account":"Cash","amount":11600}],"amount":11600,"analysis":{"assets":"Decrease","liabilities":"No Effect","equity":"Decrease","cause":"Increase in Expense"},"id":6,"date":"2023-01-15"},{"type":"Utility Expense","description":"Paid electricity and water bills: P2,500","debits":[{"account":"Utilities Expense","amount":2500}],"credits":[{"account":"Cash","amount":2500}],"amount":2500,"analysis":{"assets":"Decrease","liabilities":"No Effect","equity":"Decrease","cause":"Increase in Expense"},"id":7,"date":"2023-01-15"},{"type":"Drawings","description":"Owner withdrew cash for personal use: P5,400","debits":[{"account":"Owner, Drawings","amount":5400}],"credits":[{"account":"Cash","amount":5400}],"amount":5400,"analysis":{"assets":"Decrease","liabilities":"No Effect","equity":"Decrease","cause":"Increase in Drawings"},"id":8,"date":"2023-01-18"},{"type":"Equip Cash","description":"Purchased new equipment for cash: P45,700","debits":[{"account":"Equipment","amount":45700}],"credits":[{"account":"Cash","amount":45700}],"amount":45700,"analysis":{"assets":"No Effect","liabilities":"No Effect","equity":"No Effect","cause":""},"id":9,"date":"2023-01-23"},{"type":"Unearned Revenue","description":"Received cash in advance for services to be performed next month: P12,000","debits":[{"account":"Cash","amount":12000}],"credits":[{"account":"Unearned Revenue","amount":12000}],"amount":12000,"analysis":{"assets":"Increase","liabilities":"Increase","equity":"No Effect","cause":""},"id":10,"date":"2023-01-27"}],"ledger":{"Cash":{"debit":838200,"credit":77200},"Owner, Capital":{"debit":0,"credit":800000},"Prepaid Rent":{"debit":12000,"credit":0},"Supplies":{"debit":4800,"credit":0},"Accounts Payable":{"debit":0,"credit":4800},"Service Revenue":{"debit":0,"credit":42400},"Accounts Receivable":{"debit":16200,"credit":0},"Salaries Expense":{"debit":11600,"credit":0},"Utilities Expense":{"debit":2500,"credit":0},"Owner, Drawings":{"debit":5400,"credit":0},"Equipment":{"debit":45700,"credit":0},"Unearned Revenue":{"debit":0,"credit":12000}},"validAccounts":["Cash","Accounts Receivable","Supplies","Prepaid Rent","Equipment","Accounts Payable","Unearned Revenue","Owner, Capital","Owner, Drawings","Service Revenue","Salaries Expense","Utilities Expense"],"beginningBalances":null,"adjustments":[{"id":"adj1","desc":"Supplies on hand at end of period are P1,440.","drAcc":"Supplies Expense","crAcc":"Supplies","amount":3360},{"id":"adj2","desc":"One month of prepaid rent has expired: P4,000.","drAcc":"Rent Expense","crAcc":"Prepaid Rent","amount":4000},{"id":"adj3","desc":"Services performed related to advance payments: P2,500.","drAcc":"Unearned Revenue","crAcc":"Service Revenue","amount":2500},{"id":"adj4","desc":"Accrued salaries: P2,000.","drAcc":"Salaries Expense","crAcc":"Salaries Payable","amount":2000},{"id":"adj5","desc":"Depreciation: P1,500.","drAcc":"Depreciation Expense","crAcc":"Accumulated Depreciation - Equipment","amount":1500}],"steps":[{"id":1,"title":"Transaction Analysis","description":"Identify impact on Assets, Liabilities, and Equity"},{"id":2,"title":"Journalizing","description":"Record transactions in the General Journal"},{"id":3,"title":"Posting to Ledger","description":"Post journal entries to T-Accounts/Ledger"},{"id":4,"title":"Trial Balance","description":"Prepare Unadjusted Trial Balance"},{"id":5,"title":"10-Column Worksheet","description":"Prepare Worksheet with Adjustments"},{"id":6,"title":"Financial Statements","description":"Prepare Income Statement and Balance Sheet"},{"id":7,"title":"Adjusting Entries","description":"Journalize and Post Adjusting Entries"},{"id":8,"title":"Closing Entries","description":"Journalize and Post Closing Entries"},{"id":9,"title":"Post-Closing Trial Balance","description":"Prepare Post-Closing Trial Balance"},{"id":10,"title":"Reversing Entries","description":"Setup new period and Reversing Entries"}]};
const INITIAL_STATUS = {"1":{"completed":false,"attempts":3,"correct":false},"2":{"completed":false,"attempts":3,"correct":false},"3":{"completed":false,"attempts":3,"correct":false},"4":{"completed":false,"attempts":3,"correct":false},"5":{"completed":false,"attempts":3,"correct":false},"6":{"completed":false,"attempts":3,"correct":false},"7":{"completed":false,"attempts":3,"correct":false},"8":{"completed":false,"attempts":3,"correct":false},"9":{"completed":false,"attempts":3,"correct":false},"10":{"completed":false,"attempts":3,"correct":false}};

// --- REPORT VIEW ---
const ReportView = ({ activityData, answers }) => {
    return html`
        <div id="full-report-container" className="hidden">
            <div id="print-footer-template">
                <div className="w-full px-8 pb-4 font-serif text-xs">
                    <div className="flex justify-between items-end border-t border-gray-400 pt-2 mb-1">
                        <span className="font-bold">FABM 2</span><span className="page-number-slot"></span> 
                    </div>
                    <div className="border border-gray-800 p-1 text-center font-bold">[4Cs: Christ-centeredness, Competence, Character, Compassion]</div>
                </div>
            </div>
            <div className="p-8 space-y-8 report-body font-serif text-sm">
                <div className="text-center border-b-2 border-gray-800 pb-4 mb-8">
                    <h1 className="text-2xl font-bold text-blue-900 uppercase">Fundamentals of Accountancy, Business and Management 2</h1>
                    <h2 className="text-xl font-bold text-gray-700 mt-2">Comprehensive Activity Report</h2>
                    <div className="mt-4 flex justify-center gap-8">
                        <p><strong>Company:</strong> ${activityData.config.businessType} - ${activityData.config.ownership}</p>
                    </div>
                </div>
                ${activityData.steps.map(step => {
                    const stepId = step.id;
                    const stepAnswer = answers[stepId] || {};
                    const props = { activityData, data: stepAnswer, isReadOnly: true, showFeedback: true, onChange: () => {} };
                    let content = null;
                    if (stepId === 1) content = html`<${Step01Analysis} transactions=${activityData.transactions} ...${props} />`;
                    else if (stepId === 2) content = html`<${Step02Journalizing} transactions=${activityData.transactions} validAccounts=${activityData.validAccounts} ...${props} />`;
                    else if (stepId === 3) { const journalPRs = stepAnswer.journalPRs || {}; content = html`<${Step03Posting} validAccounts=${activityData.validAccounts} ledgerKey=${activityData.ledger} transactions=${activityData.transactions} beginningBalances=${activityData.beginningBalances} ...${props} journalPRs=${journalPRs} />`; }
                    else if (stepId === 4) content = html`<${Step04TrialBalance} transactions=${activityData.transactions} validAccounts=${activityData.validAccounts} beginningBalances=${activityData.beginningBalances} isSubsequentYear=${activityData.config.isSubsequentYear} expectedLedger=${activityData.ledger} ...${props} />`;
                    else if (stepId === 5) content = html`<${Step05Worksheet} ledgerData=${activityData.ledger} adjustments=${activityData.adjustments} ...${props} />`;
                    else if (stepId === 6) content = html`<${Step06FinancialStatements} ledgerData=${activityData.ledger} adjustments=${activityData.adjustments} ...${props} />`;
                    else if (stepId === 7) content = html`<${Step07AdjustingEntries} ...${props} />`;
                    else if (stepId === 8) { let valRes = null; if(typeof validateStep08 === 'function') valRes = validateStep08(stepAnswer, activityData); content = html`<${Step08ClosingEntries} ...${props} validationResult=${valRes} />`; }
                    else if (stepId === 9) { const closingJournal = answers[8]?.journal; const step9Data = { ...stepAnswer, closingJournal }; content = html`<${Step09PostClosingTB} ...${props} data=${step9Data} />`; }
                    else if (stepId === 10) content = html`<${Step10ReversingEntries} ...${props} />`;
                    else content = html`<${GenericStep} stepId=${stepId} title=${step.title} ...${props} />`;
                    
                    return html`
                        <div className="report-section mb-10 break-inside-avoid">
                            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-300 mb-4 pb-1 uppercase">Task ${stepId}: ${step.title}</h3>
                            ${content}
                        </div>
                        ${(stepId===5||stepId===6||stepId===9) ? html`<div className="page-break"></div>` : ''}
                    `;
                })}
            </div>
        </div>
    `;
};

const StudentApp = () => {
    const [activityData] = useState(ACTIVITY_DATA);
    const [currentStepIndex, setCurrentStepIndex] = useState(0); 
    const [stepStatus, setStepStatus] = useState(INITIAL_STATUS);
    const [answers, setAnswers] = useState({});

    // Resume Logic
    useEffect(() => {
        if (activityData.config.enableAutoSave) {
            const saved = localStorage.getItem('ac_student_progress');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    if(confirm("Found saved progress on this device. Resume?")) {
                        setStepStatus(data.stepStatus);
                        setAnswers(data.answers);
                        setCurrentStepIndex(data.currentStepIndex);
                    }
                } catch(e) {}
            }
        }
    }, []);

    // Auto-Save
    useEffect(() => {
        if (activityData.config.enableAutoSave) {
            localStorage.setItem('ac_student_progress', JSON.stringify({ activityData, currentStepIndex, stepStatus, answers, timestamp: Date.now() }));
        }
    }, [answers, stepStatus, currentStepIndex]);

    const clearSave = () => {
        if(confirm("Are you sure? This deletes your local progress.")) {
             localStorage.removeItem('ac_student_progress');
             window.location.reload();
        }
    };

    const updateAnswer = useCallback((stepId, data) => setAnswers(p => ({ ...p, [stepId]: data })), []);
    const updateNestedAnswer = useCallback((stepId, key, subKey, value) => setAnswers(prev => { const stepData = prev[stepId] || {}; const keyData = stepData[key] || {}; return { ...prev, [stepId]: { ...stepData, [key]: { ...keyData, [subKey]: value } } }; }), []);
    const updateTrialBalanceAnswer = useCallback((stepId, acc, side, val) => { setAnswers(prev => { const stepData = prev[stepId] || {}; const accData = stepData[acc] || {}; return { ...prev, [stepId]: { ...stepData, [acc]: { ...accData, [side]: val } } }; }); }, []);

    const handlePrint = () => {
        const content = document.getElementById('full-report-container');
        if (!content) return;
        const printWindow = window.open('', '', 'height=800,width=1000');
        printWindow.document.write('<html><head><title>Activity Report</title><script src="https://cdn.tailwindcss.com"></' + 'script>');
        printWindow.document.write(`<style>@page{size:8.5in 13in;margin:0.5in;margin-bottom:0.8in}@media print{body{-webkit-print-color-adjust:exact}.page-break{page-break-after:always}.break-inside-avoid{break-inside:avoid}.hidden{display:block!important}button,.no-print{display:none!important}.print-footer{position:fixed;bottom:0;left:0;right:0;height:0.8in}.report-body{margin-bottom:0.8in}}::-webkit-scrollbar{display:none}</style>`);
        printWindow.document.write('</head><body class="bg-white">');
        printWindow.document.write('<div class="report-body">' + content.innerHTML + '</div>');
        const footerHTML = content.querySelector('#print-footer-template').innerHTML;
        printWindow.document.write('<div class="print-footer">' + footerHTML + '</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        setTimeout(() => { printWindow.focus(); printWindow.print(); printWindow.close(); }, 1000);
    };

    const handleValidateStepById = (stepId) => () => {
        const status = stepStatus[stepId];
        if (status.attempts <= 0 && status.completed) return;
        const currentAns = answers[stepId] || {};
        let isCorrect = false;

        if (stepId === 1) isCorrect = validateStep01(activityData.transactions, currentAns).isCorrect;
        else if (stepId === 2) isCorrect = validateStep02(activityData.transactions, currentAns).isCorrect;
        else if (stepId === 3) isCorrect = validateStep03(activityData, currentAns).isCorrect;
        else if (stepId === 4) isCorrect = validateStep04(activityData.transactions, currentAns, activityData.ledger).isCorrect;
        else if (stepId === 5) isCorrect = validateStep05(activityData.ledger, activityData.adjustments, currentAns).isCorrect;
        else if (stepId === 6) isCorrect = validateStep06(activityData.ledger, activityData.adjustments, activityData, currentAns).isCorrect;
        else if (stepId === 7) { 
            const r = validateStep07(activityData.adjustments, currentAns.journal, currentAns.ledger, activityData.transactions);
            isCorrect = r.score === r.maxScore && r.maxScore > 0;
        } else if (stepId === 8) {
            const r = validateStep08(currentAns, activityData);
            isCorrect = r.score === r.maxScore && r.maxScore > 0;
        } else if (stepId === 9) isCorrect = validateStep09(currentAns, activityData).isCorrect;
        else if (stepId === 10) isCorrect = validateStep10(currentAns, activityData).isCorrect;
        else isCorrect = true;

        setStepStatus(prev => {
            const newStatus = { ...prev };
            const curr = prev[stepId];
            let nextCompleted = false;
            if (isCorrect) { newStatus[stepId] = { ...curr, completed: true, correct: true }; nextCompleted = true; }
            else { 
                const rem = curr.attempts - 1;
                if (rem <= 0) { newStatus[stepId] = { ...curr, completed: true, correct: false, attempts: 0 }; nextCompleted = true; }
                else newStatus[stepId] = { ...curr, attempts: rem, correct: false };
            }
            if (nextCompleted) {
                const nextIdx = activityData.steps.findIndex(s => s.id === stepId) + 1;
                if (nextIdx < activityData.steps.length) setCurrentStepIndex(nextIdx);
                else setCurrentStepIndex(activityData.steps.length);
            }
            return newStatus;
        });
    };

    const isAllComplete = activityData.steps.every(s => stepStatus[s.id]?.completed);

    // FIXED: Uses 'className=${...}' syntax for HTM
    return html`
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white border-b shadow-md p-4 flex justify-between items-center sticky top-0 z-50 no-print">
                <div><h1 className="font-bold text-xl text-blue-900">${activityData.config.businessType}</h1><p className="text-xs text-gray-500">${activityData.config.ownership}</p></div>
                <div className="text-right flex items-center gap-4">
                    ${isAllComplete && html`<button onClick=${handlePrint} className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 animate-pulse"><${Printer} size=${18}/> Print Report</button>`}
                    <div className="text-right">
                         <div className="text-xs font-bold text-gray-500 uppercase">Status</div>
                         <div className="font-semibold text-blue-700">${activityData.steps[currentStepIndex] ? 'Task #' + activityData.steps[currentStepIndex].id : 'Complete'}</div>
                    </div>
                    ${activityData.config.enableAutoSave && html`<button onClick=${clearSave} className="ml-2 text-red-400 hover:text-red-600" title="Reset Data"><${Trash2} size=${16}/></button>`}
                </div>
            </header>
            <div className="bg-white border-b overflow-x-auto shadow-sm sticky top-[73px] z-40 no-print">
                <div className="flex min-w-max px-4">
                    ${activityData.steps.map((s, idx) => html`
                        <div key=${s.id} 
                             className=${`p-3 flex items-center gap-2 text-sm border-b-2 transition-colors ${idx === currentStepIndex ? 'border-blue-600 text-blue-700 font-bold' : 'border-transparent text-gray-500'} ${stepStatus[s.id].completed ? 'text-green-600' : ''} cursor-pointer hover:bg-gray-50`} 
                             onClick=${() => setCurrentStepIndex(idx)}>
                            <div className=${`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${stepStatus[s.id].completed ? 'bg-green-100 border-green-300 text-green-700' : idx === currentStepIndex ? 'bg-blue-100 border-blue-300 text-blue-700' : 'bg-gray-50 border-gray-200'}`}>
                                ${stepStatus[s.id].completed ? html`<${Check} size=${14}/>` : s.id}
                            </div>
                            <span>${s.title}</span>
                        </div>
                    `)}
                </div>
            </div>
            <main className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                    ${activityData.steps.map((step, idx) => html`
                        <${TaskSection} 
                            key=${step.id} 
                            step=${step} 
                            activityData=${activityData} 
                            answers=${answers} 
                            stepStatus=${stepStatus} 
                            onValidate=${handleValidateStepById} 
                            updateAnswerFns=${{ updateNestedAnswer, updateTrialBalanceAnswer, updateAnswer }} 
                            isCurrentActiveTask=${idx === currentStepIndex} 
                            isPrevStepCompleted=${idx === 0 || stepStatus[activityData.steps[idx - 1].id]?.completed} 
                        />
                    `)}
                </div>
            </main>
            <footer className="bg-gray-100 border-t p-2 text-center text-sm text-gray-500 no-print">${APP_VERSION}</footer>
            <${ReportView} activityData=${activityData} answers=${answers} />
        </div>
    `;
};

// Default Export to be called by the LMS
export default function mount(containerId) {
    const root = createRoot(document.getElementById(containerId));
    root.render(React.createElement(StudentApp));
}
