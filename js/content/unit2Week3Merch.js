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
    {
        type: "mcq",
        question: "In a Periodic Inventory System worksheet, the amount shown for Merchandise Inventory in the Trial Balance columns represents:",
        options: ["Ending Inventory", "Beginning Inventory", "Cost of Goods Sold", "Net Purchases"],
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
    },
    ...merchTransactionPracData
]
        },
        // ... (Keep Day 2, Day 3, and Day 4 objects exactly as they were in the previous code) ...
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
