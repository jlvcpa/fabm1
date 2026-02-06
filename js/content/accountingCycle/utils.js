// --- js/content/accountingCycle/utils.js ---

export const APP_VERSION = "Version: 2025-12-10 17:11 PST";
export const EQUITY_CAUSES = ['', 'Increase in Capital', 'Decrease in Capital', 'Increase in Drawings', 'Decrease in Drawings', 'Increase in Income', 'Decrease in Income', 'Increase in Expense', 'Decrease in Expense'];
export const CANONICAL_ACCOUNT_ORDER = ["Cash", "Accounts Receivable", "Merchandise Inventory", "Supplies", "Prepaid Rent", "Equipment", "Accumulated Depreciation - Equipment", "Furniture", "Accumulated Depreciation - Furniture", "Building", "Accumulated Depreciation - Building", "Land", "Accounts Payable", "Notes Payable", "Salaries Payable", "Utilities Payable", "Interest Payable", "Unearned Revenue", "Owner, Capital", "Owner, Drawings", "Share Capital", "Retained Earnings", "Dividends", "Service Revenue", "Sales", "Sales Discounts", "Sales Returns and Allowances", "Interest Income", "Cost of Goods Sold", "Purchases", "Purchase Discounts", "Purchase Returns and Allowances", "Freight In", "Freight Out", "Rent Expense", "Salaries Expense", "Utilities Expense", "Supplies Expense", "Repairs and Maintenance Expense", "Dues and Subscriptions Expense", "Depreciation Expense", "Insurance Expense", "Advertising Expense", "Interest Expense"];
export const STEPS = [
    { id: 1, title: 'Transaction Analysis', description: 'Identify impact on Assets, Liabilities, and Equity' },
    { id: 2, title: 'Journalizing Transactions', description: 'Record transactions in the General Journal' },
    { id: 3, title: 'Posting to Ledger', description: 'Post journal entries to T-Accounts/Ledger' },
    { id: 4, title: 'Preparing the Unadjusted Trial Balance', description: 'Prepare Unadjusted Trial Balance' },
    { id: 5, title: 'Preparing the 10-Columns Worksheet', description: 'Prepare Worksheet with Adjustments' },
    { id: 6, title: 'Preparing the Financial Statements', description: 'Prepare Income Statement and Balance Sheet' },
    { id: 7, title: 'Journalizing and Posting the Adjusting Entries', description: 'Journalize and Post Adjusting Entries' },
    { id: 8, title: 'Journalizing and Posting the Closing Entries', description: 'Journalize and Post Closing Entries' },
    { id: 9, title: 'Preparing the Post-Closing Trial Balance', description: 'Prepare Post-Closing Trial Balance' },
    { id: 10, title: 'Reversing Entries', description: 'Setup new period and Reversing Entries' },
];

// --- UTILS: ACCOUNT SORTING & CLASSIFICATION ---

export const getAccountType = (acc) => {
    const name = acc.trim();
    
    // 1. ASSETS
    if (['Cash', 'Accounts Receivable', 'Merchandise Inventory', 'Supplies', 'Prepaid Rent', 'Equipment', 'Furniture', 'Building', 'Land'].includes(name)) return 'Asset';
    if (name.includes('Prepaid') || name.includes('Receivable') || name.includes('Accumulated Depreciation')) return 'Asset';

    // 2. LIABILITIES
    if (name.includes('Payable') || name.includes('Unearned')) return 'Liability';

    // 3. EQUITY (Income Summary is strictly Equity for classification, but sorted specifically later)
    if (name.includes('Capital') || name.includes('Drawings') || name.includes('Retained Earnings') || name.includes('Dividends')) return 'Equity';

    // 4. REVENUE
    if (name === 'Income Summary'  || name.includes('Revenue') || name === 'Sales' || name.includes('Income') || name.includes('Sales Discounts') || name.includes('Sales Returns')) return 'Revenue';

    // 5. EXPENSES
    if (name.includes('Expense') || name === 'Cost of Goods Sold' || name === 'Purchases' || name.includes('Purchase Discounts') || name.includes('Purchase Returns') || name === 'Freight In' || name === 'Freight Out') return 'Expense';

    return 'Asset'; // Default
};

// Helper to assign a specific "Rank" to accounts for sorting
const getAccountRank = (accountName) => {
    const name = accountName.trim();
    const type = getAccountType(name);
    const n = name.toLowerCase();

    // RANK 100: ASSETS
    if (type === 'Asset') {
        if (n.includes('cash')) return 100;
        if (n.includes('receivable')) return 110;
        if (n.includes('inventory')) return 120;
        if (n.includes('supplies') || n.includes('prepaid')) return 130;
        // Non-Current
        if (n.includes('land')) return 140;
        if (n.includes('building')) return 150;
        if (n.includes('accumulated') && n.includes('building')) return 151;
        if (n.includes('equipment') || n.includes('machinery') || n.includes('vehicle')) return 160;
        if (n.includes('accumulated')) return 161; // General Accum Dep
        return 199; // Other Assets
    }

    // RANK 200: LIABILITIES
    if (type === 'Liability') {
        if (n.includes('accounts payable')) return 200;
        if (n.includes('notes payable')) return 210;
        if (n.includes('accrued expenses payable')) return 220;
        if (n.includes('salaries') || n.includes('wages')) return 230;
        if (n.includes('interest')) return 240;
        if (n.includes('unearned')) return 250;
        if (n.includes('mortgage') || n.includes('loan')) return 260; // Non-current
        return 299;
    }

    // RANK 300: EQUITY
    if (type === 'Equity') {
        if (n.includes('capital') || n.includes('share')) return 300;
        if (n.includes('retained')) return 310;
        if (n.includes('drawings') || n.includes('withdrawal') || n.includes('dividends')) return 320;
        // User Request: Income Summary is last among equity
        return 350;
    }

    // RANK 400: REVENUE
    if (type === 'Revenue') {
        if (n.includes('income summary')) return 399; 
        if (n === 'sales' || n === 'sales revenue') return 400;
        if (n.includes('sales returns')) return 410;
        if (n.includes('sales discounts')) return 420;
        if (n === 'service income' || n === 'service revenue') return 430;
        if (n.includes('interest income')) return 490; // Other income last
        return 450;
    }

    // RANK 500: COST OF GOODS SOLD / PURCHASES (Specific Request: Before Op Expenses)
    if (type === 'Expense') {
        // COGS Group
        if (n === 'cost of goods sold') return 500;
        if (n === 'purchases') return 510;
        if (n.includes('purchase returns')) return 520;
        if (n.includes('purchase discounts')) return 530;
        if (n.includes('freight in')) return 540;

        // RANK 600: OPERATING EXPENSES
        return 600; 
    }

    return 999; // Catch-all
};

export const sortAccounts = (accounts) => {
    return [...accounts].sort((a, b) => {
        const rankA = getAccountRank(a);
        const rankB = getAccountRank(b);

        if (rankA !== rankB) {
            return rankA - rankB; // Sort by Rank Group
        }
        // If same rank group, sort alphabetically
        return a.localeCompare(b);
    });
};

export const ActivityHelper = {
    getRubricHTML: (taskNum, taskTitle) => {
        let competency;
        if (taskNum === 1) competency = 'To correctly analyze business transactions by determining the effect on the fundamental accounting equation (Assets = Liabilities + Equity).';
        else if (taskNum === 2) competency = 'To accurately record business transactions in the general journal following the double-entry system (Debits = Credits).';
        else if (taskNum === 3) competency = 'To accurately post journal entries to the appropriate General Ledger (T-Accounts) and calculate the correct running balance for each account.';
        else if (taskNum === 4) competency = 'To prepare an Unadjusted Trial Balance by extracting the final balances from all General Ledger accounts.';
        else if (taskNum === 5) competency = 'To prepare a 10-column worksheet, applying adjustments and correctly extending balances to Financial Statement columns.';
        else competency = `To correctly complete the process for: ${taskTitle}.`;

        return `<div class="rubric-box bg-white p-4 rounded-lg border-2 border-indigo-300 shadow-md mb-6"><div class="flex justify-between items-end mb-2 border-b-2 pb-1"><h4 class="font-extrabold text-indigo-700 print:text-black">TASK ${taskNum}: ${taskTitle.toUpperCase()} RUBRIC</h4></div><div class="overflow-x-auto"><table class="min-w-full text-xs border-collapse border border-gray-400"><thead><tr class="header-bg text-center text-white"><th class="p-2 border border-gray-300 w-1/5">Competency</th><th class="p-2 border border-gray-300 bg-green-600/90 print:bg-white">Advanced (A)</th><th class="p-2 border border-gray-300 bg-blue-600/90 print:bg-white">Proficient (P)</th><th class="p-2 border border-gray-300 bg-yellow-600/90 print:bg-white">Developing (D)</th><th class="p-2 border border-gray-300 bg-red-600/90 print:bg-white">Intervention Required (IR)</th></tr></thead><tbody><tr class="align-top"><td class="p-2 border border-gray-300 italic">${competency}</td><td class="p-2 border border-gray-300 text-green-800 print:text-black">Excellent performance. (95-100%)</td><td class="p-2 border border-gray-300 text-blue-800 print:text-black">Good performance. (85-94.9%)</td><td class="p-2 border border-gray-300 text-yellow-800 print:text-black">Acceptable performance. (75-84.9%)</td><td class="p-2 border border-gray-300 text-red-800 print:text-black">Unacceptable performance. (&lt;75%)</td></tr></tbody></table></div></div>`;
    },
    getPrintStudentInfoHTML: (stepTitle, stepDescription) => {
         return `<div id="student-print-info" class="hidden"><div class="w-full mb-2 text-sm text-black font-bold font-mono border-b-2 border-black pb-2"><div class="flex justify-between items-center"><span class="text-left">CN: ___</span><span class="text-right">Section: ___</span></div><div class="flex justify-between items-center"><span class="text-left">Name: ______________________</span><span class="text-right">Date: ________________</span></div></div><h1 id="task-header-title" class="font-extrabold text-2xl mb-1 text-black">${stepTitle}</h1><p class="text-sm text-gray-700">${stepDescription}</p></div>`;
    },
    getCustomPrintHeaderHTML: () => `<header class="text-center mb-8 pb-4 border-b-4 border-indigo-600 header-bg rounded-t-lg p-4 print:block hidden print-header-custom"><h1 class="text-3xl md:text-4xl font-extrabold text-yellow-300">Performance Task</h1></header>`,
    getCustomPrintFooterHTML: () => `<div id="print-footer" class="hidden print:block fixed bottom-0 left-0 right-0 z-50 bg-white border-t-8 border-indigo-600"></div>`,
    
    // --- UPDATED INSTRUCTIONS GENERATOR ---
    getInstructionsHTML: (stepId, taskTitle, validAccounts = [], isSubsequentYear = false, beginningBalances = null, deferredExpenseMethod = 'Asset', deferredIncomeMethod = 'Liability', inventorySystem = 'Periodic', ledgerData = null, adjustments = []) => {
        let instructionsHTML = "";
        let accountsList = "";
        
        const showDeferredNote = (deferredExpenseMethod === 'Expense' || deferredIncomeMethod === 'Income');
        const deferredLine = showDeferredNote ? "<li>Expense or Income method is to be used in accounting for Deferred Items.</li>" : "";

        if (stepId === 2 || stepId === 3) {
            if (stepId === 3 && isSubsequentYear && beginningBalances) {
                 const accountsWithBalances = validAccounts.map(a => {
                     let balText = "";
                     if (beginningBalances.balances && beginningBalances.balances[a]) {
                         const b = beginningBalances.balances[a];
                         const net = b.dr - b.cr;
                         if (net !== 0) {
                             balText = ` (Beg: ${Math.abs(net).toLocaleString()} ${net > 0 ? 'Dr' : 'Cr'})`;
                         }
                     }
                     return `${a}${balText}`;
                 });
                 accountsList = `<span class="font-mono text-xs text-blue-700 font-bold">${accountsWithBalances.join(', ')}</span>`;
            } else {
                 accountsList = `<span class="font-mono text-xs text-blue-700 font-bold">${validAccounts.join(', ')}</span>`;
            }
        }

        if (stepId === 1) {
            instructionsHTML = `
                <li>Analyze the increase or decrease effects of each transactions on assets, liabilities, and equity using <strong>${inventorySystem} Inventory System</strong>. If it affects equity, determine the cause.</li>
                ${deferredLine}
                <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
            `;
        } else if (stepId === 2) {
            instructionsHTML = `
                <li>Journalize the transactions using <strong>${inventorySystem} Inventory System</strong> and use the following accounts: ${accountsList}</li>
                ${deferredLine}
                <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
            `;
        } else if (stepId === 3) {
            let firstBullet = `Setup the general ledger using the following accounts (chart of accounts): ${accountsList}`;
            
            if (isSubsequentYear) {
                instructionsHTML = `
                    <li>${firstBullet}</li>
                    ${deferredLine}
                    <li>Enter the beginning balances of the account general ledger created using the amounts provided together with the accounts in the first instruction - YYYY in the first row, date column. Date column second row shall be Mmm dd or Mmm, d. Second row particulars shall be BB that stands for beginning balance, 2nd row PR is blank, and then the debit or credit beginning balance amount.</li>
                    <li>Post the journal entries to the appropriate General Ledger accounts.</li>
                    <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
                `;
            } else {
                instructionsHTML = `
                    <li>${firstBullet}</li>
                    ${deferredLine}
                    <li>Post the journal entries to the appropriate General Ledger accounts.</li>
                    <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
                `;
            }
        } else if (stepId === 4) {
            instructionsHTML = `
                <li>Prepare the Unadjusted Trial Balance based on the balances in the General Ledger.</li>
                ${deferredLine}
                <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
            `;
        } else if (stepId === 5) {
            // --- TASK 5 SPECIAL INSTRUCTIONS ---
            
            // 1. Generate Ledger Balances View (Boxes)
            let ledgerBoxes = '';
            if (ledgerData) {
                const accountsSet = new Set(Object.keys(ledgerData));
                // Add accounts from adjustments
                if (Array.isArray(adjustments)) {
                    adjustments.forEach(adj => {
                        if(adj.drAcc) accountsSet.add(adj.drAcc);
                        if(adj.crAcc) accountsSet.add(adj.crAcc);
                        if (Array.isArray(adj.solution)) {
                            adj.solution.forEach(line => {
                                if (line.account && !line.isExplanation && line.account !== "No Entry") {
                                    accountsSet.add(line.account);
                                }
                            });
                        }
                    });
                }
                const allAccounts = sortAccounts(Array.from(accountsSet).filter(a => a));
                
                ledgerBoxes = allAccounts.map(acc => {
                    const accData = ledgerData[acc] || { debit: 0, credit: 0 };
                    const bal = accData.debit - accData.credit;
                    return `<div class="bg-white border px-2 py-1 text-xs rounded shadow-sm inline-block mr-2 mb-2 font-mono"><span class="font-semibold font-sans text-gray-600">${acc}:</span> <span class="font-bold text-blue-800">${Math.abs(bal).toLocaleString()}</span></div>`;
                }).join('');
            }

            // 2. Generate Adjustments List
            let adjustmentsList = '';
            if (Array.isArray(adjustments)) {
                adjustmentsList = adjustments.map(adj => `<li>${adj.desc || adj.description}</li>`).join('');
            }

            instructionsHTML = `
                <li>Complete the 10-column worksheet using the following unadjusted general ledger accounts and corresponding balances:
                    <div class="mt-2 p-2 bg-blue-100 rounded border border-blue-200">
                        ${ledgerBoxes}
                    </div>
                </li>
                <li>Applying the following adjustments:
                    <ul class="list-decimal list-inside text-xs space-y-1 mt-1 p-2 bg-yellow-50 rounded border border-yellow-200 text-yellow-900">
                        ${adjustmentsList}
                    </ul>
                </li>
                ${deferredLine}
                <li>Complete all required fields by extended the balances correctly. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
            `;
        } else {
             instructionsHTML = `
                <li>Perform the necessary procedures to complete the ${taskTitle}.</li>
                ${deferredLine}
                <li>Complete all required fields. Enter amounts without commas and decimal places. Round off centavos to the nearest peso. Validate each task to unlock the next one.</li>
            `;
        }

        return `
            <p class="font-bold">Instructions:</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
                ${instructionsHTML}
            </ul>
        `;
    }
};

// --- NEW HELPER ---
export const getLetterGrade = (score, maxScore) => {
    if (maxScore === 0) return 'IR';
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 95) return 'A';    // Advanced
    if (percentage >= 85) return 'P';    // Proficient
    if (percentage >= 75) return 'D';    // Developing
    return 'IR';                         // Intervention Required
};
