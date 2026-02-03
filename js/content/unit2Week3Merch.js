import { merchTransactionPracData } from './questionBank/qbMerchTransactions.js';
// Content for Unit 2 Week 3: Merchandising Business - Financial Statements
export const unit2Week3Data = {
    week3: [
        {
            day: "Day 1",
            topic: "Worksheet and Ending Inventory",
            content: `
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="font-bold text-blue-900">Learning Goal</p>
                    <p class="text-blue-800">Master the two main methods of handling Periodic Inventory in the worksheet: The Direct Extension (Closing Entry) Method and the Adjustment Method.</p>
                </div>

                <h3 class="text-xl font-bold mb-4 mt-6">Topic Focus</h3>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
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

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Method 1: Direct Extension (The Closing Entry Method)</h3>
                    <div class="bg-gray-100 p-3 rounded text-sm text-gray-700 mb-4 italic border-l-4 border-gray-400">
                        <p><strong>Concept:</strong> No entries are made in the "Adjustments" columns for inventory. Instead, we extend the Beginning Inventory to the Income Statement Debit column (as a cost) and the Ending Inventory to both the Income Statement Credit column (as a deduction) and Balance Sheet Debit column (as an asset).</p>
                    </div>

                    <p class="text-gray-700 mb-4 text-sm">
                        <strong>Problem Data (Hai Company):</strong><br>
                        • Beginning Inventory (Jan 1): <strong>₱285,000</strong> (from Trial Balance)<br>
                        • Ending Inventory (Dec 31): <strong>₱350,000</strong> (from Note #4)
                    </p>

                    <div class="w-full overflow-x-auto border border-gray-300 rounded-lg mb-6">
                        <svg viewBox="0 0 800 180" xmlns="http://www.w3.org/2000/svg" class="w-full min-w-[600px] bg-white">
                            <rect x="0" y="0" width="800" height="40" fill="#f3f4f6" />
                            <text x="10" y="25" font-family="monospace" font-weight="bold" font-size="12" fill="#374151">Account Titles</text>
                            <rect x="200" y="0" width="120" height="40" fill="#e5e7eb" stroke="#d1d5db"/>
                            <text x="260" y="25" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#374151">Trial Balance</text>
                            <rect x="320" y="0" width="240" height="40" fill="#fee2e2" stroke="#d1d5db"/>
                            <text x="440" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b">Income Statement</text>
                            <text x="380" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#991b1b">Dr</text>
                            <text x="500" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#991b1b">Cr</text>
                            <rect x="560" y="0" width="240" height="40" fill="#dbeafe" stroke="#d1d5db"/>
                            <text x="680" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af">Balance Sheet</text>
                            <text x="620" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1e40af">Dr</text>
                            <text x="740" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1e40af">Cr</text>
                            <text x="10" y="80" font-family="monospace" font-size="12" fill="#1f2937">Merch. Inventory</text>
                            <rect x="205" y="60" width="50" height="30" rx="4" fill="#f3f4f6" stroke="#9ca3af"/>
                            <text x="230" y="80" text-anchor="middle" font-family="monospace" font-size="11" fill="#000">285k</text>
                            <path d="M 260 75 Q 320 50 350 70" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                            <rect x="355" y="60" width="50" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
                            <text x="380" y="80" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#991b1b">285k</text>
                            <text x="380" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#ef4444">(Beg)</text>
                            <rect x="475" y="60" width="50" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                            <text x="500" y="80" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#166534">350k</text>
                            <text x="500" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#16a34a">(End)</text>
                            <path d="M 530 75 L 590 75" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrowheadBlue)"/>
                            <rect x="595" y="60" width="50" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                            <text x="620" y="80" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e40af">350k</text>
                            <text x="620" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#2563eb">(End)</text>
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" /></marker>
                                <marker id="arrowheadBlue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" /></marker>
                            </defs>
                        </svg>
                    </div>

                    <h4 class="font-bold text-gray-800 mb-2">Completed Worksheet: Direct Extension Method</h4>
                    <div class="overflow-x-auto border border-gray-300 rounded-lg mb-6 shadow-sm bg-white">
                        <table class="min-w-[900px] w-full text-xs text-right border-collapse">
                            <thead class="bg-gray-100 text-gray-700 border-b-2 border-gray-300">
                                <tr>
                                    <th class="p-2 border text-left font-bold w-1/5 sticky left-0 bg-gray-100 z-10">Account Titles</th>
                                    <th class="p-2 border text-center font-bold" colspan="2">Trial Balance</th>
                                    <th class="p-2 border text-center font-bold text-yellow-800 bg-yellow-50" colspan="2">Adjustments</th>
                                    <th class="p-2 border text-center font-bold text-blue-800 bg-blue-50" colspan="2">Adjusted TB</th>
                                    <th class="p-2 border text-center font-bold text-red-800 bg-red-50" colspan="2">Income Statement</th>
                                    <th class="p-2 border text-center font-bold text-indigo-800 bg-indigo-50" colspan="2">Balance Sheet</th>
                                </tr>
                                <tr class="text-[10px]">
                                    <th class="p-1 border sticky left-0 bg-gray-100"></th>
                                    <th class="p-1 border w-20">Dr</th><th class="p-1 border w-20">Cr</th>
                                    <th class="p-1 border w-20 bg-yellow-50">Dr</th><th class="p-1 border w-20 bg-yellow-50">Cr</th>
                                    <th class="p-1 border w-20 bg-blue-50">Dr</th><th class="p-1 border w-20 bg-blue-50">Cr</th>
                                    <th class="p-1 border w-20 bg-red-50">Dr</th><th class="p-1 border w-20 bg-red-50">Cr</th>
                                    <th class="p-1 border w-20 bg-indigo-50">Dr</th><th class="p-1 border w-20 bg-indigo-50">Cr</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono text-gray-600">
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Cash</td><td class="p-2 border">67,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">67,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">67,500</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accounts Receivable</td><td class="p-2 border">22,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">22,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">22,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                
                                <tr class="bg-red-50">
                                    <td class="p-2 border text-left font-sans font-bold text-gray-900 sticky left-0 bg-red-50">Merch. Inventory</td>
                                    <td class="p-2 border font-bold">285,000</td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td>
                                    <td class="p-2 border bg-blue-50 font-bold">285,000</td><td class="p-2 border bg-blue-50"></td>
                                    <td class="p-2 border bg-red-50 font-bold text-red-600">285,000</td><td class="p-2 border bg-red-50 font-bold text-green-600">350,000</td>
                                    <td class="p-2 border bg-indigo-50 font-bold text-blue-600">350,000</td><td class="p-2 border bg-indigo-50"></td>
                                </tr>

                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Office Supplies</td><td class="p-2 border">10,600</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">6,400</td><td class="p-2 border bg-blue-50">4,200</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">4,200</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Prepaid Insurance</td><td class="p-2 border">7,700</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">1,925</td><td class="p-2 border bg-blue-50">5,775</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">5,775</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Building</td><td class="p-2 border">113,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">113,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">113,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accum. Dep - Bldg</td><td class="p-2 border"></td><td class="p-2 border">22,500</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">22,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">22,500</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accounts Payable</td><td class="p-2 border"></td><td class="p-2 border">25,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">25,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">25,000</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Haya Hai, Capital</td><td class="p-2 border"></td><td class="p-2 border">472,580</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">472,580</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">472,580</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Haya Hai, Drawings</td><td class="p-2 border">36,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">36,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">36,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales</td><td class="p-2 border"></td><td class="p-2 border">894,440</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">894,440</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">894,440</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales Discounts</td><td class="p-2 border">10,200</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">10,200</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">10,200</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales Returns & Allow</td><td class="p-2 border">44,300</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">44,300</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">44,300</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purchases</td><td class="p-2 border">760,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">760,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">760,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purchase Discounts</td><td class="p-2 border"></td><td class="p-2 border">6,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">6,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">6,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purch Returns & Allow</td><td class="p-2 border"></td><td class="p-2 border">7,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">7,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">7,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Freight In</td><td class="p-2 border">21,300</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">21,300</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">21,300</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Salaries Expense</td><td class="p-2 border">4,220</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">4,180</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">8,400</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">8,400</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Advertising Expense</td><td class="p-2 border">19,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">19,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">19,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Maintenance Expense</td><td class="p-2 border">32,700</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">32,700</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">32,700</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Interest Expense</td><td class="p-2 border">2,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">2,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">2,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Interest Income</td><td class="p-2 border"></td><td class="p-2 border">9,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">9,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">9,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Supplies Expense</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">6,400</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">6,400</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">6,400</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Insurance Expense</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">1,925</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">1,925</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">1,925</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accrued Expense Payable</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">4,180</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">4,180</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">4,180</td></tr>

                                <tr class="font-bold bg-gray-50 border-t-2 border-black">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-gray-50">TOTALS</td>
                                    <td class="p-2 border">1,436,520</td><td class="p-2 border">1,436,520</td>
                                    <td class="p-2 border bg-yellow-50">12,505</td><td class="p-2 border bg-yellow-50">12,505</td>
                                    <td class="p-2 border bg-blue-50">1,440,700</td><td class="p-2 border bg-blue-50">1,440,700</td>
                                    <td class="p-2 border bg-red-50 text-red-800">1,192,225</td><td class="p-2 border bg-red-50 text-red-800">1,266,440</td>
                                    <td class="p-2 border bg-indigo-50 text-indigo-800">598,475</td><td class="p-2 border bg-indigo-50 text-indigo-800">524,260</td>
                                </tr>

                                <tr class="font-bold bg-green-50">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-green-50 text-green-800">NET INCOME</td>
                                    <td class="p-2 border"></td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-green-50"></td><td class="p-2 border bg-green-50"></td>
                                    <td class="p-2 border bg-green-50"></td><td class="p-2 border bg-green-50"></td>
                                    <td class="p-2 border bg-red-50 text-green-700">74,215</td><td class="p-2 border bg-red-50"></td>
                                    <td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50 text-green-700">74,215</td>
                                </tr>

                                <tr class="font-bold bg-gray-100 border-b-2 border-double border-black">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-gray-100">GRAND TOTALS</td>
                                    <td class="p-2 border"></td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-gray-100"></td><td class="p-2 border bg-gray-100"></td>
                                    <td class="p-2 border bg-gray-100"></td><td class="p-2 border bg-gray-100"></td>
                                    <td class="p-2 border bg-red-50">1,266,440</td><td class="p-2 border bg-red-50">1,266,440</td>
                                    <td class="p-2 border bg-indigo-50">598,475</td><td class="p-2 border bg-indigo-50">598,475</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Method 2: The Adjustment Method</h3>
                    <div class="bg-indigo-50 p-3 rounded text-sm text-indigo-900 mb-4 italic border-l-4 border-indigo-400">
                        <p><strong>Concept:</strong> We use the <strong>Adjustments Columns</strong> to formally remove the old inventory and record the new one. We use the account <strong>Income Summary</strong> to offset these entries.</p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <h4 class="font-bold text-red-700 text-sm mb-2">Step A: Remove Beginning Inventory</h4>
                            <p class="text-xs text-gray-600 mb-1">We need to zero out the old 285k.</p>
                            <div class="bg-gray-100 p-2 rounded font-mono text-xs">
                                Dr. Income Summary  285,000<br>
                                &nbsp;&nbsp;Cr. Merch Inventory 285,000
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-green-700 text-sm mb-2">Step B: Record Ending Inventory</h4>
                            <p class="text-xs text-gray-600 mb-1">We need to set up the new 350k.</p>
                            <div class="bg-gray-100 p-2 rounded font-mono text-xs">
                                Dr. Merch Inventory 350,000<br>
                                &nbsp;&nbsp;Cr. Income Summary  350,000
                            </div>
                        </div>
                    </div>

                    <div class="w-full overflow-x-auto border border-gray-300 rounded-lg mb-6">
                        <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" class="w-full min-w-[600px] bg-white">
                            <rect x="0" y="0" width="800" height="40" fill="#f3f4f6" />
                            <text x="10" y="25" font-family="monospace" font-weight="bold" font-size="12" fill="#374151">Account Titles</text>
                            <rect x="200" y="0" width="100" height="40" fill="#e5e7eb" stroke="#d1d5db"/>
                            <text x="250" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#374151">Trial Bal</text>
                            <text x="225" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#6b7280">Dr</text>
                            <rect x="300" y="0" width="160" height="40" fill="#fef3c7" stroke="#d1d5db"/>
                            <text x="380" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e">Adjustments</text>
                            <text x="340" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400e">Dr</text>
                            <text x="420" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400e">Cr</text>
                            <rect x="460" y="0" width="100" height="40" fill="#e0f2fe" stroke="#d1d5db"/>
                            <text x="510" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1">Adj. TB</text>
                            <text x="485" y="32" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0369a1">Dr</text>
                            <rect x="560" y="0" width="240" height="40" fill="#f3f4f6" stroke="#d1d5db"/>
                            <text x="680" y="25" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#374151">IS / BS</text>
                            <text x="10" y="70" font-family="monospace" font-size="11" fill="#1f2937">Merch. Inventory</text>
                            <text x="225" y="70" text-anchor="middle" font-family="monospace" font-size="10" fill="#000">285k</text>
                            <rect x="400" y="55" width="40" height="20" rx="2" fill="#fee2e2" stroke="#ef4444"/>
                            <text x="420" y="68" text-anchor="middle" font-family="monospace" font-size="10" fill="#991b1b">285k</text>
                            <rect x="320" y="55" width="40" height="20" rx="2" fill="#dcfce7" stroke="#16a34a"/>
                            <text x="340" y="68" text-anchor="middle" font-family="monospace" font-size="10" fill="#166534">350k</text>
                            <text x="485" y="70" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#1e40af">350k</text>
                            <path d="M 510 65 L 580 65" stroke="#1e40af" stroke-width="1" stroke-dasharray="2" marker-end="url(#arrowheadBlue)"/>
                            <text x="620" y="70" text-anchor="middle" font-size="9" fill="#1e40af">To BS Debit</text>
                            <text x="10" y="120" font-family="monospace" font-size="11" fill="#1f2937">Income Summary</text>
                            <rect x="320" y="105" width="40" height="20" rx="2" fill="#fee2e2" stroke="#ef4444"/>
                            <text x="340" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="#991b1b">285k</text>
                            <rect x="400" y="105" width="40" height="20" rx="2" fill="#dcfce7" stroke="#16a34a"/>
                            <text x="420" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="#166534">350k</text>
                            <path d="M 235 75 Q 280 120 320 115" stroke="#ef4444" stroke-width="1" fill="none" marker-end="url(#arrowhead)"/>
                            <text x="250" y="100" font-size="8" fill="#ef4444">Transfer Cost</text>
                            <path d="M 360 65 Q 380 90 400 105" stroke="#16a34a" stroke-width="1" fill="none" marker-end="url(#arrowheadGreen)"/>
                            <text x="375" y="85" font-size="8" fill="#16a34a">Set Up Asset</text>
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" /></marker>
                                <marker id="arrowheadBlue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#1e40af" /></marker>
                                <marker id="arrowheadGreen" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" /></marker>
                            </defs>
                        </svg>
                    </div>

                    <h4 class="font-bold text-gray-800 mb-2">Completed Worksheet: Adjustment Method</h4>
                    <div class="overflow-x-auto border border-gray-300 rounded-lg mb-6 shadow-sm bg-white">
                        <table class="min-w-[900px] w-full text-xs text-right border-collapse">
                            <thead class="bg-gray-100 text-gray-700 border-b-2 border-gray-300">
                                <tr>
                                    <th class="p-2 border text-left font-bold w-1/5 sticky left-0 bg-gray-100 z-10">Account Titles</th>
                                    <th class="p-2 border text-center font-bold" colspan="2">Trial Balance</th>
                                    <th class="p-2 border text-center font-bold text-yellow-800 bg-yellow-50" colspan="2">Adjustments</th>
                                    <th class="p-2 border text-center font-bold text-blue-800 bg-blue-50" colspan="2">Adjusted TB</th>
                                    <th class="p-2 border text-center font-bold text-red-800 bg-red-50" colspan="2">Income Statement</th>
                                    <th class="p-2 border text-center font-bold text-indigo-800 bg-indigo-50" colspan="2">Balance Sheet</th>
                                </tr>
                                <tr class="text-[10px]">
                                    <th class="p-1 border sticky left-0 bg-gray-100"></th>
                                    <th class="p-1 border w-20">Dr</th><th class="p-1 border w-20">Cr</th>
                                    <th class="p-1 border w-20 bg-yellow-50">Dr</th><th class="p-1 border w-20 bg-yellow-50">Cr</th>
                                    <th class="p-1 border w-20 bg-blue-50">Dr</th><th class="p-1 border w-20 bg-blue-50">Cr</th>
                                    <th class="p-1 border w-20 bg-red-50">Dr</th><th class="p-1 border w-20 bg-red-50">Cr</th>
                                    <th class="p-1 border w-20 bg-indigo-50">Dr</th><th class="p-1 border w-20 bg-indigo-50">Cr</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono text-gray-600">
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Cash</td><td class="p-2 border">67,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">67,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">67,500</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accounts Receivable</td><td class="p-2 border">22,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">22,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">22,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                
                                <tr class="bg-yellow-50">
                                    <td class="p-2 border text-left font-sans font-bold text-gray-900 sticky left-0 bg-yellow-50">Merch. Inventory</td>
                                    <td class="p-2 border font-bold">285,000</td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-yellow-50 font-bold text-green-600">350,000</td><td class="p-2 border bg-yellow-50 font-bold text-red-600">285,000</td>
                                    <td class="p-2 border bg-blue-50 font-bold">350,000</td><td class="p-2 border bg-blue-50"></td>
                                    <td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td>
                                    <td class="p-2 border bg-indigo-50 font-bold text-blue-600">350,000</td><td class="p-2 border bg-indigo-50"></td>
                                </tr>

                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Office Supplies</td><td class="p-2 border">10,600</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">6,400</td><td class="p-2 border bg-blue-50">4,200</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">4,200</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Prepaid Insurance</td><td class="p-2 border">7,700</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">1,925</td><td class="p-2 border bg-blue-50">5,775</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">5,775</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Building</td><td class="p-2 border">113,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">113,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">113,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accum. Dep - Bldg</td><td class="p-2 border"></td><td class="p-2 border">22,500</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">22,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">22,500</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accounts Payable</td><td class="p-2 border"></td><td class="p-2 border">25,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">25,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">25,000</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Haya Hai, Capital</td><td class="p-2 border"></td><td class="p-2 border">472,580</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">472,580</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">472,580</td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Haya Hai, Drawings</td><td class="p-2 border">36,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">36,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50">36,000</td><td class="p-2 border bg-indigo-50"></td></tr>
                                
                                <tr class="bg-yellow-50">
                                    <td class="p-2 border text-left font-sans font-bold text-gray-900 sticky left-0 bg-yellow-50">Income Summary</td>
                                    <td class="p-2 border"></td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-yellow-50 font-bold text-red-600">285,000</td><td class="p-2 border bg-yellow-50 font-bold text-green-600">350,000</td>
                                    <td class="p-2 border bg-blue-50 font-bold">285,000</td><td class="p-2 border bg-blue-50 font-bold">350,000</td>
                                    <td class="p-2 border bg-red-50 font-bold text-red-600">285,000</td><td class="p-2 border bg-red-50 font-bold text-green-600">350,000</td>
                                    <td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td>
                                </tr>

                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales</td><td class="p-2 border"></td><td class="p-2 border">894,440</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">894,440</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">894,440</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales Discounts</td><td class="p-2 border">10,200</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">10,200</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">10,200</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Sales Returns & Allow</td><td class="p-2 border">44,300</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">44,300</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">44,300</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purchases</td><td class="p-2 border">760,000</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">760,000</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">760,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purchase Discounts</td><td class="p-2 border"></td><td class="p-2 border">6,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">6,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">6,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Purch Returns & Allow</td><td class="p-2 border"></td><td class="p-2 border">7,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">7,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">7,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Freight In</td><td class="p-2 border">21,300</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">21,300</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">21,300</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Salaries Expense</td><td class="p-2 border">4,220</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">4,180</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">8,400</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">8,400</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Advertising Expense</td><td class="p-2 border">19,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">19,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">19,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Maintenance Expense</td><td class="p-2 border">32,700</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">32,700</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">32,700</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Interest Expense</td><td class="p-2 border">2,500</td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">2,500</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">2,500</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Interest Income</td><td class="p-2 border"></td><td class="p-2 border">9,000</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">9,000</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50">9,000</td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Supplies Expense</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">6,400</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">6,400</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">6,400</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Insurance Expense</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50">1,925</td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-blue-50">1,925</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-red-50">1,925</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50"></td></tr>
                                <tr><td class="p-2 border text-left font-sans sticky left-0 bg-white">Accrued Expense Payable</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border bg-yellow-50"></td><td class="p-2 border bg-yellow-50">4,180</td><td class="p-2 border bg-blue-50"></td><td class="p-2 border bg-blue-50">4,180</td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-red-50"></td><td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50">4,180</td></tr>

                                <tr class="font-bold bg-gray-50 border-t-2 border-black">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-gray-50">TOTALS</td>
                                    <td class="p-2 border">1,436,520</td><td class="p-2 border">1,436,520</td>
                                    <td class="p-2 border bg-yellow-50">647,505</td><td class="p-2 border bg-yellow-50">647,505</td>
                                    <td class="p-2 border bg-blue-50">1,790,700</td><td class="p-2 border bg-blue-50">1,790,700</td>
                                    <td class="p-2 border bg-red-50 text-red-800">1,192,225</td><td class="p-2 border bg-red-50 text-red-800">1,266,440</td>
                                    <td class="p-2 border bg-indigo-50 text-indigo-800">598,475</td><td class="p-2 border bg-indigo-50 text-indigo-800">524,260</td>
                                </tr>

                                <tr class="font-bold bg-green-50">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-green-50 text-green-800">NET INCOME</td>
                                    <td class="p-2 border"></td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-green-50"></td><td class="p-2 border bg-green-50"></td>
                                    <td class="p-2 border bg-green-50"></td><td class="p-2 border bg-green-50"></td>
                                    <td class="p-2 border bg-red-50 text-green-700">74,215</td><td class="p-2 border bg-red-50"></td>
                                    <td class="p-2 border bg-indigo-50"></td><td class="p-2 border bg-indigo-50 text-green-700">74,215</td>
                                </tr>

                                <tr class="font-bold bg-gray-100 border-b-2 border-double border-black">
                                    <td class="p-2 border text-left font-sans sticky left-0 bg-gray-100">GRAND TOTALS</td>
                                    <td class="p-2 border"></td><td class="p-2 border"></td>
                                    <td class="p-2 border bg-gray-100"></td><td class="p-2 border bg-gray-100"></td>
                                    <td class="p-2 border bg-gray-100"></td><td class="p-2 border bg-gray-100"></td>
                                    <td class="p-2 border bg-red-50">1,266,440</td><td class="p-2 border bg-red-50">1,266,440</td>
                                    <td class="p-2 border bg-indigo-50">598,475</td><td class="p-2 border bg-indigo-50">598,475</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Understanding the Closing Entries</h3>
                    <p class="text-gray-700 mb-4 text-sm">
                        Whether you use Method 1 or Method 2 in the worksheet, the final result in the ledger is accomplished via <strong>Closing Entries</strong> at year-end.
                    </p>

                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="border border-red-200 rounded p-4 bg-red-50">
                            <h4 class="font-bold text-red-800 text-sm border-b border-red-200 pb-2 mb-2">1. Closing Beginning Inventory</h4>
                            <p class="text-xs text-gray-700 mb-2">We treat the beginning inventory (₱285k) as an <strong>Expense</strong> (Cost of Goods Sold).</p>
                            <div class="bg-white p-2 rounded border border-red-100 font-mono text-xs">
                                Dr. Income Summary <span class="float-right">285,000</span><br>
                                &nbsp;&nbsp;Cr. Merch Inventory <span class="float-right">285,000</span>
                            </div>
                        </div>

                        <div class="border border-green-200 rounded p-4 bg-green-50">
                            <h4 class="font-bold text-green-800 text-sm border-b border-green-200 pb-2 mb-2">2. Setting Up Ending Inventory</h4>
                            <p class="text-xs text-gray-700 mb-2">We treat the ending inventory (₱350k) as an <strong>Asset</strong> deduction from cost.</p>
                            <div class="bg-white p-2 rounded border border-green-100 font-mono text-xs">
                                Dr. Merch Inventory <span class="float-right">350,000</span><br>
                                &nbsp;&nbsp;Cr. Income Summary <span class="float-right">350,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">2. Other Key Adjustments</h3>
                    
                    <div class="mb-6">
                        <h4 class="font-bold text-gray-700 mb-2">A. Allowance for Bad Debts</h4>
                        <p class="text-gray-600 text-sm mb-2">Merchandising businesses often sell on credit. The matching principle requires us to estimate uncollectible accounts in the same period the sales are made.</p>
                        
                        <div class="bg-gray-50 p-4 rounded border-l-4 border-gray-400 font-mono text-sm">
                            <div class="grid grid-cols-6 gap-4 border-b border-gray-300 mb-2 pb-1 font-bold text-gray-500 text-xs">
                                <div class="col-span-4">Account Titles</div>
                                <div class="col-span-1 text-right">Debit</div>
                                <div class="col-span-1 text-right">Credit</div>
                            </div>
                            <div class="grid grid-cols-6 gap-4 mb-1">
                                <div class="col-span-4">Bad Debts Expense</div>
                                <div class="col-span-1 text-right">XXX</div>
                                <div class="col-span-1"></div>
                            </div>
                            <div class="grid grid-cols-6 gap-4">
                                <div class="col-span-4 pl-8">Allowance for Bad Debts</div>
                                <div class="col-span-1"></div>
                                <div class="col-span-1 text-right">XXX</div>
                            </div>
                        </div>
                        <p class="text-gray-500 text-xs mt-2"><strong>Worksheet Impact:</strong> Debit the expense column (Income Statement) and Credit the Balance Sheet column (as a contra-asset to Accounts Receivable).</p>
                    </div>

                    <div class="mb-6">
                        <h4 class="font-bold text-gray-700 mb-2">B. Inventory Shrinkage (Shortage)</h4>
                        <p class="text-gray-600 text-sm mb-2">In a Perpetual System, the book balance of inventory may differ from the actual physical count due to theft, breakage, or errors. This difference is called shrinkage.</p>
                        
                        <div class="bg-gray-50 p-4 rounded border-l-4 border-gray-400 font-mono text-sm">
                            <div class="grid grid-cols-6 gap-4 border-b border-gray-300 mb-2 pb-1 font-bold text-gray-500 text-xs">
                                <div class="col-span-4">Account Titles</div>
                                <div class="col-span-1 text-right">Debit</div>
                                <div class="col-span-1 text-right">Credit</div>
                            </div>
                            <div class="grid grid-cols-6 gap-4 mb-1">
                                <div class="col-span-4">Cost of Goods Sold</div>
                                <div class="col-span-1 text-right">XXX</div>
                                <div class="col-span-1"></div>
                            </div>
                            <div class="grid grid-cols-6 gap-4">
                                <div class="col-span-4 pl-8">Merchandise Inventory</div>
                                <div class="col-span-1"></div>
                                <div class="col-span-1 text-right">XXX</div>
                            </div>
                        </div>
                        <p class="text-gray-500 text-xs mt-2"><strong>Worksheet Impact:</strong> Increase the Cost of Goods Sold (Debit) and decrease the Asset value (Credit) in the Adjustments column.</p>

                        <div class="bg-yellow-50 p-3 rounded mt-4 border border-yellow-200">
                             <p class="text-xs text-yellow-900">
                                <strong>Employee Accountability:</strong> Management must investigate unnatural causes of shrinkage (e.g., theft). If the loss is directly attributable to an identified employee after careful investigation, it is not recorded as an expense. Instead, it is charged as a receivable.
                             </p>
                             <div class="bg-white p-2 rounded mt-2 border border-yellow-100 font-mono text-xs">
                                <div class="grid grid-cols-6 gap-4 mb-1">
                                    <div class="col-span-4">Receivable from Employee / AR</div>
                                    <div class="col-span-1 text-right">XXX</div>
                                    <div class="col-span-1"></div>
                                </div>
                                <div class="grid grid-cols-6 gap-4">
                                    <div class="col-span-4 pl-8">Merchandise Inventory</div>
                                    <div class="col-span-1"></div>
                                    <div class="col-span-1 text-right">XXX</div>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-700 mb-2">C. Inventory Overage</h4>
                        <p class="text-gray-600 text-sm mb-2">Although rare, it is possible for the Physical Count to be <em>higher</em> than the Book Balance (usually due to recording errors). This is recorded as a reduction of COGS.</p>
                        
                        <div class="bg-gray-50 p-4 rounded border-l-4 border-gray-400 font-mono text-sm">
                            <div class="grid grid-cols-6 gap-4 border-b border-gray-300 mb-2 pb-1 font-bold text-gray-500 text-xs">
                                <div class="col-span-4">Account Titles</div>
                                <div class="col-span-1 text-right">Debit</div>
                                <div class="col-span-1 text-right">Credit</div>
                            </div>
                            <div class="grid grid-cols-6 gap-4 mb-1">
                                <div class="col-span-4">Merchandise Inventory</div>
                                <div class="col-span-1 text-right">XXX</div>
                                <div class="col-span-1"></div>
                            </div>
                            <div class="grid grid-cols-6 gap-4">
                                <div class="col-span-4 pl-8">Cost of Goods Sold</div>
                                <div class="col-span-1"></div>
                                <div class="col-span-1 text-right">XXX</div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            exercises: [
    // ... your existing MCQ and Problem items ...
    {"type": "mcq", "question": "In the 'Adjusting Entry Method' for a periodic inventory system, how is Beginning Inventory removed?", "options": ["Credit Inventory in Adjustments column", "Debit Inventory in Adjustments column", "Debit Income Summary in Income Statement column", "Credit Purchases in Income Statement column"], "correctIndex": 0, "explanation": "Beginning Inventory is removed by crediting the Inventory account and debiting Income Summary in the Adjustments columns."},
  {"type": "mcq", "question": "Under the 'Direct Extension' or 'Closing Entry Method', where is Beginning Inventory extended to?", "options": ["Balance Sheet Debit", "Balance Sheet Credit", "Income Statement Debit", "Income Statement Credit"], "correctIndex": 2, "explanation": "Beginning Inventory represents the cost of goods available at the start, so it is extended to the Income Statement Debit column as a cost."},
  {"type": "mcq", "question": "The adjusting entry to record estimated uncollectible accounts involves a debit to:", "options": ["Allowance for Doubtful Accounts", "Accounts Receivable", "Bad Debts Expense", "Sales Returns"], "correctIndex": 2, "explanation": "The entry is Debit Bad Debts Expense and Credit Allowance for Doubtful Accounts."},
  {"type": "mcq", "question": "Allowance for Doubtful Accounts is classified as a(n):", "options": ["Liability", "Contra-Asset", "Expense", "Owner's Equity"], "correctIndex": 1, "explanation": "It is a contra-asset account that reduces the book value of Accounts Receivable."},
  {"type": "mcq", "question": "Inventory Shrinkage is calculated as the difference between:", "options": ["Sales and Cost of Goods Sold", "Beginning Inventory and Ending Inventory", "Perpetual Book Balance and Physical Count", "Purchases and Sales"], "correctIndex": 2, "explanation": "Shrinkage is the loss of inventory found by comparing the theoretical book balance (perpetual) with the actual physical count."},
  {"type": "mcq", "question": "If the physical count is lower than the book balance in a perpetual system, the adjusting entry requires a:", "options": ["Debit to Inventory", "Credit to Cost of Goods Sold", "Credit to Inventory", "Debit to Sales"], "correctIndex": 2, "explanation": "To reduce the book balance to match the lower physical count, you must credit Inventory."},
  {"type": "mcq", "question": "When using the 'Percent of Receivables' method to estimate bad debts, the calculation determines the:", "options": ["Bad Debts Expense for the period directly", "Target balance for the Allowance account", "Net Realizable Value directly", "Total Sales for the period"], "correctIndex": 1, "explanation": "This is a balance sheet approach; it calculates what the ending Allowance balance *should* be."},
  {"type": "mcq", "question": "In the worksheet, if the Income Statement Credit column total exceeds the Debit column total, the difference is:", "options": ["Net Loss", "Net Income", "Gross Profit", "Cost of Goods Sold"], "correctIndex": 1, "explanation": "Revenues (Credits) > Expenses (Debits) = Net Income."},
  {"type": "mcq", "question": "Which account is NOT extended to the Balance Sheet columns in a worksheet?", "options": ["Allowance for Doubtful Accounts", "Merchandise Inventory (End)", "Accumulated Depreciation", "Bad Debts Expense"], "correctIndex": 3, "explanation": "Bad Debts Expense is a temporary account extended to the Income Statement Debit column."},
  {"type": "mcq", "question": "Under the 'Closing Entry Method' in a worksheet, Ending Inventory is entered in which two columns?", "options": ["Adjustments Dr and Cr", "Income Statement Cr and Balance Sheet Dr", "Income Statement Dr and Balance Sheet Cr", "Adjusted Trial Balance Dr and Cr"], "correctIndex": 1, "explanation": "It acts as a deduction from Cost of Goods Sold (Income Statement Credit) and records the asset (Balance Sheet Debit)."},
  {"type": "mcq", "question": "The Net Realizable Value of Accounts Receivable is calculated as:", "options": ["Accounts Receivable + Allowance for Doubtful Accounts", "Accounts Receivable - Bad Debts Expense", "Accounts Receivable - Allowance for Doubtful Accounts", "Sales - Bad Debts"], "correctIndex": 2, "explanation": "NRV is the gross receivable amount minus the allowance for doubtfulness."},
  {"type": "mcq", "question": "If a company uses the 'Percent of Sales' method, the existing balance in the Allowance for Doubtful Accounts is:", "options": ["Ignored for the calculation of the expense", "Added to the calculation", "Deducted from the calculation", "Transferred to Retained Earnings"], "correctIndex": 0, "explanation": "The Percent of Sales method calculates the expense directly based on current period sales, ignoring the prior allowance balance."},
  {"type": "mcq", "question": "In a worksheet, 'Freight In' is extended to the:", "options": ["Balance Sheet Debit", "Income Statement Credit", "Income Statement Debit", "Adjustments Credit"], "correctIndex": 2, "explanation": "Freight In is part of the cost of purchases (an expense/cost item), so it goes to Income Statement Debit."},
  {"type": "mcq", "question": "An 'Overage' of inventory (Physical Count > Book Balance) usually requires an entry crediting:", "options": ["Inventory", "Cost of Goods Sold or Other Income", "Accounts Payable", "Sales"], "correctIndex": 1, "explanation": "The credit represents the gain or reduction in cost, while Inventory is debited to increase it."},
  {"type": "mcq", "question": "When writing off a specific uncollectible account under the Allowance Method, the entry is:", "options": ["Debit Bad Debt Expense, Credit AR", "Debit Allowance for Doubtful Accounts, Credit AR", "Debit AR, Credit Allowance", "Debit Sales, Credit AR"], "correctIndex": 1, "explanation": "A write-off reduces the gross Receivable and uses up the Allowance reserved for it."},
  {"type": "mcq", "question": "Under the Adjusting Entry method, the Ending Inventory is recorded in the Adjustments columns by:", "options": ["Debiting Inventory and Crediting Income Summary", "Crediting Inventory and Debiting Purchases", "Debiting Purchases and Crediting Inventory", "Debiting Cost of Goods Sold"], "correctIndex": 0, "explanation": "To set up the new asset, you Debit Inventory and Credit Income Summary (or COGS depending on the account structure)."},
  {"type": "mcq", "question": "Sales Returns and Allowances is extended to which worksheet column?", "options": ["Income Statement Credit", "Income Statement Debit", "Balance Sheet Debit", "Balance Sheet Credit"], "correctIndex": 1, "explanation": "It is a contra-revenue account (Debited) that reduces Sales, so it sits in the Income Statement Debit column."},
  {"type": "mcq", "question": "Which of the following creates a 'Ghost' or 'Phantom' profit?", "options": ["Understating Beginning Inventory", "Overstating Ending Inventory", "Recording Bad Debts", "Inventory Shrinkage"], "correctIndex": 1, "explanation": "Overstating Ending Inventory reduces COGS artificially, inflating Net Income."},
  {"type": "mcq", "question": "The Aging of Accounts Receivable method is considered a:", "options": ["Income Statement Approach", "Balance Sheet Approach", "Direct Write-off Approach", "Tax Compliance Approach"], "correctIndex": 1, "explanation": "It focuses on the accuracy of the asset valuation (Receivables) on the Balance Sheet."},
  {"type": "mcq", "question": "In a worksheet, where is 'Unearned Revenue' extended?", "options": ["Income Statement Credit", "Balance Sheet Debit", "Balance Sheet Credit", "Adjusted Trial Balance Debit"], "correctIndex": 2, "explanation": "Unearned Revenue is a Liability, so it goes to the Balance Sheet Credit column."},
  {"type": "mcq", "question": "If the Allowance for Doubtful Accounts has a debit balance before adjustment, it indicates:", "options": ["More accounts were written off than were estimated", "Fewer accounts were written off than estimated", "The company is profitable", "A mistake was made"], "correctIndex": 0, "explanation": "A debit balance means write-offs (Debits to Allowance) exceeded the previous credit balance/reserve."},
  {"type": "mcq", "question": "In the Closing Entry method, the 'Income Summary' lines in the worksheet are:", "options": ["Used for Inventory adjustments", "Not used/Not present for Inventory", "Used for Bad Debts", "Used for Depreciation"], "correctIndex": 1, "explanation": "The Closing Entry method places Inventory directly into the IS/BS columns without using adjustment lines for Income Summary."},
  {"type": "mcq", "question": "Which account is credited when recording Inventory Shrinkage?", "options": ["Cost of Goods Sold", "Inventory Shrinkage Expense", "Merchandise Inventory", "Sales"], "correctIndex": 2, "explanation": "The asset Merchandise Inventory must be credited to reduce its balance."},
  {"type": "mcq", "question": "Net Income calculated in the worksheet is transferred to:", "options": ["Balance Sheet Debit", "Balance Sheet Credit", "Adjusted Trial Balance Credit", "Income Statement Debit"], "correctIndex": 1, "explanation": "Net Income is added to Owner's Equity, so it appears in the Balance Sheet Credit column to balance the worksheet."},
  {"type": "mcq", "question": "The direct write-off method for bad debts is generally not GAAP compliant because:", "options": ["It violates the Matching Principle", "It is too difficult", "It increases taxes", "It ignores Sales"], "correctIndex": 0, "explanation": "It fails to match the bad debt expense in the same period the revenue was generated."},
  {"type": "mcq", "question": "In a periodic system worksheet using the Adjusting Entry method, the balance of 'Purchases' is extended to:", "options": ["Balance Sheet Debit", "Income Statement Debit", "Adjustments Credit", "Income Statement Credit"], "correctIndex": 1, "explanation": "Purchases is a cost account (Debit) extended to the Income Statement Debit column."},
  {"type": "mcq", "question": "If Ending Inventory is understated, Cost of Goods Sold will be:", "options": ["Understated", "Overstated", "Unaffected", "Zero"], "correctIndex": 1, "explanation": "GAS - Ending Inv = COGS. If you subtract a smaller number (Ending Inv), the result (COGS) is larger."},
  {"type": "mcq", "question": "Which column pair represents the 'Adjusted Trial Balance'?", "options": ["1st and 2nd", "3rd and 4th", "5th and 6th", "7th and 8th"], "correctIndex": 2, "explanation": "Standard worksheet order: TB (1-2), Adjustments (3-4), Adjusted TB (5-6), IS (7-8), BS (9-10)."},
  {"type": "mcq", "question": "A recover of a previously written-off account requires:", "options": ["One entry", "Two entries", "Three entries", "No entry"], "correctIndex": 1, "explanation": "First entry to reverse the write-off (reinstate AR), second entry to record the cash collection."},
  {"type": "mcq", "question": "Cost of Goods Available for Sale minus Ending Inventory equals:", "options": ["Gross Profit", "Net Purchases", "Cost of Goods Sold", "Beginning Inventory"], "correctIndex": 2, "explanation": "This is the fundamental periodic inventory equation."},
  {"type": "mcq", "question": "The 'Sales Discounts' account is extended to:", "options": ["Income Statement Credit", "Income Statement Debit", "Balance Sheet Debit", "Balance Sheet Credit"], "correctIndex": 1, "explanation": "Sales Discounts is a contra-revenue (Debit) account, so it reduces income in the IS Debit column."},
  {"type": "mcq", "question": "Using the Balance Sheet approach for bad debts ensures:", "options": ["Expenses are perfectly matched to sales", "Accounts Receivable is reported at Net Realizable Value", "No adjusting entry is needed", "Sales are accurate"], "correctIndex": 1, "explanation": "The primary goal is correct valuation of the asset (AR) on the Balance Sheet."},
  {"type": "mcq", "question": "In the worksheet, Net Loss is entered in the:", "options": ["Income Statement Debit and Balance Sheet Credit", "Income Statement Credit and Balance Sheet Debit", "Adjustments Debit", "Adjustments Credit"], "correctIndex": 1, "explanation": "To balance the columns: Income Statement Credit (to add back to revenue) and Balance Sheet Debit (to reduce Equity)."},
  {"type": "mcq", "question": "If the physical count of inventory reveals items held on consignment (owned by others), these should be:", "options": ["Included in the count", "Excluded from the count", "Sold immediately", "Depreciated"], "correctIndex": 1, "explanation": "Inventory must be owned by the company to be included; consignment goods belong to the consignor."},
  {"type": "mcq", "question": "The adjustment for accrued interest revenue affects which worksheet columns?", "options": ["Adjustments only", "Income Statement Credit and Balance Sheet Debit", "Income Statement Debit and Balance Sheet Credit", "Balance Sheet Credit only"], "correctIndex": 1, "explanation": "Dr Interest Receivable (BS Debit), Cr Interest Revenue (IS Credit)."},
  {"type": "mcq", "question": "Under the Perpetual System, the 'Cost of Goods Sold' account in the Trial Balance is:", "options": ["Calculated at year end", "An up-to-date account to be extended to Income Statement Debit", "Ignored", "Transferred to Inventory"], "correctIndex": 1, "explanation": "In Perpetual, COGS is tracked throughout the year and appears in the unadjusted TB."},
  {"type": "mcq", "question": "When extending 'Merchandise Inventory' (Beginning) in a Periodic/Closing Method worksheet, it goes to:", "options": ["Adjustments Debit", "Adjusted TB Credit", "Income Statement Debit", "Balance Sheet Debit"], "correctIndex": 2, "explanation": "Beginning Inventory acts as an expense/cost for the period in the Income Statement."},
  {"type": "mcq", "question": "Which of the following is NOT a step in preparing a worksheet?", "options": ["Preparing the formal financial statements", "Entering the Trial Balance", "Entering Adjustments", "Extending Adjusted Balances"], "correctIndex": 0, "explanation": "The worksheet is a tool used *before* preparing the formal financial statements."},
  {"type": "mcq", "question": "If a company has significant bad debts, the 'Allowance for Doubtful Accounts' should have a normal balance of:", "options": ["Debit", "Credit", "Zero", "Fluctuating"], "correctIndex": 1, "explanation": "As a contra-asset, its normal balance is Credit."},
  {"type": "mcq", "question": "An adjustment for 'Prepaid Insurance' expiring involves:", "options": ["Debit Prepaid Insurance, Credit Insurance Expense", "Debit Insurance Expense, Credit Prepaid Insurance", "Debit Cash, Credit Insurance Expense", "Debit Insurance Expense, Credit Cash"], "correctIndex": 1, "explanation": "You recognize the expense (Debit) and reduce the asset (Credit)."},
  {"type": "mcq", "question": "Total debits must equal total credits in which worksheet columns?", "options": ["Income Statement only", "Balance Sheet only", "Trial Balance, Adjustments, and Adjusted Trial Balance", "None"], "correctIndex": 2, "explanation": "The first three pairs of columns must strictly balance. The IS and BS pairs differ by the Net Income amount."},
  {"type": "mcq", "question": "Normal Shrinkage is usually treated as:", "options": ["An Other Expense", "Part of Cost of Goods Sold", "A reduction of Sales", "A Receivable"], "correctIndex": 1, "explanation": "Normal shrinkage is considered a cost of doing business and is often rolled into COGS."},
  {"type": "mcq", "question": "Abnormal Shrinkage (e.g., from theft) is usually treated as:", "options": ["Cost of Goods Sold", "Other Expense / Loss", "Reduction of Sales", "Asset"], "correctIndex": 1, "explanation": "Significant or abnormal loss is separated from COGS to avoid distorting gross margin."},
  {"type": "mcq", "question": "In a worksheet, 'Mortgage Payable' is extended to:", "options": ["Income Statement Debit", "Balance Sheet Credit", "Adjusted TB Debit", "Income Statement Credit"], "correctIndex": 1, "explanation": "It is a Liability, so it goes to the Balance Sheet Credit column."},
  {"type": "mcq", "question": "If the 'Income Summary' account is used in the Adjusting Entry method, the credit in the Adjustments column represents:", "options": ["Beginning Inventory", "Ending Inventory", "Net Sales", "Purchases"], "correctIndex": 1, "explanation": "Entry to record End Inv: Dr Inventory, Cr Income Summary. So the credit is the Ending Inventory value."},
  {"type": "mcq", "question": "Which method of estimating bad debts provides the best matching of expenses to revenues?", "options": ["Percentage of Receivables", "Percentage of Sales", "Direct Write-off", "Aging of Receivables"], "correctIndex": 1, "explanation": "Percentage of Sales matches the expense to the sales generated in that specific period."},
  {"type": "mcq", "question": "The book value of Accounts Receivable is:", "options": ["Accounts Receivable + Bad Debt Expense", "Accounts Receivable - Allowance for Doubtful Accounts", "Accounts Receivable + Sales", "Sales - Returns"], "correctIndex": 1, "explanation": "Also known as Net Realizable Value."},
  {"type": "mcq", "question": "If a worksheet shows Net Income, the balancing figure in the Balance Sheet columns will be in the:", "options": ["Debit column", "Credit column", "Both columns", "Neither"], "correctIndex": 1, "explanation": "Net Income increases equity. Since Equity is a credit, the balancing figure to 'close' the worksheet math goes in the Credit column of the Balance Sheet section."},
  {"type": "mcq", "question": "Depreciation Expense on store equipment is classified as:", "options": ["Cost of Goods Sold", "Administrative Expense", "Selling Expense", "Other Expense"], "correctIndex": 2, "explanation": "Expenses related to the store/selling function are Selling Expenses."},
  {"type": "mcq", "question": "In the periodic system, the 'Purchases Returns and Allowances' account is extended to:", "options": ["Income Statement Debit", "Income Statement Credit", "Balance Sheet Debit", "Balance Sheet Credit"], "correctIndex": 1, "explanation": "It is a contra-cost (Credit balance) account, so it effectively reduces costs in the Income Statement Credit column."},
  {"type": "problem", "question": "Calculate Bad Debt Expense (Income Statement Method): Credit Sales ₱500,000; Estimated uncollectible percentage 2%. Allowance has a credit balance of ₱1,000.", "answer": "₱10,000", "explanation": "500,000 * 0.02 = 10,000. Under the IS method, existing allowance is ignored.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Bad Debt Expense (Balance Sheet Method): AR Balance ₱100,000; Est. uncollectible 5%. Allowance has a Credit balance of ₱1,000.", "answer": "₱4,000", "explanation": "Target Allowance = 100,000 * 0.05 = 5,000. Adjustment = Target (5,000) - Existing Credit (1,000) = 4,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Bad Debt Expense (Balance Sheet Method): AR Balance ₱100,000; Est. uncollectible 5%. Allowance has a Debit balance of ₱500.", "answer": "₱5,500", "explanation": "Target = 5,000. Adjustment = Target (5,000) + Existing Debit (500) = 5,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Inventory Shrinkage: Perpetual Inventory Book Balance ₱45,000; Physical Count ₱43,200.", "answer": "₱1,800", "explanation": "45,000 - 43,200 = 1,800 loss.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet Calculation: Income Statement Debit Total ₱120,000; Income Statement Credit Total ₱150,000. Calculate Net Income.", "answer": "₱30,000", "explanation": "150,000 (Rev) - 120,000 (Exp) = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet Calculation: Adjusted TB Debits ₱200,000. If total Credits match, what is the Adjusted TB Credit Total?", "answer": "₱200,000", "explanation": "Debits must equal Credits.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Realizable Value: Accounts Receivable ₱50,000; Allowance for Doubtful Accounts ₱3,500.", "answer": "₱46,500", "explanation": "50,000 - 3,500 = 46,500.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet Inventory Extension (Closing Method): Beg Inv ₱10,000. What amount goes to Income Statement Debit?", "answer": "₱10,000", "explanation": "Beginning Inventory is fully extended to IS Debit.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet Inventory Extension (Closing Method): End Inv ₱15,000. What amount goes to Balance Sheet Debit?", "answer": "₱15,000", "explanation": "Ending Inventory is recorded as an asset in BS Debit.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Sold with Shrinkage: Unadjusted COGS ₱80,000; Shrinkage ₱1,200.", "answer": "₱81,200", "explanation": "Shrinkage is added to COGS. 80,000 + 1,200 = 81,200.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Allowance Balance: Beg Allowance ₱2,000; Write-offs ₱1,500; Bad Debt Expense recorded ₱3,000.", "answer": "₱3,500", "explanation": "2,000 - 1,500 + 3,000 = 3,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Adjusted Sales: Sales ₱100,000; Sales Returns ₱2,000; Sales Discounts ₱1,000.", "answer": "₱97,000", "explanation": "100,000 - 2,000 - 1,000 = 97,000.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet Balance Sheet Columns: Debit Total ₱500,000; Credit Total ₱420,000. Calculate Net Income.", "answer": "₱80,000", "explanation": "Difference in BS columns matches Net Income. 500,000 - 420,000 = 80,000.", "isCurrency": true},
  {"type": "problem", "question": "Aging Method: 0-30 days ₱50,000 (1%); 31-60 days ₱20,000 (5%). Calculate Target Allowance.", "answer": "₱1,500", "explanation": "(50,000 * 0.01) + (20,000 * 0.05) = 500 + 1,000 = 1,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Interest Expense Adjustment: Note Payable ₱100,000; Rate 12%; Time 3 months accrued.", "answer": "₱3,000", "explanation": "100,000 * 0.12 * (3/12) = 3,000.", "isCurrency": true},
  {"type": "problem", "question": "Inventory Overage: Book Balance ₱20,000; Physical Count ₱20,500. Calculate Overage Amount.", "answer": "₱500", "explanation": "20,500 - 20,000 = 500.", "isCurrency": true},
  {"type": "problem", "question": "Adjusting Entry Method (Periodic): Beg Inv ₱8,000; End Inv ₱12,000. What is the Net credit/debit to Income Summary in the Adjustments columns?", "answer": "₱4,000 Credit", "explanation": "Dr Inv 12,000 (Cr IncSum) & Cr Inv 8,000 (Dr IncSum). Net effect on Income Summary is 4,000 Credit.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Adjusted Purchases: Purchases ₱60,000; Freight In ₱2,000; Purchase Returns ₱3,000.", "answer": "₱59,000", "explanation": "60,000 + 2,000 - 3,000 = 59,000.", "isCurrency": true},
  {"type": "problem", "question": "Trial Balance Dr Total ₱1,000,000. Adjustments Dr ₱50,000; Adjustments Cr ₱50,000. What is Adjusted TB Dr Total if no errors?", "answer": "Cannot be determined", "explanation": "We need to know how the adjustments affected specific account balances (add or subtract), not just the totals.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Bad Debt Expense: Sales ₱800,000 (70% on credit); 1% of Credit Sales uncollectible.", "answer": "₱5,600", "explanation": "Credit Sales = 560,000. 560,000 * 0.01 = 5,600.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet: Prepaid Rent TB Balance ₱12,000. Adjustment for expired rent ₱3,000. Adjusted TB Balance?", "answer": "₱9,000", "explanation": "12,000 (Dr) - 3,000 (Cr) = 9,000.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet: Unearned Revenue TB Balance ₱10,000. Adjustment for earned revenue ₱4,000. Adjusted TB Balance?", "answer": "₱6,000", "explanation": "10,000 (Cr) - 4,000 (Dr) = 6,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Net Sales ₱200,000; Beg Inv ₱20,000; Net Purch ₱100,000; End Inv ₱30,000.", "answer": "₱110,000", "explanation": "COGS = 20 + 100 - 30 = 90. GP = 200 - 90 = 110.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Insurance Expense: Annual Premium ₱12,000 paid on July 1. Year end Dec 31. Expense?", "answer": "₱6,000", "explanation": "12,000 * (6/12) = 6,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Service Revenue ₱50,000; Sales ₱100,000; Expenses ₱90,000.", "answer": "₱60,000", "explanation": "(50,000 + 100,000) - 90,000 = 60,000.", "isCurrency": true},
  {"type": "problem", "question": "Allowance for Doubtful Accounts: Beg Bal ₱500 (Cr); Write-off ₱600. End Bal before adjustment?", "answer": "₱100 Debit", "explanation": "500 Cr - 600 Dr = 100 Dr.", "isCurrency": true},
  {"type": "problem", "question": "Calculate COGS: Merchandise Inventory (Beg) ₱5,000; Merchandise Inventory (End) ₱4,000; Purchases ₱20,000.", "answer": "₱21,000", "explanation": "5,000 + 20,000 - 4,000 = 21,000.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet: Depreciation Expense adjustment ₱2,500. Which column receives the Debit?", "answer": "Adjustments Debit", "explanation": "The adjustment is entered in the Adjustments Debit column for Depr. Expense.", "isCurrency": false},
  {"type": "problem", "question": "Worksheet: Accrued Salaries ₱1,500. What is the credit entry amount in the Adjustments column?", "answer": "₱1,500", "explanation": "Credit Salaries Payable 1,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Office Supplies Expense: Beg Bal ₱500; Purchases ₱1,500; End Count ₱800.", "answer": "₱1,200", "explanation": "(500 + 1,500) - 800 = 1,200.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Book Value of Equipment: Cost ₱50,000; Accum Depr ₱20,000.", "answer": "₱30,000", "explanation": "50,000 - 20,000 = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Operating Expenses: Selling Exp ₱10,000; Admin Exp ₱5,000; COGS ₱20,000.", "answer": "₱15,000", "explanation": "COGS is not an operating expense. 10,000 + 5,000 = 15,000.", "isCurrency": true},
  {"type": "problem", "question": "Worksheet: Rent Expense TB ₱10,000; Prepaid Rent Adjustment (Dr) ₱2,000. Adjusted Balance?", "answer": "₱12,000", "explanation": "Assuming adjustment was to record rent expense: 10,000 + 2,000 = 12,000.", "isCurrency": true},
  {"type": "problem", "question": "Bad Debt Recovery: Account written off ₱500 is collected. Effect on Net Realizable Value?", "answer": "No Change", "explanation": "Reinstatement increases AR and Allowance equally. Collection decreases AR and increases Cash. NRV stays same.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Income from Operations: Gross Profit ₱40,000; Operating Exp ₱15,000; Interest Exp ₱1,000.", "answer": "₱25,000", "explanation": "40,000 - 15,000 = 25,000. Interest is non-operating.", "isCurrency": true},
  {"type": "problem", "question": "Periodic Inventory: Beg Inv ₱30k, End Inv ₱40k. Amount extended to Balance Sheet Credit column?", "answer": "₱0", "explanation": "Ending Inventory (Asset) goes to BS Debit. Nothing related to inventory goes to BS Credit.", "isCurrency": true},
  {"type": "problem", "question": "Closing Entry Method: Amount of Beginning Inventory ₱15,000 extended to Income Statement Credit?", "answer": "₱0", "explanation": "Beginning Inventory goes to IS Debit (Cost).", "isCurrency": true},
  {"type": "problem", "question": "Calculate Purchases: Net Purchases ₱18,000; Freight In ₱1,000; Returns ₱2,000; Discounts ₱1,000.", "answer": "₱20,000", "explanation": "X + 1000 - 2000 - 1000 = 18000. X - 2000 = 18000. X = 20,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Assets on Worksheet: Cash 10; AR 20; Allow 2; Inv 30; Equip 50; Accum Depr 10.", "answer": "₱98", "explanation": "10 + 20 - 2 + 30 + 50 - 10 = 98.", "isCurrency": false},
  {"type": "problem", "question": "Worksheet: If Net Loss is ₱10,000, which Balance Sheet column receives the ₱10,000 entry?", "answer": "Debit", "explanation": "To balance the columns. (Assets < Liab + Equity). Debit reduces equity.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Sales: Net Sales ₱95,000; Returns ₱3,000; Discounts ₱2,000.", "answer": "₱100,000", "explanation": "95 + 3 + 2 = 100.", "isCurrency": true},
  {"type": "problem", "question": "Adjustment: Salaries accrued ₱500. Effect on Net Income?", "answer": "Decrease ₱500", "explanation": "Expense increases, Net Income decreases.", "isCurrency": true},
  {"type": "problem", "question": "Adjustment: Unearned Revenue ₱1,000 is now earned. Effect on Liabilities?", "answer": "Decrease ₱1,000", "explanation": "Unearned Revenue (Liability) is debited (decreased).", "isCurrency": true},
  {"type": "problem", "question": "Calculate Bad Debt Expense: AR ₱200,000; Target Allowance ₱10,000; Current Allowance Credit ₱12,000.", "answer": "₱-2,000 (Recovery)", "explanation": "Target 10,000 < Existing 12,000. Need to reduce allowance by 2,000. Credit Bad Debt Recovery/Expense.", "isCurrency": true},
  {"type": "problem", "question": "Shrinkage %: Sales ₱500,000; Shrinkage ₱5,000. Shrinkage as % of Sales?", "answer": "1%", "explanation": "5,000 / 500,000 = 0.01.", "isCurrency": false},
  {"type": "problem", "question": "Inventory Turnover: COGS ₱100,000; Avg Inventory ₱20,000. Calculate Turnover.", "answer": "5 times", "explanation": "100,000 / 20,000 = 5.", "isCurrency": false},
  {"type": "problem", "question": "Days in Inventory: Turnover 5 times. (Use 365 days).", "answer": "73 days", "explanation": "365 / 5 = 73.", "isCurrency": false},
  {"type": "problem", "question": "Closing Entries: Sales ₱100k, Interest Rev ₱5k. Total Debit to Income Summary?", "answer": "₱0", "explanation": "Revenues are Closed by Debiting Revenue and Crediting Income Summary. So Income Summary is Credited.", "isCurrency": true},
  {"type": "problem", "question": "Closing Entries: Exp ₱80k. Entry to Close?", "answer": "Dr Income Summary ₱80k", "explanation": "Credit Expenses, Debit Income Summary.", "isCurrency": true},
  {"type": "problem", "question": "Final Capital: Beg Cap ₱50k; Net Inc ₱20k; Drawings ₱10k.", "answer": "₱60,000", "explanation": "50 + 20 - 10 = 60.", "isCurrency": true},
    ...merchTransactionPracData
]
        },
        // ... (Keep Day 2, Day 3, and Day 4 objects exactly as they were in the previous code) ...
        {
  "day": "Day 2",
  "topic": "Income Statement - Merchandising Business",
  "content": `
    <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-8">
        <p class="font-bold text-indigo-900">Learning Goal</p>
        <p class="text-indigo-800">Master the comprehensive structure of a Merchandising Income Statement. You will learn to distinguish between Single-Step and Multi-Step formats, compute core components like Net Sales, COGS, and Gross Profit, and correctly classify Operating Expenses into Selling and Administrative categories to determine the final Net Income.</p>
    </div>

    <div class="space-y-8">
        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">1. Single-Step vs. Multi-Step Income Statements</h3>
            <p class="text-gray-700 mb-4">
                The income statement can be presented in two primary formats depending on the level of detail required. A <strong>Single-Step</strong> statement is simple, grouping all revenues together and subtracting all expenses in one go to find Net Income. In contrast, the <strong>Multi-Step</strong> statement is essential for merchandising businesses because it calculates intermediate subtotals. This format reveals critical performance metrics like <em>Gross Profit</em> and <em>Operating Income</em>, allowing stakeholders to analyze the profitability of core operations separately from other expenses.
            </p>
            
            <div class="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table class="w-full text-sm text-left">
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
                            <td class="px-4 py-3">Service businesses or simple operations where Cost of Goods Sold is not a major factor.</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3 font-bold text-gray-900 border-r">Multi-Step</td>
                            <td class="px-4 py-3 border-r">
                                Net Sales - COGS = <strong>Gross Profit</strong><br>
                                - Operating Expenses<br>
                                = Net Income
                            </td>
                            <td class="px-4 py-3">Merchandising businesses. Highlights the margin earned on products sold vs. the cost of running the business.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">2. Net Sales</h3>
            <p class="text-gray-700 mb-4">
                Net Sales represents the actual revenue a company earns from its customers after all necessary deductions are made. It is the starting point of a multi-step income statement. To calculate it, we take the total Gross Sales and subtract any goods customers returned (Sales Returns) and any discounts we gave them for paying early (Sales Discounts).
            </p>
            <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm max-w-md">
                <h4 class="text-lg font-bold text-purple-700 mb-2">Net Sales Computation</h4>
                <div class="bg-purple-50 p-3 rounded font-mono text-sm border-l-4 border-purple-400">
                    <p>Gross Sales</p>
                    <p class="text-red-600">- Sales Returns & Allowances</p>
                    <p class="text-red-600 border-b border-gray-400 pb-1">- Sales Discounts</p>
                    <p class="font-bold pt-1 text-purple-900">= Net Sales</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">3. Cost of Goods Sold (COGS)</h3>
            <p class="text-gray-700 mb-4">
                Cost of Goods Sold (COGS) represents the direct cost attributable to the production or purchase of the goods sold by the company. In a periodic inventory system, we calculate this by looking at the flow of goods: we start with what we had at the beginning, add what we purchased during the period, and subtract what is left in the warehouse at the end.
            </p>
            <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm max-w-md">
                <h4 class="text-lg font-bold text-blue-700 mb-2">COGS Formula (Periodic)</h4>
                <div class="bg-blue-50 p-3 rounded font-mono text-sm border-l-4 border-blue-400">
                    <p>Beginning Inventory</p>
                    <p>+ Net Purchases <span class="text-xs text-gray-500">(Purchases - Returns - Discounts + Freight In)</span></p>
                    <p class="border-b border-gray-400 pb-1 font-semibold text-blue-800">= Goods Available for Sale (TGAS)</p>
                    <p class="text-red-600 pt-1 border-b border-black pb-1">- Ending Inventory</p>
                    <p class="font-bold pt-1 text-blue-900">= Cost of Goods Sold</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">4. Gross Profit</h3>
            <p class="text-gray-700 mb-4">
                Gross Profit is the first critical subtotal in a multi-step income statement, representing the profit a company makes after deducting the costs associated with making and selling its products.
            </p>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 max-w-md">
                <h4 class="font-bold text-green-800">Gross Profit Equation</h4>
                <p class="font-mono text-lg mt-1 text-green-900">Net Sales - COGS = Gross Profit</p>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">5. Operating Expenses</h3>
            <p class="text-gray-700 mb-4">
                Operating Expenses constitute the costs required to run the company that are not directly tied to the production of goods (which are in COGS). These are the day-to-day "overhead" costs necessary to keep the business functioning, such as rent, salaries, and utilities.
            </p>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">6. Selling and Marketing Expenses</h3>
            <p class="text-gray-700 mb-4">
                Selling expenses are the costs directly associated with the effort of securing orders and delivering products to customers. This category includes money spent on advertising, sales commissions, and freight-out.
            </p>
             <div class="bg-purple-50 p-4 rounded border border-purple-200 max-w-md">
                <h4 class="font-bold text-purple-900">Selling Expense Examples</h4>
                <ul class="list-disc pl-5 text-sm text-purple-900 mt-2">
                    <li>Sales Salaries & Commissions</li>
                    <li>Advertising & Marketing Material</li>
                    <li>Freight-Out (Delivery Expense)</li>
                    <li>Store Rent & Utilities</li>
                </ul>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">7. General and Administrative Expenses</h3>
            <p class="text-gray-700 mb-4">
                General and Administrative (G&A) expenses are the costs incurred to support the overall functioning of the business, rather than being tied to a specific sale or product.
            </p>
            <div class="bg-gray-50 p-4 rounded border border-gray-300 max-w-md">
                <h4 class="font-bold text-gray-900">Administrative Expense Examples</h4>
                <ul class="list-disc pl-5 text-sm text-gray-800 mt-2">
                    <li>Office Staff & Management Salaries</li>
                    <li>Legal & Professional Fees</li>
                    <li>Office Supplies Expense</li>
                    <li>Office Rent & Utilities</li>
                </ul>
            </div>
        </section>

        <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">8. Net Income</h3>
            <p class="text-gray-700 mb-4">
                Net Income, often referred to as the "bottom line," is the final profit remaining after all expenses, including operating costs, interest, and taxes, have been deducted from total revenue.
            </p>
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 max-w-md">
                <h4 class="font-bold text-yellow-800">The Bottom Line</h4>
                <p class="font-mono text-lg mt-1 text-yellow-900">Gross Profit - Total Operating Expenses = Net Income</p>
            </div>
        </section>

        <section class="border-t-4 border-indigo-200 pt-8 mt-12">
            <h3 class="text-2xl font-bold text-indigo-900 mb-4">9. Data Flow: Worksheet to Financial Statements</h3>
            <p class="text-gray-700 mb-6">
                The <strong>10-Column Worksheet</strong> is the blueprint for your Financial Statements. Once the worksheet is balanced, you simply "lift" the figures from the last four columns (Income Statement & Balance Sheet) to create the formal reports. Notice how the same data (Hai Company, Dec 31, 2023) translates into different formats below.
            </p>

            <div class="grid xl:grid-cols-2 gap-8">
                <div class="bg-white border border-gray-300 rounded shadow-md overflow-hidden">
                    <div class="bg-gray-100 p-3 border-b border-gray-300 font-bold text-gray-700 text-center">
                        SOURCE: Worksheet (Last 4 Columns)
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-xs font-mono border-collapse">
                            <thead>
                                <tr class="bg-gray-50 border-b">
                                    <th class="p-2 text-left sticky left-0 bg-gray-50">Account</th>
                                    <th class="p-2 text-center border-l bg-red-50 text-red-900" colspan="2">Income Statement</th>
                                    <th class="p-2 text-center border-l bg-blue-50 text-blue-900" colspan="2">Balance Sheet</th>
                                </tr>
                                <tr class="bg-gray-50 border-b text-[10px]">
                                    <th class="p-1 sticky left-0 bg-gray-50"></th>
                                    <th class="p-1 border-l text-center w-16">Debit</th>
                                    <th class="p-1 text-center w-16">Credit</th>
                                    <th class="p-1 border-l text-center w-16">Debit</th>
                                    <th class="p-1 text-center w-16">Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Cash</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">67,500</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Accounts Receivable</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">22,000</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Merchandise Inventory - Jan 1</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">350,000</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Office Supplies</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">4,200</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Prepaid Insurance</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">5,775</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Building</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">113,000</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Accumulated Depreciation-Building</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-blue-50">22,500</td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Accounts Payable</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-blue-50">25,000</td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Accrued Expense Payable</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-blue-50">4,180</td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Haya Hai, Capital</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-blue-50">472,580</td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Haya Hai, Drawings</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td><td class="p-1 border-l text-right bg-blue-50">36,000</td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Income Summary</td><td class="p-1 border-l text-right bg-red-50">285,000</td><td class="p-1 text-right bg-red-50">350,000</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Sales</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-red-50">894,440</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Sales Discounts</td><td class="p-1 border-l text-right bg-red-50">10,200</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Sales Returns and Allowances</td><td class="p-1 border-l text-right bg-red-50">44,300</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Purchases</td><td class="p-1 border-l text-right bg-red-50">760,000</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Purchase Discounts</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-red-50">6,000</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Purchase Returns and Allowances</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-red-50">7,000</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Freight In</td><td class="p-1 border-l text-right bg-red-50">21,300</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Salaries Expense</td><td class="p-1 border-l text-right bg-red-50">8,400</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Supplies Expense</td><td class="p-1 border-l text-right bg-red-50">6,400</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Insurance Expense</td><td class="p-1 border-l text-right bg-red-50">1,925</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Advertising Expense</td><td class="p-1 border-l text-right bg-red-50">19,500</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Maintenance Expense</td><td class="p-1 border-l text-right bg-red-50">32,700</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Interest Expense</td><td class="p-1 border-l text-right bg-red-50">2,500</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="border-b hover:bg-gray-50"><td class="p-1 pl-2 sticky left-0 bg-white">Interest Income</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right bg-red-50">9,000</td><td class="p-1 border-l text-right"></td><td class="p-1 text-right"></td></tr>
                                <tr class="bg-gray-200 font-bold border-t border-gray-400"><td class="p-1 pl-2 sticky left-0 bg-gray-200">Total</td><td class="p-1 border-l text-right">1,192,225</td><td class="p-1 text-right">1,266,440</td><td class="p-1 border-l text-right">598,475</td><td class="p-1 text-right">524,260</td></tr>
                                <tr class="bg-white font-bold"><td class="p-1 pl-2 sticky left-0 bg-white">Net Income</td><td class="p-1 border-l text-right text-green-700 bg-green-50">74,215</td><td class="p-1 text-right"></td><td class="p-1 border-l text-right"></td><td class="p-1 text-right text-green-700 bg-green-50">74,215</td></tr>
                                <tr class="bg-gray-300 font-extrabold border-t-2 border-black border-double"><td class="p-1 pl-2 sticky left-0 bg-gray-300">GRAND TOTAL</td><td class="p-1 border-l text-right">1,266,440</td><td class="p-1 text-right">1,266,440</td><td class="p-1 border-l text-right">598,475</td><td class="p-1 text-right">598,475</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="bg-yellow-50 border border-yellow-300 rounded shadow-md">
                        <div class="bg-yellow-200 p-2 font-bold text-yellow-900 text-center text-sm">
                            OUTPUT: Multi-Step Income Statement
                        </div>
                        <div class="p-4 text-xs font-mono text-gray-800">
                            <div class="font-bold text-base mb-2">Operating Income</div>
                            
                            <div class="flex justify-between font-bold"><span>Sales</span> <span>894,440.00</span></div>
                            <div class="pl-4">Less: Sales Discounts <span class="float-right mr-32">10,200.00</span></div>
                            <div class="pl-8">Sales Returns and Allowances <span class="float-right mr-32 border-b border-black">44,300.00</span> <span class="float-right border-b border-black">54,500.00</span></div>
                            <div class="flex justify-between font-bold"><span>Net Sales</span> <span>839,940.00</span></div>

                            <div class="font-bold mt-2">Cost of Goods Sold</div>
                            <div class="pl-4 flex justify-between"><span>Beginning Inventory</span> <span class="mr-32">285,000.00</span></div>
                            <div class="pl-4">Net Purchases</div>
                            <div class="pl-8 flex justify-between"><span>Purchases</span> <span class="mr-48">760,000.00</span></div>
                            <div class="pl-8">
                                <div class="pl-4">Less: Purchase Discounts <span class="float-right mr-64">6,000</span></div>
                                <div class="pl-8">Purchase Returns and Allowances <span class="float-right mr-64 border-b border-black">7,000</span> <span class="float-right mr-48 border-b border-black">13,000.00</span></div>
                            </div>
                            <div class="pl-8 flex justify-between"><span></span> <span class="mr-32">747,000.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Freight In</span> <span class="mr-32 border-b border-black">21,300.00</span></div>
                            <div class="pl-4 flex justify-between font-bold"><span>Total Goods Available for Sale</span> <span class="mr-32">1,053,300.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Less: Ending Inventory</span> <span class="mr-32 border-b border-black">350,000.00</span> <span class="float-right border-b border-black">703,300.00</span></div>
                            
                            <div class="flex justify-between font-bold text-lg mt-2"><span>Gross Profit</span> <span>136,640.00</span></div>

                            <div class="font-bold mt-2">Operating Expenses</div>
                            <div class="pl-4 flex justify-between"><span>Salaries Expense</span> <span class="mr-32">8,400.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Supplies Expense</span> <span class="mr-32">6,400.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Insurance Expense</span> <span class="mr-32">1,925.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Advertising Expense</span> <span class="mr-32">19,500.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Maintenance Expense</span> <span class="mr-32 border-b border-black">32,700.00</span> <span class="float-right border-b border-black">68,925.00</span></div>
                            
                            <div class="flex justify-between font-bold bg-yellow-200 p-1 mt-1"><span>Net Operating Income</span> <span>67,715.00</span></div>

                            <div class="font-bold mt-2 bg-orange-200 px-1">Non-Operating Income and Expenses</div>
                            <div class="pl-4 flex justify-between"><span>Interest Income</span> <span class="mr-32">9,000.00</span></div>
                            <div class="pl-4 flex justify-between"><span>Interest Expense</span> <span class="mr-32 border-b border-black">(2,500.00)</span></div>
                            <div class="flex justify-between font-bold bg-orange-100 p-1"><span>Net Non-Operating Income</span> <span>6,500.00</span></div>

                            <div class="flex justify-between font-bold mt-2"><span>Income Before Tax</span> <span>74,215.00</span></div>
                            <div class="flex justify-between border-b border-black mb-1"><span>Less: Provision for Income Tax</span> <span>-</span></div>
                            
                            <div class="flex justify-between font-extrabold text-lg border-b-4 border-double border-black py-1">
                                <span>NET INCOME</span> <span>74,215.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  `,

      exercises: [
  {"type": "problem", "question": "Calculate Net Sales: Gross Sales ₱200,000; Sales Returns ₱8,000; Sales Discounts ₱4,000; Freight Out ₱2,500.", "answer": "₱188,000", "explanation": "200,000 - 8,000 - 4,000 = 188,000. Freight Out is an operating expense, not deducted from sales.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Purchases: Purchases ₱80,000; Purchase Returns ₱5,000; Purchase Discounts ₱2,000; Freight In ₱3,000.", "answer": "₱76,000", "explanation": "80,000 - 5,000 - 2,000 + 3,000 = 76,000. Freight In is added to the cost of purchases.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Available for Sale (TGAS): Beginning Inventory ₱25,000; Net Purchases ₱76,000.", "answer": "₱101,000", "explanation": "25,000 + 76,000 = 101,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Sold (COGS): Cost of Goods Available for Sale ₱101,000; Ending Inventory ₱20,000.", "answer": "₱81,000", "explanation": "101,000 - 20,000 = 81,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Net Sales ₱188,000; Cost of Goods Sold ₱81,000.", "answer": "₱107,000", "explanation": "188,000 - 81,000 = 107,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Operating Expenses: Salaries Expense ₱20,000; Rent Expense ₱10,000; Freight Out ₱2,500; Depreciation ₱5,000.", "answer": "₱37,500", "explanation": "20,000 + 10,000 + 2,500 + 5,000 = 37,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Profit ₱107,000; Operating Expenses ₱37,500.", "answer": "₱69,500", "explanation": "107,000 - 37,500 = 69,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Sales: Gross Sales ₱500,000; Sales Returns and Allowances ₱12,500; Sales Discounts ₱7,500.", "answer": "₱480,000", "explanation": "500,000 - 12,500 - 7,500 = 480,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Purchases: Invoice Cost of Purchases ₱150,000; Freight In ₱4,000; Purchase Returns ₱6,000; Purchase Discounts ₱3,000.", "answer": "₱145,000", "explanation": "150,000 + 4,000 - 6,000 - 3,000 = 145,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Inventory: Cost of Goods Available for Sale ₱220,000; Cost of Goods Sold ₱160,000.", "answer": "₱60,000", "explanation": "If GAS is 220,000 and COGS is 160,000, then Ending Inventory = 220,000 - 160,000 = 60,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit Margin: Net Sales ₱200,000; Gross Profit ₱80,000.", "answer": "40%", "explanation": "(80,000 / 200,000) * 100 = 40%.", "isCurrency": false},
  {"type": "problem", "question": "Calculate COGS: Net Sales ₱300,000; Gross Profit Rate 30%.", "answer": "₱210,000", "explanation": "If Gross Profit is 30%, COGS is 70%. 300,000 * 70% = 210,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Operating Profit: Net Sales ₱120,000; Cost of Goods Sold ₱70,000; Operating Expenses ₱25,000.", "answer": "₱25,000", "explanation": "(120,000 - 70,000) - 25,000 = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Goods Available for Sale: Beginning Inventory ₱15,000; Purchases ₱60,000; Freight In ₱2,000; Purchase Returns ₱1,500.", "answer": "₱75,500", "explanation": "Beg Inv (15,000) + Net Purchases (60,000 + 2,000 - 1,500) = 15,000 + 60,500 = 75,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Operating Profit ₱40,000; Interest Expense ₱2,000; Interest Income ₱1,000.", "answer": "₱39,000", "explanation": "40,000 - 2,000 + 1,000 = 39,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Sales: Net Sales ₱95,000; Sales Returns ₱3,000; Sales Discounts ₱2,000.", "answer": "₱100,000", "explanation": "Net Sales + Returns + Discounts = Gross Sales. 95,000 + 3,000 + 2,000 = 100,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Purchase Discounts: Terms 2/10, n/30. Payment made within discount period on a ₱50,000 invoice.", "answer": "₱1,000", "explanation": "50,000 * 0.02 = 1,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Sold: Beginning Inventory ₱5,000; Ending Inventory ₱8,000; Purchases ₱40,000; Freight In ₱1,000; Purchase Returns ₱2,000.", "answer": "₱36,000", "explanation": "GAS = 5,000 + (40,000 + 1,000 - 2,000) = 44,000. COGS = 44,000 - 8,000 = 36,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Sales ₱150,000; COGS ₱90,000; Selling Expenses ₱20,000; Administrative Expenses ₱15,000.", "answer": "₱25,000", "explanation": "Gross Profit (60,000) - Operating Expenses (35,000) = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Freight In: Net Purchases ₱52,000; Purchases ₱50,000; Purchase Returns ₱1,000; Purchase Discounts ₱500.", "answer": "₱3,500", "explanation": "Net Purchases = Purchases - Returns - Discounts + Freight In. 52,000 = 50,000 - 1,000 - 500 + Freight In. 52,000 = 48,500 + Freight In. Freight In = 3,500.", "isCurrency": true},
  {"type": "mcq", "question": "Which account is deducted from Gross Sales to arrive at Net Sales?", "options": ["Freight Out", "Sales Returns and Allowances", "Cost of Goods Sold", "Selling Expenses"], "correctIndex": 1, "explanation": "Sales Returns and Allowances is a contra-revenue account deducted from Gross Sales."},
  {"type": "mcq", "question": "Gross Profit is calculated as:", "options": ["Net Sales - Operating Expenses", "Net Sales - Cost of Goods Sold", "Gross Sales - Cost of Goods Sold", "Operating Profit - Taxes"], "correctIndex": 1, "explanation": "Gross Profit = Net Sales - Cost of Goods Sold."},
  {"type": "mcq", "question": "Which of the following is considered an Operating Expense?", "options": ["Interest Expense", "Cost of Goods Sold", "Freight Out", "Sales Discounts"], "correctIndex": 2, "explanation": "Freight Out is a selling expense, which is part of Operating Expenses."},
  {"type": "mcq", "question": "The inventory system that updates the inventory account after every purchase and sale is called:", "options": ["Periodic Inventory System", "Perpetual Inventory System", "Physical Inventory System", "Weighted Average System"], "correctIndex": 1, "explanation": "The Perpetual Inventory System maintains continuous records of inventory."},
  {"type": "mcq", "question": "Freight In is reported on the income statement as:", "options": ["An Operating Expense", "A deduction from Sales", "An addition to Purchases", "A deduction from Purchases"], "correctIndex": 2, "explanation": "Freight In is added to Purchases to determine the Net Cost of Purchases."},
  {"type": "mcq", "question": "Which of the following equations represents Cost of Goods Available for Sale?", "options": ["Beginning Inventory + Net Sales", "Beginning Inventory + Net Purchases", "Ending Inventory + Cost of Goods Sold", "Net Purchases + Freight In"], "correctIndex": 1, "explanation": "Cost of Goods Available for Sale = Beginning Inventory + Net Purchases."},
  {"type": "mcq", "question": "Net Income is defined as:", "options": ["Gross Profit - Cost of Goods Sold", "Gross Profit - Operating Expenses", "Net Sales - Cost of Goods Sold", "Operating Profit - Cost of Goods Sold"], "correctIndex": 1, "explanation": "Net Income (before non-operating items) is Gross Profit minus Operating Expenses."},
  {"type": "mcq", "question": "Purchase Returns and Allowances is what type of account?", "options": ["Asset", "Liability", "Expense", "Contra-Cost"], "correctIndex": 3, "explanation": "It is a contra-cost (or contra-purchase) account that reduces the total cost of purchases."},
  {"type": "mcq", "question": "If a buyer pays within the discount period under terms 2/10, n/30, which account is credited by the buyer?", "options": ["Sales Discounts", "Purchase Discounts", "Cash", "Accounts Receivable"], "correctIndex": 1, "explanation": "The buyer records a Purchase Discount (or reduces Inventory in perpetual) when paying early."},
  {"type": "mcq", "question": "Cost of Goods Sold appears on which financial statement?", "options": ["Balance Sheet", "Statement of Cash Flows", "Income Statement", "Statement of Owner's Equity"], "correctIndex": 2, "explanation": "COGS is a major expense item on the Income Statement."},
  {"type": "mcq", "question": "Which of the following is NOT used to calculate Net Purchases?", "options": ["Purchases", "Freight In", "Purchase Returns", "Freight Out"], "correctIndex": 3, "explanation": "Freight Out is a selling expense and does not affect the cost of purchases."},
  {"type": "mcq", "question": "Beginning Inventory + Net Purchases - Ending Inventory equals:", "options": ["Gross Profit", "Cost of Goods Available for Sale", "Cost of Goods Sold", "Net Income"], "correctIndex": 2, "explanation": "This is the formula for Cost of Goods Sold in a periodic system."},
  {"type": "mcq", "question": "Sales Discounts are offered to customers to:", "options": ["Increase the price of goods", "Encourage early payment", "Reduce the quality of goods", "Avoid shipping costs"], "correctIndex": 1, "explanation": "Sales discounts (e.g., 2/10, n/30) are incentives for prompt payment."},
  {"type": "mcq", "question": "Gross Sales minus Net Sales equals:", "options": ["Cost of Goods Sold", "Gross Profit", "Sales Returns, Allowances, and Discounts", "Operating Expenses"], "correctIndex": 2, "explanation": "The difference between Gross and Net Sales is the sum of contra-revenue accounts (returns, allowances, discounts)."},
  {"type": "mcq", "question": "Operating Profit is also known as:", "options": ["Net Income", "Income from Operations", "Gross Margin", "Earnings Before Tax"], "correctIndex": 1, "explanation": "Operating Profit is synonymous with Income from Operations."},
  {"type": "mcq", "question": "Under the periodic inventory system, Cost of Goods Sold is determined:", "options": ["At the time of each sale", "At the end of the accounting period", "Daily", "Weekly"], "correctIndex": 1, "explanation": "In a periodic system, COGS is calculated at the end of the period after a physical count."},
  {"type": "mcq", "question": "Which of the following reduces the Cost of Goods Available for Sale to arrive at Cost of Goods Sold?", "options": ["Net Sales", "Beginning Inventory", "Ending Inventory", "Operating Expenses"], "correctIndex": 2, "explanation": "GAS minus Ending Inventory equals COGS."},
  {"type": "mcq", "question": "A debit balance in the 'Income Summary' account before closing to capital represents:", "options": ["Net Income", "Net Loss", "Gross Profit", "Sales"], "correctIndex": 1, "explanation": "A debit balance indicates that expenses exceeded revenues, resulting in a Net Loss."},
  {"type": "mcq", "question": "The normal balance of the Sales Returns and Allowances account is:", "options": ["Debit", "Credit", "Zero", "Negative"], "correctIndex": 0, "explanation": "As a contra-revenue account, it has a normal Debit balance (opposite to Sales)."},
  {"type": "mcq", "question": "Which item is excluded from the calculation of Operating Profit?", "options": ["Salaries Expense", "Interest Expense", "Depreciation Expense", "Rent Expense"], "correctIndex": 1, "explanation": "Interest Expense is a non-operating (finance) cost, deducted after Operating Profit to reach Net Income."},
  {"type": "problem", "question": "Calculate Net Sales: Sales ₱80,000; Sales Returns ₱2,000; Sales Discounts ₱1,000; Freight Out ₱500.", "answer": "₱77,000", "explanation": "80,000 - 2,000 - 1,000 = 77,000. Freight Out is ignored for Net Sales.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Sold: Beginning Inventory ₱12,000; Net Purchases ₱40,000; Ending Inventory ₱15,000.", "answer": "₱37,000", "explanation": "(12,000 + 40,000) - 15,000 = 37,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Profit ₱50,000; Selling Expenses ₱10,000; Administrative Expenses ₱15,000.", "answer": "₱25,000", "explanation": "50,000 - 10,000 - 15,000 = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Sales ₱200,000; Sales Returns ₱10,000; Cost of Goods Sold ₱120,000.", "answer": "₱70,000", "explanation": "Net Sales (190,000) - COGS (120,000) = 70,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Inventory: Goods Available for Sale ₱90,000; Cost of Goods Sold ₱65,000.", "answer": "₱25,000", "explanation": "90,000 - 65,000 = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Purchases: Purchases ₱30,000; Freight In ₱2,000; Purchase Returns ₱1,000.", "answer": "₱31,000", "explanation": "30,000 + 2,000 - 1,000 = 31,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Operating Expenses: Gross Profit ₱100,000; Net Income ₱60,000.", "answer": "₱40,000", "explanation": "100,000 - 60,000 = 40,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Goods Available for Sale: Beginning Inventory ₱20,000; Purchases ₱50,000; Freight In ₱5,000; Purchase Discounts ₱2,000.", "answer": "₱73,000", "explanation": "20,000 + (50,000 + 5,000 - 2,000) = 73,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Sales: Gross Sales ₱125,000; Sales Returns ₱5,000; Sales Discounts ₱2,500.", "answer": "₱117,500", "explanation": "125,000 - 5,000 - 2,500 = 117,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Beginning Inventory: Cost of Goods Available for Sale ₱80,000; Net Purchases ₱60,000.", "answer": "₱20,000", "explanation": "80,000 - 60,000 = 20,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Sold: Sales ₱500,000; Gross Profit Rate 40%.", "answer": "₱300,000", "explanation": "If GP is 40%, COGS is 60%. 500,000 * 0.60 = 300,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Sales Discounts: Gross Sales ₱10,000; Terms 2/10, n/30 (paid within period).", "answer": "₱200", "explanation": "10,000 * 0.02 = 200.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Operating Profit ₱35,000; Interest Expense ₱3,000.", "answer": "₱32,000", "explanation": "35,000 - 3,000 = 32,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Freight In: Cost of Goods Available for Sale ₱60,000; Beginning Inventory ₱10,000; Purchases ₱45,000; Purchase Returns ₱0.", "answer": "₱5,000", "explanation": "Net Purchases = 60,000 - 10,000 = 50,000. Freight In = 50,000 - 45,000 = 5,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Sales: Net Sales ₱280,000; Sales Returns ₱15,000; Sales Discounts ₱5,000.", "answer": "₱300,000", "explanation": "280,000 + 15,000 + 5,000 = 300,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Purchase Returns: Purchases ₱20,000; Freight In ₱1,000; Net Purchases ₱18,000.", "answer": "₱3,000", "explanation": "20,000 + 1,000 - Returns = 18,000. 21,000 - Returns = 18,000. Returns = 3,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Net Sales ₱450,000; Cost of Goods Sold ₱300,000.", "answer": "₱150,000", "explanation": "450,000 - 300,000 = 150,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Administrative Expenses: Operating Expenses ₱55,000; Selling Expenses ₱30,000.", "answer": "₱25,000", "explanation": "55,000 - 30,000 = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Sales ₱60,000; Sales Returns ₱2,000; COGS ₱30,000; Operating Expenses ₱15,000.", "answer": "₱13,000", "explanation": "Net Sales (58,000) - COGS (30,000) - Exp (15,000) = 13,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Merchandise Inventory End: Beg Inv ₱4,000; Net Purchases ₱26,000; COGS ₱22,000.", "answer": "₱8,000", "explanation": "(4,000 + 26,000) - 22,000 = 8,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Purchases: Purchases ₱100,000; Purchase Discounts ₱4,000; Freight In ₱5,000.", "answer": "₱101,000", "explanation": "100,000 - 4,000 + 5,000 = 101,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Operating Expenses: Rent ₱5,000; Salaries ₱12,000; Advertising ₱3,000; Freight Out ₱1,000.", "answer": "₱21,000", "explanation": "5,000 + 12,000 + 3,000 + 1,000 = 21,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate COGS: Net Sales ₱80,000; Gross Profit ₱20,000.", "answer": "₱60,000", "explanation": "80,000 - 20,000 = 60,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Profit ₱15,000; Operating Expenses ₱18,000.", "answer": "-₱3,000", "explanation": "15,000 - 18,000 = (3,000) Net Loss.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Goods Available for Sale: Ending Inventory ₱10,000; Cost of Goods Sold ₱40,000.", "answer": "₱50,000", "explanation": "40,000 + 10,000 = 50,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Sales Returns: Gross Sales ₱90,000; Net Sales ₱85,000; Sales Discounts ₱1,000.", "answer": "₱4,000", "explanation": "90,000 - Returns - 1,000 = 85,000. Returns = 4,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Purchases: Purchases ₱75,000; Freight In ₱2,500; Purchase Returns ₱2,500; Purchase Discounts ₱1,500.", "answer": "₱73,500", "explanation": "75,000 + 2,500 - 2,500 - 1,500 = 73,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit Rate: Net Sales ₱200,000; Cost of Goods Sold ₱150,000.", "answer": "25%", "explanation": "Gross Profit = 50,000. (50,000 / 200,000) = 0.25.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Beginning Inventory: End Inv ₱30,000; COGS ₱100,000; Net Purchases ₱110,000.", "answer": "₱20,000", "explanation": "GAS = 130,000. 130,000 - 110,000 = 20,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Sales ₱50,000; Returns ₱0; COGS ₱20,000; Expenses ₱10,000.", "answer": "₱20,000", "explanation": "50,000 - 20,000 - 10,000 = 20,000.", "isCurrency": true},
  {"type": "mcq", "question": "Which of the following is considered a 'contra-revenue' account?", "options": ["Sales", "Cost of Goods Sold", "Sales Returns and Allowances", "Accounts Receivable"], "correctIndex": 2, "explanation": "It reduces the total sales revenue."},
  {"type": "mcq", "question": "FOB Shipping Point means that ownership of goods passes to the buyer when:", "options": ["The goods arrive at the buyer's warehouse", "The carrier accepts the goods from the seller", "The buyer pays for the goods", "The goods are ordered"], "correctIndex": 1, "explanation": "Ownership transfers when goods are shipped."},
  {"type": "mcq", "question": "Under FOB Destination, who is responsible for the freight costs?", "options": ["Buyer", "Seller", "Carrier", "Government"], "correctIndex": 1, "explanation": "The seller pays for freight under FOB Destination."},
  {"type": "mcq", "question": "Which account is NOT closed at the end of the accounting period?", "options": ["Sales", "Merchandise Inventory", "Cost of Goods Sold", "Sales Discounts"], "correctIndex": 1, "explanation": "Merchandise Inventory is a permanent (real) account (Asset)."},
  {"type": "mcq", "question": "A discount offered to encourage customers to buy in large quantities is called a:", "options": ["Cash Discount", "Trade Discount", "Sales Discount", "Purchase Discount"], "correctIndex": 1, "explanation": "Trade discounts are for quantity/bulk purchases, distinct from cash discounts for early payment."},
  {"type": "mcq", "question": "Cost of Goods Sold is classified as a(n):", "options": ["Asset", "Liability", "Revenue", "Expense"], "correctIndex": 3, "explanation": "It is the primary expense account for a merchandising business."},
  {"type": "mcq", "question": "If Ending Inventory is understated, what is the effect on Net Income?", "options": ["Overstated", "Understated", "No effect", "Cannot be determined"], "correctIndex": 1, "explanation": "Lower Ending Inventory -> Higher COGS -> Lower Net Income."},
  {"type": "mcq", "question": "Net Sales - Cost of Goods Sold = ?", "options": ["Net Income", "Operating Income", "Gross Profit", "Total Revenue"], "correctIndex": 2, "explanation": "This is the definition of Gross Profit."},
  {"type": "mcq", "question": "Which expense is usually NOT listed under Operating Expenses?", "options": ["Rent Expense", "Salaries Expense", "Income Tax Expense", "Advertising Expense"], "correctIndex": 2, "explanation": "Income Tax is deducted after Operating Expenses and Other Income/Expenses."},
  {"type": "mcq", "question": "In a periodic inventory system, the 'Purchases' account is debited when:", "options": ["Goods are sold", "Goods are bought for resale", "Equipment is bought", "Supplies are bought"], "correctIndex": 1, "explanation": "Purchases of merchandise for resale are debited to the Purchases account."},
  {"type": "mcq", "question": "Credit terms 'n/30' mean:", "options": ["New customer gets 30 days", "Net amount due in 30 days", "No interest for 30 days", "90% due in 30 days"], "correctIndex": 1, "explanation": "The net (full) amount is due within 30 days."},
  {"type": "mcq", "question": "Sales minus Sales Returns and Allowances minus Sales Discounts equals:", "options": ["Gross Profit", "Net Income", "Net Sales", "Cost of Goods Sold"], "correctIndex": 2, "explanation": "This is the formula for Net Sales."},
  {"type": "mcq", "question": "Freight Out is treated as:", "options": ["Cost of goods sold", "Operating expense", "Contra-revenue", "Asset"], "correctIndex": 1, "explanation": "It is a selling expense, part of operating expenses."},
  {"type": "mcq", "question": "Which of the following accounts normally has a credit balance?", "options": ["Sales Returns", "Sales Discounts", "Sales", "Purchases"], "correctIndex": 2, "explanation": "Sales is a revenue account with a normal credit balance."},
  {"type": "mcq", "question": "The 'Operating Cycle' of a merchandiser is typically:", "options": ["Shorter than a service firm", "Longer than a service firm", "The same as a service firm", "Non-existent"], "correctIndex": 1, "explanation": "It includes buying inventory, selling it, and collecting cash, which takes longer than service cycles."},
  {"type": "mcq", "question": "Gross Profit Rate is calculated as:", "options": ["Net Income / Net Sales", "Gross Profit / Net Sales", "Gross Profit / Cost of Goods Sold", "Net Sales / Gross Profit"], "correctIndex": 1, "explanation": "Gross Profit divided by Net Sales gives the rate/margin."},
  {"type": "mcq", "question": "Goods in transit shipped FOB Shipping Point should be included in the inventory of the:", "options": ["Seller", "Buyer", "Carrier", "Neither"], "correctIndex": 1, "explanation": "Ownership transfers at the shipping point, so the buyer owns them in transit."},
  {"type": "mcq", "question": "Which account is found in the Chart of Accounts of a Merchandising business but not a Service business?", "options": ["Cash", "Accounts Receivable", "Merchandise Inventory", "Supplies"], "correctIndex": 2, "explanation": "Service businesses do not sell physical inventory."},
  {"type": "mcq", "question": "If Beginning Inventory is overstated, Cost of Goods Sold will be:", "options": ["Understated", "Overstated", "Correct", "Zero"], "correctIndex": 1, "explanation": "Higher Beginning Inventory increases Goods Available for Sale and COGS."},
  {"type": "mcq", "question": "The difference between Net Sales and Operating Expenses (ignoring COGS) is:", "options": ["Gross Profit", "Net Income", "Meaningless", "Operating Profit"], "correctIndex": 2, "explanation": "You cannot calculate profit without deducting COGS first."},
  {"type": "mcq", "question": "Purchase Discounts Lost is an account used in:", "options": ["Gross Method of recording purchases", "Net Method of recording purchases", "Retail Inventory Method", "Periodic System only"], "correctIndex": 1, "explanation": "The Net Method assumes discounts are taken; if missed, 'Lost' is recorded."},
  {"type": "mcq", "question": "Which is an example of a Selling Expense?", "options": ["Office Salaries", "Store Supplies Expense", "Office Rent", "Interest Expense"], "correctIndex": 1, "explanation": "Store supplies relate to the sales function."},
  {"type": "mcq", "question": "Which is an example of an Administrative Expense?", "options": ["Sales Commissions", "Delivery Expense", "Office Utilities", "Advertising"], "correctIndex": 2, "explanation": "Office utilities relate to general administration, not direct selling."},
  {"type": "mcq", "question": "Ending Inventory appears on:", "options": ["Income Statement only", "Balance Sheet only", "Both Income Statement and Balance Sheet", "Neither"], "correctIndex": 2, "explanation": "It is an asset on the Balance Sheet and a deduction from GAS on the Income Statement."},
  {"type": "mcq", "question": "A physical count of inventory is required at least once a year under:", "options": ["Periodic System only", "Perpetual System only", "Both Periodic and Perpetual Systems", "Neither"], "correctIndex": 2, "explanation": "Both systems require physical counts to verify records or calculate COGS."},
  {"type": "mcq", "question": "What is the effect of Sales Returns on Gross Profit?", "options": ["Increase", "Decrease", "No Effect", "Doubles it"], "correctIndex": 1, "explanation": "Sales Returns reduce Net Sales, thereby reducing Gross Profit."},
  {"type": "mcq", "question": "Income from Operations is calculated by deducting what from Gross Profit?", "options": ["Cost of Goods Sold", "Operating Expenses", "Income Taxes", "Interest"], "correctIndex": 1, "explanation": "Gross Profit - Operating Expenses = Income from Operations."},
  {"type": "mcq", "question": "The account 'Freight In' is a:", "options": ["Operating Expense", "Adjunct account to Purchases", "Contra-revenue", "Liability"], "correctIndex": 1, "explanation": "It is added to Purchases (adjunct) to determine cost."},
  {"type": "mcq", "question": "If a company has Net Sales of ₱100 and COGS of ₱70, what is the Markup on Cost?", "options": ["30%", "42.8%", "70%", "100%"], "correctIndex": 1, "explanation": "Profit is 30. Markup on Cost = 30/70 ≈ 42.8%."},
  {"type": "mcq", "question": "The multi-step income statement distinguishes between:", "options": ["Operating and Non-operating activities", "Cash and Accrual", "Assets and Liabilities", "Debit and Credit"], "correctIndex": 0, "explanation": "It separates operating revenues/expenses from non-operating items like interest."},
          {"type": "mcq", "question": "Which of the following equations represents the Single-Step Income Statement format?", "options": ["Net Sales - COGS - Expenses = Net Income", "Total Revenues - Total Expenses = Net Income", "Gross Profit - Operating Expenses = Net Income", "Sales - Selling Expenses = Net Income"], "correctIndex": 1, "explanation": "The Single-Step format lumps all revenues together and all expenses together without subtotals like Gross Profit."},
  {"type": "mcq", "question": "In a Multi-Step Income Statement, 'Income from Operations' is calculated by deducting:", "options": ["Operating Expenses from Gross Profit", "Cost of Goods Sold from Net Sales", "Income Tax from Net Income", "Interest Expense from Operating Income"], "correctIndex": 0, "explanation": "Income from Operations = Gross Profit - Operating Expenses."},
  {"type": "mcq", "question": "Delivery Expense (Freight Out) is classified as:", "options": ["Cost of Goods Sold", "Administrative Expense", "Selling Expense", "Other Expense"], "correctIndex": 2, "explanation": "Freight Out is a cost incurred to sell/deliver goods to customers, making it a Selling Expense."},
  {"type": "mcq", "question": "Office Utilities Expense is typically classified as:", "options": ["Selling Expense", "Administrative Expense", "Cost of Goods Sold", "Other Expense"], "correctIndex": 1, "explanation": "Utilities used for the general office are part of Administrative (General) Expenses."},
  {"type": "mcq", "question": "Which of the following is considered a 'Non-Operating' item?", "options": ["Sales Salaries", "Depreciation of Store Equipment", "Interest Revenue", "Rent Expense"], "correctIndex": 2, "explanation": "Interest Revenue is a financial item, not part of the core operating activities."},
  {"type": "mcq", "question": "Store Supplies Expense is classified as:", "options": ["Administrative Expense", "Selling Expense", "Cost of Goods Sold", "Non-operating Expense"], "correctIndex": 1, "explanation": "Supplies used in the store support the sales function."},
  {"type": "mcq", "question": "In a Single-Step Income Statement, Cost of Goods Sold is listed under:", "options": ["Gross Profit", "Revenues", "Expenses", "Assets"], "correctIndex": 2, "explanation": "In Single-Step, COGS is just one of the many expenses deducted from Total Revenues."},
  {"type": "mcq", "question": "Which expense is allocated between Selling and Administrative if a building is used for both?", "options": ["Depreciation Expense", "Sales Commissions", "Freight Out", "Office Salaries"], "correctIndex": 0, "explanation": "Depreciation (or Rent/Utilities) on a shared facility must be allocated based on usage."},
  {"type": "mcq", "question": "Gross Profit minus Selling Expenses minus Administrative Expenses equals:", "options": ["Net Income", "Income from Operations", "Cost of Goods Sold", "Earnings Before Interest and Taxes (EBIT)"], "correctIndex": 1, "explanation": "This is the specific formula for Operating Income (Income from Operations)."},
  {"type": "mcq", "question": "Depreciation on Office Equipment is a(n):", "options": ["Selling Expense", "Administrative Expense", "Other Expense", "Cost of Goods Sold"], "correctIndex": 1, "explanation": "Equipment used in the office supports general administration."},
  {"type": "mcq", "question": "Sales Commissions are:", "options": ["Administrative Expenses", "Selling Expenses", "Cost of Goods Sold", "Other Expenses"], "correctIndex": 1, "explanation": "Commissions are paid directly to salespeople for making sales."},
  {"type": "mcq", "question": "Which format provides more detail for analyzing a company's gross margin?", "options": ["Single-Step", "Multi-Step", "Balance Sheet", "Cash Flow Statement"], "correctIndex": 1, "explanation": "Multi-Step explicitly calculates Gross Profit (Margin)."},
  {"type": "mcq", "question": "Loss on Sale of Equipment is reported under:", "options": ["Operating Expenses", "Cost of Goods Sold", "Other Expenses and Losses", "Selling Expenses"], "correctIndex": 2, "explanation": "It is a non-operating item, listed under 'Other Expenses and Losses'."},
  {"type": "mcq", "question": "Bad Debt Expense is usually classified as:", "options": ["Administrative Expense", "Selling Expense", "Cost of Goods Sold", "Other Expense"], "correctIndex": 0, "explanation": "While sometimes debated, it is often General/Administrative (credit management), though some classify it as Selling."},
  {"type": "mcq", "question": "Net Sales minus Cost of Goods Sold equals:", "options": ["Net Income", "Income from Operations", "Gross Profit", "Total Expenses"], "correctIndex": 2, "explanation": "This is the first major subtotal in a Multi-Step statement."},
  {"type": "mcq", "question": "Rent Revenue earned by a merchandising business (not its main line) is:", "options": ["Operating Revenue", "Other Revenues and Gains", "Deducted from Rent Expense", "Added to Gross Sales"], "correctIndex": 1, "explanation": "It is a non-operating revenue source."},
  {"type": "mcq", "question": "Which of the following is NOT an Operating Expense?", "options": ["Salaries Expense", "Advertising Expense", "Interest Expense", "Rent Expense"], "correctIndex": 2, "explanation": "Interest Expense is a financing cost (Non-operating)."},
  {"type": "mcq", "question": "Insurance Expense on the showroom and delivery trucks is a:", "options": ["Administrative Expense", "Selling Expense", "Cost of Goods Sold", "Other Expense"], "correctIndex": 1, "explanation": "These assets are used for selling activities."},
  {"type": "mcq", "question": "Dividends declared are reported on the:", "options": ["Income Statement as an Expense", "Retained Earnings Statement", "Balance Sheet as an Asset", "Cash Flow as Operating"], "correctIndex": 1, "explanation": "Dividends are a distribution of earnings, not an expense on the Income Statement."},
  {"type": "mcq", "question": "The 'Bottom Line' of the income statement is:", "options": ["Gross Profit", "Income from Operations", "Net Income", "Net Sales"], "correctIndex": 2, "explanation": "Net Income is the final result after all revenues and expenses."},
  {"type": "mcq", "question": "Which of the following appears in the 'Other Expenses and Losses' section?", "options": ["Sales Salaries", "Interest Expense", "Depreciation", "Utilities"], "correctIndex": 1, "explanation": "Interest is the most common non-operating expense item."},
  {"type": "mcq", "question": "Legal and Audit fees are typically:", "options": ["Selling Expenses", "Administrative Expenses", "Cost of Goods Sold", "Other Expenses"], "correctIndex": 1, "explanation": "These are general corporate expenses."},
  {"type": "mcq", "question": "The Single-Step income statement emphasizes:", "options": ["Gross Profit", "Total Revenues and Total Expenses", "Operating vs Non-operating", "Departmental performance"], "correctIndex": 1, "explanation": "It focuses on the total inflow and outflow without intermediate profit measures."},
  {"type": "mcq", "question": "Inventory shrinkage is usually reported as:", "options": ["Selling Expense", "Administrative Expense", "Part of COGS", "Other Expense"], "correctIndex": 2, "explanation": "Normal shrinkage is often included in Cost of Goods Sold."},
  {"type": "mcq", "question": "A gain on the sale of a delivery truck is listed under:", "options": ["Revenues", "Gross Profit", "Other Revenues and Gains", "Operating Income"], "correctIndex": 2, "explanation": "It is a non-operating gain."},
  {"type": "mcq", "question": "Sales Salaries and Office Salaries are:", "options": ["Both Selling Expenses", "Both Administrative Expenses", "Selling and Administrative respectively", "Administrative and Selling respectively"], "correctIndex": 2, "explanation": "Sales Salaries = Selling; Office Salaries = Administrative."},
  {"type": "mcq", "question": "If Operating Expenses > Gross Profit, the company has:", "options": ["Net Income", "Operating Loss", "Gross Loss", "Financial Income"], "correctIndex": 1, "explanation": "A negative result at this stage is an Operating Loss."},
  {"type": "mcq", "question": "Which account is NOT closed to Income Summary?", "options": ["Sales", "Rent Expense", "Accumulated Depreciation", "Cost of Goods Sold"], "correctIndex": 2, "explanation": "Accumulated Depreciation is a permanent Balance Sheet account."},
  {"type": "mcq", "question": "In a Multi-Step statement, income tax expense is deducted from:", "options": ["Gross Profit", "Operating Income", "Income Before Tax", "Net Sales"], "correctIndex": 2, "explanation": "It is the final deduction: Income Before Tax - Tax = Net Income."},
  {"type": "mcq", "question": "Freight In is part of:", "options": ["Selling Expenses", "Administrative Expenses", "Cost of Goods Sold", "Other Expenses"], "correctIndex": 2, "explanation": "Freight In increases the cost of purchases (COGS)."},
  {"type": "mcq", "question": "Advertising materials used but not yet expensed are:", "options": ["Selling Expense", "Prepaid Advertising (Asset)", "Administrative Expense", "Supplies Expense"], "correctIndex": 1, "explanation": "Unused supplies are assets (Prepaid/Supplies)."},
  {"type": "mcq", "question": "The primary advantage of the Multi-Step format is:", "options": ["Simplicity", "Shows Gross Profit and Operating Income", "Minimize Taxes", "Easier to prepare"], "correctIndex": 1, "explanation": " It provides better analytical data for decision making."},
  {"type": "mcq", "question": "Which of the following is a Selling Expense?", "options": ["Office Rent", "Store Rent", "Interest Expense", "Legal Fees"], "correctIndex": 1, "explanation": "Rent for the retail space is a Selling Expense."},
  {"type": "mcq", "question": "Income from Operations excludes:", "options": ["Selling Expenses", "Administrative Expenses", "Cost of Goods Sold", "Interest Expense"], "correctIndex": 3, "explanation": "Interest is deducted *after* Income from Operations."},
  {"type": "mcq", "question": "Stationery and printing costs for the accounting department are:", "options": ["Selling Expenses", "Administrative Expenses", "COGS", "Other Expenses"], "correctIndex": 1, "explanation": "Accounting is an administrative function."},
  {"type": "mcq", "question": "Which is an Operating Expense?", "options": ["Loss on fire", "Interest Expense", "Depreciation of Store Equipment", "Dividend Payment"], "correctIndex": 2, "explanation": "Depreciation of assets used in operations is an Operating Expense."},
  {"type": "mcq", "question": "Under the Single-Step format, Gross Profit is:", "options": ["Shown as a distinct line item", "Not shown", "The bottom line", "The first line"], "correctIndex": 1, "explanation": "It is not calculated or displayed."},
  {"type": "mcq", "question": "Travel expenses for sales representatives are:", "options": ["Administrative Expenses", "Selling Expenses", "Travel Revenue", "Other Expenses"], "correctIndex": 1, "explanation": "Directly related to sales activities."},
  {"type": "mcq", "question": "Postage expense for billing customers is typically:", "options": ["Selling Expense", "Administrative Expense", "COGS", "Other Expense"], "correctIndex": 1, "explanation": "General office/billing functions are Administrative."},
  {"type": "mcq", "question": "Property taxes on the corporate headquarters building are:", "options": ["Selling Expense", "Administrative Expense", "Tax Expense", "COGS"], "correctIndex": 1, "explanation": "Headquarters costs are Administrative."},
  {"type": "mcq", "question": "Which section comes first in a Multi-Step Income Statement?", "options": ["Operating Expenses", "Other Revenues and Gains", "Cost of Goods Sold calculation", "Gross Profit"], "correctIndex": 2, "explanation": "Net Sales and COGS are the top section."},
  {"type": "mcq", "question": "Sales Discounts are:", "options": ["Operating Expenses", "Deducted from Sales to get Net Sales", "Other Expenses", "Administrative Expenses"], "correctIndex": 1, "explanation": "Contra-revenue account."},
  {"type": "mcq", "question": "If Net Sales are X and Gross Profit is Y, what is COGS?", "options": ["X + Y", "X - Y", "Y - X", "X * Y"], "correctIndex": 1, "explanation": "Net Sales - COGS = Gross Profit, so Net Sales - Gross Profit = COGS."},
  {"type": "mcq", "question": "Repairs on the delivery van are:", "options": ["Administrative Expense", "Selling Expense", "Cost of Goods Sold", "Other Expense"], "correctIndex": 1, "explanation": "Delivery is a selling function."},
  {"type": "mcq", "question": "The total of Selling and Administrative Expenses is called:", "options": ["Total Expenses", "Operating Expenses", "Cost of Sales", "Other Expenses"], "correctIndex": 1, "explanation": "These two categories make up Operating Expenses."},
  {"type": "mcq", "question": "Amortization of Intangible Assets used in administration is:", "options": ["Selling Expense", "Administrative Expense", "Other Expense", "COGS"], "correctIndex": 1, "explanation": "Administrative expense."},
  {"type": "mcq", "question": "A Single-Step Income Statement separates expenses into:", "options": ["Operating and Non-operating", "Selling and Administrative", "Variable and Fixed", "No specific categories (just a list)"], "correctIndex": 3, "explanation": "It usually just lists all expenses (except sometimes tax) in one group."},
  {"type": "mcq", "question": "Cost of Goods Sold is an expense that:", "options": ["Varies directly with sales volume", "Is fixed", "Is non-operating", "Is an administrative cost"], "correctIndex": 0, "explanation": "It is a variable cost directly tied to the sale of inventory."},
  {"type": "mcq", "question": "Net Income + Operating Expenses =", "options": ["Net Sales", "Gross Profit", "Total Revenues", "Impossible to know"], "correctIndex": 1, "explanation": "Working backwards: Gross Profit - Op Exp = Net Income (ignoring other items)."},
  {"type": "mcq", "question": "Which is 'Income from Continuing Operations'?", "options": ["Net Income before discontinued operations", "Gross Profit", "Sales", "Retained Earnings"], "correctIndex": 0, "explanation": "It is the profit from the ongoing business segments."},
  {"type": "problem", "question": "Calculate Total Selling Expenses: Sales Salaries ₱50,000; Store Rent ₱20,000; Advertising ₱5,000; Office Salaries ₱30,000.", "answer": "₱75,000", "explanation": "50,000 + 20,000 + 5,000 = 75,000. Office Salaries are Administrative.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Administrative Expenses: Office Salaries ₱40,000; Office Utilities ₱5,000; Sales Commissions ₱15,000; Depreciation (Office Equip) ₱3,000.", "answer": "₱48,000", "explanation": "40,000 + 5,000 + 3,000 = 48,000. Commissions are Selling.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Income from Operations: Gross Profit ₱100,000; Selling Exp ₱30,000; Admin Exp ₱20,000.", "answer": "₱50,000", "explanation": "100,000 - 30,000 - 20,000 = 50,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income (Multi-Step): Operations Income ₱60,000; Interest Revenue ₱5,000; Interest Expense ₱2,000.", "answer": "₱63,000", "explanation": "60,000 + 5,000 - 2,000 = 63,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Expenses (Single-Step): COGS ₱150,000; Operating Expenses ₱50,000; Interest Expense ₱5,000.", "answer": "₱205,000", "explanation": "Single Step lumps all expenses: 150,000 + 50,000 + 5,000 = 205,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Sales ₱500,000; Sales Returns ₱20,000; COGS ₱300,000.", "answer": "₱180,000", "explanation": "Net Sales (480,000) - COGS (300,000) = 180,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Total Revenues ₱200,000; Total Expenses ₱140,000.", "answer": "₱60,000", "explanation": "200,000 - 140,000 = 60,000.", "isCurrency": true},
  {"type": "problem", "question": "Allocation: Rent is ₱20,000. Store occupies 80%, Office 20%. How much is Admin Expense?", "answer": "₱4,000", "explanation": "20,000 * 0.20 = 4,000.", "isCurrency": true},
  {"type": "problem", "question": "Allocation: Utilities ₱10,000. Allocated 60% Selling, 40% Admin. How much is Selling Expense?", "answer": "₱6,000", "explanation": "10,000 * 0.60 = 6,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Income Before Tax: Operating Income ₱80,000; Loss on Sale of Asset ₱10,000.", "answer": "₱70,000", "explanation": "80,000 - 10,000 = 70,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Income Before Tax ₱50,000; Tax Rate 30%.", "answer": "₱35,000", "explanation": "Tax = 15,000. 50,000 - 15,000 = 35,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Sales needed for ₱100k Gross Profit if COGS is ₱200k.", "answer": "₱300,000", "explanation": "Sales - 200,000 = 100,000. Sales = 300,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Operating Expenses: Gross Profit ₱90,000; Net Income ₱40,000 (No other items).", "answer": "₱50,000", "explanation": "90,000 - X = 40,000. X = 50,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Freight Out: Total Selling Exp ₱40,000; Sales Salaries ₱30,000; Advertising ₱5,000; Freight Out is the rest.", "answer": "₱5,000", "explanation": "40,000 - 30,000 - 5,000 = 5,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate COGS: Single Step Total Exp ₱500,000; Operating Exp ₱200,000; Interest ₱50,000.", "answer": "₱250,000", "explanation": "Total - Op - Interest = COGS. 500 - 200 - 50 = 250.", "isCurrency": true},
  {"type": "problem", "question": "Multi-Step: Gross Profit ₱40k; Selling Exp ₱15k; Admin Exp ₱10k; Interest Exp ₱2k. Calculate Net Income.", "answer": "₱13,000", "explanation": "40 - 15 - 10 = 15 (Op Inc). 15 - 2 = 13.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Inventory: GAS ₱100,000; Net Sales ₱120,000; Gross Profit ₱40,000.", "answer": "₱20,000", "explanation": "COGS = 120 - 40 = 80. GAS 100 - End Inv = 80. End Inv = 20.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Sales Returns: Gross Sales ₱200k; Net Sales ₱190k; Discounts ₱4k.", "answer": "₱6,000", "explanation": "200 - X - 4 = 190. 196 - X = 190. X = 6.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit Margin: Sales ₱100,000; COGS ₱60,000.", "answer": "40%", "explanation": "GP = 40,000. 40,000/100,000 = 40%.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Operating Expenses % of Sales: Sales ₱200k; Op Exp ₱50k.", "answer": "25%", "explanation": "50,000 / 200,000 = 0.25.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Depreciation (Selling): Total Depreciation ₱10,000. 70% used for delivery vans.", "answer": "₱7,000", "explanation": "10,000 * 0.70 = 7,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Other Expenses: Interest Exp ₱5,000; Loss on Sale ₱2,000; Sales Salaries ₱20,000.", "answer": "₱7,000", "explanation": "Interest + Loss = 7,000. Salaries are Operating.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Profit ₱50k; Total Op Exp ₱60k.", "answer": "-₱10,000", "explanation": "50,000 - 60,000 = (10,000) Net Loss.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Sales Commissions: 5% of Net Sales ₱500,000.", "answer": "₱25,000", "explanation": "500,000 * 0.05 = 25,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Supplies Expense (Admin): Purchased ₱5,000; Remaining ₱1,000. All used in office.", "answer": "₱4,000", "explanation": "5,000 - 1,000 = 4,000.", "isCurrency": true},
  {"type": "problem", "question": "Single Step: Revenues ₱100k; Cost of Sales ₱40k; Selling ₱20k; Admin ₱10k. Net Income?", "answer": "₱30,000", "explanation": "100 - (40+20+10) = 30.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Bad Debts (Admin): 1% of Credit Sales ₱200,000.", "answer": "₱2,000", "explanation": "200,000 * 0.01 = 2,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Revenues: Net Sales ₱50,000; Interest Income ₱2,000; Gain on Sale ₱3,000.", "answer": "₱55,000", "explanation": "50 + 2 + 3 = 55.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Operating Income ₱100k; Tax Rate 25%.", "answer": "₱75,000", "explanation": "100,000 * 0.75 = 75,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Profit Margin: Net Income ₱20,000; Net Sales ₱100,000.", "answer": "20%", "explanation": "20,000 / 100,000 = 20%.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Goods Available for Sale: COGS ₱40,000; Ending Inv ₱10,000.", "answer": "₱50,000", "explanation": "40,000 + 10,000 = 50,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Sales: Net Sales ₱88,000; Returns ₱12,000.", "answer": "₱100,000", "explanation": "88,000 + 12,000 = 100,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Operating Expenses: Gross Profit ₱50k; Operating Income ₱10k.", "answer": "₱40,000", "explanation": "50,000 - 40,000 = 10,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Office Salaries: Total Admin Exp ₱50,000; Rent ₱10,000; Utilities ₱5,000; Office Salaries is the rest.", "answer": "₱35,000", "explanation": "50 - 10 - 5 = 35.", "isCurrency": true},
  {"type": "problem", "question": "Calculate COGS: Beginning Inv ₱5k; Purchases ₱25k; Ending Inv ₱8k.", "answer": "₱22,000", "explanation": "5 + 25 - 8 = 22.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Sales ₱10; COGS ₱4; Selling ₱2; Admin ₱1.", "answer": "₱3", "explanation": "10 - 4 - 2 - 1 = 3.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Other Revenues: Interest Revenue ₱500; Dividend Revenue ₱200; Sales ₱10,000.", "answer": "₱700", "explanation": "500 + 200 = 700. Sales is Operating.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Rent Expense (Selling): Total Rent ₱12,000. Store is 2,000 sq ft, Office is 1,000 sq ft.", "answer": "₱8,000", "explanation": "Store is 2/3 of space. 12,000 * (2/3) = 8,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Operating Income: Sales ₱100k; COGS ₱60k; Total Expenses ₱30k (includes ₱5k interest).", "answer": "₱15,000", "explanation": "Op Exp = 30 - 5 = 25. GP = 40. 40 - 25 = 15.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Gross Profit ₱20k; Selling ₱5k; Admin ₱5k; Gain on Sale ₱2k.", "answer": "₱12,000", "explanation": "20 - 5 - 5 + 2 = 12.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Advertising Expense: 2% of Gross Sales ₱300,000.", "answer": "₱6,000", "explanation": "300,000 * 0.02 = 6,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Expenses (Multi-step logic): COGS ₱50; Selling ₱10; Admin ₱10; Tax ₱5.", "answer": "₱75", "explanation": "50 + 10 + 10 + 5 = 75.", "isCurrency": true},
  {"type": "problem", "question": "Calculate EBIT (Earnings Before Interest and Taxes): Net Income ₱20,000; Tax ₱5,000; Interest ₱2,000.", "answer": "₱27,000", "explanation": "20 + 5 + 2 = 27.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Purchases: COGS ₱80k; Beg Inv ₱10k; End Inv ₱10k.", "answer": "₱80,000", "explanation": "80 = 10 + P - 10. P = 80.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Sales: Sales ₱50k; Sales Discounts ₱1k; Purchase Discounts ₱2k.", "answer": "₱49,000", "explanation": "50 - 1 = 49. Purchase Discounts affect COGS, not Sales.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Insurance Expense: Prepaid Ins Beg ₱1,000; Paid ₱2,000; End ₱500.", "answer": "₱2,500", "explanation": "1,000 + 2,000 - 500 = 2,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Operating Expenses: Total Exp ₱100k; COGS ₱60k; Interest ₱5k.", "answer": "₱35,000", "explanation": "100 - 60 - 5 = 35.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Gross Profit: Net Sales ₱150,000; Mark up on cost is 50%.", "answer": "₱50,000", "explanation": "Sales = Cost * 1.5. Cost = 150,000 / 1.5 = 100,000. GP = 150 - 100 = 50.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Sales ₱200; Expenses ₱150; Dividends ₱20.", "answer": "₱50", "explanation": "200 - 150 = 50. Dividends are not an expense.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Selling & Admin: Op Income ₱20,000; Gross Profit ₱55,000.", "answer": "₱35,000", "explanation": "55,000 - 20,000 = 35,000.", "isCurrency": true}
            ]
        },
        {
    "day": "Day 3",
    "topic": "Statement of Changes in Equity and Balance Sheet",
    "content": `
        <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500 mb-8">
            <p class="font-bold text-teal-900">Learning Goal</p>
            <p class="text-teal-800">Understand the flow of financial information: how the Statement of Changes in Equity connects the Net Income from the Income Statement to the final Equity balance on the Balance Sheet.</p>
        </div>

        <section class="mb-12">
            <h3 class="text-xl font-bold text-gray-800 mb-3">1. The Statement of Changes in Equity</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
                The Statement of Changes in Equity tracks the movement of the owner's claim on the business assets over a specific reporting period. It acts as the vital bridge between the Income Statement and the Balance Sheet by carrying forward the results of operations. Specifically, the <strong>Net Income</strong> (or Net Loss) calculated on the Income Statement is transferred here and added to the beginning capital balance.
            </p>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 class="font-bold text-gray-700 mb-4 border-b pb-2">Data Flow: Worksheet to Equity Statement</h4>
                <div class="grid xl:grid-cols-2 gap-8 items-start">
                    
                    <div class="border border-gray-300 rounded shadow-sm overflow-hidden">
                        <div class="bg-gray-100 p-2 font-bold text-xs text-center text-gray-600 uppercase tracking-wider">
                            Source: 10-Column Worksheet (Hai Company)
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs font-mono">
                                <thead>
                                    <tr class="bg-gray-50 border-b">
                                        <th class="p-2 text-left">Account</th>
                                        <th class="p-2 text-center border-l bg-red-50 text-red-900">Inc. Stat (Net Inc)</th>
                                        <th class="p-2 text-center border-l bg-blue-50 text-blue-900" colspan="2">Balance Sheet</th>
                                    </tr>
                                    <tr class="bg-gray-50 border-b text-[10px]">
                                        <th class="p-1"></th>
                                        <th class="p-1 border-l text-center">Result</th>
                                        <th class="p-1 border-l text-center w-16">Debit</th>
                                        <th class="p-1 text-center w-16">Credit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b"><td class="p-1 pl-2">Hai, Capital (Beg)</td><td class="border-l bg-gray-50"></td><td class="border-l"></td><td class="text-right bg-yellow-100 font-bold">472,580</td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2">Hai, Drawings</td><td class="border-l bg-gray-50"></td><td class="border-l text-right bg-red-100 font-bold">36,000</td><td class="text-right"></td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2 text-gray-500 italic">... (Other Accts) ...</td><td class="border-l bg-gray-50"></td><td class="border-l"></td><td class="text-right"></td></tr>
                                    <tr class="bg-green-50 font-bold border-t-2 border-black"><td class="p-1 pl-2">Net Income</td><td class="border-l text-center text-green-700">74,215</td><td class="border-l"></td><td class="text-right text-green-700">74,215</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="border border-teal-300 rounded shadow-sm overflow-hidden relative">
                        <div class="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                        <div class="bg-teal-50 p-2 font-bold text-xs text-center text-teal-900 uppercase tracking-wider">
                            Output: Statement of Changes in Equity
                        </div>
                        <div class="p-4 text-xs font-mono text-gray-800 bg-white">
                            <div class="font-bold text-center mb-1">Hai Company</div>
                            <div class="text-center mb-1">Statement of Changes in Equity</div>
                            <div class="text-center italic mb-4 text-gray-500">For the year ended December 31, 2023</div>

                            <div class="flex justify-between mb-1">
                                <span>Hai Capital, Beginning</span> 
                                <span class="bg-yellow-100 px-1">472,580.00</span>
                            </div>
                            <div class="flex justify-between mb-1 text-green-700">
                                <span>Add: Net Income</span> 
                                <span class="border-b border-gray-400 font-bold">74,215.00</span>
                            </div>
                            <div class="flex justify-between mb-2 font-bold">
                                <span>Total</span> 
                                <span>546,795.00</span>
                            </div>
                            <div class="flex justify-between mb-2 text-red-700">
                                <span>Less: Drawings</span> 
                                <span class="bg-red-100 px-1">(36,000.00)</span>
                            </div>
                            <div class="border-b border-black mb-1"></div>
                            <div class="flex justify-between font-bold text-sm bg-teal-50 p-1">
                                <span>Hai Capital, Ending</span> 
                                <span class="border-b-4 border-double border-black">510,795.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-3">2. The Statement of Financial Position (Balance Sheet)</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
                The Balance Sheet reports the financial condition of the company as of a specific date. For a merchandising business, the key addition is the <strong>Merchandise Inventory</strong> account in the Current Assets section. The <strong>Ending Capital</strong> figure derived from the Statement of Changes in Equity is used in the Owner's Equity section.
            </p>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 class="font-bold text-gray-700 mb-4 border-b pb-2">Data Flow: Worksheet to Balance Sheet</h4>
                
                <div class="grid xl:grid-cols-2 gap-8 items-start">
                    <div class="border border-gray-300 rounded shadow-sm overflow-hidden">
                        <div class="bg-gray-100 p-2 font-bold text-xs text-center text-gray-600 uppercase tracking-wider">
                            Source: Worksheet (Balance Sheet Cols)
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs font-mono">
                                <thead>
                                    <tr class="bg-blue-50 border-b">
                                        <th class="p-2 text-left">Account</th>
                                        <th class="p-2 text-center border-l w-20">Debit</th>
                                        <th class="p-2 text-center border-l w-20">Credit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b"><td class="p-1 pl-2">Cash</td><td class="border-l text-right">67,500</td><td class="border-l"></td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2">Accts Receivable</td><td class="border-l text-right">22,000</td><td class="border-l"></td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2 font-bold text-blue-700">Merch. Inventory</td><td class="border-l text-right font-bold text-blue-700">350,000</td><td class="border-l"></td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2">Building</td><td class="border-l text-right">113,000</td><td class="border-l"></td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2">Accum. Depr.</td><td class="border-l"></td><td class="border-l text-right">22,500</td></tr>
                                    <tr class="border-b"><td class="p-1 pl-2">Accounts Payable</td><td class="border-l"></td><td class="border-l text-right">25,000</td></tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="border border-blue-300 rounded shadow-sm overflow-hidden relative">
                        <div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        <div class="bg-blue-50 p-2 font-bold text-xs text-center text-blue-900 uppercase tracking-wider">
                            Output: Statement of Financial Position
                        </div>
                        <div class="p-4 text-xs font-mono text-gray-800 bg-white">
                            <div class="font-bold text-center mb-1">Hai Company</div>
                            <div class="text-center mb-4">Statement of Financial Position</div>

                            <div class="font-bold underline mb-1">ASSETS</div>
                            <div class="pl-2 mb-2">
                                <div class="font-semibold italic">Current Assets</div>
                                <div class="flex justify-between pl-2"><span>Cash</span> <span>67,500</span></div>
                                <div class="flex justify-between pl-2"><span>Accounts Receivable</span> <span>22,000</span></div>
                                <div class="flex justify-between pl-2 font-bold text-blue-700 bg-blue-50"><span>Merchandise Inventory</span> <span>350,000</span></div>
                                <div class="flex justify-between pl-2 border-t border-gray-300 mt-1 font-bold"><span>Total Current Assets</span> <span>449,475</span></div>
                            </div>
                            
                            <div class="pl-2 mb-4">
                                <div class="font-semibold italic">Non-Current Assets</div>
                                <div class="flex justify-between pl-2"><span>Building</span> <span>113,000</span></div>
                                <div class="flex justify-between pl-2"><span>Less: Accum. Depr.</span> <span>(22,500)</span></div>
                                <div class="flex justify-between pl-2 border-t border-gray-300 mt-1 font-bold"><span>Net Book Value</span> <span>90,500</span></div>
                            </div>
                            
                            <div class="flex justify-between font-bold text-sm bg-gray-100 p-1 mb-4 border-y-2 border-black">
                                <span>TOTAL ASSETS</span> <span>539,975</span>
                            </div>

                            <div class="font-bold underline mb-1">LIABILITIES & EQUITY</div>
                            <div class="pl-2 mb-2">
                                <div class="flex justify-between pl-2"><span>Accounts Payable</span> <span>25,000</span></div>
                                <div class="flex justify-between pl-2"><span>Accrued Expense</span> <span>4,180</span></div>
                                <div class="flex justify-between pl-2 border-t border-gray-300 mt-1 font-bold"><span>Total Liabilities</span> <span>29,180</span></div>
                            </div>
                            
                            <div class="pl-2 mb-2">
                                <div class="flex justify-between pl-2 bg-teal-50">
                                    <span>Hai Capital, Ending</span> 
                                    <span class="font-bold text-teal-700">510,795</span>
                                </div>
                                <div class="text-[10px] text-gray-500 text-right italic">(From SCE)</div>
                            </div>

                            <div class="flex justify-between font-bold text-sm bg-gray-100 p-1 border-y-2 border-black">
                                <span>TOTAL LIAB. & EQUITY</span> <span>539,975</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `,
            exercises: [
  {"type": "mcq", "question": "What is the primary purpose of the Statement of Changes in Equity?", "options": ["To show cash inflows and outflows", "To show the profitability of the company", "To explain the changes in owner's equity during a period", "To list all assets and liabilities"], "correctIndex": 2, "explanation": "It details the movements in equity accounts (capital/retained earnings) between the beginning and end of the period."},
  {"type": "mcq", "question": "Which of the following increases Owner's Equity?", "options": ["Net Loss", "Owner's Drawings", "Net Income", "Dividends"], "correctIndex": 2, "explanation": "Net Income adds to the accumulated earnings of the business, increasing equity."},
  {"type": "mcq", "question": "Which of the following decreases Owner's Equity?", "options": ["Additional Investments", "Net Income", "Owner's Withdrawals", "Revenue"], "correctIndex": 2, "explanation": "Withdrawals represent the owner taking assets out of the business, reducing their claim."},
  {"type": "mcq", "question": "The starting point for the Statement of Changes in Equity is:", "options": ["Net Income", "Ending Capital", "Beginning Capital", "Total Assets"], "correctIndex": 2, "explanation": "The statement reconciles the Beginning Capital to the Ending Capital."},
  {"type": "mcq", "question": "Net Income is transferred to the Statement of Changes in Equity from which financial statement?", "options": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Trial Balance"], "correctIndex": 1, "explanation": "The 'bottom line' of the Income Statement becomes an addition in the Equity statement."},
  {"type": "mcq", "question": "If a business incurs a Net Loss, how is it treated in the Statement of Changes in Equity?", "options": ["Added to Beginning Capital", "Deducted from Beginning Capital", "Ignored", "Added to Drawings"], "correctIndex": 1, "explanation": "A loss reduces the owner's equity and is deducted."},
  {"type": "mcq", "question": "The ending balance calculated in the Statement of Changes in Equity flows to the:", "options": ["Income Statement", "Statement of Cash Flows", "Balance Sheet", "Ledger"], "correctIndex": 2, "explanation": "It appears in the Owner's Equity section of the Balance Sheet."},
  {"type": "mcq", "question": "In a sole proprietorship, 'Additional Paid-in Capital' is usually recorded as:", "options": ["Revenue", "Direct increase to Capital account", "Liability", "Gain"], "correctIndex": 1, "explanation": "Investments by the owner are credited directly to the Owner's Capital account."},
  {"type": "mcq", "question": "Which equation represents the Statement of Changes in Equity?", "options": ["Beg Capital + Assets - Liabilities = End Capital", "Beg Capital + Net Income - Withdrawals + Investments = End Capital", "Revenue - Expenses = Net Income", "Assets = Liabilities + Equity"], "correctIndex": 1, "explanation": "This formula summarizes the movements in equity."},
  {"type": "mcq", "question": "Dividends declared by a corporation are equivalent to what in a sole proprietorship?", "options": ["Salaries Expense", "Net Loss", "Owner's Drawings", "Investments"], "correctIndex": 2, "explanation": "Both represent the distribution of earnings to owners."},
  {"type": "mcq", "question": "A prior period error correction resulting in a decrease in income is reported as:", "options": ["An expense in the current Income Statement", "A deduction from Beginning Equity", "A liability", "A withdrawal"], "correctIndex": 1, "explanation": "Material errors from prior periods adjust the beginning equity balance (Retained Earnings)."},
  {"type": "mcq", "question": "Which account is NOT found in the Statement of Changes in Equity?", "options": ["Owner, Capital", "Net Income", "Cash", "Owner, Drawings"], "correctIndex": 2, "explanation": "Cash is an Asset found on the Balance Sheet and Statement of Cash Flows."},
  {"type": "mcq", "question": "If Beginning Capital is overstated, and all other figures are correct, Ending Capital will be:", "options": ["Understated", "Overstated", "Correct", "Zero"], "correctIndex": 1, "explanation": "Since Ending Capital is derived from Beginning Capital, the error carries forward."},
  {"type": "mcq", "question": "The issuance of new shares in a corporation affects equity by:", "options": ["Decreasing it", "Increasing it", "No effect", "Creating a liability"], "correctIndex": 1, "explanation": "Selling shares brings in assets and increases Total Equity (Share Capital)."},
  {"type": "mcq", "question": "Owner's investments of non-cash assets (e.g., equipment) are valued at:", "options": ["Original cost to the owner", "Fair Market Value", "Book Value", "Zero"], "correctIndex": 1, "explanation": "Investments are recorded at their fair market value at the time of investment."},
  {"type": "mcq", "question": "Which of the following does NOT affect Owner's Equity directly?", "options": ["Paying a liability", "Owner investing cash", "Earning a profit", "Owner withdrawing cash"], "correctIndex": 0, "explanation": "Paying a liability reduces Assets and Liabilities (Cash and AP) but does not change Equity."},
  {"type": "mcq", "question": "Comprehensive Income includes:", "options": ["Net Income only", "Net Income and Other Comprehensive Income (OCI)", "Gross Profit", "Retained Earnings"], "correctIndex": 1, "explanation": "It captures all non-owner changes in equity, including OCI items."},
  {"type": "mcq", "question": "Retained Earnings represents:", "options": ["Cash available for dividends", "Total assets", "Accumulated profits not yet distributed", "Investments by stockholders"], "correctIndex": 2, "explanation": "It is the cumulative net income less cumulative dividends."},
  {"type": "mcq", "question": "If Net Income is $0 and there are no investments or withdrawals, Ending Capital will:", "options": ["Increase", "Decrease", "Equal Beginning Capital", "Be zero"], "correctIndex": 2, "explanation": "Without any changing factors, the balance remains static."},
  {"type": "mcq", "question": "Treasury Stock (in a corporation) is presented as:", "options": ["An Asset", "A Liability", "A deduction from Equity", "Revenue"], "correctIndex": 2, "explanation": "It represents shares bought back by the company, reducing total equity."},
  {"type": "mcq", "question": "The 'Statement of Retained Earnings' is a specific type of:", "options": ["Income Statement", "Balance Sheet", "Statement of Changes in Equity", "Cash Flow"], "correctIndex": 2, "explanation": "It focuses solely on the Retained Earnings component of equity."},
  {"type": "mcq", "question": "Which transaction creates a credit entry to the Owner's Capital account?", "options": ["Net Loss", "Drawings", "Additional Investment", "Expenses"], "correctIndex": 2, "explanation": "Equity accounts have a normal credit balance; investments increase equity."},
  {"type": "mcq", "question": "Which transaction creates a debit entry to the Retained Earnings account?", "options": ["Net Income", "Declaration of Dividends", "Issuance of Stock", "Revenue"], "correctIndex": 1, "explanation": "Dividends reduce Retained Earnings, so they are debited."},
  {"type": "mcq", "question": "If Ending Equity is greater than Beginning Equity, and there were no investments, it implies:", "options": ["Net Loss > Drawings", "Net Income > Drawings", "Drawings > Net Income", "Liabilities increased"], "correctIndex": 1, "explanation": "Profit must have exceeded withdrawals to grow equity without new investment."},
  {"type": "mcq", "question": "Changes in accounting estimates are handled:", "options": ["Retrospectively (adjusting beginning equity)", "Prospectively (in current and future income)", "As a liability", "As a withdrawal"], "correctIndex": 1, "explanation": "Estimates are adjusted in the current period's Income Statement, affecting current Net Income."},
  {"type": "mcq", "question": "The format 'Statement of Changes in Partners' Equity' is used for:", "options": ["Sole Proprietorships", "Partnerships", "Corporations", "Non-profits"], "correctIndex": 1, "explanation": "It tracks the capital balances of multiple partners."},
  {"type": "mcq", "question": "Withdrawals of merchandise by the owner for personal use should be recorded as:", "options": ["Expense", "Sales", "Drawings", "Loss"], "correctIndex": 2, "explanation": "It is a withdrawal of assets (inventory), recorded at cost."},
  {"type": "mcq", "question": "Usually, the Statement of Changes in Equity is prepared:", "options": ["Before the Income Statement", "After the Income Statement but before the Balance Sheet", "After the Balance Sheet", "Daily"], "correctIndex": 1, "explanation": "It needs Net Income (from IS) and provides Ending Capital (to BS)."},
  {"type": "mcq", "question": "Donated Capital is a form of:", "options": ["Revenue", "Additional Paid-in Capital", "Retained Earnings", "Liability"], "correctIndex": 1, "explanation": "It increases equity but is not earned through operations."},
  {"type": "mcq", "question": "If Liabilities increase and Assets remain constant, Equity must:", "options": ["Increase", "Decrease", "Stay the same", "Double"], "correctIndex": 1, "explanation": "A = L + E. If L goes up and A is fixed, E must go down to balance."},
  {"type": "problem", "question": "Calculate Ending Capital: Beg Capital ₱100,000; Net Income ₱50,000; Drawings ₱20,000.", "answer": "₱130,000", "explanation": "100,000 + 50,000 - 20,000 = 130,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Beg Capital ₱50,000; End Capital ₱70,000; Drawings ₱10,000; No Investments.", "answer": "₱30,000", "explanation": "70,000 = 50,000 + NI - 10,000. NI = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Owner's Drawings: Beg Capital ₱80,000; End Capital ₱95,000; Net Income ₱25,000; No Investments.", "answer": "₱10,000", "explanation": "95,000 = 80,000 + 25,000 - D. 95k = 105k - D. D = 10,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Additional Investment: Beg Capital ₱20,000; End Capital ₱60,000; Net Income ₱15,000; Drawings ₱5,000.", "answer": "₱30,000", "explanation": "60,000 = 20,000 + 15,000 - 5,000 + I. 60k = 30k + I. I = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Loss: Beg Capital ₱40,000; End Capital ₱30,000; Drawings ₱5,000; No Investments.", "answer": "₱5,000", "explanation": "30,000 = 40,000 - Loss - 5,000. 30k = 35k - Loss. Loss = 5,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Change in Equity: Net Income ₱12,000; Drawings ₱15,000.", "answer": "-₱3,000", "explanation": "12,000 (Increase) - 15,000 (Decrease) = -3,000 (Decrease).", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Retained Earnings: Beg RE ₱50,000; Net Income ₱20,000; Dividends ₱10,000.", "answer": "₱60,000", "explanation": "50,000 + 20,000 - 10,000 = 60,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Dividends Declared: Beg RE ₱100,000; End RE ₱110,000; Net Income ₱40,000.", "answer": "₱30,000", "explanation": "110,000 = 100,000 + 40,000 - Div. 110k = 140k - Div. Div = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Beginning Capital: End Capital ₱200,000; Net Income ₱60,000; Drawings ₱10,000.", "answer": "₱150,000", "explanation": "200,000 = Beg + 60,000 - 10,000. 200k = Beg + 50k. Beg = 150,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Equity: Share Capital ₱500,000; Retained Earnings ₱200,000; Treasury Stock ₱50,000.", "answer": "₱650,000", "explanation": "500,000 + 200,000 - 50,000 = 650,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Comprehensive Income: Net Income ₱80,000; Unrealized Gain on Investments ₱5,000.", "answer": "₱85,000", "explanation": "80,000 + 5,000 = 85,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Adjusted Beginning Equity: Reported Beg Equity ₱100,000; Correction of prior period error (overstatement of profit) ₱10,000.", "answer": "₱90,000", "explanation": "100,000 - 10,000 = 90,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Capital after Investment: Beg Cap ₱50k; Investment of Cash ₱10k; Investment of Equipment ₱15k.", "answer": "₱75,000", "explanation": "50,000 + 10,000 + 15,000 = 75,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Decrease in Equity: Net Loss ₱8,000; Drawings ₱2,000; Investment ₱5,000.", "answer": "₱5,000", "explanation": "-8,000 - 2,000 + 5,000 = -5,000 (Decrease).", "isCurrency": true},
  {"type": "problem", "question": "Calculate Owner's Capital End: Assets ₱150,000; Liabilities ₱60,000.", "answer": "₱90,000", "explanation": "Equity = Assets - Liabilities = 150,000 - 60,000 = 90,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Capital: Beg Cap ₱10,000; Revenues ₱50,000; Expenses ₱35,000; Drawings ₱5,000.", "answer": "₱20,000", "explanation": "Net Income = 50k - 35k = 15k. End = 10k + 15k - 5k = 20,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Prior Period Adjustment: Beg RE (Restated) ₱90,000; Beg RE (Original) ₱100,000.", "answer": "-₱10,000", "explanation": "90,000 - 100,000 = -10,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Changes in Equity: Issue of Shares ₱100k; Net Income ₱50k; Dividends ₱20k.", "answer": "₱130,000", "explanation": "100,000 + 50,000 - 20,000 = 130,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Drawings: Owner withdraws ₱1,000 cash per month for a year.", "answer": "₱12,000", "explanation": "1,000 * 12 = 12,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Equity: Beg Equity ₱0 (New Business); Owner invests ₱50,000; First year Net Loss ₱5,000.", "answer": "₱45,000", "explanation": "0 + 50,000 - 5,000 = 45,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Investment: Owner deposits personal car into business (Fair Value ₱20,000; Cost ₱30,000).", "answer": "₱20,000", "explanation": "Investments are recorded at Fair Value.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Retained Earnings Balance: Beg ₱10k; Net Income ₱5k; Dividends ₱2k; Prior Period Adjustment (Credit) ₱1k.", "answer": "₱14,000", "explanation": "10k + 1k (Adj) + 5k (NI) - 2k (Div) = 14,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Capital: Beg ₱100,000. Owner withdraws 20% of beginning capital.", "answer": "₱80,000", "explanation": "Withdrawal = 20,000. 100,000 - 20,000 = 80,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Change in Equity +₱40,000; Investments ₱10,000; Drawings ₱0.", "answer": "₱30,000", "explanation": "Change (40) = Inv (10) + NI - Draw (0). NI = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Drawings: Beg Cap ₱50k; End Cap ₱50k; Net Income ₱10k.", "answer": "₱10,000", "explanation": "Since Cap didn't change, Drawings must equal Net Income. 50 = 50 + 10 - D.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Equity: Common Stock ₱10,000; Preferred Stock ₱5,000; Retained Earnings ₱15,000.", "answer": "₱30,000", "explanation": "10,000 + 5,000 + 15,000 = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Capital: Beg Cap ₱200,000; Net Loss ₱10,000; Drawings ₱5,000.", "answer": "₱185,000", "explanation": "200,000 - 10,000 - 5,000 = 185,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Missing Figure (Investment): Beg ₱100; End ₱150; Net Inc ₱20; Draw ₱10.", "answer": "₱40", "explanation": "150 = 100 + 20 - 10 + I. 150 = 110 + I. I = 40.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income: Sales ₱100k; COGS ₱60k; Expenses ₱20k. (Used for Equity calculation).", "answer": "₱20,000", "explanation": "100 - 60 - 20 = 20,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Final Equity: Beg ₱50k; Owner takes ₱5k cash and ₱2k merchandise.", "answer": "₱43,000", "explanation": "Total Drawings = 7,000. 50,000 - 7,000 = 43,000.", "isCurrency": true},
                {"type": "mcq", "question": "Which Balance Sheet format lists Assets on the left side and Liabilities/Equity on the right side?", "options": ["Report Format", "Account Format", "Single-Step Format", "Multi-Step Format"], "correctIndex": 1, "explanation": "The Account Format resembles a T-account with side-by-side presentation."},
  {"type": "mcq", "question": "The Report Format of the Balance Sheet presents accounts in what orientation?", "options": ["Horizontally", "Vertically", "Diagonally", "Randomly"], "correctIndex": 1, "explanation": "It lists Assets at the top, followed by Liabilities, then Equity below, in a vertical layout."},
  {"type": "mcq", "question": "Which of the following is the defining characteristic of a Current Asset?", "options": ["Useful life over 1 year", "Converted to cash or used within one year or operating cycle", "Intangible nature", "Held for investment purposes"], "correctIndex": 1, "explanation": "Current assets are liquid assets expected to be realized within 12 months."},
  {"type": "mcq", "question": "Merchandise Inventory is reported on the Balance Sheet at:", "options": ["Selling Price", "Net Realizable Value or Cost (whichever is lower)", "Future Value", "Scrap Value"], "correctIndex": 1, "explanation": "Inventory is valued at the lower of cost or net realizable value (LCNRV)."},
  {"type": "mcq", "question": "Which of the following is a Non-Current Asset?", "options": ["Accounts Receivable", "Prepaid Rent", "Store Equipment", "Office Supplies"], "correctIndex": 2, "explanation": "Equipment is a long-term tangible asset (Property, Plant, and Equipment)."},
  {"type": "mcq", "question": "Unearned Revenue is classified as a:", "options": ["Current Asset", "Current Liability", "Revenue", "Owner's Equity"], "correctIndex": 1, "explanation": "It represents an obligation to deliver goods/services in the future, typically within a year."},
  {"type": "mcq", "question": "The fundamental accounting equation used in the Balance Sheet is:", "options": ["Assets = Liabilities + Equity", "Assets + Liabilities = Equity", "Revenue - Expenses = Net Income", "Assets = Liabilities - Equity"], "correctIndex": 0, "explanation": "Assets must always equal the sum of claims (Liabilities and Equity) against them."},
  {"type": "mcq", "question": "Which account reduces the book value of Property, Plant, and Equipment?", "options": ["Depreciation Expense", "Accumulated Depreciation", "Maintenance Expense", "Equipment Payable"], "correctIndex": 1, "explanation": "Accumulated Depreciation is a contra-asset account deducted from the related asset."},
  {"type": "mcq", "question": "In a merchandising business, 'Accounts Payable' usually arises from:", "options": ["Borrowing from a bank", "Purchasing inventory on credit", "Selling goods on credit", "Paying salaries"], "correctIndex": 1, "explanation": "Accounts Payable is the liability created when buying merchandise or supplies on account."},
  {"type": "mcq", "question": "The Statement of Changes in Equity bridges which two statements?", "options": ["Balance Sheet and Cash Flow", "Income Statement and Balance Sheet", "Income Statement and Cash Flow", "Trial Balance and Ledger"], "correctIndex": 1, "explanation": "It takes Net Income from the IS and updates the Capital account for the BS."},
  {"type": "mcq", "question": "Which item appears in the Statement of Changes in Equity as a deduction?", "options": ["Net Income", "Additional Investments", "Owner's Drawings", "Revenues"], "correctIndex": 2, "explanation": "Drawings represent the owner taking resources out of the business, reducing equity."},
  {"type": "mcq", "question": "Notes Payable due in 24 months is classified as:", "options": ["Current Liability", "Non-Current Liability", "Current Asset", "Equity"], "correctIndex": 1, "explanation": "Obligations due beyond one year are Non-Current."},
  {"type": "mcq", "question": "Prepaid Insurance is a(n):", "options": ["Expense", "Current Liability", "Current Asset", "Non-Current Asset"], "correctIndex": 2, "explanation": "It represents a future economic benefit (coverage) usually expiring within a year."},
  {"type": "mcq", "question": "Which of these is NOT a Current Asset?", "options": ["Cash", "Inventory", "Accounts Receivable", "Land"], "correctIndex": 3, "explanation": "Land is a Non-Current Asset (PPE) as it is not consumed or sold in the normal cycle."},
  {"type": "mcq", "question": "Total Equity is calculated as:", "options": ["Total Assets + Total Liabilities", "Total Assets - Total Liabilities", "Current Assets - Current Liabilities", "Net Income + Sales"], "correctIndex": 1, "explanation": "This is a rearrangement of the accounting equation (A = L + OE -> OE = A - L)."},
  {"type": "mcq", "question": "Current portion of Long-Term Debt is reported as:", "options": ["Non-Current Liability", "Current Liability", "Equity", "Expense"], "correctIndex": 1, "explanation": "The portion of debt due within the next 12 months is reclassified as Current."},
  {"type": "mcq", "question": "Which account is listed first under Current Assets?", "options": ["Inventory", "Accounts Receivable", "Cash and Cash Equivalents", "Prepaid Expense"], "correctIndex": 2, "explanation": "Assets are listed in order of liquidity; Cash is the most liquid."},
  {"type": "mcq", "question": "Accumulated Depreciation is presented in the Balance Sheet:", "options": ["Under Liabilities", "As a deduction from Current Assets", "As a deduction from Non-Current Assets", "Under Equity"], "correctIndex": 2, "explanation": "It is deducted from the specific Non-Current Asset (PPE) to show Net Book Value."},
  {"type": "mcq", "question": "Net Income from the Income Statement affects which section of the Balance Sheet?", "options": ["Current Assets", "Non-Current Liabilities", "Owner's Equity", "Current Liabilities"], "correctIndex": 2, "explanation": "Net Income increases Owner's Equity (specifically Capital/Retained Earnings)."},
  {"type": "mcq", "question": "Accrued Salaries Payable is a:", "options": ["Current Asset", "Current Liability", "Expense", "Non-Current Liability"], "correctIndex": 1, "explanation": "It is a short-term obligation to pay employees."},
  {"type": "mcq", "question": "A net loss for the period will:", "options": ["Increase Assets", "Increase Equity", "Decrease Equity", "Decrease Liabilities"], "correctIndex": 2, "explanation": "Net Loss reduces the owner's claim on the business assets."},
  {"type": "mcq", "question": "Which is an intangible asset?", "options": ["Inventory", "Building", "Patent", "Cash"], "correctIndex": 2, "explanation": "Patents lack physical substance and are non-current intangible assets."},
  {"type": "mcq", "question": "Working Capital is defined as:", "options": ["Total Assets - Total Liabilities", "Current Assets - Current Liabilities", "Cash - Current Liabilities", "Equity + Liabilities"], "correctIndex": 1, "explanation": "Working Capital measures short-term liquidity."},
  {"type": "mcq", "question": "The 'Owner, Capital' account balance at the end of the year is found on:", "options": ["Income Statement only", "Statement of Changes in Equity and Balance Sheet", "Balance Sheet only", "Cash Flow Statement only"], "correctIndex": 1, "explanation": "It is calculated in the SCE and the final balance is carried to the BS."},
  {"type": "mcq", "question": "If a company uses the Report Form, 'Total Liabilities and Owner's Equity' appears:", "options": ["At the bottom", "On the right side", "On the left side", "It does not appear"], "correctIndex": 0, "explanation": "In Report form, it is the final total at the bottom of the vertical list."},
  {"type": "mcq", "question": "Office Supplies on hand are a(n):", "options": ["Expense", "Current Asset", "Non-Current Asset", "Liability"], "correctIndex": 1, "explanation": "Unused supplies are assets; they become expenses when used."},
  {"type": "mcq", "question": "Mortgage Payable is typically a:", "options": ["Current Asset", "Current Liability", "Non-Current Liability", "Equity"], "correctIndex": 2, "explanation": "Mortgages are usually long-term debts."},
  {"type": "mcq", "question": "Which of the following increases Owner's Equity?", "options": ["Drawings", "Net Loss", "Additional Investment", "Payment of Liabilities"], "correctIndex": 2, "explanation": "Investments by the owner add to the capital."},
  {"type": "mcq", "question": "Customer deposits for future orders are recorded as:", "options": ["Accounts Receivable", "Unearned Revenue", "Sales Revenue", "Prepaid Expense"], "correctIndex": 1, "explanation": "It is a liability (Unearned Revenue) until the goods are delivered."},
  {"type": "mcq", "question": "The heading of a Balance Sheet includes:", "options": ["Period Ended", "For the Year Ended", "As of [Date]", "For the Month Ended"], "correctIndex": 2, "explanation": "The Balance Sheet is a snapshot at a specific point in time ('As of')."},
  {"type": "mcq", "question": "Allowance for Doubtful Accounts is a:", "options": ["Liability", "Expense", "Contra-Asset", "Equity"], "correctIndex": 2, "explanation": "It reduces the book value of Accounts Receivable."},
  {"type": "mcq", "question": "Copyrights are classified under:", "options": ["Current Assets", "Property, Plant, and Equipment", "Non-Current Assets (Intangible)", "Other Assets"], "correctIndex": 2, "explanation": "Copyrights are long-term rights (Intangible Assets)."},
  {"type": "mcq", "question": "Accounts Receivable represents:", "options": ["Money owed by the business", "Money owed to the business by customers", "Cash in bank", "Prepaid expenses"], "correctIndex": 1, "explanation": "It is the right to receive cash in the future from sales on credit."},
  {"type": "mcq", "question": "A debit balance in the Asset account indicates:", "options": ["Decrease", "Normal Balance", "Error", "Liability"], "correctIndex": 1, "explanation": "Assets normally have debit balances."},
  {"type": "mcq", "question": "Which statement about the Statement of Changes in Equity is TRUE?", "options": ["It reports cash flows", "It shows the financial position", "It explains the change in owner's capital during the period", "It details all revenues and expenses"], "correctIndex": 2, "explanation": "It details why Capital changed (Income, Loss, Investments, Drawings)."},
  {"type": "mcq", "question": "Cost of Goods Sold appears on the Balance Sheet. (True/False)", "options": ["True", "False", "Only in Perpetual System", "Only in Periodic System"], "correctIndex": 1, "explanation": "COGS is an Income Statement account, not a Balance Sheet account."},
  {"type": "mcq", "question": "Furniture and Fixtures are:", "options": ["Current Assets", "Non-Current Assets", "Liabilities", "Expenses"], "correctIndex": 1, "explanation": "They are long-term tangible assets used in operations."},
  {"type": "mcq", "question": "If Total Assets increase and Total Liabilities stay the same, Equity must:", "options": ["Decrease", "Stay the same", "Increase", "Become zero"], "correctIndex": 2, "explanation": "A = L + E. If A goes up and L is constant, E must go up."},
  {"type": "mcq", "question": "Bank Overdraft is generally classified as:", "options": ["Current Asset (negative)", "Current Liability", "Non-Current Liability", "Expense"], "correctIndex": 1, "explanation": "It is a short-term obligation to the bank."},
  {"type": "mcq", "question": "Assets are listed in the Balance Sheet in order of:", "options": ["Magnitude", "Alphabetical order", "Liquidity", "Age"], "correctIndex": 2, "explanation": "Standard reporting standard is order of liquidity."},
  {"type": "mcq", "question": "The residual interest in the assets of the enterprise after deducting all its liabilities is:", "options": ["Revenue", "Net Income", "Equity", "Expense"], "correctIndex": 2, "explanation": "This is the definition of Equity."},
  {"type": "mcq", "question": "Which is a 'Real' or 'Permanent' account?", "options": ["Sales", "Rent Expense", "Accounts Payable", "Income Summary"], "correctIndex": 2, "explanation": "Balance Sheet accounts (Assets, Liabilities, Equity) are permanent."},
  {"type": "mcq", "question": "Notes Receivable due in 6 months is:", "options": ["Current Asset", "Non-Current Asset", "Current Liability", "Revenue"], "correctIndex": 0, "explanation": "Receivables due within a year are Current Assets."},
  {"type": "mcq", "question": "When an owner withdraws cash, the immediate effect on the Balance Sheet is:", "options": ["Decrease Assets, Decrease Liabilities", "Decrease Assets, Decrease Equity", "Increase Liabilities, Decrease Equity", "No change"], "correctIndex": 1, "explanation": "Cash (Asset) decreases and Capital (Equity) decreases."},
  {"type": "mcq", "question": "Retained Earnings (in a corporation) or Accumulated Capital (in a sole prop) represents:", "options": ["Cash held", "Accumulated profits not distributed", "Total Revenue", "Investments"], "correctIndex": 1, "explanation": "It represents the earnings kept in the business."},
  {"type": "mcq", "question": "Long-term Investment in Stocks is a:", "options": ["Current Asset", "Non-Current Asset", "Equity", "Liability"], "correctIndex": 1, "explanation": "Investments held for >1 year are Non-Current."},
  {"type": "mcq", "question": "Interest Payable is a:", "options": ["Expense", "Current Liability", "Asset", "Income"], "correctIndex": 1, "explanation": "Accrued interest to be paid is a liability."},
  {"type": "mcq", "question": "Land held for speculation (not used in operations) is classified as:", "options": ["PPE", "Investment Property / Long-term Investment", "Inventory", "Intangible Asset"], "correctIndex": 1, "explanation": "If not used in operations, it is an Investment, not PPE."},
  {"type": "mcq", "question": "Which of the following is NOT a characteristic of a liability?", "options": ["Present obligation", "Arises from past events", "Requires future outflow of resources", "Must be paid in cash only"], "correctIndex": 3, "explanation": "Liabilities can be settled by transferring other assets or providing services, not just cash."},
  {"type": "mcq", "question": "Total Liabilities + Total Equity equals:", "options": ["Net Income", "Total Assets", "Working Capital", "Current Assets"], "correctIndex": 1, "explanation": "The other side of the accounting equation."},
  {"type": "problem", "question": "Calculate Total Current Assets: Cash ₱10,000; AR ₱5,000; Inventory ₱8,000; Supplies ₱2,000; Equipment ₱50,000.", "answer": "₱25,000", "explanation": "10,000 + 5,000 + 8,000 + 2,000 = 25,000. Equipment is Non-Current.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Book Value of Vehicle: Cost ₱800,000; Accumulated Depreciation ₱250,000.", "answer": "₱550,000", "explanation": "800,000 - 250,000 = 550,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Assets: Current Assets ₱150,000; PPE ₱300,000; Intangible Assets ₱50,000.", "answer": "₱500,000", "explanation": "150,000 + 300,000 + 50,000 = 500,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Owner's Capital: Beg Capital ₱100,000; Net Income ₱40,000; Drawings ₱10,000.", "answer": "₱130,000", "explanation": "100,000 + 40,000 - 10,000 = 130,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Liabilities: Accounts Payable ₱20,000; Notes Payable (Short-term) ₱10,000; Mortgage Payable ₱100,000.", "answer": "₱130,000", "explanation": "20,000 + 10,000 + 100,000 = 130,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Equity: Assets ₱1,000,000; Liabilities ₱400,000.", "answer": "₱600,000", "explanation": "1,000,000 - 400,000 = 600,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Working Capital: Current Assets ₱80,000; Current Liabilities ₱30,000.", "answer": "₱50,000", "explanation": "80,000 - 30,000 = 50,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Non-Current Assets: Land ₱200,000; Building ₱500,000; Accum Depr - Bldg ₱100,000; Inventory ₱50,000.", "answer": "₱600,000", "explanation": "Land (200k) + Net Bldg (400k) = 600,000. Inventory is Current.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Current Liabilities: Accounts Payable ₱15,000; Salaries Payable ₱5,000; Unearned Revenue ₱2,000; Note Payable (due in 2 years) ₱20,000.", "answer": "₱22,000", "explanation": "15,000 + 5,000 + 2,000 = 22,000. Note Payable is Non-Current.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Accounts Receivable: Accounts Receivable ₱50,000; Allowance for Doubtful Accounts ₱3,000.", "answer": "₱47,000", "explanation": "50,000 - 3,000 = 47,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Change in Equity: Net Income ₱25,000; Additional Investment ₱5,000; Drawings ₱2,000.", "answer": "₱28,000", "explanation": "Increase of 25,000 + 5,000 - 2,000 = 28,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Assets: Liability ₱50,000; Equity ₱75,000.", "answer": "₱125,000", "explanation": "50,000 + 75,000 = 125,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Merchandise Inventory: Current Assets ₱100,000; Cash ₱20,000; AR ₱30,000; Prepaids ₱5,000. (Only other item is Inventory).", "answer": "₱45,000", "explanation": "100,000 - 20,000 - 30,000 - 5,000 = 45,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Non-Current Liabilities: Mortgage Payable ₱150,000; Bonds Payable ₱200,000; Accounts Payable ₱50,000.", "answer": "₱350,000", "explanation": "150,000 + 200,000 = 350,000. AP is Current.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Income given Equity change: Beg Equity ₱50,000; End Equity ₱70,000; Drawings ₱5,000; No investments.", "answer": "₱25,000", "explanation": "End = Beg + NI - Draw. 70 = 50 + NI - 5. 70 = 45 + NI. NI = 25.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Liabilities and Equity: Total Assets are ₱900,000.", "answer": "₱900,000", "explanation": "Assets = Liabilities + Equity.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Prepaid Insurance (End): Beg Bal ₱2,000; Paid ₱6,000; Expensed ₱5,000.", "answer": "₱3,000", "explanation": "2,000 + 6,000 - 5,000 = 3,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cost of Land: Purchase Price ₱500,000; Broker Commission ₱20,000; Demolition of old shack ₱10,000.", "answer": "₱530,000", "explanation": "All costs to get land ready for use are capitalized: 500k + 20k + 10k = 530,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Accounts Payable End: Beg AP ₱10,000; Purchases on credit ₱40,000; Payments to suppliers ₱35,000.", "answer": "₱15,000", "explanation": "10,000 + 40,000 - 35,000 = 15,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net PPE: Gross PPE ₱1,200,000; Accumulated Depreciation ₱400,000.", "answer": "₱800,000", "explanation": "1,200,000 - 400,000 = 800,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Current Ratio: Current Assets ₱200,000; Current Liabilities ₱100,000.", "answer": "2.0", "explanation": "200,000 / 100,000 = 2.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Owner's Drawings: Beg Cap ₱20,000; NI ₱10,000; End Cap ₱25,000.", "answer": "₱5,000", "explanation": "25 = 20 + 10 - D. 25 = 30 - D. D = 5.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Liabilities: Assets ₱80,000; Equity ₱35,000.", "answer": "₱45,000", "explanation": "80,000 - 35,000 = 45,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Equity after loss: Beg Cap ₱100,000; Net Loss ₱20,000; Drawings ₱0.", "answer": "₱80,000", "explanation": "100,000 - 20,000 = 80,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cash Balance: Total Assets ₱150,000; Non-Cash Assets ₱120,000.", "answer": "₱30,000", "explanation": "150,000 - 120,000 = 30,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Accrued Interest Payable: Loan ₱100,000; 10% interest; 3 months accrued.", "answer": "₱2,500", "explanation": "100,000 * 0.10 * 3/12 = 2,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Quick Assets: Cash ₱5,000; AR ₱4,000; Inventory ₱6,000; Prepaids ₱1,000.", "answer": "₱9,000", "explanation": "Quick Assets = Cash + AR. Inventory and Prepaids are excluded. 5,000 + 4,000 = 9,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Debt Ratio: Total Liabilities ₱500,000; Total Assets ₱1,000,000.", "answer": "50%", "explanation": "500,000 / 1,000,000 = 0.50 or 50%.", "isCurrency": false},
  {"type": "problem", "question": "Calculate Supplies Expense: Beg Supplies ₱500; Purchased ₱1,500; End Supplies ₱800.", "answer": "₱1,200", "explanation": "(500 + 1,500) - 800 = 1,200.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Intangible Assets: Patents ₱20,000; Trademarks ₱15,000; Goodwill ₱10,000.", "answer": "₱45,000", "explanation": "20,000 + 15,000 + 10,000 = 45,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Unearned Revenue (End): Beg ₱4,000; Received ₱10,000; Earned ₱12,000.", "answer": "₱2,000", "explanation": "4,000 + 10,000 - 12,000 = 2,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Interest Receivable: Note amount ₱50,000; 6%; 6 months.", "answer": "₱1,500", "explanation": "50,000 * 0.06 * 6/12 = 1,500.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Current Assets: Cash ₱10k; AR ₱20k; Equipment ₱100k; Inventory ₱30k.", "answer": "₱60,000", "explanation": "10 + 20 + 30 = 60.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Depreciation Expense (SL): Cost ₱100,000; Salvage ₱10,000; Life 9 years.", "answer": "₱10,000", "explanation": "(100,000 - 10,000) / 9 = 10,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Accumulated Depreciation (Year 2): Depreciation is ₱5,000 per year.", "answer": "₱10,000", "explanation": "5,000 * 2 = 10,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Book Value: Cost ₱50,000; Year 1 Depr ₱5,000; Year 2 Depr ₱5,000.", "answer": "₱40,000", "explanation": "50,000 - 10,000 = 40,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Ending Capital: Beg ₱10; Inv ₱5; Net Loss ₱2; Draw ₱1.", "answer": "₱12", "explanation": "10 + 5 - 2 - 1 = 12.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Liabilities: Current ₱40,000; Non-Current ₱60,000.", "answer": "₱100,000", "explanation": "40,000 + 60,000 = 100,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Net Assets: Total Assets ₱200,000; Total Liabilities ₱80,000.", "answer": "₱120,000", "explanation": "Net Assets = Equity = A - L = 120,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Cash from Equity: If Owner invests ₱50,000 cash, how much does Cash increase?", "answer": "₱50,000", "explanation": "Direct increase.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Decrease in Equity: Net Loss ₱5,000; Drawings ₱3,000.", "answer": "₱8,000", "explanation": "Both reduce equity. Total reduction = 8,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Notes Payable (Current): Total Note ₱100,000; ₱10,000 payable each year. How much is Current Liability?", "answer": "₱10,000", "explanation": "Only the portion due in the next 12 months is Current.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Notes Payable (Non-Current): Total Note ₱100,000; ₱10,000 current portion.", "answer": "₱90,000", "explanation": "100,000 - 10,000 = 90,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Inventory: Sales ₱200k; GP ₱50k; GAS ₱180k. Find End Inv.", "answer": "₱30,000", "explanation": "COGS = 150k. End Inv = GAS - COGS = 180 - 150 = 30.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Assets: Equity ₱10; Liab ₱20.", "answer": "₱30", "explanation": "10 + 20 = 30.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Office Equipment Net: Cost ₱50,000; Accum Depr ₱45,000.", "answer": "₱5,000", "explanation": "50,000 - 45,000 = 5,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Operating Cycle Assets: Cash ₱5; AR ₱5; Inv ₱5; Land ₱100.", "answer": "₱15", "explanation": "Operating cycle assets are Current Assets: 5+5+5=15.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Owner's Investment: End Cap ₱50k; Beg Cap ₱40k; NI ₱5k; Draw ₱0.", "answer": "₱5,000", "explanation": "50 = 40 + 5 + Inv. 50 = 45 + Inv. Inv = 5.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Equity: Share Capital ₱100k; Retained Earnings ₱50k.", "answer": "₱150,000", "explanation": "100,000 + 50,000 = 150,000.", "isCurrency": true},
  {"type": "problem", "question": "Calculate Total Liabilities & Equity: Assets ₱77,000.", "answer": "₱77,000", "explanation": "Must equal Assets.", "isCurrency": true}
]
        },
        {
    day: "Day 4",
    topic: "Financial Statement - Practice",
    content: `...`,
    exercises: merchTransactionPracData.map(ex => ({ 
        ...ex, 
        type: "financialStatement" // <--- Override type here so app.js renders FS tab
    }))
}
    ]
};
