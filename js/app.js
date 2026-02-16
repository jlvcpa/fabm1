import { loginUser } from './auth.js';
import { courseData } from './content/syllabus.js';
import { formatRanges } from './utils.js';
import { renderQuizActivityCreator } from './content/quizAndActivityCreator.js'; 
import { renderQuizzesAndActivities } from './content/quizzesAndActivities.js'; 
import { renderQuestionImporter } from './content/toolQuestionImporter.js'; 
import { merchTransactionPracData } from './content/questionBank/qbMerchTransactions.js';
// --- NEW IMPORTS ---
import { renderAccountingCycleCreator } from './content/accountingCycleCreator.js';
import { renderAccountingCycleActivity } from './content/accountingCycleActivity.js'; 
import { renderTeacherReviewDashboard } from './content/activityResultPreview.js';
import Step05Worksheet, { validateStep05 } from './content/accountingCycle/steps/Step05Worksheet.js';
import Step06FinancialStatements, { validateStep06 } from './content/accountingCycle/steps/Step06FinancialStatements.js';
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// --- STATE MANAGEMENT ---
let currentUser = null; 
let calendarAssignments = JSON.parse(localStorage.getItem('fabm2_calendar')) || {};
let flatTopics = []; 
let currentCalendarYear, currentCalendarMonth;
const worksheetRoots = new Map();
const fsRoots = new Map(); 

// --- DOM ELEMENTS ---
const elements = {
    loginId: () => document.getElementById('login-id'),
    loginPass: () => document.getElementById('login-pass'),
    loginError: () => document.getElementById('login-error'),
    btnLogin: () => document.getElementById('btn-login'),
    loginSpinner: () => document.getElementById('login-spinner'),
    loginScreen: () => document.getElementById('login-screen'),
    appContent: () => document.getElementById('app-content'),
    userDisplayName: () => document.getElementById('user-display-name'),
    navContainer: () => document.getElementById('nav-container'),
    contentArea: () => document.getElementById('content-area'),
    pageTitle: () => document.getElementById('page-title'),
    sidebar: () => document.getElementById('sidebar'),
    sidebarOverlay: () => document.getElementById('sidebar-overlay'),
    mobileMenuBtn: () => document.getElementById('mobile-menu-btn'),
    desktopSidebarToggle: () => document.getElementById('desktop-sidebar-toggle'),
    btnLogout: () => document.getElementById('btn-logout')
};

// --- INITIALIZATION ---

function init() {
    setupEventListeners();
    setPhilippineTimeDefaults();
    generateFlatTopics();
    window.updateSchedule = updateSchedule;
}

function setupEventListeners() {
    elements.btnLogin().addEventListener('click', handleLogin);
    elements.btnLogout().addEventListener('click', handleLogout);
    
    elements.desktopSidebarToggle().addEventListener('click', () => {
        elements.sidebar().classList.toggle('collapsed');
    });
    
    elements.mobileMenuBtn().addEventListener('click', () => {
        elements.sidebar().classList.remove('-translate-x-full');
        elements.sidebarOverlay().classList.remove('hidden');
    });

    elements.sidebarOverlay().addEventListener('click', closeMobileSidebar);
}

// --- AUTH LOGIC ---

async function handleLogin() {
    const id = elements.loginId().value.trim();
    const pass = elements.loginPass().value.trim();
    const errorDiv = elements.loginError();
    const btn = elements.btnLogin();
    const spinner = elements.loginSpinner();

    if (!id || !pass) {
        errorDiv.querySelector('span').textContent = "Please enter ID and Password";
        errorDiv.classList.remove('hidden');
        return;
    }

    btn.disabled = true;
    btn.classList.add('opacity-75');
    spinner.classList.remove('hidden');
    errorDiv.classList.add('hidden');

    try {
        const user = await loginUser(id, pass);
        
        if (user) {
            currentUser = user;
            
            elements.loginScreen().classList.add('hidden');
            elements.appContent().classList.remove('hidden');
            
            const name = currentUser.role === 'teacher' 
                ? `Teacher ${currentUser.firstName} ${currentUser.lastName}`
                : `${currentUser.FirstName} ${currentUser.LastName}`;
            
            elements.userDisplayName().textContent = name;
            
            initAppInterface(currentUser.role);
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (error) {
        console.error("Login failed:", error);
        errorDiv.querySelector('span').textContent = "Invalid ID or Password";
        errorDiv.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.classList.remove('opacity-75');
        spinner.classList.add('hidden');
    }
}

function handleLogout() {
    currentUser = null;
    elements.appContent().classList.add('hidden');
    elements.loginScreen().classList.remove('hidden');
    elements.loginId().value = '';
    elements.loginPass().value = '';
    elements.navContainer().innerHTML = '';
}

// --- APP INTERFACE LOGIC ---

function initAppInterface(role) {
    renderSidebar(role);
    renderLandingPage(); 
}

function renderSidebar(role) {
    const container = elements.navContainer();
    container.innerHTML = ''; 

    // --- 1. Course Outline Button ---
    const outlineBtn = document.createElement('button');
    outlineBtn.className = "w-full text-left px-6 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border-l-4 border-transparent hover:border-blue-500 focus:outline-none whitespace-nowrap overflow-hidden";
    outlineBtn.innerHTML = '<i class="fas fa-home w-6"></i> <span class="sidebar-text-detail">Course Outline</span>';
    outlineBtn.onclick = () => {
        renderLandingPage();
        closeMobileSidebar();
    };
    container.appendChild(outlineBtn);

    // --- 2. Dynamic Terms/Units (Syllabus) ---
    courseData.terms.forEach(term => {
        const termHeader = document.createElement('div');
        termHeader.className = "px-6 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider sidebar-text-detail whitespace-nowrap overflow-hidden";
        termHeader.textContent = term.title;
        container.appendChild(termHeader);

        term.units.forEach(unit => {
            const unitParts = unit.title.split(':');
            const unitPrefix = unitParts[0];
            const unitSuffix = unitParts.slice(1).join(':');

            const unitBtn = document.createElement('button');
            unitBtn.className = "w-full text-left px-6 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex justify-between items-center group whitespace-nowrap overflow-hidden";
            unitBtn.innerHTML = `
                <div class="truncate pr-2">
                    <span class="font-bold text-sm">${unitPrefix}</span>
                    <span class="font-medium text-sm sidebar-text-detail">:${unitSuffix}</span>
                </div>
                <i class="fas fa-chevron-down text-xs transform transition-transform duration-300 group-hover:text-blue-400"></i>
            `;
            
            const unitSubmenu = document.createElement('div');
            unitSubmenu.className = "unit-submenu bg-slate-950 hidden"; 
            
            unitBtn.onclick = () => {
                const icon = unitBtn.querySelector('.fa-chevron-down');
                if (unitSubmenu.classList.contains('hidden')) {
                    unitSubmenu.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    unitSubmenu.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            };

            unit.weeks.forEach(week => {
                const weekParts = week.title.split(':');
                const weekPrefix = weekParts[0];
                const weekSuffix = weekParts.slice(1).join(':');

                const weekBtn = document.createElement('button');
                weekBtn.className = "w-full text-left pl-10 pr-6 py-2 text-sm text-slate-400 hover:text-blue-300 hover:bg-slate-900 transition-colors border-l-2 border-transparent hover:border-blue-500 relative whitespace-nowrap overflow-hidden flex justify-between items-center group";
                
                weekBtn.innerHTML = `
                    <div class="truncate">
                        <span>${weekPrefix}</span><span class="sidebar-text-detail">:${weekSuffix}</span>
                    </div>
                    ${(week.days && week.days.length > 0) ? '<i class="fas fa-chevron-down text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>' : ''}
                `;
                
                const daySubmenu = document.createElement('div');
                daySubmenu.className = "day-submenu hidden bg-slate-950 border-l border-slate-800 ml-10"; 

                if (week.days && week.days.length > 0) {
                    week.days.forEach((day, index) => {
                        const dayBtn = document.createElement('button');
                        dayBtn.className = "w-full text-left pl-6 pr-4 py-2 text-xs text-slate-500 hover:text-blue-400 hover:bg-slate-900 transition-colors flex items-center gap-2";
                        dayBtn.innerHTML = `<i class="fas fa-circle text-[6px]"></i> <span>${day.day}: ${day.topic}</span>`;
                        
                        dayBtn.onclick = () => {
                            renderDayContent(unit, week, index);
                            closeMobileSidebar();
                            highlightActiveDay(dayBtn);
                        };
                        daySubmenu.appendChild(dayBtn);
                    });

                    weekBtn.onclick = () => {
                        const icon = weekBtn.querySelector('.fa-chevron-down');
                        const isClosed = daySubmenu.classList.contains('hidden');

                        document.querySelectorAll('.day-submenu').forEach(el => el.classList.add('hidden'));
                        document.querySelectorAll('.day-submenu').forEach(el => {
                            const prevBtn = el.previousElementSibling; 
                            if(prevBtn) {
                                const prevIcon = prevBtn.querySelector('.fa-chevron-down');
                                if(prevIcon) {
                                    prevIcon.classList.remove('rotate-180', 'opacity-100', 'text-blue-400');
                                    prevIcon.classList.add('opacity-0');
                                }
                            }
                        });

                        if (isClosed) {
                            daySubmenu.classList.remove('hidden');
                            if(icon) {
                                icon.classList.add('rotate-180', 'opacity-100', 'text-blue-400');
                                icon.classList.remove('opacity-0');
                            }
                            if (elements.sidebar().classList.contains('collapsed')) {
                                elements.sidebar().classList.remove('collapsed');
                            }
                        }
                    };
                } else {
                    weekBtn.classList.add('opacity-50', 'cursor-not-allowed');
                }

                unitSubmenu.appendChild(weekBtn);
                unitSubmenu.appendChild(daySubmenu);
            });

            container.appendChild(unitBtn);
            container.appendChild(unitSubmenu);
        });
    });

    // --- 3. Quizzes & Activities (For All Users) ---
    const qaHeader = document.createElement('div');
    qaHeader.className = "px-6 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider sidebar-text-detail whitespace-nowrap overflow-hidden";
    qaHeader.textContent = "Assessments";
    container.appendChild(qaHeader);

    // Parent Button for Quizzes & Activities
    const qaBtn = document.createElement('button');
    qaBtn.className = "w-full text-left px-6 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border-l-4 border-transparent hover:border-yellow-500 focus:outline-none whitespace-nowrap overflow-hidden flex justify-between items-center group";
    qaBtn.innerHTML = '<span><i class="fas fa-clipboard-list w-6"></i> Quizzes & Activities</span> <i class="fas fa-chevron-down text-xs transition-transform duration-300"></i>';
    
    // Submenu Container
    const qaSubmenu = document.createElement('div');
    qaSubmenu.className = "hidden bg-slate-950 border-l border-slate-800 ml-4 mb-2";

    qaBtn.onclick = () => {
        qaSubmenu.classList.toggle('hidden');
        const icon = qaBtn.querySelector('.fa-chevron-down');
        icon.classList.toggle('rotate-180');
    };
    container.appendChild(qaBtn); // Append the button
    container.appendChild(qaSubmenu); // Append the submenu container

    // 3a. Formative and Summative
    const formativeBtn = document.createElement('button');
    formativeBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-yellow-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-yellow-500";
    formativeBtn.innerHTML = '<i class="fas fa-check-square text-xs"></i> <span class="text-sm">Formative & Summative</span>';
    formativeBtn.onclick = () => {
        renderQuizzesActivitiesPage(); 
        closeMobileSidebar();
    };
    qaSubmenu.appendChild(formativeBtn);

    // 3b. Performance Tasks
    const perfTaskBtn = document.createElement('button');
    perfTaskBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-indigo-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-indigo-500";
    perfTaskBtn.innerHTML = '<i class="fas fa-project-diagram text-xs"></i> <span class="text-sm">Performance Tasks</span>';
    perfTaskBtn.onclick = () => {
        renderPerformanceTasksPage(); // Opens list filtered for 'accounting_cycle'
        closeMobileSidebar();
    };
    qaSubmenu.appendChild(perfTaskBtn);


    // --- 4. Teacher Tools (Teachers Only) ---
    if (role === 'teacher') {
        const creatorHeader = document.createElement('button');
        creatorHeader.className = "w-full text-left px-6 py-3 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider sidebar-text-detail whitespace-nowrap overflow-hidden flex justify-between items-center group hover:text-slate-300 focus:outline-none";
        creatorHeader.innerHTML = '<span>Teacher Tools</span> <i class="fas fa-chevron-down text-xs transition-transform duration-300"></i>';
        
        const toolsSubmenu = document.createElement('div');
        toolsSubmenu.className = "hidden bg-slate-950 border-l border-slate-800 ml-4 mb-4"; 

        creatorHeader.onclick = () => {
            toolsSubmenu.classList.toggle('hidden');
            const icon = creatorHeader.querySelector('.fa-chevron-down');
            if (toolsSubmenu.classList.contains('hidden')) {
                icon.classList.remove('rotate-180');
            } else {
                icon.classList.add('rotate-180');
            }
        };

        // Append Header and Submenu to Container (Critical step!)
        container.appendChild(creatorHeader);
        container.appendChild(toolsSubmenu);
        
        // 4a. Quiz & Activity Creator
        const creatorBtn = document.createElement('button');
        creatorBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-green-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-green-500";
        creatorBtn.innerHTML = '<i class="fas fa-magic text-xs"></i> <span class="text-sm">Quiz Creator</span>';
        creatorBtn.onclick = () => {
            renderCreatorPage(); 
            closeMobileSidebar();
        };
        toolsSubmenu.appendChild(creatorBtn);

        // 4b. Accounting Cycle Manager
        const accCycleBtn = document.createElement('button');
        accCycleBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-indigo-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-indigo-500";
        accCycleBtn.innerHTML = '<i class="fas fa-cogs text-xs"></i> <span class="text-sm">AC Manager</span>';
        accCycleBtn.onclick = () => {
            renderAccCycleCreatorPage(); 
            closeMobileSidebar();
        };
        toolsSubmenu.appendChild(accCycleBtn);

        // 4c. Course Schedule
        const calendarBtn = document.createElement('button');
        calendarBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-purple-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-purple-500";
        calendarBtn.innerHTML = '<i class="fas fa-calendar-alt text-xs"></i> <span class="text-sm">Schedule</span>';
        calendarBtn.onclick = () => {
            renderCalendarPage();
            closeMobileSidebar();
        };
        toolsSubmenu.appendChild(calendarBtn);

        // 4d. Question Bank Importer
        const importerBtn = document.createElement('button');
        importerBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-blue-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-blue-500";
        importerBtn.innerHTML = '<i class="fas fa-file-import text-xs"></i> <span class="text-sm">Importer</span>';
        importerBtn.onclick = () => {
            renderQuestionImporterPage();
            closeMobileSidebar();
        };
        toolsSubmenu.appendChild(importerBtn);

        // 4e. Results Review (NEW)
        const reviewBtn = document.createElement('button');
        reviewBtn.className = "w-full text-left px-6 py-2 text-slate-400 hover:bg-slate-900 hover:text-orange-400 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-orange-500";
        reviewBtn.innerHTML = '<i class="fas fa-poll text-xs"></i> <span class="text-sm">Results Review</span>';
        reviewBtn.onclick = () => {
            renderTeacherResultsReviewPage();
            closeMobileSidebar();
        };
        toolsSubmenu.appendChild(reviewBtn);
        container.appendChild(toolsSubmenu);
    }
}

// --- PAGE RENDERERS ---

function renderQuestionImporterPage() {
    elements.pageTitle().innerText = "Question Bank Importer";
    const content = elements.contentArea();
    content.innerHTML = ''; 

    const container = document.createElement('div');
    container.id = "importer-container";
    container.className = "w-full h-full p-4";
    content.appendChild(container);

     if(typeof renderQuestionImporter === 'function') {
         renderQuestionImporter('importer-container');
     } else {
         container.innerHTML = `<div class="p-8 text-center text-gray-500">Importer module not loaded.</div>`;
     }
}

function renderQuizzesActivitiesPage() {
    elements.pageTitle().innerText = "Quizzes & Activities";
    const content = elements.contentArea();
    content.innerHTML = '';

    if (typeof renderQuizzesAndActivities === 'function') {
        // This function typically renders the LIST of available quizzes.
        // It will now include summative and formative tests.
        // Filter: 'test' (ensures only relevant items show)
        renderQuizzesAndActivities(content, currentUser, renderAccountingCycleActivity, 'Test');
    } else {
        content.innerHTML = `<div class="p-8 text-center text-gray-500">Module not loaded properly.</div>`;
    }
}

// Renders Performance Tasks (Accounting Cycle)
function renderPerformanceTasksPage() {
    elements.pageTitle().innerText = "Performance Tasks";
    const content = elements.contentArea();
    content.innerHTML = '';

    if (typeof renderQuizzesAndActivities === 'function') {
        // 1. Target Container: content
        // 2. User Context: currentUser
        // 3. Runner Function: renderAccountingCycleActivity (passed as reference)
        // 4. Filter: 'Task' (Shows items with 'Task' in type or name, depending on your list logic)
        renderQuizzesAndActivities(content, currentUser, renderAccountingCycleActivity, 'Task'); 
    } else {
        content.innerHTML = `<div class="p-8 text-center text-gray-500">Module not loaded properly.</div>`;
    }
}
function renderCreatorPage() {
    elements.pageTitle().innerText = "Quiz & Activity Creator";
    const content = elements.contentArea();
    content.innerHTML = '';
    renderQuizActivityCreator(content);
}

// --- NEW RENDERER FOR ACCOUNTING CYCLE CREATOR ---
function renderAccCycleCreatorPage() {
    elements.pageTitle().innerText = "Accounting Cycle Manager";
    const content = elements.contentArea();
    content.innerHTML = '';
    renderAccountingCycleCreator(content);
}

// --- NEW RENDERER FOR RESULTS REVIEW ---
function renderTeacherResultsReviewPage() {
    elements.pageTitle().innerText = "Student Results Review";
    const content = elements.contentArea();
    content.innerHTML = '';
    
    // Create a container for the React root
    const container = document.createElement('div');
    container.id = "teacher-review-container";
    container.className = "w-full h-full"; // Full height for the layout
    content.appendChild(container);

    renderTeacherReviewDashboard(container, currentUser);
}

function renderLandingPage() {
    elements.pageTitle().innerText = "Course Outline";
    const content = elements.contentArea();
    content.innerHTML = '';

    const container = document.createElement('div');
    container.className = "max-w-4xl mx-auto pb-12";

    const tabsContainer = document.createElement('div');
    tabsContainer.className = "flex border-b border-gray-200 mb-6 bg-white rounded-t-lg shadow-sm";
    tabsContainer.innerHTML = `
        <button id="tab-landing-summary" class="flex-1 py-4 text-center text-sm font-semibold transition-colors tab-active rounded-tl-lg">
            <i class="fas fa-list-alt mr-2"></i>Summary
        </button>
        <button id="tab-landing-full" class="flex-1 py-4 text-center text-sm font-semibold transition-colors tab-inactive rounded-tr-lg">
            <i class="fas fa-file-alt mr-2"></i>Full Course Outline
        </button>
    `;
    container.appendChild(tabsContainer);

    const summaryDiv = document.createElement('div');
    summaryDiv.id = "content-landing-summary";
    summaryDiv.innerHTML = courseData.outline.summary;
    container.appendChild(summaryDiv);

    const fullDiv = document.createElement('div');
    fullDiv.id = "content-landing-full";
    fullDiv.className = "hidden";
    fullDiv.innerHTML = courseData.outline.full;
    container.appendChild(fullDiv);

    content.appendChild(container);

    container.querySelector('#tab-landing-summary').onclick = () => {
        summaryDiv.classList.remove('hidden', 'fade-in');
        summaryDiv.classList.add('fade-in');
        fullDiv.classList.add('hidden');
        document.getElementById('tab-landing-summary').className = document.getElementById('tab-landing-summary').className.replace('tab-inactive', 'tab-active');
        document.getElementById('tab-landing-full').className = document.getElementById('tab-landing-full').className.replace('tab-active', 'tab-inactive');
    };
    container.querySelector('#tab-landing-full').onclick = () => {
        fullDiv.classList.remove('hidden', 'fade-in');
        fullDiv.classList.add('fade-in');
        summaryDiv.classList.add('hidden');
        document.getElementById('tab-landing-full').className = document.getElementById('tab-landing-full').className.replace('tab-inactive', 'tab-active');
        document.getElementById('tab-landing-summary').className = document.getElementById('tab-landing-summary').className.replace('tab-active', 'tab-inactive');
    };
}

// ... [Existing Wrappers (WorksheetWrapper, FSWrapper) & Calendar Logic remains unchanged] ...
// I am omitting the unchanged WorksheetWrapper, FSWrapper, and Calendar Logic 
// to prevent the response from being cut off, as they were not modified.
// Please assume the code below this comment is identical to your provided original file
// until the init() call at the bottom.

// --- DAY RENDERER (The Core Content Logic) ---
// (Copy existing renderDayContent, renderCategoryContent, toggleRightSidebar, handleJournalIndent logic here)
// Note: Ensure FSWrapper and WorksheetWrapper are defined or imported if they were externalized.
// In this file they are internal functions, so they persist.

function WorksheetWrapper({ ledger, adjustments }) {
    const [wsState, setWsState] = React.useState({ footers: {} }); 
    const [showFeedback, setShowFeedback] = React.useState(false);

    const handleChange = (field, val) => {
        setWsState(prev => ({ ...prev, [field]: val }));
    };

    const validation = React.useMemo(() => {
        return validateStep05(ledger, adjustments, wsState);
    }, [ledger, adjustments, wsState]);

    const percentage = validation.maxScore > 0 ? (validation.score / validation.maxScore) : 0;
    const showButton = percentage >= 0.75;

    return React.createElement('div', { className: "flex flex-col gap-6 pb-12" },
        React.createElement(Step05Worksheet, {
            ledgerData: ledger, 
            adjustments: adjustments,
            data: wsState,
            onChange: handleChange,
            showFeedback: showFeedback
        }),
        showButton ? React.createElement('div', { className: "flex justify-center" }, 
            React.createElement('button', {
                className: `px-6 py-3 font-bold rounded shadow transition-colors flex items-center gap-2 ${showFeedback ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`,
                onClick: () => setShowFeedback(!showFeedback)
            }, showFeedback ? React.createElement('span', null, "Hide Solution") : React.createElement('span', null, "Show Solution"))
        ) : null
    );
}

// NEW FS WRAPPER
// ... imports remain the same

// UPDATED FS WRAPPER
function FSWrapper({ activityData }) {
    // 1. Calculate the 'Truth' Ledger from transactions + beginning balances
    const calculatedLedger = React.useMemo(() => {
        const ledger = {};
        
        // Add beginning balances
        if (activityData.beginningBalances && activityData.beginningBalances.balances) {
            Object.entries(activityData.beginningBalances.balances).forEach(([acc, bal]) => {
                ledger[acc] = { debit: bal.dr || 0, credit: bal.cr || 0 };
            });
        }

        // Add transactions from solution rows
        if (activityData.transactions) {
            activityData.transactions.forEach(tx => {
                tx.solution.forEach(line => {
                    if (line.isExplanation || line.account === "No Entry") return;
                    if (!ledger[line.account]) ledger[line.account] = { debit: 0, credit: 0 };
                    
                    const dr = parseFloat(line.debit) || 0;
                    const cr = parseFloat(line.credit) || 0;
                    
                    if (dr > 0) ledger[line.account].debit += dr;
                    if (cr > 0) ledger[line.account].credit += cr;
                });
            });
        }
        return ledger;
    }, [activityData]);

    // 2. Preprocess Adjustments (THE FIX)
    // Converts "solution array" format (Day 4) into "drAcc/crAcc" format (Step06 expectation)
    const processedAdjustments = React.useMemo(() => {
        if (!activityData.adjustments) return [];
        
        return activityData.adjustments.map(adj => {
            // If already in simple format (legacy/Day 1), keep it
            if (adj.drAcc && adj.crAcc) return adj;

            // If in Day 4 "Transaction" format with a solution array
            if (adj.solution && Array.isArray(adj.solution)) {
                const drLine = adj.solution.find(l => Number(l.debit) > 0);
                const crLine = adj.solution.find(l => Number(l.credit) > 0);

                if (drLine && crLine) {
                    return {
                        drAcc: drLine.account,
                        crAcc: crLine.account,
                        amount: Number(drLine.debit)
                    };
                }
            }
            return null;
        }).filter(Boolean); // Remove any nulls to prevent 'undefined' crashes
    }, [activityData]);

    const [fsState, setFsState] = React.useState({ is: {}, bs: {}, sce: {}, scf: {} });
    const [showFeedback, setShowFeedback] = React.useState(false);

    const handleChange = (section, val) => {
        setFsState(prev => ({ ...prev, [section]: val }));
    };

    // Calculate score
    const validation = React.useMemo(() => {
        // Pass processedAdjustments instead of raw activityData.adjustments
        return validateStep06(calculatedLedger, processedAdjustments, activityData, fsState);
    }, [calculatedLedger, processedAdjustments, activityData, fsState]);

    const percentage = validation.maxScore > 0 ? (validation.score / validation.maxScore) : 0;
    const showButton = percentage >= 0.75;

    return React.createElement('div', { className: "flex flex-col gap-6 pb-12" },
        React.createElement(Step06FinancialStatements, {
            ledgerData: calculatedLedger,
            adjustments: processedAdjustments, // Pass the fixed data here
            activityData: activityData,
            data: fsState,
            onChange: handleChange,
            showFeedback: showFeedback
        }),
        showButton ? React.createElement('div', { className: "flex justify-center" }, 
            React.createElement('button', {
                className: `px-6 py-3 font-bold rounded shadow transition-colors flex items-center gap-2 ${showFeedback ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`,
                onClick: () => setShowFeedback(!showFeedback)
            }, showFeedback ? React.createElement('span', null, "Hide Solution") : React.createElement('span', null, "Show Solution"))
        ) : null
    );
}

// ... rest of app.js logic

// --- DAY RENDERER (The Core Content Logic) ---

function renderDayContent(unit, week, dayIndex) {
    elements.pageTitle().innerText = `${unit.title} - ${week.title}`;
    
    const content = elements.contentArea();
    content.innerHTML = ''; 

    const container = document.createElement('div');
    container.className = "w-full max-w-[1600px] mx-auto h-full flex flex-col";

    const scheduledDateStr = getDateForTopic(unit.id, week.id, dayIndex);
    const dateBadgeHtml = scheduledDateStr 
        ? `<div class="shrink-0 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded border border-purple-200 shadow-sm whitespace-nowrap">
             <i class="far fa-calendar-check mr-1"></i>Scheduled: ${scheduledDateStr}
           </div>`
        : `<div class="shrink-0 text-gray-400 text-xs italic whitespace-nowrap">
             <i class="far fa-calendar mr-1"></i>Not scheduled
           </div>`;

    if (!week.days || week.days.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-gray-400 bg-white rounded-lg border border-dashed border-gray-300">Content for this week is being updated.</div>`;
        content.appendChild(container);
        return;
    }

    const day = week.days[dayIndex];
    const exercises = day.exercises || [];

    // Analyze Exercise Types to determine tabs
    const hasMcq = exercises.some(e => e.type === 'mcq');
    const hasProb = exercises.some(e => e.type === 'problem');
    const hasJourn = exercises.some(e => e.type === 'journalizing');
    
    // Detect Worksheet Activities
    const worksheetActivities = exercises
        .filter(ex => ex.type === 'worksheet' || ex.type === 'accountingCycleSimulation' || ex.id?.includes('Worksheet'))
        .map(ex => {
            if (typeof merchTransactionPracData !== 'undefined') {
                const qbData = merchTransactionPracData.find(qb => qb.id === ex.id);
                return qbData ? { ...ex, ...qbData } : ex;
            }
            return ex;
        });

    // Detect Financial Statement Activities (NEW)
    const fsActivities = exercises
        .filter(ex => ex.type === 'financialStatement' || ex.id?.includes('FinancialStatement'))
        .map(ex => {
            // Check if we need to pull data from qbMerchTransactions
            // Usually matching by ID
            if (typeof merchTransactionPracData !== 'undefined') {
                // Try to find matching data based on base ID (e.g., if exercise ID is "FS_Practice_1", looks for matching practice data)
                const qbData = merchTransactionPracData.find(qb => qb.id === ex.id);
                return qbData ? { ...ex, ...qbData } : ex;
            }
            return ex;
        });

    const card = document.createElement('div');
    card.className = "bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col overflow-hidden fade-in";

    const headerDiv = document.createElement('div');
    headerDiv.className = "bg-gray-50 px-6 py-3 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4";
    headerDiv.innerHTML = `
        <div class="flex items-center gap-3 overflow-hidden">
            <span class="shrink-0 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase">${day.day}</span>
            <h1 class="text-lg md:text-xl font-bold text-slate-800 leading-tight truncate-multiline">${day.topic}</h1>
        </div>
        ${dateBadgeHtml}
    `;
    card.appendChild(headerDiv);

    // --- NAVIGATION TABS ---
    const navBar = document.createElement('div');
    navBar.className = "flex flex-wrap items-center justify-between border-b border-gray-200 bg-white min-h-[50px]";

    const tabsContainer = document.createElement('div');
    tabsContainer.className = "flex overflow-x-auto whitespace-nowrap no-scrollbar";
    
    const createTabBtn = (id, icon, label, isActive) => {
        const btn = document.createElement('button');
        btn.id = id;
        btn.className = `flex-shrink-0 px-6 py-3 text-sm font-semibold transition-colors border-b-2 flex items-center ${
            isActive 
            ? 'border-blue-600 text-blue-900 bg-blue-50' 
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }`;
        btn.innerHTML = `<i class="fas ${icon} mr-2"></i>${label}`;
        return btn;
    };

    // Always create Concepts Tab
    const tabConcepts = createTabBtn('tab-btn-concepts', 'fa-book-reader', 'Topic & Concepts', true);
    tabsContainer.appendChild(tabConcepts);

    // Conditional Tabs
    let tabMcq, tabProb, tabJourn, tabWorksheet, tabFS;

    if (hasMcq) {
        tabMcq = createTabBtn('tab-btn-mcq', 'fa-list-ul', 'Practice - Multiple Choice', false);
        tabsContainer.appendChild(tabMcq);
    }
    if (hasProb) {
        tabProb = createTabBtn('tab-btn-prob', 'fa-calculator', 'Practice - Problem Solving', false);
        tabsContainer.appendChild(tabProb);
    }
    if (hasJourn) {
        tabJourn = createTabBtn('tab-btn-journ', 'fa-pen-fancy', 'Practice - Journalizing', false);
        tabsContainer.appendChild(tabJourn);
    }
    if (worksheetActivities.length > 0) {
        tabWorksheet = createTabBtn('tab-btn-worksheet', 'fa-table', 'Practice - 10 Columns Worksheet', false);
        tabsContainer.appendChild(tabWorksheet);
    }
    if (fsActivities.length > 0) {
        tabFS = createTabBtn('tab-btn-fs', 'fa-chart-line', 'Practice - Financial Statements', false);
        tabsContainer.appendChild(tabFS);
    }

    navBar.appendChild(tabsContainer);

    // Prev/Next Buttons
    const navButtonsGroup = document.createElement('div');
    navButtonsGroup.className = "hidden md:flex items-center gap-2 py-2 px-4 ml-auto"; 

    if (dayIndex > 0) {
        const prevBtn = document.createElement('button');
        prevBtn.className = "px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center";
        prevBtn.innerHTML = `<i class="fas fa-chevron-left mr-1"></i> Prev`;
        prevBtn.onclick = () => {
            renderDayContent(unit, week, dayIndex - 1);
            const activeWeekBtn = document.querySelector('.day-submenu:not(.hidden)')?.previousElementSibling;
            if (activeWeekBtn) activeWeekBtn.click();
        };
        navButtonsGroup.appendChild(prevBtn);
    }

    if (dayIndex < week.days.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = "px-3 py-1.5 text-xs font-medium text-white bg-blue-600 border border-transparent rounded shadow-sm hover:bg-blue-700 transition-colors flex items-center";
        nextBtn.innerHTML = `Next <i class="fas fa-chevron-right ml-1"></i>`;
        nextBtn.onclick = () => renderDayContent(unit, week, dayIndex + 1);
        navButtonsGroup.appendChild(nextBtn);
    }

    navBar.appendChild(navButtonsGroup);
    card.appendChild(navBar);

    // --- CONTENT AREA ---
    const tabContentWrapper = document.createElement('div');
    tabContentWrapper.className = "flex-1 relative overflow-hidden bg-white flex flex-col";

    // 1. Concepts Content (Standard View)
    const conceptsDiv = document.createElement('div');
    conceptsDiv.id = "tab-content-concepts";
    conceptsDiv.className = "p-8 overflow-y-auto h-full prose prose-blue max-w-none text-gray-600";
    conceptsDiv.innerHTML = day.content;
    tabContentWrapper.appendChild(conceptsDiv);

    // 2. MCQ Content
    let mcqDiv;
    if (hasMcq) {
        mcqDiv = document.createElement('div');
        mcqDiv.id = "tab-content-mcq";
        mcqDiv.className = "hidden h-full"; 
        mcqDiv.innerHTML = renderCategoryContent(exercises, dayIndex, 'mcq');
        tabContentWrapper.appendChild(mcqDiv);
    }

    // 3. Problem Content
    let probDiv;
    if (hasProb) {
        probDiv = document.createElement('div');
        probDiv.id = "tab-content-prob";
        probDiv.className = "hidden h-full";
        probDiv.innerHTML = renderCategoryContent(exercises, dayIndex, 'problem');
        tabContentWrapper.appendChild(probDiv);
    }

    // 4. Journal Content
    let journDiv;
    if (hasJourn) {
        journDiv = document.createElement('div');
        journDiv.id = "tab-content-journ";
        journDiv.className = "hidden h-full";
        journDiv.innerHTML = renderCategoryContent(exercises, dayIndex, 'journalizing');
        tabContentWrapper.appendChild(journDiv);
    }

    // 5. Worksheet Content
    let worksheetDiv;
    if (worksheetActivities.length > 0) {
        worksheetDiv = document.createElement('div');
        worksheetDiv.id = "tab-content-worksheet";
        worksheetDiv.className = "hidden h-full";
        worksheetDiv.innerHTML = renderWorksheetContent(worksheetActivities, dayIndex, 'worksheet');
        tabContentWrapper.appendChild(worksheetDiv);
    }

    // 6. Financial Statement Content (NEW)
    let fsDiv;
    if (fsActivities.length > 0) {
        fsDiv = document.createElement('div');
        fsDiv.id = "tab-content-fs";
        fsDiv.className = "hidden h-full";
        // Using same layout helper as worksheet
        fsDiv.innerHTML = renderWorksheetContent(fsActivities, dayIndex, 'financialStatement');
        tabContentWrapper.appendChild(fsDiv);
    }

    card.appendChild(tabContentWrapper);
    container.appendChild(card);
    content.appendChild(container);

    // --- TAB SWITCHING LOGIC ---
    const switchTab = (targetType) => {
        // Hide all
        conceptsDiv.classList.add('hidden');
        if (mcqDiv) mcqDiv.classList.add('hidden');
        if (probDiv) probDiv.classList.add('hidden');
        if (journDiv) journDiv.classList.add('hidden');
        if (worksheetDiv) worksheetDiv.classList.add('hidden');
        if (fsDiv) fsDiv.classList.add('hidden');

        // Deactivate all buttons
        [tabConcepts, tabMcq, tabProb, tabJourn, tabWorksheet, tabFS].forEach(btn => {
            if (btn) btn.className = btn.className.replace('border-blue-600 text-blue-900 bg-blue-50', 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50');
        });

        // Show Target
        let activeBtn;
        if (targetType === 'concepts') {
            conceptsDiv.classList.remove('hidden');
            activeBtn = tabConcepts;
        } else if (targetType === 'mcq' && mcqDiv) {
            mcqDiv.classList.remove('hidden');
            activeBtn = tabMcq;
        } else if (targetType === 'problem' && probDiv) {
            probDiv.classList.remove('hidden');
            activeBtn = tabProb;
        } else if (targetType === 'journal' && journDiv) {
            journDiv.classList.remove('hidden');
            activeBtn = tabJourn;
        } else if (targetType === 'worksheet' && worksheetDiv) {
            worksheetDiv.classList.remove('hidden');
            activeBtn = tabWorksheet;
            
            // Mount Worksheet Components
            worksheetActivities.forEach((activity, i) => {
                 const mountId = `worksheet-mount-${dayIndex}-${i}`;
                 const mountEl = document.getElementById(mountId);
                 
                 if (mountEl && !worksheetRoots.has(mountId)) {
                    // Logic to calculate Ledger Balances from Transactions
                    const ledger = {};
                    if(activity.transactions) {
                        activity.transactions.forEach(tx => {
                            tx.solution.forEach(line => {
                                if (line.isExplanation || line.account === "No Entry") return;
                                if (!ledger[line.account]) ledger[line.account] = { debit: 0, credit: 0 };
                                const dr = parseFloat(line.debit) || 0;
                                const cr = parseFloat(line.credit) || 0;
                                if (dr > 0) ledger[line.account].debit += dr;
                                if (cr > 0) ledger[line.account].credit += cr;
                            });
                        });
                    }

                    const root = ReactDOM.createRoot(mountEl);
                    root.render(
                        React.createElement(WorksheetWrapper, {
                            ledger: ledger,
                            adjustments: activity.adjustments
                        })
                    );
                    worksheetRoots.set(mountId, root);
                 }
            });
        } else if (targetType === 'fs' && fsDiv) {
            fsDiv.classList.remove('hidden');
            activeBtn = tabFS;

            // Mount FS Components
            fsActivities.forEach((activity, i) => {
                const mountId = `financialStatement-mount-${dayIndex}-${i}`; // Matches ID gen in renderWorksheetContent
                const mountEl = document.getElementById(mountId);

                if (mountEl && !fsRoots.has(mountId)) {
                    const root = ReactDOM.createRoot(mountEl);
                    root.render(
                        React.createElement(FSWrapper, {
                            activityData: activity
                        })
                    );
                    fsRoots.set(mountId, root);
                }
            });
        }

        // Activate Button
        if (activeBtn) {
            activeBtn.className = activeBtn.className.replace('border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50', 'border-blue-600 text-blue-900 bg-blue-50');
        }
    };

    tabConcepts.onclick = () => switchTab('concepts');
    if (tabMcq) tabMcq.onclick = () => switchTab('mcq');
    if (tabProb) tabProb.onclick = () => switchTab('problem');
    if (tabJourn) tabJourn.onclick = () => switchTab('journal');
    if (tabWorksheet) tabWorksheet.onclick = () => switchTab('worksheet');
    if (tabFS) tabFS.onclick = () => switchTab('fs');

    // Attach Listeners
    attachExerciseListeners();
    executeExerciseMounts(day.exercises);
}

function executeExerciseMounts(exercises) {
    if (!exercises) return;
    exercises.forEach(ex => {
        if (ex.type === 'custom-mount' && typeof ex.mountLogic === 'function') {
            setTimeout(() => {
                ex.mountLogic();
            }, 0);
        }
    });
}

// --- CONTENT RENDERER (Supports Quick Nav) ---
// type argument determines ID generation: 'worksheet' or 'financialStatement'
function renderWorksheetContent(activities, dayIndex, type = 'worksheet') {
    let contentHtml = '';
    let navLinksHtml = '';

    // Build Nav Links if multiple
    if (activities.length > 1) {
        activities.forEach((item, index) => {
            const label = type === 'worksheet' ? `Worksheet #${index + 1}` : `FS Set #${index + 1}`;
            const targetId = `${type}-set-${dayIndex}-${index}`;
            navLinksHtml += `
                <button onclick="document.getElementById('${targetId}').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                class="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 flex items-center group">
                    <i class="fas fa-chevron-right text-xs text-gray-400 mr-2 group-hover:text-blue-500"></i>
                    ${label}
                </button>
            `;
        });
    }

    // Build Content
    activities.forEach((activity, i) => {
        const setId = `${type}-set-${dayIndex}-${i}`;
        const mountId = `${type}-mount-${dayIndex}-${i}`;
        const defaultTitle = type === 'worksheet' ? `Worksheet ${i+1}` : `Financial Statements ${i+1}`;
        
        contentHtml += `
            <div id="${setId}" class="mb-12 border-t-4 border-blue-500 pt-6">
                <div class="prose prose-blue max-w-none mb-4">
                    <h3 class="text-blue-700"><i class="fas ${type === 'worksheet' ? 'fa-file-invoice' : 'fa-chart-pie'} mr-2"></i>${activity.title || defaultTitle}</h3>
                    <p class="text-gray-600">${activity.instructions || 'Complete the exercise using the data below.'}</p>
                </div>
                <div id="${mountId}" class="w-full min-h-[500px]"></div>
            </div>
        `;
    });

    // --- Construct Layout with Collapsible Sidebar (Reusable) ---
    const sidebarId = `sidebar-${type}`;
    const contentId = `content-${type}`;
    
    // Only show sidebar if we have nav links
    const sidebarWidthClass = navLinksHtml ? "w-0 md:w-64" : "hidden";
    const toggleBtnHtml = navLinksHtml ? `
        <button onclick="toggleRightSidebar('${sidebarId}')" class="md:hidden absolute top-4 right-4 z-30 bg-white text-blue-600 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
            <i class="fas fa-list-ul"></i>
        </button>
    ` : '';

    return `
    <div class="flex h-full relative">
        <div id="${contentId}" class="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth h-full">
            ${contentHtml}
        </div>

        <div id="${sidebarId}" class="${sidebarWidthClass} transition-all duration-300 border-l border-gray-200 bg-gray-50 flex flex-col h-full absolute md:relative right-0 z-20 shadow-xl md:shadow-none overflow-hidden group">
            <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-white min-w-[250px]">
                <span class="font-bold text-gray-700 text-sm"><i class="fas fa-location-arrow mr-2"></i> Quick Nav</span>
                <button onclick="toggleRightSidebar('${sidebarId}')" class="text-gray-400 hover:text-red-500">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto min-w-[250px] p-2">
                ${navLinksHtml}
            </div>
        </div>
        ${toggleBtnHtml}
    </div>
    `;
}

// --- NEW CATEGORY CONTENT RENDERER ---
function renderCategoryContent(exercises, dayIndex, type) {
    const filtered = exercises.filter(ex => ex.type === type);
    if (filtered.length === 0) return '';

    let contentHtml = '';
    let navLinksHtml = '';

    // Helper to chunk array
    const chunkArray = (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    // --- Build Navigation Links ---
    const buildNav = (sets, isJournal = false) => {
        let html = '';
        sets.forEach((item, index) => {
            const label = isJournal ? `Journal #${index + 1}` : `${type === 'mcq' ? 'MCQ' : 'Problem'} Set ${index + 1}`;
            const targetId = isJournal ? `journ-set-${dayIndex}-${index}` : `${type === 'mcq' ? 'mcq' : 'prob'}-set-${dayIndex}-${index}`;
            // Added scroll to internal container logic
            html += `
                <button onclick="document.getElementById('${targetId}').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                class="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 flex items-center group">
                    <i class="fas fa-chevron-right text-xs text-gray-400 mr-2 group-hover:text-blue-500"></i>
                    ${label}
                </button>
            `;
        });
        return html;
    };

    // --- Build Content & Nav Logic ---
    if (type === 'mcq' || type === 'problem') {
        const sets = chunkArray(filtered, 20);
        navLinksHtml = buildNav(sets);

        sets.forEach((set, setIndex) => {
            const setId = `${type === 'mcq' ? 'mcq' : 'prob'}-set-${dayIndex}-${setIndex}`;
            
            let questionsHtml = set.map((ex, i) => {
                const exId = `ex-${type === 'mcq' ? 'mcq' : 'prob'}-${dayIndex}-${setIndex}-${i}`;
                const globalIndex = (setIndex * 20) + i + 1;

                if (type === 'mcq') {
                    const optionsHtml = ex.options.map((opt, optIndex) => `
                        <label class="flex items-start p-3 rounded border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors bg-white">
                            <input type="radio" name="${exId}" value="${optIndex}" class="mt-1 mr-3 text-blue-600 focus:ring-blue-500" data-qid="${exId}">
                            <span class="text-sm text-gray-700">${opt}</span>
                        </label>
                    `).join('');

                    return `
                        <div class="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8 exercise-item" data-id="${exId}">
                            <p class="font-semibold text-gray-800 mb-4 text-base"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs mr-2">Question ${globalIndex}</span>${ex.question}</p>
                            <div class="space-y-3 mb-4">${optionsHtml}</div>
                            <div id="ans-${exId}" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                                <p class="font-bold mb-1"><i class="fas fa-check-circle mr-1"></i> Correct Answer: ${ex.options[ex.correctIndex]}</p>
                                <p>${ex.explanation}</p>
                            </div>
                            <div id="msg-${exId}" class="hidden mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800 italic">
                                 <i class="fas fa-exclamation-circle mr-1"></i> Please answer this question to see the answer key.
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8 exercise-item" data-id="${exId}">
                            <p class="font-semibold text-gray-800 mb-4 text-base"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs mr-2">Problem ${globalIndex}</span>${ex.question}</p>
                            <textarea id="input-${exId}" class="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white" rows="4" placeholder="Type your solution here..." data-qid="${exId}"></textarea>
                            <div id="ans-${exId}" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-mono whitespace-pre-wrap">
<strong><i class="fas fa-key mr-1"></i> Answer Key:</strong>
${ex.answer}

<strong><i class="fas fa-info-circle mr-1"></i> Explanation:</strong>
${ex.explanation}
                            </div>
                            <div id="msg-${exId}" class="hidden mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800 italic">
                                 <i class="fas fa-exclamation-circle mr-1"></i> Please answer this question to see the answer key.
                            </div>
                        </div>
                    `;
                }
            }).join('');

            contentHtml += `
                <div id="${setId}" class="mb-12 border-t-4 border-blue-500 pt-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">${type === 'mcq' ? 'MC Questions' : 'Problem Questions'} Set ${setIndex + 1}</h3>
                    ${questionsHtml}
                    <div class="mt-6 flex justify-start">
                        <button class="btn-reveal-set px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded hover:bg-blue-700 shadow-md transition-colors"
                            data-set-id="${setId}" data-type="${type}">
                            <i class="fas fa-eye mr-2"></i> ${type === 'mcq' ? 'Reveal Answer Key' : 'Reveal Solution'}
                        </button>
                    </div>
                </div>
            `;
        });
    } 
    else if (type === 'journalizing') {
        navLinksHtml = buildNav(filtered, true);

        filtered.forEach((ex, jIndex) => {
            const setId = `journ-set-${dayIndex}-${jIndex}`;
            
            const generateRows = (txId, rowCount, isReadOnly = false, solutionData = []) => {
                let rowsHtml = '';
                for (let r = 0; r < rowCount; r++) {
                    const rowData = isReadOnly && solutionData[r] ? solutionData[r] : { date: '', account: '', debit: '', credit: '' };
                    let indentStyle = "padding-left: 0.5rem;"; 
                    let acctClass = "";
                    if (isReadOnly) {
                        if (rowData.isExplanation) {
                            indentStyle = "padding-left: 2rem;"; 
                            acctClass = "italic text-gray-500";
                        } else if (rowData.credit) {
                            indentStyle = "padding-left: 1.25rem;";
                        }
                    }

                    rowsHtml += `
                    <tr class="border-b border-gray-200 hover:bg-gray-50 bg-white">
                        <td class="border-r border-gray-300 p-0 w-16 align-top">
                            <input type="text" class="w-full h-full p-2 bg-transparent outline-none text-xs text-right font-mono text-gray-600" value="${rowData.date || ''}" ${isReadOnly ? 'readonly disabled' : ''}>
                        </td>
                        <td class="border-r border-gray-300 p-0 relative align-top">
                            <input type="text" id="acct-${txId}-${r}" class="w-full h-full p-2 bg-transparent outline-none text-sm font-mono transition-all duration-200 ${acctClass}" style="${indentStyle}" value="${rowData.account || ''}" ${isReadOnly ? 'readonly disabled' : ''}>
                        </td>
                        <td class="border-r border-gray-300 p-0 w-28 align-top">
                            <input type="number" id="dr-${txId}-${r}" class="w-full h-full p-2 bg-transparent outline-none text-sm text-right font-mono" step="0.01" value="${rowData.debit !== '' && rowData.debit !== undefined ? Number(rowData.debit).toFixed(2) : ''}" ${isReadOnly ? 'readonly disabled' : 'oninput="handleJournalIndent(\'' + txId + '\', ' + r + ')"'}>
                        </td>
                        <td class="p-0 w-28 align-top">
                            <input type="number" id="cr-${txId}-${r}" class="w-full h-full p-2 bg-transparent outline-none text-sm text-right font-mono" step="0.01" value="${rowData.credit !== '' && rowData.credit !== undefined ? Number(rowData.credit).toFixed(2) : ''}" ${isReadOnly ? 'readonly disabled' : 'oninput="handleJournalIndent(\'' + txId + '\', ' + r + ')"'}>
                        </td>
                    </tr>`;
                }
                return rowsHtml;
            };

            const transactionsHtml = ex.transactions.map((tx, txIndex) => {
                const txId = `ex-journ-${dayIndex}-${jIndex}-tx-${txIndex}`;
                return `
                    <div class="mb-6 border border-gray-300 shadow-sm rounded-lg overflow-hidden exercise-item" data-id="${txId}">
                        <div class="bg-gray-100 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
                            <span class="font-bold text-gray-700 text-sm">${tx.date} - ${tx.description}</span>
                        </div>
                        <table class="w-full border-collapse" id="table-${txId}">
                            <thead>
                                <tr class="bg-gray-200 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                    <th class="py-2 border-r border-gray-300">Date</th>
                                    <th class="py-2 border-r border-gray-300 text-left pl-2">Account Titles</th>
                                    <th class="py-2 border-r border-gray-300">Debit</th>
                                    <th class="py-2">Credit</th>
                                </tr>
                            </thead>
                            <tbody>${generateRows(txId, tx.rows)}</tbody>
                        </table>
                        <div id="ans-${txId}" class="hidden mt-0 border-t-2 border-green-400">
                             <div class="bg-green-100 px-4 py-2 border-b border-green-300 text-green-800 font-bold text-sm flex items-center"><i class="fas fa-check-circle mr-2"></i> Correct Entry</div>
                            <table class="w-full border-collapse bg-green-50"><tbody>${generateRows(txId, tx.rows, true, tx.solution)}</tbody></table>
                        </div>
                        <div id="msg-${txId}" class="hidden p-3 bg-yellow-50 border-t border-yellow-200 text-sm text-yellow-800 italic"><i class="fas fa-exclamation-circle mr-1"></i> Please answer this question to see the answer key.</div>
                    </div>
                `;
            }).join('');

            contentHtml += `
                <div id="${setId}" class="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-10">
                    <h3 class="font-bold text-xl text-gray-900 mb-2 border-b pb-2">${ex.title}</h3>
                    <p class="text-gray-600 mb-6 text-sm">${ex.instructions}</p>
                    ${transactionsHtml}
                    <div class="mt-6 flex justify-start">
                        <button class="btn-reveal-set px-6 py-2 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-700 shadow-md transition-colors"
                            data-set-id="${setId}" data-type="journal">
                            <i class="fas fa-eye mr-2"></i> Reveal Journal Entries
                        </button>
                    </div>
                </div>
            `;
        });
    }

    // --- Construct Layout with Collapsible Sidebar ---
    const sidebarId = `sidebar-${type}`;
    const contentId = `content-${type}`;

    return `
    <div class="flex h-full relative">
        <div id="${contentId}" class="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth h-full">
            ${contentHtml}
        </div>

        <div id="${sidebarId}" class="w-0 md:w-64 transition-all duration-300 border-l border-gray-200 bg-gray-50 flex flex-col h-full absolute md:relative right-0 z-20 shadow-xl md:shadow-none overflow-hidden group">
            
            <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-white min-w-[250px]">
                <span class="font-bold text-gray-700 text-sm"><i class="fas fa-location-arrow mr-2"></i> Quick Nav</span>
                <button onclick="toggleRightSidebar('${sidebarId}')" class="text-gray-400 hover:text-red-500">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="flex-1 overflow-y-auto min-w-[250px] p-2">
                ${navLinksHtml}
            </div>
        </div>

        <button onclick="toggleRightSidebar('${sidebarId}')" class="md:hidden absolute top-4 right-4 z-30 bg-white text-blue-600 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
            <i class="fas fa-list-ul"></i>
        </button>
    </div>
    `;
}

// --- GLOBAL TOGGLE HELPER ---
window.toggleRightSidebar = function(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    if (!sidebar) return;
    
    if (sidebar.classList.contains('w-0')) {
        // Expand
        sidebar.classList.remove('w-0');
        sidebar.classList.add('w-64');
    } else {
        // Collapse
        sidebar.classList.remove('w-64');
        sidebar.classList.add('w-0');
    }
};

// --- REQUIRED HELPER FUNCTION ---
window.handleJournalIndent = function(txId, row) {
    const acctInput = document.getElementById(`acct-${txId}-${row}`);
    const drInput = document.getElementById(`dr-${txId}-${row}`);
    const crInput = document.getElementById(`cr-${txId}-${row}`);

    if (!acctInput) return;

    const drVal = drInput ? drInput.value.trim() : '';
    const crVal = crInput ? crInput.value.trim() : '';

    if (crVal !== '') {
        acctInput.style.paddingLeft = '1.25rem'; 
        acctInput.classList.remove('italic', 'text-gray-500');
    } else if (drVal === '' && crVal === '') {
        acctInput.style.paddingLeft = '2rem'; 
        acctInput.classList.add('italic', 'text-gray-500'); 
    } else {
        acctInput.style.paddingLeft = '0.5rem'; 
        acctInput.classList.remove('italic', 'text-gray-500');
    }
};

function attachExerciseListeners() {
    document.querySelectorAll('.btn-reveal-set').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const setId = e.target.getAttribute('data-set-id');
            const type = e.target.getAttribute('data-type');
            const container = document.getElementById(setId);
            
            const isRevealing = !e.target.classList.contains('revealed');
            
            if (isRevealing) {
                e.target.classList.add('revealed');
                e.target.innerHTML = `<i class="fas fa-eye-slash mr-2"></i> Hide Answer Key`;
                e.target.classList.replace('bg-blue-600', 'bg-slate-600');
                e.target.classList.replace('hover:bg-blue-700', 'hover:bg-slate-700');
                if(type === 'journal') {
                    e.target.classList.replace('bg-green-600', 'bg-slate-600');
                    e.target.classList.replace('hover:bg-green-700', 'hover:bg-slate-700');
                }
            } else {
                e.target.classList.remove('revealed');
                const label = type === 'journal' ? 'Reveal Journal Entries' : (type === 'problem' ? 'Reveal Solution' : 'Reveal Answer Key');
                e.target.innerHTML = `<i class="fas fa-eye mr-2"></i> ${label}`;
                e.target.classList.replace('bg-slate-600', 'bg-blue-600');
                e.target.classList.replace('hover:bg-slate-700', 'hover:bg-blue-700');
                if(type === 'journal') {
                    e.target.classList.replace('bg-slate-600', 'bg-green-600');
                    e.target.classList.replace('hover:bg-slate-700', 'hover:bg-green-700');
                }
            }

            const items = container.querySelectorAll('.exercise-item');
            items.forEach(item => {
                const exId = item.getAttribute('data-id');
                const ansDiv = document.getElementById(`ans-${exId}`);
                const msgDiv = document.getElementById(`msg-${exId}`);
                const inputs = item.querySelectorAll('input, textarea');
                
                let isAnswered = false;

                if (type === 'mcq') {
                    const checked = item.querySelector(`input[name="${exId}"]:checked`);
                    isAnswered = !!checked;
                } else if (type === 'problem') {
                    const val = document.getElementById(`input-${exId}`).value.trim();
                    isAnswered = val.length > 0;
                } else if (type === 'journal') {
                    const tableInputs = document.getElementById(`table-${exId}`).querySelectorAll('input');
                    for (let input of tableInputs) {
                        if (input.value.trim() !== '') {
                            isAnswered = true;
                            break;
                        }
                    }
                }

                if (isRevealing) {
                    inputs.forEach(inp => {
                        inp.disabled = true;
                        inp.classList.add('bg-gray-50');
                    });
                    if (isAnswered) {
                        ansDiv.classList.remove('hidden');
                        ansDiv.classList.add('fade-in');
                        msgDiv.classList.add('hidden');
                    } else {
                        msgDiv.classList.remove('hidden');
                        msgDiv.classList.add('fade-in');
                        ansDiv.classList.add('hidden');
                    }
                } else {
                    inputs.forEach(inp => {
                        inp.disabled = false;
                        inp.classList.remove('bg-gray-50');
                    });
                    ansDiv.classList.add('hidden');
                    msgDiv.classList.add('hidden');
                }
            });
        });
    });
}

// --- HELPER / UI UTILS ---

function closeMobileSidebar() {
    elements.sidebar().classList.add('-translate-x-full');
    elements.sidebarOverlay().classList.add('hidden');
}

function highlightActiveDay(activeLink) {
    document.querySelectorAll('.day-submenu button').forEach(b => {
        b.classList.remove('text-blue-300', 'font-bold');
        b.querySelector('.fa-circle').classList.remove('text-blue-500');
        b.querySelector('.fa-circle').classList.add('text-[6px]'); 
    });
    
    activeLink.classList.add('text-blue-300', 'font-bold');
    const dot = activeLink.querySelector('.fa-circle');
    dot.classList.add('text-blue-500');
    dot.classList.remove('text-[6px]');
    dot.classList.add('text-[8px]');
}

// --- CALENDAR LOGIC (Full Implementation) ---

function setPhilippineTimeDefaults() {
    const phDateStr = new Date().toLocaleString("en-US", {timeZone: "Asia/Manila"});
    const phDate = new Date(phDateStr);
    currentCalendarYear = phDate.getFullYear();
    currentCalendarMonth = phDate.getMonth();
}

function generateFlatTopics() {
    flatTopics = [];
    courseData.terms.forEach(term => {
        term.units.forEach(unit => {
            unit.weeks.forEach(week => {
                if (week.days && week.days.length > 0) {
                    week.days.forEach((day, index) => {
                        flatTopics.push({
                            id: `${unit.id}|${week.id}|${index}`,
                            label: `${unit.title.split(':')[0]} - ${week.title.split(':')[0]} - ${day.day}`,
                            fullTitle: `${day.topic}`
                        });
                    });
                }
            });
        });
    });
}

function getDateForTopic(unitId, weekId, dayIndex) {
    const topicKey = `${unitId}|${weekId}|${dayIndex}`;
    const dates = [];
    for (const [date, assignedTopic] of Object.entries(calendarAssignments)) {
        if (assignedTopic === topicKey) {
            dates.push(date);
        }
    }
    if (dates.length === 0) return null;
    dates.sort();
    return formatRanges(dates);
}

function updateSchedule(dateStr, topicId) {
    if (topicId === "") {
        delete calendarAssignments[dateStr];
    } else {
        calendarAssignments[dateStr] = topicId;
    }
    localStorage.setItem('fabm2_calendar', JSON.stringify(calendarAssignments));
    
    const select = document.getElementById(`sel-${dateStr}`);
    if (select) {
        if (topicId) {
            select.classList.add('border-purple-300', 'bg-purple-50', 'text-purple-900', 'font-medium');
            select.classList.remove('text-gray-500');
        } else {
            select.classList.remove('border-purple-300', 'bg-purple-50', 'text-purple-900', 'font-medium');
            select.classList.add('text-gray-500');
        }
    }
}

function renderCalendarPage() {
    elements.pageTitle().innerText = "Course Schedule Settings";
    const content = elements.contentArea();
    content.innerHTML = '';

    const container = document.createElement('div');
    container.className = "w-full max-w-7xl mx-auto pb-12 fade-in relative";

    const infoBox = document.createElement('div');
    infoBox.className = "mb-6 bg-purple-50 border border-purple-200 p-4 rounded-lg text-sm text-purple-800";
    infoBox.innerHTML = "<i class='fas fa-info-circle mr-2'></i> Select Year and Month to view the calendar. Assign topics to dates to build your schedule (PH Time).";
    container.appendChild(infoBox);

    const controls = document.createElement('div');
    controls.className = "flex flex-col md:flex-row gap-4 mb-6 calendar-controls bg-white p-4 rounded-lg border border-gray-200 shadow-sm";

    const yearSelect = document.createElement('select');
    yearSelect.className = "flex-1 border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 p-2 border";
    const currentYear = new Date().getFullYear();
    for(let y = 2024; y <= 2030; y++) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.text = y;
        if(y === currentCalendarYear) opt.selected = true;
        yearSelect.appendChild(opt);
    }
    
    const monthSelect = document.createElement('select');
    monthSelect.className = "flex-1 border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 p-2 border";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((m, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.text = m;
        if(idx === currentCalendarMonth) opt.selected = true;
        monthSelect.appendChild(opt);
    });

    const calendarContainer = document.createElement('div');
    
    yearSelect.onchange = (e) => {
        currentCalendarYear = parseInt(e.target.value);
        renderMonthView(calendarContainer);
    };
    monthSelect.onchange = (e) => {
        currentCalendarMonth = parseInt(e.target.value);
        renderMonthView(calendarContainer);
    };

    controls.appendChild(yearSelect);
    controls.appendChild(monthSelect);
    container.appendChild(controls);

    renderMonthView(calendarContainer); 
    container.appendChild(calendarContainer);

    content.appendChild(container);
    
    setTimeout(() => {
        const todayRow = document.getElementById('today-row');
        if (todayRow) {
            todayRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            todayRow.classList.add('bg-purple-100'); 
            setTimeout(() => todayRow.classList.remove('bg-purple-100'), 2000);
        }
    }, 100);
}

function renderMonthView(container) {
    container.innerHTML = ''; 

    const monthDiv = document.createElement('div');
    monthDiv.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden fade-in";
    
    const monthName = new Date(currentCalendarYear, currentCalendarMonth).toLocaleString('default', { month: 'long' });
    const monthHeader = document.createElement('div');
    monthHeader.className = "bg-slate-800 text-white px-6 py-3 font-bold text-lg flex justify-between items-center";
    monthHeader.innerHTML = `<span>${monthName} ${currentCalendarYear}</span> <span class="text-xs bg-slate-700 px-2 py-1 rounded">PH Time</span>`;
    monthDiv.appendChild(monthHeader);

    const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    
    const now = new Date();
    const todayStr = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
    const todayDay = todayStr.getDate();
    const todayMonth = todayStr.getMonth();
    const todayYear = todayStr.getFullYear();

    if (daysInMonth > 0) {
        for (let d = 1; d <= daysInMonth; d++) {
            const dateObj = new Date(currentCalendarYear, currentCalendarMonth, d);
            
            const yyyy = currentCalendarYear;
            const mm = String(currentCalendarMonth + 1).padStart(2, '0');
            const dd = String(d).padStart(2, '0');
            const dateStr = `${yyyy}-${mm}-${dd}`; 

            const dayName = dateObj.toLocaleDateString('default', { weekday: 'short' });
            const isWeekend = dayName === 'Sat' || dayName === 'Sun';
            const currentAssignment = calendarAssignments[dateStr] || "";

            const isToday = (d === todayDay && currentCalendarMonth === todayMonth && currentCalendarYear === todayYear);

            const row = document.createElement('div');
            if (isToday) row.id = "today-row";
            
            const rowClass = `flex items-center border-b border-gray-100 last:border-0 p-3 hover:bg-gray-50 transition-colors duration-500 ${isWeekend ? 'bg-gray-50' : ''} ${isToday ? 'border-l-4 border-l-purple-500' : ''}`;
            row.className = rowClass;
            
            const todayBadge = isToday ? '<span class="ml-2 text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded font-bold">TODAY</span>' : '';

            row.innerHTML = `
                <div class="w-32 flex-shrink-0">
                    <div class="font-bold text-slate-700 flex items-center">
                        ${d} <span class="text-xs text-gray-400 font-normal uppercase ml-1">${dayName}</span>
                        ${todayBadge}
                    </div>
                </div>
                <div class="flex-1">
                    <select id="sel-${dateStr}" class="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 p-2 border bg-white ${currentAssignment ? 'border-purple-300 bg-purple-50 text-purple-900 font-medium' : 'text-gray-500'}" onchange="updateSchedule('${dateStr}', this.value)">
                        <option value="">-- No Class / Free Day --</option>
                        ${generateOptionsHtml(currentAssignment)}
                    </select>
                </div>
            `;
            monthDiv.appendChild(row);
        }
    }
    container.appendChild(monthDiv);
}

function generateOptionsHtml(selectedValue) {
    return flatTopics.map(t => {
        const isSelected = t.id === selectedValue ? 'selected' : '';
        return `<option value="${t.id}" ${isSelected}>${t.label}: ${t.fullTitle}</option>`;
    }).join('');
}

// Start the app
init();
