// Content for Unit 1: Review of Accounting Cycle
// Covers the 10 Steps for a Sole Proprietorship Service Business

export const unit1Data = {
    week1: [
        {
            day: "Day 1",
            topic: "Review: The Recording Phase (Steps 1–5)",
            content: `
                <div class="space-y-8 animate-fade-in">
                    <div class="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                        <h3 class="text-lg font-bold text-indigo-900 mb-2">Phase Overview</h3>
                        <p class="text-indigo-800">Focus: Capturing economic events, analyzing necessary changes, and drafting the preliminary results on a worksheet.</p>
                        
                    </div>

                    <!-- STEP 1 -->
                    <section class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Step 1: Analyze Business Transactions</h3>
                        <p class="mb-4 text-gray-600">Financial accounting begins with identifying economic events. Only transactions measurable in monetary terms affecting financial position are recorded. This relies on <strong>source documents</strong> (invoices, receipts) as objective evidence.</p>
                        
                            <div class="mb-6">
                              <h4 class="font-bold text-slate-700 mb-2">The Accounting Equation</h4>
                                  <p class="text-sm text-gray-600 mb-2">
                                    <strong>Assets = Liabilities + Equity</strong>. Every transaction must keep this in balance.
                                  </p>

                      <!-- Accounting Equation Visual (Balance Scale) -->
                          <div class="img-box" 
                               style="width: 100%; max-width: 450px; margin: 10px auto; display: flex; justify-content: center;">
                                <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                          <!-- Background -->
                              <rect width="400" height="220" fill="#f8fafc" rx="8" />

                      <!-- SCALE STRUCTURE -->
                      <!-- Base -->
                          <path d="M170 190 L230 190 L200 140 Z" fill="#64748b" />
                          <rect x="140" y="190" width="120" height="10" rx="3" fill="#475569" />
                      <!-- Beam -->
                          <rect x="40" y="135" width="320" height="8" rx="4" fill="#94a3b8" />
                      <!-- Center Pivot Circle -->
                          <circle cx="200" cy="140" r="6" fill="#cbd5e0" />

                      <!-- LEFT SIDE: ASSETS (Blue) -->
                           <g transform="translate(60, 60)">
                            <line x1="50" y1="0" x2="50" y2="75" stroke="#cbd5e0" stroke-width="2" />
                            <rect x="0" y="25" width="100" height="80" rx="4" fill="#0038a8" />
                            <text x="50" y="65" font-family="Arial, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="#ffffff">ASSETS</text>
                            <text x="50" y="80" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#bfdbfe">Use of Funds</text>
                          </g>

                      <!-- RIGHT SIDE: LIABILITIES & EQUITY -->
                          <g transform="translate(240, 60)">
                            <line x1="50" y1="0" x2="50" y2="75" stroke="#cbd5e0" stroke-width="2" />
                            <rect x="0" y="25" width="100" height="38" rx="2" fill="#ce1126" />
                            <text x="50" y="48" font-family="Arial, sans-serif" font-weight="bold" font-size="11" text-anchor="middle" fill="#ffffff">LIABILITIES</text>
                            <rect x="0" y="67" width="100" height="38" rx="2" fill="#fbbf24" />
                            <text x="50" y="90" font-family="Arial, sans-serif" font-weight="bold" font-size="11" text-anchor="middle" fill="#78350f">EQUITY</text>

                        <!-- Bracket Label -->
                            <text x="110" y="70" font-family="Arial, sans-serif" font-size="10" fill="#64748b" font-style="italic">
                              <tspan x="110" dy="0">Source</tspan>
                              <tspan x="110" dy="12">of Funds</tspan>
                            </text>
                            <path d="M105 30 L108 30 L108 100 L105 100" fill="none" stroke="#94a3b8" stroke-width="1"/>
                          </g>

                      <!-- VISUAL EQUAL SIGN -->
                         <g transform="translate(200, 90)">
                        <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#cbd5e0" stroke-width="2"/>
                        <text x="0" y="6" font-family="Arial, sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="#334155">=</text>
                      </g>
                    </svg>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-blue-800 text-sm uppercase mb-2"><i class="fas fa-list-ol mr-2"></i>Step-by-Step Guide</h4>
                            <ul class="space-y-1 text-sm text-blue-900 list-disc list-inside">
                                <li><strong>Gather Source Documents:</strong> Collect receipts, invoices, checks.</li>
                                <li><strong>Identify Accounts:</strong> Ask "What did we get? What did we give up?"</li>
                                <li><strong>Classify Accounts:</strong> Asset, Liability, Equity, Revenue, or Expense?</li>
                                <li><strong>Determine Direction:</strong> Increase or Decrease?</li>
                                <li><strong>Apply Rules:</strong> Use Normal Balance rules (e.g., Asset Increase = Debit).</li>
                            </ul>
                        </div>

                </div>

                        
                    </section>

                    <!-- STEP 2 -->
                    <section class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Step 2: Journalize Transactions</h3>
                        <p class="mb-4 text-gray-600">
                          Journalizing transactions involves recording business activities in the <strong>General Journal</strong>, also called the Book of Original Entry. Each entry is written in chronological order to show the sequence of events. The process follows the <strong>Double-Entry System</strong>, where every debit has a corresponding credit. This ensures that the accounting equation remains balanced at all times. Journalizing provides a detailed foundation for posting to the ledger and preparing accurate financial statements.
                        </p>

                       <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 20px 0;">
                            <svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width: 600px;">
                                <!-- Background: Ledger Paper -->
                                <rect width="500" height="230" fill="#ffffff" stroke="#cbd5e0" stroke-width="1" />
                                <rect x="0" y="0" width="500" height="40" fill="#0038a8" /> <!-- Header Bar -->
        
                                <!-- Header Text -->
                                    <text x="250" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="#ffffff">GENERAL JOURNAL</text>
                                    <text x="480" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="10" text-anchor="end" fill="#bfdbfe">Page 1</text>

                                <!-- Column Headers -->
                                    <g transform="translate(0, 40)">
                                <!-- Background strip for columns -->
                                    <rect width="500" height="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>
            
                                <!-- Vertical Dividers (Extended to y2=180 to cover 5 rows + header) -->
                                     <line x1="60" y1="0" x2="60" y2="180" stroke="#94a3b8" stroke-width="0.5" /> <!-- Date end -->
                                    <line x1="300" y1="0" x2="300" y2="180" stroke="#94a3b8" stroke-width="0.5" /> <!-- Title end -->
                                    <line x1="340" y1="0" x2="340" y2="180" stroke="#94a3b8" stroke-width="0.5" /> <!-- PR end -->
                                    <line x1="420" y1="0" x2="420" y2="180" stroke="#94a3b8" stroke-width="0.5" /> <!-- Debit end -->
            
                                <!-- Labels -->
                                    <text x="30" y="17" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">DATE</text>
                                    <text x="180" y="17" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">ACCOUNT TITLE & EXPLANATION</text>
                                    <text x="320" y="17" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">PR</text>
                                    <text x="380" y="17" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">DEBIT</text>
                                    <text x="460" y="17" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">CREDIT</text>
                                    </g>

                            <!-- Journal Entry Rows -->
                                 <g transform="translate(0, 65)" font-family="Courier New, monospace" font-size="12" fill="#1e293b">
                            <!-- Row 1: Year Only -->
                                <text x="30" y="20" text-anchor="middle" font-weight="bold" font-size="11">2023</text>

                            <!-- Row 2: Date and Debit Entry -->
                                <text x="30" y="50" text-anchor="middle" font-weight="bold">Dec 1</text>
                                <text x="70" y="50" font-weight="bold">Cash</text>
                                <text x="410" y="50" text-anchor="end">₱ 100,000</text>
            
                            <!-- Row 3: Credit Entry (Indented) -->
                                <text x="90" y="80" font-weight="bold">Juan, Capital</text> 
                                <text x="490" y="80" text-anchor="end">₱ 100,000</text>
            
                            <!-- Row 4: Explanation (Indented 3 spaces more than Credit) -->
                                <text x="115" y="110" font-style="italic" fill="#64748b" font-family="Arial, sans-serif" font-size="10">(To record initial investment)</text>
            
                            <!-- Row 5: Empty Row (just lines) -->
                                </g>

                            <!-- Horizontal Lines (Notebook style) -->
                                <g stroke="#cbd5e0" stroke-width="0.5" stroke-dasharray="2,2" transform="translate(0, 65)">
                                <line x1="0" y1="30" x2="500" y2="30" />  <!-- End of Row 1 (Year) -->
                                <line x1="0" y1="60" x2="500" y2="60" />  <!-- End of Row 2 (Debit) -->
                                <line x1="0" y1="90" x2="500" y2="90" />  <!-- End of Row 3 (Credit) -->
                                <line x1="0" y1="120" x2="500" y2="120" /> <!-- End of Row 4 (Explanation) -->
                                <line x1="0" y1="150" x2="500" y2="150" /> <!-- End of Row 5 (Empty) -->
                                </g>
        
                            <!-- Bottom Border Accent (Visual closure) -->
                                <rect x="0" y="225" width="500" height="5" fill="#f1f5f9" />
                            </svg>
                        </div>


                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div class="bg-yellow-50 p-3 rounded border border-yellow-200">
                              <span class="font-bold text-yellow-800 block mb-1">Formatting Rules</span>
                              <ul class="list-disc list-inside text-sm text-yellow-900 space-y-1">
                                <li>Debits are listed first, left aligned.</li>
                                <li>Credits are listed below debits and <strong>indented</strong> to the right.</li>
                                <li>Each entry must include a clear <strong>date</strong> at the top.</li>
                                <li>Provide a brief <strong>description</strong> or explanation under the entry.</li>
                                <li>Ensure amounts are properly aligned under their respective Debit or Credit columns for clarity.</li>
                                <li>Total debits must always equal total credits.</li>
                              </ul>
                            </div>
                            <div class="bg-yellow-50 p-3 rounded border border-yellow-200">
                                  <span class="font-bold text-yellow-800 block mb-1">Compound Entry</span>
                                  <ul class="list-disc list-inside text-sm text-yellow-900 space-y-1">
                                  <li>Affects three or more accounts in one transaction.</li>
                                  <li>May include multiple debits and/or multiple credits.</li>
                                  <li>Total debits must equal total credits for balance.</li>
                                  <li>Used to record complex transactions (e.g., payroll, asset purchase with financing).</li>
                                <li>Provides a single, organized record instead of separate simple entries.</li>
                              </ul>
                            </div>
                        </div>
                    </section>

                    <!-- STEP 3 -->
                    <section class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Step 3: Post to the Ledger</h3>
    <!-- Expanded 5-Sentence Paragraph -->
    <p class="mb-4 text-gray-600">
        Posting is the official process of transferring transaction data from the General Journal to the individual accounts in the General Ledger. While the journal records financial events chronologically as they happen, the ledger reorganizes this information topically to track the history of specific items. This step is essential because it updates the running balances of accounts like Cash, Accounts Receivable, and Accounts Payable. The General Ledger is often referred to as the "Book of Final Entry" because it serves as the final destination for transaction details before financial statements are prepared. Ultimately, accurate posting provides the summarized data needed to prove the equality of debits and credits in the trial balance.
    </p>

    <!-- Visual Representation of Posting Process (Journal to Standard Ledger) -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 20px 0;">
        <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width: 700px;">
            <!-- Background -->
            <rect width="700" height="380" fill="#f8fafc" rx="8" />

            <!-- ================= SOURCE: GENERAL JOURNAL (Top) ================= -->
            <g transform="translate(50, 20)">
                <!-- Journal Paper -->
                <rect x="0" y="0" width="600" height="90" fill="#ffffff" stroke="#cbd5e0" stroke-width="1" />
                <rect x="0" y="0" width="600" height="25" fill="#1e293b" /> <!-- Header Bar -->
                <text x="300" y="17" font-family="Arial, sans-serif" font-weight="bold" font-size="12" text-anchor="middle" fill="#ffffff">GENERAL JOURNAL (Page 1)</text>
                
                <!-- Column Headers -->
                <g transform="translate(0, 25)">
                    <rect width="600" height="20" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>
                    <text x="30" y="14" font-size="9" font-weight="bold" fill="#475569">DATE</text>
                    <text x="150" y="14" font-size="9" font-weight="bold" fill="#475569">ACCOUNT TITLE</text>
                    <text x="350" y="14" font-size="9" font-weight="bold" fill="#475569">PR</text>
                    <text x="420" y="14" font-size="9" font-weight="bold" fill="#475569">DEBIT</text>
                    <text x="520" y="14" font-size="9" font-weight="bold" fill="#475569">CREDIT</text>
                    
                    <!-- Vertical Lines -->
                    <line x1="60" y1="0" x2="60" y2="65" stroke="#cbd5e0" stroke-width="1"/>
                    <line x1="330" y1="0" x2="330" y2="65" stroke="#cbd5e0" stroke-width="1"/>
                    <line x1="370" y1="0" x2="370" y2="65" stroke="#cbd5e0" stroke-width="1"/>
                    <line x1="470" y1="0" x2="470" y2="65" stroke="#cbd5e0" stroke-width="1"/>
                </g>

                <!-- Journal Entry Row -->
                <g transform="translate(0, 60)" font-family="Courier New, monospace" font-size="11" fill="#334155">
                    <text x="30" y="0">Dec 1</text>
                    <text x="70" y="0" font-weight="bold">Cash</text>
                    <!-- Highlighted PR field in Journal -->
                    <rect x="335" y="-10" width="30" height="15" fill="#fef08a" opacity="0.5" rx="2"/> 
                    <text x="350" y="0" text-anchor="middle" fill="#ce1126">101</text> <!-- Posted Ref -->
                    
                    <!-- Highlighted Amount in Journal -->
                    <rect x="380" y="-10" width="80" height="15" fill="#bfdbfe" opacity="0.5" rx="2"/>
                    <text x="460" y="0" text-anchor="end" font-weight="bold">100,000</text>
                </g>
            </g>

            <!-- ================= PROCESS: ARROW ================= -->
            <!-- Connecting Arrow from Journal Debit to Ledger Debit -->
            <path d="M490, 80 Q520, 140 400, 240" fill="none" stroke="#0038a8" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrowhead)"/>
            <circle cx="490" cy="80" r="4" fill="#0038a8" />
            <text x="530" y="150" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#0038a8" font-style="italic">Posting...</text>

            <!-- ================= DESTINATION: GENERAL LEDGER (Standard Form) ================= -->
            <g transform="translate(10, 160)">
                <!-- Main Container -->
                <rect x="0" y="0" width="680" height="200" fill="#ffffff" stroke="#cbd5e0" stroke-width="1" />
                
                <!-- Account Header -->
                <rect x="0" y="0" width="680" height="30" fill="#0038a8" />
                <text x="340" y="20" font-family="Arial, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="#ffffff">GENERAL LEDGER</text>
                
                <!-- Account Title & Number -->
                <text x="340" y="50" font-family="Arial, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="#1e293b">CASH</text>
                <text x="670" y="50" font-family="Arial, sans-serif" font-weight="bold" font-size="12" text-anchor="end" fill="#64748b">Acct. No. 101</text>
                
                <!-- TABLE STRUCTURE -->
                <!-- Main Divider (Center Line) -->
                <line x1="340" y1="60" x2="340" y2="200" stroke="#0038a8" stroke-width="2" />
                
                <!-- Header Row Background -->
                <rect x="0" y="60" width="680" height="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>

                <!-- ============ DEBIT SIDE (LEFT - 4 Columns) ============ -->
                <line x1="60" y1="60" x2="60" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- Date -->
                <line x1="230" y1="60" x2="230" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- Particulars -->
                <line x1="270" y1="60" x2="270" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- PR -->
                
                <text x="30" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">DATE</text>
                <text x="145" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">PARTICULARS</text>
                <text x="250" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">PR</text>
                <text x="305" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">DEBIT</text>

                <!-- Posted Entry (Debit) -->
                <g transform="translate(0, 95)" font-family="Courier New, monospace" font-size="11" fill="#334155">
                    <text x="30" y="0" text-anchor="middle">Dec 1</text>
                    <text x="70" y="0">Investment</text>
                    <!-- Highlighted PR field in Ledger -->
                    <rect x="235" y="-10" width="30" height="15" fill="#fef08a" opacity="0.5" rx="2"/>
                    <text x="250" y="0" text-anchor="middle">J-1</text>
                    
                    <!-- Highlighted Amount in Ledger -->
                    <rect x="275" y="-10" width="60" height="15" fill="#bfdbfe" opacity="0.5" rx="2"/>
                    <text x="330" y="0" text-anchor="end" font-weight="bold" fill="#0038a8">100,000</text>
                </g>

                <!-- ============ CREDIT SIDE (RIGHT - 4 Columns) ============ -->
                <line x1="400" y1="60" x2="400" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- Date -->
                <line x1="570" y1="60" x2="570" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- Particulars -->
                <line x1="610" y1="60" x2="610" y2="200" stroke="#cbd5e0" stroke-width="1" /> <!-- PR -->

                <text x="370" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">DATE</text>
                <text x="485" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">PARTICULARS</text>
                <text x="590" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">PR</text>
                <text x="645" y="76" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#475569">CREDIT</text>

                <!-- Horizontal Lines (Rows) -->
                <line x1="0" y1="85" x2="680" y2="85" stroke="#e2e8f0" stroke-width="1" />
                <line x1="0" y1="110" x2="680" y2="110" stroke="#e2e8f0" stroke-width="1" />
                <line x1="0" y1="135" x2="680" y2="135" stroke="#e2e8f0" stroke-width="1" />
                <line x1="0" y1="160" x2="680" y2="160" stroke="#e2e8f0" stroke-width="1" />
            </g>

            <!-- Arrow Marker Definition -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#0038a8" />
                </marker>
            </defs>
        </svg>
    </div>

                        <div class="bg-green-50 p-4 rounded-lg mt-4">
                            <h4 class="font-bold text-green-800 text-sm uppercase mb-2">Cross-Referencing (PR)</h4>
                            <p class="text-sm text-green-900">Write the Journal Page (e.g., J1) in the Ledger, and the Account Number in the Journal's PR column. This "bookmark" prevents double-posting.</p>
                        </div>
                    </section>

                    <!-- STEP 4 -->
                    <section class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Step 4: Unadjusted Trial Balance</h3>
                        <!-- Expanded 5-Sentence Paragraph -->
    <p class="mb-4 text-gray-600">
        The Unadjusted Trial Balance is a crucial internal working paper prepared to test the mathematical equality of debits and credits after the posting process. It lists all open accounts from the general ledger with their ending debit or credit balances, typically arranged in financial statement order (Assets, Liabilities, Equity, Income, Expenses). This report serves as a vital preliminary checkpoint to ensure that total debits equal total credits before any adjusting entries are recorded. While a balanced trial balance proves that the books are mathematically correct, it does not guarantee the absence of errors, such as omitted transactions or entries posted to the wrong accounts. Ultimately, this summary provides the foundational data needed to analyze accounts for necessary adjustments and to proceed with the preparation of accurate financial statements.
    </p>

    <!-- Visual Representation of Unadjusted Trial Balance -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 20px 0;">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width: 500px;">
            <!-- Paper Background -->
            <rect width="500" height="500" fill="#ffffff" stroke="#cbd5e0" stroke-width="1" />
            <filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#94a3b8"/></filter>
            
            <!-- HEADER SECTION -->
            <!-- 3-Line Header is standard in Accounting -->
            <text x="250" y="40" font-family="Arial, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="#0f172a">JUAN'S GENERAL MERCHANDISE</text>
            <text x="250" y="65" font-family="Arial, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="#0038a8">Unadjusted Trial Balance</text>
            <text x="250" y="85" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#64748b">December 31, 2023</text>
            
            <!-- Double Line Separator -->
            <line x1="50" y1="100" x2="450" y2="100" stroke="#0038a8" stroke-width="2"/>
            <line x1="50" y1="104" x2="450" y2="104" stroke="#0038a8" stroke-width="1"/>

            <!-- TABLE HEADERS -->
            <rect x="50" y="115" width="400" height="25" fill="#f1f5f9" />
            <text x="60" y="132" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#475569">ACCOUNT TITLE</text>
            <text x="320" y="132" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#475569">DEBIT</text>
            <text x="420" y="132" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#475569">CREDIT</text>

            <!-- ACCOUNTS LIST -->
            <g transform="translate(0, 150)" font-family="Courier New, monospace" font-size="12" fill="#334155">
                <!-- Assets -->
                <text x="60" y="15">Cash</text>
                <text x="320" y="15" text-anchor="end">100,000</text>

                <text x="60" y="40">Accounts Receivable</text>
                <text x="320" y="40" text-anchor="end">50,000</text>

                <text x="60" y="65">Merchandise Inventory</text>
                <text x="320" y="65" text-anchor="end">150,000</text>

                <text x="60" y="90">Store Equipment</text>
                <text x="320" y="90" text-anchor="end">200,000</text>

                <!-- Liabilities -->
                <text x="60" y="115">Accounts Payable</text>
                <text x="420" y="115" text-anchor="end">80,000</text>

                <!-- Equity -->
                <text x="60" y="140">Juan, Capital</text>
                <text x="420" y="140" text-anchor="end">300,000</text>

                <!-- Revenue -->
                <text x="60" y="165">Sales</text>
                <text x="420" y="165" text-anchor="end">500,000</text>

                <!-- Expenses / Cost -->
                <text x="60" y="190">Cost of Goods Sold</text>
                <text x="320" y="190" text-anchor="end">300,000</text>

                <text x="60" y="215">Operating Expenses</text>
                <text x="320" y="215" text-anchor="end">80,000</text>
            </g>

            <!-- TOTALS SECTION -->
            <line x1="250" y1="380" x2="440" y2="380" stroke="#333" stroke-width="1"/>
            
            <text x="180" y="405" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#0f172a">TOTALS</text>
            
            <!-- Debit Total -->
            <text x="320" y="405" font-family="Courier New, monospace" font-weight="bold" font-size="12" text-anchor="end" fill="#0f172a">₱ 880,000</text>
            
            <!-- Credit Total -->
            <text x="420" y="405" font-family="Courier New, monospace" font-weight="bold" font-size="12" text-anchor="end" fill="#0f172a">₱ 880,000</text>

            <!-- Double Underline (Accounting Standard for Totals) -->
            <line x1="260" y1="415" x2="330" y2="415" stroke="#0f172a" stroke-width="1"/>
            <line x1="260" y1="418" x2="330" y2="418" stroke="#0f172a" stroke-width="1"/>
            
            <line x1="360" y1="415" x2="430" y2="415" stroke="#0f172a" stroke-width="1"/>
            <line x1="360" y1="418" x2="430" y2="418" stroke="#0f172a" stroke-width="1"/>

            <!-- Visual Checkmark for Balance -->
            <circle cx="470" cy="400" r="12" fill="#10b981" />
            <path d="M464 400 L468 404 L476 396" fill="none" stroke="#fff" stroke-width="2" />
        </svg>
    </div>
                        
                        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <h4 class="font-bold text-red-800 text-sm">Limitations</h4>
                            <p class="text-xs text-red-900 mt-1">A balanced TB does not guarantee accuracy. It misses errors of principle (wrong account), omission (skipped entry), or compensating errors.</p>
                        </div>
                    </section>

                    <!-- STEP 5 -->
                    <section class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Step 5: Adjustments & Worksheet</h3>
                        <!-- Expanded 5-Sentence Paragraph -->
    <h4 class="font-bold text-slate-700 mb-2">Adjusting Entries</h4>
    <p class="mb-4 text-gray-600">Adhering to the <strong>Accrual Basis</strong>. Adjustments update accounts for time passage (Deferrals) or unrecorded activities (Accruals) to meet the Matching Principle.</p>

    <!-- 1. DEFERRED EXPENSES -->
    <h5 class="font-bold text-blue-800 mt-6 mb-2">1. Deferred Expenses (Prepayments)</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Asset Method</h6>
            <p class="text-sm text-gray-600">Under the asset method, prepaid items are initially recorded as assets because they provide future economic benefits. As time passes or the asset is consumed, the used portion is transferred to an expense account to reflect consumption. This approach ensures that the balance sheet reports the remaining value of the asset at the end of the period. The adjusting entry involves debiting the expense account for the amount used and crediting the asset account. This method is preferred for monitoring resources that are consumed over a long period.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Expense Method</h6>
            <p class="text-sm text-gray-600">The expense method initially records the entire payment for a future benefit as an expense for simplified record-keeping during the period. At the end of the accounting cycle, the portion that remains unused or unconsumed must be removed from expenses. This adjustment converts the unexpired portion back into an asset to correct the financial statements. The adjusting entry debits the asset account for the remaining value and credits the expense account. This method is often used for short-term prepayments where the item is likely to be consumed quickly.</p>
        </div>
    </div>

    <!-- SVG Example: Deferred Expenses -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Asset Method Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">ASSET METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Rent Expense</text>
                    <text x="180" y="0" text-anchor="end">1,000</text>
                    <text x="20" y="20" font-weight="bold">Prepaid Rent</text>
                    <text x="240" y="20" text-anchor="end">1,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record used portion)</text>
                </g>
            </g>

            <!-- Right: Expense Method Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">EXPENSE METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Prepaid Rent</text>
                    <text x="180" y="0" text-anchor="end">11,000</text>
                    <text x="20" y="20" font-weight="bold">Rent Expense</text>
                    <text x="240" y="20" text-anchor="end">11,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unused portion)</text>
                </g>
            </g>
        </svg>
    </div>

    <!-- 2. DEFERRED INCOME -->
    <h5 class="font-bold text-blue-800 mt-8 mb-2">2. Deferred Income (Unearned Revenue)</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Liability Method</h6>
            <p class="text-sm text-gray-600">Under the liability method, cash received in advance of performing services is recorded as a liability called Unearned Revenue. This recognizes the obligation to deliver goods or services in the future before revenue can be claimed. As the services are performed or goods delivered, the earned portion is transferred from the liability to revenue. The adjusting entry requires a debit to the liability account and a credit to the revenue account for the amount earned. This method keeps liabilities accurate by showing the remaining obligation.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Income Method</h6>
            <p class="text-sm text-gray-600">The income method records the entire cash receipt initially as revenue, assuming it will be earned within the period. At the reporting date, if any portion of the service has not yet been performed, it must be removed from revenue. This unearned portion is transferred to a liability account to defer recognition to the correct period. The adjusting entry involves debiting the revenue account and crediting the liability account for the unearned amount. This approach is sometimes used when the service cycle is very short.</p>
        </div>
    </div>

    <!-- SVG Example: Deferred Income -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Liability Method Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">LIABILITY METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Unearned Rev.</text>
                    <text x="180" y="0" text-anchor="end">1,000</text>
                    <text x="20" y="20" font-weight="bold">Service Revenue</text>
                    <text x="240" y="20" text-anchor="end">1,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record earned portion)</text>
                </g>
            </g>

            <!-- Right: Income Method Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">INCOME METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Service Revenue</text>
                    <text x="180" y="0" text-anchor="end">11,000</text>
                    <text x="20" y="20" font-weight="bold">Unearned Rev.</text>
                    <text x="240" y="20" text-anchor="end">11,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unearned portion)</text>
                </g>
            </g>
        </svg>
    </div>

    <!-- 3. ACCRUALS -->
    <h5 class="font-bold text-blue-800 mt-8 mb-2">3. Accruals</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Accrued Expense</h6>
            <p class="text-sm text-gray-600">Accrued expenses refer to costs that have been incurred by the business but have not yet been paid or recorded in the books. These expenses typically accumulate over time, such as interest on loans, salaries of employees, or utilities used. To adhere to the matching principle, these costs must be recognized in the period they help generate revenue, regardless of payment. The adjusting entry involves debiting the specific expense account and crediting a payable liability account. This ensures that liabilities and expenses are fully reported at the end of the period.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Accrued Income</h6>
            <p class="text-sm text-gray-600">Accrued income represents revenue that has been earned from providing goods or services but for which payment has not yet been received. This situation occurs when a business performs a service but bills the customer at a later date. The accrual basis requires this revenue to be recorded in the period it was earned to reflect true performance. The adjusting entry consists of debiting a receivable asset account and crediting an income account. This adjustment ensures that assets and revenues are not understated in the financial statements.</p>
        </div>
    </div>

    <!-- SVG Example: Accruals -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Accrued Expense Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">ACCRUED EXPENSE</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Salaries Expense</text>
                    <text x="180" y="0" text-anchor="end">5,000</text>
                    <text x="20" y="20" font-weight="bold">Salaries Payable</text>
                    <text x="240" y="20" text-anchor="end">5,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unpaid salaries)</text>
                </g>
            </g>

            <!-- Right: Accrued Income Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">ACCRUED INCOME</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Interest Receivable</text>
                    <text x="180" y="0" text-anchor="end">500</text>
                    <text x="20" y="20" font-weight="bold">Interest Income</text>
                    <text x="240" y="20" text-anchor="end">500</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record earned interest)</text>
                </g>
            </g>
        </svg>
    </div>
                        
                        <p class="mb-4 text-gray-600">Adhering to the <strong>Accrual Basis</strong>. Adjustments update accounts for time passage (Deferrals) or unrecorded activities (Accruals) to meet the Matching Principle.</p>

    <!-- 1. DEFERRED EXPENSES -->
    <h5 class="font-bold text-blue-800 mt-6 mb-2">1. Deferred Expenses (Prepayments)</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Asset Method</h6>
            <p class="text-sm text-gray-600">Under the asset method, prepaid items are initially recorded as assets because they provide future economic benefits. As time passes or the asset is consumed, the used portion is transferred to an expense account to reflect consumption. This approach ensures that the balance sheet reports the remaining value of the asset at the end of the period. The adjusting entry involves debiting the expense account for the amount used and crediting the asset account. This method is preferred for monitoring resources that are consumed over a long period.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Expense Method</h6>
            <p class="text-sm text-gray-600">The expense method initially records the entire payment for a future benefit as an expense for simplified record-keeping during the period. At the end of the accounting cycle, the portion that remains unused or unconsumed must be removed from expenses. This adjustment converts the unexpired portion back into an asset to correct the financial statements. The adjusting entry debits the asset account for the remaining value and credits the expense account. This method is often used for short-term prepayments where the item is likely to be consumed quickly.</p>
        </div>
    </div>

    <!-- SVG Example: Deferred Expenses -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Asset Method Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">ASSET METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Rent Expense</text>
                    <text x="180" y="0" text-anchor="end">1,000</text>
                    <text x="20" y="20" font-weight="bold">Prepaid Rent</text>
                    <text x="240" y="20" text-anchor="end">1,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record used portion)</text>
                </g>
            </g>

            <!-- Right: Expense Method Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">EXPENSE METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Prepaid Rent</text>
                    <text x="180" y="0" text-anchor="end">11,000</text>
                    <text x="20" y="20" font-weight="bold">Rent Expense</text>
                    <text x="240" y="20" text-anchor="end">11,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unused portion)</text>
                </g>
            </g>
        </svg>
    </div>

    <!-- 2. DEFERRED INCOME -->
    <h5 class="font-bold text-blue-800 mt-8 mb-2">2. Deferred Income (Unearned Revenue)</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Liability Method</h6>
            <p class="text-sm text-gray-600">Under the liability method, cash received in advance of performing services is recorded as a liability called Unearned Revenue. This recognizes the obligation to deliver goods or services in the future before revenue can be claimed. As the services are performed or goods delivered, the earned portion is transferred from the liability to revenue. The adjusting entry requires a debit to the liability account and a credit to the revenue account for the amount earned. This method keeps liabilities accurate by showing the remaining obligation.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Income Method</h6>
            <p class="text-sm text-gray-600">The income method records the entire cash receipt initially as revenue, assuming it will be earned within the period. At the reporting date, if any portion of the service has not yet been performed, it must be removed from revenue. This unearned portion is transferred to a liability account to defer recognition to the correct period. The adjusting entry involves debiting the revenue account and crediting the liability account for the unearned amount. This approach is sometimes used when the service cycle is very short.</p>
        </div>
    </div>

    <!-- SVG Example: Deferred Income -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Liability Method Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">LIABILITY METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Unearned Rev.</text>
                    <text x="180" y="0" text-anchor="end">1,000</text>
                    <text x="20" y="20" font-weight="bold">Service Revenue</text>
                    <text x="240" y="20" text-anchor="end">1,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record earned portion)</text>
                </g>
            </g>

            <!-- Right: Income Method Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">INCOME METHOD</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Service Revenue</text>
                    <text x="180" y="0" text-anchor="end">11,000</text>
                    <text x="20" y="20" font-weight="bold">Unearned Rev.</text>
                    <text x="240" y="20" text-anchor="end">11,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unearned portion)</text>
                </g>
            </g>
        </svg>
    </div>

    <!-- 3. ACCRUALS -->
    <h5 class="font-bold text-blue-800 mt-8 mb-2">3. Accruals</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <h6 class="font-bold text-sm text-slate-600">A. Accrued Expense</h6>
            <p class="text-sm text-gray-600">Accrued expenses refer to costs that have been incurred by the business but have not yet been paid or recorded in the books. These expenses typically accumulate over time, such as interest on loans, salaries of employees, or utilities used. To adhere to the matching principle, these costs must be recognized in the period they help generate revenue, regardless of payment. The adjusting entry involves debiting the specific expense account and crediting a payable liability account. This ensures that liabilities and expenses are fully reported at the end of the period.</p>
        </div>
        <div>
            <h6 class="font-bold text-sm text-slate-600">B. Accrued Income</h6>
            <p class="text-sm text-gray-600">Accrued income represents revenue that has been earned from providing goods or services but for which payment has not yet been received. This situation occurs when a business performs a service but bills the customer at a later date. The accrual basis requires this revenue to be recorded in the period it was earned to reflect true performance. The adjusting entry consists of debiting a receivable asset account and crediting an income account. This adjustment ensures that assets and revenues are not understated in the financial statements.</p>
        </div>
    </div>

    <!-- SVG Example: Accruals -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 10px 0;">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect width="600" height="160" fill="#f1f5f9" rx="4" />
            
            <!-- Left: Accrued Expense Entry -->
            <g transform="translate(20, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#ce1126">ACCRUED EXPENSE</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#ce1126" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Salaries Expense</text>
                    <text x="180" y="0" text-anchor="end">5,000</text>
                    <text x="20" y="20" font-weight="bold">Salaries Payable</text>
                    <text x="240" y="20" text-anchor="end">5,000</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record unpaid salaries)</text>
                </g>
            </g>

            <!-- Right: Accrued Income Entry -->
            <g transform="translate(310, 20)">
                <rect width="270" height="120" fill="#fff" stroke="#cbd5e0" rx="4"/>
                <text x="135" y="20" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">ACCRUED INCOME</text>
                <line x1="10" y1="30" x2="260" y2="30" stroke="#0038a8" stroke-width="1"/>
                <g transform="translate(10, 50)" font-family="Courier New" font-size="11">
                    <text x="0" y="0" font-weight="bold">Interest Receivable</text>
                    <text x="180" y="0" text-anchor="end">500</text>
                    <text x="20" y="20" font-weight="bold">Interest Income</text>
                    <text x="240" y="20" text-anchor="end">500</text>
                    <text x="20" y="45" font-size="9" font-family="Arial" fill="#64748b" font-style="italic">(To record earned interest)</text>
                </g>
            </g>
        </svg>
    </div>

<!-- Step 6: Worksheet Section -->
<div class="mb-6 mt-12 border-t pt-8">
    <h3 class="font-bold text-slate-700 mb-2">The Worksheet</h3>
    
    <!-- 5-Sentence Paragraph -->
    <p class="mb-4 text-gray-600">
        The 10-Column Worksheet is an optional but highly efficient internal tool used by accountants to organize financial data before preparing formal financial statements. It typically starts with the unadjusted trial balance, followed by columns for adjusting entries, the adjusted trial balance, the income statement, and the balance sheet. This document allows accountants to visualize the effects of adjustments and ensures that debits equal credits at every stage of the process. By separating accounts into their respective financial statement columns, it simplifies the calculation of net income or loss. Although not a formal report distributed to outsiders, the worksheet serves as a comprehensive draft that minimizes errors in the final reporting phase.
    </p>

    <!-- Visual Representation of 10-Column Worksheet -->
    <div class="img-box" style="display: flex; justify-content: center; width: 100%; margin: 20px 0; overflow-x: auto;">
        <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" width="100%" style="min-width: 700px;">
            <!-- Background -->
            <rect width="800" height="350" fill="#ffffff" stroke="#cbd5e0" stroke-width="1" />
            <filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#94a3b8"/></filter>
            
            <!-- HEADER -->
            <text x="400" y="30" font-family="Arial" font-weight="bold" font-size="14" text-anchor="middle" fill="#0f172a">JUAN'S GENERAL MERCHANDISE</text>
            <text x="400" y="50" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle" fill="#0038a8">Worksheet</text>
            <text x="400" y="65" font-family="Arial" font-size="10" text-anchor="middle" fill="#64748b">For the Year Ended December 31, 2023</text>
            
            <!-- COLUMN HEADERS -->
            <g transform="translate(10, 80)">
                <!-- Column Backgrounds -->
                <rect x="0" y="0" width="780" height="40" fill="#f1f5f9" />
                <rect x="150" y="20" width="126" height="20" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="0.5"/> <!-- Unadj TB -->
                <rect x="276" y="20" width="126" height="20" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="0.5"/> <!-- Adj -->
                <rect x="402" y="20" width="126" height="20" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="0.5"/> <!-- Adj TB -->
                <rect x="528" y="20" width="126" height="20" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="0.5"/> <!-- IS -->
                <rect x="654" y="20" width="126" height="20" fill="#e2e8f0" stroke="#cbd5e0" stroke-width="0.5"/> <!-- BS -->

                <!-- Main Labels -->
                <text x="75" y="25" font-family="Arial" font-weight="bold" font-size="10" text-anchor="middle" fill="#475569">ACCOUNT TITLE</text>
                <text x="213" y="15" font-family="Arial" font-weight="bold" font-size="9" text-anchor="middle" fill="#475569">UNADJUSTED TB</text>
                <text x="339" y="15" font-family="Arial" font-weight="bold" font-size="9" text-anchor="middle" fill="#475569">ADJUSTMENTS</text>
                <text x="465" y="15" font-family="Arial" font-weight="bold" font-size="9" text-anchor="middle" fill="#475569">ADJUSTED TB</text>
                <text x="591" y="15" font-family="Arial" font-weight="bold" font-size="9" text-anchor="middle" fill="#475569">INCOME ST.</text>
                <text x="717" y="15" font-family="Arial" font-weight="bold" font-size="9" text-anchor="middle" fill="#475569">BALANCE SHEET</text>

                <!-- DR/CR Sub-labels -->
                <g font-family="Arial" font-size="8" fill="#64748b" text-anchor="middle">
                    <text x="181" y="34">DR</text> <text x="244" y="34">CR</text>
                    <text x="307" y="34">DR</text> <text x="370" y="34">CR</text>
                    <text x="433" y="34">DR</text> <text x="496" y="34">CR</text>
                    <text x="559" y="34">DR</text> <text x="622" y="34">CR</text>
                    <text x="685" y="34">DR</text> <text x="748" y="34">CR</text>
                </g>
            </g>

            <!-- ROWS -->
            <g transform="translate(10, 130)" font-family="Courier New" font-size="9" fill="#334155">
                <!-- Row 1: Cash -->
                <text x="5" y="0">Cash</text>
                <text x="208" y="0" text-anchor="end">100</text> <!-- Unadj Dr -->
                <text x="460" y="0" text-anchor="end">100</text> <!-- Adj TB Dr -->
                <text x="712" y="0" text-anchor="end">100</text> <!-- BS Dr -->

                <!-- Row 2: Supplies -->
                <text x="5" y="20">Supplies</text>
                <text x="208" y="20" text-anchor="end">50</text> <!-- Unadj Dr -->
                <text x="396" y="20" text-anchor="end">20</text> <!-- Adj Cr -->
                <text x="460" y="20" text-anchor="end">30</text> <!-- Adj TB Dr -->
                <text x="712" y="20" text-anchor="end">30</text> <!-- BS Dr -->

                <!-- Row 3: Equipment -->
                <text x="5" y="40">Equipment</text>
                <text x="208" y="40" text-anchor="end">200</text>
                <text x="460" y="40" text-anchor="end">200</text>
                <text x="712" y="40" text-anchor="end">200</text>

                <!-- Row 4: Accounts Payable -->
                <text x="5" y="60">Accts Payable</text>
                <text x="270" y="60" text-anchor="end">50</text> <!-- Unadj Cr -->
                <text x="522" y="60" text-anchor="end">50</text> <!-- Adj TB Cr -->
                <text x="774" y="60" text-anchor="end">50</text> <!-- BS Cr -->

                <!-- Row 5: Capital -->
                <text x="5" y="80">Juan, Capital</text>
                <text x="270" y="80" text-anchor="end">100</text>
                <text x="522" y="80" text-anchor="end">100</text>
                <text x="774" y="80" text-anchor="end">100</text>

                <!-- Row 6: Service Revenue -->
                <text x="5" y="100">Service Rev.</text>
                <text x="270" y="100" text-anchor="end">300</text>
                <text x="522" y="100" text-anchor="end">300</text>
                <text x="648" y="100" text-anchor="end">300</text> <!-- IS Cr -->

                <!-- Row 7: Salaries Exp -->
                <text x="5" y="120">Salaries Exp.</text>
                <text x="208" y="120" text-anchor="end">100</text>
                <text x="460" y="120" text-anchor="end">100</text>
                <text x="586" y="120" text-anchor="end">100</text> <!-- IS Dr -->

                <!-- Row 8: Adj - Supplies Exp -->
                <text x="5" y="140">Supplies Exp.</text>
                <text x="334" y="140" text-anchor="end">20</text> <!-- Adj Dr -->
                <text x="460" y="140" text-anchor="end">20</text> <!-- Adj TB Dr -->
                <text x="586" y="140" text-anchor="end">20</text> <!-- IS Dr -->

                <!-- Horizontal Lines -->
                <line x1="0" y1="150" x2="780" y2="150" stroke="#cbd5e0" stroke-width="1"/>
                
                <!-- TOTALS ROW -->
                <text x="100" y="165" font-weight="bold">Totals</text>
                <text x="208" y="165" text-anchor="end" font-weight="bold">450</text>
                <text x="270" y="165" text-anchor="end" font-weight="bold">450</text>
                
                <text x="334" y="165" text-anchor="end" font-weight="bold">20</text>
                <text x="396" y="165" text-anchor="end" font-weight="bold">20</text>

                <text x="460" y="165" text-anchor="end" font-weight="bold">450</text>
                <text x="522" y="165" text-anchor="end" font-weight="bold">450</text>

                <text x="586" y="165" text-anchor="end" font-weight="bold">120</text> <!-- IS Dr Total -->
                <text x="648" y="165" text-anchor="end" font-weight="bold">300</text> <!-- IS Cr Total -->

                <text x="712" y="165" text-anchor="end" font-weight="bold">330</text> <!-- BS Dr Total -->
                <text x="774" y="165" text-anchor="end" font-weight="bold">150</text> <!-- BS Cr Total -->

                <!-- NET INCOME CALC -->
                <text x="80" y="185" font-weight="bold" fill="#166534">Net Income</text>
                
                <!-- Balancing Entry for IS (Debit side to balance) -->
                <text x="586" y="185" text-anchor="end" font-weight="bold" fill="#166534">180</text>
                
                <!-- Balancing Entry for BS (Credit side to balance) -->
                <text x="774" y="185" text-anchor="end" font-weight="bold" fill="#166534">180</text>

                <!-- FINAL DOUBLE TOTALS -->
                <line x1="550" y1="190" x2="780" y2="190" stroke="#333" stroke-width="1"/>
                
                <text x="586" y="205" text-anchor="end" font-weight="bold">300</text>
                <text x="648" y="205" text-anchor="end" font-weight="bold">300</text>
                <text x="712" y="205" text-anchor="end" font-weight="bold">330</text>
                <text x="774" y="205" text-anchor="end" font-weight="bold">330</text>
                
                <!-- Double Underlines -->
                <line x1="550" y1="208" x2="650" y2="208" stroke="#333" stroke-width="1"/>
                <line x1="550" y1="211" x2="650" y2="211" stroke="#333" stroke-width="1"/>
                
                <line x1="680" y1="208" x2="780" y2="208" stroke="#333" stroke-width="1"/>
                <line x1="680" y1="211" x2="780" y2="211" stroke="#333" stroke-width="1"/>
            </g>
        </svg>
    </div>
    <div class="bg-blue-50 p-4 rounded-lg">
  <h4 class="font-bold text-blue-800 text-sm uppercase mb-2">
    <i class="fas fa-list-ol mr-2"></i>Step-by-Step Guide
  </h4>
  <ul class="space-y-1 text-sm text-blue-900 list-disc list-inside">
    <li><strong>Title the worksheet:</strong> Write the business name, “Worksheet,” and the accounting period at the top.</li>
    <li><strong>Enter the unadjusted trial balance:</strong> List all accounts with debit/credit amounts as per the ledger; total both columns.</li>
    <li><strong>Record adjustments:</strong> Input the adjustment amounts; note each adjustment (account, amount, and debit/credit) with brief explanations.</li>
    <li><strong>Compute adjusted balances:</strong> Apply adjustments to each account to derive the adjusted trial balance; re-total debits and credits.</li>
    <li><strong>Extend to statements:</strong> Carry adjusted balances to the Income Statement (rev/exp) and Balance Sheet (assets/liabilities/equity) columns.</li>
    <li><strong>Determine net income/loss:</strong> Foot the statement columns; the difference between Income Statement columns equals net income (or loss).</li>
    <li><strong>Balance the Balance Sheet:</strong> Add net income/loss to the Balance Sheet equity column so both Balance Sheet columns agree.</li>
    <li><strong>Cross-check and annotate:</strong> Cross-foot totals, verify debits = credits, add references/tick marks to link adjustments to journal entries.</li>
    <li><strong>Review for clarity:</strong> Ensure consistent account titles, correct column alignment, and readable notes for audit trail.</li>
  </ul>
</div>
                    </section>
                </div>
            `,
            exercises: [
                {
                    type: "mcq",
                    question: "Which principle is violated if a personal withdrawal is recorded as a business expense?",
                    options: ["Matching Principle", "Business Entity Principle", "Revenue Recognition", "Cost Principle"],
                    correctIndex: 1,
                    explanation: "The Business Entity Principle separates personal affairs from business affairs."
                },
                {
                    type: "mcq",
                    question: "In the General Journal, how should Credit entries be formatted?",
                    options: ["Listed first, left aligned", "Listed second, left aligned", "Listed first, indented", "Listed second, indented to the right"],
                    correctIndex: 3,
                    explanation: "Credits are always listed below debits and indented to visually distinguish them."
                }
            ]
        },
        
        {
    day: "Day 2",
    topic: "Review: Reporting & Closing (Steps 6–10)",
    content: `
        <div class="space-y-24 animate-fade-in font-sans text-gray-800 leading-loose">
            
            <!-- ================================================================================== -->
            <!-- PHASE OVERVIEW: THE BRIDGE TO THE FUTURE                                           -->
            <!-- ================================================================================== -->
            <div class="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-12 rounded-3xl border border-emerald-100 shadow-2xl relative overflow-hidden">
                <!-- Decorative Background Elements -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div class="absolute -bottom-8 -left-8 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                
                <div class="relative z-10">
                    <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-10">
                        <div class="p-4 bg-emerald-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <div>
                            <h2 class="text-4xl font-extrabold text-emerald-900 tracking-tight mb-2">Phase Overview: Reporting & Closing</h2>
                            <p class="text-xl text-emerald-700 font-medium">The Cycle's Grand Finale: From Data to Wisdom</p>
                        </div>
                    </div>
                    
                    <div class="prose prose-lg text-emerald-900 max-w-none mb-12">
                        <p>
                            We have successfully navigated the chaotic waters of daily transactions (Journalizing) and organized them into specific accounts (Posting). We have even verified our math (Trial Balance) and adjusted for the passage of time (Adjustments). Now, we arrive at the "Output Phase." This is the most critical juncture for stakeholders.
                        </p>
                        <p>
                            This phase answers the two most fundamental questions in business:
                        </p>
                        <ul class="list-none pl-0 space-y-2 font-bold italic">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                "Did we make a profit?" (Performance)
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                "What is our financial health right now?" (Position)
                            </li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Card A -->
                        <div class="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div class="flex items-center mb-4">
                                <div class="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">A</div>
                                <h3 class="font-bold text-2xl text-emerald-900">External Reporting</h3>
                            </div>
                            <p class="text-gray-600 leading-relaxed mb-4">
                                Investors, creditors, and government agencies do not look at your General Ledger. They rely entirely on the <strong>Financial Statements</strong> (Step 6) to judge the health of your business. Accuracy here is non-negotiable. This is the "Public Face" of the company.
                            </p>
                            <div class="bg-emerald-50 p-3 rounded text-sm text-emerald-800 font-mono">
                                Output: Income Stmt, Equity Stmt, Balance Sheet
                            </div>
                        </div>

                        <!-- Card B -->
                        <div class="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div class="flex items-center mb-4">
                                <div class="bg-teal-100 text-teal-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">B</div>
                                <h3 class="font-bold text-2xl text-teal-900">Internal Reset</h3>
                            </div>
                            <p class="text-gray-600 leading-relaxed mb-4">
                                Imagine a scoreboard at a basketball game. At the end of the game, the score is final (Reporting). Before the next game starts, the score must be reset to 0-0 (Closing). If we don't close, next year's score will be wrong. This ensures the <strong>Periodicity Assumption</strong> is upheld.
                            </p>
                            <div class="bg-teal-50 p-3 rounded text-sm text-teal-800 font-mono">
                                Action: Close Revenue, Expenses, Drawings
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ================================================================================== -->
            <!-- STEP 6: PREPARE FINANCIAL STATEMENTS                                               -->
            <!-- ================================================================================== -->
            <section class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl">
                    
                    <!-- Header Section -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-100 pb-8 mb-10">
                        <div class="flex items-center">
                            <span class="text-8xl font-black text-slate-100 mr-6 -ml-4 select-none tracking-tighter">06</span>
                            <div>
                                <h3 class="text-4xl font-extrabold text-slate-800 tracking-tight">Financial Statements</h3>
                                <p class="text-xl text-blue-600 font-medium mt-1">The Final Output Product</p>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex flex-wrap gap-2">
                            <span class="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider border border-blue-100">Income Statement</span>
                            <span class="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider border border-blue-100">Changes in Equity</span>
                            <span class="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider border border-blue-100">Balance Sheet</span>
                        </div>
                    </div>

                    <!-- Introduction Text -->
                    <div class="prose max-w-none text-gray-600 mb-12 leading-loose">
                        <p class="text-lg">
                            The Financial Statements are the primary means of communicating financial information to external parties. They are prepared directly from the adjusted account balances found in the Ledger (or the Worksheet). The order of preparation is strictly hierarchical because the mathematical result of one statement is a required input for the next.
                        </p>
                        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6">
                            <h4 class="font-bold text-blue-900 mb-2">The Golden Rule of Order:</h4>
                            <ol class="list-decimal list-inside space-y-1 text-blue-800 font-medium">
                                <li><strong>Income Statement:</strong> Calculates Net Income.</li>
                                <li><strong>Statement of Equity:</strong> Uses Net Income to find Ending Capital.</li>
                                <li><strong>Balance Sheet:</strong> Uses Ending Capital to prove Assets = Liabilities + Equity.</li>
                                <li><strong>Statement of Cash Flows:</strong> (Advanced topic) Explains cash changes.</li>
                            </ol>
                        </div>
                    </div>

                    <!-- ============================================================== -->
                    <!-- SUB-SECTION 6.1: STATEMENT OF COMPREHENSIVE INCOME            -->
                    <!-- ============================================================== -->
                    <div class="mb-16 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="bg-slate-50 p-6 border-b border-slate-200 flex justify-between items-center">
                            <h4 class="text-2xl font-bold text-slate-700 flex items-center">
                                <span class="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm mr-3">1</span>
                                The Income Statement (P&L)
                            </h4>
                            <span class="text-sm font-mono text-slate-500 bg-white px-3 py-1 rounded border">Type: Flow Report</span>
                        </div>
                        
                        <div class="p-8 bg-white">
                            <p class="text-gray-600 mb-8">
                                This report measures performance over a specific time frame (e.g., "For the Month Ended..."). It applies the <strong>Matching Principle</strong> by matching Revenues earned against Expenses incurred to generate that revenue.
                            </p>

                            <!-- Mechanics of the Header -->
                            <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 dashed-border">
                                <h5 class="font-bold text-gray-700 mb-4 border-b pb-2">Anatomy of a Proper Header</h5>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="block text-xs text-gray-400 uppercase font-bold">Who?</span>
                                        <span class="font-bold text-slate-800">Global Tech Services</span>
                                    </div>
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="block text-xs text-gray-400 uppercase font-bold">What?</span>
                                        <span class="font-bold text-slate-800">Income Statement</span>
                                    </div>
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="block text-xs text-gray-400 uppercase font-bold">When?</span>
                                        <span class="font-bold text-slate-800">For Month Ended Dec 31</span>
                                    </div>
                                </div>
                                <p class="text-xs text-center text-red-500 mt-3 italic">
                                    *Common Mistake: Writing "As of Dec 31" implies a snapshot. Income is a flow (movie), not a snapshot (photo).
                                </p>
                            </div>

                            <!-- Detailed Financial Table -->
                            <div class="bg-white border-2 border-gray-800 shadow-xl mx-auto max-w-3xl font-mono text-sm leading-relaxed p-10 relative">
                                <div class="absolute top-0 left-0 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1">FORMAT: MULTI-STEP</div>
                                
                                <div class="text-center mb-8">
                                    <h5 class="font-bold text-xl uppercase underline decoration-double underline-offset-4">Global Tech Services</h5>
                                    <p class="font-bold text-lg">Income Statement</p>
                                    <p class="italic text-gray-500">For the Month Ended December 31, 2024</p>
                                </div>

                                <!-- Revenue Block -->
                                <div class="mb-6">
                                    <div class="font-bold text-gray-800 mb-2 text-base">Revenues</div>
                                    <div class="flex justify-between pl-4 hover:bg-gray-50 py-1 transition-colors">
                                        <span>Service Revenue (Consulting)</span>
                                        <span>₱ 25,000.00</span>
                                    </div>
                                    <div class="flex justify-between pl-4 hover:bg-gray-50 py-1 transition-colors">
                                        <span>Service Revenue (Training)</span>
                                        <span class="border-b border-gray-800">5,000.00</span>
                                    </div>
                                    <div class="flex justify-between pl-4 font-bold text-gray-700 py-2">
                                        <span>Total Revenues</span>
                                        <span class="text-blue-800">₱ 30,000.00</span>
                                    </div>
                                </div>

                                <!-- Expense Block -->
                                <div class="mb-6">
                                    <div class="font-bold text-gray-800 mb-2 text-base">Operating Expenses</div>
                                    
                                    <div class="space-y-1">
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Salaries Expense</span>
                                            <span>₱ 8,000.00</span>
                                        </div>
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Rent Expense (Office)</span>
                                            <span>3,000.00</span>
                                        </div>
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Advertising Expense</span>
                                            <span>1,200.00</span>
                                        </div>
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Depreciation Expense - Equipment</span>
                                            <span>500.00</span>
                                        </div>
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Supplies Expense</span>
                                            <span>400.00</span>
                                        </div>
                                        <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                            <span>Utilities Expense</span>
                                            <span class="border-b border-gray-800">300.00</span>
                                        </div>
                                    </div>

                                    <div class="flex justify-between pl-4 font-bold text-gray-700 py-2 mt-1">
                                        <span>Total Operating Expenses</span>
                                        <span class="text-red-600 border-b border-gray-800">(13,400.00)</span>
                                    </div>
                                </div>

                                <!-- Operating Income -->
                                <div class="flex justify-between font-bold text-gray-800 mb-4 py-2 border-b border-gray-300">
                                    <span>Operating Income</span>
                                    <span>₱ 16,600.00</span>
                                </div>

                                <!-- Non-Operating Items -->
                                <div class="mb-6 text-gray-600">
                                    <div class="font-bold mb-1">Other Income and Expenses</div>
                                    <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                        <span>Interest Revenue</span>
                                        <span>200.00</span>
                                    </div>
                                    <div class="flex justify-between pl-4 hover:bg-gray-50 py-1">
                                        <span>Interest Expense</span>
                                        <span class="border-b border-gray-400">(100.00)</span>
                                    </div>
                                    <div class="flex justify-between pl-4 font-bold py-1">
                                        <span>Net Other Income</span>
                                        <span class="border-b border-gray-800">100.00</span>
                                    </div>
                                </div>

                                <!-- Bottom Line -->
                                <div class="flex justify-between font-black text-emerald-800 bg-emerald-100 p-4 border-t-2 border-b-4 border-double border-emerald-800 text-lg shadow-inner">
                                    <span>NET INCOME</span>
                                    <span>₱ 16,700.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ============================================================== -->
                    <!-- SUB-SECTION 6.2: STATEMENT OF CHANGES IN EQUITY               -->
                    <!-- ============================================================== -->
                    <div class="mb-16 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="bg-slate-50 p-6 border-b border-slate-200 flex justify-between items-center">
                            <h4 class="text-2xl font-bold text-slate-700 flex items-center">
                                <span class="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm mr-3">2</span>
                                Statement of Changes in Equity
                            </h4>
                            <span class="text-sm font-mono text-slate-500 bg-white px-3 py-1 rounded border">Type: Flow Report</span>
                        </div>
                        
                        <div class="p-8 bg-white">
                            <p class="text-gray-600 mb-8">
                                This statement acts as the financial bridge. It connects the P&L (Net Income) to the Balance Sheet (Equity Section). It details exactly <em>why</em> the owner's claim on assets changed.
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                                <!-- The Logic List -->
                                <div class="relative pl-8 border-l-4 border-blue-200 space-y-8">
                                    <div class="relative group">
                                        <div class="absolute -left-11 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">1</div>
                                        <h5 class="font-bold text-gray-800 text-lg">Beginning Capital</h5>
                                        <p class="text-sm text-gray-500">The balance at the start of the period. For a new business, this is ₱0. For an existing one, it's the ending balance from last month.</p>
                                    </div>
                                    <div class="relative group">
                                        <div class="absolute -left-11 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">2</div>
                                        <h5 class="font-bold text-gray-800 text-lg">Add: Investments</h5>
                                        <p class="text-sm text-gray-500">Cash or assets the owner put into the business from personal funds this period.</p>
                                    </div>
                                    <div class="relative group">
                                        <div class="absolute -left-11 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">3</div>
                                        <h5 class="font-bold text-gray-800 text-lg">Add: Net Income</h5>
                                        <p class="text-sm text-gray-500">This number represents the wealth created by operations. It comes <strong>directly</strong> from Step 1.</p>
                                    </div>
                                    <div class="relative group">
                                        <div class="absolute -left-11 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">4</div>
                                        <h5 class="font-bold text-gray-800 text-lg">Less: Withdrawals</h5>
                                        <p class="text-sm text-gray-500">Money taken out by the owner. This is <strong>not</strong> an expense; it is a distribution of profit.</p>
                                    </div>
                                </div>

                                <!-- The Visual Table -->
                                <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h5 class="font-bold text-center mb-4 text-gray-700 uppercase tracking-widest">Example Calculation</h5>
                                    <table class="w-full text-sm font-mono">
                                        <tbody class="divide-y divide-gray-300">
                                            <tr class="bg-white">
                                                <td class="p-3">Smith, Capital (Jan 1)</td>
                                                <td class="p-3 text-right text-gray-500">₱ 10,000</td>
                                            </tr>
                                            <tr class="bg-green-50">
                                                <td class="p-3 font-bold text-green-800">+ Net Income (from Step 1)</td>
                                                <td class="p-3 text-right font-bold text-green-800">16,700</td>
                                            </tr>
                                            <tr class="bg-white">
                                                <td class="p-3 text-gray-600">+ Addl. Investments</td>
                                                <td class="p-3 text-right text-gray-600">0</td>
                                            </tr>
                                            <tr class="bg-red-50">
                                                <td class="p-3 font-bold text-red-800">- Withdrawals</td>
                                                <td class="p-3 text-right font-bold text-red-800 border-b border-gray-400">(2,000)</td>
                                            </tr>
                                            <tr class="bg-blue-600 text-white font-bold text-lg">
                                                <td class="p-4">Smith, Capital (Jan 31)</td>
                                                <td class="p-4 text-right border-t-4 border-double border-white">₱ 24,700</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p class="mt-4 text-xs text-center text-gray-500">
                                        This final number (₱24,700) is the <strong>ONLY</strong> number that moves forward to the Balance Sheet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ============================================================== -->
                    <!-- SUB-SECTION 6.3: STATEMENT OF FINANCIAL POSITION              -->
                    <!-- ============================================================== -->
                    <div class="mb-6 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div class="bg-slate-50 p-6 border-b border-slate-200 flex justify-between items-center">
                            <h4 class="text-2xl font-bold text-slate-700 flex items-center">
                                <span class="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm mr-3">3</span>
                                Statement of Financial Position (Balance Sheet)
                            </h4>
                            <span class="text-sm font-mono text-slate-500 bg-white px-3 py-1 rounded border">Type: Snapshot Report</span>
                        </div>
                        
                        <div class="p-8 bg-white">
                            <p class="text-gray-600 mb-8">
                                This is the ultimate proof of the accounting equation. It shows what the company owns (Assets) and who has a claim to them (Creditors + Owners) on a specific date. Unlike the other two, this is a "Snapshot"—it freezes time.
                            </p>

                            <!-- The Classified Balance Sheet -->
                            <div class="bg-white border-4 border-double border-gray-300 shadow-2xl mx-auto max-w-4xl font-mono text-sm p-10">
                                <div class="text-center mb-10">
                                    <h5 class="font-bold uppercase text-xl">Global Tech Services</h5>
                                    <p class="font-bold text-lg">Statement of Financial Position</p>
                                    <p class="italic text-gray-500">As of December 31, 2024</p>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <!-- LEFT COLUMN: ASSETS -->
                                    <div>
                                        <h6 class="font-bold text-gray-800 border-b-2 border-gray-800 mb-4 text-lg">ASSETS</h6>
                                        
                                        <!-- Current Assets -->
                                        <div class="mb-6">
                                            <p class="font-bold text-gray-600 mb-2 underline decoration-gray-300">Current Assets</p>
                                            <p class="text-[10px] text-gray-400 italic mb-2 ml-2">(Liquidity Order: Cash is first)</p>
                                            <div class="flex justify-between pl-2 mb-1"><span>Cash</span><span>₱ 15,000</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Accounts Receivable</span><span>8,200</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Supplies</span><span>1,500</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Prepaid Insurance</span><span class="border-b border-gray-400">1,100</span></div>
                                            <div class="flex justify-between pl-2 font-bold text-blue-800 mt-2"><span>Total Current Assets</span><span>25,800</span></div>
                                        </div>

                                        <!-- Non-Current Assets -->
                                        <div class="mb-6">
                                            <p class="font-bold text-gray-600 mb-2 underline decoration-gray-300">Property, Plant & Equip</p>
                                            <div class="flex justify-between pl-2 mb-1"><span>Office Equipment</span><span>10,000</span></div>
                                            <div class="flex justify-between pl-2 text-red-500 mb-1"><span>Less: Accum. Depr.</span><span class="border-b border-gray-400">(500)</span></div>
                                            <div class="flex justify-between pl-2 font-bold text-blue-800 mt-2"><span>Net Equipment</span><span class="border-b border-gray-800">9,500</span></div>
                                        </div>

                                        <!-- Total Assets -->
                                        <div class="flex justify-between font-black text-white bg-slate-800 p-3 mt-12 rounded shadow-lg">
                                            <span>TOTAL ASSETS</span>
                                            <span>₱ 35,300</span>
                                        </div>
                                    </div>

                                    <!-- RIGHT COLUMN: LIABILITIES & EQUITY -->
                                    <div>
                                        <h6 class="font-bold text-gray-800 border-b-2 border-gray-800 mb-4 text-lg">LIABILITIES & EQUITY</h6>
                                        
                                        <!-- Current Liabilities -->
                                        <div class="mb-6">
                                            <p class="font-bold text-gray-600 mb-2 underline decoration-gray-300">Current Liabilities</p>
                                            <div class="flex justify-between pl-2 mb-1"><span>Accounts Payable</span><span>₱ 4,000</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Salaries Payable</span><span>300</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Unearned Revenue</span><span>6,200</span></div>
                                            <div class="flex justify-between pl-2 mb-1"><span>Interest Payable</span><span class="border-b border-gray-400">100</span></div>
                                            <div class="flex justify-between pl-2 font-bold text-red-800 mt-2"><span>Total Liabilities</span><span>10,600</span></div>
                                        </div>

                                        <!-- Owner's Equity -->
                                        <div class="mb-6 mt-12">
                                            <p class="font-bold text-gray-600 mb-2 underline decoration-gray-300">Owner's Equity</p>
                                            <div class="flex justify-between pl-2 mb-1"><span>Smith, Capital</span><span class="border-b border-gray-800">24,700</span></div>
                                            <div class="bg-yellow-50 text-[10px] p-2 mt-2 rounded border border-yellow-200 text-yellow-800">
                                                <strong>CHECKPOINT:</strong> This ₱24,700 must match the Ending Capital from Step 2. Do NOT use the Capital from the Trial Balance!
                                            </div>
                                        </div>

                                        <!-- Total L & E -->
                                        <div class="flex justify-between font-black text-white bg-slate-800 p-3 mt-12 rounded shadow-lg">
                                            <span>TOTAL LIAB. & EQUITY</span>
                                            <span>₱ 35,300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================================================================================== -->
            <!-- STEP 7: ADJUSTING ENTRIES (JOURNALIZE & POST)                                      -->
            <!-- ================================================================================== -->
            <section class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl">
                    
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-100 pb-8 mb-10">
                        <div class="flex items-center">
                            <span class="text-8xl font-black text-slate-100 mr-6 -ml-4 select-none tracking-tighter">07</span>
                            <div>
                                <h3 class="text-4xl font-extrabold text-slate-800 tracking-tight">Adjusting Entries</h3>
                                <p class="text-xl text-purple-600 font-medium mt-1">Formalizing the Updates</p>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex flex-wrap gap-2">
                            <span class="px-4 py-2 bg-purple-50 text-purple-700 text-xs font-bold uppercase rounded-full tracking-wider border border-purple-100">Accruals</span>
                            <span class="px-4 py-2 bg-purple-50 text-purple-700 text-xs font-bold uppercase rounded-full tracking-wider border border-purple-100">Deferrals</span>
                            <span class="px-4 py-2 bg-purple-50 text-purple-700 text-xs font-bold uppercase rounded-full tracking-wider border border-purple-100">Estimates</span>
                        </div>
                    </div>

                    <!-- Intro -->
                    <div class="prose max-w-none text-gray-600 mb-12">
                        <p class="text-lg font-medium text-purple-900 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                            <strong>Crucial Concept:</strong> The Worksheet we completed previously is just a "scratchpad." It has no legal standing.
                        </p>
                        <p class="leading-loose">
                            Up to this point, the calculations for Depreciation, accrued interest, and used supplies exist only on the Worksheet. The <strong>General Ledger</strong>—the official record of the company—still shows the old, unadjusted balances. Step 7 involves formally writing these adjustments into the General Journal and posting them to the Ledger. If we skip this, our Financial Statements (Step 6) are lies.
                        </p>
                    </div>

                    <!-- Deep Dive: The Four Types of Adjustments -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        
                        <!-- Type 1: Deferred Expenses (Prepaids) -->
                        <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-purple-300 transition-colors">
                            <div class="flex items-center mb-4">
                                <span class="bg-purple-100 text-purple-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">1</span>
                                <h4 class="font-bold text-gray-800 text-xl">Deferred Expenses (Prepaids)</h4>
                            </div>
                            <p class="text-sm text-gray-600 mb-4 h-16">
                                Cash was paid <em>before</em> the expense was incurred. We recorded an Asset initially. Now we must expense the part we used.
                            </p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mb-4">
                                // Example: ₱100 Insurance used<br>
                                Dr. Insurance Expense .... 100<br>
                                &nbsp;&nbsp;&nbsp;Cr. Prepaid Insurance .... 100
                            </div>
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded text-xs text-gray-500">
                                <span><strong>Effect if skipped:</strong></span>
                                <span>Assets Overstated, Expenses Understated.</span>
                            </div>
                        </div>

                        <!-- Type 2: Deferred Revenue (Unearned) -->
                        <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-purple-300 transition-colors">
                            <div class="flex items-center mb-4">
                                <span class="bg-purple-100 text-purple-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">2</span>
                                <h4 class="font-bold text-gray-800 text-xl">Deferred Revenue (Unearned)</h4>
                            </div>
                            <p class="text-sm text-gray-600 mb-4 h-16">
                                Cash was received <em>before</em> the service was performed. We recorded a Liability initially. Now we must recognize revenue for work done.
                            </p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mb-4">
                                // Example: ₱500 Service performed<br>
                                Dr. Unearned Revenue ..... 500<br>
                                &nbsp;&nbsp;&nbsp;Cr. Service Revenue ...... 500
                            </div>
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded text-xs text-gray-500">
                                <span><strong>Effect if skipped:</strong></span>
                                <span>Liabilities Overstated, Revenue Understated.</span>
                            </div>
                        </div>

                        <!-- Type 3: Accrued Expenses -->
                        <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-purple-300 transition-colors">
                            <div class="flex items-center mb-4">
                                <span class="bg-pink-100 text-pink-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">3</span>
                                <h4 class="font-bold text-gray-800 text-xl">Accrued Expenses</h4>
                            </div>
                            <p class="text-sm text-gray-600 mb-4 h-16">
                                Expense happened, but cash has <em>not</em> been paid yet. We must record the expense and the liability (payable).
                            </p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mb-4">
                                // Example: ₱300 Salaries owed<br>
                                Dr. Salaries Expense ..... 300<br>
                                &nbsp;&nbsp;&nbsp;Cr. Salaries Payable ..... 300
                            </div>
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded text-xs text-gray-500">
                                <span><strong>Effect if skipped:</strong></span>
                                <span>Expenses Understated, Liabilities Understated.</span>
                            </div>
                        </div>

                        <!-- Type 4: Accrued Revenue -->
                        <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-purple-300 transition-colors">
                            <div class="flex items-center mb-4">
                                <span class="bg-pink-100 text-pink-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">4</span>
                                <h4 class="font-bold text-gray-800 text-xl">Accrued Revenue</h4>
                            </div>
                            <p class="text-sm text-gray-600 mb-4 h-16">
                                Service performed, but cash has <em>not</em> been received. We must record the asset (receivable) and the revenue.
                            </p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mb-4">
                                // Example: ₱200 Interest earned<br>
                                Dr. Interest Receivable .. 200<br>
                                &nbsp;&nbsp;&nbsp;Cr. Interest Revenue ..... 200
                            </div>
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded text-xs text-gray-500">
                                <span><strong>Effect if skipped:</strong></span>
                                <span>Assets Understated, Revenue Understated.</span>
                            </div>
                        </div>
                    </div>

                    <!-- Visualizing the Contra Asset -->
                    <div class="bg-indigo-50 border-l-8 border-indigo-500 p-10 rounded-r-2xl shadow-inner">
                        <div class="flex flex-col md:flex-row items-center justify-between mb-8">
                            <div class="md:w-2/3">
                                <h4 class="font-bold text-indigo-900 text-2xl mb-4">The Special Case: Depreciation</h4>
                                <p class="text-indigo-800 text-lg leading-relaxed">
                                    Why don't we just credit the Equipment account directly? Because of the <strong>Historical Cost Principle</strong>. We must keep the original purchase price visible on the books. We use a "Contra-Asset" account called <em>Accumulated Depreciation</em> to track the wear and tear separately.
                                </p>
                            </div>
                            <div class="md:w-1/3 flex justify-center mt-6 md:mt-0">
                                <div class="bg-white p-4 rounded-lg shadow-md border border-indigo-200 text-center">
                                    <span class="block text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Formula</span>
                                    <span class="block text-2xl font-bold text-indigo-700">Cost - Acc. Depr.</span>
                                    <span class="block text-sm text-gray-500 mt-1">= Book Value</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 items-center">
                            <!-- T Account: Equipment -->
                            <div class="w-48 bg-white p-4 rounded shadow">
                                <div class="text-center font-bold border-b-2 border-black mb-2 pb-1">Equipment</div>
                                <div class="flex h-24">
                                    <div class="w-1/2 border-r-2 border-black text-right pr-2 pt-1 relative">
                                        <span class="block font-mono text-lg">10,000</span>
                                        <span class="text-[10px] text-gray-400 absolute bottom-1 right-2">(Cost)</span>
                                    </div>
                                    <div class="w-1/2 h-full"></div>
                                </div>
                            </div>
                            
                            <div class="text-6xl font-thin text-indigo-300">-</div>

                            <!-- T Account: Acc. Depr -->
                            <div class="w-48 bg-white p-4 rounded shadow">
                                <div class="text-center font-bold border-b-2 border-black mb-2 pb-1">Accum. Depr.</div>
                                <div class="flex h-24">
                                    <div class="w-1/2 border-r-2 border-black h-full"></div>
                                    <div class="w-1/2 h-full pl-2 pt-1 relative">
                                        <span class="block font-mono text-lg text-red-600">2,000</span>
                                        <span class="text-[10px] text-gray-400 absolute bottom-1 left-2">(Adjustments)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-6xl font-thin text-indigo-300">=</div>

                            <div class="text-center">
                                <span class="block text-4xl font-bold text-indigo-900">₱8,000</span>
                                <span class="block text-indigo-600 font-medium">Net Book Value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================================================================================== -->
            <!-- STEP 8: CLOSING ENTRIES                                                            -->
            <!-- ================================================================================== -->
            <section class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl">
                    
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-100 pb-8 mb-10">
                        <div class="flex items-center">
                            <span class="text-8xl font-black text-slate-100 mr-6 -ml-4 select-none tracking-tighter">08</span>
                            <div>
                                <h3 class="text-4xl font-extrabold text-slate-800 tracking-tight">Closing Entries</h3>
                                <p class="text-xl text-pink-600 font-medium mt-1">Resetting the Scoreboard</p>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex flex-wrap gap-2">
                            <span class="px-4 py-2 bg-pink-50 text-pink-700 text-xs font-bold uppercase rounded-full tracking-wider border border-pink-100">Nominal Accounts</span>
                            <span class="px-4 py-2 bg-pink-50 text-pink-700 text-xs font-bold uppercase rounded-full tracking-wider border border-pink-100">Real Accounts</span>
                            <span class="px-4 py-2 bg-pink-50 text-pink-700 text-xs font-bold uppercase rounded-full tracking-wider border border-pink-100">REID Method</span>
                        </div>
                    </div>

                    <!-- Intro -->
                    <div class="prose max-w-none text-gray-600 mb-12 leading-loose">
                        <p>
                            Imagine a football stadium. At the end of the game, the scoreboard might read "Home: 24, Away: 17." Before the next game begins, they don't keep adding points to that score. They reset it to "0-0."
                        </p>
                        <p>
                            In accounting, <strong>Revenues, Expenses, and Withdrawals</strong> are like the score of the game. They track performance for <em>one year</em>. We call these "Temporary" or "Nominal" accounts. At year-end, their balances are transferred to Owner's Capital, and they start the new year at zero. Assets, Liabilities, and Capital are "Permanent" or "Real" accounts—they are never closed because they represent ongoing existence.
                        </p>
                    </div>

                    <!-- The REID Method - Detailed Walkthrough -->
                    <div class="bg-gray-900 rounded-3xl p-10 text-gray-300 font-mono shadow-2xl border-4 border-gray-800">
                        <div class="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                            <h4 class="text-white text-2xl font-bold">The Closing Sequence (REID Method)</h4>
                            <div class="flex space-x-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        
                        <!-- Entry 1: Revenue -->
                        <div class="mb-10 pl-6 border-l-4 border-green-500 relative">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs">R</div>
                            <div class="flex justify-between text-xs text-green-400 mb-2 uppercase tracking-widest font-bold">
                                <span>Entry 1: Close Revenue</span>
                                <span>Dec 31</span>
                            </div>
                            <div class="bg-gray-800 p-4 rounded-lg">
                                <div class="grid grid-cols-12 gap-4 mb-2">
                                    <div class="col-span-8 text-white">Service Revenue</div>
                                    <div class="col-span-2 text-right">30,000</div>
                                    <div class="col-span-2"></div>
                                </div>
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-8 pl-8">Income Summary</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">30,000</div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2 italic pl-2">
                                Logic: Revenue has a Credit balance. To kill it (make it zero), we Debit it. The Credit goes to the temporary holding bucket "Income Summary".
                            </p>
                        </div>

                        <!-- Entry 2: Expenses -->
                        <div class="mb-10 pl-6 border-l-4 border-red-500 relative">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs">E</div>
                            <div class="flex justify-between text-xs text-red-400 mb-2 uppercase tracking-widest font-bold">
                                <span>Entry 2: Close Expenses</span>
                                <span>Dec 31</span>
                            </div>
                            <div class="bg-gray-800 p-4 rounded-lg">
                                <div class="grid grid-cols-12 gap-4 mb-2">
                                    <div class="col-span-8 text-white">Income Summary</div>
                                    <div class="col-span-2 text-right">13,400</div>
                                    <div class="col-span-2"></div>
                                </div>
                                <div class="grid grid-cols-12 gap-4 mb-1">
                                    <div class="col-span-8 pl-8">Salaries Expense</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">8,000</div>
                                </div>
                                <div class="grid grid-cols-12 gap-4 mb-1">
                                    <div class="col-span-8 pl-8">Rent Expense</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">3,000</div>
                                </div>
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-8 pl-8">... Other Expenses</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">2,400</div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2 italic pl-2">
                                Logic: Expenses have Debit balances. To kill them, we Credit them.
                            </p>
                        </div>

                        <!-- Entry 3: Income Summary -->
                        <div class="mb-10 pl-6 border-l-4 border-blue-500 relative">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs">I</div>
                            <div class="flex justify-between text-xs text-blue-400 mb-2 uppercase tracking-widest font-bold">
                                <span>Entry 3: Close Income Summary</span>
                                <span>Dec 31</span>
                            </div>
                            <div class="bg-gray-800 p-4 rounded-lg border border-blue-900/50">
                                <div class="mb-2 text-xs text-blue-300 text-center border-b border-gray-700 pb-2">
                                    Current Status of Income Summary:<br>
                                    Credit (30,000) - Debit (13,400) = Credit Bal (16,600)
                                </div>
                                <div class="grid grid-cols-12 gap-4 mb-2">
                                    <div class="col-span-8 text-white">Income Summary</div>
                                    <div class="col-span-2 text-right">16,600</div>
                                    <div class="col-span-2"></div>
                                </div>
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-8 pl-8">Smith, Capital</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">16,600</div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2 italic pl-2">
                                Logic: The "Income Summary" bucket holds the Net Income. We now pour that profit into the owner's permanent Capital account.
                            </p>
                        </div>

                        <!-- Entry 4: Drawings -->
                        <div class="pl-6 border-l-4 border-yellow-500 relative">
                            <div class="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs">D</div>
                            <div class="flex justify-between text-xs text-yellow-400 mb-2 uppercase tracking-widest font-bold">
                                <span>Entry 4: Close Drawings</span>
                                <span>Dec 31</span>
                            </div>
                            <div class="bg-gray-800 p-4 rounded-lg">
                                <div class="grid grid-cols-12 gap-4 mb-2">
                                    <div class="col-span-8 text-white">Smith, Capital</div>
                                    <div class="col-span-2 text-right">2,000</div>
                                    <div class="col-span-2"></div>
                                </div>
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-8 pl-8">Smith, Drawings</div>
                                    <div class="col-span-2"></div>
                                    <div class="col-span-2 text-right">2,000</div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2 italic pl-2">
                                Logic: Drawings skip the "Income Summary" because they are not expenses. They reduce Equity directly.
                            </p>
                        </div>
                    </div>

                    <!-- Flow Diagram -->
                    <div class="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 mb-6 text-center uppercase tracking-widest">The Great Filtering Process</h4>
                        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                            
                            <!-- Bucket 1 -->
                            <div class="bg-white p-6 rounded-lg shadow text-center w-full md:w-1/4 border-t-4 border-green-500">
                                <span class="font-bold text-green-800 block text-lg mb-1">Revenues</span>
                                <span class="text-xs text-gray-500">Starts Credit</span>
                                <div class="mt-4 text-2xl">⬇️</div>
                            </div>
                            
                            <div class="hidden md:block text-gray-300 text-4xl">→</div>

                            <!-- Bucket 2 -->
                            <div class="bg-white p-6 rounded-lg shadow text-center w-full md:w-1/4 border-t-4 border-red-500">
                                <span class="font-bold text-red-800 block text-lg mb-1">Expenses</span>
                                <span class="text-xs text-gray-500">Starts Debit</span>
                                <div class="mt-4 text-2xl">⬇️</div>
                            </div>

                            <div class="hidden md:block text-gray-300 text-4xl">→</div>

                            <!-- Mixing Pot -->
                            <div class="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-full md:w-1/4 border-2 border-blue-400 transform scale-105">
                                <span class="font-bold text-blue-900 block text-lg mb-1">Income Summary</span>
                                <span class="text-xs text-blue-700">The Temporary Mixing Pot</span>
                                <div class="mt-4 font-bold text-blue-900">Net Income</div>
                            </div>

                            <div class="hidden md:block text-gray-300 text-4xl">→</div>

                            <!-- Final Destination -->
                            <div class="bg-slate-800 p-6 rounded-lg shadow-xl text-center w-full md:w-1/4">
                                <span class="font-bold text-white block text-lg mb-1">Owner's Capital</span>
                                <span class="text-xs text-gray-400">The Permanent Reservoir</span>
                                <div class="mt-4 text-green-400 font-bold">+ Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================================================================================== -->
            <!-- STEP 9: POST-CLOSING TRIAL BALANCE                                                 -->
            <!-- ================================================================================== -->
            <section class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl">
                    
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-100 pb-8 mb-10">
                        <div class="flex items-center">
                            <span class="text-8xl font-black text-slate-100 mr-6 -ml-4 select-none tracking-tighter">09</span>
                            <div>
                                <h3 class="text-4xl font-extrabold text-slate-800 tracking-tight">Post-Closing Trial Balance</h3>
                                <p class="text-xl text-amber-600 font-medium mt-1">The Final Checkpoint</p>
                            </div>
                        </div>
                    </div>

                    <div class="prose max-w-none text-gray-600 mb-12">
                        <p class="text-lg">
                            We have reached the end of the year. The ledger has been adjusted, and all temporary accounts have been zeroed out. But did we make a mistake during the closing process? The <strong>Post-Closing Trial Balance</strong> is the final safeguard. It lists only the accounts that remain open—the "survivors."
                        </p>
                        <p>
                            If you see a Revenue or Expense account on this list, <strong>STOP</strong>. You have made a critical error.
                        </p>
                    </div>

                    <!-- Formal Post-Closing Trial Balance Table -->
                    <div class="bg-white border-4 border-double border-gray-300 shadow-2xl mx-auto max-w-2xl font-mono text-sm p-8 mb-12">
                        <div class="text-center mb-6">
                            <h5 class="font-bold uppercase text-lg">Global Tech Services</h5>
                            <p class="font-bold">Post-Closing Trial Balance</p>
                            <p class="italic text-gray-500">December 31, 2024</p>
                        </div>
                        
                        <table class="w-full mb-6">
                            <thead class="border-b-2 border-gray-800">
                                <tr>
                                    <th class="text-left pb-2">Account Title</th>
                                    <th class="text-right pb-2">Debit</th>
                                    <th class="text-right pb-2">Credit</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr>
                                    <td class="py-1">Cash</td>
                                    <td class="text-right">₱ 15,000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="py-1">Accounts Receivable</td>
                                    <td class="text-right">8,200</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="py-1">Supplies</td>
                                    <td class="text-right">1,500</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="py-1">Prepaid Insurance</td>
                                    <td class="text-right">1,100</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="py-1">Office Equipment</td>
                                    <td class="text-right">10,000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="py-1 pl-8">Accumulated Depreciation - Equip.</td>
                                    <td></td>
                                    <td class="text-right">500</td>
                                </tr>
                                <tr>
                                    <td class="py-1">Accounts Payable</td>
                                    <td></td>
                                    <td class="text-right">4,000</td>
                                </tr>
                                 <tr>
                                    <td class="py-1">Salaries Payable</td>
                                    <td></td>
                                    <td class="text-right">300</td>
                                </tr>
                                 <tr>
                                    <td class="py-1">Unearned Revenue</td>
                                    <td></td>
                                    <td class="text-right">6,200</td>
                                </tr>
                                 <tr>
                                    <td class="py-1">Interest Payable</td>
                                    <td></td>
                                    <td class="text-right">100</td>
                                </tr>
                                <tr>
                                    <td class="py-1 font-bold text-blue-800">Smith, Capital</td>
                                    <td></td>
                                    <td class="text-right font-bold text-blue-800">24,700</td>
                                </tr>
                            </tbody>
                            <tfoot class="border-t-2 border-gray-800 font-bold">
                                <tr>
                                    <td class="pt-2">Totals</td>
                                    <td class="text-right pt-2 border-b-4 border-double border-gray-800">₱ 35,800</td>
                                    <td class="text-right pt-2 border-b-4 border-double border-gray-800">₱ 35,800</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="text-center text-xs text-gray-400 italic">
                            *Note: No Revenue, Expense, or Drawing accounts appear here.
                        </div>
                    </div>

                    <!-- The Graveyard Metaphor -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <!-- Left: The Living -->
                        <div class="bg-white p-8 rounded-2xl border-2 border-emerald-100 shadow-lg flex flex-col relative overflow-hidden">
                            <div class="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PERMANENT</div>
                            <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 class="font-bold text-gray-800 mb-2 text-center text-xl">The Survivors (Real Accounts)</h4>
                            <p class="text-sm text-gray-500 mb-6 text-center">These accounts continue into next year with their ending balances.</p>
                            
                            <div class="bg-emerald-50 p-6 rounded-xl font-mono text-sm space-y-3">
                                <div class="flex justify-between border-b border-emerald-200 pb-2">
                                    <span>Cash</span>
                                    <span class="font-bold text-gray-800">15,000</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-200 pb-2">
                                    <span>Accounts Receivable</span>
                                    <span class="font-bold text-gray-800">8,200</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-200 pb-2">
                                    <span>Accounts Payable</span>
                                    <span class="font-bold text-gray-800">(4,000)</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-200 pb-2 bg-emerald-200/50 p-1 rounded">
                                    <span>Smith, Capital</span>
                                    <span class="font-bold text-emerald-900">24,700</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right: The Dead -->
                        <div class="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-sm flex flex-col relative opacity-75 hover:opacity-100 transition-opacity">
                            <div class="absolute top-0 right-0 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TEMPORARY</div>
                            <div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </div>
                            <h4 class="font-bold text-gray-800 mb-2 text-center text-xl">The Closed (Nominal Accounts)</h4>
                            <p class="text-sm text-gray-500 mb-6 text-center">These accounts MUST be empty (zero). If they have a balance, you failed Step 8.</p>
                            
                            <div class="bg-gray-50 p-6 rounded-xl font-mono text-sm space-y-3 text-gray-400">
                                <div class="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Service Revenue</span>
                                    <span>0.00</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Rent Expense</span>
                                    <span>0.00</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Salaries Expense</span>
                                    <span>0.00</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-2">
                                    <span>Withdrawals</span>
                                    <span>0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detective Work: Troubleshooting -->
                    <div class="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-xl">
                        <div class="flex items-start">
                            <div class="mr-4 mt-1">
                                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-red-900 text-lg mb-2">Troubleshooting: What if the columns don't match?</h4>
                                <p class="text-red-800 mb-4 text-sm">The Post-Closing Trial Balance is unforgiving. Here are the common suspects:</p>
                                <ul class="list-disc list-inside text-sm text-red-700 space-y-2">
                                    <li><strong>The Net Loss Trap:</strong> Did you accidentally credit Capital for a Net Loss? (Loss reduces equity, so Debit Capital).</li>
                                    <li><strong>The Capital Error:</strong> Did you use the Capital balance from the <em>Adjusted Trial Balance</em>? You shouldn't! You must use the <em>new</em> Ending Capital from Step 2 (Changes in Equity).</li>
                                    <li><strong>The Ghost of Drawings:</strong> Did you forget to close the Drawings account? It often gets missed because it's not an expense.</li>
                                    <li><strong>The Zombie Account:</strong> Did you carry forward a balance for Depreciation Expense? (Only Accumulated Depreciation survives).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================================================================================== -->
            <!-- STEP 10: REVERSING ENTRIES                                                         -->
            <!-- ================================================================================== -->
            <section class="group relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-slate-400 to-gray-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative bg-white p-10 rounded-3xl border border-gray-200 shadow-2xl">
                    
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-100 pb-8 mb-10">
                        <div class="flex items-center">
                            <span class="text-8xl font-black text-slate-100 mr-6 -ml-4 select-none tracking-tighter">10</span>
                            <div>
                                <h3 class="text-4xl font-extrabold text-slate-800 tracking-tight">Reversing Entries</h3>
                                <p class="text-xl text-gray-500 font-medium mt-1">Optional: Preparing for the New Year</p>
                            </div>
                        </div>
                        <div class="mt-6 md:mt-0 flex flex-wrap gap-2">
                            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-full tracking-wider border border-gray-300">Jan 1st</span>
                            <span class="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold uppercase rounded-full tracking-wider border border-gray-300">Efficiency</span>
                        </div>
                    </div>

                    <!-- Intro -->
                    <div class="prose max-w-none text-gray-600 mb-12 leading-loose">
                        <p>
                            This step happens on <strong>Day 1 of the NEW accounting period</strong> (e.g., January 1st). It is the exact opposite of an adjusting entry made on December 31st. Why would we do work just to undo it?
                        </p>
                        <p>
                            <strong>Efficiency.</strong> Reversing entries allow the bookkeeper to just "record cash payments as expenses" in the new year without worrying about what happened last year. It simplifies the routine recording of transactions.
                        </p>
                    </div>

                    <!-- The Comparative Timeline Case Study -->
                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
                        <h4 class="text-2xl font-bold text-slate-800 mb-6 text-center">Case Study: The Payroll Problem</h4>
                        <p class="text-center text-gray-500 mb-8 italic max-w-2xl mx-auto">
                            Scenario: On Dec 31, we owe ₱300 in salaries. We pay total payroll of ₱1,000 on Jan 10 (covering the ₱300 old debt + ₱700 new work).
                        </p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            <!-- Method A: The Hard Way -->
                            <div class="bg-white p-6 rounded-xl border-t-8 border-red-400 shadow-lg">
                                <h5 class="font-bold text-red-800 text-lg mb-4 text-center uppercase tracking-widest">Method A: No Reversing</h5>
                                
                                <div class="space-y-6">
                                    <div>
                                        <div class="text-xs font-bold text-gray-400 mb-1">Dec 31 (Adjustment)</div>
                                        <div class="bg-red-50 p-2 rounded text-xs font-mono border border-red-100">
                                            Dr. Salary Exp .... 300<br>
                                            &nbsp;&nbsp;Cr. Salary Payable .. 300
                                        </div>
                                    </div>

                                    <div class="flex justify-center text-2xl text-gray-300">⬇️</div>

                                    <div>
                                        <div class="text-xs font-bold text-gray-400 mb-1">Jan 10 (Payment) - COMPLEX!</div>
                                        <p class="text-xs text-red-600 mb-2 italic">Bookkeeper must look up last year's records to split the transaction.</p>
                                        <div class="bg-red-50 p-2 rounded text-xs font-mono border border-red-100 font-bold">
                                            Dr. Salary Payable .. 300 <span class="text-gray-400">// Clearing debt</span><br>
                                            Dr. Salary Exp ...... 700 <span class="text-gray-400">// New expense</span><br>
                                            &nbsp;&nbsp;Cr. Cash ............ 1000
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Method B: The Smart Way -->
                            <div class="bg-white p-6 rounded-xl border-t-8 border-green-400 shadow-lg">
                                <h5 class="font-bold text-green-800 text-lg mb-4 text-center uppercase tracking-widest">Method B: Reversing Entry</h5>
                                
                                <div class="space-y-4">
                                    <div>
                                        <div class="text-xs font-bold text-gray-400 mb-1">Dec 31 (Adjustment)</div>
                                        <div class="bg-green-50 p-2 rounded text-xs font-mono border border-green-100">
                                            Dr. Salary Exp .... 300<br>
                                            &nbsp;&nbsp;Cr. Salary Payable .. 300
                                        </div>
                                    </div>

                                    <div>
                                        <div class="text-xs font-bold text-gray-400 mb-1">Jan 1 (Reversal)</div>
                                        <div class="bg-blue-50 p-2 rounded text-xs font-mono border border-blue-100">
                                            Dr. Salary Payable .. 300<br>
                                            &nbsp;&nbsp;Cr. Salary Exp ...... 300
                                        </div>
                                        <p class="text-[10px] text-gray-400 mt-1">*Salaries Exp now has a weird Credit balance.</p>
                                    </div>

                                    <div>
                                        <div class="text-xs font-bold text-gray-400 mb-1">Jan 10 (Payment) - SIMPLE!</div>
                                        <p class="text-xs text-green-600 mb-2 italic">Bookkeeper just records payment as expense. No thinking required.</p>
                                        <div class="bg-green-50 p-2 rounded text-xs font-mono border border-green-100 font-bold">
                                            Dr. Salary Exp ...... 1000<br>
                                            &nbsp;&nbsp;Cr. Cash ............ 1000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 bg-blue-50 p-4 rounded text-center border border-blue-200">
                            <p class="text-sm text-blue-800">
                                <strong>The Magic Math:</strong> In Method B, Expense was credited 300 (Jan 1) and debited 1000 (Jan 10).<br>
                                Net Balance = 1000 - 300 = <strong>₱700</strong>. This matches the correct new expense amount perfectly!
                            </p>
                        </div>
                    </div>

                    <!-- The Golden Rules -->
                    <div class="bg-white p-6 rounded-xl border border-gray-300">
                        <h5 class="font-bold text-gray-800 mb-4 flex items-center">
                            <svg class="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            The Golden Rules of Reversing
                        </h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div class="bg-green-50 p-4 rounded text-green-900 border border-green-200">
                                <strong class="block mb-2 uppercase text-xs tracking-wider">ALWAYS Reverse:</strong>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Accrued Expenses (Salaries, Interest, Taxes).</li>
                                    <li>Accrued Revenues (Interest Receivable, Unbilled Services).</li>
                                </ul>
                            </div>
                            <div class="bg-red-50 p-4 rounded text-red-900 border border-red-200">
                                <strong class="block mb-2 uppercase text-xs tracking-wider">NEVER Reverse:</strong>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Depreciation (It accumulates forever).</li>
                                    <li>Bad Debt Expense.</li>
                                    <li>Prepayments recorded initially as Assets.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    exercises: [
        {
            type: "mcq",
            question: "Which of the following accounts appears on a Post-Closing Trial Balance?",
            options: ["Service Revenue", "Rent Expense", "Accounts Receivable", "Owner's Withdrawals"],
            correctIndex: 2,
            explanation: "Only Permanent (Real) accounts appear post-closing. Revenue, Expenses, and Withdrawals are closed to zero."
        },
        {
            type: "mcq",
            question: "What is the correct order for closing entries (REID)?",
            options: ["Revenue, Expenses, Income Summary, Drawings", "Revenue, Equity, Income, Debt", "Rent, Expenses, Interest, Drawings", "Revenue, Expenses, Investments, Drawings"],
            correctIndex: 0,
            explanation: "Close Revenue, then Expenses, then Income Summary (Net Income/Loss), then Drawings."
        },
        {
            type: "mcq",
            question: "If a company has a Net Loss for the year, the closing entry for Income Summary will include:",
            options: ["Debit to Capital", "Credit to Capital", "Debit to Revenue", "Credit to Drawings"],
            correctIndex: 0,
            explanation: "A Net Loss means Income Summary has a Debit balance. To close it, we Credit Income Summary and Debit Capital (reducing equity)."
        },
        {
            type: "mcq",
            question: "Why do we perform Reversing Entries?",
            options: ["To correct errors in the previous year", "To ensure assets are depreciated", "To simplify recording of routine transactions in the new year", "To close the books"],
            correctIndex: 2,
            explanation: "Reversing entries are optional and used purely for convenience to avoid splitting transactions in the new period."
        },
        {
            type: "mcq",
            question: "Which account is NEVER closed?",
            options: ["Accumulated Depreciation", "Depreciation Expense", "Income Summary", "Sales Revenue"],
            correctIndex: 0,
            explanation: "Accumulated Depreciation is a Contra-Asset (Real Account). It stays on the books. Depreciation Expense is a Nominal Account and is closed."
        }
    ]
},

        {
            day: "Day 3 - 5",
            topic: "Step by Step: Hands-On Review of the Accounting Cycle",
            content: `
                <div class="space-y-6">
                    <div class="bg-blue-600 text-white p-8 rounded-xl shadow-lg text-center">
                        <h2 class="text-3xl font-bold mb-2">Comprehensive Activity</h2>
                        <p class="text-blue-100">Please complete the accounting cycle for the assigned business scenario below.</p>
                    </div>
                    
                    <div id="accounting-activity-root" class="min-h-[800px] bg-gray-50 border rounded-xl shadow-inner">
                        <div class="flex items-center justify-center h-full pt-20 text-gray-400">
                            <span class="animate-pulse">Loading Activity Module...</span>
                        </div>
                    </div>
                </div>
            `,
            exercises: [
                {
                    title: "Accounting Cycle Simulation",
                    type: "custom-mount", // Ensure your LMS supports executing 'mountLogic'
                    mountLogic: async () => {
                        try {
                            // 1. Dynamic Import of the Student App
                            // Path is relative to this file (js/content/) -> js/content/accountingCycle/StudentApp.js
                            const module = await import('./accountingCycle/StudentApp.js');
                            
                            // 2. Mount the App
                            if (module.default && typeof module.default === 'function') {
                                // We pass the ID of the div defined in 'content' above
                                module.default('accounting-activity-root');
                            } else {
                                console.error("StudentApp.js did not export a default mount function.");
                            }
                        } catch (err) {
                            console.error("Failed to load StudentApp:", err);
                            const root = document.getElementById('accounting-activity-root');
                            if (root) root.innerHTML = `<div class="p-8 text-red-600 font-bold">Error loading activity: ${err.message}</div>`;
                        }
                    }
                }
            ]
        }
    ]
};
