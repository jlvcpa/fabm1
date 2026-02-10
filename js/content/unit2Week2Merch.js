// Content for Unit 2 Week 2: Merchandising Business ---
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

        // --- 5 JOURNALIZING (Journal Entries with Trade Discounts) ---
        {
    "type": "journalizing",
    "id": "set1_periodic",
    "title": "JOURNALIZING SET 1: PERIODIC SYSTEM (January Transactions)",
    "instructions": "Journalize the following transactions for 'Alpha Merchandising' using the **Periodic Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Purchases, Sales.\n\nNote: Do not include discounts or returns. Record trade discounts at net price immediately.",
    "transactions": [
      {
        "date": "Jan 2",
        "description": "Purchased merchandise from Supplier A on account, ₱10,000.",
        "rows": 3,
        "solution": [
          { "date": "Jan 2", "account": "Purchases", "debit": 10000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 10000 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 4",
        "description": "Sold merchandise to Customer X on account, ₱15,000.",
        "rows": 3,
        "solution": [
          { "date": "4", "account": "Accounts Receivable", "debit": 15000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 15000 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 6",
        "description": "Purchased merchandise from Supplier B for cash, list price ₱5,000 with a 20% trade discount.",
        "rows": 3,
        "solution": [
          { "date": "6", "account": "Purchases", "debit": 4000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 4000 },
          { "date": "", "account": "Cash purchase net of trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 8",
        "description": "Sold merchandise for cash, ₱3,000.",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 3000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 3000 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 10",
        "description": "Purchased merchandise from Supplier C on account, ₱12,000.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Purchases", "debit": 12000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 12000 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 12",
        "description": "Sold merchandise to Customer Y on account, list price ₱20,000 with a 10% trade discount.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Accounts Receivable", "debit": 18000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 18000 },
          { "date": "", "account": "Sold goods on account net of trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 15",
        "description": "Paid Supplier A the full amount owed from the Jan 2 transaction.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Accounts Payable", "debit": 10000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 10000 },
          { "date": "", "account": "Payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 18",
        "description": "Collected full payment from Customer X for the Jan 4 transaction.",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Cash", "debit": 15000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 15000 },
          { "date": "", "account": "Collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 20",
        "description": "Purchased merchandise from Supplier A on account, ₱8,000.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Purchases", "debit": 8000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 8000 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jan 25",
        "description": "Sold merchandise to Customer Z on account, ₱9,500.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 9500, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 9500 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "set2_perpetual",
    "title": "JOURNALIZING SET 2: PERPETUAL SYSTEM (February Transactions)",
    "instructions": "Journalize the following transactions for 'Beta Traders' using the **Perpetual Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Cost of Goods Sold.\n\nNote: For sales transactions, record both the revenue and the cost.",
    "transactions": [
      {
        "date": "Feb 1",
        "description": "Purchased inventory on account from Vendor A, ₱50,000.",
        "rows": 3,
        "solution": [
          { "date": "Feb 1", "account": "Merchandise Inventory", "debit": 50000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 50000 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 3",
        "description": "Sold goods to Client A on account for ₱80,000. The cost of goods sold was ₱45,000.",
        "rows": 5,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 80000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 80000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 45000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 45000 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 5",
        "description": "Purchased inventory for cash, ₱15,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Merchandise Inventory", "debit": 15000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 15000 },
          { "date": "", "account": "Purchased inventory for cash", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 7",
        "description": "Sold goods for cash, ₱20,000. The cost of goods sold was ₱12,000.",
        "rows": 5,
        "solution": [
          { "date": "7", "account": "Cash", "debit": 20000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 20000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 12000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 12000 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 10",
        "description": "Paid Vendor A ₱25,000 as partial payment for the Feb 1 purchase.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Accounts Payable", "debit": 25000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 25000 },
          { "date": "", "account": "Partial payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 12",
        "description": "Collected ₱40,000 from Client A as partial payment for the Feb 3 sale.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Cash", "debit": 40000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 40000 },
          { "date": "", "account": "Partial collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 15",
        "description": "Purchased inventory on account from Vendor B, list price ₱30,000 with a 10% trade discount.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Merchandise Inventory", "debit": 27000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 27000 },
          { "date": "", "account": "Purchased inventory net of trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 18",
        "description": "Sold goods to Client B on account, list price ₱50,000 with a 5% trade discount. Cost of goods sold was ₱28,000.",
        "rows": 5,
        "solution": [
          { "date": "18", "account": "Accounts Receivable", "debit": 47500, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 47500 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 28000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 28000 },
          { "date": "", "account": "Sold goods on account net of trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 22",
        "description": "Purchased inventory for cash, ₱5,000.",
        "rows": 3,
        "solution": [
          { "date": "22", "account": "Merchandise Inventory", "debit": 5000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 5000 },
          { "date": "", "account": "Purchased inventory for cash", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Feb 25",
        "description": "Sold goods for cash, ₱8,000. The cost of goods sold was ₱4,500.",
        "rows": 5,
        "solution": [
          { "date": "25", "account": "Cash", "debit": 8000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 8000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 4500, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 4500 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "set3_periodic",
    "title": "JOURNALIZING SET 3: PERIODIC SYSTEM (March Transactions)",
    "instructions": "Journalize the following transactions for 'Gamma Goods' using the **Periodic Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Purchases, Sales.",
    "transactions": [
      {
        "date": "Mar 1",
        "description": "Purchased merchandise from Supplier X on credit, ₱25,000.",
        "rows": 3,
        "solution": [
          { "date": "Mar 1", "account": "Purchases", "debit": 25000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 25000 },
          { "date": "", "account": "Purchased goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 3",
        "description": "Sold merchandise to Customer 1 on credit, ₱35,000.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 35000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 35000 },
          { "date": "", "account": "Sold goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 5",
        "description": "Purchased merchandise for cash, list price ₱10,000, trade discount 5%.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Purchases", "debit": 9500, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 9500 },
          { "date": "", "account": "Cash purchase net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 8",
        "description": "Sold merchandise for cash, ₱6,000.",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 6000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 6000 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 10",
        "description": "Purchased merchandise from Supplier Y on credit, ₱15,000.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Purchases", "debit": 15000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 15000 },
          { "date": "", "account": "Purchased goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 12",
        "description": "Sold merchandise to Customer 2 on credit, ₱22,000.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Accounts Receivable", "debit": 22000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 22000 },
          { "date": "", "account": "Sold goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 15",
        "description": "Paid Supplier X ₱25,000 for the Mar 1 purchase.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Accounts Payable", "debit": 25000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 25000 },
          { "date": "", "account": "Payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 18",
        "description": "Collected ₱35,000 from Customer 1 for the Mar 3 sale.",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Cash", "debit": 35000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 35000 },
          { "date": "", "account": "Collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 20",
        "description": "Purchased merchandise from Supplier X on credit, ₱8,500.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Purchases", "debit": 8500, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 8500 },
          { "date": "", "account": "Purchased goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 25",
        "description": "Sold merchandise to Customer 3 on credit, ₱12,500.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 12500, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 12500 },
          { "date": "", "account": "Sold goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "set4_perpetual",
    "title": "JOURNALIZING SET 4: PERPETUAL SYSTEM (April Transactions)",
    "instructions": "Journalize the following transactions for 'Delta Depot' using the **Perpetual Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Cost of Goods Sold.",
    "transactions": [
      {
        "date": "Apr 1",
        "description": "Purchased inventory on account from Supplier M, ₱60,000.",
        "rows": 3,
        "solution": [
          { "date": "Apr 1", "account": "Merchandise Inventory", "debit": 60000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 60000 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 4",
        "description": "Sold goods to Client M on account, ₱90,000. Cost of goods sold was ₱50,000.",
        "rows": 5,
        "solution": [
          { "date": "4", "account": "Accounts Receivable", "debit": 90000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 90000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 50000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 50000 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 6",
        "description": "Purchased inventory for cash, ₱20,000.",
        "rows": 3,
        "solution": [
          { "date": "6", "account": "Merchandise Inventory", "debit": 20000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 20000 },
          { "date": "", "account": "Purchased inventory for cash", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 8",
        "description": "Sold goods for cash, ₱15,000. Cost of goods sold was ₱8,000.",
        "rows": 5,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 15000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 15000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 8000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 8000 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 10",
        "description": "Paid Supplier M ₱30,000 partial payment for the Apr 1 purchase.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Accounts Payable", "debit": 30000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 30000 },
          { "date": "", "account": "Partial payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 12",
        "description": "Collected ₱50,000 from Client M as partial payment for the Apr 4 sale.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Cash", "debit": 50000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 50000 },
          { "date": "", "account": "Partial collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 15",
        "description": "Purchased inventory on account from Supplier N, list price ₱40,000, trade discount 20%.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Merchandise Inventory", "debit": 32000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 32000 },
          { "date": "", "account": "Purchased inventory net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 18",
        "description": "Sold goods to Client N on account, list price ₱30,000, trade discount 10%. Cost of goods sold was ₱15,000.",
        "rows": 5,
        "solution": [
          { "date": "18", "account": "Accounts Receivable", "debit": 27000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 27000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 15000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 15000 },
          { "date": "", "account": "Sold goods on account net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 22",
        "description": "Purchased inventory on account from Supplier M, ₱10,000.",
        "rows": 3,
        "solution": [
          { "date": "22", "account": "Merchandise Inventory", "debit": 10000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 10000 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 25",
        "description": "Sold goods to Client O on account, ₱12,000. Cost of goods sold was ₱6,500.",
        "rows": 5,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 12000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 12000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 6500, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 6500 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "set5_periodic",
    "title": "JOURNALIZING SET 5: PERIODIC SYSTEM (May Transactions)",
    "instructions": "Journalize the following transactions for 'Echo Enterprise' using the **Periodic Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Purchases, Sales.",
    "transactions": [
      {
        "date": "May 2",
        "description": "Purchased merchandise on account from Vendor J, ₱18,000.",
        "rows": 3,
        "solution": [
          { "date": "May 2", "account": "Purchases", "debit": 18000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 18000 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 4",
        "description": "Sold merchandise on account to Customer A, ₱24,000.",
        "rows": 3,
        "solution": [
          { "date": "4", "account": "Accounts Receivable", "debit": 24000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 24000 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 6",
        "description": "Purchased merchandise for cash, ₱7,000.",
        "rows": 3,
        "solution": [
          { "date": "6", "account": "Purchases", "debit": 7000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 7000 },
          { "date": "", "account": "Cash purchase", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 8",
        "description": "Sold merchandise for cash, ₱4,500.",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 4500, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 4500 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 10",
        "description": "Purchased merchandise from Vendor K on account, list price ₱14,000, trade discount 10%.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Purchases", "debit": 12600, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 12600 },
          { "date": "", "account": "Purchased goods net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 12",
        "description": "Sold merchandise to Customer B on account, list price ₱30,000, trade discount 20%.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Accounts Receivable", "debit": 24000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 24000 },
          { "date": "", "account": "Sold goods net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 15",
        "description": "Paid Vendor J in full for the May 2 purchase.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Accounts Payable", "debit": 18000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 18000 },
          { "date": "", "account": "Payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 18",
        "description": "Collected full payment from Customer A for the May 4 sale.",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Cash", "debit": 24000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 24000 },
          { "date": "", "account": "Collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 20",
        "description": "Purchased merchandise from Vendor J on account, ₱5,500.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Purchases", "debit": 5500, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 5500 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 25",
        "description": "Sold merchandise to Customer C on account, ₱8,200.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 8200, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 8200 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "set6_perpetual",
    "title": "JOURNALIZING  SET 6: PERPETUAL SYSTEM (June Transactions)",
    "instructions": "Journalize the following transactions for 'Foxtrot Fashion' using the **Perpetual Inventory System**. \n\n**Accounts to use:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Cost of Goods Sold.",
    "transactions": [
      {
        "date": "Jun 1",
        "description": "Purchased inventory on account from Supplier P, ₱35,000.",
        "rows": 3,
        "solution": [
          { "date": "Jun 1", "account": "Merchandise Inventory", "debit": 35000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 35000 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 3",
        "description": "Sold goods to Client P on account, ₱55,000. Cost of goods sold was ₱30,000.",
        "rows": 5,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 55000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 55000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 30000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 30000 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 5",
        "description": "Purchased inventory for cash, ₱12,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Merchandise Inventory", "debit": 12000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 12000 },
          { "date": "", "account": "Purchased inventory for cash", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 7",
        "description": "Sold goods for cash, ₱9,000. Cost of goods sold was ₱5,000.",
        "rows": 5,
        "solution": [
          { "date": "7", "account": "Cash", "debit": 9000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 9000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 5000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 5000 },
          { "date": "", "account": "Cash sales", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 10",
        "description": "Paid Supplier P the full amount for the Jun 1 purchase.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Accounts Payable", "debit": 35000, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 35000 },
          { "date": "", "account": "Payment of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 12",
        "description": "Collected full payment from Client P for the Jun 3 sale.",
        "rows": 3,
        "solution": [
          { "date": "12", "account": "Cash", "debit": 55000, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 55000 },
          { "date": "", "account": "Collection of account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 15",
        "description": "Purchased inventory on account from Supplier Q, list price ₱25,000, trade discount 20%.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Merchandise Inventory", "debit": 20000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 20000 },
          { "date": "", "account": "Purchased inventory net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 18",
        "description": "Sold goods to Client Q on account, list price ₱40,000, trade discount 10%. Cost of goods sold was ₱20,000.",
        "rows": 5,
        "solution": [
          { "date": "18", "account": "Accounts Receivable", "debit": 36000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 36000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 20000, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 20000 },
          { "date": "", "account": "Sold goods on account net of discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 22",
        "description": "Purchased inventory on account from Supplier P, ₱8,000.",
        "rows": 3,
        "solution": [
          { "date": "22", "account": "Merchandise Inventory", "debit": 8000, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 8000 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 25",
        "description": "Sold goods to Client R on account, ₱14,000. Cost of goods sold was ₱7,500.",
        "rows": 5,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 14000, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 14000 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 7500, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 7500 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  }
        ]
    },
        {
      day: "Day 2",
      topic: "Discounts, Returns, and Net Calculations (Periodic vs. Perpetual)",
      content: `
        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p class="font-bold text-blue-900">Learning Goal</p>
            <p class="text-blue-800">Master the recording of Trade Discounts, Purchase/Sales Discounts, and Returns.</p>
            <p class="text-blue-800">Differentiate between Periodic and Perpetual entries for these transactions.</p>
        </div>

        <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
        <ul class="list-none space-y-8 mb-6">

            <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
            </li>

            <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
                        <tbody class="divide-y divide-gray-200">
                            <tr class="bg-white hover:bg-gray-50">
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
                            </tr>

                            <tr class="bg-gray-50 hover:bg-gray-100">
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
                            </tr>

                            <tr class="bg-white hover:bg-gray-50">
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
                            </tr>

                            <tr class="bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-400">
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
                            </tr>

                            <tr class="bg-gray-50 hover:bg-gray-100">
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
                            </tr>

                            <tr class="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-300">
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>

            <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-3">3. Net Calculation Formulas</h3>
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
        </ul>
      `,
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
    "type": "journalizing",
    "id": "day2_prob1",
    "title": "JOURNALIZING SET 1: PERIODIC SYSTEM (Basic Flow & Trade Discounts)",
    "instructions": "Journalize the transactions for 'Alpha Trading' using the **PERIODIC INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts.",
    "transactions": [
      {
        "date": "Jan 2",
        "description": "Purchased merchandise from Supplier A with a list price of $10,000, less a 20% trade discount. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Jan 2", "account": "Purchases", "debit": 8000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 8000.00 },
          { "date": "", "account": "Purchased goods, 20% trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "5",
        "description": "Sold merchandise to Customer X on account, list price $5,000. Terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Receivable", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Sold merchandise on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "7",
        "description": "Returned defective merchandise to Supplier A, originally billed at $500 (net of trade discount).",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Accounts Payable", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Returned defective goods", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "9",
        "description": "Purchased merchandise from Supplier B for $3,000 cash.",
        "rows": 3,
        "solution": [
          { "date": "9", "account": "Purchases", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Cash purchase of goods", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "12",
        "description": "Paid Supplier A the amount due within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "12", "account": "Accounts Payable", "debit": 7500.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": "", "credit": 150.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 7350.00 },
          { "date": "", "account": "Paid account in full with discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "15",
        "description": "Sold merchandise to Customer Y for $2,000 cash.",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Cash", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Cash sale of merchandise", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "18",
        "description": "Customer X returned $200 of merchandise purchased on Jan 5.",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Sales Returns and Allowances", "debit": 200.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 200.00 },
          { "date": "", "account": "Return of goods from customer", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "20",
        "description": "Purchased merchandise from Supplier C for $4,000 on account. Terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Purchases", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Purchased goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Collected full payment from Customer X.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Cash", "debit": 4800.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 4800.00 },
          { "date": "", "account": "Received payment on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "28",
        "description": "Sold merchandise to Customer Z on account, list price $8,000, 10% trade discount. Terms 1/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "28", "account": "Accounts Receivable", "debit": 7200.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 7200.00 },
          { "date": "", "account": "Sale with trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "day2_prob2",
    "title": "JOURNALIZING SET 2: PERPETUAL SYSTEM (Cost & Inventory Updates)",
    "instructions": "Journalize the transactions for 'Beta Systems' using the **PERPETUAL INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Merchandise Inventory, Cost of Goods Sold.",
    "transactions": [
      {
        "date": "Feb 1",
        "description": "Purchased inventory from Vendor A for $12,000 on account. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Feb 1", "account": "Merchandise Inventory", "debit": 12000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 12000.00 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "3",
        "description": "Sold inventory to Client B for $8,000 on account (Cost of goods sold: $5,000).",
        "rows": 5,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 8000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 8000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "5",
        "description": "Returned $1,000 of defective inventory to Vendor A.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 1000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1000.00 },
          { "date": "", "account": "Returned inventory to vendor", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "8",
        "description": "Client B returned goods sold for $800. The goods were not damaged and returned to inventory (Original Cost: $500).",
        "rows": 5,
        "solution": [
          { "date": "8", "account": "Sales Returns and Allowances", "debit": 800.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 800.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Customer return recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "10",
        "description": "Paid Vendor A the balance due within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Accounts Payable", "debit": 11000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 220.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 10780.00 },
          { "date": "", "account": "Paid account with discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "14",
        "description": "Purchased inventory for $5,000 cash.",
        "rows": 3,
        "solution": [
          { "date": "14", "account": "Merchandise Inventory", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Cash purchase of inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "18",
        "description": "Sold inventory for $3,000 cash (Cost: $1,800).",
        "rows": 5,
        "solution": [
          { "date": "18", "account": "Cash", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 1800.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1800.00 },
          { "date": "", "account": "Cash sale recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "22",
        "description": "Purchased inventory from Vendor C for $6,000. Terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "22", "account": "Merchandise Inventory", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Purchased inventory on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Sold inventory to Client D for $4,000 on account (Cost: $2,500). Terms 2/10, n/30.",
        "rows": 5,
        "solution": [
          { "date": "25", "account": "Accounts Receivable", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 2500.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 2500.00 },
          { "date": "", "account": "Sold goods on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "28",
        "description": "Received payment from Client B for the balance due (after returns) within the discount period (Terms 2/10, n/30 were applicable).",
        "rows": 4,
        "solution": [
          { "date": "28", "account": "Cash", "debit": 7056.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 144.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 7200.00 },
          { "date": "", "account": "Received payment less discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "day2_prob3",
    "title": "JOURNALIZING SET 3: PERIODIC SYSTEM (Advanced Discounts)",
    "instructions": "Journalize the transactions for 'Gamma Inc.' using the **PERIODIC INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts.",
    "transactions": [
      {
        "date": "Mar 1",
        "description": "Purchased goods from Supplier Main: List price $20,000, 10% trade discount. Terms 3/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Mar 1", "account": "Purchases", "debit": 18000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 18000.00 },
          { "date": "", "account": "Purchase with trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "3",
        "description": "Sold goods to Customer West: List price $10,000, 5% trade discount. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 9500.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 9500.00 },
          { "date": "", "account": "Sale with trade discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "5",
        "description": "Returned goods to Supplier Main with a list price of $1,000 (net cost was $900).",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 900.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 900.00 },
          { "date": "", "account": "Return to supplier", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "8",
        "description": "Customer West returned goods with a list price of $500 (net price $475).",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Sales Returns and Allowances", "debit": 475.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 475.00 },
          { "date": "", "account": "Customer return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "10",
        "description": "Paid Supplier Main in full, within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Accounts Payable", "debit": 17100.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": "", "credit": 513.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 16587.00 },
          { "date": "", "account": "Payment with 3% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "13",
        "description": "Received payment from Customer West in full, within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "13", "account": "Cash", "debit": 8844.50, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 180.50, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 9025.00 },
          { "date": "", "account": "Collection with 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "16",
        "description": "Purchased goods from Supplier Fast for $2,500 cash.",
        "rows": 3,
        "solution": [
          { "date": "16", "account": "Purchases", "debit": 2500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 2500.00 },
          { "date": "", "account": "Cash purchase", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "20",
        "description": "Sold goods to Customer East for $4,000 on account. Terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Accounts Receivable", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Sale on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Purchased goods from Supplier Slow for $5,000 on account. Terms n/45.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Purchases", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Purchase on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "30",
        "description": "Received partial payment of $2,000 from Customer East (No discount applies).",
        "rows": 3,
        "solution": [
          { "date": "30", "account": "Cash", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Partial collection", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "day2_prob4",
    "title": "JOURNALIZING SET 4: PERPETUAL SYSTEM (Returns Focus)",
    "instructions": "Journalize the transactions for 'Delta Corp' using the **PERPETUAL INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Merchandise Inventory, Cost of Goods Sold.",
    "transactions": [
      {
        "date": "Apr 1",
        "description": "Purchased inventory from Vendor X for $15,000 on account. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Apr 1", "account": "Merchandise Inventory", "debit": 15000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 15000.00 },
          { "date": "", "account": "Purchased inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "4",
        "description": "Sold inventory to Client Y for $10,000 on account (Cost: $6,000). Terms 2/10, n/30.",
        "rows": 5,
        "solution": [
          { "date": "4", "account": "Accounts Receivable", "debit": 10000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 10000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Sold inventory on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "6",
        "description": "Returned defective inventory to Vendor X amounting to $2,000.",
        "rows": 3,
        "solution": [
          { "date": "6", "account": "Accounts Payable", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Return of defective inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "9",
        "description": "Client Y returned goods sold for $1,000 (Cost was $600). The goods were returned to stock.",
        "rows": 5,
        "solution": [
          { "date": "9", "account": "Sales Returns and Allowances", "debit": 1000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 1000.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 600.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 600.00 },
          { "date": "", "account": "Customer return recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "11",
        "description": "Paid Vendor X in full, within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "11", "account": "Accounts Payable", "debit": 13000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 260.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 12740.00 },
          { "date": "", "account": "Payment with 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "14",
        "description": "Received payment from Client Y in full, within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "14", "account": "Cash", "debit": 8820.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 180.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 9000.00 },
          { "date": "", "account": "Collection with 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "18",
        "description": "Purchased inventory for $4,000 cash.",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Merchandise Inventory", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Cash purchase", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "22",
        "description": "Sold inventory for $2,500 cash (Cost: $1,500).",
        "rows": 5,
        "solution": [
          { "date": "22", "account": "Cash", "debit": 2500.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 2500.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 1500.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1500.00 },
          { "date": "", "account": "Cash sale recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Purchased inventory from Vendor Z for $8,000 on account.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Merchandise Inventory", "debit": 8000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 8000.00 },
          { "date": "", "account": "Purchase on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "30",
        "description": "Sold inventory to Client W for $5,000 on account (Cost: $3,000).",
        "rows": 5,
        "solution": [
          { "date": "30", "account": "Accounts Receivable", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Credit sale recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "day2_prob5",
    "title": "JOURNALIZING SET 5: PERIODIC SYSTEM (Missed Discounts)",
    "instructions": "Journalize the transactions for 'Epsilon Ltd' using the **PERIODIC INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts.",
    "transactions": [
      {
        "date": "May 1",
        "description": "Purchased goods from Supplier One for $6,000. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "May 1", "account": "Purchases", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Purchase on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "3",
        "description": "Sold goods to Customer A for $3,000 on account. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Sale on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "5",
        "description": "Returned defective goods to Supplier One worth $500.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Returned goods to supplier", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "15",
        "description": "Paid Supplier One the balance due (Discount period has expired).",
        "rows": 3,
        "solution": [
          { "date": "15", "account": "Accounts Payable", "debit": 5500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 5500.00 },
          { "date": "", "account": "Paid account after discount period", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "18",
        "description": "Customer A paid the full amount due (Discount period has expired).",
        "rows": 3,
        "solution": [
          { "date": "18", "account": "Cash", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Collected full payment", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "20",
        "description": "Purchased goods from Supplier Two for $4,000. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Purchases", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Purchase on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "22",
        "description": "Sold goods to Customer B for $5,000 on account. Terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "22", "account": "Accounts Receivable", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Sale on credit", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Customer B returned goods worth $400.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Sales Returns and Allowances", "debit": 400.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 400.00 },
          { "date": "", "account": "Customer return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "28",
        "description": "Paid Supplier Two in full within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "28", "account": "Accounts Payable", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": "", "credit": 80.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 3920.00 },
          { "date": "", "account": "Paid with discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "30",
        "description": "Received payment from Customer B in full within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "30", "account": "Cash", "debit": 4508.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 92.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 4600.00 },
          { "date": "", "account": "Received payment with discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "day2_prob6",
    "title": "JOURNALIZING SET 6: PERPETUAL SYSTEM (High Volume)",
    "instructions": "Journalize the transactions for 'Zeta Mart' using the **PERPETUAL INVENTORY SYSTEM**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales Revenue, Sales Returns and Allowances, Sales Discounts, Merchandise Inventory, Cost of Goods Sold.",
    "transactions": [
      {
        "date": "Jun 1",
        "description": "Purchased inventory for $20,000 on account. Terms 1/15, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Jun 1", "account": "Merchandise Inventory", "debit": 20000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 20000.00 },
          { "date": "", "account": "Purchase inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "3",
        "description": "Sold inventory for $12,000 on account (Cost: $7,000). Terms 1/15, n/30.",
        "rows": 5,
        "solution": [
          { "date": "3", "account": "Accounts Receivable", "debit": 12000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 12000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 7000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 7000.00 },
          { "date": "", "account": "Sold inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "5",
        "description": "Returned $2,000 of inventory to the supplier.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Returned inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "7",
        "description": "Customer returned goods sold for $500 (Cost $300). Goods returned to stock.",
        "rows": 5,
        "solution": [
          { "date": "7", "account": "Sales Returns and Allowances", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 300.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 300.00 },
          { "date": "", "account": "Customer return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "12",
        "description": "Paid the supplier in full within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "12", "account": "Accounts Payable", "debit": 18000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 180.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 17820.00 },
          { "date": "", "account": "Paid with 1% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "15",
        "description": "Received full payment from the customer within the discount period.",
        "rows": 4,
        "solution": [
          { "date": "15", "account": "Cash", "debit": 11385.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 115.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 11500.00 },
          { "date": "", "account": "Received payment with 1% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "20",
        "description": "Purchased inventory for $3,000 cash.",
        "rows": 3,
        "solution": [
          { "date": "20", "account": "Merchandise Inventory", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Cash purchase", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "22",
        "description": "Sold inventory for $2,000 cash (Cost: $1,200).",
        "rows": 5,
        "solution": [
          { "date": "22", "account": "Cash", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 1200.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1200.00 },
          { "date": "", "account": "Cash sale", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "25",
        "description": "Purchased inventory for $5,000 on account.",
        "rows": 3,
        "solution": [
          { "date": "25", "account": "Merchandise Inventory", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Purchase on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "28",
        "description": "Sold inventory for $4,000 on account (Cost: $2,400).",
        "rows": 5,
        "solution": [
          { "date": "28", "account": "Accounts Receivable", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Sales Revenue", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 2400.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 2400.00 },
          { "date": "", "account": "Credit sale", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
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

        // --- JOURNALIZING QUESTIONS (6) ---
        {
    "type": "journalizing",
    "id": "prob_set_1",
    "title": "JOURNALIZING SET 1: PERIODIC SYSTEM (Manila Merchandising)",
    "instructions": "Journalize the transactions for March using the **Periodic Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out. \n\n*Note: 'Purchases' is used for merchandise costs. Freight In is a separate account.*",
    "transactions": [
      {
        "date": "Mar 1",
        "description": "Purchased merchandise from Supplier A on account: List price ₱50,000, trade discount 20%, terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "Mar 1", "account": "Purchases", "debit": 40000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 40000.00 },
          { "date": "", "account": "Purchase on account (50k less 20%)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 2",
        "description": "Sold merchandise to Customer X on account, ₱60,000, terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 60000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 60000.00 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 3",
        "description": "Paid freight of ₱1,500 on the purchase from Supplier A (FOB Shipping Point).",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Freight In", "debit": 1500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 1500.00 },
          { "date": "", "account": "Paid freight on purchase", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 4",
        "description": "Customer X returned defective goods worth ₱5,000.",
        "rows": 3,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Return of goods by customer", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 5",
        "description": "Returned damaged merchandise to Supplier A worth ₱4,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 4000.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 4000.00 },
          { "date": "", "account": "Return of goods to supplier", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 6",
        "description": "Sold merchandise to Customer Y for ₱20,000 cash, FOB Destination. Paid freight of ₱500.",
        "rows": 5,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 20000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 20000.00 },
          { "date": "", "account": "Freight Out", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Cash sale and freight payment", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 7",
        "description": "Purchased merchandise from Supplier B: ₱30,000, FOB Destination, terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Purchases", "debit": 30000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 30000.00 },
          { "date": "", "account": "Purchased goods FOB Destination", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 8",
        "description": "Received check from Customer X for full payment of March 2 transaction less return and discount.",
        "rows": 4,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 53900.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 1100.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 55000.00 },
          { "date": "", "account": "Collection net of return and 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 9",
        "description": "Paid Supplier A the amount due for the March 1 transaction less return and discount.",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 36000.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": 720.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 35280.00 },
          { "date": "", "account": "Payment net of return and 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Mar 10",
        "description": "Sold merchandise to Customer Z on account, ₱15,000, terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "10", "account": "Accounts Receivable", "debit": 15000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 15000.00 },
          { "date": "", "account": "Sold goods on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "prob_set_2",
    "title": "JOURNALIZING SET 2: PERPETUAL SYSTEM (Cebu Tech)",
    "instructions": "Journalize the transactions for April using the **Perpetual Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Cost of Goods Sold, Freight Out. \n\n*Note: For Perpetual, freight-in and purchase discounts/returns affect 'Merchandise Inventory'. Every sale requires two entries.*",
    "transactions": [
      {
        "date": "Apr 1",
        "description": "Purchased laptops from Vendor A: ₱100,000, terms 2/10, n/30, FOB Shipping Point.",
        "rows": 3,
        "solution": [
          { "date": "Apr 1", "account": "Merchandise Inventory", "debit": 100000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 100000.00 },
          { "date": "", "account": "Purchased inventory on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 2",
        "description": "Sold laptops to Client B on account for ₱80,000. The cost of the laptops was ₱50,000.",
        "rows": 5,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 80000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 80000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 50000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 50000.00 },
          { "date": "", "account": "Recorded sale and cost of merchandise", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 3",
        "description": "Paid LBC Express ₱2,000 for freight charges on the April 1 purchase.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Merchandise Inventory", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Paid freight-in (capitalized)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 4",
        "description": "Client B returned defective laptops sold for ₱8,000 (Cost ₱5,000). The goods were returned to inventory.",
        "rows": 5,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 8000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 8000.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Customer return and inventory restoration", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 5",
        "description": "Returned defective units to Vendor A worth ₱10,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 10000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 10000.00 },
          { "date": "", "account": "Return of inventory to vendor", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 6",
        "description": "Sold accessories for cash ₱5,000 (Cost ₱2,500). Terms FOB Destination. Paid ₱200 delivery fee.",
        "rows": 7,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 2500.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 2500.00 },
          { "date": "", "account": "Freight Out", "debit": 200.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 200.00 },
          { "date": "", "account": "Cash sale and freight payment", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 7",
        "description": "Purchased inventory from Vendor C: ₱25,000, FOB Destination, terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Merchandise Inventory", "debit": 25000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 25000.00 },
          { "date": "", "account": "Purchased inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 8",
        "description": "Received full payment from Client B for the April 2 sale (less return, terms 2/10 apply).",
        "rows": 4,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 70560.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 1440.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 72000.00 },
          { "date": "", "account": "Collection net of return and 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 9",
        "description": "Paid Vendor A the full amount due for the April 1 purchase (less return, within discount period).",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 90000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1800.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 88200.00 },
          { "date": "", "account": "Payment net of return and 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Apr 10",
        "description": "Sold remaining stock to Client D on account ₱10,000 (Cost ₱6,000).",
        "rows": 5,
        "solution": [
          { "date": "10", "account": "Accounts Receivable", "debit": 10000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 10000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Recorded sale and cost", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "prob_set_3",
    "title": "JOURNALIZING SET 3: PERIODIC SYSTEM (Davao Distributors)",
    "instructions": "Journalize the transactions for May using the **Periodic Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out.",
    "transactions": [
      {
        "date": "May 1",
        "description": "Purchased goods from Supplier Omega: ₱80,000, trade discount 10%, terms 1/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "May 1", "account": "Purchases", "debit": 72000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 72000.00 },
          { "date": "", "account": "Purchase (80k less 10% trade discount)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 2",
        "description": "Sold goods to Retailer X: ₱40,000, trade discount 5%, terms 2/10, n/30.",
        "rows": 3,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 38000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 38000.00 },
          { "date": "", "account": "Sale (40k less 5% trade discount)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 3",
        "description": "Paid ₱1,200 shipping fee on the May 1 purchase (FOB Shipping Point).",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Freight In", "debit": 1200.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 1200.00 },
          { "date": "", "account": "Paid freight in", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 4",
        "description": "Retailer X returned defective items with a list price of ₱2,000 (Trade discount applies to return value).",
        "rows": 3,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 1900.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 1900.00 },
          { "date": "", "account": "Return (2k less 5%)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 5",
        "description": "Returned goods to Supplier Omega: List price ₱5,000 (Trade discount applies to return value).",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 4500.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 4500.00 },
          { "date": "", "account": "Return (5k less 10%)", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 6",
        "description": "Sold goods to Retailer Y for ₱15,000 cash. Terms FOB Shipping Point. We prepaid the freight of ₱400 for them.",
        "rows": 4,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 15000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 15000.00 },
          { "date": "", "account": "Accounts Receivable", "debit": 400.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 400.00 },
          { "date": "", "account": "Sale and prepaid freight for customer", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 7",
        "description": "Purchased goods from Supplier Beta: ₱20,000, FOB Destination.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Purchases", "debit": 20000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 20000.00 },
          { "date": "", "account": "Purchased goods", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 8",
        "description": "Retailer Y paid us the freight we prepaid on May 6.",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 400.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 400.00 },
          { "date": "", "account": "Collection of prepaid freight", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 9",
        "description": "Paid Supplier Omega for May 1 purchase in full.",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 67500.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": 675.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 66825.00 },
          { "date": "", "account": "Payment net of return and 1% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "May 10",
        "description": "Received payment from Retailer X for May 2 sale in full.",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Cash", "debit": 35378.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 722.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 36100.00 },
          { "date": "", "account": "Collection net of return and 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "prob_set_4",
    "title": "JOURNALIZING SET 4: PERPETUAL SYSTEM (Iloilo Gadgets)",
    "instructions": "Journalize the transactions for June using the **Perpetual Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Cost of Goods Sold, Freight Out.",
    "transactions": [
      {
        "date": "Jun 1",
        "description": "Purchased tablets: ₱60,000, 2/10, n/30, FOB Destination.",
        "rows": 3,
        "solution": [
          { "date": "Jun 1", "account": "Merchandise Inventory", "debit": 60000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 60000.00 },
          { "date": "", "account": "Purchase inventory FOB Dest", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 2",
        "description": "Sold tablets on account ₱45,000 (Cost ₱25,000). Terms 2/10, n/30.",
        "rows": 5,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 45000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 45000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 25000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 25000.00 },
          { "date": "", "account": "Sale and Cost recorded", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 3",
        "description": "Paid ₱0 freight on the June 1 purchase (Seller paid it).",
        "rows": 1,
        "solution": [
          { "date": "3", "account": "No Entry", "debit": 0.00, "credit": 0.00 },
          { "date": "", "account": "", "debit": "", "credit": "" },
          { "date": "", "account": "No entry for buyer on FOB Destination", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 4",
        "description": "Customer returned a tablet sold for ₱4,500 (Cost ₱2,500).",
        "rows": 5,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 4500.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 4500.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 2500.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 2500.00 },
          { "date": "", "account": "Customer return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 5",
        "description": "Returned defective tablets to vendor, credit received ₱6,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Purchase return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 6",
        "description": "Sold tablets for cash ₱10,000 (Cost ₱6,000). FOB Destination, Paid freight ₱500.",
        "rows": 7,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 10000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 10000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 6000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 6000.00 },
          { "date": "", "account": "Freight Out", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Sale and delivery expense", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 7",
        "description": "Purchased phones: ₱30,000, FOB Shipping Point. Terms n/30.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Merchandise Inventory", "debit": 30000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 30000.00 },
          { "date": "", "account": "Purchase inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 8",
        "description": "Paid shipping on June 7 purchase ₱1,000.",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Merchandise Inventory", "debit": 1000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 1000.00 },
          { "date": "", "account": "Freight In capitalized", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 9",
        "description": "Paid balance for June 1 purchase (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 54000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 1080.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 52920.00 },
          { "date": "", "account": "Payment with discount credited to inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jun 10",
        "description": "Received collection for June 2 sale (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Cash", "debit": 39690.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 810.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 40500.00 },
          { "date": "", "account": "Collection net of return and discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "prob_set_5",
    "title": "JOURNALIZING SET 5: PERIODIC SYSTEM (Bicol Builders)",
    "instructions": "Journalize the transactions for July using the **Periodic Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Sales, Sales Returns and Allowances, Sales Discounts, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out.",
    "transactions": [
      {
        "date": "Jul 1",
        "description": "Purchased hardware supplies: ₱150,000, 3/10, n/30, FOB Shipping Point.",
        "rows": 3,
        "solution": [
          { "date": "Jul 1", "account": "Purchases", "debit": 150000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 150000.00 },
          { "date": "", "account": "Purchase on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 2",
        "description": "Sold supplies to Contractor A: ₱200,000, 2/10, n/30, FOB Shipping Point.",
        "rows": 3,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 200000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 200000.00 },
          { "date": "", "account": "Sale on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 3",
        "description": "Paid trucking fee for July 1 purchase: ₱3,500.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Freight In", "debit": 3500.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 3500.00 },
          { "date": "", "account": "Paid freight in", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 4",
        "description": "Contractor A returned excess supplies: ₱20,000.",
        "rows": 3,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 20000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 20000.00 },
          { "date": "", "account": "Customer return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 5",
        "description": "We returned damaged goods to vendor: ₱15,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 15000.00, "credit": "" },
          { "date": "", "account": "Purchase Returns and Allowances", "debit": "", "credit": 15000.00 },
          { "date": "", "account": "Purchase return", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 6",
        "description": "Sold supplies cash ₱10,000. Paid courier ₱300 (FOB Destination).",
        "rows": 5,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 10000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 10000.00 },
          { "date": "", "account": "Freight Out", "debit": 300.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 300.00 },
          { "date": "", "account": "Cash sale and freight out", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 7",
        "description": "Purchased from Vendor Z: ₱50,000, FOB Destination.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Purchases", "debit": 50000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 50000.00 },
          { "date": "", "account": "Purchase on account", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 8",
        "description": "Paid delivery fee for July 6 transaction (Already recorded in compound entry above, but if separate step requested, assume another sale). *Correction: This step is usually payment. Let's say: Paid freight for a new cash sale of ₱5000 FOB Dest.*",
        "rows": 3,
        "solution": [
          { "date": "8", "account": "Freight Out", "debit": 150.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 150.00 },
          { "date": "", "account": "Paid freight on sale", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 9",
        "description": "Paid balance of July 1 purchase (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 135000.00, "credit": "" },
          { "date": "", "account": "Purchase Discounts", "debit": 4050.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 130950.00 },
          { "date": "", "account": "Payment less 3% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Jul 10",
        "description": "Collected balance from Contractor A (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Cash", "debit": 176400.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 3600.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 180000.00 },
          { "date": "", "account": "Collection less 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
  },
  {
    "type": "journalizing",
    "id": "prob_set_6",
    "title": "JOURNALIZING SET 6: PERPETUAL SYSTEM (Laguna Logistics)",
    "instructions": "Journalize the transactions for August using the **Perpetual Inventory System**. \n\n**Chart of Accounts:** Cash, Accounts Receivable, Accounts Payable, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Cost of Goods Sold, Freight Out.",
    "transactions": [
      {
        "date": "Aug 1",
        "description": "Purchased auto parts: ₱80,000, terms 1/10, n/30, FOB Shipping Point.",
        "rows": 3,
        "solution": [
          { "date": "Aug 1", "account": "Merchandise Inventory", "debit": 80000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 80000.00 },
          { "date": "", "account": "Purchase inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 2",
        "description": "Sold parts to Shop B: ₱50,000 (Cost ₱30,000). Terms 2/10, n/30.",
        "rows": 5,
        "solution": [
          { "date": "2", "account": "Accounts Receivable", "debit": 50000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 50000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 30000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 30000.00 },
          { "date": "", "account": "Sale and Cost", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 3",
        "description": "Paid shipping for Aug 1 purchase: ₱2,000.",
        "rows": 3,
        "solution": [
          { "date": "3", "account": "Merchandise Inventory", "debit": 2000.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 2000.00 },
          { "date": "", "account": "Freight in capitalized", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 4",
        "description": "Shop B returned parts: Sales Price ₱5,000 (Cost ₱3,000).",
        "rows": 5,
        "solution": [
          { "date": "4", "account": "Sales Returns and Allowances", "debit": 5000.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 5000.00 },
          { "date": "", "account": "Merchandise Inventory", "debit": 3000.00, "credit": "" },
          { "date": "", "account": "Cost of Goods Sold", "debit": "", "credit": 3000.00 },
          { "date": "", "account": "Return from customer", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 5",
        "description": "Returned defective parts to vendor: ₱8,000.",
        "rows": 3,
        "solution": [
          { "date": "5", "account": "Accounts Payable", "debit": 8000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 8000.00 },
          { "date": "", "account": "Return to vendor", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 6",
        "description": "Sold parts cash ₱20,000 (Cost ₱12,000). Paid delivery ₱800 (FOB Dest).",
        "rows": 7,
        "solution": [
          { "date": "6", "account": "Cash", "debit": 20000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 20000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 12000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 12000.00 },
          { "date": "", "account": "Freight Out", "debit": 800.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 800.00 },
          { "date": "", "account": "Cash sale and freight", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 7",
        "description": "Purchased parts: ₱40,000, FOB Destination.",
        "rows": 3,
        "solution": [
          { "date": "7", "account": "Merchandise Inventory", "debit": 40000.00, "credit": "" },
          { "date": "", "account": "Accounts Payable", "debit": "", "credit": 40000.00 },
          { "date": "", "account": "Purchase inventory", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 8",
        "description": "Paid delivery on a separate small cash sale (Sales Price ₱1000, Cost ₱500) of ₱100.",
        "rows": 7,
        "solution": [
          { "date": "8", "account": "Cash", "debit": 1000.00, "credit": "" },
          { "date": "", "account": "Sales", "debit": "", "credit": 1000.00 },
          { "date": "", "account": "Cost of Goods Sold", "debit": 500.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 500.00 },
          { "date": "", "account": "Freight Out", "debit": 100.00, "credit": "" },
          { "date": "", "account": "Cash", "debit": "", "credit": 100.00 },
          { "date": "", "account": "Small cash sale with freight", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 9",
        "description": "Paid Aug 1 purchase (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "9", "account": "Accounts Payable", "debit": 72000.00, "credit": "" },
          { "date": "", "account": "Merchandise Inventory", "debit": "", "credit": 720.00 },
          { "date": "", "account": "Cash", "debit": "", "credit": 71280.00 },
          { "date": "", "account": "Payment with 1% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      },
      {
        "date": "Aug 10",
        "description": "Collected Aug 2 sale (less return and discount).",
        "rows": 4,
        "solution": [
          { "date": "10", "account": "Cash", "debit": 44100.00, "credit": "" },
          { "date": "", "account": "Sales Discounts", "debit": 900.00, "credit": "" },
          { "date": "", "account": "Accounts Receivable", "debit": "", "credit": 45000.00 },
          { "date": "", "account": "Collection with 2% discount", "debit": "", "credit": "", "isExplanation": true }
        ]
      }
    ]
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
