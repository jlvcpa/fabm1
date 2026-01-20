import { loginUser } from './auth.js';
import { courseData } from './content/syllabus.js';
import { formatRanges } from './utils.js';

// --- STATE MANAGEMENT ---
let currentUser = null; 
let calendarAssignments = JSON.parse(localStorage.getItem('fabm2_calendar')) || {};
let flatTopics = []; 
let currentCalendarYear, currentCalendarMonth;
let hoverTimeout;

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
    hoverMenu: () => document.getElementById('hover-menu'),
    mobileMenuBtn: () => document.getElementById('mobile-menu-btn'),
    desktopSidebarToggle: () => document.getElementById('desktop-sidebar-toggle'),
    btnLogout: () => document.getElementById('btn-logout')
};

// --- INITIALIZATION ---

function init() {
    setupEventListeners();
    setPhilippineTimeDefaults();
    generateFlatTopics();
    
    // Expose updateSchedule to window for HTML onchange attributes
    window.updateSchedule = updateSchedule;
}

function setupEventListeners() {
    // Auth
    elements.btnLogin().addEventListener('click', handleLogin);
    elements.btnLogout().addEventListener('click', handleLogout);
    
    // Sidebar
    elements.desktopSidebarToggle().addEventListener('click', () => {
        elements.sidebar().classList.toggle('collapsed');
    });
    
    elements.mobileMenuBtn().addEventListener('click', () => {
        elements.sidebar().classList.remove('-translate-x-full');
        elements.sidebarOverlay().classList.remove('hidden');
    });

    elements.sidebarOverlay().addEventListener('click', closeMobileSidebar);

    // Hover Menu
    const menu = elements.hoverMenu();
    menu.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
    menu.addEventListener('mouseleave', hideHoverMenu);
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

    // Course Outline Button
    const outlineBtn = document.createElement('button');
    outlineBtn.className = "w-full text-left px-6 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border-l-4 border-transparent hover:border-blue-500 focus:outline-none whitespace-nowrap overflow-hidden";
    outlineBtn.innerHTML = '<i class="fas fa-home w-6"></i> <span class="sidebar-text-detail">Course Outline</span>';
    outlineBtn.onclick = () => {
        renderLandingPage();
        closeMobileSidebar();
    };
    container.appendChild(outlineBtn);

    // Calendar Button (Teachers Only)
    if (role === 'teacher') {
        const calendarBtn = document.createElement('button');
        calendarBtn.className = "w-full text-left px-6 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border-l-4 border-transparent hover:border-purple-500 focus:outline-none whitespace-nowrap overflow-hidden";
        calendarBtn.innerHTML = '<i class="fas fa-calendar-alt w-6"></i> <span class="sidebar-text-detail">Course Schedule</span>';
        calendarBtn.onclick = () => {
            renderCalendarPage();
            closeMobileSidebar();
        };
        container.appendChild(calendarBtn);
    }

    // Dynamic Terms/Units
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
            unitBtn.className = "w-full text-left px-6 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex justify-between items-center group whitespace-nowrap overflow-hidden";
            unitBtn.innerHTML = `
                <div class="truncate pr-2">
                    <span class="font-bold text-sm">${unitPrefix}</span>
                    <span class="font-medium text-sm sidebar-text-detail">:${unitSuffix}</span>
                </div>
                <i class="fas fa-chevron-down text-xs transform transition-transform duration-300 group-hover:text-blue-400"></i>
            `;
            
            const submenu = document.createElement('div');
            submenu.className = "submenu bg-slate-950";
            
            unitBtn.onclick = () => {
                const icon = unitBtn.querySelector('.fa-chevron-down');
                if (submenu.classList.contains('open')) {
                    submenu.classList.remove('open');
                    icon.classList.remove('rotate-180');
                } else {
                    document.querySelectorAll('.submenu').forEach(el => {
                        el.classList.remove('open');
                        el.previousElementSibling.querySelector('.fa-chevron-down')?.classList.remove('rotate-180');
                    });
                    submenu.classList.add('open');
                    icon.classList.add('rotate-180');
                }
            };

            unit.weeks.forEach(week => {
                const weekParts = week.title.split(':');
                const weekPrefix = weekParts[0];
                const weekSuffix = weekParts.slice(1).join(':');

                const weekLink = document.createElement('button');
                weekLink.className = "w-full text-left pl-10 pr-6 py-2 text-sm text-slate-400 hover:text-blue-300 hover:bg-slate-900 transition-colors border-l-2 border-transparent hover:border-blue-500 relative whitespace-nowrap overflow-hidden";
                weekLink.innerHTML = `<span>${weekPrefix}</span><span class="sidebar-text-detail">:${weekSuffix}</span>`;
                
                weekLink.onclick = () => {
                    renderDayContent(unit, week, 0); 
                    closeMobileSidebar();
                    highlightActiveLink(weekLink);
                };

                weekLink.addEventListener('mouseenter', (e) => showHoverMenu(e, unit, week));
                weekLink.addEventListener('mouseleave', hideHoverMenu);

                submenu.appendChild(weekLink);
            });

            container.appendChild(unitBtn);
            container.appendChild(submenu);
        });
    });
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

    // Landing Page Event Listeners
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

// --- DAY RENDERER (The Core Content Logic) ---

// --- DAY RENDERER REVISION ---

function renderDayContent(unit, week, dayIndex) {
    // Update document title for browser history/tab
    elements.pageTitle().innerText = `${unit.title} - ${week.title}`;
    
    const content = elements.contentArea();
    content.innerHTML = ''; 

    // Main Container: W-full to maximize width, flex-col to manage height
    const container = document.createElement('div');
    container.className = "w-full max-w-[1600px] mx-auto h-full flex flex-col";

    // 1. Prepare Date Badge Logic
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

    // 2. Main Card Container
    const card = document.createElement('div');
    // Added flex-1 to make card fill all available vertical space
    card.className = "bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col overflow-hidden fade-in";

    // 3. Compact Header (Day + Topic Left | Date Right)
    // Reduced vertical padding (py-3) to half height. Flex-wrap allows text to wrap if needed.
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

    // 4. Combined Tabs & Navigation Bar
    const navBar = document.createElement('div');
    navBar.className = "flex flex-wrap items-center justify-between border-b border-gray-200 bg-white pl-0 pr-4 min-h-[50px]";

    // Left Side: Tabs (Left Aligned, Fixed Width/Padding instead of flex-1)
    const tabsContainer = document.createElement('div');
    tabsContainer.className = "flex";
    
    // Tab Button Helper
    const createTabBtn = (id, icon, label, isActive) => {
        const btn = document.createElement('button');
        btn.id = id;
        // px-6 for width, py-3 for comfortable touch target but compact
        btn.className = `px-6 py-3 text-sm font-semibold transition-colors border-b-2 flex items-center whitespace-nowrap ${
            isActive 
            ? 'border-blue-600 text-blue-900 bg-blue-50' 
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }`;
        btn.innerHTML = `<i class="fas ${icon} mr-2"></i>${label}`;
        return btn;
    };

    const tabConcepts = createTabBtn('tab-btn-concepts', 'fa-book-reader', 'Topic & Concepts', true);
    const tabPractice = createTabBtn('tab-btn-practice', 'fa-pencil-alt', 'Practice Questions', false);

    tabsContainer.appendChild(tabConcepts);
    tabsContainer.appendChild(tabPractice);
    navBar.appendChild(tabsContainer);

    // Right Side: Navigation Buttons (Injected here instead of bottom footer)
    const navButtonsGroup = document.createElement('div');
    navButtonsGroup.className = "flex items-center gap-2 py-2 ml-auto"; // ml-auto pushes to right

    // Previous Button
    if (dayIndex > 0) {
        const prevBtn = document.createElement('button');
        // Reduced height by ~20% (py-1.5 vs py-2), text-xs
        prevBtn.className = "px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center";
        prevBtn.innerHTML = `<i class="fas fa-chevron-left mr-1"></i> Prev`;
        prevBtn.onclick = () => renderDayContent(unit, week, dayIndex - 1);
        navButtonsGroup.appendChild(prevBtn);
    }

    // Next Button
    if (dayIndex < week.days.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = "px-3 py-1.5 text-xs font-medium text-white bg-blue-600 border border-transparent rounded shadow-sm hover:bg-blue-700 transition-colors flex items-center";
        nextBtn.innerHTML = `Next <i class="fas fa-chevron-right ml-1"></i>`;
        nextBtn.onclick = () => renderDayContent(unit, week, dayIndex + 1);
        navButtonsGroup.appendChild(nextBtn);
    }

    navBar.appendChild(navButtonsGroup);
    card.appendChild(navBar);

    // 5. Content Area (Fills remaining height)
    const tabContentWrapper = document.createElement('div');
    tabContentWrapper.className = "p-8 flex-1 overflow-y-auto bg-white"; // Added bg-white explicitly

    const conceptsDiv = document.createElement('div');
    conceptsDiv.id = "tab-content-concepts";
    conceptsDiv.className = "prose prose-blue max-w-none text-gray-600";
    conceptsDiv.innerHTML = day.content;
    tabContentWrapper.appendChild(conceptsDiv);

    const practiceDiv = document.createElement('div');
    practiceDiv.id = "tab-content-practice";
    practiceDiv.className = "hidden space-y-6";
    
    if (day.exercises && day.exercises.length > 0) {
        practiceDiv.innerHTML = renderExercises(day.exercises, dayIndex);
    } else {
        practiceDiv.innerHTML = `<div class="text-center py-12"><p class="text-gray-500">No practice questions available for this day.</p></div>`;
    }
    tabContentWrapper.appendChild(practiceDiv);
    card.appendChild(tabContentWrapper);
    
    container.appendChild(card);
    content.appendChild(container);

    // 6. Tab Switching Logic
    const switchTab = (tab) => {
        if(tab === 'concepts') {
            conceptsDiv.classList.remove('hidden');
            practiceDiv.classList.add('hidden');
            
            // Update styles manually since we aren't using the old HTML string method
            tabConcepts.className = tabConcepts.className.replace('border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50', 'border-blue-600 text-blue-900 bg-blue-50');
            tabPractice.className = tabPractice.className.replace('border-blue-600 text-blue-900 bg-blue-50', 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50');
        } else {
            practiceDiv.classList.remove('hidden');
            conceptsDiv.classList.add('hidden');

            tabPractice.className = tabPractice.className.replace('border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50', 'border-blue-600 text-blue-900 bg-blue-50');
            tabConcepts.className = tabConcepts.className.replace('border-blue-600 text-blue-900 bg-blue-50', 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50');
        }
    }
    
    tabConcepts.onclick = () => switchTab('concepts');
    tabPractice.onclick = () => switchTab('practice');

    // Attach Logic AFTER rendering
    attachExerciseListeners();
    executeExerciseMounts(day.exercises);
}

function executeExerciseMounts(exercises) {
    if (!exercises) return;
    exercises.forEach(ex => {
        if (ex.type === 'custom-mount' && typeof ex.mountLogic === 'function') {
            // Execute the mount logic which typically imports and runs a module
            setTimeout(() => {
                ex.mountLogic();
            }, 0);
        }
    });
}

function renderExercises(exercises, dayIndex) {
    return exercises.map((ex, i) => {
        if (ex.type === 'custom-mount') return ''; // Don't render as a question

        const exId = `ex-${dayIndex}-${i}`;
        
        if (ex.type === 'mcq') {
            const optionsHtml = ex.options.map((opt, optIndex) => `
                <label class="flex items-start p-3 rounded border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors bg-white">
                    <input type="radio" name="${exId}" value="${optIndex}" class="mt-1 mr-3 text-blue-600 focus:ring-blue-500" data-qid="${exId}">
                    <span class="text-sm text-gray-700">${opt}</span>
                </label>
            `).join('');

            return `
                <div class="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <p class="font-semibold text-gray-800 mb-4 text-base"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs mr-2">Question ${i+1}</span>${ex.question}</p>
                    <div class="space-y-3 mb-4">${optionsHtml}</div>
                    
                    <div class="flex items-center gap-3">
                        <button id="btn-${exId}" class="hidden px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all shadow-sm" data-qid="${exId}">Check Answer</button>
                    </div>

                    <div id="ans-${exId}" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                        <p class="font-bold mb-1"><i class="fas fa-check-circle mr-1"></i> Correct Answer: ${ex.options[ex.correctIndex]}</p>
                        <p>${ex.explanation}</p>
                    </div>
                </div>
            `;
        } else if (ex.type === 'problem') {
            return `
                <div class="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <p class="font-semibold text-gray-800 mb-4 text-base"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs mr-2">Problem ${i+1}</span>${ex.question}</p>
                    
                    <textarea id="input-${exId}" class="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white" rows="4" placeholder="Type your solution here..." data-qid="${exId}"></textarea>
                    
                    <div class="mt-4">
                        <button id="btn-${exId}" class="hidden px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all shadow-sm" data-qid="${exId}">Show Answer Key</button>
                    </div>

                    <div id="ans-${exId}" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-mono whitespace-pre-wrap">
<strong><i class="fas fa-key mr-1"></i> Answer Key:</strong>
${ex.answer}

<strong><i class="fas fa-info-circle mr-1"></i> Explanation:</strong>
${ex.explanation}
                    </div>
                </div>
            `;
        }
        return '';
    }).join('');
}

function attachExerciseListeners() {
    // Listen for radio changes
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const qid = e.target.getAttribute('data-qid');
            const btn = document.getElementById(`btn-${qid}`);
            if(btn) {
                btn.classList.remove('hidden');
                btn.classList.add('fade-in');
            }
        });
    });

    // Listen for text input changes (for problems)
    document.querySelectorAll('textarea[id^="input-"]').forEach(area => {
        area.addEventListener('input', (e) => {
            const qid = e.target.getAttribute('data-qid');
            const btn = document.getElementById(`btn-${qid}`);
            if(e.target.value.trim().length > 0) {
                btn.classList.remove('hidden');
                btn.classList.add('fade-in');
            } else {
                btn.classList.add('hidden');
            }
        });
    });

    // Listen for check answer clicks
    document.querySelectorAll('button[id^="btn-ex-"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const qid = e.target.getAttribute('data-qid');
            const ansDiv = document.getElementById(`ans-${qid}`);
            if(ansDiv.classList.contains('hidden')) {
                ansDiv.classList.remove('hidden');
                ansDiv.classList.add('fade-in');
                e.target.textContent = "Hide Answer";
                e.target.classList.replace('bg-blue-600', 'bg-gray-500');
                e.target.classList.replace('hover:bg-blue-700', 'hover:bg-gray-600');
            } else {
                ansDiv.classList.add('hidden');
                e.target.textContent = "Show Answer";
                e.target.classList.replace('bg-gray-500', 'bg-blue-600');
                e.target.classList.replace('hover:bg-gray-600', 'hover:bg-blue-700');
            }
        });
    });
}

// --- HELPER / UI UTILS ---

function closeMobileSidebar() {
    elements.sidebar().classList.add('-translate-x-full');
    elements.sidebarOverlay().classList.add('hidden');
}

function highlightActiveLink(activeLink) {
    document.querySelectorAll('.submenu button').forEach(b => b.classList.remove('text-blue-300', 'bg-slate-900', 'border-blue-500'));
    activeLink.classList.add('text-blue-300', 'bg-slate-900', 'border-blue-500');
}

function showHoverMenu(e, unit, week) {
    clearTimeout(hoverTimeout);
    const menu = elements.hoverMenu();
    if(!week.days || week.days.length === 0) {
        menu.classList.add('hidden');
        return;
    }
    menu.innerHTML = '';
    const header = document.createElement('div');
    header.className = "px-4 py-2 bg-gray-50 border-b text-xs font-bold text-gray-500 uppercase";
    header.innerText = "Jump to Day";
    menu.appendChild(header);

    week.days.forEach((day, index) => {
        const dayBtn = document.createElement('button');
        dayBtn.className = "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors";
        dayBtn.innerHTML = `<span class="font-bold text-xs mr-1">${day.day}:</span> ${day.topic}`;
        dayBtn.onclick = () => {
            renderDayContent(unit, week, index);
            menu.classList.add('hidden');
            closeMobileSidebar();
        };
        menu.appendChild(dayBtn);
    });

    const rect = e.target.getBoundingClientRect();
    menu.style.top = `${rect.top}px`;
    menu.style.left = `${rect.right}px`;
    menu.classList.remove('hidden');
}

function hideHoverMenu() {
    hoverTimeout = setTimeout(() => {
        elements.hoverMenu().classList.add('hidden');
    }, 200);
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
    
    // Find all matching dates
    for (const [date, assignedTopic] of Object.entries(calendarAssignments)) {
        if (assignedTopic === topicKey) {
            dates.push(date);
        }
    }

    if (dates.length === 0) return null;

    // Sort dates
    dates.sort();

    // Format into ranges using updated Util
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
    
    // Event Listeners for controls
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
    
    // Auto-scroll to today if present in current view
    setTimeout(() => {
        const todayRow = document.getElementById('today-row');
        if (todayRow) {
            todayRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            todayRow.classList.add('bg-purple-100'); // Highlight effect
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
    
    // Get today's info for highlighting
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

            // Check if it's today
            const isToday = (d === todayDay && currentCalendarMonth === todayMonth && currentCalendarYear === todayYear);

            const row = document.createElement('div');
            if (isToday) row.id = "today-row";
            
            // Style adjustments for Today
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
