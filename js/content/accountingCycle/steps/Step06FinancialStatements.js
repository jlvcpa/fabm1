// --- js/content/accountingCycle/steps/Step06FinancialStatements.js ----

import React, { useState, useMemo, useEffect } from 'https://esm.sh/react@18.2.0';
import htm from 'https://esm.sh/htm';
import { Table, Trash2, Plus, AlertCircle, Check, X, ChevronDown, ChevronRight } from 'https://esm.sh/lucide-react@0.263.1';
import { getAccountType, sortAccounts, getLetterGrade } from '../utils.js';

const html = htm.bind(React.createElement);

// --- HELPER: Value Parser & Validator ---
const parseUserValue = (val) => {
    if (!val) return 0;
    let str = val.toString().trim();
    let isNegative = false;
    if (str.startsWith('(') && str.endsWith(')')) {
        isNegative = true;
        str = str.slice(1, -1);
    } else if (str.startsWith('-')) {
        isNegative = true;
        str = str.substring(1);
    }
    const num = Number(str.replace(/,/g, ''));
    return isNegative ? -num : num;
};

const checkField = (userVal, expectedVal, isDeduction = false) => {
    const expRounded = Math.round(expectedVal);
    
    // Case 1: Expected is 0 (allow blank or 0)
    if (Math.abs(expRounded) < 0.01) {
        return !userVal || parseUserValue(userVal) === 0;
    }

    // Case 2: Expected is NON-ZERO (Must not be blank)
    if (!userVal && userVal !== 0) return false;

    const parsedUser = parseUserValue(userVal);
    // Allow off-by-one rounding differences
    const matchesNumber = Math.abs(parsedUser - expRounded) <= 1 || Math.abs(parsedUser - (-expRounded)) <= 1;
    
    if (!matchesNumber) return false;
    
    // Sign check for deductions (User must type negative sign or brackets if logic implies it)
    if (expRounded < 0 || isDeduction) {
        if (!userVal.toString().includes('(') && !userVal.toString().includes('-') && parsedUser > 0) return false;
    }
    return true;
};

// --- HELPER: Safe Account Retrieval ---
const getAccountByKeyword = (ledger, keywords) => {
    if (!ledger) return null;
    const key = Object.keys(ledger).find(k => {
        const lower = k.toLowerCase();
        return keywords.some(kw => lower.includes(kw.toLowerCase()));
    });
    return key ? ledger[key] : null;
};

const inputClass = (isError) => `w-full text-right p-1 text-xs outline-none border-b border-gray-300 bg-transparent focus:border-blue-500 font-mono pr-6 ${isError ? 'bg-red-50 text-red-600 font-bold' : ''}`;
const labelInputClass = (isError) => `w-full text-left p-1 text-xs outline-none bg-transparent focus:border-blue-500 font-medium ${isError ? 'text-red-600 font-bold' : 'text-gray-800'}`;
const btnStyle = "mt-2 text-xs text-blue-900 font-medium hover:underline flex items-center gap-1 cursor-pointer";

// --- COMPONENT: Input with Feedback Icon (For Amounts) ---
const FeedbackInput = ({ value, onChange, expected, isDeduction, showFeedback, isReadOnly, placeholder, required }) => {
    let isCorrect = checkField(value, expected, isDeduction);
    
    if (required && (!value || value.toString().trim() === '')) {
        isCorrect = false;
    }
    
    const isError = showFeedback && !isCorrect;
    const isValid = showFeedback && isCorrect;

    return html`
        <div className="relative w-full">
            <input 
                type="text" 
                className=${inputClass(isError)} 
                value=${value || ''} 
                onChange=${onChange} 
                disabled=${isReadOnly} 
                placeholder=${placeholder}
            />
            ${showFeedback && html`
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none pr-1">
                    ${isValid 
                        ? html`<${Check} size=${14} className="text-green-600"/>` 
                        : html`<${X} size=${14} className="text-red-500"/>`
                    }
                </span>
            `}
        </div>
    `;
};

// --- COMPONENT: Input with Feedback Icon (For Labels/Accounts) ---
const FeedbackLabel = ({ value, onChange, expectedOptions, showFeedback, isReadOnly, placeholder }) => {
    // Check if the user's label matches any name in the expected list
    const isValid = expectedOptions && value && expectedOptions.some(opt => opt.name.toLowerCase().trim() === value.toLowerCase().trim());
    
    // Only show X if feedback is on AND the user typed something but it didn't match. 
    // Or if strict, show X if missing. Assuming if they added a row, they intend to fill it.
    const isError = showFeedback && !isValid; 

    return html`
        <div className="relative w-full flex items-center">
            <input 
                type="text" 
                className=${labelInputClass(isError)} 
                value=${value || ''} 
                onChange=${onChange} 
                disabled=${isReadOnly} 
                placeholder=${placeholder}
            />
            ${showFeedback && html`
                <span className="pointer-events-none pl-1">
                    ${isValid 
                        ? html`<${Check} size=${14} className="text-green-600"/>` 
                        : (value ? html`<${X} size=${14} className="text-red-500"/>` : '')
                    }
                </span>
            `}
        </div>
    `;
};

// --- VALIDATION LOGIC ---
export const validateStep06 = (ledgerData, adjustments, activityData, userAnswers) => {
    let score = 0;
    let maxScore = 0;
    
    const s = new Set(Object.keys(ledgerData || {}));
    if(adjustments && Array.isArray(adjustments)) {
        adjustments.forEach(adj => { 
            if(adj.drAcc) s.add(adj.drAcc); 
            if(adj.crAcc) s.add(adj.crAcc); 
        });
    }
    
    // --- 1. Build Expected Object (Categorized) ---
    const expected = {
        revenues: [], expenses: [], currentAssets: [], nonCurrentAssets: [], 
        contraAssets: [], otherAssets: [], liabilities: [], currentLiabilities: [], 
        nonCurrentLiabilities: [], equity: {}, 
        totals: { ni: 0, rev: 0, exp: 0, curAssets: 0, nonCurAssets: 0, assets: 0, curLiabs: 0, nonCurLiabs: 0, liabs: 0, endCap: 0, liabEquity: 0 }
    };

    Array.from(s).forEach(acc => {
        if (!acc) return; 

        const lBal = (ledgerData[acc]?.debit || 0) - (ledgerData[acc]?.credit || 0);
        let aDr = 0; let aCr = 0;
        if(adjustments && Array.isArray(adjustments)) {
            adjustments.forEach(a => { if(a.drAcc === acc) aDr += a.amount; if(a.crAcc === acc) aCr += a.amount; });
        }
        const atbNet = lBal + (aDr - aCr); 
        
        if (Math.abs(atbNet) < 0.01) return;

        const type = getAccountType(acc);
        const val = Math.abs(atbNet);

        if (type === 'Revenue') {
            expected.revenues.push({ name: acc, amount: val });
            expected.totals.ni += val; 
            expected.totals.rev += val;
        } else if (type === 'Expense') {
            expected.expenses.push({ name: acc, amount: val });
            expected.totals.ni -= val; 
            expected.totals.exp += val;
        } else if (type === 'Asset') {
            const lowerAcc = acc.toLowerCase();
            const isCurrent = ['cash', 'receivable', 'inventory', 'supplies', 'prepaid'].some(k => lowerAcc.includes(k));
            const isContra = lowerAcc.includes('accumulated');
            
            if (isCurrent) {
                expected.currentAssets.push({ name: acc, amount: val });
                expected.totals.curAssets += val;
            } else if (isContra) {
                expected.contraAssets.push({ name: acc, amount: val }); 
                expected.totals.nonCurAssets -= val;
            } else {
                expected.nonCurrentAssets.push({ name: acc, amount: val });
                expected.totals.nonCurAssets += val;
            }
            expected.totals.assets += (isContra ? -val : val);
            
        } else if (type === 'Liability') {
            const isNonCurrent = acc.toLowerCase().includes('mortgage') || acc.toLowerCase().includes('bond') || acc.toLowerCase().includes('loan');
            
            if (isNonCurrent) {
                expected.nonCurrentLiabilities.push({ name: acc, amount: val });
                expected.totals.nonCurLiabs += val;
            } else {
                expected.currentLiabilities.push({ name: acc, amount: val });
                expected.totals.curLiabs += val;
            }
            expected.totals.liabs += val;
            
        } else if (acc.toLowerCase().includes('drawing') || acc.toLowerCase().includes('withdrawal') || acc.includes('Dividends')) {
            expected.equity.drawings = (expected.equity.drawings || 0) + val;
        } else if (type === 'Equity' && !acc.includes('Income Summary')) {
            expected.equity.capitalAccount = acc;
            expected.equity.begBal = Math.abs(activityData?.beginningBalances?.balances?.[acc]?.cr || 0); 
            expected.equity.atbCapital = val; 
        }
    });

    let investments = 0;
    if(activityData && activityData.transactions) {
        activityData.transactions.forEach(t => {
            const lines = t.solution || t.credits || [];
            if (t.solution) {
                 t.solution.forEach(line => {
                    if (!line.isExplanation && line.credit && line.account.includes('Capital')) {
                        investments += Number(line.credit);
                    }
                 });
            } else if (t.credits) {
                 t.credits.forEach(c => {
                    if (c.account.includes('Capital')) investments += c.amount;
                 });
            }
        });
    }
    expected.equity.investments = investments;

    expected.totals.endCap = expected.totals.assets - expected.totals.liabs;
    expected.totals.liabEquity = expected.totals.liabs + expected.totals.endCap;

    const derivedNI = expected.totals.endCap - (expected.equity.begBal || 0) - (expected.equity.investments || 0) + (expected.equity.drawings || 0);
    expected.totals.ni = derivedNI;

    // --- 2. Helper Functions for Scoring ---
    const getBal = (accName) => {
        const lowerName = accName.toLowerCase();
        let bal = 0;
        const key = Object.keys(ledgerData).find(k => k.toLowerCase() === lowerName);
        if (key) bal += (ledgerData[key].debit || 0) - (ledgerData[key].credit || 0);
        if(adjustments) {
            adjustments.forEach(a => {
                if(a.drAcc && a.drAcc.toLowerCase() === lowerName) bal += a.amount;
                if(a.crAcc && a.crAcc.toLowerCase() === lowerName) bal -= a.amount;
            });
        }
        return bal;
    };
    
    const getUnadjustedBal = (accName) => {
        const lowerName = accName.toLowerCase();
        const key = Object.keys(ledgerData).find(k => k.toLowerCase() === lowerName);
        return key ? (ledgerData[key].debit || 0) - (ledgerData[key].credit || 0) : 0;
    };

    const scoreSection = (userRows, expectedItems) => {
        expectedItems.forEach(exp => {
            maxScore += 2; // 1 for Label, 1 for Amount
            const match = userRows.find(r => r.label && r.label.toLowerCase().trim() === exp.name.toLowerCase().trim());
            if (match) {
                score += 1; // Correct Label
                if (checkField(match.amount, exp.amount)) score += 1; // Correct Amount
            }
        });
    };

    const scoreField = (userVal, expectedVal) => {
        maxScore += 1;
        if (checkField(userVal, expectedVal)) score += 1;
    };

    // --- 3. EXECUTE SCORING ---

    // A. Income Statement (Score standard fields regardless of format)
    const isData = userAnswers.is || {};
    
    const expSales = Math.abs(getBal('Sales'));
    const expSalesDisc = Math.abs(getBal('Sales Discounts'));
    const expSalesRet = Math.abs(getBal('Sales Returns and Allowances'));
    const expNetSales = expSales - expSalesDisc - expSalesRet;
    const expPurch = Math.abs(getBal('Purchases'));
    const expPurchDisc = Math.abs(getBal('Purchase Discounts'));
    const expPurchRet = Math.abs(getBal('Purchase Returns and Allowances'));
    const expNetPurch = expPurch - expPurchDisc - expPurchRet;
    const expFreightIn = Math.abs(getBal('Freight In'));
    const expCostPurch = expNetPurch + expFreightIn;
    const expBegInv = Math.abs(getUnadjustedBal('Merchandise Inventory') || getUnadjustedBal('Inventory'));
    const expTGAS = expBegInv + expCostPurch;
    const expEndInv = Math.abs(getBal('Merchandise Inventory') || getBal('Inventory'));
    
    // Logic for COGS (Periodic vs Perpetual balance)
    let expCOGS = 0;
    const cogsAcc = Math.abs(getBal('Cost of Goods Sold'));
    if (cogsAcc > 0) {
        expCOGS = cogsAcc; // Perpetual
    } else {
        expCOGS = expTGAS - expEndInv; // Periodic
    }

    scoreField(isData.sales, expSales);
    if(expSalesDisc > 0 || isData.salesDisc) scoreField(isData.salesDisc, expSalesDisc);
    if(expSalesRet > 0 || isData.salesRet) scoreField(isData.salesRet, expSalesRet);
    scoreField(isData.netSales, expNetSales);
    
    // Detailed Periodic COGS Flow
    if (cogsAcc === 0) { 
        scoreField(isData.begInv, expBegInv);
        scoreField(isData.purchases, expPurch);
        if(expPurchDisc > 0 || isData.purchDisc) scoreField(isData.purchDisc, expPurchDisc);
        if(expPurchRet > 0 || isData.purchRet) scoreField(isData.purchRet, expPurchRet);
        scoreField(isData.netPurch, expNetPurch);
        scoreField(isData.freightIn, expFreightIn);
        scoreField(isData.costPurch, expCostPurch);
        scoreField(isData.tgas, expTGAS);
        scoreField(isData.endInv, expEndInv);
    }

    if (isData.cogs) scoreField(isData.cogs, expCOGS); 
    scoreField(isData.grossIncome, expNetSales - expCOGS);

    scoreSection(isData.opExpenses || isData.expenses || [], expected.expenses);
    scoreField(isData.totalOpExpenses || isData.totalExpenses, expected.totals.exp);
    scoreField(isData.netIncomeAfterTax, expected.totals.ni); 

    // B. SCE Scoring
    const sceData = userAnswers.sce || {};
    scoreField(sceData.begCapital, expected.equity.begBal);
    
    const expAdditions = investments + (expected.totals.ni > 0 ? expected.totals.ni : 0);
    const expDeductions = (expected.equity.drawings || 0) + (expected.totals.ni < 0 ? Math.abs(expected.totals.ni) : 0);
    
    scoreField(sceData.totalAdditions, expAdditions);
    scoreField(sceData.totalCapDuring, expected.equity.begBal + expAdditions);
    scoreField(sceData.totalDeductions, expDeductions);
    scoreField(sceData.endCapital, expected.totals.endCap);

    // C. Balance Sheet Scoring
    const bsData = userAnswers.bs || {};
    scoreField(bsData.totalAssets, expected.totals.assets);
    scoreField(bsData.totalLiabs, expected.totals.liabs);
    scoreField(bsData.totalLiabEquity, expected.totals.liabEquity);
    scoreField(bsData.endCapital, expected.totals.endCap);
    
    scoreSection(bsData.curAssets || [], expected.currentAssets);
    scoreField(bsData.totalCurAssets, expected.totals.curAssets);

    // Score Depreciable Assets (Cost, Accum, Net)
    const depAssets = bsData.depAssets || [];
    depAssets.forEach(block => {
        if(!block.asset) return;
        const keyword = block.asset.toLowerCase().split(' ')[0];
        const matchAsset = expected.nonCurrentAssets.find(a => a.name.toLowerCase().includes(keyword));
        
        if (matchAsset) {
            maxScore += 3; // Cost, Accum, Net
            const expCost = matchAsset.amount;
            let matchContra = expected.contraAssets.find(c => c.name.toLowerCase().includes(keyword));
            if(!matchContra) matchContra = expected.contraAssets.find(c => c.name.toLowerCase().trim() === 'accumulated depreciation');
            
            const expAccum = matchContra ? Math.abs(matchContra.amount) : 0;
            const expNet = expCost - expAccum; 

            if(checkField(block.cost, expCost)) score += 1;
            if(checkField(block.accum, expAccum)) score += 1;
            if(checkField(block.net, expNet)) score += 1;
        }
    });

    // --- FIX: Filter out common PPE accounts from "Other Non-Current Assets" scoring ---
    // This prevents expectation duplication
    const ppeKeywords = ['equipment', 'machinery', 'building', 'furniture', 'fixture', 'accumulated', 'depreciation'];
    const otherNonCurrentExpectation = expected.nonCurrentAssets.filter(a => {
        const name = a.name.toLowerCase();
        return !ppeKeywords.some(kw => name.includes(kw));
    });

    scoreSection(bsData.otherAssets || [], otherNonCurrentExpectation);
    
    scoreField(bsData.totalNonCurAssets, expected.totals.nonCurAssets);

    scoreSection(bsData.curLiabs || [], expected.currentLiabilities);
    scoreField(bsData.totalCurLiabs, expected.totals.curLiabs);
    
    scoreSection(bsData.nonCurLiabs || [], expected.nonCurrentLiabilities);
    scoreField(bsData.totalNonCurLiabs, expected.totals.nonCurLiabs);

    const isCorrect = score === maxScore && maxScore > 0;
    const letterGrade = getLetterGrade(score, maxScore);
    
    return { score, maxScore, letterGrade, isCorrect, expected }; 
};


// --- COMPONENT: Source View (Read-Only) ---
const WorksheetSourceView = ({ ledgerData, adjustments }) => {
    const mergedAccounts = useMemo(() => { 
        const s = new Set(Object.keys(ledgerData || {}));
        if(adjustments && Array.isArray(adjustments)) {
             adjustments.forEach(adj => { 
                 if(adj.drAcc) s.add(adj.drAcc); 
                 if(adj.crAcc) s.add(adj.crAcc); 
             });
        }
        return sortAccounts(Array.from(s));
    }, [ledgerData, adjustments]);

    const data = useMemo(() => {
        return mergedAccounts.map(acc => {
            if(!acc) return {}; 

            const ledgerBal = (ledgerData[acc]?.debit || 0) - (ledgerData[acc]?.credit || 0);
            const tbDr = ledgerBal > 0 ? ledgerBal : 0; const tbCr = ledgerBal < 0 ? Math.abs(ledgerBal) : 0;
            let aDr = 0; let aCr = 0;
            if(adjustments && Array.isArray(adjustments)) {
                adjustments.forEach(a => { if(a.drAcc === acc) aDr += a.amount; if(a.crAcc === acc) aCr += a.amount; });
            }
            const atbNet = (tbDr - tbCr) + (aDr - aCr);
            const atbDr = atbNet > 0 ? atbNet : 0; const atbCr = atbNet < 0 ? Math.abs(atbNet) : 0;
            const type = getAccountType(acc); 
            const isIS = type === 'Revenue' || type === 'Expense';
            const isDr = isIS ? atbDr : 0; const isCr = isIS ? atbCr : 0; 
            const bsDr = !isIS ? atbDr : 0; const bsCr = !isIS ? atbCr : 0;
            return { acc, tbDr, tbCr, adjDr: aDr, adjCr: aCr, atbDr, atbCr, isDr, isCr, bsDr, bsCr };
        });
    }, [mergedAccounts, ledgerData, adjustments]);

    return html`
        <div className="h-full flex flex-col">
            <div className="bg-purple-100 p-2 font-bold text-purple-900 border-b border-purple-200"><${Table} size=${16} className="inline mr-2"/>Source: Worksheet (Correct Answers)</div>
            <div className="overflow-auto custom-scrollbar flex-1 bg-white">
                <table className="w-full text-xs min-w-[1000px] border-collapse">
                    <thead className="sticky top-0 z-10">
                        <tr className="bg-purple-900 text-white text-center"><th className="p-1 sticky left-0 bg-purple-900 z-20">Account</th><th colSpan="2">Adjusted TB</th><th colSpan="2">Income Statement</th><th colSpan="2">Balance Sheet</th></tr>
                        <tr className="bg-purple-800 text-white text-center"><th className="p-1 sticky left-0 bg-purple-800 z-20"></th><th>Dr</th><th>Cr</th><th>Dr</th><th>Cr</th><th>Dr</th><th>Cr</th></tr>
                    </thead>
                    <tbody>
                        ${data.map((row, idx) => html`
                            <tr key=${idx} className="border-b border-purple-100 hover:bg-purple-50">
                                <td className="p-1 border-r sticky left-0 bg-white z-0 truncate font-medium w-40">${row.acc}</td>
                                <td className="p-1 border-r text-right w-20">${row.atbDr || ''}</td>
                                <td className="p-1 border-r text-right w-20">${row.atbCr || ''}</td>
                                <td className="p-1 border-r text-right w-20 bg-green-50">${row.isDr || ''}</td>
                                <td className="p-1 border-r text-right w-20 bg-green-50">${row.isCr || ''}</td>
                                <td className="p-1 border-r text-right w-20 bg-indigo-50">${row.bsDr || ''}</td>
                                <td className="p-1 text-right w-20 bg-indigo-50">${row.bsCr || ''}</td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};

// --- COMPONENT: FinancialStatementForm ---
const FinancialStatementForm = ({ title, data, onChange, isReadOnly, headerColor = "bg-gray-100" }) => {
    const rows = data?.rows || [{ label: '', amount: '' }, { label: '', amount: '' }];
    const updateRow = (idx, field, val) => { const newRows = [...rows]; newRows[idx] = { ...newRows[idx], [field]: val }; onChange('rows', newRows); };
    const addRow = () => onChange('rows', [...rows, { label: '', amount: '' }]);
    const deleteRow = (idx) => { if (rows.length <= 1) return; onChange('rows', rows.filter((_, i) => i !== idx)); };

    return html`
        <div className="border rounded bg-white flex flex-col h-full shadow-sm">
            <div className=${`${headerColor} p-2 font-bold text-gray-800 border-b text-center text-sm`}>${title}</div>
            <div className="p-2 overflow-y-auto flex-1">
                <table className="w-full text-xs">
                    <thead><tr><th className="text-left p-1">Particulars</th><th className="text-right p-1 w-24">Amount</th><th className="w-6"></th></tr></thead>
                    <tbody>${rows.map((r, i) => html`<tr key=${i} className="border-b border-gray-100"><td className="p-1"><input type="text" className="w-full outline-none bg-transparent font-medium" placeholder="..." value=${r.label} onChange=${(e)=>updateRow(i, 'label', e.target.value)} disabled=${isReadOnly}/></td><td className="p-1"><input type="number" className="w-full text-right outline-none bg-transparent" placeholder="0" value=${r.amount} onChange=${(e)=>updateRow(i, 'amount', e.target.value)} disabled=${isReadOnly}/></td><td className="p-1 text-center">${!isReadOnly && html`<button onClick=${()=>deleteRow(i)} className="text-gray-400 hover:text-red-500"><${Trash2} size=${12}/></button>`}</td></tr>`)}</tbody>
                </table>
                ${!isReadOnly && html`<button onClick=${addRow} className=${btnStyle}><${Plus} size=${12}/> Add Line</button>`}
            </div>
        </div>
    `;
};

const BalanceSheet = ({ data, onChange, isReadOnly, showFeedback, sceEndingCapital, expectedTotals, expectedData }) => {
    const [showNonCurrentAssets, setShowNonCurrentAssets] = useState(false);
    const [showNonCurrentLiabs, setShowNonCurrentLiabs] = useState(false);

    useEffect(() => {
        if (!data?.depAssets || data.depAssets.length === 0) {
            if (!isReadOnly && onChange) {
                onChange({ ...data, depAssets: [{ asset: '', cost: '', contra: '', accum: '', net: '' }] });
            }
        }
    }, []); 

    const updateData = (updates) => onChange({ ...data, ...updates });
    const curAssets = data?.curAssets || [{ label: '', amount: '' }];
    
    // --- FIX: Initialize otherAssets as empty array to avoid placeholder X marks ---
    const otherAssets = data?.otherAssets || [];
    
    const depAssets = data?.depAssets || []; 
    const curLiabs = data?.curLiabs || [{ label: '', amount: '' }];
    const nonCurLiabs = data?.nonCurLiabs || [{ label: '', amount: '' }];

    const handleArrChange = (arrKey, idx, field, val) => {
        const arr = [...(data?.[arrKey] || [])];
        if (!arr[idx]) arr[idx] = {};
        arr[idx] = { ...arr[idx], [field]: val };
        updateData({ [arrKey]: arr });
    };
    const addRow = (arrKey, defaultObj) => updateData({ [arrKey]: [...(data?.[arrKey]||[]), defaultObj] });
    const deleteRow = (arrKey, idx) => updateData({ [arrKey]: (data?.[arrKey]||[]).filter((_, i) => i !== idx) });
    const expTotals = expectedTotals || { curAssets:0, nonCurAssets:0, assets:0, curLiabs:0, nonCurLiabs:0, liabs:0, liabEquity:0 };

    return html`
        <div className="border rounded bg-white flex flex-col h-full shadow-sm">
            <div className="bg-blue-100 p-2 font-bold text-gray-800 border-b text-center text-sm">Balance Sheet</div>
            <div className="p-4 overflow-y-auto flex-1 text-xs">
                <div className="text-center font-bold text-sm mb-2">Assets</div>
                <div className="font-bold text-gray-700 mb-1">Current Assets</div>
                ${curAssets.map((r, i) => {
                    const exp = expectedData?.currentAssets?.find(a => a.name.toLowerCase().trim() === (r.label || '').toLowerCase().trim());
                    const isCorrect = exp && checkField(r.amount, exp.amount);
                    return html`
                    <div key=${i} className="flex justify-between items-center border-b border-gray-100 py-1">
                        <div className="flex-1 pl-4">
                            <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('curAssets', i, 'label', e.target.value)} expectedOptions=${expectedData?.currentAssets} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Current asset account]"/>
                        </div>
                        <div className="w-24"><input type="text" className="w-full text-right bg-transparent outline-none" placeholder="0" value=${r.amount} onChange=${(e)=>handleArrChange('curAssets', i, 'amount', e.target.value)} disabled=${isReadOnly}/></div>
                        <div className="w-6 text-center">
                            ${!isReadOnly 
                                ? html`<button onClick=${()=>deleteRow('curAssets', i)}><${Trash2} size=${12} class="text-gray-400 hover:text-red-500"/></button>`
                                : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                            }
                        </div>
                    </div>
                `})}
                ${!isReadOnly && html`<button onClick=${()=>addRow('curAssets', {label:'', amount:''})} className=${btnStyle}><${Plus} size=${12}/> Add Current Asset Row</button>`}
                <div className="flex justify-between items-center py-1 font-semibold border-t border-black mt-1">
                    <span className="pl-8">Total Current Assets</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalCurAssets} onChange=${(e)=>updateData({ totalCurAssets: e.target.value })} expected=${expTotals.curAssets} showFeedback=${showFeedback} isReadOnly=${isReadOnly} /></div>
                </div>

                <div className="mt-4 mb-2 flex items-center gap-2 cursor-pointer text-blue-800 font-bold text-xs" onClick=${()=>setShowNonCurrentAssets(!showNonCurrentAssets)}>
                    ${showNonCurrentAssets ? html`<${ChevronDown} size=${14}/>` : html`<${ChevronRight} size=${14}/>`} Non-current Assets Section
                </div>
                
                ${showNonCurrentAssets && html`
                    <div className="pl-2 border-l-2 border-blue-100 mb-4">
                        ${depAssets.map((block, i) => {
                            let expCost = 0, expAccum = 0, expNet = 0;
                            if (expectedData && block.asset) {
                                const keyword = block.asset.toLowerCase().split(' ')[0];
                                const matchAsset = expectedData.nonCurrentAssets.find(a => a.name.toLowerCase().includes(keyword));
                                if (matchAsset) {
                                    expCost = matchAsset.amount;
                                    
                                    let matchContra = expectedData.contraAssets.find(c => c.name.toLowerCase().includes(keyword));
                                    
                                    if (!matchContra) {
                                         matchContra = expectedData.contraAssets.find(c => c.name.toLowerCase().trim() === 'accumulated depreciation');
                                    }

                                    if (matchContra) {
                                        expAccum = Math.abs(matchContra.amount);
                                    } else {
                                        expAccum = 0;
                                    }
                                    
                                    // STRICT: Net Book Value must match Source Data exactly.
                                    expNet = expCost - expAccum;

                                } else {
                                    expNet = parseUserValue(block.cost) - Math.abs(parseUserValue(block.accum));
                                }
                            } else {
                                expNet = parseUserValue(block.cost) - Math.abs(parseUserValue(block.accum));
                            }
                            
                            const isCorrect = checkField(block.net, expNet);

                            return html`
                            <div key=${i} className="mb-2 bg-gray-50 p-2 rounded relative group">
                                <div className="flex justify-between mb-1">
                                    <input type="text" className="bg-transparent w-full outline-none font-bold text-gray-800" placeholder="[Property/Equipment Account]" value=${block.asset} onChange=${(e)=>handleArrChange('depAssets', i, 'asset', e.target.value)} disabled=${isReadOnly}/>
                                    <div className="w-24 relative"><${FeedbackInput} value=${block.cost} onChange=${(e)=>handleArrChange('depAssets', i, 'cost', e.target.value)} expected=${expCost} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="Cost" required=${true} /></div>
                                </div>
                                <div className="flex justify-between mb-1 text-gray-600">
                                    <span className="pl-4 flex-1">Less: <input type="text" className="inline-block bg-transparent outline-none w-3/4 italic" placeholder="[Accum. Depr.]" value=${block.contra} onChange=${(e)=>handleArrChange('depAssets', i, 'contra', e.target.value)} disabled=${isReadOnly}/></span>
                                    
                                    <div className="w-24 relative"><${FeedbackInput} value=${block.accum} onChange=${(e)=>handleArrChange('depAssets', i, 'accum', e.target.value)} expected=${expAccum} isDeduction=${false} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="0" required=${true} /></div>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span className="pl-8">Net Book Value</span>
                                    <div className="w-full"><${FeedbackInput} value=${block.net} onChange=${(e)=>handleArrChange('depAssets', i, 'net', e.target.value)} expected=${expNet} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="0" required=${true} /></div>
                                </div>
                                ${!isReadOnly 
                                    ? html`<button onClick=${()=>deleteRow('depAssets', i)} className="absolute top-1 right-[-20px] text-red-400 opacity-0 group-hover:opacity-100"><${Trash2} size=${12}/></button>`
                                    : (showFeedback && html`<span className="absolute top-1 right-[-20px]">${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                                }
                            </div>
                        `})}
                        ${!isReadOnly && html`<button onClick=${()=>addRow('depAssets', {asset:'', cost:'', contra:'', accum:'', net:''})} className=${btnStyle}><${Plus} size=${12}/> Add Depreciable Asset Row</button>`}
                        
                        ${otherAssets.map((r, i) => {
                            // Filter logic already applied in validateStep06, but we check match here for individual checks
                            const ppeKeywords = ['equipment', 'machinery', 'building', 'furniture', 'fixture', 'accumulated', 'depreciation'];
                            const otherNonCurrentExpectation = expectedData?.nonCurrentAssets.filter(a => {
                                const name = a.name.toLowerCase();
                                return !ppeKeywords.some(kw => name.includes(kw));
                            });

                            const exp = otherNonCurrentExpectation?.find(a => a.name.toLowerCase().trim() === (r.label || '').toLowerCase().trim());
                            const isCorrect = exp && checkField(r.amount, exp.amount);
                            
                            return html`
                            <div key=${i} className="flex justify-between items-center border-b border-gray-100 py-1 mt-2">
                                <div className="flex-1 pl-4">
                                    <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('otherAssets', i, 'label', e.target.value)} expectedOptions=${otherNonCurrentExpectation} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Land / Other asset account]"/>
                                </div>
                                <div className="w-24"><input type="text" className="w-full text-right bg-transparent outline-none" placeholder="0" value=${r.amount} onChange=${(e)=>handleArrChange('otherAssets', i, 'amount', e.target.value)} disabled=${isReadOnly}/></div>
                                <div className="w-6 text-center">
                                    ${!isReadOnly 
                                        ? html`<button onClick=${()=>deleteRow('otherAssets', i)}><${Trash2} size=${12} class="text-gray-400 hover:text-red-500"/></button>`
                                        : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                                    }
                                </div>
                            </div>
                        `})}
                        ${!isReadOnly && html`<button onClick=${()=>addRow('otherAssets', {label:'', amount:''})} className=${btnStyle}><${Plus} size=${12}/> Add Other Asset Row</button>`}
                        
                        <div className="flex justify-between items-center py-1 font-semibold border-t border-black mt-2">
                            <span className="pl-8">Total Non-current Assets</span>
                            <div className="w-full"><${FeedbackInput} value=${data?.totalNonCurAssets} onChange=${(e)=>updateData({ totalNonCurAssets: e.target.value })} expected=${expTotals.nonCurAssets} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                        </div>
                    </div>
                `}

                <div className="flex justify-between items-center py-2 font-bold border-t-2 border-black border-double border-b-4 mt-2 mb-6">
                    <span className="pl-2">Total Assets</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalAssets} onChange=${(e)=>updateData({ totalAssets: e.target.value })} expected=${expTotals.assets} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                <div className="text-center font-bold text-sm mb-2">Liabilities and Owner's Equity</div>
                <div className="font-bold text-gray-700 mb-1">Liabilities</div>
                ${curLiabs.map((r, i) => {
                    const exp = expectedData?.currentLiabilities?.find(l => l.name.toLowerCase().trim() === (r.label || '').toLowerCase().trim());
                    const isCorrect = exp && checkField(r.amount, exp.amount);
                    return html`
                    <div key=${i} className="flex justify-between items-center border-b border-gray-100 py-1">
                        <div className="flex-1 pl-4">
                            <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('curLiabs', i, 'label', e.target.value)} expectedOptions=${expectedData?.currentLiabilities} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Current liability account]"/>
                        </div>
                        <div className="w-24"><input type="text" className="w-full text-right bg-transparent outline-none" placeholder="0" value=${r.amount} onChange=${(e)=>handleArrChange('curLiabs', i, 'amount', e.target.value)} disabled=${isReadOnly}/></div>
                        <div className="w-6 text-center">
                            ${!isReadOnly 
                                ? html`<button onClick=${()=>deleteRow('curLiabs', i)}><${Trash2} size=${12} class="text-gray-400 hover:text-red-500"/></button>`
                                : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                            }
                        </div>
                    </div>
                `})}
                ${!isReadOnly && html`<button onClick=${()=>addRow('curLiabs', {label:'', amount:''})} className=${btnStyle}><${Plus} size=${12}/> Add Current Liability Row</button>`}
                
                <div className="flex justify-between items-center py-1 font-semibold border-t border-black mt-1">
                    <span className="pl-8">Total Current Liabilities</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalCurLiabs} onChange=${(e)=>updateData({ totalCurLiabs: e.target.value })} expected=${expTotals.curLiabs} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                 <div className="mt-4 mb-2 flex items-center gap-2 cursor-pointer text-blue-800 font-bold text-xs" onClick=${()=>setShowNonCurrentLiabs(!showNonCurrentLiabs)}>
                    ${showNonCurrentLiabs ? html`<${ChevronDown} size=${14}/>` : html`<${ChevronRight} size=${14}/>`} Non-current Liabilities Section
                </div>
                ${showNonCurrentLiabs && html`
                    <div className="pl-2 border-l-2 border-blue-100 mb-4">
                         ${nonCurLiabs.map((r, i) => {
                            const exp = expectedData?.nonCurrentLiabilities?.find(l => l.name.toLowerCase().trim() === (r.label || '').toLowerCase().trim());
                            const isCorrect = exp && checkField(r.amount, exp.amount);
                            return html`
                            <div key=${i} className="flex justify-between items-center border-b border-gray-100 py-1">
                                <div className="flex-1 pl-4">
                                    <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('nonCurLiabs', i, 'label', e.target.value)} expectedOptions=${expectedData?.nonCurrentLiabilities} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Non-current liability account]"/>
                                </div>
                                <div className="w-24"><input type="text" className="w-full text-right bg-transparent outline-none" placeholder="0" value=${r.amount} onChange=${(e)=>handleArrChange('nonCurLiabs', i, 'amount', e.target.value)} disabled=${isReadOnly}/></div>
                                <div className="w-6 text-center">
                                    ${!isReadOnly 
                                        ? html`<button onClick=${()=>deleteRow('nonCurLiabs', i)}><${Trash2} size=${12} class="text-gray-400 hover:text-red-500"/></button>`
                                        : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                                    }
                                </div>
                            </div>
                        `})}
                        ${!isReadOnly && html`<button onClick=${()=>addRow('nonCurLiabs', {label:'', amount:''})} className=${btnStyle}><${Plus} size=${12}/> Add Non-current Liability Row</button>`}
                         <div className="flex justify-between items-center py-1 font-semibold border-t border-black mt-1">
                            <span className="pl-8">Total Non-current Liabilities</span>
                            <div className="w-full"><${FeedbackInput} value=${data?.totalNonCurLiabs} onChange=${(e)=>updateData({ totalNonCurLiabs: e.target.value })} expected=${expTotals.nonCurLiabs} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                        </div>
                    </div>
                `}

                <div className="flex justify-between items-center py-1 font-bold mt-2">
                    <span className="pl-0">Total Liabilities</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalLiabs} onChange=${(e)=>updateData({ totalLiabs: e.target.value })} expected=${expTotals.liabs} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                <div className="font-bold text-gray-700 mt-4 mb-1">Owner's Equity</div>
                <div className="flex justify-between items-center py-1">
                    <span className="pl-4 text-gray-500 italic">[Owner, Capital Ending]</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.endCapital} onChange=${(e)=>updateData({ endCapital: e.target.value })} expected=${sceEndingCapital} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="From SCE..."/></div>
                </div>

                <div className="flex justify-between items-center py-2 font-bold mt-4 border-t-2 border-black border-double border-b-4">
                    <span className="pl-2">Total Liabilities and Owner's Equity</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalLiabEquity} onChange=${(e)=>updateData({ totalLiabEquity: e.target.value })} expected=${expTotals.liabEquity} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>
            </div>
        </div>
    `;
};

// --- SCE COMPONENT ---
const StatementOfChangesInEquity = ({ data, onChange, isReadOnly, showFeedback, calculatedTotals, activityData, expectedTotals }) => {
    const { isSubsequentYear } = activityData?.config || {};
    const beginningBalances = activityData?.beginningBalances;
    const transactions = activityData?.transactions;
    
    const { ledger } = calculatedTotals;

    let expBegCap = 0;
    if (isSubsequentYear && beginningBalances) {
        expBegCap = beginningBalances.balances['Owner, Capital']?.cr || 0;
    }

    let expInvestment = 0;
    if(transactions) {
        transactions.forEach(t => {
            const lines = t.solution || t.credits || [];
            if (t.solution) {
                 t.solution.forEach(line => {
                    if (!line.isExplanation && line.credit && line.account.includes('Capital')) {
                        expInvestment += Number(line.credit);
                    }
                 });
            } else if (t.credits) {
                 t.credits.forEach(c => {
                    if (c.account.includes('Capital')) expInvestment += c.amount;
                 });
            }
        });
    }
    
    let expNetInc = 0;
    if (expectedTotals && typeof expectedTotals.ni === 'number') {
        expNetInc = expectedTotals.ni;
    } else {
        expNetInc = calculatedTotals.isCr - calculatedTotals.isDr;
    }

    const drawingsAcc = getAccountByKeyword(ledger, ['drawings', 'withdrawal']);
    const expDrawings = (drawingsAcc?.debit || 0) - (drawingsAcc?.credit || 0);

    const expTotalAdditions = expInvestment + (expNetInc > 0 ? expNetInc : 0);
    const expTotalCapDuring = expBegCap + expTotalAdditions;
    const expTotalDeductions = expDrawings + (expNetInc < 0 ? Math.abs(expNetInc) : 0);
    const expEndCap = expTotalCapDuring - expTotalDeductions;

    const additions = data?.additions || [{ label: '', amount: '' }];
    const deductions = data?.deductions || [{ label: '', amount: '' }];
    const updateData = (updates) => onChange({ ...data, ...updates });

    const handleArrChange = (key, idx, field, val) => {
        const arr = [...(key === 'additions' ? additions : deductions)];
        arr[idx] = { ...arr[idx], [field]: val };
        updateData({ [key]: arr });
    };
    const addRow = (key) => updateData({ [key]: [...(key==='additions'?additions:deductions), { label: '', amount: '' }] });
    const deleteRow = (key, idx) => {
        const arr = [...(key === 'additions' ? additions : deductions)];
        if (arr.length <= 1) return;
        updateData({ [key]: arr.filter((_, i) => i !== idx) });
    };

    return html`
        <div className="border rounded bg-white flex flex-col h-full shadow-sm">
            <div className="bg-yellow-100 p-2 font-bold text-gray-800 border-b text-center text-sm">Statement of Changes in Equity</div>
            <div className="p-4 overflow-y-auto flex-1 text-xs">
                <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 italic pl-0">[Owner, Capital - beginning]</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.begCapital} onChange=${(e)=>updateData({ begCapital: e.target.value })} expected=${expBegCap} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="0"/></div>
                </div>
                <div className="mt-2 font-bold text-gray-800">Add: <span className="text-gray-400 font-normal italic">[Additions]</span></div>
                <table className="w-full mb-1"><tbody>${additions.map((r,i) => {
                    let exp = 0;
                    if (r.label.toLowerCase().includes('investment')) exp = expInvestment;
                    else if (r.label.toLowerCase().includes('net income')) exp = (expNetInc > 0 ? expNetInc : 0);
                    const isCorrect = checkField(r.amount, exp);
                    return html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="Investment / Net Income..." value=${r.label} onChange=${(e)=>handleArrChange('additions',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrChange('additions',i,'amount',e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">
                    ${!isReadOnly 
                        ? html`<button onClick=${()=>deleteRow('additions',i)}><${Trash2} size=${12}/></button>`
                        : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                    }
                    </td></tr>`;
                })}</tbody></table>
                ${!isReadOnly && html`<button onClick=${()=>addRow('additions')} className=${btnStyle}><${Plus} size=${12}/> Add Addition Row</button>`}
                
                <div className="flex justify-between items-center py-1 font-semibold border-t border-black">
                    <span className="pl-8">Total Additions</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalAdditions} onChange=${(e)=>updateData({ totalAdditions: e.target.value })} expected=${expTotalAdditions} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                <div className="flex justify-between items-center py-2 font-semibold">
                    <span className="pl-2">Total Owner, Capital during the period</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalCapDuring} onChange=${(e)=>updateData({ totalCapDuring: e.target.value })} expected=${expTotalCapDuring} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                <div className="mt-2 font-bold text-gray-800">Less: <span className="text-gray-400 font-normal italic">[Deductions]</span></div>
                <table className="w-full mb-1"><tbody>${deductions.map((r,i) => {
                    let exp = 0;
                    if (r.label.toLowerCase().includes('drawing')) exp = expDrawings;
                    else if (r.label.toLowerCase().includes('net loss')) exp = (expNetInc < 0 ? Math.abs(expNetInc) : 0);
                    const isCorrect = checkField(r.amount, exp);
                    return html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="Drawings / Net Loss..." value=${r.label} onChange=${(e)=>handleArrChange('deductions',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrChange('deductions',i,'amount',e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">
                    ${!isReadOnly 
                        ? html`<button onClick=${()=>deleteRow('deductions',i)}><${Trash2} size=${12}/></button>`
                        : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                    }
                    </td></tr>`;
                })}</tbody></table>
                ${!isReadOnly && html`<button onClick=${()=>addRow('deductions')} className=${btnStyle}><${Plus} size=${12}/> Add Deduction Row</button>`}

                <div className="flex justify-between items-center py-1 font-semibold border-t border-black">
                    <span className="pl-8">Total Deductions</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.totalDeductions} onChange=${(e)=>updateData({ totalDeductions: e.target.value })} expected=${expTotalDeductions} showFeedback=${showFeedback} isReadOnly=${isReadOnly}/></div>
                </div>

                <div className="flex justify-between items-center py-2 font-bold mt-2 border-t border-black border-b-4 border-double">
                    <span className="text-gray-500 italic">[Owner, Capital - ending]</span>
                    <div className="w-full"><${FeedbackInput} value=${data?.endCapital} onChange=${(e)=>updateData({ endCapital: e.target.value })} expected=${expEndCap} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="0"/></div>
                </div>
            </div>
        </div>
    `;
};


// --- MerchPeriodicIS (Fixed Inventory Sources) ---
const MerchPeriodicIS = ({ data, onChange, isReadOnly, showFeedback, calculatedTotals, type = "Single", expectedTotals }) => {
    const { ledger, adjustments } = calculatedTotals;

    const allAccounts = useMemo(() => {
        const s = new Set(Object.keys(ledger));
        if(adjustments && Array.isArray(adjustments)) {
             adjustments.forEach(adj => { 
                 if (adj.drAcc) s.add(adj.drAcc); 
                 if (adj.crAcc) s.add(adj.crAcc); 
             });
        }
        return Array.from(s);
    }, [ledger, adjustments]);

    const getBal = (accName) => { 
        const lowerName = accName.toLowerCase();
        let bal = 0;
        
        const ledgerKey = Object.keys(ledger).find(k => k.toLowerCase() === lowerName);
        if (ledgerKey) {
            bal += (ledger[ledgerKey].debit || 0) - (ledger[ledgerKey].credit || 0);
        }

        if(adjustments && Array.isArray(adjustments)) {
             adjustments.forEach(adj => {
                 if (adj.drAcc && adj.drAcc.toLowerCase() === lowerName) bal += adj.amount;
                 if (adj.crAcc && adj.crAcc.toLowerCase() === lowerName) bal -= adj.amount;
             });
        }
        return bal; 
    };

    const getUnadjustedBal = (accName) => {
        const lowerName = accName.toLowerCase();
        const ledgerKey = Object.keys(ledger).find(k => k.toLowerCase() === lowerName);
        if (ledgerKey) {
            return (ledger[ledgerKey].debit || 0) - (ledger[ledgerKey].credit || 0);
        }
        return 0;
    };
    
    const expSales = Math.abs(getBal('Sales')); 
    const expSalesDisc = Math.abs(getBal('Sales Discounts')); 
    const expSalesRet = Math.abs(getBal('Sales Returns and Allowances')); 
    const expNetSales = expSales - expSalesDisc - expSalesRet;
    const expPurch = Math.abs(getBal('Purchases')); 
    const expPurchDisc = Math.abs(getBal('Purchase Discounts')); 
    const expPurchRet = Math.abs(getBal('Purchase Returns and Allowances')); 
    const expNetPurch = expPurch - expPurchDisc - expPurchRet;
    const expFreightIn = Math.abs(getBal('Freight In')); 
    const expCostPurch = expNetPurch + expFreightIn;

    const expBegInv = Math.abs(getUnadjustedBal('Merchandise Inventory') || getUnadjustedBal('Inventory')); 
    const expTGAS = expBegInv + expCostPurch;
    
    const expEndInv = Math.abs(getBal('Merchandise Inventory') || getBal('Inventory')); 
    
    const expCOGS = expTGAS - expEndInv; 
    const expGross = expNetSales - expCOGS;
    
    const totalDebits = calculatedTotals.isDr; 
    
    const costDebits = expPurch + expFreightIn + expSalesDisc + expSalesRet; 
    const expOpExp = totalDebits - costDebits;
    
    const expOpIncome = expGross - expOpExp; 
    const expNonOp = 0; 
    const expNI = expOpIncome + expNonOp;
    
    const updateData = (updates) => onChange({ ...data, ...updates });
    const handleAmountChange = (key, val) => {
        if (/^[0-9.,\-() ]*$/.test(val)) updateData({ [key]: val });
    };

    const renderRow = (label, valueKey, expected, isDeduction=false, indent='pl-4', placeholder='0.00', showInput=true, labelKey=null) => html`<div className="flex justify-between items-center py-1">
        ${labelKey 
            ? html`<span className=${indent}><input type="text" className="w-64 outline-none bg-transparent border-b border-gray-300 focus:border-blue-500 placeholder-gray-400 italic" placeholder=${label} value=${data?.[labelKey] || ''} onChange=${(e)=>updateData({ [labelKey]: e.target.value })} disabled=${isReadOnly}/></span>`
            : html`<span className=${indent}>${label}</span>`
        }
        ${showInput ? html`<div className="w-full"><${FeedbackInput} value=${data?.[valueKey]} onChange=${(e)=>handleAmountChange(valueKey, e.target.value)} expected=${expected} isDeduction=${isDeduction} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder=${placeholder}/></div>` : ''}
    </div>`;

    const opExpenseRows = data?.opExpenses || [{label:'', amount:''}];
    const otherIncomeRows = data?.otherIncome || [{label:'', amount:''}];
    const expenseRows = data?.expenses || [{label:'', amount:''}];
    
    const handleArrChange = (key, idx, field, val) => { const arr = [...(data[key] || [{label:'', amount:''} ])]; arr[idx] = {...arr[idx], [field]:val}; updateData({[key]: arr}); };
    const handleArrAmountChange = (key, idx, val) => {
        if (/^[0-9.,\-() ]*$/.test(val)) handleArrChange(key, idx, 'amount', val);
    };
    const addRow = (key) => updateData({ [key]: [...(data[key]||[{label:'',amount:''}]), { label: '', amount: '' }] });
    const deleteRow = (key, idx) => { const arr = [...(data[key] || [])]; if(arr.length<=1)return; updateData({[key]: arr.filter((_, i)=>i!==idx)}); };
    
    return html`
        <div className="border rounded bg-white flex flex-col h-full shadow-sm">
            <div className="bg-blue-100 p-2 font-bold text-gray-800 border-b text-center text-sm">Income Statement (${type}-Step Periodic)</div>
            <div className="p-4 overflow-y-auto flex-1 text-xs">
                ${type === 'Single' ? html`<div className="mb-2 font-bold text-gray-800">Revenues</div>` : html`<div className="mb-2 font-bold text-gray-800">Operating Revenues</div>`}
                ${renderRow('[Sales Account]', 'sales', expSales, false, 'pl-4', '0.00', true, 'salesLabel')}
                <div className="flex items-center gap-2 pl-8 text-blue-600 mb-1 cursor-pointer hover:underline text-xs" onClick=${()=>updateData({showSalesDetails: !data.showSalesDetails})}>${data.showSalesDetails ? '- Hide' : '+ Show'} Sales Discounts / Allowances Row</div>
                ${data.showSalesDetails && html`
                    ${renderRow('Less: Sales Discounts', 'salesDisc', expSalesDisc, false, 'pl-8')}
                    ${renderRow('Less: Sales Returns and Allowances', 'salesRet', expSalesRet, false, 'pl-8')}
                `}
                <div className="border-t border-black mt-1 mb-2"></div>
                ${renderRow('Net Sales', 'netSales', expNetSales, false, 'pl-4 font-bold')}

                <div className="mt-4 mb-2 font-bold text-gray-800">Less: Cost of Goods Sold</div>
                ${renderRow('[Inventory Account - beginning]', 'begInv', expBegInv, false, 'pl-4', '[Beg Inv]', true, 'begInvLabel')}
                ${renderRow('[Purchases Account]', 'purchases', expPurch, false, 'pl-4', '[Purchases]', true, 'purchasesLabel')}
                <div className="flex items-center gap-2 pl-8 text-blue-600 mb-1 cursor-pointer hover:underline text-xs" onClick=${()=>updateData({showPurchDetails: !data.showPurchDetails})}>${data.showPurchDetails ? '- Hide' : '+ Show'} Purchase Discounts / Allowances Row</div>
                ${data.showPurchDetails && html`
                      ${renderRow('Less: Purchase Discounts', 'purchDisc', expPurchDisc, false, 'pl-12')}
                      ${renderRow('Less: Purchase Returns And Allowances', 'purchRet', expPurchRet, false, 'pl-12')}
                `}
                ${renderRow('Net Purchases', 'netPurch', expNetPurch, false, 'pl-8 font-semibold')}
                ${renderRow('[Freight-in / Transportation In]', 'freightIn', expFreightIn, false, 'pl-8', '[Freight In]', true, 'freightInLabel')}
                <div className="border-t border-gray-300 mt-1 mb-1"></div>
                ${renderRow('Total Cost of Goods Purchased', 'costPurch', expCostPurch, false, 'pl-4 font-semibold')}
                <div className="border-t border-black mt-1 mb-1"></div>
                ${renderRow('Total Goods Available for Sale', 'tgas', expTGAS, false, 'pl-4 font-bold')}
                ${renderRow('Less: [Inventory Account - ending]', 'endInv', expEndInv, false, 'pl-4', '[End Inv]', true, 'endInvLabel')}
                <div className="border-b border-black mb-2"></div>
                ${renderRow('Cost of Goods Sold', 'cogs', expCOGS, false, 'pl-0 font-bold text-red-700')}
                
                <div className="border-b-2 border-black mb-4"></div>
                ${renderRow('GROSS INCOME', 'grossIncome', expGross, false, 'pl-0 font-bold')}

                ${type === 'Single' ? html`
                    <div className="mt-4 font-bold text-gray-800">Other Operating & Non-Operating Income</div>
                    <table className="w-full mb-1"><tbody>${(otherIncomeRows).map((r,i) => html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="[Other operating / non-operating income]" value=${r.label} onChange=${(e)=>handleArrChange('otherIncome',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('otherIncome',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">${!isReadOnly && html`<button onClick=${()=>deleteRow('otherIncome',i)}><${Trash2} size=${12}/></button>`}</td></tr>`)}</tbody></table><button onClick=${()=>addRow('otherIncome')} class=${btnStyle}><${Plus} size=${12}/> Add Revenue Row</button>
                    ${renderRow('Total Revenues', 'totalRevenues', expGross, false, 'pl-0 font-bold')}

                    <div className="mt-4 font-bold text-gray-800">Expenses</div>
                    <table className="w-full mb-1"><tbody>${expenseRows.map((r,i) => html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="[Operating / Non-operating Expense Account]" value=${r.label} onChange=${(e)=>handleArrChange('expenses',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('expenses',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">${!isReadOnly && html`<button onClick=${()=>deleteRow('expenses',i)}><${Trash2} size=${12}/></button>`}</td></tr>`)}</tbody></table><button onClick=${()=>addRow('expenses')} class=${btnStyle}><${Plus} size=${12}/> Add Expense Row</button>
                    ${renderRow('Total Expenses', 'totalExpenses', expOpExp, false, 'pl-0 font-bold')}
                ` : html`
                    <div className="mt-4 font-bold text-gray-800">Operating Expenses</div>
                    <table className="w-full mb-1"><tbody>${opExpenseRows.map((r,i) => {
                        const matchKey = allAccounts.find(k => k.toLowerCase() === r.label.trim().toLowerCase());
                        const isExpense = matchKey ? getAccountType(matchKey) === 'Expense' : false;
                        const adjustedBal = matchKey ? Math.abs(getBal(matchKey)) : 0;
                        const isCorrect = isExpense && checkField(r.amount, adjustedBal);
                        
                        return html`<tr key=${i}><td className="p-1 pl-4">
                            <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('opExpenses',i,'label',e.target.value)} expectedOptions=${expectedTotals && calculatedTotals.ledger ? Object.keys(calculatedTotals.ledger).map(k=>({name:k})) : []} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Operating Expense Account]"/>
                        </td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('opExpenses',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">
                        ${!isReadOnly 
                            ? html`<button onClick=${()=>deleteRow('opExpenses',i)}><${Trash2} size=${12}/></button>`
                            : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                        }
                        </td></tr>`;
                    })}</tbody></table><button onClick=${()=>addRow('opExpenses')} class=${btnStyle}><${Plus} size=${12}/> Add Expense Row</button>
                    ${renderRow('Total Operating Expenses', 'totalOpExpenses', expOpExp, false, 'pl-4 font-semibold')}
                    <div className="mt-6 border-t-2 border-black pt-2">
                         ${renderRow('Net Income', 'niAfter', expNI, false, 'pl-0 font-bold')}
                    </div>
                `}
            </div>
        </div>
    `;
};

// --- MerchPerpetualIS (Updated getBal) ---
const MerchPerpetualIS = ({ data, onChange, isReadOnly, showFeedback, calculatedTotals, type = "Single", expectedTotals }) => {
    const { ledger, adjustments } = calculatedTotals;

    const allAccounts = useMemo(() => {
        const s = new Set(Object.keys(ledger));
        if(adjustments && Array.isArray(adjustments)) {
             adjustments.forEach(adj => { 
                 if (adj.drAcc) s.add(adj.drAcc); 
                 if (adj.crAcc) s.add(adj.crAcc); 
             });
        }
        return Array.from(s);
    }, [ledger, adjustments]);

    const getBal = (accName) => { 
        const lowerName = accName.toLowerCase();
        let bal = 0;
        
        const ledgerKey = Object.keys(ledger).find(k => k.toLowerCase() === lowerName);
        if (ledgerKey) {
            bal += (ledger[ledgerKey].debit || 0) - (ledger[ledgerKey].credit || 0);
        }

        if(adjustments && Array.isArray(adjustments)) {
             adjustments.forEach(adj => {
                 if (adj.drAcc && adj.drAcc.toLowerCase() === lowerName) bal += adj.amount;
                 if (adj.crAcc && adj.crAcc.toLowerCase() === lowerName) bal -= adj.amount;
             });
        }
        return bal; 
    };

    const expSales = Math.abs(getBal('Sales')); 
    const expSalesDisc = Math.abs(getBal('Sales Discounts')); 
    const expSalesRet = Math.abs(getBal('Sales Returns and Allowances')); 
    const expNetSales = expSales - expSalesDisc - expSalesRet;
    const expCOGS = Math.abs(getBal('Cost of Goods Sold')); 
    const expGross = expNetSales - expCOGS;
    
    const totalISDebits = calculatedTotals.isDr; 
    const expOpExp = totalISDebits - (expSalesDisc + expSalesRet + expCOGS);
    const expOpIncome = expGross - expOpExp;
    const expNonOp = 0; 
    const expNI = expOpIncome + expNonOp;

    const updateData = (updates) => onChange({ ...data, ...updates });
    const handleAmountChange = (key, val) => {
        if (/^[0-9.,\-() ]*$/.test(val)) updateData({ [key]: val });
    };

    const renderRow = (label, valueKey, expected, isDeduction=false, indent='pl-4', placeholder='0.00', showInput=true, labelKey=null) => html`<div className="flex justify-between items-center py-1">
        ${labelKey 
            ? html`<span className=${indent}><input type="text" className="w-64 outline-none bg-transparent border-b border-gray-300 focus:border-blue-500 placeholder-gray-400 italic" placeholder=${label} value=${data?.[labelKey] || ''} onChange=${(e)=>updateData({ [labelKey]: e.target.value })} disabled=${isReadOnly}/></span>`
            : html`<span className=${indent}>${label}</span>`
        }
        ${showInput ? html`<div className="w-full"><${FeedbackInput} value=${data?.[valueKey]} onChange=${(e)=>handleAmountChange(valueKey, e.target.value)} expected=${expected} isDeduction=${isDeduction} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder=${placeholder}/></div>` : ''}
    </div>`;
    
    const expenseRows = data?.expenses || [{label:'', amount:''}];
    const opExpenseRows = data?.opExpenses || [{label:'', amount:''}];
    const otherIncomeRows = data?.otherIncome || [{label:'', amount:''}];

    const handleArrChange = (key, idx, field, val) => { const arr = [...(data[key] || [{label:'', amount:''} ])]; arr[idx] = {...arr[idx], [field]:val}; updateData({[key]: arr}); };
    const handleArrAmountChange = (key, idx, val) => {
        if (/^[0-9.,\-() ]*$/.test(val)) handleArrChange(key, idx, 'amount', val);
    };
    const addRow = (key) => updateData({ [key]: [...(data[key]||[{label:'',amount:''}]), { label: '', amount: '' }] });
    const deleteRow = (key, idx) => { const arr = [...(data[key]||[])]; if(arr.length<=1)return; updateData({[key]: arr.filter((_, i)=>i!==idx)}); };

    return html`
        <div className="border rounded bg-white flex flex-col h-full shadow-sm">
            <div className="bg-blue-100 p-2 font-bold text-gray-800 border-b text-center text-sm">Income Statement (${type}-Step Perpetual)</div>
            <div className="p-4 overflow-y-auto flex-1 text-xs">
                ${type === 'Single' ? html`<div className="mb-2 font-bold text-gray-800">Revenues</div>` : html`<div className="mb-2 font-bold text-gray-800">Operating Revenues</div>`}
                ${renderRow('[Sales Account]', 'sales', expSales, false, 'pl-4', '0.00', true, 'salesLabel')}
                <div className="flex items-center gap-2 pl-8 text-blue-600 mb-1 cursor-pointer hover:underline text-xs" onClick=${()=>updateData({showSalesDetails: !data.showSalesDetails})}>${data.showSalesDetails ? '- Hide' : '+ Show'} Sales Discounts / Allowances Row</div>
                ${data.showSalesDetails && html`
                    ${renderRow('Less: Sales Discounts', 'salesDisc', expSalesDisc, false, 'pl-8')}
                    ${renderRow('Less: Sales Returns and Allowances', 'salesRet', expSalesRet, false, 'pl-8')}
                `}
                <div className="border-t border-black mt-1 mb-2"></div>
                ${renderRow('Net Sales', 'netSales', expNetSales, false, 'pl-4 font-bold')}

                ${renderRow('Cost of Goods Sold', 'cogs', expCOGS, true, 'pl-4', '0.00', true, 'cogsLabel')}
                
                <div className="border-b-2 border-black mb-4"></div>
                ${renderRow('GROSS INCOME', 'grossIncome', expGross, false, 'pl-0 font-bold')}

                ${type === 'Single' ? html`
                    <div className="mt-4 font-bold text-gray-800">Other Operating & Non-Operating Income</div>
                    <table className="w-full mb-1"><tbody>${(otherIncomeRows).map((r,i) => html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="[Other operating / non-operating income]" value=${r.label} onChange=${(e)=>handleArrChange('otherIncome',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('otherIncome',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">${!isReadOnly && html`<button onClick=${()=>deleteRow('otherIncome',i)}><${Trash2} size=${12}/></button>`}</td></tr>`)}</tbody></table><button onClick=${()=>addRow('otherIncome')} class=${btnStyle}><${Plus} size=${12}/> Add Revenue Row</button>
                    ${renderRow('Total Revenues', 'totalRevenues', expGross, false, 'pl-0 font-bold')}

                    <div className="mt-4 font-bold text-gray-800">Expenses</div>
                    <table className="w-full mb-1"><tbody>${expenseRows.map((r,i) => html`<tr key=${i}><td className="p-1 pl-4"><input type="text" className="w-full bg-transparent" placeholder="[Operating / Non-operating Expense Account]" value=${r.label} onChange=${(e)=>handleArrChange('expenses',i,'label',e.target.value)} disabled=${isReadOnly}/></td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('expenses',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">${!isReadOnly && html`<button onClick=${()=>deleteRow('expenses',i)}><${Trash2} size=${12}/></button>`}</td></tr>`)}</tbody></table><button onClick=${()=>addRow('expenses')} class=${btnStyle}><${Plus} size=${12}/> Add Expense Row</button>
                    ${renderRow('Total Expenses', 'totalExpenses', expOpExp, false, 'pl-0 font-bold')}
                ` : html`
                    <div className="mt-4 font-bold text-gray-800">Operating Expenses</div>
                    <table className="w-full mb-1"><tbody>${opExpenseRows.map((r,i) => {
                        const matchKey = allAccounts.find(k => k.toLowerCase() === r.label.trim().toLowerCase());
                        const isExpense = matchKey ? getAccountType(matchKey) === 'Expense' : false;
                        const adjustedBal = matchKey ? Math.abs(getBal(matchKey)) : 0;
                        const isCorrect = isExpense && checkField(r.amount, adjustedBal);

                        return html`<tr key=${i}><td className="p-1 pl-4">
                             <${FeedbackLabel} value=${r.label} onChange=${(e)=>handleArrChange('opExpenses',i,'label',e.target.value)} expectedOptions=${expectedTotals && calculatedTotals.ledger ? Object.keys(calculatedTotals.ledger).map(k=>({name:k})) : []} showFeedback=${showFeedback} isReadOnly=${isReadOnly} placeholder="[Operating Expense Account]"/>
                        </td><td className="w-24"><input type="text" className="w-full text-right bg-transparent border-b" value=${r.amount} onChange=${(e)=>handleArrAmountChange('opExpenses',i,e.target.value)} disabled=${isReadOnly}/></td><td className="w-6 text-center">
                        ${!isReadOnly 
                            ? html`<button onClick=${()=>deleteRow('opExpenses',i)}><${Trash2} size=${12}/></button>`
                            : (showFeedback && html`<span>${isCorrect ? html`<${Check} size=${12} className="text-green-600"/>` : html`<${X} size=${12} className="text-red-500"/>`}</span>`)
                        }
                        </td></tr>`;
                    })}</tbody></table><button onClick=${()=>addRow('opExpenses')} class=${btnStyle}><${Plus} size=${12}/> Add Expense Row</button>
                    ${renderRow('Total Operating Expenses', 'totalOpExpenses', expOpExp, false, 'pl-4 font-semibold')}
                    <div className="mt-6 border-t-2 border-black pt-2">
                         ${renderRow('Net Income', 'niAfter', expNI, false, 'pl-0 font-bold')}
                    </div>
                `}
            </div>
        </div>
    `;
};

// --- MAIN EXPORT ---

export default function Step06FinancialStatements({ ledgerData: propLedger, adjustments: propAdjustments, activityData, data, onChange, showFeedback, isReadOnly }) {
    
    const ledgerData = propLedger || activityData?.ledger || {};
    const adjustments = propAdjustments || activityData?.adjustments || [];
    
    const config = activityData?.config || {};
    const { fsFormat, includeCashFlows, businessType, inventorySystem } = { 
        fsFormat: 'Multi', 
        businessType: 'Merchandising', 
        inventorySystem: 'Periodic', 
        ...config 
    };

    const isMerch = businessType === 'Merchandising' || businessType === 'Manufacturing';
    const isPerpetual = inventorySystem === 'Perpetual';

    const calculatedTotals = { 
        ...useMemo(() => {
            const s = new Set(Object.keys(ledgerData)); 
            if(adjustments && Array.isArray(adjustments)) {
                 adjustments.forEach(adj => { 
                     if (adj.drAcc) s.add(adj.drAcc); 
                     if (adj.crAcc) s.add(adj.crAcc); 
                 }); 
            }
            let isDr = 0; let isCr = 0;
            Array.from(s).forEach(acc => {
                if(!acc) return;
                const lBal = (ledgerData[acc]?.debit || 0) - (ledgerData[acc]?.credit || 0);
                let aDr = 0; let aCr = 0;
                if(adjustments && Array.isArray(adjustments)) {
                    adjustments.forEach(a => { if(a.drAcc === acc) aDr += a.amount; if(a.crAcc === acc) aCr += a.amount; });
                }
                const atbNet = lBal + (aDr - aCr);
                const atbDr = atbNet > 0 ? atbNet : 0; const atbCr = atbNet < 0 ? Math.abs(atbNet) : 0;
                const type = getAccountType(acc);
                if (type === 'Revenue' || type === 'Expense') { isDr += atbDr; isCr += atbCr; }
            });
            return { isDr, isCr, ledger: ledgerData, adjustments };
        }, [ledgerData, adjustments])
    };

    const handleSCEChange = (newData) => onChange('sce', newData);
    const handleBSChange = (key, val) => onChange('bs', { ...data.bs, [key]: val });
    const handleSCFChange = (key, val) => onChange('scf', { ...data.scf, [key]: val });

    const sceEndingCapital = parseUserValue(data.sce?.endCapital);

    const validationResult = useMemo(() => {
        if (!showFeedback && !isReadOnly) return null;
        const safeActivityData = activityData || { transactions: [], beginningBalances: null, config: {} };
        return validateStep06(ledgerData, adjustments, safeActivityData, data);
    }, [ledgerData, adjustments, activityData, data, showFeedback, isReadOnly]);

    const expectedTotals = validationResult?.expected?.totals;
    const expectedData = validationResult?.expected; 

    const renderIncomeStatement = () => {
        const currentData = data.is || {};
        const props = {
            data: currentData,
            onChange: (d) => onChange('is', d),
            isReadOnly,
            showFeedback,
            calculatedTotals,
            expectedTotals 
        };
        
        if (!isMerch) {
             return html`<${MerchPeriodicIS} type=${fsFormat} ...${props} />`;
        } else {
            return isPerpetual 
                ? html`<${MerchPerpetualIS} type=${fsFormat} ...${props} />`
                : html`<${MerchPeriodicIS} type=${fsFormat} ...${props} />`;
        }
    };

    return html`
        <div className="flex flex-col h-[calc(100vh-140px)]">
            ${(false && showFeedback || isReadOnly) && validationResult && html`
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 mb-4 flex justify-between items-center shadow-sm w-full flex-shrink-0">
                    <span className="font-bold flex items-center gap-2"><${AlertCircle} size=${18}/> Results:</span>
                    <span className="font-mono font-bold text-lg">Score: ${validationResult.score || 0} of ${validationResult.maxScore || 0} - (${validationResult.letterGrade || 'IR'})</span>
                </div>
            `}
            <div className="h-1/2 overflow-hidden border-b-4 border-gray-300 pb-2 bg-white relative">
                <${WorksheetSourceView} ledgerData=${ledgerData} adjustments=${adjustments} />
            </div>
            <div className="h-1/2 overflow-hidden bg-gray-100 p-2">
                <div className="h-full w-full overflow-y-auto">
                    ${includeCashFlows 
                        ? html`
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full min-h-[500px]">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="flex-1 flex flex-col h-1/2">${renderIncomeStatement()}</div>
                                    <div className="flex-1 flex flex-col h-1/2">
                                        <${StatementOfChangesInEquity} data=${data.sce} onChange=${handleSCEChange} isReadOnly=${isReadOnly} showFeedback=${showFeedback} calculatedTotals=${calculatedTotals} activityData=${activityData || {}} expectedTotals=${expectedTotals}/>
                                    </div>
                                </div>
                                <div className="h-full">
                                    <${BalanceSheet} data=${data.bs} onChange=${(d)=>onChange('bs', d)} isReadOnly=${isReadOnly} showFeedback=${showFeedback} sceEndingCapital=${sceEndingCapital} expectedTotals=${expectedTotals} expectedData=${expectedData}/>
                                </div>
                                <div className="h-full">
                                    <${FinancialStatementForm} title="Statement of Cash Flows" headerColor="bg-indigo-100" data=${data.scf} onChange=${(k, v) => handleSCFChange(k, v)} isReadOnly=${isReadOnly} />
                                </div>
                            </div>
                        ` 
                        : html`
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full min-h-[400px]">
                                <div className="h-full">${renderIncomeStatement()}</div>
                                <div className="h-full">
                                    <${StatementOfChangesInEquity} data=${data.sce} onChange=${handleSCEChange} isReadOnly=${isReadOnly} showFeedback=${showFeedback} calculatedTotals=${calculatedTotals} activityData=${activityData || {}} expectedTotals=${expectedTotals}/>
                                </div>
                                <div className="h-full">
                                    <${BalanceSheet} data=${data.bs} onChange=${(d)=>onChange('bs', d)} isReadOnly=${isReadOnly} showFeedback=${showFeedback} sceEndingCapital=${sceEndingCapital} expectedTotals=${expectedTotals} expectedData=${expectedData}/>
                                </div>
                            </div>
                        `
                    }
                </div>
            </div>
        </div>
    `;
}
