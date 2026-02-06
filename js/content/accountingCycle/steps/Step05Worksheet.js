// --- js/content/accountingCycle/steps/Step05Worksheet.js ---

import React, { useState, useEffect, useMemo } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Table, Trash2, Plus, List, ChevronDown, ChevronRight, Check, X, AlertCircle } from 'https://esm.sh/lucide-react@0.263.1';
import { sortAccounts, getAccountType, getLetterGrade } from '../utils.js';

const html = htm.bind(React.createElement);

// --- DRY VALIDATION LOGIC ---

export const validateStep05 = (ledgerData, adjustments, userAnswers) => {
    // 1. SAFETY CHECK: Ensure ledgerData exists to prevent crash
    if (!ledgerData) {
        return { isCorrect: false, score: 0, maxScore: 0, letterGrade: 'IR', validationResults: { rows: {}, footers: { totals: {}, net: {}, final: {} } }, expectedMap: {} };
    }

    const rows = userAnswers.rows || [];
    
    // Safety check for footers
    const rawFooters = userAnswers.footers || {};
    const footers = { 
        totals: rawFooters.totals || {}, 
        net: rawFooters.net || {}, 
        final: rawFooters.final || {} 
    };
    
    // 2. Calculate Expected Data
    const mergedAccounts = new Set(Object.keys(ledgerData));
    
    // Validate adjustments array exists before iterating
    if (Array.isArray(adjustments)) {
        adjustments.forEach(adj => { 
            // Support legacy format (drAcc/crAcc)
            if (adj.drAcc) mergedAccounts.add(adj.drAcc); 
            if (adj.crAcc) mergedAccounts.add(adj.crAcc); 
            
            // Support new format (solution array)
            if (Array.isArray(adj.solution)) {
                adj.solution.forEach(line => {
                    if (line.account && !line.isExplanation && line.account !== "No Entry") {
                        mergedAccounts.add(line.account);
                    }
                });
            }
        });
    }

    // Filter out undefined/null/empty accounts to prevent crashes
    const sortedAccounts = sortAccounts(Array.from(mergedAccounts).filter(acc => acc));

    const expectedMap = {};
    const columnTotals = { tbDr:0, tbCr:0, adjDr:0, adjCr:0, atbDr:0, atbCr:0, isDr:0, isCr:0, bsDr:0, bsCr:0 };

    sortedAccounts.forEach(acc => {
        if (!acc) return; // Skip invalid accounts

        // TB
        const lBal = (ledgerData[acc]?.debit || 0) - (ledgerData[acc]?.credit || 0);
        const tbDr = lBal > 0 ? lBal : 0;
        const tbCr = lBal < 0 ? Math.abs(lBal) : 0;
        
        // Adj
        let aDr = 0; let aCr = 0;
        if (Array.isArray(adjustments)) {
            adjustments.forEach(a => { 
                // Check new solution format
                if (Array.isArray(a.solution)) {
                    a.solution.forEach(line => {
                        if (line.account === acc) {
                            if (line.debit) aDr += Number(line.debit);
                            if (line.credit) aCr += Number(line.credit);
                        }
                    });
                } 
                // Fallback to old format
                else {
                    const amt = Number(a.amount) || 0;
                    if(a.drAcc === acc) aDr += amt; 
                    if(a.crAcc === acc) aCr += amt; 
                }
            });
        }
        
        // ATB
        const net = (tbDr - tbCr) + (aDr - aCr);
        const atbDr = net > 0 ? net : 0;
        const atbCr = net < 0 ? Math.abs(net) : 0;

        // IS / BS
        let type = 'Unknown';
        try {
            type = getAccountType(acc); // Safe call
        } catch (e) {
            console.warn("Account type error:", acc);
        }

        const isIS = ['Revenue', 'Expense', 'Cost of Goods Sold', 'Contra Revenue'].includes(type);
        
        const isDr = isIS ? atbDr : 0;
        const isCr = isIS ? atbCr : 0;
        const bsDr = !isIS ? atbDr : 0;
        const bsCr = !isIS ? atbCr : 0;

        expectedMap[acc] = { tbDr, tbCr, adjDr: aDr, adjCr: aCr, atbDr, atbCr, isDr, isCr, bsDr, bsCr };

        // Add to totals
        columnTotals.tbDr += tbDr; columnTotals.tbCr += tbCr;
        columnTotals.adjDr += aDr; columnTotals.adjCr += aCr;
        columnTotals.atbDr += atbDr; columnTotals.atbCr += atbCr;
        columnTotals.isDr += isDr; columnTotals.isCr += isCr;
        columnTotals.bsDr += bsDr; columnTotals.bsCr += bsCr;
    });

    // Calculate Net Income
    const netIncome = columnTotals.isCr - columnTotals.isDr;
    const netRow = {
        isDr: netIncome > 0 ? netIncome : 0, 
        isCr: netIncome < 0 ? Math.abs(netIncome) : 0,
        bsDr: netIncome < 0 ? Math.abs(netIncome) : 0,
        bsCr: netIncome > 0 ? netIncome : 0
    };

    // Calculate Final Totals
    const finalRow = {
        tbDr: columnTotals.tbDr, tbCr: columnTotals.tbCr,
        adjDr: columnTotals.adjDr, adjCr: columnTotals.adjCr,
        atbDr: columnTotals.atbDr, atbCr: columnTotals.atbCr,
        isDr: columnTotals.isDr + netRow.isDr,
        isCr: columnTotals.isCr + netRow.isCr,
        bsDr: columnTotals.bsDr + netRow.bsDr,
        bsCr: columnTotals.bsCr + netRow.bsCr
    };

    // 3. Score Calculation
    let score = 0;
    let maxScore = 0;
    const validationResults = { rows: {}, footers: { totals: {}, net: {}, final: {} } };

    const checkVal = (userVal, expectedVal) => {
        maxScore++;
        const u = Number(userVal || 0);
        const e = Math.round(Number(expectedVal || 0));
        const isCorrect = Math.abs(u - e) <= 1;
        if (isCorrect) score++;
        return isCorrect;
    };

    // Score Rows
    rows.forEach(row => {
        const acc = row.account?.trim();
        const rowRes = {};
        if (acc && expectedMap[acc]) {
            ['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].forEach(col => {
                rowRes[col] = checkVal(row[col], expectedMap[acc][col]);
            });
        } else if (acc) {
            ['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].forEach(col => {
                if (!row[col] || row[col] == 0) {
                     if (row[col] && row[col] != 0) { maxScore++; rowRes[col] = false; }
                } else {
                    maxScore++;
                    rowRes[col] = false;
                }
            });
        }
        validationResults.rows[row.id] = rowRes;
    });
    
    const userAccounts = new Set(rows.map(r => r.account?.trim()).filter(a => a));
    sortedAccounts.forEach(acc => {
        if (!userAccounts.has(acc)) maxScore += 10;
    });

    // Score Footers
    ['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].forEach(col => {
        validationResults.footers.totals[col] = checkVal(footers.totals[col], columnTotals[col]);
        validationResults.footers.final[col] = checkVal(footers.final[col], finalRow[col]);
    });

    ['isDr', 'isCr', 'bsDr', 'bsCr'].forEach(col => {
        validationResults.footers.net[col] = checkVal(footers.net[col], netRow[col]);
    });

    const isCorrect = score === maxScore && maxScore > 0;
    const letterGrade = getLetterGrade(score, maxScore);

    return { isCorrect, score, maxScore, letterGrade, validationResults, expectedMap };
};


// --- MAIN COMPONENT ---

export default function Step05Worksheet({ ledgerData: propLedger, adjustments: propAdjustments, activityData, data, onChange, showFeedback, isReadOnly }) {
    
    const ledgerData = propLedger || activityData?.ledger || {};
    const adjustments = propAdjustments || activityData?.adjustments || [];

    const initialRows = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({ id: i, account: '', tbDr: '', tbCr: '', adjDr: '', adjCr: '', atbDr: '', atbCr: '', isDr: '', isCr: '', bsDr: '', bsCr: '' })), []);
    const rows = data.rows || initialRows;

    const [localFooters, setLocalFooters] = useState({ totals: {}, net: {}, final: {} });

    useEffect(() => {
        if (data.footers) {
            setLocalFooters(prev => ({
                totals: { ...prev.totals, ...data.footers.totals },
                net: { ...prev.net, ...data.footers.net },
                final: { ...prev.final, ...data.footers.final }
            }));
        }
    }, [data.footers]);

    const validation = useMemo(() => {
        return validateStep05(ledgerData, adjustments, { rows, footers: localFooters });
    }, [ledgerData, adjustments, rows, localFooters]);

    const updateRow = (idx, field, val) => {
        const newRows = [...rows];
        newRows[idx] = { ...newRows[idx], [field]: val };
        onChange('rows', newRows);
    };

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 0;
        onChange('rows', [...rows, { id: newId, account: '', tbDr: '', tbCr: '', adjDr: '', adjCr: '', atbDr: '', atbCr: '', isDr: '', isCr: '', bsDr: '', bsCr: '' }]);
    };

    const deleteRow = (idx) => {
        const newRows = rows.filter((_, i) => i !== idx);
        onChange('rows', newRows);
    };

    const updateFooter = (section, field, val) => {
        const newSection = { ...localFooters[section], [field]: val };
        const newFooters = { ...localFooters, [section]: newSection };
        setLocalFooters(newFooters);
        onChange('footers', newFooters);
    };

    const renderInput = (val, handler, validResult, disabled = false, placeholder = "") => {
        let bgClass = "bg-transparent hover:bg-gray-50 focus:bg-white";
        let icon = null;

        if (showFeedback && validResult !== undefined) {
            if (validResult) {
                bgClass = "bg-green-50 text-green-900 font-medium";
                icon = html`<span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-green-600 pointer-events-none"><${Check} size=${12}/></span>`;
            } else {
                bgClass = "bg-red-50 text-red-900 font-medium";
                icon = html`<span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-red-500 pointer-events-none"><${X} size=${12}/></span>`;
            }
        }

        return html`
            <div className="relative w-full h-full">
                ${icon}
                <input type="number" 
                    className=${`w-full h-full text-right p-1 pl-4 text-xs outline-none border border-transparent focus:border-blue-500 ${bgClass}`} 
                    value=${val || ''} 
                    onChange=${handler} 
                    disabled=${disabled || isReadOnly}
                    placeholder=${placeholder}
                />
            </div>
        `;
    };

    const renderAccountInput = (row, idx) => {
        const isValid = validation.expectedMap && validation.expectedMap[row.account];
        let bgClass = "bg-white";
        if (showFeedback) {
            bgClass = isValid ? "text-green-700 font-bold" : (row.account ? "text-red-600 bg-red-50" : "");
        }
        return html`
            <input type="text" 
                className=${`w-full h-full p-1 text-xs outline-none ${bgClass}`} 
                value=${row.account} 
                onChange=${(e) => updateRow(idx, 'account', e.target.value)} 
                disabled=${isReadOnly} 
                placeholder="Account Title"
            />
        `;
    };

    const renderBanner = () => {
        if (!showFeedback && !isReadOnly) return null;
        const result = validation;

        return html`
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 mb-4 flex justify-between items-center shadow-sm w-full flex-shrink-0">
                <span className="font-bold flex items-center gap-2"><${AlertCircle} size=${18}/> Validation Results:</span>
                <span className="font-mono font-bold text-lg">Score: ${result.score || 0} of ${result.maxScore || 0} - (${result.letterGrade || 'IR'})</span>
            </div>
        `;
    };

    return html`
        <div className="w-full">
            
            ${renderBanner()}

            <div className="border rounded-lg shadow-md bg-white overflow-x-auto custom-scrollbar">
                <table className="w-full text-xs min-w-[1200px] border-collapse table-fixed">
                    <thead>
                        <tr className="bg-gray-800 text-white text-center">
                            <th rowSpan="2" className="p-2 border-r border-gray-600 text-left w-48 sticky left-0 bg-gray-800 z-10">Account Title</th>
                            <th colSpan="2" className="p-1 border-r border-gray-600 bg-blue-900">Unadjusted TB</th>
                            <th colSpan="2" className="p-1 border-r border-gray-600 bg-yellow-900">Adjustments</th>
                            <th colSpan="2" className="p-1 border-r border-gray-600 bg-purple-900">Adjusted TB</th>
                            <th colSpan="2" className="p-1 border-r border-gray-600 bg-green-900">Income Statement</th>
                            <th colSpan="2" className="p-1 bg-indigo-900">Balance Sheet</th>
                            <th rowSpan="2" className="w-8 bg-gray-800"></th>
                        </tr>
                        <tr className="bg-gray-700 text-white text-center">
                             ${['Dr', 'Cr', 'Dr', 'Cr', 'Dr', 'Cr', 'Dr', 'Cr', 'Dr', 'Cr'].map(h => html`<th className="p-1 border-r border-gray-600">${h}</th>`)}
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map((row, idx) => {
                            const rowRes = validation.validationResults.rows[row.id] || {};
                            return html`
                                <tr key=${row.id} className="border-b hover:bg-blue-50">
                                    <td className="p-0 border-r text-left relative sticky left-0 z-0 bg-white border-b">
                                        ${renderAccountInput(row, idx)}
                                    </td>
                                    ${['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].map(col => html`
                                        <td key=${col} className="border-r border-b p-0 relative h-8">
                                            ${renderInput(row[col], (e) => updateRow(idx, col, e.target.value), rowRes[col])}
                                        </td>
                                    `)}
                                    <td className="p-0 text-center border-b">
                                        ${!isReadOnly && html`<button onClick=${() => deleteRow(idx)} className="text-gray-400 hover:text-red-600 p-1"><${Trash2} size=${14}/></button>`}
                                    </td>
                                </tr>
                            `;
                        })}
                        
                        <tr className="bg-gray-100 font-bold border-t-2 border-gray-400">
                            <td className="p-1 border-r text-right sticky left-0 bg-gray-100 border-b">Column Totals</td>
                            ${['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].map(col => html`
                                <td key=${col} className="border-r border-b p-0 relative h-8">
                                    ${renderInput(localFooters.totals?.[col], (e) => updateFooter('totals', col, e.target.value), validation.validationResults.footers.totals[col])}
                                </td>
                            `)}
                            <td className="bg-gray-100 border-b"></td>
                        </tr>

                        <tr className="bg-white border-t border-gray-200">
                            <td className="p-1 border-r text-right sticky left-0 bg-white font-medium border-b">Net Income (Loss)</td>
                            <td colSpan="6" className="border-r bg-gray-50 text-center text-xs text-gray-400 italic border-b"></td>
                            ${['isDr', 'isCr', 'bsDr', 'bsCr'].map(col => html`
                                <td key=${col} className="border-r border-b p-0 relative h-8">
                                    ${renderInput(localFooters.net?.[col], (e) => updateFooter('net', col, e.target.value), validation.validationResults.footers.net[col], false, '')}
                                </td>
                            `)}
                            <td className="border-b"></td>
                        </tr>

                        <tr className="bg-gray-200 font-extrabold border-t-2 border-black border-b-2">
                            <td className="p-1 border-r text-right sticky left-0 bg-gray-200">Final Total</td>
                            ${['tbDr', 'tbCr', 'adjDr', 'adjCr', 'atbDr', 'atbCr', 'isDr', 'isCr', 'bsDr', 'bsCr'].map(col => html`
                                <td key=${col} className="border-r p-0 relative h-8">
                                     ${renderInput(localFooters.final?.[col], (e) => updateFooter('final', col, e.target.value), validation.validationResults.footers.final[col])}
                                </td>`
                            )}
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ${!isReadOnly && html`
                <div className="mt-2">
                    <button onClick=${addRow} className="text-xs bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 flex items-center gap-1 font-bold">
                        <${Plus} size=${14}/> Add Row
                    </button>
                </div>
            `}
        </div>
    `;
}
