// --- js/content/accountingCycle/steps.js ---

import React from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Book, Check, X, Printer, ChevronDown, ChevronRight, AlertCircle } from 'https://esm.sh/lucide-react@0.263.1';
import { ActivityHelper } from '../utils.js';

const html = htm.bind(React.createElement);

export const TaskSection = ({ step, activityData, answers, stepStatus, updateAnswerFns, onValidate, isCurrentActiveTask, isPrevStepCompleted, isPerformanceTask }) => {
    const StepComponent = step.component || require(`./steps/Step${step.id.toString().padStart(2, '0')}${step.title.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')}.js`).default;
    
    // In Performance Task mode, we hide the internal instructions/rubrics because the parent handles them
    if (isPerformanceTask) {
        return html`
            <div className="h-full flex flex-col">
                <${StepComponent} 
                    activityData=${activityData}
                    data=${answers[step.id] || {}}
                    onChange=${(id, key, val) => {
                        // Adapter for different step signatures
                        if (step.id === 1) updateAnswerFns.updateNestedAnswer(1, id.toString(), key, val);
                        else if (step.id === 4 || step.id === 9) updateAnswerFns.updateTrialBalanceAnswer(step.id, id, key, val);
                        else if (step.id === 5 || step.id === 6) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: val }); 
                        else if (step.id === 7 || step.id === 10) updateAnswerFns.updateAnswer(step.id, { ...answers[step.id], [id]: key }); // Special handler for journal-like
                        else updateAnswerFns.updateAnswer(step.id, id); // Default (Step 2, 8)
                    }}
                    showFeedback=${stepStatus[step.id]?.completed || false}
                    isReadOnly=${stepStatus[step.id]?.completed || false}
                />
            </div>
        `;
    }

    // --- STANDARD MODE (For non-performance tasks, keeps original layout) ---
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

                    <div className="mt-8">
                         <div dangerouslySetInnerHTML=${{ __html: ActivityHelper.getRubricHTML(step.id, step.title) }}></div>
                    </div>
                </div>
            `}
        </div>
    `;
};
