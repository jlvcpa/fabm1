// --- js/content/accountingCycle/steps.js ---

import React from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Check, Printer, Lock, Clock } from 'https://esm.sh/lucide-react@0.263.1';
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

export const TaskSection = ({ step, activityData, answers, stepStatus, updateAnswerFns, onValidate, isCurrentActiveTask, isPerformanceTask, isLockedBySequence, isReadOnly }) => {
    // FIX: Force ID to be a number to ensure consistent lookup in objects
    const stepId = Number(step.id);
    
    const StepComponent = step.component || STEP_COMPONENTS[stepId];

    if (!StepComponent) {
        return html`<div className="p-4 text-red-500">Error: Component for Step ${stepId} not found.</div>`;
    }
    
    // --- SECURITY: SEQUENTIAL LOCK SCREEN ---
    if (isLockedBySequence) {
        return html`
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] p-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-gray-500">
                <${Lock} size=${48} className="mb-4 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Step Locked</h3>
                <p className="text-center max-w-md">
                    To access <strong>${step.title}</strong>, you must first complete and submit <strong>Step ${stepId - 1}</strong>.
                </p>
                <div className="mt-6 text-sm bg-yellow-50 text-yellow-700 px-4 py-2 rounded border border-yellow-200">
                    Submit the previous task to unlock this content.
                </div>
            </div>
        `;
    }

    // FIX: Use stepId for status lookup
    const currentStatus = stepStatus[stepId] || {};
    const isCompleted = currentStatus.completed === true;

    // --- SECURITY: EARLY START WARNING ---
    // If it is ReadOnly (due to time) but NOT completed (submitted), show warning
    const showEarlyWarning = isReadOnly && !isCompleted;

    // --- PERFORMANCE TASK MODE (Single Scrollable Flow) ---
    if (isPerformanceTask) {
        return html`
            <div className="h-full overflow-y-auto p-4 custom-scrollbar">
                ${showEarlyWarning && html`
                    <div className="mb-4 p-4 bg-orange-50 border-l-4 border-orange-400 text-orange-700 flex items-center shadow-sm">
                        <${Clock} size=${20} className="mr-3"/>
                        <div>
                            <p class="font-bold">Task Not Started</p>
                            <p class="text-sm">You cannot enter answers yet. Please check the start time.</p>
                        </div>
                    </div>
                `}

                ${/* 1. INSTRUCTIONS - FIXED: Use step.description instead of calling ActivityHelper again */''}
                <div className="sticky top-0 z-30 mb-4 p-4 bg-blue-50 text-blue-900 text-sm rounded-lg border border-blue-100 shadow-sm"                     dangerouslySetInnerHTML=${{ __html: step.description }}>
                </div>

                ${/* 2. RUBRIC */''}
                <div className="mb-6 border rounded-lg overflow-hidden shadow-sm bg-white">
                     <div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(stepId, step.title) }}></div>
                </div>

                ${/* 3. WORKSPACE */''}
                ${/* ADDED: mb-12 to ensure bottom content isn't cut off when scrolling */''}
                <div className="bg-white rounded shadow-sm border border-gray-200 relative mb-48">
                    ${showEarlyWarning && html`<div className="absolute inset-0 bg-gray-50 bg-opacity-30 z-10 pointer-events-none"></div>`}

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
                        showFeedback=${isCompleted}
                        isReadOnly=${isReadOnly}
                    />
                </div>
            </div>
        `;
    }

    // --- STANDARD MODE (Legacy) ---
    const isExpanded = isCurrentActiveTask; 
    
    return html`
        <div id=${`task-${stepId}`} className="mb-8 border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer">
                <h3 className="font-bold text-lg text-gray-800">Task #${stepId}: Step ${stepId.toString().padStart(2,'0')} - ${step.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Attempts: ${currentStatus.attempts || 0}</span>
                    ${!isReadOnly && html`
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
                <div className="p-4 relative">
                    ${showEarlyWarning && html`<div className="absolute inset-0 bg-gray-50 bg-opacity-50 z-20 flex items-center justify-center font-bold text-gray-500">Task Locked</div>`}
                    
                    ${/* FIXED: Use step.description here as well */''}
                    <div className="mb-4 p-3 bg-blue-50 text-blue-900 text-sm rounded border border-blue-100" 
                         dangerouslySetInnerHTML=${{ __html: step.description }}>
                    </div>
                    
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
                        showFeedback=${isCompleted}
                        isReadOnly=${isReadOnly}
                    />
                    <div className="mt-8"><div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(stepId, step.title) }}></div></div>
                </div>
            `}
        </div>
    `;
};
