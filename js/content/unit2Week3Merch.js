// Content for Unit 2 Week 3: Merchandising Business - Financial Statements
export const unit2Week3Data = {
    week3: [
        {
            day: "Day 1",
            topic: "Worksheet and Ending Inventory",
            content: `
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="font-bold text-blue-900">Learning Goal</p>
                    <p class="text-blue-800">Understand how to extend the Worksheet for a merchandising business, specifically focusing on the treatment of Merchandise Inventory under the Periodic System.</p>
                </div>

                <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
                
                <div class="space-y-8 mb-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">1. The Merchandising Worksheet</h3>
                        <p class="text-gray-700 mb-4">
                            The worksheet for a merchandiser is similar to a service business, but with key differences depending on the inventory system used.
                        </p>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h4 class="font-bold text-green-800 mb-2">Perpetual System</h4>
                                <p class="text-sm text-green-900 mb-2">Easier to handle in the worksheet.</p>
                                <ul class="list-disc pl-5 text-sm text-green-900 space-y-1">
                                    <li><strong>Inventory Account:</strong> The Trial Balance already shows the <em>Ending Inventory</em> figure (because it's updated real-time).</li>
                                    <li><strong>COGS Account:</strong> Already exists in the Trial Balance.</li>
                                    <li><strong>Action:</strong> Simply extend the Inventory balance to the <strong>Balance Sheet Debit</strong> column.</li>
                                </ul>
                            </div>
                            <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                <h4 class="font-bold text-orange-800 mb-2">Periodic System</h4>
                                <p class="text-sm text-orange-900 mb-2">Requires specific adjustment steps.</p>
                                <ul class="list-disc pl-5 text-sm text-orange-900 space-y-1">
                                    <li><strong>Trial Balance:</strong> Shows <em>Beginning Inventory</em>.</li>
                                    <li><strong>Adjustment:</strong> There is no "COGS" account yet. We must calculate it using the Income Statement columns.</li>
                                    <li><strong>Action:</strong> Use the "Direct Extension" method or "Adjustment" method to replace Beginning Inv with Ending Inv.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">2. Handling Inventory in Periodic Worksheet</h3>
                        <p class="text-gray-700 mb-4">
                            The most common method places both inventory figures in the <strong>Income Statement</strong> columns to simulate the COGS calculation.
                        </p>

                        <table class="w-full text-sm text-left text-gray-600 border border-gray-300">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th class="px-4 py-3 border-r w-1/3">Item</th>
                                    <th class="px-4 py-3 border-r">Income Statement Cols</th>
                                    <th class="px-4 py-3">Balance Sheet Cols</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <td class="px-4 py-3 font-medium text-gray-900 border-r">Beginning Inventory</td>
                                    <td class="px-4 py-3 border-r text-red-600">DEBIT <br><span class="text-xs text-gray-500">(Added to cost)</span></td>
                                    <td class="px-4 py-3 text-gray-400">-</td>
                                </tr>
                                <tr class="bg-gray-50 border-b">
                                    <td class="px-4 py-3 font-medium text-gray-900 border-r">Ending Inventory</td>
                                    <td class="px-4 py-3 border-r text-green-600">CREDIT <br><span class="text-xs text-gray-500">(Deducted from cost)</span></td>
                                    <td class="px-4 py-3 text-blue-600 font-bold">DEBIT <br><span class="text-xs text-gray-500">(Asset carried forward)</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200 text-sm text-yellow-800">
                            <strong>Note:</strong> By Debiting Beg. Inv. and Crediting End. Inv. in the Income Statement columns, the difference combined with Purchases automatically results in the Cost of Goods Sold.
                        </div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    type: "mcq",
                    question: "In a Periodic Inventory System worksheet, the amount shown for Merchandise Inventory in the Trial Balance columns represents:",
                    options: [
                        "Ending Inventory",
                        "Beginning Inventory",
                        "Cost of Goods Sold",
                        "Net Purchases"
                    ],
                    correctIndex: 1,
                    explanation: "Under the periodic system, the inventory account is not touched during the year, so the Trial Balance still shows the balance from the start of the year."
                },
                {
                    type: "mcq",
                    question: "Where is the Ending Inventory entered in the worksheet under the Periodic System?",
                    options: [
                        "Income Statement Debit and Balance Sheet Credit",
                        "Income Statement Credit and Balance Sheet Debit",
                        "Trial Balance Debit only",
                        "Adjusted Trial Balance Credit only"
                    ],
                    correctIndex: 1,
                    explanation: "It is credited in the Income Statement (to reduce COGS/Cost available) and debited in the Balance Sheet (to record the asset)."
                },
                {
                    type: "mcq",
                    question: "In a Perpetual System, why is no special adjustment needed for Ending Inventory in the worksheet?",
                    options: [
                        "Because merchandisers don't use worksheets.",
                        "Because the Cost of Goods Sold is estimated.",
                        "Because the Inventory account balance is already updated to the current Ending Inventory amount.",
                        "Because Inventory is an expense."
                    ],
                    correctIndex: 2,
                    explanation: "Perpetual systems update the inventory account with every purchase and sale, so the Trial Balance already reflects the correct ending asset value."
                },
                {
                    type: "problem",
                    question: "In the Income Statement columns of a worksheet, the Debit column total is ₱500,000 and the Credit column total is ₱650,000. What is the result?",
                    answer: "Net Income of ₱150,000",
                    explanation: "Credits (Revenues) exceed Debits (Expenses). 650,000 - 500,000 = 150,000 Net Income."
                },
                {
                    type: "problem",
                    question: "If Beginning Inventory is ₱20,000 and Ending Inventory is ₱35,000. In the Periodic Worksheet Income Statement columns, you will enter:",
                    answer: "Debit ₱20,000 and Credit ₱35,000",
                    explanation: "Debit the Beginning Inventory (Cost) and Credit the Ending Inventory (Deduction from Cost)."
                }
            ]
        },
        {
            day: "Day 2",
            topic: "Net Sales, COGS, Gross Profit, and Operating Expenses",
            content: `
                <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <p class="font-bold text-indigo-900">Learning Goal</p>
                    <p class="text-indigo-800">Master the computation of the core components of a Merchandising Income Statement: Net Sales, Cost of Goods Sold (COGS), and Gross Profit.</p>
                </div>

                <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
                
                <div class="space-y-6 mb-6">
                    <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h3 class="text-lg font-bold text-purple-700 mb-2">1. Net Sales</h3>
                        <p class="text-sm text-gray-600 mb-3">The actual revenue earned from selling goods.</p>
                        <div class="bg-gray-100 p-3 rounded font-mono text-sm border-l-4 border-purple-400">
                            <p>Gross Sales</p>
                            <p class="text-red-600">- Sales Returns & Allowances</p>
                            <p class="text-red-600 border-b border-gray-400 pb-1">- Sales Discounts</p>
                            <p class="font-bold pt-1">= Net Sales</p>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h3 class="text-lg font-bold text-blue-700 mb-2">2. Cost of Goods Sold (Periodic)</h3>
                        <p class="text-sm text-gray-600 mb-3">The logic: What we had + What we bought - What is left = What we sold.</p>
                        <div class="bg-gray-100 p-3 rounded font-mono text-sm border-l-4 border-blue-400">
                            <p>Beginning Inventory</p>
                            <p>+ Net Purchases <span class="text-xs text-gray-500">(Purchases - Returns - Discounts + Freight In)</span></p>
                            <p class="border-b border-gray-400 pb-1 font-semibold">= Goods Available for Sale (TGAS)</p>
                            <p class="text-red-600 pt-1 border-b border-black pb-1">- Ending Inventory</p>
                            <p class="font-bold pt-1">= Cost of Goods Sold</p>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h3 class="text-lg font-bold text-green-700 mb-2">3. The Bottom Line Steps</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-green-50 p-3 rounded">
                                <h4 class="font-bold text-green-800">Gross Profit</h4>
                                <p class="font-mono text-sm mt-1">Net Sales - COGS</p>
                            </div>
                            <div class="bg-yellow-50 p-3 rounded">
                                <h4 class="font-bold text-yellow-800">Net Income</h4>
                                <p class="font-mono text-sm mt-1">Gross Profit - Operating Expenses</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    type: "problem",
                    question: "Calculate Net Sales: Gross Sales ₱150,000; Sales Returns ₱5,000; Sales Discounts ₱2,000; Freight Out ₱1,500.",
                    answer: "₱143,000",
                    explanation: "150,000 - 5,000 - 2,000 = 143,000. (Note: Freight Out is an Operating Expense, NOT a deduction from Sales).",
                    isCurrency: true
                },
                {
                    type: "problem",
                    question: "Calculate Net Purchases: Purchases ₱50,000; Purchase Returns ₱3,000; Purchase Discounts ₱1,000; Freight In ₱2,500.",
                    answer: "₱48,500",
                    explanation: "50,000 - 3,000 - 1,000 + 2,500 = 48,500. Freight In increases the cost.",
                    isCurrency: true
                },
                {
                    type: "problem",
                    question: "Calculate COGS: Beginning Inventory ₱10,000; Net Purchases ₱48,500; Ending Inventory ₱12,000.",
                    answer: "₱46,500",
                    explanation: "(10,000 + 48,500) - 12,000 = 46,500.",
                    isCurrency: true
                },
                {
                    type: "problem",
                    question: "Calculate Gross Profit: Net Sales ₱100,000; COGS ₱60,000; Operating Expenses ₱15,000.",
                    answer: "₱40,000",
                    explanation: "Net Sales (100,000) - COGS (60,000) = 40,000. Operating expenses are deducted later to find Net Income.",
                    isCurrency: true
                },
                {
                    type: "mcq",
                    question: "Which of the following is an Operating Expense?",
                    options: [
                        "Cost of Goods Sold",
                        "Sales Returns and Allowances",
                        "Freight Out",
                        "Freight In"
                    ],
                    correctIndex: 2,
                    explanation: "Freight Out (Delivery Expense) is a selling expense. Freight In is part of COGS. Returns are contra-revenue."
                }
            ]
        },
        {
            day: "Day 3",
            topic: "Single and Multi-Step Income Statement",
            content: `
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="font-bold text-blue-900">Learning Goal</p>
                    <p class="text-blue-800">Distinguish between Single-Step and Multi-Step Income Statements and understand the classification of Operating Expenses.</p>
                </div>

                <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">1. Single-Step vs. Multi-Step</h3>
                    
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left border border-gray-300">
                            <thead class="bg-gray-100 uppercase text-xs">
                                <tr>
                                    <th class="px-4 py-3 border-r">Format</th>
                                    <th class="px-4 py-3 border-r">Structure</th>
                                    <th class="px-4 py-3">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b">
                                    <td class="px-4 py-3 font-bold text-gray-900 border-r">Single-Step</td>
                                    <td class="px-4 py-3 border-r">
                                        Total Revenues <br>
                                        <span class="text-red-600">- Total Expenses</span><br>
                                        = Net Income
                                    </td>
                                    <td class="px-4 py-3">Service businesses or simple operations. No Gross Profit line.</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 font-bold text-gray-900 border-r">Multi-Step</td>
                                    <td class="px-4 py-3 border-r">
                                        Net Sales - COGS = <strong>Gross Profit</strong><br>
                                        - Operating Expenses<br>
                                        = Net Income
                                    </td>
                                    <td class="px-4 py-3">Merchandising businesses. Highlights performance of core sales vs. expenses.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">2. Classifying Operating Expenses</h3>
                    <p class="mb-4 text-gray-700">In a Multi-Step statement, expenses are often split into two categories:</p>

                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-purple-50 p-4 rounded border border-purple-200">
                            <h4 class="font-bold text-purple-900">Selling Expenses</h4>
                            <p class="text-xs text-purple-800 mb-2 italic">Directly related to making sales.</p>
                            <ul class="list-disc pl-5 text-sm text-purple-900">
                                <li>Sales Salaries & Commissions</li>
                                <li>Advertising Expense</li>
                                <li>Freight-Out (Delivery Expense)</li>
                                <li>Store Supplies Expense</li>
                                <li>Depreciation: Store Equipment</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 p-4 rounded border border-gray-300">
                            <h4 class="font-bold text-gray-900">Administrative Expenses</h4>
                            <p class="text-xs text-gray-600 mb-2 italic">General management & office support.</p>
                            <ul class="list-disc pl-5 text-sm text-gray-800">
                                <li>Office Salaries</li>
                                <li>Utilities Expense (General)</li>
                                <li>Office Supplies Expense</li>
                                <li>Depreciation: Office Equipment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    type: "mcq",
                    question: "Which line item appears in a Multi-Step Income Statement but NOT in a Single-Step Income Statement?",
                    options: [
                        "Net Income",
                        "Cost of Goods Sold",
                        "Gross Profit",
                        "Total Expenses"
                    ],
                    correctIndex: 2,
                    explanation: "Gross Profit is a subtotal calculated only in the Multi-Step format. Single-step lumps COGS with other expenses."
                },
                {
                    type: "mcq",
                    question: "Advertising Expense is classified as:",
                    options: [
                        "Administrative Expense",
                        "Selling Expense",
                        "Other Expense",
                        "Cost of Goods Sold"
                    ],
                    correctIndex: 1,
                    explanation: "Advertising is directly related to the effort of selling goods."
                },
                {
                    type: "mcq",
                    question: "The salary of the company president is typically classified as:",
                    options: [
                        "Selling Expense",
                        "Administrative (General) Expense",
                        "Cost of Goods Sold",
                        "Other Expense"
                    ],
                    correctIndex: 1,
                    explanation: "Management salaries are general administrative costs."
                },
                {
                    type: "problem",
                    question: "Calculate Total Operating Expenses: Sales Commissions ₱10,000; Office Salaries ₱20,000; Freight Out ₱2,000; Interest Expense ₱1,000.",
                    answer: "₱32,000",
                    explanation: "10,000 (Selling) + 20,000 (Admin) + 2,000 (Selling) = 32,000. Interest Expense is 'Other Expense', not Operating.",
                    isCurrency: true
                },
                {
                    type: "problem",
                    question: "Calculate Net Income: Gross Profit ₱50,000; Selling Expenses ₱15,000; Admin Expenses ₱10,000.",
                    answer: "₱25,000",
                    explanation: "50,000 - 15,000 - 10,000 = 25,000.",
                    isCurrency: true
                }
            ]
        },
        {
            day: "Day 4",
            topic: "Balance Sheet",
            content: `
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="font-bold text-blue-900">Learning Goal</p>
                    <p class="text-blue-800">Prepare a Classified Balance Sheet for a merchandising business, focusing on the placement of Merchandise Inventory.</p>
                </div>

                <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">1. Merchandise Inventory in the Balance Sheet</h3>
                    <p class="text-gray-700 mb-4">
                        The only major difference between a service and merchandising Balance Sheet is the addition of the <strong>Merchandise Inventory</strong> account.
                    </p>

                    <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mb-6">
                        <p class="font-bold text-yellow-900">Classification:</p>
                        <p class="text-yellow-800">It is a <strong>Current Asset</strong> because it is expected to be sold within the operating cycle (usually one year).</p>
                    </div>

                    <h4 class="font-bold text-gray-800 mb-2">Order of Liquidity (Current Assets)</h4>
                    <ul class="bg-gray-50 p-4 rounded border border-gray-200 list-decimal pl-6 space-y-2 text-sm font-mono text-gray-700">
                        <li>Cash and Cash Equivalents</li>
                        <li>Short-term Investments</li>
                        <li>Accounts Receivable</li>
                        <li class="bg-blue-100 font-bold p-1 rounded -ml-1 pl-1 text-blue-900">Merchandise Inventory <span class="text-xs font-normal text-blue-700">(Less liquid than AR)</span></li>
                        <li>Prepaid Expenses (Supplies, Insurance)</li>
                    </ul>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">2. Balance Sheet Formats</h3>
                    
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="border p-4 rounded">
                            <h4 class="font-bold text-center border-b pb-2 mb-2">Report Form</h4>
                            <div class="text-center text-sm text-gray-600 space-y-2">
                                <div class="bg-green-100 p-1">Assets</div>
                                <div>|</div>
                                <div class="bg-red-100 p-1">Liabilities</div>
                                <div>|</div>
                                <div class="bg-blue-100 p-1">Owner's Equity</div>
                                <p class="italic mt-2 text-xs">(Vertical listing)</p>
                            </div>
                        </div>
                        <div class="border p-4 rounded">
                            <h4 class="font-bold text-center border-b pb-2 mb-2">Account Form</h4>
                            <div class="flex justify-between text-sm text-gray-600 gap-2">
                                <div class="bg-green-100 p-1 w-1/2 text-center h-24 flex items-center justify-center">Assets</div>
                                <div class="w-1/2 space-y-2">
                                    <div class="bg-red-100 p-1 text-center h-10 flex items-center justify-center">Liabilities</div>
                                    <div class="bg-blue-100 p-1 text-center h-12 flex items-center justify-center">Equity</div>
                                </div>
                            </div>
                            <p class="italic mt-2 text-xs text-center">(Side-by-side: Assets Left, L+E Right)</p>
                        </div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    type: "mcq",
                    question: "Merchandise Inventory is classified as:",
                    options: [
                        "Non-current Asset",
                        "Current Asset",
                        "Current Liability",
                        "Owner's Equity"
                    ],
                    correctIndex: 1,
                    explanation: "Inventory is a Current Asset because it is held for sale in the normal operating cycle."
                },
                {
                    type: "mcq",
                    question: "In the Order of Liquidity, where does Merchandise Inventory usually appear?",
                    options: [
                        "Before Cash",
                        "Before Accounts Receivable",
                        "After Accounts Receivable but before Prepaid Expenses",
                        "After Property, Plant, and Equipment"
                    ],
                    correctIndex: 2,
                    explanation: "It is less liquid than Receivables (must be sold first), but more liquid than Prepaids (which are consumed)."
                },
                {
                    type: "mcq",
                    question: "Which of the following accounts would NOT appear on the Balance Sheet?",
                    options: [
                        "Accumulated Depreciation",
                        "Unearned Revenue",
                        "Cost of Goods Sold",
                        "Accounts Payable"
                    ],
                    correctIndex: 2,
                    explanation: "Cost of Goods Sold is an expense account and appears on the Income Statement."
                },
                {
                    type: "problem",
                    question: "Calculate Total Current Assets: Cash ₱50,000; Accounts Receivable ₱30,000; Inventory ₱40,000; Equipment ₱100,000; Accounts Payable ₱20,000.",
                    answer: "₱120,000",
                    explanation: "Cash (50k) + AR (30k) + Inventory (40k) = 120,000. Equipment is Non-Current. AP is a Liability.",
                    isCurrency: true
                },
                {
                    type: "problem",
                    question: "Calculate Owner's Equity (End): Assets ₱500,000; Liabilities ₱200,000.",
                    answer: "₱300,000",
                    explanation: "Assets - Liabilities = Equity. 500,000 - 200,000 = 300,000.",
                    isCurrency: true
                }
            ]
        }
    ]
};
