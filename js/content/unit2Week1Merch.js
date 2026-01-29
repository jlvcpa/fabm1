// Content for Unit 2: Merchandising Business
// FIXED: We use 'export const' to create a named export.

export const unit2Data = {
    week1: [
        {
            day: "Day 1",
            topic: "Foundations of Merchandising",
            content:
                `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="font-bold text-blue-900">Learning Goal</p>
                    <p class="text-blue-800">Understand why inventory systems are critical in merchandising operations.</p>
                </div>
                <h3 class="text-xl font-bold mb-4">Topic Focus</h3>
                <ul class="list-none space-y-8 mb-6">
                    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">1. Definition: The Business of "Buying and Selling"</h3>
                        <div class="text-gray-700 mb-4">
                    <p class="mb-3">
                        In the vast ecosystem of commerce, merchandising businesses serve as the essential bridge between manufacturers (who create products) and consumers (who use them). Unlike manufacturers who transform raw materials into finished goods, or service providers who offer intangible skills, a merchandising business operates on a simpler, yet high-stakes premise: <strong>Arbitrage of location and convenience</strong>.
                    </p>

                    <h4 class="font-bold mb-1">The Core Concept</h4>
                    <p class="mb-3">
                        A merchandising business generates revenue by purchasing finished goods and reselling them at a higher price. They do not change the form of the product. The value they add is not in creation, but in distribution and accessibility.
                    </p>

                    <ul class="list-disc pl-5 mb-4 space-y-2">
                        <li>
                            <strong>The "No Change" Rule:</strong> If a business buys wood and glue to sell tables, they are a manufacturer. If a business buys completed tables from a factory and sells them in a showroom, they are a merchandiser.
                        </li>
                        <li>
                            <strong>The Economic Utility:</strong> Why do customers pay more to a merchandiser than the factory price?
                            <ul class="list-circle pl-5 mt-1">
                                <li><em>Breaking Bulk:</em> Factories sell in thousands; merchandisers sell in single units.</li>
                                <li><em>Assortment:</em> Merchandisers curate products from multiple factories in one place.</li>
                                <li><em>Immediacy:</em> Merchandisers hold stock so the customer doesn't have to wait for production.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4 class="font-bold mb-1">Types of Merchandisers</h4>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Wholesalers:</strong> These are the "middlemen" who buy large quantities directly from producers and sell smaller (but still significant) quantities to retailers. They rarely sell to the end-user.
                        </li>
                        <li>
                            <strong>Retailers:</strong> These businesses sell directly to the final consumer. This ranges from giant big-box stores (like Walmart) to e-commerce sites (like Amazon) to small local convenience stores.
                        </li>
                    </ul>
                    </div>
                        <div class="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
                            <strong>Key Concept:</strong> If a business buys wood and glue to make tables, they are a <em>manufacturer</em>. If they buy completed tables to sell in a showroom, they are a <em>merchandiser</em>.
                        </div>
                    </li>

                    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">2. Comparison: Service vs. Merchandising</h3>
                        <p class="text-gray-700 mb-4">
                            <strong>Service (sells time/skills) vs. Merchandising (sells tangible goods).</strong> This distinction fundamentally alters the Income Statement. A service business uses a "single-step" flow (Revenue - Expenses), while a merchandising business requires a "multi-step" calculation involving Cost of Goods Sold (COGS).
                        </p>
        
                        <div class="my-6 flex justify-center">
                            <svg width="100%" height="auto" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="max-w-2xl">
                                <rect x="0" y="0" width="600" height="350" fill="#f9f9f9" rx="10"/>
                                <text x="300" y="30" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#333">Service vs. Merchandising Income Structure</text>
                                <g transform="translate(50, 60)">
                                    <rect x="0" y="0" width="220" height="260" fill="#e3f2fd" stroke="#2196f3" rx="5"/>
                                    <text x="110" y="30" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#0d47a1">Service Business</text>
                                    <rect x="20" y="60" width="180" height="40" fill="#4caf50" rx="3"/>
                                    <text x="110" y="85" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Service Revenue</text>
                                    <text x="110" y="125" font-family="Arial" font-size="20" text-anchor="middle" fill="#333">-</text>
                                    <rect x="20" y="140" width="180" height="40" fill="#f44336" rx="3"/>
                                    <text x="110" y="165" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Operating Expenses</text>
                                    <line x1="20" y1="200" x2="200" y2="200" stroke="#333" stroke-width="2"/>
                                    <rect x="20" y="210" width="180" height="40" fill="#2196f3" rx="3"/>
                                    <text x="110" y="235" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Net Income</text>
                                </g>
                                <g transform="translate(330, 60)">
                                    <rect x="0" y="0" width="220" height="260" fill="#fff3e0" stroke="#ff9800" rx="5"/>
                                    <text x="110" y="30" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#e65100">Merchandising Business</text>
                                    <rect x="20" y="50" width="180" height="30" fill="#4caf50" rx="3"/>
                                    <text x="110" y="70" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Sales Revenue</text>
                                    <text x="110" y="95" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">- Cost of Goods Sold</text>
                                    <rect x="20" y="105" width="180" height="30" fill="#ff9800" rx="3"/>
                                    <text x="110" y="125" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Gross Profit</text>
                                    <text x="110" y="150" font-family="Arial" font-size="14" text-anchor="middle" fill="#333">- Operating Expenses</text>
                                    <line x1="20" y1="160" x2="200" y2="160" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                                    <rect x="20" y="210" width="180" height="40" fill="#2196f3" rx="3"/>
                                    <text x="110" y="235" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Net Income</text>
                                </g>
                            </svg>
                        </div>
                    </li>

                        <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">3. Inventory: The Lifeblood</h3>
                        <p class="text-gray-700 mb-4">
                            <strong>The lifeblood of merchandising; the primary asset for generating revenue.</strong> Inventory is essentially "frozen cash." It represents the products waiting to be sold.
                        </p>
                        <ul class="list-disc pl-5 space-y-2 text-gray-600">
                    <li>
                        <strong>Revenue Generation:</strong> Inventory is the lifeblood of a merchandising business because it serves as the primary source of incoming revenue. If a customer enters a store looking for a specific item and it is unavailable, the immediate sale is effectively lost. Beyond the single transaction, frequent stockouts damage the company's reputation and reliability in the eyes of the consumer. Frustrated shoppers will often turn to competitors to fulfill their needs, potentially resulting in permanent customer churn. Therefore, maintaining adequate stock levels is not just about logistics, but is a critical component of sales strategy and customer retention.
                    </li>
                    <li>
                            <strong>Carrying Costs:</strong> While inventory is a valuable asset, holding too much of it creates a significant financial burden known as carrying costs. The business must pay for physical requirements, such as warehouse rent, electricity, and security systems to protect the goods. Additionally, capital tied up in unsold inventory cannot be used for other investment opportunities, and the business must often pay premiums for insurance coverage. There is also the inherent risk of shrinkage, where goods are lost due to theft, damage during handling, or administrative errors. Furthermore, products may become obsolete, out of fashion, or spoiled if they sit on the shelves too long, turning a potential profit into a complete write-off.
                    </li>
                    <li>
                        <strong>The Goal:</strong> The ultimate objective of effective inventory management is to achieve a delicate balance between having enough stock to meet demand and minimizing the amount held in storage. Managers aim for a high inventory turnover ratio, which indicates that goods are being sold and replaced rapidly rather than sitting idle. Moving inventory quickly frees up essential cash flow, allowing the business to reinvest in new, profitable products. However, this speed cannot come at the expense of availability, as running out of stock halts the revenue cycle immediately. Success lies in optimizing ordering cycles so that new shipments arrive exactly when the old stock is nearing depletion, minimizing both holding costs and missed sales.
                    </li>
                </ul>
            </li>

                    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">4. The Operating Cycle & Internal Controls</h3>
                        <p class="text-gray-700 mb-4">
                            <strong>Flow: Purchase &rarr; Storage &rarr; Sale.</strong> This cycle is longer for merchandisers than service providers because cash is tied up in inventory. To protect this "frozen cash," strict internal controls are required at every step.
                        </p>
    
                        <div class="my-6 flex justify-center">
                            <svg width="100%" height="auto" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" class="max-w-3xl">
                                <rect x="0" y="0" width="700" height="400" fill="#ffffff" stroke="#ddd" rx="10"/>
                                <text x="350" y="40" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#333">The Merchandising Operating Cycle</text>
                                <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#555"/>
                                    </marker>
                                </defs>
                                <g transform="translate(350, 100)">
                                    <circle cx="0" cy="0" r="50" fill="#8bc34a" stroke="#558b2f" stroke-width="3"/>
                                    <text x="0" y="5" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="white">CASH</text>
                                </g>
                                <g transform="translate(550, 200)">
                                    <circle cx="0" cy="0" r="50" fill="#ffb74d" stroke="#ef6c00" stroke-width="3"/>
                                    <text x="0" y="-10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Buy</text>
                                    <text x="0" y="10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Inventory</text>
                                </g>
                                <g transform="translate(350, 300)">
                                    <circle cx="0" cy="0" r="50" fill="#4fc3f7" stroke="#0277bd" stroke-width="3"/>
                                    <text x="0" y="-10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Hold</text>
                                    <text x="0" y="10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Inventory</text>
                                </g>
                                <g transform="translate(150, 200)">
                                    <circle cx="0" cy="0" r="50" fill="#e57373" stroke="#c62828" stroke-width="3"/>
                                    <text x="0" y="-10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Sell in Cash </text>
                                    <text x="0" y="10" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">/ on Credit</text>
                                </g>
                                <line x1="390" y1="130" x2="510" y2="170" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                                <line x1="510" y1="230" x2="390" y2="270" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                                <line x1="310" y1="270" x2="190" y2="230" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                                <line x1="190" y1="170" x2="310" y2="130" stroke="#555" stroke-width="2" marker-end="url(#arrowhead)"/>
                                <text x="490" y="140" font-family="Arial" font-size="12" fill="#666">Accounts Payable</text>
                                <text x="200" y="140" font-family="Arial" font-size="12" fill="#666">Collections</text>
                            </svg>
                        </div>
                            <p class="text-sm text-gray-500 mt-2 mb-6 italic text-center">
                            <strong>Figure 1:</strong> The cycle of converting cash into goods and back into cash.
                        </p>

                        <div class="space-y-6 border-t border-gray-200 pt-6">
                            <h4 class="font-bold text-gray-800 text-lg">Detailed Policies & Procedures</h4>

                            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-orange-400">
                                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                                    <i class="fas fa-shopping-cart mr-2 text-orange-500"></i> Phase 1: Purchasing (Buying)
                                </h5>
                                <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                                <li><strong>Authorization (Purchase Order):</strong> Inventory should never be ordered verbally. A pre-numbered <em>Purchase Order (PO)</em> must be approved by a purchasing manager. This ensures the company only buys what it needs.</li>
                                <li><strong>Buying on Credit:</strong> When buying on account, the supplier must be on an "Approved Vendor List" to prevent fraud. The PO serves as evidence of the contract.</li>
                                <li><strong>Buying with Cash:</strong> For minor purchases, a "Petty Cash Voucher" system is used. For major cash purchases, a check or bank transfer is preferred over physical cash to create a paper trail.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-400">
                            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                                <i class="fas fa-box-open mr-2 text-blue-500"></i> Phase 2: Receiving & Storage
                            </h5>
                            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                                <li><strong>The Blind Count:</strong> The receiving clerk should count the goods arriving <em>without</em> looking at the quantity on the invoice. This forces an accurate physical count.</li>
                                <li><strong>Receiving Report:</strong> A document is generated listing the item, quantity, and condition. This is matched against the Purchase Order.</li>
                                <li><strong>Storage Security:</strong> Inventory must be stored in a secured area (warehouse) with restricted access. High-value items (like jewelry or electronics) require additional locks.</li>
                                <li><strong>Segregation of Duties:</strong> The person who has custody of the assets (warehouse manager) should not be the same person who maintains the accounting records.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-red-400">
                            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                                <i class="fas fa-cash-register mr-2 text-red-500"></i> Phase 3: Selling
                            </h5>
                            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                                <li><strong>Cash Sales:</strong> Use cash registers that provide a receipt to the customer and record the transaction internally. At the end of the day, the physical cash in the drawer is reconciled with the register tape.</li>
                                <li><strong>Sales on Account (Credit):</strong> Credit approval must be separated from the sales department. A credit manager must approve the customer's credit limit <em>before</em> the sale is finalized to minimize bad debts.</li>
                                <li><strong>Shipping Documents:</strong> For goods sold, a pre-numbered shipping document (Delivery Receipt) serves as proof that goods left the warehouse.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
                            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                                <i class="fas fa-book mr-2 text-purple-500"></i> Phase 4: Recording & Posting
                            </h5>
                            <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                                <li><strong>The 3-Way Match:</strong> Before paying a supplier, the accountant matches three documents: 
                                    <ol class="list-decimal pl-4 mt-1 text-slate-500">
                                        <li>The Purchase Order (What we ordered)</li>
                                        <li>The Receiving Report (What we got)</li>
                                        <li>The Supplier's Invoice (What we are charged)</li>
                                    </ol>
                                </li>
                                <li><strong>General Journal:</strong> Transactions are recorded chronologically. Automated systems post these simultaneously to the General Ledger to keep account balances (like Accounts Payable) updated in real-time.</li>
                                <li><strong>Monthly Reconciliation:</strong> The General Ledger balance for "Inventory" is compared against a physical count of the stock at least once a year (Periodic) or continuously (Perpetual).</li>
                            </ul>
                        </div>
                    </div>
                </li>
                </ul>   
            `,
            exercises: [
                // ... inside your exercises array ...

// 1. Definition & Core Concepts
{
    type: "mcq",
    question: "Which of the following best describes a merchandising business?",
    options: ["Converts raw materials into finished goods", "Provides intangible services to customers", "Buys finished goods and resells them", "Invests in stocks and bonds"],
    correctIndex: 2,
    explanation: "A merchandiser buys finished goods to resell without changing their form."
},
{
    type: "mcq",
    question: "If a business buys wood to build and sell chairs, it is a:",
    options: ["Merchandiser", "Manufacturer", "Service Provider", "Wholesaler"],
    correctIndex: 1,
    explanation: "Buying raw materials to create a new product is manufacturing, not merchandising."
},
{
    type: "mcq",
    question: "What is the primary source of revenue for a merchandising business?",
    options: ["Service Fees", "Sales Revenue", "Interest Income", "Rent Income"],
    correctIndex: 1,
    explanation: "Merchandisers earn revenue primarily through Sales (selling goods)."
},
{
    type: "mcq",
    question: "Which term refers to the goods a merchandiser holds for sale?",
    options: ["Supplies", "Equipment", "Merchandise Inventory", "Raw Materials"],
    correctIndex: 2,
    explanation: "Merchandise Inventory represents goods held specifically for resale."
},
{
    type: "mcq",
    question: "Which of these is an example of a retailer?",
    options: ["A factory producing cars", "A law firm", "A supermarket selling groceries", "A wholesale distributor selling only to stores"],
    correctIndex: 2,
    explanation: "Retailers sell directly to the final consumer."
},

// 2. The Operating Cycle
{
    type: "mcq",
    question: "The operating cycle of a merchandiser is generally _______ than that of a service business.",
    options: ["Shorter", "Longer", "The same length", "Unrelated"],
    correctIndex: 1,
    explanation: "It is longer because cash is tied up in inventory that must be sold before cash can be collected."
},
{
    type: "mcq",
    question: "Which step is NOT part of the merchandising operating cycle?",
    options: ["Purchase of Inventory", "Manufacturing of Goods", "Sale of Inventory", "Collection of Cash"],
    correctIndex: 1,
    explanation: "Manufacturing is not part of a merchandising cycle; they buy finished goods."
},
{
    type: "mcq",
    question: "In the operating cycle, what happens after 'Sale of Inventory' on credit?",
    options: ["Purchase of Inventory", "Collection of Cash", "Payment to Suppliers", "Storage of Goods"],
    correctIndex: 1,
    explanation: "After a sale on credit, the next step is collecting the cash from the Accounts Receivable."
},
{
    type: "mcq",
    question: "Inventory is often described as:",
    options: ["Liquid Cash", "Frozen Cash", "Long-term Liability", "Intangible Asset"],
    correctIndex: 1,
    explanation: "Inventory ties up capital until it is sold, making it 'frozen cash'."
},
{
    type: "mcq",
    question: "What is the risk of holding too much inventory?",
    options: ["Lost sales", "High carrying costs and storage fees", "Increased customer satisfaction", "Faster operating cycle"],
    correctIndex: 1,
    explanation: "Excess inventory incurs storage costs, insurance, and risk of obsolescence."
},

// 3. Income Statement & COGS
{
    type: "mcq",
    question: "Which formula correctly calculates Gross Profit?",
    options: ["Sales - Operating Expenses", "Sales - Cost of Goods Sold", "Net Income - Taxes", "Beginning Inventory + Purchases"],
    correctIndex: 1,
    explanation: "Gross Profit is Sales Revenue minus the Cost of Goods Sold (COGS)."
},
{
    type: "mcq",
    question: "Cost of Goods Sold (COGS) is classified as a(n):",
    options: ["Asset", "Liability", "Expense", "Revenue"],
    correctIndex: 2,
    explanation: "COGS is an expense account that represents the cost of inventory sold."
},
{
    type: "mcq",
    question: "Which financial statement distinguishes a merchandiser from a service provider?",
    options: ["Balance Sheet only", "Income Statement only", "Statement of Cash Flows", "Both Income Statement and Balance Sheet"],
    correctIndex: 3,
    explanation: "Merchandisers have 'Inventory' on the Balance Sheet and 'COGS' on the Income Statement."
},
{
    type: "mcq",
    question: "In a multi-step income statement, what comes immediately after Gross Profit?",
    options: ["Net Income", "Cost of Goods Sold", "Operating Expenses", "Sales Revenue"],
    correctIndex: 2,
    explanation: "Operating Expenses are deducted from Gross Profit to arrive at Net Income."
},
{
    type: "mcq",
    question: "If Sales are $100 and COGS is $60, what is the Gross Profit?",
    options: ["$160", "$40", "$100", "$60"],
    correctIndex: 1,
    explanation: "$100 (Sales) - $60 (COGS) = $40 Gross Profit."
},

// 4. Inventory Systems
{
    type: "mcq",
    question: "Which inventory system updates records immediately after every purchase and sale?",
    options: ["Periodic System", "Perpetual System", "Hybrid System", "Manual System"],
    correctIndex: 1,
    explanation: "The Perpetual system tracks inventory changes in real-time."
},
{
    type: "mcq",
    question: "Under the Periodic system, COGS is determined:",
    options: ["After every sale", "At the end of the accounting period", "Daily", "When cash is collected"],
    correctIndex: 1,
    explanation: "In Periodic systems, a physical count at the end of the period is needed to calculate COGS."
},
{
    type: "mcq",
    question: "The account 'Purchases' is used only in which system?",
    options: ["Perpetual System", "Periodic System", "Both", "Neither"],
    correctIndex: 1,
    explanation: "The Periodic system uses 'Purchases'. The Perpetual system records directly to 'Inventory'."
},
{
    type: "mcq",
    question: "Which system provides better control over inventory shrinkage and theft?",
    options: ["Periodic System", "Perpetual System", "Single-entry System", "Cash Basis"],
    correctIndex: 1,
    explanation: "Perpetual records show what *should* be there, making it easier to spot missing items during a count."
},
{
    type: "mcq",
    question: "Scanning a barcode at a supermarket checkout is a feature of:",
    options: ["Periodic Inventory", "Perpetual Inventory", "Manufacturing", "Service Revenue"],
    correctIndex: 1,
    explanation: "Point-of-sale scanning immediately updates inventory records (Perpetual)."
},

// 5. Purchasing & Terms
{
    type: "mcq",
    question: "In the credit term '2/10, n/30', what does '2' represent?",
    options: ["2 days to pay", "2% penalty", "2% discount", "2 months credit"],
    correctIndex: 2,
    explanation: "It stands for a 2% purchase discount if paid within the discount period."
},
{
    type: "mcq",
    question: "What does 'FOB Shipping Point' mean?",
    options: ["Seller pays freight", "Buyer pays freight", "Freight is free", "Ownership transfers at destination"],
    correctIndex: 1,
    explanation: "Ownership transfers when goods leave the seller (shipping point), so the Buyer pays freight."
},
{
    type: "mcq",
    question: "If a buyer returns damaged goods, which account is credited in a perpetual system?",
    options: ["Sales Returns", "Inventory", "Accounts Payable", "Cash"],
    correctIndex: 1,
    explanation: "In a perpetual system, returning goods reduces the 'Inventory' asset account directly."
},
{
    type: "mcq",
    question: "A 'Purchase Order' is used to:",
    options: ["Bill the customer", "Authorize the purchase of goods", "Receive goods", "Record a sale"],
    correctIndex: 1,
    explanation: "A PO is an internal document authorizing the purchase of inventory."
},
{
    type: "mcq",
    question: "Who pays the freight costs under 'FOB Destination'?",
    options: ["The Buyer", "The Seller", "The Carrier", "The Government"],
    correctIndex: 1,
    explanation: "Seller owns goods until they arrive at destination, so the Seller pays freight."
},
// ... continue inside your exercises array ...

{
    type: "problem",
    question: "Calculate Gross Profit: A gadget store had Sales Revenue of ₱500,000 for the month. They incurred Operating Expenses of ₱100,000. Their Cost of Goods Sold (COGS) was ₱250,000. Calculate the Gross Profit.",
    answer: `Sales Revenue:       ₱500,000
Less: COGS:         (₱250,000)
------------------------------
Gross Profit:        ₱250,000`,
    explanation: "Gross Profit is calculated as Sales minus COGS only. Operating Expenses are subtracted later to find Net Income."
},
{
    type: "problem",
    question: "Credit Terms Analysis: Company A buys ₱20,000 worth of inventory on credit with terms 3/10, n/30. If they pay on Day 9, how much cash do they need to pay?",
    answer: `Invoice Amount:      ₱20,000
Discount (3%):       (₱600)  [20,000 * 0.03]
------------------------------
Cash Payment:        ₱19,400`,
    explanation: "Since payment is made on Day 9 (within the 10-day window), they take the 3% discount."
},
{
    type: "problem",
    question: "Credit Terms - Missed Discount: Using the same scenario (₱20,000, 3/10, n/30), if Company A pays on Day 20, how much must they pay?",
    answer: `Cash Payment:        ₱20,000`,
    explanation: "Payment on Day 20 is outside the discount period (10 days). Therefore, the full invoice amount is due."
},
{
    type: "problem",
    question: "Trade Discount vs. Cash Discount: A supplier offers a catalog price of ₱10,000 with a trade discount of 20%. The credit terms are 2/10, n/30. What is the initial amount recorded as Accounts Payable?",
    answer: `List Price:          ₱10,000
Less Trade Disc(20%): (₱2,000)
------------------------------
Invoice Price/A.P.:   ₱8,000`,
    explanation: "Trade discounts are deducted *before* recording the transaction. The 2% cash discount is only calculated on the ₱8,000 if paid early."
},
{
    type: "problem",
    question: "Periodic Inventory COGS: Determine COGS given the following: Beginning Inventory = ₱5,000; Net Purchases = ₱20,000; Ending Inventory = ₱3,000.",
    answer: `Beginning Inventory: ₱ 5,000
Add: Net Purchases:   ₱20,000
------------------------------
Goods Avail for Sale: ₱25,000
Less: Ending Inv:     (₱3,000)
------------------------------
Cost of Goods Sold:   ₱22,000`,
    explanation: "COGS = Beginning Inventory + Purchases - Ending Inventory."
},
{
    type: "problem",
    question: "Net Sales Calculation: A store sold ₱100,000 of goods. Customers returned ₱5,000 worth of goods (Sales Returns) and the store granted ₱2,000 in Sales Discounts. Calculate Net Sales.",
    answer: `Gross Sales:         ₱100,000
Less: Sales Returns:   (₱5,000)
Less: Sales Discounts: (₱2,000)
------------------------------
Net Sales:             ₱93,000`,
    explanation: "Net Sales = Gross Sales - Sales Returns & Allowances - Sales Discounts."
},
{
    type: "problem",
    question: "FOB Destination Scenario: Buyer orders ₱50,000 of goods, FOB Destination. Freight cost is ₱1,500. Who pays the freight and does the Buyer record it as part of inventory cost?",
    answer: `Payer: Seller
Buyer Recording: None (Buyer does not record freight)`,
    explanation: "Under FOB Destination, the seller pays freight. It is an operating expense for the seller, not an inventory cost for the buyer."
},
{
    type: "problem",
    question: "FOB Shipping Point Scenario: Buyer orders ₱50,000 of goods, FOB Shipping Point. Freight cost is ₱1,500. Who pays the freight and does the Buyer record it as part of inventory cost?",
    answer: `Payer: Buyer
Buyer Recording: Yes (Added to Inventory Cost)`,
    explanation: "Under FOB Shipping Point, ownership transfers at departure. Buyer pays freight, and it is considered part of the cost of acquiring the inventory."
},
{
    type: "problem",
    question: "Operating Cycle Concept: Explain why a grocery store likely has a shorter operating cycle than a jewelry store.",
    answer: `A grocery store sells perishable, low-cost items with high demand (high turnover). A jewelry store sells expensive luxury items that may sit on shelves for months (low turnover). Faster sales + faster cash collection = shorter cycle.`,
    explanation: "The operating cycle duration depends heavily on inventory turnover speed."
},
{
    type: "problem",
    question: "Internal Control: Why should the person who approves purchase orders (ordering) be different from the person who receives the goods (receiving)?",
    answer: `Segregation of duties prevents fraud. If one person did both, they could order personal items or non-existent goods and 'verify' their receipt themselves, stealing company funds.`,
    explanation: "Separating authorization from custody of assets is a fundamental internal control principle."
}
]
        },
        {
            day: "Day 2",
            topic: "The Periodic Inventory System",
            content: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
    <p class="font-bold text-blue-900">Learning Goal</p>
    <p class="text-blue-800">Understand the mechanics of the Periodic Inventory System.</p>
    <p class="Text-blue-800">Analyze how the inventory cost flows from Purchases to Cost of Goods Sold(COGS).</p>
</div>

<h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
<ul class="list-none space-y-8 mb-6">

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">1. The "Periodic" Approach: The Black Box</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                Unlike modern scanning systems that track every item the moment it is sold, the <strong>Periodic Inventory System</strong> takes a simpler, low-tech approach. The business does <em>not</em> keep a running record of the goods on hand or the Cost of Goods Sold (COGS) during the accounting period.
            </p>

            <h4 class="font-bold mb-1">How it Works</h4>
            <p class="mb-3">
                Imagine a "Black Box." during the month, we know what we put into the store (Purchases), but we don't track exactly what leaves (Sales) in terms of cost. We only find out what is left by opening the box and counting everything at the end of the month.
            </p>

            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong>No "Inventory" Updates:</strong> When goods are bought, they are debited to a temporary account called <em>Purchases</em>, not the Inventory asset account.
                </li>
                <li>
                    <strong>No "COGS" Entry at Sale:</strong> When a sale occurs, the accountant records the Revenue (Sale Price), but <em>does not</em> record the Cost of Goods Sold at that moment.
                </li>
            </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
            <strong>Key Difference:</strong> In a Periodic system, the "Inventory" account balance remains unchanged (showing the beginning balance) throughout the entire year until the final closing entries are made.
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 class="text-xl font-bold text-gray-800 mb-3">3. Transaction Flows (Periodic System)</h3>
    <p class="text-gray-700 mb-4">
        
        In a Periodic system, the "Inventory" account is <strong>static</strong>. It stays frozen at the beginning balance throughout the period. Instead of touching the asset account, we use temporary accounts to track activity.
    </p>

    <div class="space-y-6">
        
        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                <i class="fas fa-truck-loading mr-2 text-orange-500"></i> Purchasing Merchandise
            </h5>
            <p class="text-sm text-slate-700 mb-2">
                We do <strong>not</strong> debit the Inventory account. Instead, we debit a temporary expense-like account called "Purchases".
            </p>
            <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono">
                <div class="flex justify-between"><span>Purchases</span> <span>Dr</span></div>
                <div class="flex justify-between pl-8"><span>Accounts Payable / Cash</span> <span>Cr</span></div>
            </div>
        </div>

        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                <i class="fas fa-shipping-fast mr-2 text-purple-500"></i> Freight In (Shipping Costs)
            </h5>
            <p class="text-sm text-slate-700 mb-2">
                Shipping costs are tracked separately. We do not add them directly to Inventory; we use a specific "Freight-In" account.
            </p>
            <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono">
                <div class="flex justify-between"><span>Freight-In</span> <span>Dr</span></div>
                <div class="flex justify-between pl-8"><span>Cash</span> <span>Cr</span></div>
            </div>
        </div>

        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-red-400">
            <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                <i class="fas fa-cash-register mr-2 text-red-500"></i> Selling Merchandise
            </h5>
            <p class="text-sm text-slate-700 mb-2">
                <strong>The major difference:</strong> We record the Revenue (Sale Price), but we <strong>ignore</strong> the Cost of Goods Sold for now. No inventory reduction is recorded at this moment.
            </p>
            <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono space-y-2">
                <div>
                    <div class="flex justify-between"><span>Accounts Receivable</span> <span>Dr (Selling Price)</span></div>
                    <div class="flex justify-between pl-8"><span>Sales Revenue</span> <span>Cr (Selling Price)</span></div>
                </div>
                <div class="border-t border-dashed border-gray-300 pt-2 text-gray-400 italic text-center text-xs">
                    (No Entry for Cost of Goods Sold is made at this time)
                </div>
            </div>
        </div>

        <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-400">
             <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                <i class="fas fa-undo-alt mr-2 text-blue-500"></i> Purchase Returns
            </h5>
            <p class="text-sm text-slate-700 mb-2">
                If we return goods to a supplier, we credit a contra-account, not Inventory.
            </p>
            <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono">
                <div class="flex justify-between"><span>Accounts Payable</span> <span>Dr</span></div>
                <div class="flex justify-between pl-8"><span>Purchase Returns & Allowances</span> <span>Cr</span></div>
            </div>
        </div>

    </div>
</li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2. Calculating Cost of Goods Sold (COGS)</h3>
        <p class="text-gray-700 mb-4">
            Since we don't track costs as we sell, we must calculate COGS at the end of the period using a specific logic: <em>"If I had it, and I don't have it now, I must have sold it."</em>
        </p>

        <div class="my-6 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="max-w-3xl">
                <rect x="0" y="0" width="700" height="300" fill="#ffffff" stroke="#e5e7eb" rx="10"/>
                
                <text x="350" y="30" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#374151">The Flow of Costs (Periodic Formula)</text>

                <g transform="translate(50, 60)">
                    <rect x="0" y="0" width="180" height="60" fill="#e3f2fd" stroke="#2196f3" rx="5"/>
                    <text x="90" y="25" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#0d47a1">Beginning Inventory</text>
                    <text x="90" y="45" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(What we started with)</text>
                </g>

                <text x="250" y="95" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#333">+</text>

                <g transform="translate(270, 60)">
                    <rect x="0" y="0" width="180" height="60" fill="#e3f2fd" stroke="#2196f3" rx="5"/>
                    <text x="90" y="25" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#0d47a1">Net Purchases</text>
                    <text x="90" y="45" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(What we bought)</text>
                </g>

                <text x="470" y="95" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#333">=</text>

                <g transform="translate(490, 60)">
                    <rect x="0" y="0" width="180" height="60" fill="#fff3e0" stroke="#ff9800" rx="5"/>
                    <text x="90" y="25" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#e65100">Total Goods</text>
                    <text x="90" y="45" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#e65100">Available for Sale</text>
                </g>

                <path d="M 580 130 L 580 160" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
                
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
                    </marker>
                </defs>

                <g transform="translate(490, 170)">
                    <rect x="0" y="0" width="180" height="60" fill="#ffebee" stroke="#f44336" rx="5"/>
                    <text x="90" y="25" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#b71c1c">- Ending Inventory</text>
                    <text x="90" y="45" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(Counted physically)</text>
                </g>

                 <text x="580" y="255" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#333">=</text>

                 <g transform="translate(250, 220)">
                    <rect x="0" y="0" width="220" height="60" fill="#4caf50" rx="5"/>
                    <text x="110" y="35" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Cost of Goods Sold</text>
                </g>
                
                <path d="M 480 250 L 500 200" stroke="#333" stroke-width="0" /> <line x1="490" y1="200" x2="470" y2="250" stroke="none"/>
            </svg>
        </div>
        
        <div class="bg-orange-50 p-4 rounded-md border-l-4 border-orange-400 text-sm text-orange-900">
            <strong>The "Squeeze" Effect:</strong> In this system, any goods missing due to theft or breakage are automatically (and incorrectly) counted as "Sold" because they are not in the Ending Inventory. This is a major disadvantage of the Periodic System.
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">3. Operational Requirements</h3>
        <p class="text-gray-700 mb-4">
            Because the accounting records are not updated in real-time, strict physical procedures are required to maintain accuracy.
        </p>

        <div class="space-y-6">
            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                    <i class="fas fa-clipboard-list mr-2 text-purple-500"></i> Requirement A: The Physical Count
                </h5>
                <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                    <li><strong>Mandatory Shutdown:</strong> Operations often must cease (or occur after hours) while counting happens to ensure no goods are moving in or out.</li>
                    <li><strong>Tagging System:</strong> Items are tagged as they are counted to prevent double-counting or missed items.</li>
                    <li><strong>Use of Teams:</strong> Usually done in two-person teams: one counts, the other records, to minimize error and fraud.</li>
                </ul>
            </div>

            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-teal-400">
                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                    <i class="fas fa-file-invoice-dollar mr-2 text-teal-500"></i> Requirement B: Cost Flow Assumptions
                </h5>
                <p class="text-sm text-slate-700 mb-2">
                    Once the physical count reveals <em>how many</em> units are left, the accountant must assign a dollar value to them.
                </p>
                <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
                    <li><strong>FIFO (First-In, First-Out):</strong> Assumes the ending inventory consists of the most recently purchased units.</li>
                    <li><strong>Weighted Average:</strong> Calculates an average cost per unit based on Total Cost / Total Units Available.</li>
                </ul>
            </div>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">4. Practice: FIFO vs. Weighted Average</h3>
        
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-6">
            <h4 class="font-bold text-gray-900 mb-2">The Scenario</h4>
            <p class="text-sm text-gray-700 mb-3">
                A store has the following transactions for "Item X":
            </p>
            <table class="w-full text-sm text-left text-gray-700 mb-4">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th class="px-4 py-2">Date</th>
                        <th class="px-4 py-2">Action</th>
                        <th class="px-4 py-2">Quantity</th>
                        <th class="px-4 py-2">Unit Cost</th>
                        <th class="px-4 py-2">Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <td class="px-4 py-2">Jan 1</td>
                        <td class="px-4 py-2">Beginning Inventory</td>
                        <td class="px-4 py-2">100</td>
                        <td class="px-4 py-2">₱10</td>
                        <td class="px-4 py-2">₱1,000</td>
                    </tr>
                    <tr class="bg-white border-b">
                        <td class="px-4 py-2">Jan 15</td>
                        <td class="px-4 py-2">Purchase</td>
                        <td class="px-4 py-2">200</td>
                        <td class="px-4 py-2">₱15</td>
                        <td class="px-4 py-2">₱3,000</td>
                    </tr>
                    <tr class="bg-gray-100 font-bold">
                        <td class="px-4 py-2" colspan="2">Total Available</td>
                        <td class="px-4 py-2">300</td>
                        <td class="px-4 py-2">-</td>
                        <td class="px-4 py-2">₱4,000</td>
                    </tr>
                </tbody>
            </table>
            <p class="text-sm text-gray-800 font-bold">
                <i class="fas fa-search mr-1"></i> Physical Count on Jan 31: 120 Units remaining.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
                <h5 class="font-bold text-blue-900 mb-2 text-center">Method 1: FIFO</h5>
                <p class="text-xs text-blue-800 mb-3 text-center italic">"Oldest sold first. Ending Inventory is Newest."</p>
                
                <div class="text-sm text-blue-900 space-y-2">
                    <div class="border-b border-blue-200 pb-2">
                        <strong>1. Compute Ending Inventory:</strong><br>
                        Since 120 units are left, under FIFO, these must be the <em>newest</em> ones (from Jan 15).<br>
                        <span class="font-mono">120 units x ₱15 = <strong>₱1,800</strong></span>
                    </div>
                    <div>
                        <strong>2. Compute COGS:</strong><br>
                        <span class="font-mono">
                            Total Available (₱4,000)<br>
                            - Ending Inv (₱1,800)<br>
                            ----------------------<br>
                            = <strong>₱2,200</strong>
                        </span>
                    </div>
                </div>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
                <h5 class="font-bold text-green-900 mb-2 text-center">Method 2: Weighted Average</h5>
                <p class="text-xs text-green-800 mb-3 text-center italic">"Mix everything together to find an average."</p>
                
                <div class="text-sm text-green-900 space-y-2">
                    <div class="border-b border-green-200 pb-2">
                        <strong>1. Compute Average Cost:</strong><br>
                        Total Cost / Total Units<br>
                        <span class="font-mono">₱4,000 / 300 units = <strong>₱13.33/unit</strong></span>
                    </div>
                    <div>
                        <strong>2. Compute Results:</strong><br>
                        <span class="font-mono">
                            Ending Inv: 120 x ₱13.33 = <strong>₱1,600</strong><br><br>
                            COGS: ₱4,000 - ₱1,600 = <strong>₱2,400</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </li>

</ul>
`,
            exercises: [
    // --- MULTIPLE CHOICE QUESTIONS (25) ---

    // 1. Definition & Basics
    { 
        type: "mcq", 
        question: "In a Periodic Inventory System, when are the 'Cost of Goods Sold' (COGS) recorded?", 
        options: ["At the time of each sale", "At the end of the accounting period", "When merchandise is purchased", "Weekly"], 
        correctIndex: 1, 
        explanation: "In a periodic system, COGS is calculated as a lump sum at the end of the period, not at the point of sale." 
    },
    { 
        type: "mcq", 
        question: "Which account is debited when a company using the Periodic System buys goods for resale?", 
        options: ["Inventory", "Cost of Goods Sold", "Purchases", "Accounts Receivable"], 
        correctIndex: 2, 
        explanation: "The 'Purchases' account is used to record acquisitions of merchandise in a periodic system." 
    },
    { 
        type: "mcq", 
        question: "Which of the following is REQUIRED to determine the Cost of Goods Sold in a Periodic System?", 
        options: ["A barcode scanner", "A physical inventory count", "A perpetual ledger", "Daily sales reports"], 
        correctIndex: 1, 
        explanation: "Because the system doesn't track inventory levels, a physical count is necessary to determine what remains unsold." 
    },
    { 
        type: "mcq", 
        question: "The formula to calculate Cost of Goods Sold (COGS) is:", 
        options: ["Sales - Expenses", "Beginning Inventory + Net Purchases - Ending Inventory", "Ending Inventory + Purchases - Beginning Inventory", "Gross Profit - Operating Expenses"], 
        correctIndex: 1, 
        explanation: "COGS = Goods Available for Sale (Beginning + Purchases) minus what is left (Ending)." 
    },
    { 
        type: "mcq", 
        question: "Under the Periodic System, 'Freight-In' is classified as:", 
        options: ["An Operating Expense", "A Selling Expense", "An addition to Net Purchases", "A reduction of Sales"], 
        correctIndex: 2, 
        explanation: "Freight-In is part of the cost of acquiring inventory and is added to Net Purchases to determine Cost of Goods Purchased." 
    },

    // 2. Journal Entries
    { 
        type: "mcq", 
        question: "A company returns defective goods to a supplier. In a Periodic System, the credit entry goes to:", 
        options: ["Inventory", "Purchase Returns and Allowances", "Cost of Goods Sold", "Sales Returns"], 
        correctIndex: 1, 
        explanation: "The 'Purchase Returns and Allowances' contra-account is used instead of directly crediting Inventory." 
    },
    { 
        type: "mcq", 
        question: "When a sale is made in a Periodic System, how many journal entries are recorded?", 
        options: ["Two (one for revenue, one for cost)", "One (for revenue only)", "Three", "None until the end of the month"], 
        correctIndex: 1, 
        explanation: "Only the revenue entry (Debit Cash/AR, Credit Sales) is made. The cost entry is omitted until period-end." 
    },
    { 
        type: "mcq", 
        question: "The 'Purchase Discounts' account has a normal balance of:", 
        options: ["Debit", "Credit", "Zero", "It varies"], 
        correctIndex: 1, 
        explanation: "It is a contra-expense (contra-purchase) account, so it has a normal credit balance, reducing the total cost of purchases." 
    },
    { 
        type: "mcq", 
        question: "Closing entries in a Periodic System are unique because they must:", 
        options: ["Update the Inventory account from Beginning to Ending balance", "Record depreciation", "Close dividends", "Zero out liabilities"], 
        correctIndex: 0, 
        explanation: "The closing process removes the Beginning Inventory and records the Ending Inventory found via physical count." 
    },
    { 
        type: "mcq", 
        question: "If 'Freight-Out' is incurred to deliver goods to a customer, it is recorded as:", 
        options: ["Part of Cost of Goods Sold", "An Operating (Selling) Expense", "A deduction from Purchases", "An Asset"], 
        correctIndex: 1, 
        explanation: "Freight-Out is a delivery expense (operating expense), unlike Freight-In which is a product cost." 
    },

    // 3. Calculations & Errors
    { 
        type: "mcq", 
        question: "Total Goods Available for Sale equals:", 
        options: ["Beginning Inventory + Net Purchases", "Net Sales - COGS", "Ending Inventory + COGS", "Beginning Inventory - Ending Inventory"], 
        correctIndex: 0, 
        explanation: "This represents the maximum amount of inventory the company had the opportunity to sell during the period." 
    },
    { 
        type: "mcq", 
        question: "If Ending Inventory is overstated (counted too high), what is the effect on Net Income?", 
        options: ["Net Income is understated", "Net Income is overstated", "No effect", "Cost of Goods Sold is overstated"], 
        correctIndex: 1, 
        explanation: "If Ending Inventory is high, COGS is calculated as too low (less expense), which makes Net Income too high." 
    },
    { 
        type: "mcq", 
        question: "Net Purchases is calculated as:", 
        options: ["Purchases + Freight-In", "Purchases - Purchase Returns - Purchase Discounts", "Purchases + Sales Returns", "Sales - COGS"], 
        correctIndex: 1, 
        explanation: "Net Purchases represents the gross purchases minus any deductions for returns, allowances, or discounts." 
    },
    { 
        type: "mcq", 
        question: "Which inventory system is most prone to not detecting theft or 'shrinkage' easily?", 
        options: ["Perpetual System", "Periodic System", "Just-In-Time System", "Automated System"], 
        correctIndex: 1, 
        explanation: "In Periodic, missing items are assumed sold because they aren't in the ending count, effectively burying theft costs in COGS." 
    },
    { 
        type: "mcq", 
        question: "Gross Profit is found by:", 
        options: ["Net Income + Expenses", "Net Sales - Cost of Goods Sold", "Assets - Liabilities", "Sales - Operating Expenses"], 
        correctIndex: 1, 
        explanation: "Gross Profit is the direct profit from the merchandise itself before operating expenses are deducted." 
    },

    // 4. Comparison & Conceptual
    { 
        type: "mcq", 
        question: "The Periodic System is often used by businesses that sell:", 
        options: ["High-value, low-volume items (e.g., cars)", "Low-value, high-volume items (e.g., nails in a hardware store)", "Services only", "Software subscriptions"], 
        correctIndex: 1, 
        explanation: "It is historically used where the cost of tracking every individual item (like a single nut or bolt) outweighs the benefit." 
    },
    { 
        type: "mcq", 
        question: "Which account is NOT used in a Periodic Inventory System?", 
        options: ["Purchases", "Freight-In", "Cost of Goods Sold (as a running balance)", "Purchase Returns"], 
        correctIndex: 2, 
        explanation: "COGS does not exist as a running account during the period; it is only a calculation at the end." 
    },
    { 
        type: "mcq", 
        question: "FOB Shipping Point means ownership transfers to the buyer:", 
        options: ["When goods arrive at the buyer's warehouse", "When goods leave the seller's shipping dock", "When payment is made", "Halfway through transit"], 
        correctIndex: 1, 
        explanation: "Free On Board (FOB) Shipping Point means title passes when the carrier picks up the goods." 
    },
    { 
        type: "mcq", 
        question: "FOB Destination means freight costs are typically paid by the:", 
        options: ["Buyer", "Seller", "Carrier", "Government"], 
        correctIndex: 1, 
        explanation: "The seller retains ownership until delivery, so the seller usually pays the shipping cost (Freight-Out)." 
    },
    { 
        type: "mcq", 
        question: "Under the Periodic system, if a buyer pays within the discount period (e.g. 2/10, n/30), the credit to Cash is accompanied by a credit to:", 
        options: ["Inventory", "Purchase Discounts", "Sales Discounts", "Accounts Payable"], 
        correctIndex: 1, 
        explanation: "The savings are recorded in 'Purchase Discounts' rather than reducing the Inventory account directly." 
    },

    // 5. Advanced Scenarios
    { 
        type: "mcq", 
        question: "Beginning Inventory: $10,000. Purchases: $50,000. Ending Inventory: $15,000. What is COGS?", 
        options: ["$35,000", "$45,000", "$55,000", "$65,000"], 
        correctIndex: 1, 
        explanation: "$10,000 (Beg) + $50,000 (Purch) = $60,000 Available. $60,000 - $15,000 (End) = $45,000 COGS." 
    },
    { 
        type: "mcq", 
        question: "What happens to the 'Purchases' account at the end of the year?", 
        options: ["It remains on the Balance Sheet", "It is closed to Income Summary", "It is converted to Cash", "It becomes a Liability"], 
        correctIndex: 1, 
        explanation: "Purchases is a temporary account and must be closed out to calculate Net Income." 
    },
    { 
        type: "mcq", 
        question: "A disadvantage of the Periodic System is:", 
        options: ["High implementation cost", "Lack of real-time inventory data", "Complexity of daily recording", "Requirement for expensive software"], 
        correctIndex: 1, 
        explanation: "Managers do not know inventory levels mid-month, which can lead to stockouts or over-ordering." 
    },
    { 
        type: "mcq", 
        question: "Net Sales is calculated as:", 
        options: ["Sales - Cost of Goods Sold", "Sales - Operating Expenses", "Gross Sales - Sales Returns & Allowances - Sales Discounts", "Sales + Other Revenue"], 
        correctIndex: 2, 
        explanation: "Net Sales is the actual revenue realized after deducting returns and discounts given to customers." 
    },
    { 
        type: "mcq", 
        question: "The 'Income Summary' account is used during closing to:", 
        options: ["Record daily sales", "Calculate the Gross Profit", "Remove Beginning Inventory and enter Ending Inventory", "Pay taxes"], 
        correctIndex: 2, 
        explanation: "One method of closing involves debiting Income Summary for Beginning Inventory and crediting it for Ending Inventory." 
    },
    // --- FIFO & WEIGHTED AVERAGE MCQ QUESTIONS (5) ---
    { 
        type: "mcq", 
        question: "Under the FIFO method (Periodic), the Ending Inventory is assumed to consist of:", 
        options: ["The oldest units purchased", "The most recently purchased units", "A mix of all units purchased", "The units with the lowest cost"], 
        correctIndex: 1, 
        explanation: "Since the 'First-In' (oldest) units are sold first, the units remaining on the shelf at the end of the period must be the 'Last-In' (newest) ones." 
    },
    { 
        type: "mcq", 
        question: "The formula to calculate the 'Weighted Average Unit Cost' in a Periodic System is:", 
        options: ["(Beginning Inventory Cost + Ending Inventory Cost) / 2", "Total Cost of Goods Sold / Total Units Sold", "Cost of Goods Available for Sale / Total Units Available for Sale", "Net Purchases / Total Units Purchased"], 
        correctIndex: 2, 
        explanation: "The average is found by taking the total cost of all inventory available (Beginning + Purchases) and dividing it by the total count of those units." 
    },
    { 
        type: "mcq", 
        question: "In a period of rising prices (inflation), which method results in the highest Net Income?", 
        options: ["Weighted Average", "FIFO", "Specific Identification", "They result in the same Net Income"], 
        correctIndex: 1, 
        explanation: "FIFO assigns the older (cheaper) costs to COGS. Lower expense means higher reported Net Income." 
    },
    { 
        type: "mcq", 
        question: "When using the Weighted Average method in a Periodic System, when is the average unit cost computed?", 
        options: ["After every purchase", "At the time of each sale", "Only at the end of the accounting period", "At the beginning of the year"], 
        correctIndex: 2, 
        explanation: "Unlike the 'Moving Average' used in Perpetual systems, the Periodic Weighted Average is calculated just once at the very end of the period using total available goods." 
    },
    { 
        type: "mcq", 
        question: "Which cost flow assumption smooths out the effects of price fluctuations over the accounting period?", 
        options: ["FIFO", "Weighted Average", "Specific Identification", "LIFO"], 
        correctIndex: 1, 
        explanation: "Weighted Average blends the costs of older and newer items, avoiding the extremes of using only the oldest or newest prices." 
    },

    // --- OPEN-ENDED PROBLEMS (10) ---

    {
        type: "problem",
        question: "Calculate Net Purchases given the following data: Purchases ₱150,000; Purchase Returns ₱5,000; Purchase Discounts ₱3,000; Freight-In ₱8,000.",
        answer: `Purchases:                ₱150,000
Less: Returns & Allow:    (₱5,000)
Less: Discounts:          (₱3,000)
Add: Freight-In:           ₱8,000
------------------------------------
Net Purchases:            ₱150,000`,
        explanation: "Net Purchases = Gross Purchases - Returns - Discounts + Freight In."
    },
    {
        type: "problem",
        question: "Company A uses a Periodic System. Compute the Cost of Goods Sold (COGS) if: Beginning Inventory = ₱20,000; Net Purchases = ₱80,000; Ending Inventory = ₱25,000.",
        answer: `Beginning Inventory:      ₱20,000
Add: Net Purchases:        ₱80,000
------------------------------------
Goods Available for Sale: ₱100,000
Less: Ending Inventory:   (₱25,000)
------------------------------------
Cost of Goods Sold:       ₱75,000`,
        explanation: "COGS is derived by subtracting what is left (Ending Inventory) from the total goods available."
    },
    {
        type: "problem",
        question: "Provide the journal entry to record a purchase of merchandise on credit for ₱10,000 under the Periodic Inventory System.",
        answer: `Debit:  Purchases            ₱10,000
Credit: Accounts Payable     ₱10,000`,
        explanation: "In a Periodic System, the 'Purchases' account is debited instead of 'Inventory'."
    },
    {
        type: "problem",
        question: "Provide the journal entry to record the SALE of merchandise on credit for ₱15,000 under the Periodic Inventory System. (Ignore COGS).",
        answer: `Debit:  Accounts Receivable  ₱15,000
Credit: Sales Revenue        ₱15,000`,
        explanation: "Only the revenue side is recorded. No entry is made for COGS or Inventory reduction at this time."
    },
    {
        type: "problem",
        question: "A physical count reveals ₱5,000 worth of inventory is missing due to theft. In a Periodic System, how is this loss recorded/handled during the normal COGS calculation?",
        answer: `It is automatically included in Cost of Goods Sold.
Because Ending Inventory is lower (due to theft), the calculation (Goods Available - Ending Inventory) yields a higher COGS number.`,
        explanation: "The Periodic System cannot distinguish between sold goods and stolen goods without additional data; both effectively disappear from the count."
    },
    {
        type: "problem",
        question: "Calculate Gross Profit: Sales ₱200,000; Sales Returns ₱10,000; Sales Discounts ₱2,000; Cost of Goods Sold ₱110,000.",
        answer: `Gross Sales:              ₱200,000
Less: Returns & Disc:     (₱12,000)
------------------------------------
Net Sales:                ₱188,000
Less: COGS:              (₱110,000)
------------------------------------
Gross Profit:             ₱78,000`,
        explanation: "Gross Profit = Net Sales - Cost of Goods Sold."
    },
    {
        type: "problem",
        question: "Explain the 'Terms 2/10, n/30'.",
        answer: `2/10: The buyer can take a 2% discount if they pay within 10 days of the invoice date.
n/30: If the discount is not taken, the net (full) amount is due within 30 days.`,
        explanation: "These are credit terms defining the incentive for early payment and the final deadline."
    },
    {
        type: "problem",
        question: "Calculate the Cost of Goods Available for Sale: Beginning Inventory ₱15,000; Purchases ₱60,000; Freight-In ₱2,000; Purchase Returns ₱4,000.",
        answer: `Beginning Inventory:      ₱15,000
Purchases:                ₱60,000
Add: Freight-In:          ₱2,000
Less: Returns:            (₱4,000)
------------------------------------
Goods Available for Sale: ₱73,000`,
        explanation: "Goods Available = Beginning Inventory + Net Cost of Purchases."
    },
    {
        type: "problem",
        question: "Write the Journal Entry to record the return of ₱1,000 worth of damaged goods to a supplier (originally purchased on credit) under the Periodic System.",
        answer: `Debit:  Accounts Payable                 ₱1,000
Credit: Purchase Returns and Allowances  ₱1,000`,
        explanation: "This entry reduces the liability (AP) and increases the contra-expense account (Purchase Returns)."
    },
    {
        type: "problem",
        question: "If a company forgot to include a section of the warehouse in their physical count (understating Ending Inventory by ₱10,000), how does this affect the Cost of Goods Sold?",
        answer: `Cost of Goods Sold will be OVERSTATED by ₱10,000.
Computation: COGS = Available - Ending Inventory. If you subtract a smaller Ending Inventory number, the result (COGS) becomes larger.`,
        explanation: "Understating the asset (Inventory) leads to overstating the expense (COGS), which subsequently understates Net Income."
    },
    // --- FIFO QUESTIONS (2) ---
    {
        type: "problem",
        question: "FIFO Method (Periodic): Calculate the Value of Ending Inventory.\n\nData:\n- Jan 1 Beginning Inventory: 10 units @ ₱10\n- Jan 10 Purchase: 20 units @ ₱12\n- Jan 20 Purchase: 20 units @ ₱15\n\nPhysical count on Jan 31 shows 15 units remaining.",
        answer: `Ending Inventory Value: ₱225

Computation:
Under FIFO, the remaining inventory is assumed to be the NEWEST stock.
Therefore, the 15 units come from the Jan 20 purchase (costing ₱15).
15 units x ₱15 = ₱225`,
        explanation: "In FIFO (First-In, First-Out), the oldest units are sold first. This means the units left on the shelf (Ending Inventory) are always the most recently purchased ones."
    },
    {
        type: "problem",
        question: "FIFO Method (Periodic): Calculate Cost of Goods Sold (COGS).\n\nData:\n- Goods Available for Sale (Total Cost): ₱5,000\n- Total Units Available: 500 units\n- Ending Inventory Count: 100 units\n- Most Recent Purchase Price: ₱12/unit\n- Oldest Purchase Price: ₱8/unit",
        answer: `Cost of Goods Sold: ₱3,800

Computation:
1. Determine Ending Inventory Value (FIFO uses newest price):
   100 units x ₱12 = ₱1,200
2. Calculate COGS using the Periodic Formula:
   Goods Available (₱5,000) - Ending Inventory (₱1,200) = ₱3,800`,
        explanation: "Under the Periodic system, we first calculate the Ending Inventory value, then subtract it from the Total Goods Available to 'squeeze' out the COGS."
    },

    // --- WEIGHTED AVERAGE QUESTIONS (2) ---
    {
        type: "problem",
        question: "Weighted Average Method: Calculate the Weighted Average Unit Cost.\n\nData:\n- Beginning Inventory: 100 units @ ₱50\n- Purchase 1: 300 units @ ₱60\n- Purchase 2: 100 units @ ₱65",
        answer: `Weighted Average Unit Cost: ₱59

Computation:
1. Total Cost of Goods Available:
   (100 x 50) + (300 x 60) + (100 x 65) 
   = 5,000 + 18,000 + 6,500 = ₱29,500
2. Total Units Available:
   100 + 300 + 100 = 500 units
3. Average:
   ₱29,500 / 500 units = ₱59 per unit`,
        explanation: "The Weighted Average cost is determined by dividing the Total Cost of Goods Available for Sale by the Total Units Available for Sale."
    },
    {
        type: "problem",
        question: "Weighted Average Method: Calculate Ending Inventory Value.\n\nData:\n- Total Goods Available for Sale: ₱100,000\n- Total Units Available: 2,000 units\n- Ending Inventory Count: 400 units",
        answer: `Ending Inventory Value: ₱20,000

Computation:
1. Find Average Unit Cost:
   ₱100,000 / 2,000 units = ₱50 per unit
2. Apply to Ending Inventory:
   400 units x ₱50 = ₱20,000`,
        explanation: "Once the average cost per unit is established (₱50), it is applied to the physical count of units remaining to value the inventory."
    },

    // --- COMBINED COMPREHENSIVE QUESTION (1) ---
    {
        type: "problem",
        question: "Comparative Analysis: Compute COGS under BOTH FIFO and Weighted Average.\n\nScenario:\n- Jan 1: Beg Inv 10 units @ ₱100\n- Jan 15: Purchase 10 units @ ₱200\n- Jan 31: Sold 15 units (Leaving 5 units in Ending Inventory)",
        answer: `FIFO COGS: ₱2,000
Weighted Average COGS: ₱2,250

Computations:
Total Available: (10@100) + (10@200) = ₱3,000 (20 units)

1. FIFO Method:
   Ending Inv (Newest 5 units @ ₱200) = ₱1,000
   COGS = ₱3,000 - ₱1,000 = ₱2,000

2. Weighted Average Method:
   Avg Cost = ₱3,000 / 20 units = ₱150/unit
   Ending Inv (5 units @ ₱150) = ₱750
   COGS = ₱3,000 - ₱750 = ₱2,250`,
        explanation: "FIFO results in a lower COGS here because it assumes the cheaper, older units (₱100) were sold first. Weighted Average smooths out the price jump, resulting in a higher COGS."
    },
                // --- ADVANCED SCENARIO A: FIFO FOCUS (Questions 1-2) ---
    {
        type: "problem",
        question: "FIFO Costing (Periodic): Calculate the Total Value of Ending Inventory.\n\nTransactions for Product X:\n- Jan 01: Beginning Inventory (200 units @ ₱50)\n- Jan 05: Sale of 100 units\n- Jan 10: Purchase (300 units @ ₱55)\n- Jan 15: Sale of 150 units\n- Jan 20: Purchase (400 units @ ₱60)\n- Jan 25: Sale of 200 units\n- Jan 30: Purchase (100 units @ ₱65)",
        answer: `Ending Inventory Value: ₱33,250

Computation:
1. Determine Units Remaining:
   Total Available: 200 (Beg) + 300 (P1) + 400 (P2) + 100 (P3) = 1,000 units
   Total Sold: 100 + 150 + 200 = 450 units
   Ending Inventory: 1,000 - 450 = 550 units

2. Apply FIFO (Newest units remain):
   - 100 units @ ₱65 (Jan 30) = ₱6,500
   - 400 units @ ₱60 (Jan 20) = ₱24,000
   - 50 units @ ₱55 (Jan 10) = ₱2,750
   -----------------------------------
   Total Value: ₱33,250`,
        explanation: "In Periodic FIFO, we ignore when the sales happened. We simply take the final count (550 units) and value them using the most recent purchase costs working backwards."
    },
    {
        type: "problem",
        question: "FIFO Costing (Periodic): Prepare the Cost of Goods Sold (COGS) Schedule based on the data in the previous question (Scenario A).",
        answer: `Cost of Goods Sold: ₱24,250

Schedule:
Beginning Inventory (200 @ ₱50):      ₱10,000
Add: Net Purchases:
   Jan 10 (300 @ ₱55): ₱16,500
   Jan 20 (400 @ ₱60): ₱24,000
   Jan 30 (100 @ ₱65): ₱6,500         ₱47,000
---------------------------------------------
Total Goods Available for Sale:       ₱57,000
Less: Ending Inventory (FIFO):       (₱33,250)
---------------------------------------------
Cost of Goods Sold:                   ₱23,750`,
        explanation: "COGS is derived by subtracting the calculated Ending Inventory (from Question 1) from the Total Goods Available for Sale."
    },

    // --- ADVANCED SCENARIO B: WEIGHTED AVERAGE FOCUS (Questions 3-4) ---
    {
        type: "problem",
        question: "Weighted Average (Periodic): Calculate the Ending Inventory Value.\n\nTransactions for Product Y:\n- Mar 01: Beginning Inventory (1,000 units @ ₱10)\n- Mar 08: Purchase (2,000 units @ ₱12)\n- Mar 12: Sale of 1,500 units\n- Mar 18: Purchase (1,000 units @ ₱14)\n- Mar 22: Sale of 1,000 units\n- Mar 28: Purchase (1,000 units @ ₱15)\n- Mar 30: Sale of 500 units",
        answer: `Ending Inventory Value: ₱26,600

Computation:
1. Total Goods Available:
   (1,000 @ 10) + (2,000 @ 12) + (1,000 @ 14) + (1,000 @ 15)
   = 10,000 + 24,000 + 14,000 + 15,000 = ₱63,000

2. Total Units Available: 
   1,000 + 2,000 + 1,000 + 1,000 = 5,000 units

3. Average Unit Cost:
   ₱63,000 / 5,000 units = ₱12.60 per unit

4. Units Remaining:
   Total Sold (1,500 + 1,000 + 500) = 3,000 sold
   Remaining (5,000 - 3,000) = 2,000 units

5. Ending Inventory:
   2,000 units x ₱12.60 = ₱25,200`,
        explanation: "Weighted Average blends all costs together. We divide the Total Cost of Goods Available (₱63,000) by Total Units (5,000) to find the average rate."
    },
    {
        type: "problem",
        question: "Weighted Average (Periodic): Calculate the Cost of Goods Sold (COGS) based on the data in the previous question (Scenario B).",
        answer: `Cost of Goods Sold: ₱37,800

Computation:
Total Goods Available for Sale:    ₱63,000
Less: Ending Inventory (Avco):    (₱25,200)
-------------------------------------------
Cost of Goods Sold:                ₱37,800

Alternative Check:
Units Sold (3,000) x Average Cost (₱12.60) = ₱37,800`,
        explanation: "COGS can be found either by subtracting Ending Inventory from Total Available OR by multiplying the total units sold by the average unit cost."
    },

    // --- SCENARIO C: COMPARATIVE ANALYSIS (Question 5) ---
    {
        type: "problem",
        question: "Comparative: Calculate Cost of Goods Sold using Weighted Average.\n\nTransactions:\n- Beg Inv: 10 units @ ₱100\n- Purchase 1: 10 units @ ₱110\n- Sale 1: 5 units sold\n- Purchase 2: 10 units @ ₱120\n- Sale 2: 10 units sold\n- Purchase 3: 10 units @ ₱130\n- Sale 3: 5 units sold",
        answer: `Cost of Goods Sold: ₱2,300

Computation:
1. Total Available:
   (10@100) + (10@110) + (10@120) + (10@130) = ₱4,600
   Total Units = 40

2. Average Cost:
   ₱4,600 / 40 units = ₱115 per unit

3. Units Sold:
   5 + 10 + 5 = 20 units sold

4. COGS Calculation:
   20 units sold x ₱115 = ₱2,300`,
        explanation: "Even though sales happened at different times, in the Periodic Weighted Average method, we wait until the end of the month to calculate the single average cost for all units."
    }
]
        },
        {
            day: "Day 3",
            topic: "The Perpetual Inventory System",
            content: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
    <p class="font-bold text-blue-900">Learning Goal</p>
    <p class="text-blue-800">Master the mechanics of the Perpetual Inventory System and understand how it tracks costs in real-time.</p>
</div>

<h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
<ul class="list-none space-y-8 mb-6">

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">1. Definition: Continuous Tracking</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                The <strong>Perpetual Inventory System</strong> is a method of accounting that maintains a continuous, real-time record of inventory balances. The word "perpetual" means "never-ending" or "continuous." Under this system, the accounting records are updated <strong>immediately</strong> every time an item is bought, sold, or returned.
            </p>

            <h4 class="font-bold mb-1">The Modern Standard</h4>
            <p class="mb-3">
                Historically, this system was reserved for high-value items (like jewelry or cars) because the record-keeping was tedious. However, with the advent of barcode scanners and Point-of-Sale (POS) software, almost all modern businesses—from grocery stores to Amazon—use the Perpetual system.
            </p>

            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>
                    <strong>Detailed Records:</strong> The company knows exactly how many units of Product X are on the shelf at any specific moment without going to the warehouse to count them.
                </li>
                <li>
                    <strong>Cost of Goods Sold (COGS):</strong> Unlike the Periodic system, which calculates COGS at the end of the month, the Perpetual system calculates COGS <em>at the moment of the sale</em>.
                </li>
            </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
            <strong>Analogy:</strong> Think of the grocery store scanner. When it "beeps," two things happen instantly: 1) The sale is recorded, and 2) The inventory count for that item is reduced by one.
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2. The "Two-Entry" Rule</h3>
        <p class="text-gray-700 mb-4">
            The most distinct feature of the Perpetual System is what happens during a sale. Because we are tracking inventory in real-time, <strong>every sale requires two separate journal entries.</strong>
        </p>

        <div class="my-6 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="max-w-2xl">
                <rect x="0" y="0" width="600" height="300" fill="#f9f9f9" rx="10"/>
                <text x="300" y="30" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#333">The Perpetual Sale Workflow</text>
                
                <g transform="translate(20, 100)">
                    <rect x="0" y="0" width="120" height="80" fill="#37474f" rx="5"/>
                    <text x="60" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Sale Occurs</text>
                    <text x="60" y="55" font-family="Arial" font-size="12" text-anchor="middle" fill="#cfd8dc">(Scan Item)</text>
                </g>

                <defs>
                    <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#2196f3"/>
                    </marker>
                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#f44336"/>
                    </marker>
                </defs>

                <line x1="140" y1="140" x2="220" y2="100" stroke="#2196f3" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
                <line x1="140" y1="140" x2="220" y2="180" stroke="#f44336" stroke-width="3" marker-end="url(#arrowhead-red)"/>

                <g transform="translate(240, 60)">
                    <rect x="0" y="0" width="320" height="80" fill="#e3f2fd" stroke="#2196f3" stroke-width="2" rx="5"/>
                    <text x="10" y="25" font-family="Arial" font-size="14" font-weight="bold" fill="#0d47a1">Entry 1: Record the Revenue</text>
                    <text x="10" y="50" font-family="Arial" font-size="12" fill="#333">Debit: Cash / Accounts Receivable</text>
                    <text x="10" y="65" font-family="Arial" font-size="12" fill="#333">Credit: Sales Revenue</text>
                    <text x="250" y="55" font-family="Arial" font-size="16" font-weight="bold" fill="#0d47a1">Selling Price</text>
                </g>

                <g transform="translate(240, 150)">
                    <rect x="0" y="0" width="320" height="80" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="5"/>
                    <text x="10" y="25" font-family="Arial" font-size="14" font-weight="bold" fill="#b71c1c">Entry 2: Update the Inventory</text>
                    <text x="10" y="50" font-family="Arial" font-size="12" fill="#333">Debit: Cost of Goods Sold (Expense)</text>
                    <text x="10" y="65" font-family="Arial" font-size="12" fill="#333">Credit: Inventory (Asset)</text>
                    <text x="260" y="55" font-family="Arial" font-size="16" font-weight="bold" fill="#b71c1c">Cost Price</text>
                </g>
                
                <text x="300" y="280" font-family="Arial" font-size="12" font-style="italic" text-anchor="middle" fill="#666">Note: The customer sees Entry 1. The company internally records Entry 2.</text>
            </svg>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">3. Transaction Flows</h3>
        <p class="text-gray-700 mb-4">
            In a Perpetual system, the "Inventory" account is very active. It increases when we buy goods and decreases when we sell them.
        </p>

        <div class="space-y-6">
            
            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                    <i class="fas fa-truck-loading mr-2 text-orange-500"></i> Purchasing Merchandise
                </h5>
                <p class="text-sm text-slate-700 mb-2">When buying goods for resale, we debit the Inventory account directly. We do <strong>not</strong> use a "Purchases" account.</p>
                <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono">
                    <div class="flex justify-between"><span>Inventory</span> <span>Dr</span></div>
                    <div class="flex justify-between pl-8"><span>Accounts Payable / Cash</span> <span>Cr</span></div>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                    <i class="fas fa-shipping-fast mr-2 text-purple-500"></i> Freight In (Shipping Costs)
                </h5>
                <p class="text-sm text-slate-700 mb-2">If the buyer pays for shipping (FOB Shipping Point), this cost is considered part of the asset's value. It makes the inventory more expensive.</p>
                <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono">
                    <div class="flex justify-between"><span>Inventory</span> <span>Dr</span></div>
                    <div class="flex justify-between pl-8"><span>Cash</span> <span>Cr</span></div>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-red-400">
                <h5 class="font-bold text-slate-800 mb-2 flex items-center">
                    <i class="fas fa-cash-register mr-2 text-red-500"></i> Selling Merchandise
                </h5>
                <p class="text-sm text-slate-700 mb-2">As detailed in the diagram above, two entries are required.</p>
                <div class="bg-white p-3 border border-gray-300 rounded text-sm font-mono space-y-2">
                    <div>
                        <div class="flex justify-between"><span>Accounts Receivable</span> <span>Dr (Selling Price)</span></div>
                        <div class="flex justify-between pl-8"><span>Sales Revenue</span> <span>Cr (Selling Price)</span></div>
                    </div>
                    <div class="border-t border-dashed border-gray-300 pt-2">
                        <div class="flex justify-between"><span>Cost of Goods Sold</span> <span>Dr (Cost Price)</span></div>
                        <div class="flex justify-between pl-8"><span>Inventory</span> <span>Cr (Cost Price)</span></div>
                    </div>
                </div>
            </div>

        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 class="text-xl font-bold text-gray-800 mb-3">4. Limitations, Internal Control & Costing Methods</h3>
    
    <div class="mb-6">
        <h4 class="font-bold text-gray-700 mb-2">Why Count if We Scan Everything?</h4>
        <p class="text-gray-700 mb-3">
            Even though the Perpetual System tracks every single transaction in real-time, a <strong>Physical Count (Stocktake)</strong> is still mandatory at least once a year. It serves as a critical Internal Control mechanism.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>
                <strong>Reality Check (The Discrepancy):</strong> The computer record shows what <em>should</em> be on the shelf (Book Value). The physical count reveals what <em>is actually</em> there.
            </li>
            <li>
                <strong>Detecting Shrinkage:</strong> The difference between the computer record and the physical count is called <strong>Shrinkage</strong>. This represents theft (shoplifting or employee theft), spoilage, or administrative errors that the computer missed.
            </li>
            <li>
                <strong>Valuation Accuracy:</strong> Inventory must be reported on the Balance Sheet at the lower of its cost or market value. You cannot accurately value what you do not physically verify exists.
            </li>
        </ul>
        
        <div class="mt-4 bg-red-50 p-4 rounded-md text-sm text-red-800 border border-red-200 flex items-start">
            <i class="fas fa-exclamation-triangle mt-1 mr-2"></i>
            <div>
                <strong>The Adjustment Formula:</strong><br>
                <span class="font-mono">Book Value (Computer) - Physical Count (Actual) = Shrinkage Expense</span>
                <br><span class="text-xs italic mt-1 text-red-600">Note: This amount is recorded as an adjustment, increasing Cost of Goods Sold and decreasing Inventory.</span>
            </div>
        </div>
    </div>

    <div class="border-t border-gray-200 pt-6">
        <h4 class="font-bold text-gray-700 mb-2">Costing in a Perpetual System</h4>
        <p class="text-gray-700 mb-3">
            In a Perpetual system, we don't just count costs at the end of the month. We must assign a cost to <em>every specific unit</em> the moment it is sold. Since identical items are bought at different prices throughout the year, we use specific assumptions to determine which "cost" is moved to Expense (COGS).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 class="font-bold text-blue-900 text-sm">1. FIFO (First-In, First-Out)</h5>
                <p class="text-xs text-blue-800 mt-1">
                    <strong>The Assumption:</strong> The oldest costs on the books are the first ones removed when a sale happens.
                </p>
                <p class="text-xs text-blue-800 mt-2">
                    <strong>Perpetual Impact:</strong> Simple to track. The "balance" always consists of the most recently purchased units.
                </p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 class="font-bold text-green-900 text-sm">2. Moving Average</h5>
                <p class="text-xs text-green-800 mt-1">
                    <strong>The Assumption:</strong> We calculate a new average unit cost <em>immediately after every purchase</em>.
                </p>
                <p class="text-xs text-green-800 mt-2">
                    <strong>Perpetual Impact:</strong> Dynamic. Unlike the "Weighted Average" in a periodic system (calculated once at month-end), this average fluctuates daily as you buy new stock.
                </p>
            </div>
        </div>
    </div>
</li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 class="text-xl font-bold text-gray-800 mb-3">4. Practice: FIFO vs. Moving Average (Perpetual)</h3>

    <div class="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-6">
        <h4 class="font-bold text-gray-900 mb-2">The Scenario</h4>
        <p class="text-sm text-gray-700 mb-3">
            A tech store tracks its stock of "Wireless Earbuds" (Item #501) during October.
        </p>

        <table class="w-full text-sm text-left text-gray-700 mb-4">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th class="px-3 py-2">Date</th>
                    <th class="px-3 py-2">Transaction Type</th>
                    <th class="px-3 py-2">Units</th>
                    <th class="px-3 py-2">Unit Cost</th>
                    <th class="px-3 py-2">Total Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b">
                    <td class="px-3 py-2">Oct 1</td>
                    <td class="px-3 py-2 font-semibold">Beginning Inventory</td>
                    <td class="px-3 py-2">100</td>
                    <td class="px-3 py-2">₱500</td>
                    <td class="px-3 py-2">₱50,000</td>
                </tr>
                <tr class="bg-blue-50 border-b">
                    <td class="px-3 py-2">Oct 5</td>
                    <td class="px-3 py-2 text-blue-700">Purchase #1</td>
                    <td class="px-3 py-2">200</td>
                    <td class="px-3 py-2">₱550</td>
                    <td class="px-3 py-2">₱110,000</td>
                </tr>
                <tr class="bg-red-50 border-b">
                    <td class="px-3 py-2">Oct 8</td>
                    <td class="px-3 py-2 text-red-700">Sale #1</td>
                    <td class="px-3 py-2">(150)</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                </tr>
                <tr class="bg-blue-50 border-b">
                    <td class="px-3 py-2">Oct 12</td>
                    <td class="px-3 py-2 text-blue-700">Purchase #2</td>
                    <td class="px-3 py-2">300</td>
                    <td class="px-3 py-2">₱600</td>
                    <td class="px-3 py-2">₱180,000</td>
                </tr>
                <tr class="bg-red-50 border-b">
                    <td class="px-3 py-2">Oct 20</td>
                    <td class="px-3 py-2 text-red-700">Sale #2</td>
                    <td class="px-3 py-2">(250)</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                </tr>
                 <tr class="bg-blue-50 border-b">
                    <td class="px-3 py-2">Oct 25</td>
                    <td class="px-3 py-2 text-blue-700">Purchase #3</td>
                    <td class="px-3 py-2">100</td>
                    <td class="px-3 py-2">₱620</td>
                    <td class="px-3 py-2">₱62,000</td>
                </tr>
                 <tr class="bg-red-50 border-b">
                    <td class="px-3 py-2">Oct 29</td>
                    <td class="px-3 py-2 text-red-700">Sale #3</td>
                    <td class="px-3 py-2">(100)</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                    <td class="px-3 py-2 text-gray-400 italic">--</td>
                </tr>
            </tbody>
        </table>
        
        <div class="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
             <span class="text-sm font-bold text-gray-800">Ending Inventory Count:</span>
             <span class="text-sm font-mono bg-gray-100 px-2 py-1 rounded">200 Units</span>
        </div>
        <p class="text-xs text-gray-500 mt-2">
           (Math: 100 + 200 - 150 + 300 - 250 + 100 - 100 = 200 units remaining)
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div class="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
            <h5 class="font-bold text-blue-900 mb-2 flex items-center">
                <span class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded mr-2">Method A</span> FIFO
            </h5>
            <p class="text-xs text-blue-800 mb-4 italic">"First Costs In are the First Costs Out."</p>
            
            <div class="space-y-4 text-sm text-blue-900">
                <div>
                    <strong class="block mb-1 text-blue-700 border-b border-blue-200">Cost of Goods Sold (COGS) Breakdown:</strong>
                    <ul class="list-disc pl-4 space-y-1 mt-1 text-xs">
                        <li><strong>Sale Oct 8 (150 units):</strong>
                            <br>100 @ ₱500 (Oldest) + 50 @ ₱550 
                            <br>= ₱50,000 + ₱27,500 = <strong>₱77,500</strong>
                        </li>
                         <li><strong>Sale Oct 20 (250 units):</strong>
                            <br>150 @ ₱550 (Leftover Oct 5) + 100 @ ₱600 (Oct 12)
                            <br>= ₱82,500 + ₱60,000 = <strong>₱142,500</strong>
                        </li>
                        <li><strong>Sale Oct 29 (100 units):</strong>
                            <br>100 @ ₱600 (From Oct 12)
                            <br>= <strong>₱60,000</strong>
                        </li>
                    </ul>
                    <div class="mt-2 font-bold text-right border-t border-blue-300 pt-1">Total COGS: ₱280,000</div>
                </div>

                <div>
                    <strong class="block mb-1 text-blue-700 border-b border-blue-200">Ending Inventory (200 Units):</strong>
                    <p class="text-xs mt-1">
                        We have 200 units left. Under FIFO, these are the <strong>most recent</strong> purchases.
                    </p>
                    <ul class="list-none pl-0 mt-1 text-xs font-mono bg-white p-2 rounded border border-blue-100">
                        <li>100 units @ ₱600 (From Oct 12) = ₱60,000</li>
                        <li>100 units @ ₱620 (From Oct 25) = ₱62,000</li>
                        <li class="border-t border-blue-200 mt-1 pt-1 font-bold">Total: ₱122,000</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
            <h5 class="font-bold text-green-900 mb-2 flex items-center">
                <span class="bg-green-200 text-green-800 text-xs px-2 py-1 rounded mr-2">Method B</span> Moving Average
            </h5>
            <p class="text-xs text-green-800 mb-4 italic">"Recalculate average cost after EVERY purchase."</p>
            
            <div class="space-y-4 text-sm text-green-900">
                <div>
                    <strong class="block mb-1 text-green-700 border-b border-green-200">Unit Cost Calculations:</strong>
                    <ul class="list-decimal pl-4 space-y-2 mt-1 text-xs">
                        <li>
                            <strong>Oct 5 (After Purchase #1):</strong>
                            <br>(100 @ 500 + 200 @ 550) / 300 units = <strong>₱533.33</strong>
                        </li>
                        <li>
                            <strong>Oct 12 (After Purchase #2):</strong>
                            <br><em>(Rem. 150 @ 533.33 + 300 @ 600) / 450 units</em>
                            <br>= (80,000 + 180,000) / 450 = <strong>₱577.78</strong>
                        </li>
                        <li>
                            <strong>Oct 25 (After Purchase #3):</strong>
                            <br><em>(Rem. 200 @ 577.78 + 100 @ 620) / 300 units</em>
                            <br>= (115,556 + 62,000) / 300 = <strong>₱591.85</strong>
                        </li>
                    </ul>
                </div>

                <div>
                     <strong class="block mb-1 text-green-700 border-b border-green-200">Final Results:</strong>
                     
                     <div class="flex justify-between items-center text-xs mt-2">
                        <span>Total COGS:</span>
                        <span class="font-mono font-bold">₱279,667</span>
                     </div>
                     <p class="text-[10px] text-green-700 italic mb-2">(Sum of: 150@533.33 + 250@577.78 + 100@591.85)</p>

                     <div class="flex justify-between items-center text-xs border-t border-green-300 pt-2">
                        <span>Ending Inventory (200 units):</span>
                        <span class="font-mono font-bold">₱118,370</span>
                     </div>
                     <p class="text-[10px] text-green-700 italic">(200 units @ Final Avg ₱591.85)</p>
                </div>
            </div>
        </div>
    </div>
</li>

</ul>`,
            exercises: [
    // --- MULTIPLE CHOICE QUESTIONS (25) ---

    { 
        type: "mcq", 
        question: "In a perpetual inventory system, which account is debited when merchandise is purchased for resale?", 
        options: ["Purchases", "Inventory", "Cost of Goods Sold", "Supplies"], 
        correctIndex: 1, 
        explanation: "Under the perpetual system, purchases are recorded directly into the Inventory asset account, not a Purchases account." 
    },
    { 
        type: "mcq", 
        question: "Which of the following creates two journal entries at the time of transaction?", 
        options: ["Purchase of inventory on credit", "Payment of freight costs", "Sale of merchandise", "Return of damaged goods to supplier"], 
        correctIndex: 2, 
        explanation: "A sale requires two entries: one to record the revenue (Sales) and one to update the inventory and record the expense (COGS)." 
    },
    { 
        type: "mcq", 
        question: "Under the perpetual system, the 'Cost of Goods Sold' account is classified as a(n):", 
        options: ["Asset", "Liability", "Revenue", "Expense"], 
        correctIndex: 3, 
        explanation: "Cost of Goods Sold is an expense account that appears on the Income Statement." 
    },
    { 
        type: "mcq", 
        question: "If a company returns defective goods to a supplier, which account is Credited?", 
        options: ["Purchase Returns and Allowances", "Accounts Payable", "Inventory", "Cost of Goods Sold"], 
        correctIndex: 2, 
        explanation: "Since the inventory balance is tracked continuously, a return reduces the asset directly; therefore, Inventory is credited." 
    },
    { 
        type: "mcq", 
        question: "What does the credit term '2/10, n/30' mean?", 
        options: ["2% interest if paid in 30 days", "2% discount if paid within 10 days, net due in 30", "10% discount if paid within 2 days", "Net due in 10 days, 2% penalty after 30"], 
        correctIndex: 1, 
        explanation: "It stands for a 2% discount is available if paid within 10 days; otherwise, the net (full) amount is due in 30 days." 
    },
    { 
        type: "mcq", 
        question: "When the buyer pays the shipping charges (FOB Shipping Point), the cost is debited to:", 
        options: ["Delivery Expense", "Freight Out", "Inventory", "Sales Expense"], 
        correctIndex: 2, 
        explanation: "Costs to get the inventory ready for sale (like incoming freight) are capitalized as part of the Inventory asset." 
    },
    { 
        type: "mcq", 
        question: "The difference between the physical count of inventory and the accounting records is known as:", 
        options: ["Gross Profit", "Inventory Turnover", "Shrinkage", "Safety Stock"], 
        correctIndex: 2, 
        explanation: "Shrinkage represents the loss of inventory due to theft, damage, or error." 
    },
    { 
        type: "mcq", 
        question: "Which account is debited to record inventory shrinkage?", 
        options: ["Inventory", "Loss on Theft", "Cost of Goods Sold", "Sales Returns"], 
        correctIndex: 2, 
        explanation: "Shrinkage is typically recorded as an increase to Cost of Goods Sold and a decrease to Inventory." 
    },
    { 
        type: "mcq", 
        question: "FOB Destination means ownership transfers when:", 
        options: ["The goods leave the seller's warehouse", "The goods arrive at the buyer's place of business", "The invoice is paid", "The purchase order is signed"], 
        correctIndex: 1, 
        explanation: "FOB Destination means the seller retains ownership (and risk) until the goods reach the buyer." 
    },
    { 
        type: "mcq", 
        question: "Gross Profit is calculated as:", 
        options: ["Net Income - Operating Expenses", "Sales - Operating Expenses", "Sales - Cost of Goods Sold", "Inventory - Accounts Payable"], 
        correctIndex: 2, 
        explanation: "Gross Profit is the direct profit from the goods themselves, calculated as Net Sales minus Cost of Goods Sold." 
    },
    { 
        type: "mcq", 
        question: "Which document authorizes the warehouse to release goods for shipment to a customer?", 
        options: ["Purchase Order", "Receiving Report", "Debit Memo", "Shipping Order / Delivery Receipt"], 
        correctIndex: 3, 
        explanation: "A shipping order or delivery receipt serves as proof that goods have been released and shipped." 
    },
    { 
        type: "mcq", 
        question: "In a perpetual system, the 'Inventory' account generally has a:", 
        options: ["Debit balance", "Credit balance", "Zero balance", "Negative balance"], 
        correctIndex: 0, 
        explanation: "Inventory is an Asset, and assets normally have a Debit balance." 
    },
    { 
        type: "mcq", 
        question: "When a customer returns goods for credit, the seller Debits which account (assuming the goods are returned to inventory)?", 
        options: ["Sales", "Accounts Receivable", "Sales Returns and Allowances", "Cost of Goods Sold"], 
        correctIndex: 2, 
        explanation: "The seller debits Sales Returns and Allowances (a contra-revenue) to reduce net sales." 
    },
    { 
        type: "mcq", 
        question: "Continuing from the previous question, what is the SECOND entry the seller makes for a return?", 
        options: ["Debit Inventory, Credit COGS", "Debit COGS, Credit Inventory", "Debit Cash, Credit Sales", "No second entry needed"], 
        correctIndex: 0, 
        explanation: "The seller must put the item back into the books: Debit Inventory (asset increases) and Credit COGS (expense decreases)." 
    },
    { 
        type: "mcq", 
        question: "Freight Out (shipping to customers) is classified as:", 
        options: ["Part of Cost of Goods Sold", "A Selling/Operating Expense", "An addition to Inventory", "A deduction from Sales"], 
        correctIndex: 1, 
        explanation: "Freight Out is a delivery expense incurred to sell the product, making it an Operating Expense." 
    },
    { 
        type: "mcq", 
        question: "Purchasing inventory on account results in:", 
        options: ["Increase in Assets, Increase in Equity", "Increase in Assets, Increase in Liabilities", "Decrease in Assets, Decrease in Liabilities", "No change in total assets"], 
        correctIndex: 1, 
        explanation: "Inventory (Asset) increases and Accounts Payable (Liability) increases." 
    },
    { 
        type: "mcq", 
        question: "Which of the following accounts is NOT closed at the end of the year?", 
        options: ["Sales Revenue", "Cost of Goods Sold", "Inventory", "Sales Returns"], 
        correctIndex: 2, 
        explanation: "Inventory is a permanent (Balance Sheet) account and is not closed. The others are temporary accounts." 
    },
    { 
        type: "mcq", 
        question: "What is the effect of a Purchase Discount on the inventory cost?", 
        options: ["It increases the cost", "It decreases the cost", "It has no effect", "It is recorded as revenue"], 
        correctIndex: 1, 
        explanation: "A discount reduces the actual cash paid for the item, so it reduces the recorded cost of the Inventory asset." 
    },
    { 
        type: "mcq", 
        question: "If a company has Net Sales of ₱100,000 and a Gross Profit rate of 40%, what is the Cost of Goods Sold?", 
        options: ["₱40,000", "₱60,000", "₱100,000", "₱140,000"], 
        correctIndex: 1, 
        explanation: "If Gross Profit is 40%, COGS must be 60%. ₱100,000 x 60% = ₱60,000." 
    },
    { 
        type: "mcq", 
        question: "Which inventory system requires a physical count to determine Cost of Goods Sold?", 
        options: ["Perpetual", "Periodic", "Just-In-Time", "Automated"], 
        correctIndex: 1, 
        explanation: "The Periodic system relies on a physical count at the end of the period to 'plug' the COGS figure." 
    },
    { 
        type: "mcq", 
        question: "A Debit Memorandum issued by a buyer to a seller indicates:", 
        options: ["The buyer is returning goods or asking for an allowance", "The buyer is paying the invoice", "The seller is charging more", "Shipping is delayed"], 
        correctIndex: 0, 
        explanation: "It effectively 'Debits' (reduces) the Accounts Payable the buyer owes to the seller." 
    },
    { 
        type: "mcq", 
        question: "Merchandise Inventory appears on which financial statement?", 
        options: ["Income Statement", "Statement of Cash Flows", "Balance Sheet", "Retained Earnings Statement"], 
        correctIndex: 2, 
        explanation: "Inventory is a Current Asset on the Balance Sheet." 
    },
    { 
        type: "mcq", 
        question: "If Inventory at the beginning of the year is ₱20,000, Purchases are ₱50,000, and Ending Inventory is ₱10,000, what is COGS? (Formula logic applies to both systems)", 
        options: ["₱40,000", "₱60,000", "₱70,000", "₱80,000"], 
        correctIndex: 1, 
        explanation: "GAS (Goods Available for Sale) = 20k + 50k = 70k. COGS = GAS - Ending Inv (10k) = ₱60,000." 
    },
    { 
        type: "mcq", 
        question: "The operating cycle of a merchandising company is typically:", 
        options: ["Shorter than a service company", "Longer than a service company", "The same as a service company", "Non-existent"], 
        correctIndex: 1, 
        explanation: "It is longer because cash must first be converted to inventory, then sold, then collected." 
    },
    { 
        type: "mcq", 
        question: "Which of the following is considered a 'Contra-Revenue' account?", 
        options: ["Sales", "Inventory", "Sales Returns and Allowances", "Cost of Goods Sold"], 
        correctIndex: 2, 
        explanation: "It has a debit balance and offsets Sales Revenue on the Income Statement." 
    },
                // Q1: FIFO (Simple - 1 Sale)
    { 
        type: "mcq", 
        question: "Using the FIFO Perpetual method, calculate the Cost of Goods Sold (COGS) for the sale on Jan 15.\n\nTransactions:\nJan 1: Beginning Inv (100 units @ ₱10)\nJan 5: Purchase (200 units @ ₱12)\nJan 10: Purchase (100 units @ ₱15)\nJan 15: Sale of 320 units", 
        options: ["₱3,700", "₱3,900", "₱3,840", "₱4,000"], 
        correctIndex: 0, 
        explanation: "FIFO takes the oldest costs first.\n1. 100 units @ ₱10 = ₱1,000 (All Beg Inv)\n2. 200 units @ ₱12 = ₱2,400 (All Jan 5)\n3. 20 units @ ₱15 = ₱300 (From Jan 10)\nTotal: ₱1,000 + ₱2,400 + ₱300 = ₱3,700." 
    },

    // Q2: FIFO (Complex - 3 Purchases, 3 Sales)
    { 
        type: "mcq", 
        question: "Calculate the value of ENDING INVENTORY using FIFO Perpetual.\n\nJan 1: Beg Inv (50 units @ ₱20)\nJan 2: Sale (40 units)\nJan 5: Purchase (50 units @ ₱22)\nJan 8: Sale (20 units)\nJan 10: Purchase (50 units @ ₱24)\nJan 12: Sale (30 units)\nJan 15: Purchase (50 units @ ₱26)", 
        options: ["₱2,660", "₱2,780", "₱2,400", "₱3,000"], 
        correctIndex: 1, 
        explanation: "Track the layers:\n1. After Jan 2 Sale: 10 units @ ₱20 remain.\n2. After Jan 8 Sale (20 total): 10 @ ₱20 sold + 10 @ ₱22 sold. Remaining: 40 units @ ₱22.\n3. After Jan 12 Sale (30 total): 30 @ ₱22 sold. Remaining: 10 units @ ₱22.\n\nEnding Inventory Layers:\n- 10 units @ ₱22 (Oldest remaining)\n- 50 units @ ₱24 (From Jan 10)\n- 50 units @ ₱26 (From Jan 15)\nTotal: ₱220 + ₱1,200 + ₱1,300 = ₱2,780." 
    },

    // Q3: Moving Average (Simple - 1 Sale)
    { 
        type: "mcq", 
        question: "Using the Moving Average method, what is the Cost of Goods Sold for the sale on Jan 15?\n\nJan 1: Beg Inv (100 units @ ₱10)\nJan 5: Purchase (100 units @ ₱14)\nJan 10: Purchase (200 units @ ₱16)\nJan 15: Sale (300 units)", 
        options: ["₱4,200", "₱4,350", "₱4,500", "₱3,900"], 
        correctIndex: 0, 
        explanation: "1. Average after Jan 5: (100@10 + 100@14) = ₱2,400 / 200 units = ₱12/unit.\n2. Average after Jan 10: (200@12 + 200@16) = ₱5,600 / 400 units = ₱14/unit.\n3. COGS: 300 units x ₱14 = ₱4,200." 
    },

    // Q4: Moving Average (Complex - 3 Purchases, 3 Sales)
    { 
        type: "mcq", 
        question: "What is the Moving Average UNIT COST used for the final sale on Jan 14?\n\nJan 1: Beg Inv (100 @ ₱10)\nJan 2: Purchase (100 @ ₱12)\nJan 3: Sale (100 units)\nJan 5: Purchase (100 @ ₱15)\nJan 8: Sale (100 units)\nJan 10: Purchase (100 @ ₱16)\nJan 14: Sale (100 units)", 
        options: ["₱13.00", "₱14.50", "₱16.00", "₱15.00"], 
        correctIndex: 1, 
        explanation: "1. Avg after Jan 2: (100@10 + 100@12)/200 = ₱11. \n2. After Jan 3 Sale: 100 rem @ ₱11.\n3. Avg after Jan 5: (100@11 + 100@15)/200 = 2600/200 = ₱13.\n4. After Jan 8 Sale: 100 rem @ ₱13.\n5. Avg after Jan 10: (100@13 + 100@16)/200 = 2900/200 = ₱14.50." 
    },

    // Q5: Comparison (FIFO vs Moving Average)
    { 
        type: "mcq", 
        question: "Compare the Total Cost of Goods Sold (COGS) between Moving Average and FIFO. What is the difference?\n\nJan 1: Beg Inv (10 units @ ₱100)\nJan 2: Purchase (10 units @ ₱110)\nJan 3: Purchase (10 units @ ₱120)\nJan 4: Sale (15 units)\nJan 5: Purchase (10 units @ ₱130)\nJan 6: Sale (15 units)", 
        options: ["Moving Avg is higher by ₱120", "FIFO is higher by ₱120", "Moving Avg is higher by ₱50", "They are equal"], 
        correctIndex: 0, 
        explanation: "FIFO COGS:\nSale 1 (15): 10@100 + 5@110 = 1,550\nSale 2 (15): 5@110 + 10@120 = 1,750\nTotal FIFO = 3,300.\n\nMoving Avg COGS:\nAvg after Jan 3: (1000+1100+1200)/30 = ₱110.\nSale 1: 15 @ 110 = 1,650. (Rem 15 @ 110).\nAvg after Jan 5: (1650 + 1300)/25 = ₱118.\nSale 2: 15 @ 118 = 1,770.\nTotal Avg = 3,420.\n\nDifference: 3,420 - 3,300 = ₱120 (Moving Avg is higher)." 
    },
    

    // --- OPEN ENDED PROBLEMS (10) ---

    {
        type: "problem",
        question: "Company A purchases 500 units of widgets for ₱10 each on credit. Calculate the total liability recorded and write the journal entry description.",
        answer: `Total Liability: 500 units x ₱10 = ₱5,000.
Journal Entry:
Debit: Inventory ₱5,000
Credit: Accounts Payable ₱5,000`,
        explanation: "The asset (Inventory) and the liability (Accounts Payable) both increase by the total cost of the goods."
    },
    {
        type: "problem",
        question: "A seller sells goods for ₱2,000 cash. The goods originally cost the seller ₱1,200. Provide the two necessary journal entries.",
        answer: `Entry 1 (Revenue):
Debit: Cash ₱2,000
Credit: Sales Revenue ₱2,000

Entry 2 (Cost):
Debit: Cost of Goods Sold ₱1,200
Credit: Inventory ₱1,200`,
        explanation: "The perpetual system requires recognizing revenue and updating inventory/expense immediately upon sale."
    },
    {
        type: "problem",
        question: "Explain the difference between FOB Shipping Point and FOB Destination regarding who pays for shipping.",
        answer: `FOB Shipping Point: The BUYER pays the shipping costs. Ownership transfers when goods leave the seller.
FOB Destination: The SELLER pays the shipping costs. Ownership transfers when goods arrive at the buyer.`,
        explanation: "FOB determines who owns the goods in transit and who bears the cost of transport."
    },
    {
        type: "problem",
        question: "Company B purchased goods for ₱10,000 with terms 3/15, n/45. They returned ₱1,000 worth of defective goods before paying. If they pay the remaining balance within the discount period, how much is the cash payment? Show computation.",
        answer: `Initial Purchase: ₱10,000
Less Return: (₱1,000)
Net Balance Due: ₱9,000
Less Discount (3% of ₱9,000): (₱270)
-------------------------
Cash Paid: ₱8,730`,
        explanation: "The discount is calculated on the Net Balance (after returns), not the original invoice amount."
    },
    {
        type: "problem",
        question: "At year-end, the accounting records show an Inventory balance of ₱105,000. A physical count reveals only ₱102,000 is actually on hand. Prepare the adjusting entry.",
        answer: `Debit: Cost of Goods Sold ₱3,000
Credit: Inventory ₱3,000

(Calculation: ₱105,000 - ₱102,000 = ₱3,000 shortage)`,
        explanation: "This entry records inventory shrinkage, bringing the book balance down to match the physical reality."
    },
    {
        type: "problem",
        question: "Why is 'Freight Out' considered an Operating Expense rather than part of Cost of Goods Sold?",
        answer: `Freight Out is the cost of delivering goods to a customer. It is a selling service provided to the customer, not a cost of acquiring the inventory itself. Therefore, it is an operating expense (specifically a selling expense).`,
        explanation: "Only costs incurred to bring the inventory to the business and get it ready for sale are capitalized as Inventory/COGS."
    },
    {
        type: "problem",
        question: "Calculate the Net Sales: Sales Revenue ₱500,000; Sales Returns ₱20,000; Sales Discounts ₱5,000; Cost of Goods Sold ₱300,000.",
        answer: `Sales Revenue: ₱500,000
Less: Sales Returns (₱20,000)
Less: Sales Discounts (₱5,000)
-----------------------------
Net Sales: ₱475,000`,
        explanation: "Net Sales = Gross Sales minus all contra-revenue accounts (Returns, Allowances, and Discounts). COGS is not part of the Net Sales calculation."
    },
    {
        type: "problem",
        question: "A company uses the Perpetual system. They pay ₱200 cash for freight costs on an incoming shipment (FOB Shipping Point). What is the journal entry?",
        answer: `Debit: Inventory ₱200
Credit: Cash ₱200`,
        explanation: "In a perpetual system, freight-in is added directly to the cost of the Inventory asset."
    },
    {
        type: "problem",
        question: "Why is the Perpetual Inventory System considered to provide better internal control than the Periodic System?",
        answer: `It provides a continuous record of what 'should' be on hand. This allows management to compare the book balance to the physical count to detect theft or errors (shrinkage). The Periodic system has no continuous record to compare against, so theft is buried inside the COGS calculation.`,
        explanation: "The visibility of shrinkage is the key control advantage."
    },
    {
        type: "problem",
        question: "Calculate the Gross Profit Rate: Net Sales ₱200,000; Cost of Goods Sold ₱120,000.",
        answer: `Gross Profit = ₱200,000 - ₱120,000 = ₱80,000.
Gross Profit Rate = (Gross Profit / Net Sales) x 100
Rate = (₱80,000 / ₱200,000) = 40%`,
        explanation: "The rate represents the percentage of each sales dollar that exceeds the cost of the goods sold."
    },
                // --- FIFO: SIMPLE (Beg Inv + 2 Purchases + 1 Sale) ---

    {
        type: "problem",
        question: "Using FIFO Perpetual, calculate the Cost of Goods Sold (COGS) for the sale on Jan 10.\n\nJan 1: Beg Inv (100 units @ ₱50)\nJan 5: Purchase (200 units @ ₱55)\nJan 8: Purchase (50 units @ ₱60)\nJan 10: Sale of 250 units",
        answer: `Sold 250 units total.
Layer 1 (Oldest): 100 units @ ₱50 = ₱5,000
Layer 2 (Next):   150 units @ ₱55 = ₱8,250
-----------------------------------------
Total COGS:       ₱13,250`,
        explanation: "Under FIFO, we sell the oldest units first. We cleared the entire Beginning Inventory (100) and took the remaining 150 needed from the Jan 5 purchase."
    },
    {
        type: "problem",
        question: "Using FIFO Perpetual, determine the value of Ending Inventory after the following transactions.\n\nFeb 1: Beg Inv (20 units @ ₱100)\nFeb 10: Purchase (30 units @ ₱120)\nFeb 15: Purchase (10 units @ ₱130)\nFeb 20: Sale of 40 units",
        answer: `Total Units Available: 60. Units Sold: 40. Units Remaining: 20.
Under FIFO, the remaining units are the NEWEST ones.

From Feb 15 Purchase: 10 units @ ₱130 = ₱1,300
From Feb 10 Purchase: 10 units @ ₱120 = ₱1,200
-----------------------------------------
Ending Inventory:     ₱2,500`,
        explanation: "We sold the oldest 40 (all 20 from Beg Inv + 20 from Feb 10). What remains are the 10 from Feb 15 and the remaining 10 from Feb 10."
    },

    // --- FIFO: COMPLEX (Beg Inv + 3 Purchases + 3 Sales) ---

    {
        type: "problem",
        question: "Track the inventory layers using FIFO to find the Cost of Goods Sold for the FINAL sale on March 25 only.\n\nMar 1: Beg Inv (100 @ ₱10)\nMar 5: Sold 50 units\nMar 8: Purchase (100 @ ₱12)\nMar 10: Sold 80 units\nMar 15: Purchase (100 @ ₱14)\nMar 20: Purchase (50 @ ₱15)\nMar 25: Sold 100 units",
        answer: `Previous balances before Mar 25 sale:
- Remaining from Mar 8: 20 units @ ₱12 (Since 80 were sold on Mar 10, using up the rest of Beg Inv and 30 of Mar 8).
- Full Mar 15 Batch: 100 units @ ₱14.
- Full Mar 20 Batch: 50 units @ ₱15.

Mar 25 Sale (100 units):
1. Take all remaining Mar 8: 20 units @ ₱12 = ₱240
2. Take from Mar 15:         80 units @ ₱14 = ₱1,120
--------------------------------------------------
COGS for Mar 25 Sale:        ₱1,360`,
        explanation: "You must track the 'balance' column carefully. Before the final sale, the oldest layer available was the remainder of the March 8 purchase."
    },
    {
        type: "problem",
        question: "Calculate the total Gross Profit for the month using FIFO.\n\nApr 1: Beg Inv (10 @ ₱200)\nApr 5: Purchase (10 @ ₱220)\nApr 8: Sale (15 units @ ₱400 selling price)\nApr 12: Purchase (10 @ ₱240)\nApr 15: Sale (10 units @ ₱450 selling price)\nApr 20: Purchase (10 @ ₱250)\nApr 25: Sale (5 units @ ₱500 selling price)",
        answer: `Total Revenue:
(15 * 400) + (10 * 450) + (5 * 500) = ₱13,000

Total COGS (FIFO):
Sale 1 (15): (10@200) + (5@220) = 3,100
Sale 2 (10): (5@220 rem) + (5@240) = 2,300
Sale 3 (5):  (5@240 rem) = 1,200
Total COGS = ₱6,600

Gross Profit: ₱13,000 - ₱6,600 = ₱6,400`,
        explanation: "Gross Profit is Total Revenue minus Total COGS. FIFO requires peeling off the cost layers in chronological order for each specific sale."
    },

    // --- MOVING AVERAGE: SIMPLE (Beg Inv + 2 Purchases + 1 Sale) ---

    {
        type: "problem",
        question: "Using the Moving Average method, calculate the new unit cost after the Jan 15 purchase. (Round to 2 decimals).\n\nJan 1: Beg Inv (100 units @ ₱20)\nJan 10: Purchase (100 units @ ₱24)\nJan 15: Purchase (200 units @ ₱28)\nJan 20: Sale (300 units)",
        answer: `1. After Jan 10 Purchase:
(100@20 + 100@24) = 4,400 / 200 units = ₱22.00/unit

2. After Jan 15 Purchase:
Old Balance: 200 units @ ₱22.00 = ₱4,400
New Purchase: 200 units @ ₱28.00 = ₱5,600
Total: 400 units costing ₱10,000

New Average Cost: ₱10,000 / 400 units = ₱25.00`,
        explanation: "In a perpetual moving average, you must re-calculate the average cost immediately after every purchase, before you calculate any sales."
    },
    {
        type: "problem",
        question: "Using Moving Average, calculate the Cost of Goods Sold for the sale on May 20.\n\nMay 1: Beg Inv (500 units @ ₱10)\nMay 5: Purchase (500 units @ ₱14)\nMay 10: Purchase (1,000 units @ ₱16)\nMay 20: Sale (1,500 units)",
        answer: `1. Avg after May 5:
(500@10 + 500@14) / 1000 = 12,000 / 1000 = ₱12.00

2. Avg after May 10:
(1000@12 + 1000@16) / 2000 = 28,000 / 2000 = ₱14.00

3. COGS for Sale:
1,500 units x ₱14.00 = ₱21,000`,
        explanation: "The final average cost calculated before the sale (₱14.00) is applied to all units sold in that transaction."
    },

    // --- MOVING AVERAGE: COMPLEX (Beg Inv + 3 Purchases + 3 Sales) ---

    {
        type: "problem",
        question: "Calculate the value of Ending Inventory using Moving Average. (Round intermediate unit costs to 2 decimals).\n\nJun 1: Beg Inv (100 @ ₱50)\nJun 5: Sold 50 units\nJun 10: Purchase (100 @ ₱60)\nJun 15: Sold 100 units\nJun 20: Purchase (200 @ ₱70)\nJun 25: Sold 50 units\nJun 30: Purchase (100 @ ₱80)",
        answer: `1. Jun 1 Avg: ₱50.
2. Jun 5 Sale: Rem 50 units @ ₱50.
3. Jun 10 Purchase: (50@50 + 100@60) / 150 = 8,500/150 = ₱56.67
4. Jun 15 Sale: Rem 50 units @ ₱56.67. (Value ₱2,833.50)
5. Jun 20 Purchase: (2,833.50 + 200@70) / 250 = 16,833.50/250 = ₱67.33
6. Jun 25 Sale: Rem 200 units @ ₱67.33. (Value ₱13,466)
7. Jun 30 Purchase: (13,466 + 100@80) / 300 = 21,466/300 = ₱71.55

Ending Inventory: 300 units @ ₱71.55 = ₱21,465 (approx)`,
        explanation: "The moving average requires updating the cost per unit after every purchase. This new cost is carried forward to the next transaction."
    },
    {
        type: "problem",
        question: "Calculate the total Cost of Goods Sold for the period using Moving Average.\n\nJul 1: Beg Inv (10 @ ₱10)\nJul 2: Purch (10 @ ₱12)\nJul 3: Sale (10 units)\nJul 4: Purch (10 @ ₱14)\nJul 5: Sale (10 units)\nJul 6: Purch (10 @ ₱16)\nJul 7: Sale (10 units)",
        answer: `1. Avg after Jul 2: (10@10 + 10@12)/20 = ₱11.
COGS Sale 1: 10 x 11 = ₱110. (Rem 10 @ 11).

2. Avg after Jul 4: (10@11 + 10@14)/20 = 250/20 = ₱12.50.
COGS Sale 2: 10 x 12.50 = ₱125. (Rem 10 @ 12.50).

3. Avg after Jul 6: (10@12.50 + 10@16)/20 = 285/20 = ₱14.25.
COGS Sale 3: 10 x 14.25 = ₱142.50.

Total COGS: 110 + 125 + 142.50 = ₱377.50`,
        explanation: "We sum the COGS calculated at each individual sale point based on the weighted average cost active at that specific date."
    },

    // --- COMPARISON: FIFO vs MOVING AVG (Beg Inv + 3 Purchases + 3 Sales) ---

    {
        type: "problem",
        question: "Compare the Ending Inventory value between FIFO and Moving Average. Which is higher and by how much?\n\nAug 1: Beg Inv (100 @ ₱10)\nAug 2: Purch (100 @ ₱20)\nAug 3: Sale (100 units)\nAug 4: Purch (100 @ ₱30)\nAug 5: Sale (100 units)\nAug 6: Purch (100 @ ₱40)\nAug 7: Sale (100 units)",
        answer: `Ending Units: 100.

FIFO (Ending is newest):
100 units @ ₱40 = ₱4,000.

Moving Average:
1. Avg (100@10+100@20)/200 = ₱15. After Sale 1, Rem 100@15.
2. Avg (100@15+100@30)/200 = ₱22.50. After Sale 2, Rem 100@22.50.
3. Avg (100@22.50+100@40)/200 = ₱31.25. After Sale 3, Rem 100@31.25.
MA Ending Inv = ₱3,125.

Difference: ₱4,000 (FIFO) - ₱3,125 (MA) = ₱875.
FIFO is higher by ₱875.`,
        explanation: "In a period of rising prices (inflation), FIFO generally produces a higher ending inventory value because the cheaper, older goods are sold off, leaving expensive goods on the books."
    },
    {
        type: "problem",
        question: "Compare the Total COGS between FIFO and Moving Average. Which method reports higher Net Income?\n\nSept 1: Beg Inv (50 @ ₱100)\nSept 2: Purch (50 @ ₱110)\nSept 3: Sale (50 units)\nSept 4: Purch (50 @ ₱120)\nSept 5: Sale (50 units)\nSept 6: Purch (50 @ ₱130)\nSept 7: Sale (50 units)",
        answer: `FIFO COGS:
1. Sale 1: 50 @ 100 = 5,000
2. Sale 2: 50 @ 110 = 5,500
3. Sale 3: 50 @ 120 = 6,000
Total FIFO COGS = ₱16,500

Moving Avg COGS:
1. Avg (100+110)/2 = 105. COGS = 5,250.
2. Avg (105+120)/2 = 112.5. COGS = 5,625.
3. Avg (112.5+130)/2 = 121.25. COGS = 6,062.5.
Total MA COGS = ₱16,937.5

Conclusion: FIFO has lower COGS (16,500 vs 16,937.5). Therefore, FIFO reports higher Net Income.`,
        explanation: "Since FIFO charges the older (cheaper) costs to expense, the total expense is lower, resulting in higher profit (Net Income) compared to Moving Average."
    }
]
        },
        {
            day: "Day 4",
            topic: "Comparison & Applications",
            content: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
    <p class="font-bold text-blue-900">Learning Goal</p>
    <p class="text-blue-800">Distinguish between Periodic and Perpetual inventory systems and understand how costs are recognized under each method.</p>
</div>

<h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
<ul class="list-none space-y-8 mb-6">

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">1. The Core Difference: "When do we update?"</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                The fundamental difference between these two systems isn't <em>what</em> they sell, but <strong>when</strong> they update their accounting records.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-green-50 p-4 rounded border border-green-200">
                    <h4 class="font-bold text-green-800">Perpetual (Continuous)</h4>
                    <p class="text-sm mt-1">Updates records <strong>continuously</strong> after every transaction. Think of a supermarket scanner: as soon as the barcode is beeped, the system knows one unit is gone.</p>
                </div>
                <div class="bg-orange-50 p-4 rounded border border-orange-200">
                    <h4 class="font-bold text-orange-800">Periodic (Batch)</h4>
                    <p class="text-sm mt-1">Updates records <strong>occasionally</strong> (periodically). The business doesn't track unit-by-unit sales in real-time. They only know what they sold by counting what is left at the end of the month.</p>
                </div>
            </div>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2. The Perpetual System: Real-Time Accuracy</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                Under the Perpetual system, the <strong>Inventory</strong> account is "live." It increases immediately when goods are purchased and decreases immediately when goods are sold.
            </p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Detailed Control:</strong> The company knows exactly how much inventory is on hand at any specific moment.</li>
                <li><strong>Cost of Goods Sold (COGS):</strong> Calculated and recorded instantly at the time of sale.</li>
                <li><strong>Best For:</strong> High-value items (Cars, Jewelry, Appliances) or high-volume businesses with technology (Amazon, Walmart).</li>
            </ul>
            <div class="bg-gray-100 p-3 rounded text-sm italic">
                <strong>Analogy:</strong> Your bank app. You check it, and it shows your balance <em>right now</em> because every debit card swipe is recorded instantly.
            </div>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">3. The Periodic System: The "Physical Count" Method</h3>
        <div class="text-gray-700 mb-4">
            <p class="mb-3">
                Under the Periodic system, the business does not track the cost of items sold during the sale. Instead, they record all buys into a temporary account called <strong>Purchases</strong>.
            </p>
            <p class="mb-3">
                To find out the Cost of Goods Sold (COGS), they must perform a physical count at the end of the period to see what is missing (sold).
            </p>

            

            <div class="bg-slate-800 text-white p-4 rounded-lg my-4 font-mono text-center">
                $$Beginning\ Inventory + Net\ Purchases = Goods\ Available$$
                <br>
                $$Goods\ Available - Ending\ Inventory = Cost\ of\ Goods\ Sold$$
            </div>

            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Low Cost:</strong> Requires less technology and effort during the day.</li>
                <li><strong>The Blind Spot:</strong> You don't know if items were stolen or sold until the end of the month count.</li>
                <li><strong>Best For:</strong> Small businesses with low-value items (Sari-sari stores, hardware stores selling loose nails).</li>
            </ul>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">4. Side-by-Side Comparison</h3>
        <div class="overflow-x-auto">
            <table class="min-w-full text-left text-sm whitespace-nowrap">
                <thead class="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50 text-gray-600">
                    <tr>
                        <th scope="col" class="px-6 py-4">Feature</th>
                        <th scope="col" class="px-6 py-4">Perpetual System</th>
                        <th scope="col" class="px-6 py-4">Periodic System</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 text-gray-700">
                    <tr>
                        <td class="px-6 py-4 font-bold">Inventory Account</td>
                        <td class="px-6 py-4">Updated continuously</td>
                        <td class="px-6 py-4">Updated only at period end</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold">Purchases Recorded In</td>
                        <td class="px-6 py-4">"Inventory" Account</td>
                        <td class="px-6 py-4">"Purchases" Account</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold">COGS Recognition</td>
                        <td class="px-6 py-4">Recorded at every sale</td>
                        <td class="px-6 py-4">Calculated at end of month</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold">Shrinkage (Theft)</td>
                        <td class="px-6 py-4">Easily detected (Record vs. Count)</td>
                        <td class="px-6 py-4">Hard to detect (Buried in COGS)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </li>

    <li class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">5. Application: Journal Entries</h3>
        <p class="text-gray-700 mb-4">
            The accounting entries differ significantly between the two. Notice how the Perpetual system involves <strong>two entries</strong> during a sale.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-2">Scenario A: Buying Goods ($1,000)</h4>
                
                <p class="text-xs uppercase font-bold text-gray-500 mt-2">Perpetual Entry</p>
                <div class="font-mono text-sm bg-white p-2 rounded border border-gray-200">
                    Dr. Merchandise Inventory  1,000<br>
                    &nbsp;&nbsp;&nbsp;Cr. Accounts Payable  1,000
                </div>

                <p class="text-xs uppercase font-bold text-gray-500 mt-2">Periodic Entry</p>
                <div class="font-mono text-sm bg-white p-2 rounded border border-gray-200">
                    Dr. Purchases  1,000<br>
                    &nbsp;&nbsp;&nbsp;Cr. Accounts Payable  1,000
                </div>
            </div>

            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-900 mb-2 border-b border-green-200 pb-2">Scenario B: Selling Goods ($1,500 Sales Price, $1,000 Cost)</h4>
                
                <p class="text-xs uppercase font-bold text-gray-500 mt-2">Perpetual Entry (2 Steps)</p>
                <div class="font-mono text-sm bg-white p-2 rounded border border-gray-200">
                    1. Dr. Acc. Receivable  1,500<br>
                    &nbsp;&nbsp;&nbsp;Cr. Sales  1,500<br>
                    <span class="text-red-600">2. Dr. COGS  1,000<br>
                    &nbsp;&nbsp;&nbsp;Cr. Merch. Inventory  1,000</span>
                </div>

                <p class="text-xs uppercase font-bold text-gray-500 mt-2">Periodic Entry (1 Step)</p>
                <div class="font-mono text-sm bg-white p-2 rounded border border-gray-200">
                    1. Dr. Acc. Receivable  1,500<br>
                    &nbsp;&nbsp;&nbsp;Cr. Sales  1,500<br>
                    <span class="text-gray-400 italic">(No COGS entry made yet)</span>
                </div>
            </div>
        </div>
    </li>
</ul>`,
            exercises: [
    // --- MULTIPLE CHOICE QUESTIONS (1-25) ---

    {
        type: "mcq",
        question: "Which inventory system requires a physical count to determine the Cost of Goods Sold (COGS) at the end of the period?",
        options: ["Perpetual System", "Periodic System", "Just-In-Time System", "Automated System"],
        correctIndex: 1,
        explanation: "The Periodic system relies on a physical count because it does not track COGS during sales transactions."
    },
    {
        type: "mcq",
        question: "In a Perpetual inventory system, which account is debited when inventory is purchased?",
        options: ["Purchases", "Merchandise Inventory", "Cost of Goods Sold", "Accounts Payable"],
        correctIndex: 1,
        explanation: "The Perpetual system updates the asset account 'Merchandise Inventory' directly."
    },
    {
        type: "mcq",
        question: "Under the Periodic system, purchases of merchandise are recorded in which account?",
        options: ["Merchandise Inventory", "Cost of Goods Sold", "Purchases", "Sales"],
        correctIndex: 2,
        explanation: "The Periodic system uses a temporary expense-like account called 'Purchases'."
    },
    {
        type: "mcq",
        question: "Which system provides better protection against shrinkage and theft?",
        options: ["Periodic System", "Perpetual System", "Both are equal", "Neither"],
        correctIndex: 1,
        explanation: "Perpetual allows comparison between book records and physical counts, making missing items obvious."
    },
    {
        type: "mcq",
        question: "When selling goods under the Perpetual system, how many journal entries are typically made?",
        options: ["One (for Revenue)", "One (for Cost)", "Two (one for Revenue, one for Cost)", "None"],
        correctIndex: 2,
        explanation: "One entry records the Sale/Receivable, and the second entry records the COGS/Inventory reduction."
    },
    {
        type: "mcq",
        question: "The formula 'Beginning Inventory + Net Purchases - Ending Inventory' is used to calculate:",
        options: ["Gross Profit", "Cost of Goods Sold", "Net Income", "Total Liabilities"],
        correctIndex: 1,
        explanation: "This is the standard formula for deriving COGS in a Periodic system."
    },
    {
        type: "mcq",
        question: "Which account is generally NOT used in a Perpetual inventory system?",
        options: ["Purchases", "Cost of Goods Sold", "Merchandise Inventory", "Sales"],
        correctIndex: 0,
        explanation: "The 'Purchases' account is specific to the Periodic system; Perpetual uses 'Merchandise Inventory' for buys."
    },
    {
        type: "mcq",
        question: "If a company uses the Periodic system, when is the Cost of Goods Sold account updated?",
        options: ["At the time of each sale", "Daily", "At the end of the accounting period", "Never"],
        correctIndex: 2,
        explanation: "COGS is calculated as a lump sum at the end of the period after the physical count."
    },
    {
        type: "mcq",
        question: "Freight costs paid by the buyer (FOB Shipping Point) are treated as part of the inventory cost. In a Perpetual system, this is debited to:",
        options: ["Freight-In Expense", "Merchandise Inventory", "Delivery Expense", "Cost of Goods Sold"],
        correctIndex: 1,
        explanation: "Product costs, including freight-in, are capitalized into the Inventory asset account in Perpetual systems."
    },
    {
        type: "mcq",
        question: "In a Periodic system, 'Freight-In' is recorded as:",
        options: ["A decrease to Sales", "A separate expense account used in COGS calculation", "A debit to Merchandise Inventory", "A credit to Cash only"],
        correctIndex: 1,
        explanation: "In Periodic, Freight-In is a separate temporary account added to Net Purchases."
    },
    {
        type: "mcq",
        question: "A company returns defective goods to a supplier. In a Perpetual system, the credit goes to:",
        options: ["Purchase Returns and Allowances", "Merchandise Inventory", "Accounts Payable", "Sales Returns"],
        correctIndex: 1,
        explanation: "Since the original purchase increased Inventory, the return must decrease (credit) Inventory directly."
    },
    {
        type: "mcq",
        question: "A company returns defective goods to a supplier. In a Periodic system, the credit goes to:",
        options: ["Purchase Returns and Allowances", "Merchandise Inventory", "Cost of Goods Sold", "Cash"],
        correctIndex: 0,
        explanation: "Periodic systems use the contra-expense account 'Purchase Returns and Allowances'."
    },
    {
        type: "mcq",
        question: "Which company is most likely to use a Periodic inventory system?",
        options: ["A car dealership", "A high-end jewelry store", "A local hardware store selling loose nails", "An Apple store"],
        correctIndex: 2,
        explanation: "Periodic is often used for low-value, high-volume items where tracking every unit is not cost-effective."
    },
    {
        type: "mcq",
        question: "The term '2/10, n/30' means:",
        options: ["2% interest if paid in 30 days", "2% discount if paid within 10 days, net due in 30", "10% discount if paid within 2 days", "Net due in 10 days"],
        correctIndex: 1,
        explanation: "This is a standard credit term notation for early payment discounts."
    },
    {
        type: "mcq",
        question: "Gross Profit is calculated as:",
        options: ["Sales - Operating Expenses", "Net Sales - Cost of Goods Sold", "Net Income + Expenses", "Assets - Liabilities"],
        correctIndex: 1,
        explanation: "Gross Profit is the direct profit from the merchandise itself before operating expenses."
    },
    {
        type: "mcq",
        question: "If physical count shows less inventory than the Perpetual records indicate, the difference is recorded as:",
        options: ["Inventory Overturn", "Inventory Shortage/Shrinkage", "Sales Return", "Purchase Discount"],
        correctIndex: 1,
        explanation: "This difference usually represents theft, loss, or errors and is adjusted to COGS."
    },
    {
        type: "mcq",
        question: "Purchase Discounts in a Periodic system is considered a:",
        options: ["Contra-revenue account", "Contra-purchase account", "Liability", "Asset"],
        correctIndex: 1,
        explanation: "It reduces the total cost of purchases."
    },
    {
        type: "mcq",
        question: "When a customer returns goods to the seller, the seller records:",
        options: ["Purchase Return", "Sales Return", "Inventory Loss", "Bad Debt"],
        correctIndex: 1,
        explanation: "From the seller's perspective, this is a Sales Return."
    },
    {
        type: "mcq",
        question: "Which of the following creates a discrepancy between the book balance and physical balance in a Perpetual system?",
        options: ["Sales returns", "Purchases", "Theft or spoilage", "Sales discounts"],
        correctIndex: 2,
        explanation: "Theft removes the item physically but leaves the record unchanged until corrected."
    },
    {
        type: "mcq",
        question: "In the closing process for a Periodic system, the Beginning Inventory is:",
        options: ["Debited to Income Summary", "Credited to Income Summary", "Left alone", "Transferred to Assets"],
        correctIndex: 0,
        explanation: "Beginning Inventory is removed (credited from Inventory, debited to Income Summary) and replaced by Ending Inventory."
    },
    {
        type: "mcq",
        question: "FOB Destination means ownership transfers when:",
        options: ["Goods leave the seller's warehouse", "Goods arrive at the buyer's location", "Payment is made", "Order is placed"],
        correctIndex: 1,
        explanation: "Free on Board (FOB) Destination means the seller owns the goods while they are in transit."
    },
    {
        type: "mcq",
        question: "Who pays for shipping costs in FOB Destination?",
        options: ["The Buyer", "The Seller", "The Carrier", "Split 50/50"],
        correctIndex: 1,
        explanation: "The seller retains ownership during transit and pays the freight costs (Delivery Expense)."
    },
    {
        type: "mcq",
        question: "Net Sales is calculated as:",
        options: ["Sales - COGS", "Sales - Sales Returns - Sales Discounts", "Sales + Interest Revenue", "Gross Profit - Expenses"],
        correctIndex: 1,
        explanation: "Net Sales is the actual revenue realized after deductions for returns and discounts."
    },
    {
        type: "mcq",
        question: "Which system requires more record-keeping effort but provides better management information?",
        options: ["Periodic", "Perpetual", "Single-entry", "Cash basis"],
        correctIndex: 1,
        explanation: "Perpetual offers real-time data but requires recording every transaction's cost impact."
    },
    {
        type: "mcq",
        question: "If Ending Inventory is overstated, what is the effect on Cost of Goods Sold?",
        options: ["Understated", "Overstated", "No effect", "Depends on Sales"],
        correctIndex: 0,
        explanation: "Since 'Goods Available - Ending Inv = COGS', a higher ending inventory number results in a lower (understated) COGS."
    },

    // --- OPEN-ENDED PROBLEMS (26-35) ---

    {
        type: "problem",
        question: "Company A uses a Perpetual System. They sell goods costing ₱3,000 for ₱5,000 on account. Provide the necessary journal entries.",
        answer: `Entry 1 (Revenue):
Dr. Accounts Receivable   5,000
   Cr. Sales                    5,000

Entry 2 (Cost):
Dr. Cost of Goods Sold    3,000
   Cr. Merchandise Inventory    3,000`,
        explanation: "Perpetual systems require two entries: one to recognize the revenue and one to recognize the expense (COGS) and reduce the asset."
    },
    {
        type: "problem",
        question: "Company B uses a Periodic System. Calculate the Cost of Goods Sold given the following data:\nBeginning Inventory: ₱10,000\nPurchases: ₱40,000\nPurchase Returns: ₱2,000\nFreight-In: ₱1,000\nEnding Inventory: ₱8,000",
        answer: `Beginning Inventory:      ₱10,000
+ Purchases:              ₱40,000
- Purchase Returns:      (₱2,000)
+ Freight-In:             ₱1,000
-----------------------------------
Goods Available for Sale: ₱49,000
- Ending Inventory:      (₱8,000)
-----------------------------------
Cost of Goods Sold:       ₱41,000`,
        explanation: "The formula is Beginning Inv + Net Purchases (Purchases - Returns + Freight) - Ending Inv."
    },
    {
        type: "problem",
        question: "Explain why a Periodic Inventory System might result in 'Inventory Shrinkage' being hidden inside Cost of Goods Sold.",
        answer: `In a Periodic system, COGS is a "plug" figure derived by subtracting what is left (Ending Inv) from what was available. 
If items are stolen, they are simply missing from the final count. The formula assumes anything not in the warehouse was sold. Therefore, the cost of stolen goods is automatically included in COGS, making it impossible to separate theft from legitimate sales costs without other data.`,
        explanation: "Without a book record to compare against the physical count, all missing items are assumed sold."
    },
    {
        type: "problem",
        question: "A buyer purchases goods for ₱20,000 FOB Shipping Point. Shipping costs are ₱1,000. The buyer pays cash for shipping. Record the journal entry for the shipping payment under a Perpetual System.",
        answer: `Dr. Merchandise Inventory   1,000
   Cr. Cash                     1,000`,
        explanation: "Under Perpetual, costs necessary to get the inventory ready for sale (like freight-in) are added to the Inventory asset account, not expensed immediately."
    },
    {
        type: "problem",
        question: "A seller offers terms 3/15, n/45 on a ₱10,000 sale. The customer pays on day 12. Calculate the Net Cash Received by the seller.",
        answer: `Invoice Amount:     ₱10,000
Discount (3%):       (₱300)  [10,000 x 0.03]
----------------------------
Net Cash Received:   ₱9,700`,
        explanation: "The customer paid within the 15-day window, so they are entitled to the 3% discount."
    },
    {
        type: "problem",
        question: "Record the journal entry for a RETURN of goods purchased on credit under the PERIODIC system. Amount: ₱500.",
        answer: `Dr. Accounts Payable        500
   Cr. Purchase Returns & Allow.  500`,
        explanation: "In Periodic, we credit the specific contra-account 'Purchase Returns and Allowances' rather than crediting Inventory directly."
    },
    {
        type: "problem",
        question: "Why do car dealerships almost exclusively use Perpetual systems, while small candy shops might use Periodic?",
        answer: `Car dealerships have high unit costs and low sales volume. Losing one car is a financial disaster, so they need real-time tracking (Perpetual). 
Candy shops have low unit costs and high volume. Tracking the cost of every lollipop sold in real-time is not worth the administrative effort; a simple count at the end of the month (Periodic) is sufficient.`,
        explanation: "The choice of system often depends on the Cost-Benefit constraint regarding the value of the items vs. the cost of tracking them."
    },
    {
        type: "problem",
        question: "Calculate Gross Profit:\nSales Revenue: ₱100,000\nSales Returns: ₱5,000\nSales Discounts: ₱2,000\nCost of Goods Sold: ₱60,000",
        answer: `Sales Revenue:       ₱100,000
Less: Returns:        (₱5,000)
Less: Discounts:      (₱2,000)
-----------------------------
Net Sales:            ₱93,000
Less: COGS:          (₱60,000)
-----------------------------
Gross Profit:         ₱33,000`,
        explanation: "Gross Profit = Net Sales - COGS."
    },
    {
        type: "problem",
        question: "In a Perpetual System, a physical count reveals ₱48,000 in inventory, but the books show ₱50,000. Record the adjusting entry.",
        answer: `Dr. Cost of Goods Sold       2,000
   Cr. Merchandise Inventory    2,000`,
        explanation: "The inventory record must be lowered to match the physical reality. The loss is usually expensed to COGS (Inventory Shortage)."
    },
    {
        type: "problem",
        question: "A company purchased ₱2,000 of inventory on credit. A week later, they paid the balance in full within the discount period of 2%. Record the PAYMENT entry under the PERPETUAL system.",
        answer: `Dr. Accounts Payable        2,000
   Cr. Cash                     1,960
   Cr. Merchandise Inventory       40`,
        explanation: "In a Perpetual system, the discount reduces the cost of the asset. Therefore, we credit Inventory for the discount amount (₱40), rather than using a 'Purchase Discounts' revenue account."
    },
                {
    type: "problem",
    question: "Calculate Cost of Goods Sold: A shoe store began the year with an inventory worth ₱50,000. Throughout the year, they made Purchases totaling ₱300,000. At the end of the year, a physical count showed an Ending Inventory of ₱40,000. Calculate the COGS.",
    answer: `Beginning Inventory:   ₱50,000
Add: Purchases:        ₱300,000
------------------------------
Goods Available:       ₱350,000
Less: Ending Inv:     (₱40,000)
------------------------------
Cost of Goods Sold:    ₱310,000`,
    explanation: "The basic formula for COGS is Beginning Inventory + Purchases - Ending Inventory."
},
                {
    type: "problem",
    question: "Calculate Cost of Goods Sold: A hardware shop reports the following figures: Beginning Inventory ₱120,000; Purchases ₱500,000; Freight-In (Transportation In) ₱25,000; and Ending Inventory ₱150,000. Calculate the COGS.",
    answer: `Beginning Inventory:   ₱120,000
Add: Purchases:        ₱500,000
Add: Freight-In:        ₱25,000
------------------------------
Goods Available:       ₱645,000
Less: Ending Inv:     (₱150,000)
------------------------------
Cost of Goods Sold:    ₱495,000`,
    explanation: "Freight-In is added to the cost of purchases because it is a necessary cost to bring the goods to the seller's location."
},
                {
    type: "problem",
    question: "Calculate Cost of Goods Sold: Based on the following ledger balances, compute the COGS: Beginning Inventory ₱200,000; Gross Purchases ₱850,000; Purchase Returns & Allowances ₱35,000; Purchase Discounts ₱15,000; Freight-In ₱40,000; Ending Inventory ₱180,000.",
    answer: `Beginning Inventory:       ₱200,000
Add: Purchases:            ₱850,000
Less: Purch Returns:      (₱35,000)
Less: Purch Discounts:    (₱15,000)
Add: Freight-In:            ₱40,000
-----------------------------------
Net Cost of Purchases:     ₱840,000
-----------------------------------
Goods Available for Sale: ₱1,040,000
Less: Ending Inv:         (₱180,000)
-----------------------------------
Cost of Goods Sold:        ₱860,000`,
    explanation: "You must first determine Net Purchases by subtracting Returns and Discounts from Gross Purchases, then add Freight-In to find the total cost of goods available."
},
                {
    type: "problem",
    question: "Calculate Cost of Goods Sold: The accountant provided the following mixed data for the year: Sales Revenue ₱1,500,000; Beginning Inventory ₱300,000; Purchases ₱900,000; Sales Returns ₱50,000; Freight-Out ₱20,000; Freight-In ₱30,000; Purchase Returns ₱40,000; Ending Inventory ₱250,000. Calculate the COGS.",
    answer: `Beginning Inventory:     ₱300,000
Add: Purchases:          ₱900,000
Less: Purch Returns:    (₱40,000)
Add: Freight-In:          ₱30,000
--------------------------------
Goods Available:       ₱1,190,000
Less: Ending Inv:       (₱250,000)
--------------------------------
Cost of Goods Sold:      ₱940,000`,
    explanation: "This problem contains 'distractors'. Sales Revenue and Sales Returns are income items, not costs. Freight-Out is an operating expense (selling expense), not part of COGS. Only Freight-In and Purchase-related costs are included."
},
                {
    type: "problem",
    question: "Calculate Cost of Goods Sold: A company's records show that the Cost of Goods Available for Sale (COGAS) was ₱1,200,000. The Beginning Inventory was ₱200,000. The Ending Inventory is calculated to be 25% of the Net Cost of Purchases. Calculate the Cost of Goods Sold.",
    answer: `1. Find Net Cost of Purchases:
   COGAS (₱1,200,000) - Beg Inv (₱200,000) = Net Cost of Purchases (₱1,000,000)

2. Calculate Ending Inventory:
   25% of ₱1,000,000 = ₱250,000

3. Calculate COGS:
   COGAS:               ₱1,200,000
   Less: Ending Inv:     (₱250,000)
   -------------------------------
   Cost of Goods Sold:    ₱950,000`,
    explanation: "This requires working backward and understanding relationships. First, isolate the Net Cost of Purchases from the Available for Sale figure, then use that derived number to calculate the Ending Inventory."
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
