// Content for Unit 2 Week 2: Merchandising Business
// FIXED: We use 'export const' to create a named export.

export const unit2Week2Data = {
    week2: [
        {
    day: "Day 1",
    topic: "Recording Purchases and Sales & Trade Discounts",
    content: `
        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p class="font-bold text-blue-900">Learning Goal</p>
            <p class="text-blue-800">Master the recording of purchases and sales under Perpetual and Periodic systems, including the handling of Trade Discounts.</p>
        </div>

        <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
        
        <div class="space-y-8 mb-6">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-3">1. Perpetual vs. Periodic Inventory Systems</h3>
                <p class="text-gray-700 mb-4">
                    Accounting for merchandising businesses relies on how they track inventory.
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 class="font-bold text-green-800 mb-2">Perpetual System</h4>
                        <ul class="list-disc pl-5 text-sm text-green-900 space-y-1">
                            <li><strong>Real-time updates:</strong> Records are updated immediately after every transaction.</li>
                            <li><strong>Account used:</strong> "Merchandise Inventory" (Asset).</li>
                            <li><strong>Control:</strong> High control; updates COGS instantly.</li>
                        </ul>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h4 class="font-bold text-orange-800 mb-2">Periodic System</h4>
                        <ul class="list-disc pl-5 text-sm text-orange-900 space-y-1">
                            <li><strong>Occasional updates:</strong> Inventory updated only at period-end via physical count.</li>
                            <li><strong>Account used:</strong> "Purchases" (Expense-like account).</li>
                            <li><strong>Control:</strong> Lower control; COGS is calculated at month-end.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-3">2. Trade Discounts: The "Hidden" Deduction</h3>
                
                
                <p class="text-gray-700 mb-4 mt-4">
                    Suppliers often offer a <strong>Trade Discount</strong> to wholesalers or bulk buyers. This is a reduction from the <em>List Price</em> (Catalog Price) to determine the actual price charged.
                </p>
                
                <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <p class="font-bold text-red-800">The Golden Rule of Trade Discounts:</p>
                    <p class="text-red-700 text-sm">
                        Trade discounts are <strong>NEVER recorded</strong> in the journal. We calculate the <strong>Invoice Price</strong> (Net Price) first, and that is the only number we use in our accounting records.
                    </p>
                </div>

                <div class="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
                    <p><strong>Example:</strong> Item List Price is ₱100,000 with a 20% Trade Discount.</p>
                    <p class="mt-2 flex justify-between w-64"><span>List Price:</span> <span>₱100,000</span></p>
                    <p class="flex justify-between w-64"><span>Less: Discount:</span> <span class="text-red-500">(20,000)</span></p>
                    <div class="border-t border-gray-400 mt-1 pt-1 font-bold flex justify-between w-64">
                        <span>Invoice Price:</span> <span class="text-green-600">₱ 80,000</span>
                    </div>
                    <p class="text-xs text-gray-500 mt-2 italic">*Only the ₱80,000 is recorded.</p>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-3">3. Recording Purchases (Buying)</h3>
                <p class="text-gray-700 mb-4 text-sm">
                    <strong>Scenario:</strong> Purchased goods with a List Price of ₱10,000, Trade Discount of 10%, on account. <br>
                    <strong>Invoice Price to Record:</strong> ₱9,000.
                </p>
                
                <table class="w-full text-sm text-left text-gray-600 border border-gray-300">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 border-r w-1/4">System</th>
                            <th class="px-4 py-3 w-3/4">Journal Entry</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <td class="px-4 py-3 font-medium text-gray-900 border-r align-top pt-4">Perpetual System</td>
                            <td class="px-4 py-3">
                                <table class="w-full font-mono text-xs">
                                    <tr class="text-gray-400 border-b border-gray-100">
                                        <th class="text-left pb-1">Account Title</th>
                                        <th class="text-right pb-1 w-20">Debit</th>
                                        <th class="text-right pb-1 w-20">Credit</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2 text-blue-600">Merchandise Inventory</td>
                                        <td class="pt-2 text-right">9,000</td>
                                        <td class="pt-2 text-right"></td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4 text-red-600">Accounts Payable</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">9,000</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <td class="px-4 py-3 font-medium text-gray-900 border-r align-top pt-4">Periodic System</td>
                            <td class="px-4 py-3">
                                <table class="w-full font-mono text-xs">
                                    <tr class="text-gray-400 border-b border-gray-100">
                                        <th class="text-left pb-1">Account Title</th>
                                        <th class="text-right pb-1 w-20">Debit</th>
                                        <th class="text-right pb-1 w-20">Credit</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2 text-blue-600">Purchases</td>
                                        <td class="pt-2 text-right">9,000</td>
                                        <td class="pt-2 text-right"></td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4 text-red-600">Accounts Payable</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">9,000</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-3">4. Recording Sales (Selling)</h3>
                <p class="text-gray-700 mb-4 text-sm">
                    <strong>Scenario:</strong> Sold goods with a List Price of ₱20,000, Trade Discount 5%. <br>
                    <strong>Invoice Price (Revenue):</strong> ₱19,000. <br>
                    <strong>Cost of Goods Sold (Cost):</strong> ₱10,000 (Given).
                </p>

                <table class="w-full text-sm text-left text-gray-600 border border-gray-300">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 border-r w-1/4">System</th>
                            <th class="px-4 py-3 w-3/4">Journal Entry</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <td class="px-4 py-3 font-medium text-gray-900 border-r align-top pt-4">Perpetual System</td>
                            <td class="px-4 py-3">
                                <p class="text-xs font-bold text-gray-500 mb-1">To record Sales Revenue:</p>
                                <table class="w-full font-mono text-xs mb-4">
                                    <tr class="text-gray-400 border-b border-gray-100">
                                        <th class="text-left pb-1">Account Title</th>
                                        <th class="text-right pb-1 w-20">Debit</th>
                                        <th class="text-right pb-1 w-20">Credit</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2 text-blue-600">Accounts Receivable</td>
                                        <td class="pt-2 text-right">19,000</td>
                                        <td class="pt-2 text-right"></td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4 text-red-600">Sales</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">19,000</td>
                                    </tr>
                                </table>
                                
                                <p class="text-xs font-bold text-gray-500 mb-1">To record Cost of Goods Sold:</p>
                                <table class="w-full font-mono text-xs">
                                    <tr class="text-gray-400 border-b border-gray-100">
                                        <th class="text-left pb-1">Account Title</th>
                                        <th class="text-right pb-1 w-20">Debit</th>
                                        <th class="text-right pb-1 w-20">Credit</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2 text-blue-600">Cost of Goods Sold</td>
                                        <td class="pt-2 text-right">10,000</td>
                                        <td class="pt-2 text-right"></td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4 text-red-600">Merchandise Inventory</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">10,000</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="bg-white">
                            <td class="px-4 py-3 font-medium text-gray-900 border-r align-top pt-4">Periodic System</td>
                            <td class="px-4 py-3">
                                <p class="text-xs font-bold text-gray-500 mb-1">To record Sales Revenue:</p>
                                <table class="w-full font-mono text-xs">
                                    <tr class="text-gray-400 border-b border-gray-100">
                                        <th class="text-left pb-1">Account Title</th>
                                        <th class="text-right pb-1 w-20">Debit</th>
                                        <th class="text-right pb-1 w-20">Credit</th>
                                    </tr>
                                    <tr>
                                        <td class="pt-2 text-blue-600">Accounts Receivable</td>
                                        <td class="pt-2 text-right">19,000</td>
                                        <td class="pt-2 text-right"></td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4 text-red-600">Sales</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">19,000</td>
                                    </tr>
                                </table>
                                <p class="text-xs text-gray-400 mt-3 italic text-center border-t border-dashed pt-2">(No entry for Cost of Goods Sold)</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    exercises: [
        // --- 5 THEORY QUESTIONS ---
        {
            type: "mcq",
            question: "Which of the following best describes how a Trade Discount is recorded in the General Journal?",
            options: [
                "Debit Sales Discount, Credit Accounts Receivable",
                "Debit Trade Discount Expense",
                "It is not recorded; transactions are recorded at the Net (Invoice) Price",
                "It is recorded as a liability"
            ],
            correctIndex: 2,
            explanation: "Trade discounts are deducted mentally or on scratch paper. The journal entry only uses the final Invoice Price."
        },
        {
            type: "mcq",
            question: "In a Periodic System, which account is debited when inventory is purchased?",
            options: ["Merchandise Inventory", "Purchases", "Cost of Goods Sold", "Accounts Payable"],
            correctIndex: 1,
            explanation: "The Periodic system uses the temporary 'Purchases' account for buying goods."
        },
        {
            type: "mcq",
            question: "Why do Perpetual systems require two entries for every sale?",
            options: [
                "To double the revenue recorded.",
                "One entry records the Revenue (Sales), the other records the Expense (COGS) and inventory reduction.",
                "To account for trade discounts separately.",
                "One is for the buyer, one is for the seller."
            ],
            correctIndex: 1,
            explanation: "Perpetual systems match the revenue earned with the cost incurred immediately at the point of sale."
        },
        {
            type: "mcq",
            question: "If a product has a List Price of ₱1,000 and a 10% Trade Discount, what amount appears on the invoice?",
            options: ["₱1,100", "₱1,000", "₱900", "₱100"],
            correctIndex: 2,
            explanation: "List Price (1,000) minus 10% (100) equals the Invoice Price (900)."
        },
        {
            type: "mcq",
            question: "Which account is credited when a company buys inventory on account (credit) in a Perpetual system?",
            options: ["Cash", "Sales", "Accounts Receivable", "Accounts Payable"],
            correctIndex: 3,
            explanation: "Purchasing on account creates a liability, which is recorded by crediting Accounts Payable."
        },

        // --- 5 PROBLEM SOLVING QUESTIONS (Journal Entries with Trade Discounts) ---
        {
            type: "problem",
            question: "<strong>Journalizing (Perpetual - Purchase):</strong> <br>Purchased goods with a List Price of ₱50,000 less a 20% trade discount. The purchase was made on credit.",
            answer: `Calculation:
List Price:    50,000
Less 20%:     (10,000)
Invoice Price: 40,000

Journal Entry:
Dr. Merchandise Inventory   40,000
    Cr. Accounts Payable       40,000`,
            explanation: "We only record the Invoice Price of ₱40,000. The ₱10,000 discount is ignored in the journal."
        },
        {
            type: "problem",
            question: "<strong>Journalizing (Periodic - Purchase):</strong> <br>Purchased goods with a List Price of ₱20,000 less a 10% trade discount. The terms were COD (Cash on Delivery).",
            answer: `Calculation:
List Price:    20,000
Less 10%:      (2,000)
Invoice Price: 18,000

Journal Entry:
Dr. Purchases               18,000
    Cr. Cash                   18,000`,
            explanation: "Under Periodic, we debit 'Purchases'. Since it's COD, we credit Cash. We use the net amount of ₱18,000."
        },
        {
            type: "problem",
            question: "<strong>Journalizing (Perpetual - Sale):</strong> <br>Sold inventory with a List Price of ₱100,000 less a 25% trade discount on account. The cost of the goods sold was ₱40,000.",
            answer: `Calculation:
List Price:    100,000
Less 25%:      (25,000)
Invoice Price:  75,000

Entry 1 (Revenue):
Dr. Accounts Receivable     75,000
    Cr. Sales                  75,000

Entry 2 (Cost):
Dr. Cost of Goods Sold      40,000
    Cr. Mdse. Inventory        40,000`,
            explanation: "Revenue is recorded at the Invoice Price (₱75k). The Cost entry uses the cost given (₱40k)."
        },
        {
            type: "problem",
            question: "<strong>Journalizing (Periodic - Sale):</strong> <br>Sold inventory with a List Price of ₱30,000 less a 5% trade discount for Cash. The cost of the goods sold was ₱15,000.",
            answer: `Calculation:
List Price:    30,000
Less 5%:       (1,500)
Invoice Price: 28,500

Journal Entry:
Dr. Cash                    28,500
    Cr. Sales                  28,500

(No entry for COGS in Periodic)`,
            explanation: "In Periodic, we only record the Sales Revenue at the Invoice Price. The cost is ignored until the end-of-period count."
        },
        {
            type: "problem",
            question: "<strong>Journalizing (Chain Discount):</strong> <br>Purchased inventory (Periodic System) with a List Price of ₱10,000. The supplier offered trade discounts of 20% and 10%. Determine the Invoice Price and the Journal Entry (Credit).",
            answer: `Step 1: 10,000 - 20% = 8,000
Step 2:  8,000 - 10% = 7,200
Invoice Price: ₱7,200

Journal Entry:
Dr. Purchases               7,200
    Cr. Accounts Payable       7,200`,
            explanation: "Apply the discounts sequentially (Chain Discount). 10k minus 2k is 8k. Then 8k minus 800 is 7,200."
        }
    ]
},
        {
  day: "Day 2",
  topic: "Discounts, Returns, and Net Calculations (Periodic vs. Perpetual)",
  content: 
    // --- SECTION: HEADER & LEARNING GOALS ---
    `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p class="font-bold text-blue-900">Learning Goal</p>
        <p class="text-blue-800">Master the recording of Trade Discounts, Purchase/Sales Discounts, and Returns.</p>
        <p class="text-blue-800">Differentiate between Periodic and Perpetual entries for these transactions.</p>
    </div>

    <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
    <ul class="list-none space-y-8 mb-6">` +

    // --- SECTION 1: TYPES OF DISCOUNTS ---
    `<li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">1. Types of Discounts</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-bold text-purple-700">Trade Discounts</h4>
                <p class="text-sm text-gray-700 mt-2">Reductions from the list price given to customers (e.g., wholesalers) before the transaction is recorded.</p>
                <p class="text-sm text-gray-900 font-bold mt-2">Treatment: Not recorded in the books. Record the transaction at the net price (List - Trade Discount).</p>
            </div>
            <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-bold text-green-700">Cash Discounts (Sales/Purchase Discounts)</h4>
                <p class="text-sm text-gray-700 mt-2">Incentives for early payment (e.g., 2/10, n/30).</p>
                <p class="text-sm text-gray-900 font-bold mt-2">Treatment: Recorded in the books when payment is made/received within the discount period.</p>
            </div>
        </div>
    </li>` +

    // --- SECTION 2: SYSTEM COMPARISON (INTRO & TABLE HEADER) ---
// Added a visual aid tag for the system comparison concept
`   <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2. Recording Returns & Discounts: System Comparison</h3>
        
        <p class="text-gray-700 mb-4">
            The key difference lies in the <strong>Purchase</strong> side (Inventory vs. Purchases). On the <strong>Sales</strong> side, Revenue entries are identical, but Perpetual systems require a second entry to update Cost of Goods Sold (COGS).
        </p>

        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-700 border border-gray-200">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th class="px-4 py-3 w-1/4">Transaction Type</th>
                        <th class="px-4 py-3 w-1/3">Periodic System<br><span class="text-gray-500 normal-case font-normal">(Uses Temporary Accounts)</span></th>
                        <th class="px-4 py-3 w-1/3">Perpetual System<br><span class="text-gray-500 normal-case font-normal">(Updates Inventory Directly)</span></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">` +

                    // --- TABLE ROW: PURCHASE GOODS ---
                    `<tr class="bg-white hover:bg-gray-50">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Purchase Goods</span>
                            <span class="text-xs text-gray-500 italic">Ex: Bought $1,000 goods on credit.</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-100"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-red-700 pt-1">Purchases</td><td class="text-right pt-1">1,000</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Payable</td><td></td><td class="text-right">1,000</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-100"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-blue-700 pt-1">Inventory</td><td class="text-right pt-1">1,000</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Payable</td><td></td><td class="text-right">1,000</td></tr>
                            </table>
                        </td>
                    </tr>` +

                    // --- TABLE ROW: PURCHASE RETURNS ---
                    `<tr class="bg-gray-50 hover:bg-gray-100">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Purchase Return</span>
                            <span class="text-xs text-gray-500 italic">Ex: Returned $100 defective goods.</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Accounts Payable</td><td class="text-right pt-1">100</td><td></td></tr>
                                <tr><td class="text-red-700 pl-4">Purch. Returns & Allow</td><td></td><td class="text-right">100</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Accounts Payable</td><td class="text-right pt-1">100</td><td></td></tr>
                                <tr><td class="text-blue-700 pl-4">Inventory</td><td></td><td class="text-right">100</td></tr>
                            </table>
                        </td>
                    </tr>` +

                    // --- TABLE ROW: PURCHASE DISCOUNT ---
                    `<tr class="bg-white hover:bg-gray-50">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Purchase Discount</span>
                            <span class="text-xs text-gray-500 italic">Ex: Paid $900 invoice; 2% discount taken ($18).</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-100"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Accounts Payable</td><td class="text-right pt-1">900</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Cash</td><td></td><td class="text-right">882</td></tr>
                                <tr><td class="text-red-700 pl-4">Purchase Discounts</td><td></td><td class="text-right">18</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-100"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Accounts Payable</td><td class="text-right pt-1">900</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Cash</td><td></td><td class="text-right">882</td></tr>
                                <tr><td class="text-blue-700 pl-4">Inventory</td><td></td><td class="text-right">18</td></tr>
                            </table>
                        </td>
                    </tr>` +

                    // --- TABLE ROW: SALES DISCOUNT ---
                    `<tr class="bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-400">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Sales Discount</span>
                            <span class="text-xs text-gray-500 italic">Ex: Collected $1,000 owing; 2% discount given ($20).</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-yellow-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Cash</td><td class="text-right pt-1">980</td><td></td></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Discounts</td><td class="text-right pt-1">20</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Receivable</td><td></td><td class="text-right">1,000</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <span class="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Same as Periodic</span>
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-yellow-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-gray-600 pt-1">Cash</td><td class="text-right pt-1">980</td><td></td></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Discounts</td><td class="text-right pt-1">20</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Receivable</td><td></td><td class="text-right">1,000</td></tr>
                            </table>
                        </td>
                    </tr>` +

                    // --- TABLE ROW: SALES RETURN (PHYSICAL RETURN) ---
                    `<tr class="bg-gray-50 hover:bg-gray-100">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Sales Return</span>
                            <span class="text-xs text-gray-500 italic">Ex: Customer returned item sold for $500 (Cost $300).</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-gray-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Ret. & Allow</td><td class="text-right pt-1">500</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Receivable</td><td></td><td class="text-right">500</td></tr>
                                <tr><td colspan="3" class="text-gray-400 italic pt-2 text-[10px] text-center">(No COGS entry made)</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs mb-3 border-b border-gray-200 pb-2">
                                <tr class="text-gray-400"><th class="font-normal text-left pb-1">Entry 1: Revenue</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Ret. & Allow</td><td class="text-right pt-1">500</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Rec.</td><td></td><td class="text-right">500</td></tr>
                            </table>
                            <table class="w-full text-xs">
                                <tr class="text-gray-400"><th class="font-normal text-left pb-1">Entry 2: Cost</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-blue-700 pt-1">Inventory</td><td class="text-right pt-1">300</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">COGS</td><td></td><td class="text-right">300</td></tr>
                            </table>
                        </td>
                    </tr>` +

                    // --- TABLE ROW: SALES ALLOWANCE (GOODS KEPT) ---
                    `<tr class="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-300">
                        <td class="px-4 py-3 align-top">
                            <span class="font-bold text-gray-900 block">Sales Allowance</span>
                            <span class="text-xs text-gray-600 block mb-1 font-semibold">(Variant: Customer keeps goods)</span>
                            <span class="text-xs text-gray-500 italic">Ex: Granted $50 credit for scratch; customer kept item.</span>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-purple-200"><th class="font-normal text-left pb-1">Account</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Ret. & Allow</td><td class="text-right pt-1">50</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Receivable</td><td></td><td class="text-right">50</td></tr>
                            </table>
                        </td>
                        <td class="px-4 py-3">
                            <table class="w-full text-xs">
                                <tr class="text-gray-400 border-b border-purple-200"><th class="font-normal text-left pb-1">Entry 1: Revenue Only</th><th class="font-normal text-right w-14 pb-1">Dr</th><th class="font-normal text-right w-14 pb-1">Cr</th></tr>
                                <tr><td class="text-purple-700 pt-1">Sales Ret. & Allow</td><td class="text-right pt-1">50</td><td></td></tr>
                                <tr><td class="text-gray-600 pl-4">Accounts Receivable</td><td></td><td class="text-right">50</td></tr>
                            </table>
                            <div class="mt-2 text-[10px] text-gray-600 bg-white p-2 rounded border border-purple-200">
                                <strong>Crucial Difference:</strong> No 2nd entry for Inventory/COGS because the goods were not returned.
                            </div>
                        </td>
                    </tr>` +

                // --- END TABLE ---
                `</tbody>
            </table>
        </div>` +
    
    // --- SECTION 3: NET CALCULATIONS & FOOTER ---
    `<h3 class="text-xl font-bold text-gray-800 mb-3">3. Net Calculation Formulas</h3>
        <div class="space-y-4">
            
            <div class="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                <h5 class="font-bold text-indigo-900">Net Purchases</h5>
                <p class="font-mono text-sm mt-1 mb-3">Purchases - Returns & Allowances - Discounts = <span class="font-bold">Net Purchases</span></p>
                
                <div class="bg-white p-3 rounded border border-indigo-200">
                    <table class="w-full text-xs font-mono text-gray-600">
                        <tbody>
                            <tr>
                                <td class="pb-1">Purchases</td>
                                <td class="text-right pb-1">$10,000</td>
                            </tr>
                            <tr>
                                <td class="pb-1">Less: Purchase Returns and Allowances</td>
                                <td class="text-right pb-1">($500)</td>
                            </tr>
                            <tr>
                                <td class="pb-1">Less: Purchase Discounts</td>
                                <td class="text-right pb-1">($200)</td>
                            </tr>
                            <tr class="font-bold text-indigo-700">
                                <td class="pt-2 border-t border-gray-300">Net Purchases</td>
                                <td class="text-right pt-2 border-t border-gray-300">$9,300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-xs text-indigo-700 mt-2 italic">(Note: Freight-In is added later to get Cost of Goods Purchased)</p>
            </div>

            <div class="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                <h5 class="font-bold text-orange-900">Net Sales</h5>
                <p class="font-mono text-sm mt-1 mb-3">Sales - Sales Returns & Allowances - Sales Discounts = <span class="font-bold">Net Sales</span></p>
                
                <div class="bg-white p-3 rounded border border-orange-200">
                    <table class="w-full text-xs font-mono text-gray-600">
                        <tbody>
                            <tr>
                                <td class="pb-1">Gross Sales</td>
                                <td class="text-right pb-1">$20,000</td>
                            </tr>
                            <tr>
                                <td class="pb-1">Less: Sales Returns and Allowances</td>
                                <td class="text-right pb-1">($1,000)</td>
                            </tr>
                            <tr>
                                <td class="pb-1">Less: Sales Discounts</td>
                                <td class="text-right pb-1">($400)</td>
                            </tr>
                            <tr class="font-bold text-orange-700">
                                <td class="pt-2 border-t border-gray-300">Net Sales</td>
                                <td class="text-right pt-2 border-t border-gray-300">$18,600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </li>
</ul>`
    , 
  exercises: [
    {
      "type": "mcq",
      "question": "Which of the following best describes a 'Trade Discount'?",
      "options": [
        "A reduction given for early payment within a specific period.",
        "A reduction from list price generally defined by trade/quantity, not recorded in accounts.",
        "A refund given to a customer for defective goods.",
        "A discount recorded in the 'Purchase Discounts' account."
      ],
      "correctIndex": 1,
      "explanation": "Trade discounts are deducted from the list price to determine the actual selling price before any entry is made. They are not recorded in the accounting books."
    },
    {
      "type": "mcq",
      "question": "In a PERPETUAL inventory system, when a company returns defective merchandise to a supplier, which account is Credited?",
      "options": [
        "Purchase Returns and Allowances",
        "Cost of Goods Sold",
        "Inventory",
        "Accounts Payable"
      ],
      "correctIndex": 2,
      "explanation": "Under the Perpetual system, the 'Inventory' account is directly reduced (credited) for returns, purchase discounts, and cost of sales."
    },
    {
      "type": "mcq",
      "question": "Identify the formula for Net Sales:",
      "options": [
        "Sales + Sales Returns + Sales Discounts",
        "Sales - Cost of Goods Sold",
        "Sales - Sales Returns and Allowances - Sales Discounts",
        "Gross Profit - Operating Expenses"
      ],
      "correctIndex": 2,
      "explanation": "Net Sales represents the actual revenue generated after deducting any returns, allowances, or discounts granted to customers."
    },
    {
      "type": "mcq",
      "question": "A company uses the PERIODIC system. When they pay for goods within the discount period, the credit to 'Cash' is balanced by a debit to 'Accounts Payable' and a credit to:",
      "options": [
        "Inventory",
        "Purchase Discounts",
        "Sales Discounts",
        "Cost of Goods Sold"
      ],
      "correctIndex": 1,
      "explanation": "In the Periodic system, the savings from early payment are recorded in the specific contra-expense account 'Purchase Discounts'."
    },
    {
      "type": "problem",
      "question": "PERIODIC SYSTEM - PURCHASES SCENARIO\n\nJournalize the following transactions for Company A (Buyer) using the Periodic Inventory System:\n1.  **March 1:** Purchased merchandise with a list price of $5,000, less a 20% trade discount. Terms: 2/10, n/30.\n2.  **March 3:** Returned defective merchandise with a list price of $500 (Gross) to the supplier.\n3.  **March 10:** Paid the full amount due within the discount period.",
      "answer": "March 1 (Purchase):\nPurchases .......................... 4,000\n    Accounts Payable ....................... 4,000\n*(Calculation: $5,000 list - 20% trade discount = $4,000)*\n\nMarch 3 (Return):\nAccounts Payable ................... 400\n    Purchase Returns & Allowances .......... 400\n*(Calculation: $500 list - 20% trade discount = $400)*\n\nMarch 10 (Payment):\nAccounts Payable ................... 3,600\n    Purchase Discounts ..................... 72\n    Cash ................................... 3,528\n*(Calculation: AP Balance $4,000 - $400 = $3,600. Discount 2% of $3,600 = $72)*",
      "explanation": "Note that Trade Discounts are deducted immediately. The Purchase Discount (2%) is calculated on the *outstanding Accounts Payable balance* ($3,600) after the return."
    },
    {
      "type": "problem",
      "question": "PERPETUAL SYSTEM - PURCHASES SCENARIO\n\nJournalize the following transactions for Company B (Buyer) using the Perpetual Inventory System:\n1.  **June 1:** Purchased inventory on account for $10,000. Terms 3/10, n/30.\n2.  **June 5:** Received an allowance of $1,000 for slightly damaged goods (kept the goods).\n3.  **June 11:** Paid the balance due within the discount period.",
      "answer": "June 1 (Purchase):\nInventory .......................... 10,000\n    Accounts Payable ....................... 10,000\n\nJune 5 (Allowance):\nAccounts Payable ................... 1,000\n    Inventory .............................. 1,000\n\nJune 11 (Payment):\nAccounts Payable ................... 9,000\n    Inventory .............................. 270\n    Cash ................................... 8,730\n*(Calculation: AP Balance $9,000 x 3% = $270. In Perpetual, discounts reduce the Inventory asset account)*",
      "explanation": "In a Perpetual system, 'Purchases', 'Returns', and 'Discounts' accounts are replaced by the 'Inventory' account."
    },
    {
      "type": "problem",
      "question": "PERIODIC SYSTEM - SALES SCENARIO\n\nJournalize the following transactions for Company C (Seller) using the Periodic Inventory System:\n1.  **July 1:** Sold merchandise on account for $8,000. Terms 1/15, n/30.\n2.  **July 4:** Customer returned goods with a sales price of $500.\n3.  **July 15:** Received payment in full from the customer.",
      "answer": "July 1 (Sale):\nAccounts Receivable ................ 8,000\n    Sales Revenue .......................... 8,000\n*(No entry for COGS in Periodic)*\n\nJuly 4 (Return):\nSales Returns & Allowances ......... 500\n    Accounts Receivable .................... 500\n*(No entry for Inventory restoration in Periodic)*\n\nJuly 15 (Collection):\nCash ............................... 7,425\nSales Discounts .................... 75\n    Accounts Receivable .................... 7,500\n*(Calculation: AR Balance $8,000 - $500 = $7,500. Discount 1% of $7,500 = $75)*",
      "explanation": "Under Periodic, we record revenue and AR, but we do NOT touch Inventory or COGS at the time of sale or return."
    },
    {
      "type": "problem",
      "question": "PERPETUAL SYSTEM - SALES SCENARIO\n\nJournalize the following transactions for Company D (Seller) using the Perpetual Inventory System. (Cost of goods is 60% of selling price).\n1.  **Aug 1:** Sold goods on credit for $20,000. Terms 2/10, n/30.\n2.  **Aug 5:** Granted a credit allowance of $2,000 to the customer for defects (customer kept goods).\n3.  **Aug 10:** Received payment in full.",
      "answer": "Aug 1 (Sale):\nAccounts Receivable ................ 20,000\n    Sales Revenue .......................... 20,000\nCost of Goods Sold ................. 12,000\n    Inventory .............................. 12,000\n*(Cost = $20,000 * 60%)*\n\nAug 5 (Allowance):\nSales Returns & Allowances ......... 2,000\n    Accounts Receivable .................... 2,000\n*(No inventory entry for Allowance as goods were not returned)*\n\nAug 10 (Collection):\nCash ............................... 17,640\nSales Discounts .................... 360\n    Accounts Receivable .................... 18,000\n*(Calculation: AR Balance $18,000. Discount 2% = $360)*",
      "explanation": "Perpetual sales require two entries: one for Revenue (at selling price) and one for COGS (at cost). Allowances reduce AR but do not affect Inventory cost unless goods physically return."
    }
  ]
},
        {
    day: "Day 3",
    topic: "Freight-in and Freight Out (FOB Destination/Shipping)",
    content: `<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
    <p class="font-bold text-indigo-900">Learning Goal</p>
    <p class="text-indigo-800">Master the accounting for transportation costs (Freight) and understand the legal implications of FOB Shipping Point vs. FOB Destination under both Periodic and Perpetual systems.</p>
</div>

<h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
<ul class="list-none space-y-8 mb-6">

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">1. The Golden Rule: Ownership Determines Responsibility</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                In accounting, the party who owns the goods while they are in transit is the party responsible for paying the freight (shipping) costs. This ownership is determined by the <strong>F.O.B. (Free On Board)</strong> terms.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 class="font-bold text-blue-900 mb-2">FOB Shipping Point</h4>
                    <ul class="text-sm text-blue-800 space-y-2 list-disc pl-4">
                        <li><strong>Ownership Transfers:</strong> At the seller's shipping dock (Shipping Point).</li>
                        <li><strong>Owner in Transit:</strong> The <span class="font-bold underline">BUYER</span>.</li>
                        <li><strong>Who Pays Freight:</strong> The Buyer.</li>
                        <li><strong>Account Used:</strong> <span class="font-mono">Freight-In</span> (Cost of purchasing).</li>
                    </ul>
                </div>
                <div class="bg-green-50 p-4 rounded border border-green-200">
                    <h4 class="font-bold text-green-900 mb-2">FOB Destination</h4>
                    <ul class="text-sm text-green-800 space-y-2 list-disc pl-4">
                        <li><strong>Ownership Transfers:</strong> At the buyer's receiving dock (Destination).</li>
                        <li><strong>Owner in Transit:</strong> The <span class="font-bold underline">SELLER</span>.</li>
                        <li><strong>Who Pays Freight:</strong> The Seller.</li>
                        <li><strong>Account Used:</strong> <span class="font-mono">Freight-Out</span> (Operating Expense).</li>
                    </ul>
                </div>
            </div>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2. Accounting for Freight Costs</h3>
        <p class="text-gray-700 mb-4">
            How we record these costs depends on whether we use the Periodic or Perpetual system.
        </p>

        <h4 class="font-bold text-gray-800 mt-4 mb-2">A. Freight-In (Buyer Pays)</h4>
        <p class="text-sm text-gray-600 mb-2">This is a cost of acquiring inventory.</p>
        <table class="w-full text-sm text-left text-gray-700 mb-6 border border-gray-300">
            <thead class="bg-gray-100 uppercase">
                <tr>
                    <th class="px-4 py-2 border-r">System</th>
                    <th class="px-4 py-2">Treatment</th>
                    <th class="px-4 py-2">Journal Entry</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <td class="px-4 py-2 border-r font-bold">Perpetual</td>
                    <td class="px-4 py-2">Added directly to Inventory asset.</td>
                    <td class="px-4 py-2 font-mono">Dr. Inventory<br>Cr. Cash</td>
                </tr>
                <tr>
                    <td class="px-4 py-2 border-r font-bold">Periodic</td>
                    <td class="px-4 py-2">Recorded in a separate "Freight-in" account.</td>
                    <td class="px-4 py-2 font-mono">Dr. Freight-in<br>Cr. Cash</td>
                </tr>
            </tbody>
        </table>

        <h4 class="font-bold text-gray-800 mt-4 mb-2">B. Freight-Out (Seller Pays)</h4>
        <p class="text-sm text-gray-600 mb-2">This is a selling expense (Operating Expense). It is NEVER part of COGS or Inventory cost.</p>
        <table class="w-full text-sm text-left text-gray-700 mb-4 border border-gray-300">
            <thead class="bg-gray-100 uppercase">
                <tr>
                    <th class="px-4 py-2 border-r">System</th>
                    <th class="px-4 py-2">Treatment</th>
                    <th class="px-4 py-2">Journal Entry</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <td class="px-4 py-2 border-r font-bold">Perpetual</td>
                    <td class="px-4 py-2">Expense Account (Delivery Expense).</td>
                    <td class="px-4 py-2 font-mono">Dr. Freight-Out / Delivery Expense<br>Cr. Cash</td>
                </tr>
                <tr>
                    <td class="px-4 py-2 border-r font-bold">Periodic</td>
                    <td class="px-4 py-2">Expense Account (Delivery Expense).</td>
                    <td class="px-4 py-2 font-mono">Dr. Freight-Out / Delivery Expense<br>Cr. Cash</td>
                </tr>
            </tbody>
        </table>
        <div class="bg-yellow-50 p-3 rounded text-sm text-yellow-800 border border-yellow-200">
            <strong>Note:</strong> Freight-Out is treated exactly the same in both systems. It is always an expense.
        </div>
    </li>
</ul>`,
    exercises: [
        // --- THEORY QUESTIONS (5) ---
        {
            type: "mcq",
            question: "Under FOB Shipping Point, at what moment does the title (ownership) of the goods pass to the buyer?",
            options: ["When the goods arrive at the buyer's warehouse", "When the goods are delivered to the carrier/shipper", "When the invoice is paid", "When the goods are ordered"],
            correctIndex: 1,
            explanation: "FOB Shipping Point means title transfers as soon as the seller puts the goods on the truck/ship."
        },
        {
            type: "mcq",
            question: "Which of the following statements about 'Freight-Out' is TRUE?",
            options: ["It is part of the Cost of Goods Sold.", "It is an administrative expense.", "It is a selling expense.", "It increases the value of merchandise inventory."],
            correctIndex: 2,
            explanation: "Freight-out is the cost of delivering goods to customers, making it a selling expense."
        },
        {
            type: "mcq",
            question: "In a Perpetual Inventory System, how is 'Freight-In' recorded by the buyer?",
            options: ["Debit Freight-In", "Debit Delivery Expense", "Debit Inventory", "Debit Cost of Goods Sold"],
            correctIndex: 2,
            explanation: "In Perpetual, costs to acquire inventory (like freight-in) are capitalized directly into the 'Inventory' asset account."
        },
        {
            type: "mcq",
            question: "In a Periodic Inventory System, how is 'Freight-In' recorded by the buyer?",
            options: ["Debit Inventory", "Debit Freight-In", "Debit Purchases", "Debit Delivery Expense"],
            correctIndex: 1,
            explanation: "The Periodic system uses a specific temporary account called 'Freight-In' to track these costs separately from purchases."
        },
        {
            type: "mcq",
            question: "If goods are sold FOB Destination, who bears the shipping cost?",
            options: ["The Buyer", "The Seller", "The Carrier", "The Broker"],
            correctIndex: 1,
            explanation: "FOB Destination means the Seller owns the goods until delivery, so the Seller pays the freight."
        },

        // --- PROBLEM SOLVING QUESTIONS (5) ---
        {
            type: "problem",
            question: "PROBLEM 1: PERPETUAL SYSTEM (FOB Shipping Point)\nRecord the following transactions for 'TechRetail' using the Perpetual Inventory System.\n\n1. Jan 5: Purchased 100 laptops from Dell for $500 each on account, terms 2/10, n/30, FOB Shipping Point.\n2. Jan 6: Paid Fedex $200 cash for shipping the laptops.\n3. Jan 8: Returned 5 defective laptops to Dell.\n4. Jan 15: Paid Dell the full amount due within the discount period.\n5. Jan 20: Sold 50 laptops for $800 each on account. (Cost to TechRetail was $502/unit including freight).",
            answer: `1. Jan 5 (Purchase):
   Dr. Inventory           50,000
       Cr. Accounts Payable    50,000

2. Jan 6 (Freight-In):
   Dr. Inventory              200  (Added to asset in Perpetual)
       Cr. Cash                   200

3. Jan 8 (Return):
   Dr. Accounts Payable     2,500  (5 units * $500)
       Cr. Inventory            2,500

4. Jan 15 (Payment):
   Dr. Accounts Payable    47,500  (50,000 - 2,500)
       Cr. Inventory              950  (2% of 47,500 - Discount reduces asset cost)
       Cr. Cash                46,550

5. Jan 20 (Sale):
   Dr. Accounts Receivable 40,000
       Cr. Sales Revenue       40,000
   (AND)
   Dr. Cost of Goods Sold  25,100  (50 units * $502)
       Cr. Inventory           25,100`,
            explanation: "Note how Freight and Discounts affect the 'Inventory' account directly in Perpetual."
        },
        {
            type: "problem",
            question: "PROBLEM 2: PERIODIC SYSTEM (FOB Shipping Point)\nRecord the exact same transactions as Problem 1, but for a company using the PERIODIC Inventory System.\n\n1. Jan 5: Purchased 100 laptops @ $500, terms 2/10, n/30, FOB Shipping Point.\n2. Jan 6: Paid Fedex $200 cash for shipping.\n3. Jan 8: Returned 5 defective laptops.\n4. Jan 15: Paid Dell in full (with discount).\n5. Jan 20: Sold 50 laptops for $800 each.",
            answer: `1. Jan 5 (Purchase):
   Dr. Purchases           50,000
       Cr. Accounts Payable    50,000

2. Jan 6 (Freight-In):
   Dr. Freight-In             200  (Separate expense account)
       Cr. Cash                   200

3. Jan 8 (Return):
   Dr. Accounts Payable     2,500
       Cr. Purchase Returns & Allowances  2,500

4. Jan 15 (Payment):
   Dr. Accounts Payable    47,500
       Cr. Purchase Discounts     950  (Contra-expense account)
       Cr. Cash                46,550

5. Jan 20 (Sale):
   Dr. Accounts Receivable 40,000
       Cr. Sales Revenue       40,000
   (No entry for COGS/Inventory in Periodic system at time of sale)`,
            explanation: "In Periodic, we use temporary accounts (Purchases, Freight-In, Purchase Returns) and do not update Inventory/COGS until the end of the period."
        },
        {
            type: "problem",
            question: "PROBLEM 3: PERPETUAL SYSTEM (FOB Destination)\nRecord these transactions for 'FurnitureCo' (Seller) using Perpetual System.\n\n1. Mar 1: Sold Office Desks to a client on account for $10,000. The Cost of Goods Sold was $6,000. Terms FOB Destination.\n2. Mar 2: Paid shipping company $300 cash for delivery to client.\n3. Mar 5: Client returned damaged desks worth $1,000 (Cost was $600). The desks were scrapped (Inventory value $0).\n4. Mar 10: Received payment from client for the balance (no discount).",
            answer: `1. Mar 1 (Sale):
   Dr. Accounts Receivable 10,000
       Cr. Sales Revenue       10,000
   (AND)
   Dr. Cost of Goods Sold   6,000
       Cr. Inventory            6,000

2. Mar 2 (Freight-Out):
   Dr. Delivery Expense       300  (Or Freight-Out)
       Cr. Cash                   300

3. Mar 5 (Return - Scrapped):
   Dr. Sales Returns & Allowances 1,000
       Cr. Accounts Receivable        1,000
   (No entry to restore Inventory because goods were scrapped/worthless)

4. Mar 10 (Receipt):
   Dr. Cash                 9,000
       Cr. Accounts Receivable      9,000`,
            explanation: "Since terms were FOB Destination, the Seller (FurnitureCo) pays the $300 freight, recording it as an operating expense."
        },
        {
            type: "problem",
            question: "PROBLEM 4: PERIODIC SYSTEM (Buyer & Seller Mix)\nJournalize the following for Company A (The Buyer) using PERIODIC system.\n\n1. Apr 1: Purchased goods from Company B for $5,000, FOB Destination.\n2. Apr 2: Paid $150 freight charges upon arrival (Wait! Terms were FOB Destination, but Buyer paid cash on arrival as a courtesy to Seller).\n3. Apr 5: Returned $500 of goods.\n4. Apr 10: Paid the balance due to Company B, deducting the freight paid on their behalf.",
            answer: `1. Apr 1 (Purchase):
   Dr. Purchases            5,000
       Cr. Accounts Payable     5,000

2. Apr 2 (Freight Payment):
   Dr. Accounts Payable       150  (Reduces amount owed to Seller)
       Cr. Cash                   150
   *Note: Since terms were FOB Destination, this is the Seller's cost. The Buyer paying it reduces the liability to the Seller.*

3. Apr 5 (Return):
   Dr. Accounts Payable       500
       Cr. Purchase Returns & Allw.   500

4. Apr 10 (Payment):
   Dr. Accounts Payable     4,350  (5,000 - 150 prepaid - 500 return)
       Cr. Cash                 4,350`,
            explanation: "Crucial concept: If the Buyer pays freight on FOB Destination goods, they are essentially 'loaning' that cash to the Seller. It reduces Accounts Payable, it is NOT Freight-In."
        },
        {
            type: "problem",
            question: "PROBLEM 5: COMPREHENSIVE (Perpetual)\nRecord for 'Global Traders'.\n\n1. May 1: Purchased inventory $20,000, FOB Shipping Point.\n2. May 2: Paid freight $500.\n3. May 5: Sold 40% of the inventory for $15,000 on account, FOB Shipping Point.\n4. May 6: Paid $200 freight on the sales shipment (Wait! Terms were FOB Shipping Point, but we prepaid it for the customer).\n5. May 10: Customer returned $1,000 of goods (Cost $600) to inventory.",
            answer: `1. May 1:
   Dr. Inventory            20,000
       Cr. Accounts Payable     20,000

2. May 2:
   Dr. Inventory               500
       Cr. Cash                    500
   *Total Cost of Inv = 20,500*

3. May 5:
   Dr. Accounts Receivable  15,000
       Cr. Sales Revenue        15,000
   (AND)
   Dr. Cost of Goods Sold    8,200  (40% of 20,500)
       Cr. Inventory             8,200

4. May 6:
   Dr. Accounts Receivable     200  (We bill the customer for this)
       Cr. Cash                    200

5. May 10:
   Dr. Sales Returns & Allw  1,000
       Cr. Accounts Receivable   1,000
   (AND)
   Dr. Inventory               600
       Cr. Cost of Goods Sold      600`,
            explanation: "Transaction 4 is tricky. FOB Shipping Point means the CUSTOMER should pay. If we (Seller) pay it, we increase the amount the customer owes us (Accounts Receivable), rather than recording an expense."
        }
    ]
},
        {
    day: "Day 4",
    topic: "Review & Application: Meerchandising Transactions",
    content: `<div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h2 class="text-2xl font-bold text-indigo-900 mb-4">Review: Days 1-3</h2>
        <p class="text-indigo-800 mb-4">
            Today's focus is on applying the concepts learned in Days 1 through 3. We will synthesize your understanding of recording transactions, calculating net amounts, and handling freight under both inventory systems.
        </p>
        <div class="bg-white p-4 rounded shadow-sm">
            <h3 class="font-bold text-gray-800 mb-2">Key Topics for Reference:</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Recording Purchases & Sales:</strong> Differentiating between the <em>Perpetual</em> (real-time) and <em>Periodic</em> (end-of-period) methods.</li>
                <li><strong>Discounts, Returns & Allowances:</strong> Handling "2/10, n/30" terms and defective goods (Contra-accounts vs. direct Inventory reduction).</li>
                <li><strong>Net Calculations:</strong> 
                    <br><code class="text-sm bg-gray-100 px-1">Net Sales = Sales - Returns - Discounts</code>
                    <br><code class="text-sm bg-gray-100 px-1">Net Purchases = Purchases - Returns - Discounts + Freight-in</code>
                </li>
                <li><strong>Freight Terms:</strong> 
                    <br><em>FOB Shipping Point:</em> Buyer pays (Inventory/Freight-In).
                    <br><em>FOB Destination:</em> Seller pays (Delivery Expense).
                </li>
            </ul>
        </div>
        <p class="mt-4 text-sm text-gray-600 italic">Please refer back to the materials from Day 1, Day 2, and Day 3 for detailed notes and formulas.</p>
    </div>`,
    exercises: [
        // --- PART 1: THEORY MULTIPLE CHOICE (25 Questions) ---
        {
            type: "mcq",
            question: "Which account is used in a Periodic system but NOT in a Perpetual system to record goods bought for resale?",
            options: ["Merchandise Inventory", "Purchases", "Cost of Goods Sold", "Accounts Payable"],
            correctIndex: 1,
            explanation: "The 'Purchases' account is a temporary account used exclusively in the Periodic system."
        },
        {
            type: "mcq",
            question: "In a Perpetual system, the Cost of Goods Sold is recorded:",
            options: ["At the end of the month only", "At the time of each sale", "When the customer pays", "At the beginning of the period"],
            correctIndex: 1,
            explanation: "Perpetual systems update COGS and Inventory immediately upon sale."
        },
        {
            type: "mcq",
            question: "FOB Shipping Point implies that ownership of goods transfers to the buyer:",
            options: ["When goods arrive at destination", "When the contract is signed", "When the carrier accepts the goods", "When payment is made"],
            correctIndex: 2,
            explanation: "Ownership transfers at the shipping point (when the carrier takes possession)."
        },
        {
            type: "mcq",
            question: "Which of the following is considered a 'contra-revenue' account?",
            options: ["Sales Returns and Allowances", "Purchase Discounts", "Cost of Goods Sold", "Freight-Out"],
            correctIndex: 0,
            explanation: "Sales Returns and Allowances reduce total Sales revenue."
        },
        {
            type: "mcq",
            question: "Under the Perpetual system, a return of defective merchandise to a supplier is recorded by crediting:",
            options: ["Purchase Returns and Allowances", "Merchandise Inventory", "Accounts Payable", "Cash"],
            correctIndex: 1,
            explanation: "It directly reduces the asset 'Merchandise Inventory' in a Perpetual system."
        },
        {
            type: "mcq",
            question: "Freight-Out is classified as:",
            options: ["Part of Cost of Goods Sold", "A Selling Expense (Operating Expense)", "A contra-revenue account", "An addition to Inventory"],
            correctIndex: 1,
            explanation: "Freight-Out is the cost of delivering goods to customers, considered an operating expense."
        },
        {
            type: "mcq",
            question: "The credit term '2/10, n/30' is an example of a:",
            options: ["Trade Discount", "Cash Discount (Purchase/Sales Discount)", "Quantity Discount", "Seasonal Discount"],
            correctIndex: 1,
            explanation: "It offers a deduction for prompt payment (cash discount)."
        },
        {
            type: "mcq",
            question: "In a Periodic system, ending inventory is determined by:",
            options: ["Looking at the ledger balance", "Physical count", "Subtracting Sales from Purchases", "Estimating based on last year"],
            correctIndex: 1,
            explanation: "A physical count is required to determine ending inventory and calculate COGS."
        },
        {
            type: "mcq",
            question: "Trade discounts are:",
            options: ["Recorded in the journal", "Deducted from the list price before recording", "Recorded as interest revenue", "Only applicable to cash sales"],
            correctIndex: 1,
            explanation: "Trade discounts are used to determine the actual invoice price and are not recorded separately in the accounts."
        },
        {
            type: "mcq",
            question: "If a buyer pays the freight charges under FOB Destination, they should record it as:",
            options: ["Freight-In", "Merchandise Inventory", "A Receivable from the Seller", "Prepaid Rent"],
            correctIndex: 2,
            explanation: "The seller is responsible for freight in FOB Destination. If the buyer pays it, it is an advance on behalf of the seller."
        },
        {
            type: "mcq",
            question: "Which system provides better inventory control?",
            options: ["Periodic", "Perpetual", "Both are equal", "Hybrid"],
            correctIndex: 1,
            explanation: "Perpetual provides real-time data and helps identify shrinkage."
        },
        {
            type: "mcq",
            question: "Purchase Discounts Lost is an account used under which method of recording discounts?",
            options: ["Gross Method", "Net Method", "Allowance Method", "Direct Write-off Method"],
            correctIndex: 1,
            explanation: "The Net Method assumes the discount will be taken; if not, the extra amount paid is 'Purchase Discounts Lost'."
        },
        {
            type: "mcq",
            question: "Normal debit balances are found in:",
            options: ["Sales", "Purchase Returns", "Sales Returns and Allowances", "Purchase Discounts"],
            correctIndex: 2,
            explanation: "Sales Returns is a contra-revenue account, so it has a normal debit balance."
        },
        {
            type: "mcq",
            question: "The primary difference between a service business and a merchandising business is:",
            options: ["Administrative expenses", "Inventory", "Accounts Receivable", "Cash"],
            correctIndex: 1,
            explanation: "Merchandisers buy and sell tangible goods (Inventory)."
        },
        {
            type: "mcq",
            question: "In the Perpetual system, Freight-In is debited to:",
            options: ["Freight Expense", "Purchases", "Merchandise Inventory", "Cost of Goods Sold"],
            correctIndex: 2,
            explanation: "It is considered a product cost and capitalized into the inventory asset."
        },
        {
            type: "mcq",
            question: "Net Income from Operations is calculated as:",
            options: ["Gross Profit - Operating Expenses", "Sales - COGS", "Net Sales - Gross Profit", "Total Assets - Total Liabilities"],
            correctIndex: 0,
            explanation: "Gross Profit minus Selling and Administrative expenses."
        },
        {
            type: "mcq",
            question: "Which of the following does NOT affect Cost of Goods Sold in a Periodic system?",
            options: ["Beginning Inventory", "Freight-Out", "Purchase Returns", "Ending Inventory"],
            correctIndex: 1,
            explanation: "Freight-Out is a selling expense, not part of the cost of acquiring goods."
        },
        {
            type: "mcq",
            question: "When a customer returns goods, the seller issues a:",
            options: ["Debit Memo", "Credit Memo", "Purchase Order", "Invoice"],
            correctIndex: 1,
            explanation: "A credit memo indicates the customer's Account Receivable is being credited (reduced)."
        },
        {
            type: "mcq",
            question: "Inventory shrinkage is recorded in a Perpetual system by debiting:",
            options: ["Merchandise Inventory", "Cost of Goods Sold", "Sales", "Loss on Theft"],
            correctIndex: 1,
            explanation: "It is typically adjusted into COGS unless the amount is material."
        },
        {
            type: "mcq",
            question: "Which account is a temporary account closed at the end of the year?",
            options: ["Merchandise Inventory", "Accounts Payable", "Sales Dividends", "Sales Discounts"],
            correctIndex: 3,
            explanation: "Revenue, Expense, and Dividend/Withdrawal accounts are temporary. Sales Discounts is a contra-revenue."
        },
        {
            type: "mcq",
            question: "FOB Destination indicates that title passes:",
            options: ["When goods leave the seller", "When goods arrive at the buyer", "When the invoice is mailed", "Halfway through transit"],
            correctIndex: 1,
            explanation: "Title remains with the seller until delivery."
        },
        {
            type: "mcq",
            question: "Under the Periodic system, the 'Purchases' account is classified as:",
            options: ["Asset", "Liability", "Revenue", "Expense"],
            correctIndex: 3,
            explanation: "It functions as an expense account (Cost of Goods Purchased)."
        },
        {
            type: "mcq",
            question: "If a company uses the Gross Method to record purchases:",
            options: ["Discounts are recorded only when taken", "Discounts are recorded immediately", "Purchases are recorded at net price", "Lost discounts are recorded"],
            correctIndex: 0,
            explanation: "The Gross Method records the full amount; discounts are recognized only if payment is made early."
        },
        {
            type: "mcq",
            question: "The Operating Cycle of a merchandiser is typically:",
            options: ["Shorter than a service firm", "Cash to Inventory to Receivables to Cash", "Inventory to Cash to Receivables", "Receivables to Inventory to Cash"],
            correctIndex: 1,
            explanation: "Buy inventory, sell on credit (AR), collect cash."
        },
        {
            type: "mcq",
            question: "Which inventory system requires a closing entry to update the Inventory account?",
            options: ["Perpetual", "Periodic", "Both", "Neither"],
            correctIndex: 1,
            explanation: "In Periodic, Beginning Inventory is closed out and Ending Inventory is established during closing."
        },

        // --- PART 2: NUMERICAL PROBLEM SOLVING (25 Questions) ---
        {
            type: "mcq",
            question: "Sales = 100,000; Returns = 5,000; COGS = 60,000. Calculate Gross Profit.",
            options: ["35,000", "40,000", "95,000", "35,500"],
            correctIndex: 0,
            explanation: "Net Sales (95k) - COGS (60k) = 35k."
        },
        {
            type: "mcq",
            question: "List price $1,000. Trade discount 20%. Purchase terms 2/10, n/30. What is the amount to be paid within the discount period?",
            options: ["$784", "$800", "$980", "$780"],
            correctIndex: 0,
            explanation: "Price = 1000 * 0.80 = 800. Discount = 800 * 0.98 = 784."
        },
        {
            type: "mcq",
            question: "Beginning Inv $10,000; Purchases $50,000; Ending Inv $15,000. Calculate COGS.",
            options: ["$45,000", "$55,000", "$65,000", "$35,000"],
            correctIndex: 0,
            explanation: "10,000 + 50,000 - 15,000 = 45,000."
        },
        {
            type: "mcq",
            question: "Purchases $20,000; Purchase Returns $2,000; Freight-In $500; Purchase Discounts $500. Calculate Net Purchases.",
            options: ["$18,000", "$17,500", "$18,500", "$19,000"],
            correctIndex: 0,
            explanation: "20,000 - 2,000 - 500 + 500 = 18,000."
        },
        {
            type: "mcq",
            question: "Goods Available for Sale = $90,000. Gross Profit = $30,000. Net Sales = $100,000. What is the Ending Inventory?",
            options: ["$20,000", "$30,000", "$60,000", "$10,000"],
            correctIndex: 0,
            explanation: "COGS = Sales - GP = 70,000. Ending Inv = Available - COGS = 90,000 - 70,000 = 20,000."
        },
        {
            type: "mcq",
            question: "Purchase of $5,000 on terms 1/10, n/30. Returned $500 before payment. Payment made within 10 days. How much cash is paid?",
            options: ["$4,455", "$4,500", "$4,950", "$4,450"],
            correctIndex: 0,
            explanation: "Net Payable = 4,500. Discount = 4,500 * 0.01 = 45. Cash = 4,500 - 45 = 4,455."
        },
        {
            type: "mcq",
            question: "Gross Sales $200,000; Sales Returns $10,000; Sales Discounts $5,000. Net Sales is:",
            options: ["$185,000", "$190,000", "$195,000", "$215,000"],
            correctIndex: 0,
            explanation: "200,000 - 10,000 - 5,000 = 185,000."
        },
        {
            type: "mcq",
            question: "Company pays $200 freight on a purchase of $2,000 FOB Shipping Point. Total cost of inventory is:",
            options: ["$2,000", "$2,200", "$1,800", "$200"],
            correctIndex: 1,
            explanation: "FOB Shipping Point means buyer pays freight; it adds to inventory cost."
        },
        {
            type: "mcq",
            question: "Ending Inventory is overstated by $5,000. What is the effect on Net Income?",
            options: ["Overstated by $5,000", "Understated by $5,000", "No Effect", "Overstated by $10,000"],
            correctIndex: 0,
            explanation: "Overstated End Inv -> Understated COGS -> Overstated Net Income."
        },
        {
            type: "mcq",
            question: "Beginning Inv $5,000; Net Purchases $25,000; COGS $22,000. What is Ending Inventory?",
            options: ["$3,000", "$8,000", "$52,000", "$2,000"],
            correctIndex: 1,
            explanation: "Available (30k) - COGS (22k) = 8k."
        },
        {
            type: "mcq",
            question: "Sales $50,000; COGS $30,000; Operating Expenses $10,000. What is the Gross Profit Rate?",
            options: ["40%", "60%", "20%", "30%"],
            correctIndex: 0,
            explanation: "Gross Profit = 20,000. Rate = 20,000 / 50,000 = 40%."
        },
        {
            type: "mcq",
            question: "A $1,000 sale is made with terms 2/10, n/30. If paid on day 12, the amount received is:",
            options: ["$980", "$1,000", "$1,020", "$900"],
            correctIndex: 1,
            explanation: "Discount period expired. Full amount is due."
        },
        {
            type: "mcq",
            question: "Freight-In $2,000; Freight-Out $3,000. How much is added to the cost of merchandise purchased?",
            options: ["$2,000", "$3,000", "$5,000", "$0"],
            correctIndex: 0,
            explanation: "Only Freight-In is a product cost."
        },
        {
            type: "mcq",
            question: "COGS is $400,000. Operating Expenses are $100,000. Net Loss is $20,000. What are Net Sales?",
            options: ["$480,000", "$500,000", "$520,000", "$320,000"],
            correctIndex: 0,
            explanation: "Sales - 400k - 100k = -20k. Sales = 480k."
        },
        {
            type: "mcq",
            question: "A company purchased goods for $10,000 with a trade discount of 10%. Terms 2/10, n/30. If paid within 10 days, what is the cash payment?",
            options: ["$8,820", "$9,000", "$8,800", "$9,800"],
            correctIndex: 0,
            explanation: "10,000 - 10% = 9,000. 9,000 * 0.98 = 8,820."
        },
        {
            type: "mcq",
            question: "Perpetual System: Book balance $50,000. Physical count $48,500. The adjustment amount is:",
            options: ["$1,500 debit to COGS", "$1,500 credit to COGS", "$1,500 debit to Sales", "$0"],
            correctIndex: 0,
            explanation: "Inventory is missing. Debit COGS (expense), Credit Inventory (asset)."
        },
        {
            type: "mcq",
            question: "Purchases $60,000; Returns $4,000; Freight-In $2,000. COGS $50,000. Beg Inv $10,000. What is End Inv?",
            options: ["$18,000", "$16,000", "$20,000", "$8,000"],
            correctIndex: 0,
            explanation: "Net Purch = 58k. Avail = 68k. End = 68k - 50k = 18k."
        },
        {
            type: "mcq",
            question: "Seller pays $100 freight on FOB Destination. This decreases Net Income by:",
            options: ["$100", "$0", "$200", "$50"],
            correctIndex: 0,
            explanation: "It is an expense (Delivery Expense) which reduces Net Income."
        },
        {
            type: "mcq",
            question: "Margin of Safety is Sales - Breakeven Sales. (Ignore this, out of scope). Replace: Sales $100k, GP $40k. What is COGS?",
            options: ["$60,000", "$40,000", "$140,000", "$50,000"],
            correctIndex: 0,
            explanation: "100k - 40k = 60k."
        },
        {
            type: "mcq",
            question: "Invoice date May 1. Terms 2/10 EOM (End of Month). When does the discount period expire?",
            options: ["May 11", "June 10", "May 31", "May 10"],
            correctIndex: 1,
            explanation: "2/10 EOM means 10 days after the end of the month (May). So June 10."
        },
        {
            type: "mcq",
            question: "Buyer returns $1,000 of goods. Seller's cost was $600. In Perpetual, how much does Inventory increase for the SELLER?",
            options: ["$1,000", "$600", "$400", "$0"],
            correctIndex: 1,
            explanation: "Seller restores the item to inventory at its Cost ($600)."
        },
        {
            type: "mcq",
            question: "Purchase $5,000. Return $1,000. Discount 2% on balance. Freight $200 (FOB Shipping). Total Cost?",
            options: ["$4,120", "$4,200", "$4,100", "$3,920"],
            correctIndex: 0,
            explanation: "Balance 4,000. Less 2% (80) = 3,920. Add Freight 200 = 4,120."
        },
        {
            type: "mcq",
            question: "Sales Returns $500. COGS $300. In Periodic, the impact on Gross Profit is:",
            options: ["Decrease $500", "Decrease $200", "Increase $500", "Decrease $800"],
            correctIndex: 0,
            explanation: "In Periodic, we don't adjust COGS at the moment of return. It just reduces Sales by 500."
        },
        {
            type: "mcq",
            question: "Gross Profit $50,000. Operating Expenses $20,000. Other Income $5,000. Net Income is:",
            options: ["$35,000", "$30,000", "$75,000", "$25,000"],
            correctIndex: 0,
            explanation: "50k - 20k + 5k = 35k."
        },
        {
            type: "mcq",
            question: "Inventory Turnover = COGS / Average Inventory. If COGS is $100k and Avg Inv is $25k, Turnover is:",
            options: ["4 times", "0.25 times", "2.5 times", "40 times"],
            correctIndex: 0,
            explanation: "100,000 / 25,000 = 4."
        },

        // --- PART 3: JOURNALIZING PROBLEMS (25 Questions) ---
        {
            type: "problem",
            question: "Perpetual: Purchased merchandise on credit for $4,000.",
            answer: "Dr. Merchandise Inventory 4,000; Cr. Accounts Payable 4,000",
            explanation: "Debit the asset directly."
        },
        {
            type: "problem",
            question: "Periodic: Purchased merchandise on credit for $4,000.",
            answer: "Dr. Purchases 4,000; Cr. Accounts Payable 4,000",
            explanation: "Debit the Purchases expense account."
        },
        {
            type: "problem",
            question: "Perpetual: Sold merchandise for $1,000 on account. Cost was $600. (Record Revenue only)",
            answer: "Dr. Accounts Receivable 1,000; Cr. Sales 1,000",
            explanation: "Standard revenue entry."
        },
        {
            type: "problem",
            question: "Perpetual: Sold merchandise for $1,000 on account. Cost was $600. (Record Cost only)",
            answer: "Dr. Cost of Goods Sold 600; Cr. Merchandise Inventory 600",
            explanation: "Expense the cost and reduce the asset."
        },
        {
            type: "problem",
            question: "Periodic: Sold merchandise for $1,000 on account. Cost was $600.",
            answer: "Dr. Accounts Receivable 1,000; Cr. Sales 1,000 (No cost entry)",
            explanation: "Periodic systems do not record COGS at the time of sale."
        },
        {
            type: "problem",
            question: "Perpetual: Paid $100 freight on purchase (FOB Shipping Point).",
            answer: "Dr. Merchandise Inventory 100; Cr. Cash 100",
            explanation: "Freight-in is added to the inventory asset."
        },
        {
            type: "problem",
            question: "Periodic: Paid $100 freight on purchase (FOB Shipping Point).",
            answer: "Dr. Freight-In 100; Cr. Cash 100",
            explanation: "Freight-in is a separate account added to purchases."
        },
        {
            type: "problem",
            question: "Perpetual: Returned $500 of defective goods purchased on credit.",
            answer: "Dr. Accounts Payable 500; Cr. Merchandise Inventory 500",
            explanation: "Directly reduce the inventory asset."
        },
        {
            type: "problem",
            question: "Periodic: Returned $500 of defective goods purchased on credit.",
            answer: "Dr. Accounts Payable 500; Cr. Purchase Returns & Allowances 500",
            explanation: "Credit the contra-expense account."
        },
        {
            type: "problem",
            question: "Perpetual: Paid for a $2,000 purchase within discount period (2%).",
            answer: "Dr. Accounts Payable 2,000; Cr. Cash 1,960; Cr. Merchandise Inventory 40",
            explanation: "Discount reduces the inventory asset cost."
        },
        {
            type: "problem",
            question: "Periodic: Paid for a $2,000 purchase within discount period (2%).",
            answer: "Dr. Accounts Payable 2,000; Cr. Cash 1,960; Cr. Purchase Discounts 40",
            explanation: "Credit the revenue/contra account 'Purchase Discounts'."
        },
        {
            type: "problem",
            question: "Paid $50 freight on goods sold to a customer (FOB Destination).",
            answer: "Dr. Delivery Expense 50; Cr. Cash 50",
            explanation: "This is a selling expense for the seller."
        },
        {
            type: "problem",
            question: "Perpetual: Customer returned goods sold for $300. Cost was $200. (Record Revenue reversal)",
            answer: "Dr. Sales Returns & Allowances 300; Cr. Accounts Receivable 300",
            explanation: "Reduce the customer's balance and recognize the return."
        },
        {
            type: "problem",
            question: "Perpetual: Customer returned goods sold for $300. Cost was $200. (Record Inventory restoration)",
            answer: "Dr. Merchandise Inventory 200; Cr. Cost of Goods Sold 200",
            explanation: "Put the item back in asset, reduce the expense."
        },
        {
            type: "problem",
            question: "Periodic: Customer returned goods sold for $300. Cost was $200.",
            answer: "Dr. Sales Returns & Allowances 300; Cr. Accounts Receivable 300 (No cost entry)",
            explanation: "No inventory adjustment is made at this time in Periodic."
        },
        {
            type: "problem",
            question: "Closing Entry (Periodic): Close Beginning Inventory ($10k).",
            answer: "Dr. Income Summary 10,000; Cr. Merchandise Inventory 10,000",
            explanation: "Remove old inventory balance."
        },
        {
            type: "problem",
            question: "Closing Entry (Periodic): Establish Ending Inventory ($15k).",
            answer: "Dr. Merchandise Inventory 15,000; Cr. Income Summary 15,000",
            explanation: "Set up the new asset balance."
        },
        {
            type: "problem",
            question: "Perpetual: Adjust for inventory shrinkage of $500.",
            answer: "Dr. Cost of Goods Sold 500; Cr. Merchandise Inventory 500",
            explanation: "Expense the loss."
        },
        {
            type: "problem",
            question: "Periodic: Close Purchases account ($50k) at year end.",
            answer: "Dr. Income Summary 50,000; Cr. Purchases 50,000",
            explanation: "Transfer expense to Income Summary."
        },
        {
            type: "problem",
            question: "Perpetual: Paid freight $50 on purchase FOB Destination.",
            answer: "No Entry",
            explanation: "FOB Destination means the seller pays, not the buyer."
        },
        {
            type: "problem",
            question: "Buyer pays freight $100 on FOB Destination (as accommodation to seller).",
            answer: "Dr. Accounts Payable (or AR from Seller) 100; Cr. Cash 100",
            explanation: "Buyer reduces what they owe the seller because they paid the seller's obligation."
        },
        {
            type: "problem",
            question: "Perpetual: Sold goods for Cash $500. Cost $300. (Record Revenue)",
            answer: "Dr. Cash 500; Cr. Sales 500",
            explanation: "Cash sale revenue."
        },
        {
            type: "problem",
            question: "Perpetual: Sold goods for Cash $500. Cost $300. (Record Cost)",
            answer: "Dr. Cost of Goods Sold 300; Cr. Merchandise Inventory 300",
            explanation: "Cash sale cost."
        },
        {
            type: "problem",
            question: "Periodic: Close Freight-In ($2k) at year end.",
            answer: "Dr. Income Summary 2,000; Cr. Freight-In 2,000",
            explanation: "Close temporary account."
        },
        {
            type: "problem",
            question: "Perpetual: Received payment from customer $1,000 less 2% discount.",
            answer: "Dr. Cash 980; Dr. Sales Discounts 20; Cr. Accounts Receivable 1,000",
            explanation: "Record cash received and the discount expense."
        }
    ]
},
        {
            day: "Day 5",
            topic: "Recorded Summary Quiz",
            content: `<h3 class="text-xl font-bold mb-4">Assessment Activity</h3><p>Video/Audio submission.</p>`,
            exercises: []
        }
    ]
};
