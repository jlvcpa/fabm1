// --- js/content/accountingCycle/steps.js ---

import React from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Check, Printer } from 'https://esm.sh/lucide-react@0.263.1';
import { ActivityHelper } from './utils.js';

// --- EXPLICIT IMPORTS ---
import Step01Analysis from './steps/Step01Analysis.js';
import Step02Journalizing from './steps/Step02Journalizing.js';
import Step03Posting from './steps/Step03Posting.js';
import Step04TrialBalance from './steps/Step04TrialBalance.js';
import Step05Worksheet from './steps/Step05Worksheet.js';
import Step06FinancialStatements from './steps/Step06FinancialStatements.js';
import Step07AdjustingEntries from './steps/Step07AdjustingEntries.js';
import Step08ClosingEntries from './steps/Step08ClosingEntries.js';
import Step09PostClosingTB from './steps/Step09PostClosingTB.js';
import Step10ReversingEntries from './steps/Step10ReversingEntries.js';

const html = htm.bind(React.createElement);

const STEP_COMPONENTS = {
    1: Step01Analysis,
    2: Step02Journalizing,
    3: Step03Posting,
    4: Step04TrialBalance,
    5: Step05Worksheet,
    6: Step06FinancialStatements,
    7: Step07AdjustingEntries,
    8: Step08ClosingEntries,
    9: Step09PostClosingTB,
    10: Step10ReversingEntries
};

// --- js/content/accountingCycle/steps.js ---

export const TaskSection = ({ step, activityData, answers, stepStatus, updateAnswerFns, onValidate, isCurrentActiveTask, isPerformanceTask }) => {
    // 1. FORCE ID TO NUMBER (Critical Fix)
    // Firestore often stores keys as strings, or your config might use strings. 
    // We cast to Number to ensure consistency with your component logic.
    const stepId = Number(step.id);
    
    const StepComponent = step.component || STEP_COMPONENTS[stepId];

    if (!StepComponent) {
        return html`<div className="p-4 text-red-500">Error: Component for Step ${stepId} not found.</div>`;
    }
    
    // 2. SECURELY GET STATUS
    // We check for the status using the number ID. 
    // We also default to empty object to prevent crashes.
    const currentStatus = stepStatus[stepId] || {};
    
    // 3. DEFINE THE LOCK STATE
    // This boolean is what locks the inputs.
    const isLocked = currentStatus.completed === true;

    // --- PERFORMANCE TASK MODE ---
    if (isPerformanceTask) {
        return html`
            <div className="h-full overflow-y-auto p-4 custom-scrollbar">
                ${/* Instructions & Rubric omitted for brevity ... */}
                <div className="bg-white rounded shadow-sm border border-gray-200">
                    <${StepComponent} 
                        activityData=${activityData}
                        transactions=${activityData?.transactions || []} 
                        data=${answers[stepId] || {}}
                        onChange=${(id, key, val) => {
                            // ... (Your existing onChange logic)
                             if (stepId === 1) updateAnswerFns.updateNestedAnswer(1, id.toString(), key, val);
                             else if (stepId === 2 || stepId === 3) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: key });
                             else if (stepId === 4 || stepId === 9) updateAnswerFns.updateTrialBalanceAnswer(stepId, id, key, val);
                             else if (stepId === 5 || stepId === 6) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: val });
                             else if (stepId === 7 || stepId === 10) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: key });
                             else updateAnswerFns.updateAnswer(stepId, id);
                        }}
                        // 4. PASS THE LOCK HERE
                        showFeedback=${isLocked}
                        isReadOnly=${isLocked}
                    />
                </div>
            </div>
        `;
    }

    // --- STANDARD MODE ---
    const isExpanded = isCurrentActiveTask; 
    
    return html`
        <div id=${`task-${stepId}`} className="mb-8 border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer">
                <h3 className="font-bold text-lg text-gray-800">Task #${stepId}: Step ${stepId.toString().padStart(2,'0')} - ${step.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Attempts: ${currentStatus.attempts || 0}</span>
                    ${/* Disable Validate button if locked */''}
                    ${!isLocked && html`
                        <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm font-bold flex items-center gap-2" onClick=${onValidate(stepId)}>
                             <${Check} size=${16}/> Validate
                        </button>
                    `}
                    <button className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300">
                        <${Printer} size=${18}/>
                    </button>
                </div>
            </div>
            ${isExpanded && html`
                <div className="p-4">
                    <div className="mb-4 p-3 bg-blue-50 text-blue-900 text-sm rounded border border-blue-100" dangerouslySetInnerHTML=${{ __html: ActivityHelper.getInstructionsHTML(stepId, step.title) }}></div>
                    <${StepComponent} 
                        activityData=${activityData}
                        transactions=${activityData?.transactions || []}
                        data=${answers[stepId] || {}}
                        onChange=${(id, key, val) => {
                             if (stepId === 1) updateAnswerFns.updateNestedAnswer(1, id.toString(), key, val);
                             else if (stepId === 2 || stepId === 3) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: key });
                             else if (stepId === 4 || stepId === 9) updateAnswerFns.updateTrialBalanceAnswer(stepId, id, key, val);
                             else if (stepId === 5 || stepId === 6) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: val });
                             else if (stepId === 7 || stepId === 10) updateAnswerFns.updateAnswer(stepId, { ...answers[stepId], [id]: key });
                             else updateAnswerFns.updateAnswer(stepId, id);
                        }}
                        // 4. PASS THE LOCK HERE TOO
                        showFeedback=${isLocked}
                        isReadOnly=${isLocked}
                    />
                    <div className="mt-8"><div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(stepId, step.title) }}></div></div>
                </div>
            `}
        </div>
    `;
};
