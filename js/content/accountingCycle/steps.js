// --- js/content/accountingCycle/steps.js ---

import React from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Check, Printer } from 'https://esm.sh/lucide-react@0.263.1';
import { ActivityHelper } from '../utils.js';

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

export const TaskSection = ({ step, activityData, answers, stepStatus, updateAnswerFns, onValidate, isCurrentActiveTask, isPerformanceTask }) => {
    const StepComponent = step.component || STEP_COMPONENTS[step.id];

    if (!StepComponent) {
        return html`<div className="p-4 text-red-500">Error: Component for Step ${step.id} not found.</div>`;
    }
    
    // --- PERFORMANCE TASK MODE (Single Scrollable Flow) ---
    if (isPerformanceTask) {
        return html`
            <div className="h-full overflow-y-auto p-4 custom-scrollbar">
                ${/* 1. INSTRUCTIONS */''}
                <div className="mb-4 p-4 bg-blue-50 text-blue-900 text-sm rounded-lg border border-blue-100 shadow-sm" 
                     dangerouslySetInnerHTML=${{ __html: ActivityHelper.getInstructionsHTML(step.id, step.title) }}>
                </div>

                ${/* 2. RUBRIC */''}
                <div className="mb-6 border rounded-lg overflow-hidden shadow-sm bg-white">
                     <div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(step.id, step.title) }}></div>
                </div>

                ${/* 3. WORKSPACE (Flows naturally in the scroll container) */''}
                <div className="bg-white rounded shadow-sm border border-gray-200">
                    <${StepComponent} 
                        activityData=${activityData}
                        transactions=${activityData?.transactions || []} 
                        data=${answers[step.id] || {}}
                        onChange=${(id, key, val) => {
                            if (step.id === 1) updateAnswerFns.updateNestedAnswer(1, id.toString(), key, val);
                            else if (step.id === 4 || step.id === 9) updateAnswerFns.updateTrialBalanceAnswer(step.id, id, key, val);
                            else if (step.id === 5 || step.id === 6) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: val }); 
                            else if (step.id === 7 || step.id === 10) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: key }); 
                            else updateAnswerFns.updateAnswer(step.id, id); 
                        }}
                        showFeedback=${stepStatus[step.id]?.completed || false}
                        isReadOnly=${stepStatus[step.id]?.completed || false}
                    />
                </div>
            </div>
        `;
    }

    // --- STANDARD MODE (Legacy) ---
    const isExpanded = isCurrentActiveTask; 
    const status = stepStatus[step.id] || {};
    
    return html`
        <div id=${`task-${step.id}`} className="mb-8 border rounded-lg shadow-sm bg-white overflow-hidden">
            <div className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer">
                <h3 className="font-bold text-lg text-gray-800">Task #${step.id}: Step ${step.id.toString().padStart(2,'0')} - ${step.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Attempts: ${status.attempts || 0}</span>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm font-bold flex items-center gap-2" onClick=${onValidate(step.id)}>
                         <${Check} size=${16}/> Validate
                    </button>
                    <button className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300">
                        <${Printer} size=${18}/>
                    </button>
                </div>
            </div>
            ${isExpanded && html`
                <div className="p-4">
                    <div className="mb-4 p-3 bg-blue-50 text-blue-900 text-sm rounded border border-blue-100" dangerouslySetInnerHTML=${{ __html: ActivityHelper.getInstructionsHTML(step.id, step.title) }}></div>
                    <${StepComponent} 
                        activityData=${activityData}
                        transactions=${activityData?.transactions || []}
                        data=${answers[step.id] || {}}
                        onChange=${(id, key, val) => {
                             if (step.id === 1) updateAnswerFns.updateNestedAnswer(1, id.toString(), key, val);
                             else if (step.id === 4 || step.id === 9) updateAnswerFns.updateTrialBalanceAnswer(step.id, id, key, val);
                             else if (step.id === 5 || step.id === 6) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: val });
                             else if (step.id === 7 || step.id === 10) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: key });
                             else updateAnswerFns.updateAnswer(step.id, id);
                        }}
                        showFeedback=${status.completed}
                        isReadOnly=${status.completed}
                    />
                    <div className="mt-8"><div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(step.id, step.title) }}></div></div>
                </div>
            `}
        </div>
    `;
};
