// --- js/content/accountingCycle/steps.js ---

import React from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
// ADD: Lock and Clock to imports
import { Check, Printer, Lock, Clock } from 'https://esm.sh/lucide-react@0.263.1';
import { ActivityHelper } from './utils.js';

// ... (Imports and STEP_COMPONENTS remain same) ...

export const TaskSection = ({ step, activityData, answers, stepStatus, updateAnswerFns, onValidate, isCurrentActiveTask, isPerformanceTask, isLockedBySequence, isReadOnly }) => {
    // Ensure step.id is a number
    const stepId = Number(step.id);
    const StepComponent = step.component || STEP_COMPONENTS[stepId];

    if (!StepComponent) {
        return html`<div className="p-4 text-red-500">Error: Component for Step ${stepId} not found.</div>`;
    }
    
    // --- NEW: SEQUENTIAL LOCK UI ---
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

    const currentStatus = stepStatus[stepId] || {};
    // Note: We use the isReadOnly passed from parent (which now includes isEarly logic)
    // But we still check status for the visual feedback flag
    const isCompleted = currentStatus.completed === true;

    // --- NEW: EARLY START WARNING (Optional Banner) ---
    // If it is ReadOnly but NOT completed, it means it is Early (or manually locked)
    const showEarlyWarning = isReadOnly && !isCompleted;

    // --- PERFORMANCE TASK MODE ---
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

                ${/* 1. INSTRUCTIONS */''}
                <div className="mb-4 p-4 bg-blue-50 text-blue-900 text-sm rounded-lg border border-blue-100 shadow-sm" 
                     dangerouslySetInnerHTML=${{ __html: ActivityHelper.getInstructionsHTML(stepId, step.title) }}>
                </div>

                ${/* 2. RUBRIC */''}
                <div className="mb-6 border rounded-lg overflow-hidden shadow-sm bg-white">
                     <div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(stepId, step.title) }}></div>
                </div>

                ${/* 3. WORKSPACE */''}
                <div className="bg-white rounded shadow-sm border border-gray-200 relative">
                    ${/* Overlay for ReadOnly mode if you want to make it look "disabled" */ }
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
    // ... (Implement similar check for isLockedBySequence here if needed) ...
    return html`...`; // Keeping this brief as Performance Mode seems to be the focus
};
