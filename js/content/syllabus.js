import { createPlaceholderDays } from '../utils.js';
import { unit1Data } from './unit1-accounting-cycle.js';
import { unit2Data } from './unit2Week1Merch.js'; 
import { unit2Week2Data } from './unit2Week2Merch.js';
import { unit2Week2Data } from './unit2Week3Merch.js';


export const courseData = {
    outline: {
        title: "Course Syllabus",
        summary: `
            <div class="max-w-4xl mx-auto space-y-8 fade-in">
                <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 class="text-2xl font-bold text-blue-900 mb-4">Course Description</h3>
                    <p class="text-gray-600 leading-relaxed">The course deals with the preparation and analysis of financial statements of a merchandising business and practice of simple taxation. It introduces the nature of accounting for corporations, focusing on the basic structure of equity and shareholder transactions. It also covers the principles of taxation and the preparation of basic income tax returns for individuals and corporations.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-2">Grading System</h4>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex justify-between"><span>Written Work</span> <span class="font-bold">30%</span></li>
                            <li class="flex justify-between"><span>Performance Tasks</span> <span class="font-bold">50%</span></li>
                            <li class="flex justify-between"><span>Term Exams</span> <span class="font-bold">20%</span></li>
                        </ul>
                    </div>
                    <div class="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                        <h4 class="font-bold text-emerald-900 mb-2">Core Competencies</h4>
                        <ul class="list-disc list-inside text-sm text-emerald-800 space-y-1">
                            <li>Merchandising Accounting Cycle</li>
                            <li>Statement of Comprehensive Income</li>
                            <li>Corporate Equity & Dividends</li>
                            <li>Income Tax Returns (1701/1702)</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        full: `
<div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 fade-in prose prose-blue max-w-none">
    <h2 class="text-2xl font-bold text-slate-800 mb-4">
        SUBJECT OUTLINE: Fundamentals of Accountancy, Business, and Management 2 (FABM 2)
    </h2>
    <p><strong>Grade Level:</strong> 12 | <strong>Strand:</strong> Accountancy, Business, and Management (ABM) | <strong>Prerequisite:</strong> Fundamentals of Accountancy, Business, and Management 1 (FABM 1)</p>

    <hr class="my-6">

    <!-- Course Description -->
    <h3 class="text-xl font-bold text-slate-700 mt-6 mb-3">I. Course Description</h3>
    <p class="text-gray-600">
        The course deals with the preparation and analysis of financial statements of a merchandising business and practice of simple taxation. 
        It introduces the nature of accounting for corporations, focusing on the basic structure of equity and shareholder transactions. 
        It also covers the principles of taxation and the preparation of basic income tax returns for individuals and corporations.
    </p>

    <!-- Learning Objectives -->
    <h3 class="text-xl font-bold text-slate-700 mt-8 mb-3">II. Course Learning Objectives</h3>
    <p class="text-gray-600">By the end of this course, learners will be able to:</p>
    <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>Complete the accounting cycle for a service and merchandising business.</li>
        <li>Prepare and analyze the Statement of Comprehensive Income for a merchandising business.</li>
        <li>Understand the unique features of a Corporation and record basic equity transactions.</li>
        <li>Comprehend the principles of taxation and prepare basic Income Tax Returns (BIR Forms 1701 and 1702).</li>
    </ul>

    <!-- Detailed Learning Plan -->
    <h3 class="text-xl font-bold text-slate-700 mt-8 mb-3">III. Detailed Learning Plan</h3>

    <!-- Unit 1 -->
    <h4 class="text-lg font-semibold text-slate-600 mt-6">UNIT 1: Review of the Accounting Cycle (Service Business)</h4>
    <p class="text-gray-600"><strong>Duration:</strong> 1 Week (Preliminaries)</p>
    <p class="text-gray-600"><strong>Objective:</strong> Reinforce the fundamental skills acquired in FABM 1 to ensure readiness for complex merchandising transactions.</p>
    <p class="text-gray-600"><strong>Content:</strong> Review of the 10 Steps of the Accounting Cycle, Analysis of business transactions, Journalizing, Posting, Trial Balance, Adjusting Entries, Financial Statements, Closing Entries.</p>
    <p class="text-gray-600"><strong>Key Activity:</strong> Diagnostic Simulation: Completing the full 10-step manual accounting cycle for a service provider case study.</p>

    <!-- Unit 2 -->
    <h4 class="text-lg font-semibold text-slate-600 mt-6">UNIT 2: Accounting for Merchandising Business</h4>
    <p class="text-gray-600"><strong>Duration:</strong> 7 Weeks | <strong>Focus:</strong> Inventory Systems, COGS, and Financial Reporting.</p>
    <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li><strong>Week 1:</strong> Introduction to Merchandising & Inventory Systems – Service vs. Merchandising models, Merchandise Inventory, Perpetual vs. Periodic Systems.</li>
        <li><strong>Week 2:</strong> Merchandising Transactions – Recording discounts, returns, freight - on purchases and sales transactions .</li>
        <li><strong>Week 3:</strong> Financial Statement – Worksheet, Net Sales, Cost of Goods sold, Gross Profit, Operating Expenses, Net Income or Loss.</li>
        <li><strong>Week 4:</strong> Unit Performance Task – Merchandising Cycle Simulation (Transactions → Financial Statements).</li>
    </ul>

    <!-- Unit 3 -->
    <h4 class="text-lg font-semibold text-slate-600 mt-6">UNIT 3: Corporation Accounting</h4>
    <p class="text-gray-600"><strong>Duration:</strong> 4 Weeks | <strong>Focus:</strong> Corporate Structure, Equity, and Formation.</p>
    <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li><strong>Week 5:</strong> Corporation Basics – Nature, characteristics, Shareholders’ Equity, issuance of shares.</li>
        <li><strong>Week 6:</strong> Dividends & Retained Earnings – Cash vs. Stock Dividends, crucial dates, restricted vs. unrestricted earnings. <em>Assessment: Quiz on Share Issuance and Dividends.</em></li>
        <li><strong>Week 7:</strong> Formation & Legal Requirements – SEC steps, Articles of Incorporation, capitalization terms.</li>
        <li><strong>Week 8:</strong> Early Operations – Initial contributions, corporate books, Statement of Changes in Equity. <em>Assessment: Case-based quiz.</em></li>
        <li><strong>Week 9:</strong> Unit Performance Task – Corporation Accounting - Computerized.</em></li>
    </ul>

    <!-- Unit 4 -->
    <h4 class="text-lg font-semibold text-slate-600 mt-6">UNIT 4: Income Taxation</h4>
    <p class="text-gray-600"><strong>Duration:</strong> 3 Weeks | <strong>Focus:</strong> Principles, Computation, and Filing.</p>
    <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li><strong>Week 10:</strong> Foundations of Taxation – Purpose, principles, classification, taxpayers.</li>
        <li><strong>Week 11:</strong> Computation & Compliance – Gross Income, deductions, individual & corporate tax computation, compliance deadlines. <em>Assessment: Quiz.</em></li>
        <li><strong>Week 12:</strong> Unit Performance Task - Preparing Tax Returns – Walkthrough of BIR Forms 1701 & 1702, simulation activity.</li>
    </ul>

    <!-- Grading System -->
    <h3 class="text-xl font-bold text-slate-700 mt-8 mb-3">IV. Grading System</h3>
    <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>Written Work: 30% (Quizzes, Summative Tests)</li>
        <li>Performance Tasks: 50% (Simulations, Tax Forms, Accounting Cycle Sets)</li>
        <li>Term Exams: 20% (Midterm and Final)</li>
    </ul>

    <!-- References -->
    <h3 class="text-xl font-bold text-slate-700 mt-8 mb-3">V. References</h3>
    <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>Basic Accounting by Win Ballada</li>
        <li>Fundamentals of Accountancy, Business, and Management 2 by Beticon, et al.</li>
        <li>Bureau of Internal Revenue (BIR) Regulations and Tax Code</li>
        <li>International Financial Reporting Standards (IFRS) / PFRS</li>
    </ul>
</div>
        `
    },
    terms: [
        {
            title: "Term 1 (Midterm)",
            units: [
                {
                    id: "u1",
                    title: "Unit 1: Review of Accounting Cycle",
                    weeks: [
                        {
                            id: "u1w1",
                            title: "Week 1: Service Business Review",
                            days: unit1Data.week1 // NEW: Using imported data instead of placeholders
                        }
                    ]
                },
                {
                    id: "u2",
                    title: "Unit 2: Merchandising Business",
                    weeks: [
                        { 
                            id: "u2w1", 
                            title: "Week 1: Intro to Merchandising", 
                            days: unit2Week1Data.week1 
                        },
                        {
                            id: "u2w2",
                            title: "Week 2: Merchandising Transactions",
                            days: unit2Week2Data.week2
                              //  "Recording Purchases and Sales", "Trade, Purchase and Sales Discounts, Returns and Allowances", "Net Purchases and Sales Calculation", "Freight-in and Freight Out (FOB Destination/Shipping)"])
                        },
                        { 
                            id: "u2w3", title: "Week 3: Financial Statement", 
                            days: unit2Week3Data.week3
                              // createPlaceholderDays(["Worksheet and Ending Inventory", "Net Sales, COGS, Gross Profit, and Opertaing Expenses", "Single and Multi-Step Income Statement", "Balance Sheet"]) 
                        },
                        { 
                            id: "u2w4", title: "Week 4: Performance Task - Merchandising Cycle Simulation", 
                            days: createPlaceholderDays(["Introduction and 1st Day", "Continuation - 2nd Day", "Continuation - 3rd Day", "Continuation 4th Day"]) 
                        }
                    ]
                }
            ]
        },
        {
            title: "Term 2 (Final Term)",
            units: [
                {
                    id: "u3",
                    title: "Unit 3: Corporation Accounting",
                    weeks: [
                        {
                            id: "u3w5",
                            title: "Week 5: Intro to Corps & Equity",
                            days: createPlaceholderDays([
                                "Nature of Corporations",
                                "Classes of Shares (Common/Preferred)",
                                "Par vs No-Par Value",
                                "Issuance of Share Capital"
                            ])
                        },
                        { 
                            id: "u3w6", title: "Week 6: Dividends & RE", 
                            days: createPlaceholderDays(["Dividend Dates", "Cash Dividends", "Stock Dividends", "Retained Earnings"]) 
                        },
                        { 
                            id: "u3w7", title: "Week 7: Formation & Legal", 
                            days: createPlaceholderDays(["Incorporation Process", "Articles of Incorporation", "By-Laws", "SEC Requirements"]) 
                        },
                        { 
                            id: "u3w8", title: "Week 8: Early Operations", 
                            days: createPlaceholderDays(["Initial Contributions", "Corporate Books", "Equity Section Presentation", "Statement of Changes in Equity"]) 
                        },
                        { 
                            id: "u3w9", title: "Week 9: Early Operations", 
                            days: createPlaceholderDays(["Initial Contributions", "Corporate Books", "Equity Section Presentation", "Statement of Changes in Equity"]) 
                        },
                    ]
                },
                {
                    id: "u4",
                    title: "Unit 4: Income Taxation",
                    weeks: [
                        { 
                            id: "u4w10", title: "Week 10: Foundations of Tax", 
                            days: createPlaceholderDays(["Purpose of Taxation", "Principles of Sound Tax System", "Direct vs Indirect Taxes", "Taxpayer Classification"]) 
                        },
                        {
                            id: "u4w11",
                            title: "Week 11: Computation & Compliance",
                            days: createPlaceholderDays([
                                "Gross Income & Exclusions",
                                "Allowable Deductions",
                                "Individual Tax Computation",
                                "Corporate Tax Overview"
                            ])
                        },
                        { 
                            id: "u4w12", title: "Week 12: Tax Returns (Forms)", 
                            days: createPlaceholderDays(["BIR Forms Overview", "Form 1701 Walkthrough", "Form 1702 Walkthrough", "Filing & Payment Deadlines"]) 
                        }
                    ]
                }
            ]
        }
    ]
};
