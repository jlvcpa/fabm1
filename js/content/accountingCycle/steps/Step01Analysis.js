// --- Step01Analysis.js ---
// --- js/content/accountingCycle/steps/Step01Analysis.js ---

import React, { useMemo } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Check, X } from 'https://esm.sh/lucide-react@0.263.1';
import { EQUITY_CAUSES, getLetterGrade, getAccountType } from '../utils.js'; 

const html = htm.bind(React.createElement);

// --- 1. INTERNAL LOGIC ENGINE ---
// Calculates the correct "Increase/Decrease" based strictly on the SOLUTION 
// (the debits and credits arrays provided in the transaction data).
const deriveCorrectAnalysis = (transaction) => {
    let analysis = { assets: 'No Effect', liabilities: 'No Effect', equity: 'No Effect', cause: '' };
    
    // 1. Analyze DEBITS (The solution says these accounts were Debited)
    if (transaction.debits) {
        transaction.debits.forEach(d => {
            const type = getAccountType(d.account);
            
            if (type === 'Asset') {
                analysis.assets = 'Increase';
            } 
            else if (type === 'Liability') {
                analysis.liabilities = 'Decrease';
            } 
            else if (type === 'Equity') {
                analysis.equity = 'Decrease';
                // Specific check for Drawings vs Capital reduction
                if (d.account.includes('Drawings') || d.account.includes('Withdrawal')) {
                    analysis.cause = 'Increase in Drawings';
                } else {
                    analysis.cause = 'Decrease in Capital';
                }
            } 
            else if (type === 'Expense' || type === 'Cost of Goods Sold') {
                // Debit to Expense = Increase in Expense = Decrease in Equity
                analysis.equity = 'Decrease';
                analysis.cause = 'Increase in Expense';
            } 
            else if (type === 'Revenue') {
                // Debit to Revenue (e.g. Sales Returns) = Decrease in Income = Decrease in Equity
                analysis.equity = 'Decrease';
                analysis.cause = 'Decrease in Income';
            }
        });
    }

    // 2. Analyze CREDITS (The solution says these accounts were Credited)
    if (transaction.credits) {
        transaction.credits.forEach(c => {
            const type = getAccountType(c.account);
            
            if (type === 'Asset') {
                // If we previously said 'Increase', now it's 'No Effect' (Increase + Decrease), else 'Decrease'
                analysis.assets = (analysis.assets === 'Increase') ? 'No Effect' : 'Decrease';
            } 
            else if (type === 'Liability') {
                analysis.liabilities = (analysis.liabilities === 'Decrease') ? 'No Effect' : 'Increase';
            } 
            else if (type === 'Equity') {
                analysis.equity = (analysis.equity === 'Decrease') ? 'No Effect' : 'Increase';
                if (c.account.includes('Capital')) {
                    analysis.cause = 'Increase in Capital';
                }
            } 
            else if (type === 'Revenue') {
                // Credit to Revenue (e.g. Sales) = Increase in Income = Increase in Equity
                analysis.equity = (analysis.equity === 'Decrease') ? 'No Effect' : 'Increase';
                analysis.cause = 'Increase in Income';
            } 
            else if (type === 'Expense' || type === 'Cost of Goods Sold') {
                // Credit to Expense (e.g. Purchase Returns) = Decrease in Expense = Increase in Equity
                analysis.equity = (analysis.equity === 'Decrease') ? 'No Effect' : 'Increase';
                analysis.cause = 'Decrease in Expense';
            }
        });
    }

    return analysis;
};

// --- 2. VALIDATION HELPER ---
const checkRow = (transaction, answer = {}) => {
    // Calculate the correct answer based on the transaction's solution data
    const correctAnswer = deriveCorrectAnalysis(transaction);

    const isAssetCorrect = answer.A === correctAnswer.assets;
    const isLiabCorrect = answer.L === correctAnswer.liabilities;
    const isEquityCorrect = answer.E === correctAnswer.equity;
    
    // Loose matching for cause
    const targetCause = correctAnswer.cause || '';
    const userCause = answer.Cause || '';
    const isCauseCorrect = targetCause === userCause;

    let score = 0;
    if (isAssetCorrect) score++;
    if (isLiabCorrect) score++;
    if (isEquityCorrect) score++;
    if (isCauseCorrect) score++;

    return {
        isAssetCorrect,
        isLiabCorrect,
        isEquityCorrect,
        isCauseCorrect,
        isRowFullyCorrect: isAssetCorrect && isLiabCorrect && isEquityCorrect && isCauseCorrect,
        score,
        maxScore: 4
    };
};

// --- 3. EXPORTED VALIDATOR (Used by Parent) ---
export const validateStep01 = (transactions, allAnswers) => {
    let totalScore = 0;
    let totalMax = 0;
    let perfectRows = 0;

    // Safety check if transactions is undefined or null
    const safeTransactions = Array.isArray(transactions) ? transactions : [];

    safeTransactions.forEach(t => {
        const { score, maxScore, isRowFullyCorrect } = checkRow(t, allAnswers[t.id]);
        totalScore += score;
        totalMax += maxScore;
        if (isRowFullyCorrect) perfectRows++;
    });

    return {
        isCorrect: safeTransactions.length > 0 && perfectRows === safeTransactions.length,
        score: totalScore,
        maxScore: totalMax,
        letterGrade: getLetterGrade(totalScore, totalMax)
    };
};

// --- INTERNAL COMPONENTS ---
const StatusIcon = ({ correct, show }) => {
    if (!show) return null;
    return correct 
        ? html`<${Check} size=${14} className="text-green-600 inline ml-1" />` 
        : html`<${X} size=${14} className="text-red-600 inline ml-1" />`;
};

// --- MAIN COMPONENT ---
// Updated to support dual-mode props (Practice vs Exam)
export default function Step01Analysis({ 
    transactions: propTransactions, // Option A: Passed directly (Practice)
    activityData,                   // Option B: Wrapped in activityData (Exam)
    data, 
    onChange, 
    showFeedback, 
    isReadOnly 
}) {
    // Smart Data Selection: Use propTransactions if available, otherwise fallback to activityData
    const transactions = useMemo(() => {
        return propTransactions || activityData?.transactions || [];
    }, [propTransactions, activityData]);

    if (!transactions || transactions.length === 0) return html`<div className="p-4 bg-red-50 text-red-600 rounded border border-red-200">No transactions generated.</div>`;
    
    // Calculate result for display using the selected transactions
    const result = validateStep01(transactions, data);

    // REMOVE 'false &&' IN  ${false && showFeedback && html` TO UNHIDE THE BANNER
    return html`
        <div className="flex flex-col gap-4">
            ${false && showFeedback && html`
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 flex justify-between items-center shadow-sm">
                <span className="font-bold">Validation Results:</span>
                <span className="font-mono font-bold text-lg">Score: ${result.score} of ${result.maxScore} - (${result.letterGrade})</span>
            </div>
          `}


            <div className="overflow-x-auto min-h-[200px]">
                <table className="w-full text-sm border-collapse border min-w-[900px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Date</th>
                            <th className="border p-2 w-1/3">Transaction</th>
                            <th className="border p-2">Assets</th>
                            <th className="border p-2">Liabilities</th>
                            <th className="border p-2">Equity</th>
                            <th className="border p-2 w-1/5">Cause</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${transactions.map((t) => {
                            const ans = data[t.id] || {};
                            const status = checkRow(t, ans);

                            return html`
                                <tr key=${t.id} className="hover:bg-gray-50">
                                    <td className="border p-2 text-center whitespace-nowrap">${t.date}</td>
                                    <td className="border p-2">${t.description}</td>
                                    
                                    <td className="border p-2">
                                        <div className="flex items-center">
                                            <select className=${`w-full bg-white border rounded p-1 ${showFeedback && !status.isAssetCorrect ? 'border-red-300 bg-red-50' : ''}`} 
                                                value=${ans.A || '-'} 
                                                onChange=${(e) => onChange(t.id, 'A', e.target.value)} 
                                                disabled=${isReadOnly}>
                                                <option>-</option><option>Increase</option><option>Decrease</option><option>No Effect</option>
                                            </select>
                                            <${StatusIcon} show=${showFeedback} correct=${status.isAssetCorrect} />
                                        </div>
                                    </td>

                                    <td className="border p-2">
                                        <div className="flex items-center">
                                            <select className=${`w-full bg-white border rounded p-1 ${showFeedback && !status.isLiabCorrect ? 'border-red-300 bg-red-50' : ''}`} 
                                                value=${ans.L || '-'} 
                                                onChange=${(e) => onChange(t.id, 'L', e.target.value)} 
                                                disabled=${isReadOnly}>
                                                <option>-</option><option>Increase</option><option>Decrease</option><option>No Effect</option>
                                            </select>
                                            <${StatusIcon} show=${showFeedback} correct=${status.isLiabCorrect} />
                                        </div>
                                    </td>

                                    <td className="border p-2">
                                        <div className="flex items-center">
                                            <select className=${`w-full bg-white border rounded p-1 ${showFeedback && !status.isEquityCorrect ? 'border-red-300 bg-red-50' : ''}`} 
                                                value=${ans.E || '-'} 
                                                onChange=${(e) => onChange(t.id, 'E', e.target.value)} 
                                                disabled=${isReadOnly}>
                                                <option>-</option><option>Increase</option><option>Decrease</option><option>No Effect</option>
                                            </select>
                                            <${StatusIcon} show=${showFeedback} correct=${status.isEquityCorrect} />
                                        </div>
                                    </td>

                                    <td className="border p-2">
                                        <div className="flex items-center">
                                            <select className=${`w-full bg-white border rounded p-1 ${showFeedback && !status.isCauseCorrect ? 'border-red-300 bg-red-50' : ''}`} 
                                                value=${ans.Cause || ''} 
                                                onChange=${(e) => onChange(t.id, 'Cause', e.target.value)} 
                                                disabled=${isReadOnly}>
                                                ${EQUITY_CAUSES.map(c => html`<option key=${c} value=${c}>${c || '-'}</option>`)}
                                            </select>
                                            <${StatusIcon} show=${showFeedback} correct=${status.isCauseCorrect} />
                                        </div>
                                    </td>
                                </tr>
                            `;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
