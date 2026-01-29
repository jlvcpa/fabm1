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
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                                </marker>
                                <marker id="arrowheadBlue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <h4 class="font-bold text-gray-800 mb-2">Completed Worksheet: Direct Extension Method</h4>
                    <div class="w-full overflow-x-auto border border-gray-300 rounded-lg mb-6 bg-white">
                        <svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" style="font-family: monospace; font-size: 10px;">
                            <style>
                                .header { fill: #374151; font-weight: bold; text-anchor: middle; alignment-baseline: middle; }
                                .cell { fill: none; stroke: #e5e7eb; stroke-width: 1px; }
                                .num { text-anchor: end; }
                                .acct { text-anchor: start; font-family: sans-serif; }
                                .total-row { font-weight: bold; fill: #f9fafb; }
                                .net-income { font-weight: bold; fill: #ecfdf5; }
                                .highlight-inv { fill: #fef2f2; }
                            </style>
                            
                            <rect x="0" y="0" width="900" height="60" fill="#f3f4f6" />
                            <rect x="200" y="20" width="120" height="40" fill="#e5e7eb" /> <rect x="320" y="20" width="120" height="40" fill="#fef3c7" /> <rect x="560" y="20" width="140" height="40" fill="#fee2e2" /> <rect x="700" y="20" width="140" height="40" fill="#dbeafe" /> <text x="100" y="40" class="header" font-family="sans-serif">Account Titles</text>
                            <text x="260" y="32" class="header" font-family="sans-serif">Trial Balance</text>
                            <text x="230" y="50" class="header">Dr</text><text x="290" y="50" class="header">Cr</text>
                            <text x="380" y="32" class="header" font-family="sans-serif">Adjustments</text>
                            <text x="350" y="50" class="header">Dr</text><text x="410" y="50" class="header">Cr</text>
                            <text x="500" y="32" class="header" font-family="sans-serif">Adjusted TB</text>
                            <text x="470" y="50" class="header">Dr</text><text x="530" y="50" class="header">Cr</text>
                            <text x="630" y="32" class="header" font-family="sans-serif">Income Statement</text>
                            <text x="600" y="50" class="header">Dr</text><text x="660" y="50" class="header">Cr</text>
                            <text x="770" y="32" class="header" font-family="sans-serif">Balance Sheet</text>
                            <text x="740" y="50" class="header">Dr</text><text x="800" y="50" class="header">Cr</text>

                            <g transform="translate(0, 75)">
                                <text x="10" y="0" class="acct">Cash</text><text x="250" y="0" class="num">180,000</text><text x="760" y="0" class="num">180,000</text>
                                <text x="10" y="20" class="acct">Accounts Receivable</text><text x="250" y="0" transform="translate(0,20)" class="num">550,000</text><text x="760" y="0" transform="translate(0,20)" class="num">550,000</text>
                                <rect x="0" y="30" width="900" height="20" class="highlight-inv" fill-opacity="0.5"/>
                                <text x="10" y="45" class="acct" font-weight="bold">Merch. Inventory</text>
                                <text x="250" y="45" class="num">285,000</text>
                                <text x="620" y="45" class="num" fill="#991b1b" font-weight="bold">285,000</text> <text x="680" y="45" class="num" fill="#166534" font-weight="bold">350,000</text> <text x="760" y="45" class="num" fill="#1e40af" font-weight="bold">350,000</text> <text x="10" y="65" class="acct">Store Equipment</text><text x="250" y="65" class="num">1,200,000</text><text x="760" y="65" class="num">1,200,000</text>
                                <text x="10" y="85" class="acct">Accum. Dep - Store Eq.</text><text x="310" y="85" class="num">180,000</text><text x="430" y="85" class="num">60,000</text><text x="820" y="85" class="num">240,000</text>
                                <text x="10" y="105" class="acct">Accounts Payable</text><text x="310" y="105" class="num">385,000</text><text x="820" y="105" class="num">385,000</text>
                                <text x="10" y="125" class="acct">H.Ai, Capital</text><text x="310" y="125" class="num">1,500,000</text><text x="820" y="125" class="num">1,500,000</text>
                                <text x="10" y="145" class="acct">H.Ai, Drawing</text><text x="250" y="145" class="num">100,000</text><text x="760" y="145" class="num">100,000</text>
                                <text x="10" y="165" class="acct">Sales</text><text x="310" y="165" class="num">1,800,000</text><text x="680" y="165" class="num">1,800,000</text>
                                <text x="10" y="185" class="acct">Sales Returns & Allow.</text><text x="250" y="185" class="num">35,000</text><text x="620" y="185" class="num">35,000</text>
                                <text x="10" y="205" class="acct">Purchases</text><text x="250" y="205" class="num">900,000</text><text x="620" y="205" class="num">900,000</text>
                                <text x="10" y="225" class="acct">Purchase Returns & Allow.</text><text x="310" y="225" class="num">28,000</text><text x="680" y="225" class="num">28,000</text>
                                <text x="10" y="245" class="acct">Freight In</text><text x="250" y="245" class="num">20,000</text><text x="620" y="245" class="num">20,000</text>
                                <text x="10" y="265" class="acct">Salaries Expense</text><text x="250" y="265" class="num">350,000</text><text x="620" y="265" class="num">350,000</text>
                                <text x="10" y="285" class="acct">Rent Expense</text><text x="250" y="285" class="num">120,000</text><text x="620" y="285" class="num">120,000</text>
                                <text x="10" y="305" class="acct">Store Supplies Expense</text><text x="250" y="305" class="num">50,000</text><text x="430" y="305" class="num">30,000</text><text x="620" y="305" class="num">20,000</text>
                                <text x="10" y="325" class="acct">Misc. Expense</text><text x="250" y="325" class="num">15,000</text><text x="620" y="325" class="num">15,000</text>
                            </g>

                            <g transform="translate(0, 410)" class="total-row">
                                <rect x="0" y="-10" width="900" height="20" fill="#f9fafb"/>
                                <text x="100" y="0" class="acct">Totals</text>
                                <text x="250" y="0" class="num">3,810,000</text><text x="310" y="0" class="num">3,893,000</text>
                            </g>

                            <g transform="translate(0, 435)">
                                <text x="10" y="0" class="acct" font-style="italic">Adjustments data:</text>
                                <text x="10" y="20" class="acct">Store Supplies (Asset)</text><text x="370" y="20" class="num">30,000</text><text x="760" y="20" class="num">30,000</text>
                                <text x="10" y="40" class="acct">Depreciation Expense</text><text x="370" y="40" class="num">60,000</text><text x="620" y="40" class="num">60,000</text>
                            </g>

                            <g transform="translate(0, 490)" class="total-row">
                                <rect x="0" y="-10" width="900" height="25" fill="#e5e7eb"/>
                                <text x="100" y="5" class="acct">TOTALS</text>
                                <text x="370" y="5" class="num">90,000</text><text x="430" y="5" class="num">90,000</text> <text x="620" y="5" class="num" fill="#991b1b">1,805,000</text><text x="680" y="5" class="num" fill="#166534">2,178,000</text> <text x="760" y="5" class="num" fill="#1e40af">2,410,000</text><text x="820" y="5" class="num" fill="#1e40af">2,125,000</text> </g>

                            <g transform="translate(0, 525)" class="net-income">
                                <rect x="0" y="-10" width="900" height="25" fill="#dcfce7"/>
                                <text x="100" y="5" class="acct" fill="#166534">NET INCOME</text>
                                <text x="620" y="5" class="num" fill="#166534">373,000</text> <text x="820" y="5" class="num" fill="#166534">373,000</text> </g>
                            
                             <g transform="translate(0, 555)" class="total-row" font-weight="bold">
                                <line x1="0" y1="-12" x2="900" y2="-12" stroke="#000" stroke-width="2"/>
                                <text x="620" y="0" class="num">2,178,000</text><text x="680" y="0" class="num">2,178,000</text>
                                <text x="760" y="0" class="num">2,498,000</text><text x="820" y="0" class="num">2,498,000</text>
                                <line x1="0" y1="5" x2="900" y2="5" stroke="#000" stroke-width="2"/>
                            </g>
                            
                            <g stroke="#e5e7eb" stroke-width="1">
                                <line x1="200" y1="60" x2="200" y2="560"/><line x1="260" y1="60" x2="260" y2="420"/><line x1="320" y1="60" x2="320" y2="560"/>
                                <line x1="380" y1="60" x2="380" y2="500"/><line x1="440" y1="60" x2="440" y2="500"/><line x1="560" y1="60" x2="560" y2="560"/>
                                <line x1="640" y1="60" x2="640" y2="560"/><line x1="700" y1="60" x2="700" y2="560"/><line x1="780" y1="60" x2="780" y2="560"/><line x1="840" y1="60" x2="840" y2="560"/>
                            </g>
                        </svg>
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
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                                </marker>
                                <marker id="arrowheadBlue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#1e40af" />
                                </marker>
                                <marker id="arrowheadGreen" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>
                    <div class="mt-2 text-xs text-gray-500 italic mb-6">
                        <strong>Result:</strong> Merchandise Inventory in the Adjusted Trial Balance is now ₱350,000 (Ready for Balance Sheet). Income Summary holds both figures to be sent to Income Statement columns.
                    </div>

                    <h4 class="font-bold text-gray-800 mb-2">Completed Worksheet: Adjustment Method</h4>
                    <div class="w-full overflow-x-auto border border-gray-300 rounded-lg mb-6 bg-white">
                        <svg viewBox="0 0 900 580" xmlns="http://www.w3.org/2000/svg" style="font-family: monospace; font-size: 10px;">
                            <style>
                                .header { fill: #374151; font-weight: bold; text-anchor: middle; alignment-baseline: middle; }
                                .cell { fill: none; stroke: #e5e7eb; stroke-width: 1px; }
                                .num { text-anchor: end; }
                                .acct { text-anchor: start; font-family: sans-serif; }
                                .total-row { font-weight: bold; fill: #f9fafb; }
                                .net-income { font-weight: bold; fill: #ecfdf5; }
                                .highlight-adj { fill: #fefce8; }
                            </style>
                            
                            <rect x="0" y="0" width="900" height="60" fill="#f3f4f6" />
                            <rect x="200" y="20" width="120" height="40" fill="#e5e7eb" /> <rect x="320" y="20" width="120" height="40" fill="#fef3c7" /> <rect x="440" y="20" width="120" height="40" fill="#e0f2fe" /> <rect x="560" y="20" width="140" height="40" fill="#fee2e2" /> <rect x="700" y="20" width="140" height="40" fill="#dbeafe" /> <text x="100" y="40" class="header" font-family="sans-serif">Account Titles</text>
                            <text x="260" y="32" class="header" font-family="sans-serif">Trial Balance</text>
                            <text x="230" y="50" class="header">Dr</text><text x="290" y="50" class="header">Cr</text>
                            <text x="380" y="32" class="header" font-family="sans-serif">Adjustments</text>
                            <text x="350" y="50" class="header">Dr</text><text x="410" y="50" class="header">Cr</text>
                            <text x="500" y="32" class="header" font-family="sans-serif">Adjusted TB</text>
                            <text x="470" y="50" class="header">Dr</text><text x="530" y="50" class="header">Cr</text>
                            <text x="630" y="32" class="header" font-family="sans-serif">Income Statement</text>
                            <text x="600" y="50" class="header">Dr</text><text x="660" y="50" class="header">Cr</text>
                            <text x="770" y="32" class="header" font-family="sans-serif">Balance Sheet</text>
                            <text x="740" y="50" class="header">Dr</text><text x="800" y="50" class="header">Cr</text>

                            <g transform="translate(0, 75)">
                                <text x="10" y="0" class="acct">Cash</text><text x="250" y="0" class="num">180,000</text><text x="490" y="0" class="num">180,000</text><text x="760" y="0" class="num">180,000</text>
                                <text x="10" y="20" class="acct">Accounts Receivable</text><text x="250" y="20" class="num">550,000</text><text x="490" y="20" class="num">550,000</text><text x="760" y="20" class="num">550,000</text>
                                <rect x="0" y="30" width="900" height="20" class="highlight-adj" fill-opacity="0.5"/>
                                <text x="10" y="45" class="acct" font-weight="bold">Merch. Inventory</text>
                                <text x="250" y="45" class="num">285,000</text>
                                <text x="370" y="45" class="num" fill="#166534" font-weight="bold">350,000</text> <text x="430" y="45" class="num" fill="#991b1b" font-weight="bold">285,000</text> <text x="490" y="45" class="num" fill="#0369a1" font-weight="bold">350,000</text> <text x="760" y="45" class="num" fill="#1e40af" font-weight="bold">350,000</text> <text x="10" y="65" class="acct">Store Equipment</text><text x="250" y="65" class="num">1,200,000</text><text x="490" y="65" class="num">1,200,000</text><text x="760" y="65" class="num">1,200,000</text>
                                <text x="10" y="85" class="acct">Accum. Dep - Store Eq.</text><text x="310" y="85" class="num">180,000</text><text x="430" y="85" class="num">60,000</text><text x="550" y="85" class="num">240,000</text><text x="820" y="85" class="num">240,000</text>
                                <text x="10" y="105" class="acct">Accounts Payable</text><text x="310" y="105" class="num">385,000</text><text x="550" y="105" class="num">385,000</text><text x="820" y="105" class="num">385,000</text>
                                <text x="10" y="125" class="acct">H.Ai, Capital</text><text x="310" y="125" class="num">1,500,000</text><text x="550" y="125" class="num">1,500,000</text><text x="820" y="125" class="num">1,500,000</text>
                                <text x="10" y="145" class="acct">H.Ai, Drawing</text><text x="250" y="145" class="num">100,000</text><text x="490" y="145" class="num">100,000</text><text x="760" y="145" class="num">100,000</text>
                                <text x="10" y="165" class="acct">Sales</text><text x="310" y="165" class="num">1,800,000</text><text x="550" y="165" class="num">1,800,000</text><text x="680" y="165" class="num">1,800,000</text>
                                <text x="10" y="185" class="acct">Sales Returns & Allow.</text><text x="250" y="185" class="num">35,000</text><text x="490" y="185" class="num">35,000</text><text x="620" y="185" class="num">35,000</text>
                                <text x="10" y="205" class="acct">Purchases</text><text x="250" y="205" class="num">900,000</text><text x="490" y="205" class="num">900,000</text><text x="620" y="205" class="num">900,000</text>
                                <text x="10" y="225" class="acct">Purchase Returns & Allow.</text><text x="310" y="225" class="num">28,000</text><text x="550" y="225" class="num">28,000</text><text x="680" y="225" class="num">28,000</text>
                                <text x="10" y="245" class="acct">Freight In</text><text x="250" y="245" class="num">20,000</text><text x="490" y="245" class="num">20,000</text><text x="620" y="245" class="num">20,000</text>
                                <text x="10" y="265" class="acct">Salaries Expense</text><text x="250" y="265" class="num">350,000</text><text x="490" y="265" class="num">350,000</text><text x="620" y="265" class="num">350,000</text>
                                <text x="10" y="285" class="acct">Rent Expense</text><text x="250" y="285" class="num">120,000</text><text x="490" y="285" class="num">120,000</text><text x="620" y="285" class="num">120,000</text>
                                <text x="10" y="305" class="acct">Store Supplies Expense</text><text x="250" y="305" class="num">50,000</text><text x="430" y="305" class="num">30,000</text><text x="490" y="305" class="num">20,000</text><text x="620" y="305" class="num">20,000</text>
                                <text x="10" y="325" class="acct">Misc. Expense</text><text x="250" y="325" class="num">15,000</text><text x="490" y="325" class="num">15,000</text><text x="620" y="325" class="num">15,000</text>
                            </g>

                            <g transform="translate(0, 410)" class="total-row">
                                <rect x="0" y="-10" width="900" height="20" fill="#f9fafb"/>
                                <text x="100" y="0" class="acct">Totals</text>
                                <text x="250" y="0" class="num">3,810,000</text><text x="310" y="0" class="num">3,893,000</text>
                            </g>

                            <g transform="translate(0, 435)">
                                <text x="10" y="0" class="acct" font-style="italic">Adjustments data:</text>
                                <text x="10" y="20" class="acct">Store Supplies (Asset)</text><text x="370" y="20" class="num">30,000</text><text x="490" y="20" class="num">30,000</text><text x="760" y="20" class="num">30,000</text>
                                <text x="10" y="40" class="acct">Depreciation Expense</text><text x="370" y="40" class="num">60,000</text><text x="490" y="40" class="num">60,000</text><text x="620" y="40" class="num">60,000</text>
                                <rect x="0" y="50" width="900" height="20" class="highlight-adj" fill-opacity="0.5"/>
                                <text x="10" y="65" class="acct" font-weight="bold">Income Summary</text>
                                <text x="370" y="65" class="num" fill="#991b1b" font-weight="bold">285,000</text> <text x="430" y="65" class="num" fill="#166534" font-weight="bold">350,000</text> <text x="490" y="65" class="num" fill="#0369a1" font-weight="bold">285,000</text> <text x="550" y="65" class="num" fill="#0369a1" font-weight="bold">350,000</text> <text x="620" y="65" class="num" fill="#991b1b" font-weight="bold">285,000</text> <text x="680" y="65" class="num" fill="#166534" font-weight="bold">350,000</text> </g>

                            <g transform="translate(0, 515)" class="total-row">
                                <rect x="0" y="-10" width="900" height="25" fill="#e5e7eb"/>
                                <text x="100" y="5" class="acct">TOTALS</text>
                                <text x="370" y="5" class="num">725,000</text><text x="430" y="5" class="num">725,000</text> <text x="490" y="5" class="num">4,220,000</text><text x="550" y="5" class="num">4,220,000</text> <text x="620" y="5" class="num" fill="#991b1b">1,805,000</text><text x="680" y="5" class="num" fill="#166534">2,178,000</text> <text x="760" y="5" class="num" fill="#1e40af">2,410,000</text><text x="820" y="5" class="num" fill="#1e40af">2,125,000</text> </g>

                            <g transform="translate(0, 550)" class="net-income">
                                <rect x="0" y="-10" width="900" height="25" fill="#dcfce7"/>
                                <text x="100" y="5" class="acct" fill="#166534">NET INCOME</text>
                                <text x="620" y="5" class="num" fill="#166534">373,000</text> <text x="820" y="5" class="num" fill="#166534">373,000</text> </g>
                            
                             <g transform="translate(0, 580)" class="total-row" font-weight="bold">
                                <line x1="0" y1="-12" x2="900" y2="-12" stroke="#000" stroke-width="2"/>
                                <text x="620" y="0" class="num">2,178,000</text><text x="680" y="0" class="num">2,178,000</text>
                                <text x="760" y="0" class="num">2,498,000</text><text x="820" y="0" class="num">2,498,000</text>
                                <line x1="0" y1="5" x2="900" y2="5" stroke="#000" stroke-width="2"/>
                            </g>
                            
                            <g stroke="#e5e7eb" stroke-width="1">
                                <line x1="200" y1="60" x2="200" y2="585"/>
                                <line x1="260" y1="60" x2="260" y2="420"/>
                                <line x1="320" y1="60" x2="320" y2="585"/>
                                <line x1="380" y1="60" x2="380" y2="525"/>
                                <line x1="440" y1="60" x2="440" y2="585"/>
                                <line x1="500" y1="60" x2="500" y2="525"/>
                                <line x1="560" y1="60" x2="560" y2="585"/>
                                <line x1="640" y1="60" x2="640" y2="585"/>
                                <line x1="700" y1="60" x2="700" y2="585"/>
                                <line x1="780" y1="60" x2="780" y2="585"/>
                                <line x1="840" y1="60" x2="840" y2="585"/>
                            </g>
                        </svg>
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
