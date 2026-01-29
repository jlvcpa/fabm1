// --- QUIZ MANAGER (INTERACTIVITY) ---

function initializeQuizManager(activityData, questionData, user) {
    const expireTime = new Date(activityData.dateTimeExpire).getTime();
    const timerDisplay = document.getElementById('quiz-timer');
    const submitBtn = document.getElementById('btn-submit-quiz');
    const form = document.getElementById('quiz-form');

    // --- ANTICHEAT LOGIC ---
    const highStakesKeywords = ['Summative', 'Prelim', 'Midterm', 'Semi-final', 'Final', 'Performance'];
    const isHighStakes = highStakesKeywords.some(keyword => activityData.activityname.includes(keyword));
    
    // Stop any existing anti-cheat before starting new one
    if (currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    if (isHighStakes) {
        currentAntiCheat = new AntiCheatSystem({
            onCheatDetected: () => {
                // Penalty Logic: In this context, we reload the runner to force a restart/refresh
                if(quizTimerInterval) clearInterval(quizTimerInterval);
                alert("Anti-Cheat Violation Detected! The activity will now reload.");
                // Simply calling renderQuizRunner again acts as a refresh
                renderQuizRunner(activityData, user);
            }
        });
        
        // Expose unlock function for the HTML button
        window.handleUnlockClick = () => currentAntiCheat.handleUnlockClick();
        
        currentAntiCheat.startMonitoring();
    }
    // -----------------------

    function updateTimer() {
        const now = new Date().getTime();
        const dist = expireTime - now;

        if (dist < 0) {
            clearInterval(quizTimerInterval);
            timerDisplay.innerHTML = "EXPIRED";
            timerDisplay.parentElement.classList.add('bg-red-600');
            alert("Time is up! Submitting answers now.");
            submitQuiz(activityData, questionData, user); // Auto submit
            return;
        }

        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${h > 0 ? h + ':' : ''}${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }
    updateTimer(); 
    quizTimerInterval = setInterval(updateTimer, 1000);

    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.test-section-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('border-blue-800', 'text-blue-800', 'bg-blue-50');
                t.classList.add('border-transparent', 'text-gray-600');
            });
            tab.classList.remove('border-transparent', 'text-gray-600');
            tab.classList.add('border-blue-800', 'text-blue-800', 'bg-blue-50');

            const targetId = tab.dataset.target;
            sections.forEach(sec => sec.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    sections.forEach(section => {
        const type = section.dataset.sectionType;
        
        if (type !== 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const trackers = section.querySelectorAll('.tracker-btn');
            const prevBtns = section.querySelectorAll('.nav-prev-btn');
            const nextBtns = section.querySelectorAll('.nav-next-btn');
            
            let currentIndex = 0;

            function showQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                trackers.forEach((t, i) => {
                    if (i === index) {
                        t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-blue-600 bg-blue-600 text-white font-bold flex items-center justify-center ring-2 ring-blue-300";
                    } else {
                        if (t.dataset.isAnswered === "true") {
                             t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                             t.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
                    }
                });
                currentIndex = index;
            }

            trackers.forEach((t, idx) => {
                t.addEventListener('click', () => showQuestion(idx));
            });

            prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentIndex > 0) showQuestion(currentIndex - 1);
                });
            });
            
            nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentIndex < questions.length - 1) showQuestion(currentIndex + 1);
                });
            });
        } 
        
        else if (type === 'Journalizing') {
            const questions = section.querySelectorAll('.question-block');
            const prevQuestionBtns = section.querySelectorAll('.nav-prev-btn');
            const nextQuestionBtns = section.querySelectorAll('.nav-next-btn');
            let currentJournalIndex = 0;

            function showJournalQuestion(index) {
                questions.forEach((q, i) => {
                    if (i === index) q.classList.remove('hidden');
                    else q.classList.add('hidden');
                });
                currentJournalIndex = index;
            }

            // Bind Previous Question Buttons
            prevQuestionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentJournalIndex > 0) showJournalQuestion(currentJournalIndex - 1);
                });
            });

            // Bind Next Question Buttons
            nextQuestionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentJournalIndex < questions.length - 1) showJournalQuestion(currentJournalIndex + 1);
                });
            });
            
            // Internal Transaction Navigation
            questions.forEach(qBlock => {
                const transBtns = qBlock.querySelectorAll('.trans-tracker-btn');
                const transBlocks = qBlock.querySelectorAll('.journal-trans-block');
                const internalPrevBtns = qBlock.querySelectorAll('.btn-prev-trans');
                const internalNextBtns = qBlock.querySelectorAll('.btn-next-trans');

                const switchTransaction = (idx) => {
                      transBlocks.forEach(b => b.classList.add('hidden'));
                      if(transBlocks[idx]) transBlocks[idx].classList.remove('hidden');

                      transBtns.forEach((b, bIdx) => {
                          if (bIdx === idx) {
                              b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-blue-100 border-l-4 border-blue-600 text-blue-800';
                          } else {
                              if (b.dataset.isAnswered === "true") {
                                  b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100';
                              } else {
                                  b.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                              }
                          }
                      });
                };
                
                transBtns.forEach((btn, idx) => {
                    btn.addEventListener('click', () => switchTransaction(idx));
                });

                internalPrevBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const targetIdx = parseInt(btn.dataset.targetIdx);
                        switchTransaction(targetIdx);
                    });
                });

                internalNextBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const targetIdx = parseInt(btn.dataset.targetIdx);
                        switchTransaction(targetIdx);
                    });
                });
            });
        }
    });

    form.addEventListener('input', checkCompletion);
    
    function checkCompletion() {
        let allAnswered = true;
        
        for (const q of questionData) {
            let isQuestionAnswered = false;

            if (q.type === 'Multiple Choice') {
                const checked = form.querySelector(`input[name="${q.uiId}"]:checked`);
                if (checked) isQuestionAnswered = true;
                else allAnswered = false;
                
                const trackerBtn = document.querySelector(`button[data-target-question="${q.uiId}"]`);
                if (trackerBtn) {
                    trackerBtn.dataset.isAnswered = isQuestionAnswered ? "true" : "false";
                    if (!trackerBtn.classList.contains('bg-blue-600')) {
                        if (isQuestionAnswered) {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
                    }
                }

            } else if (q.type === 'Problem Solving') {
                const val = form.querySelector(`textarea[name="${q.uiId}"]`).value;
                if (val && val.trim() !== '') isQuestionAnswered = true;
                else allAnswered = false;

                const trackerBtn = document.querySelector(`button[data-target-question="${q.uiId}"]`);
                if (trackerBtn) {
                    trackerBtn.dataset.isAnswered = isQuestionAnswered ? "true" : "false";
                    if (!trackerBtn.classList.contains('bg-blue-600')) {
                        if (isQuestionAnswered) {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-green-500 bg-green-500 text-white font-bold flex items-center justify-center";
                        } else {
                            trackerBtn.className = "tracker-btn w-9 h-9 m-0.5 rounded-full border border-gray-300 bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-blue-100";
                        }
                    }
                }

            } else if (q.type === 'Journalizing') {
                const transBtns = document.querySelectorAll(`button[data-target-trans^="${q.uiId}_t"]`);
                let questionHasData = false;
                
                transBtns.forEach(btn => {
                    const transUiId = btn.dataset.targetTrans;
                    const inputs = form.querySelectorAll(`input[name^="${transUiId}"]`);
                    let transHasData = false;
                    inputs.forEach(i => { if(i.value) transHasData = true; });

                    btn.dataset.isAnswered = transHasData ? "true" : "false";
                    if(transHasData) questionHasData = true;

                    if (!btn.classList.contains('bg-blue-100')) {
                        if (transHasData) {
                            btn.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-green-50 border-l-4 border-green-500 text-green-700 hover:bg-green-100';
                        } else {
                            btn.className = 'trans-tracker-btn w-full text-left p-3 border-b border-gray-100 text-xs md:text-sm font-medium transition-colors focus:outline-none bg-white border-l-4 border-transparent text-gray-600 hover:bg-gray-50';
                        }
                    }
                });

                if(!questionHasData) allAnswered = false; 
            }
        }

        if (allAnswered) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.innerHTML = "Submit Activity";
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
            submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700', 'cursor-pointer');
            submitBtn.innerHTML = "Finish All Questions";
        }
    }

    submitBtn.addEventListener('click', () => submitQuiz(activityData, questionData, user));
}

async function submitQuiz(activityData, questionData, user) {
    if(!confirm("Are you sure you want to submit your answers?")) return;
    
    // Stop AntiCheat
    if(currentAntiCheat) {
        currentAntiCheat.stopMonitoring();
        currentAntiCheat = null;
    }

    if(quizTimerInterval) clearInterval(quizTimerInterval);

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const answers = {};
    
    const questionsTaken = {};

    questionData.forEach(q => {
        questionsTaken[q.uiId] = {
            questionText: q.questionText,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            type: q.type,
            options: q.options || null,
            transactions: q.transactions || null,
            instructions: q.instructions || null 
        };

        if(q.type === 'Multiple Choice') { 
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Problem Solving') {
            answers[q.uiId] = formData.get(q.uiId);
        } else if (q.type === 'Journalizing') {
            const inputs = document.querySelectorAll(`input[name^="${q.uiId}"]`);
            let currentRow = {};
            inputs.forEach(input => {
                 const name = input.name;
                 const parts = name.split('_'); 
                 const tIdx = parts[2];
                 const rIdx = parts[3];
                 const field = parts[4];
                 const key = `${tIdx}_${rIdx}`;

                 if(!currentRow[key]) currentRow[key] = {};
                 currentRow[key][field] = input.value;
            });
            answers[q.uiId] = currentRow;
        }
    });

    const sectionScores = {};

    activityData.testQuestions.forEach((section, index) => {
        let sectionScore = 0;
        let sectionMaxScore = 0;

        const sectionQs = questionData.filter(q => q.uiId.startsWith(`s${index}_`));

        sectionQs.forEach(q => {
            const studentAnswer = answers[q.uiId];

            if (section.type === "Multiple Choice") {
                sectionMaxScore++;
                // FIXED: Treat matching strings OR student "0" matching null answer key as correct
                const isZeroMatch = (String(studentAnswer) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                if (String(studentAnswer) === String(q.correctAnswer) || isZeroMatch) sectionScore++;
            } 
            else if (section.type === "Problem Solving") {
                sectionMaxScore++;
                if (studentAnswer && q.correctAnswer && studentAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) sectionScore++;
            } 
            else if (section.type === "Journalizing") {
                const transactions = q.transactions || [];
                transactions.forEach((trans, tIdx) => {
                    const solRows = trans.solution || [];
                    const rowCount = trans.rows || 2;

                    for(let r=0; r < rowCount; r++) {
                        // FIXED: Adjusted key format to match saved data (t0_r0 instead of 0_0)
                        const cellKey = `t${tIdx}_r${r}`;
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        const solRow = solRows[r] || null;

                        const sDate = cellData.date.trim();
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++; 
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 if (sDate.match(expectedRegex) && sDate === solRow.date) sectionScore++;
                             } else {
                                 if (sDate === '') sectionScore++;
                             }
                        } else {
                            if (sDate !== '') sectionScore--; 
                        }

                        const sAcct = cellData.acct;
                        if (solRow) {
                             sectionMaxScore++; 
                             if (solRow.isExplanation) {
                                 if (sAcct.match(/^\s{5,8}\S/)) sectionScore++;
                             } else {
                                 const cleanInput = sAcct.trim();
                                 const cleanSol = solRow.account.trim();
                                 if (cleanInput.toLowerCase() === cleanSol.toLowerCase()) {
                                     if (solRow.credit) {
                                         if (sAcct.match(/^\s{3,5}\S/)) sectionScore++;
                                     } else {
                                         if (sAcct.match(/^\S/)) sectionScore++;
                                     }
                                 }
                             }
                        }

                        const sDr = cellData.dr.trim();
                        const cleanSolDr = (solRow && solRow.debit) ? Number(solRow.debit).toFixed(2) : "";
                        if (solRow && !solRow.isExplanation && cleanSolDr !== "") {
                            sectionMaxScore++; 
                            if (sDr === cleanSolDr && sDr.match(/^\d+\.\d{2}$/)) sectionScore++;
                        } else {
                            if (sDr !== "") sectionScore--; 
                        }

                        const sCr = cellData.cr.trim();
                        const cleanSolCr = (solRow && solRow.credit) ? Number(solRow.credit).toFixed(2) : "";
                        if (solRow && !solRow.isExplanation && cleanSolCr !== "") {
                            sectionMaxScore++; 
                            if (sCr === cleanSolCr && sCr.match(/^\d+\.\d{2}$/)) sectionScore++;
                        } else {
                            if (sCr !== "") sectionScore--; 
                        }
                    }
                });
            }
        });

        sectionScores[index] = {
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0,
            letterGrade: getLetterGrade(sectionScore, sectionMaxScore),
            type: section.type
        };
    });

    const collectionName = `results_${activityData.activityname}_${activityData.section}`;
    const docName = `${user.CN}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
    
    const submissionPayload = {
        activityId: activityData.id,
        activityName: activityData.activityname,
        studentName: `${user.LastName}, ${user.FirstName}`,
        studentId: user.Idnumber,
        CN: user.CN,
        section: activityData.section,
        timestamp: new Date().toISOString(),
        answers: JSON.parse(JSON.stringify(answers, (k, v) => v === undefined ? null : v)),
        questionsTaken: JSON.parse(JSON.stringify(questionsTaken, (k, v) => v === undefined ? null : v)),
        sectionScores: sectionScores
    };

    try {
        await setDoc(doc(db, collectionName, docName), submissionPayload);
        
        await setDoc(doc(db, "results_list", collectionName), { 
            created: new Date().toISOString(),
            activityName: activityData.activityname,
            section: activityData.section
        });

        document.getElementById('qa-runner-container').innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-green-600 bg-white">
                <i class="fas fa-check-circle text-6xl mb-6"></i>
                <h2 class="text-3xl font-bold">Submitted Successfully</h2>
                <p class="text-gray-500 mt-2 text-lg">Your response has been saved.</p>
                <div class="mt-8 flex gap-4">
                    <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="px-6 py-3 bg-gray-600 text-white rounded shadow hover:bg-gray-700">Back to List</button>
                    <button onclick="window.location.reload()" class="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">View Results</button>
                </div>
            </div>
        `;
    } catch (e) {
        console.error("Submission Error:", e);
        alert("Error saving to server: " + e.message);
    }
}
async function renderQuizResultPreview(activityData, user, resultData) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Loading Results...</span></div>';

    let contentHtml = '';
    
    // Legacy Polyfill
    let savedQuestions = resultData.questionsTaken;
    if (!savedQuestions || Object.keys(savedQuestions).length === 0) {
        savedQuestions = {};
        const answers = resultData.answers || {};
        
        const ensureQ = (key, type) => {
            if (!savedQuestions[key]) {
                savedQuestions[key] = {
                    uiId: key,
                    type: type,
                    questionText: "Legacy Submission",
                    correctAnswer: "N/A",
                    explanation: "Details not available",
                    options: [], 
                    transactions: [],
                    instructions: null
                };
            }
            return savedQuestions[key];
        };

        Object.keys(answers).forEach(k => {
            const parts = k.split('_'); 
            if (parts.length < 2) return;
            const sectionIdx = parseInt(parts[0].replace('s',''));
            const qKey = `${parts[0]}_${parts[1]}`;
            const sectionType = activityData.testQuestions[sectionIdx] ? activityData.testQuestions[sectionIdx].type : 'Unknown';
            const qObj = ensureQ(qKey, sectionType);

            if (sectionType === 'Journalizing' && parts.length >= 4) {
                const tIdx = parseInt(parts[2].replace('t',''));
                const rIdx = parseInt(parts[3].replace('r',''));
                if (!qObj.transactions[tIdx]) qObj.transactions[tIdx] = { date: `Trans ${tIdx+1}`, description: "Legacy", rows: 0 };
                if (rIdx >= qObj.transactions[tIdx].rows) qObj.transactions[tIdx].rows = rIdx + 1;
            } 
        });
    }

    const questionsBySection = {};
    Object.keys(savedQuestions).forEach(key => {
        const sectionIdx = key.split('_')[0].replace('s',''); 
        if(!questionsBySection[sectionIdx]) questionsBySection[sectionIdx] = [];
        questionsBySection[sectionIdx].push({ uiId: key, ...savedQuestions[key] });
    });

    // --- RENDER SECTIONS ---
    activityData.testQuestions.forEach((section, index) => {
        const sectionQuestions = questionsBySection[index] || [];
        
        sectionQuestions.sort((a, b) => {
            const aIdx = parseInt(a.uiId.split('_')[1].replace('q',''));
            const bIdx = parseInt(b.uiId.split('_')[1].replace('q',''));
            return aIdx - bIdx;
        });

        // Initialize Score Counters
        let sectionScore = 0;
        let sectionMaxScore = 0;
        let sectionBodyHtml = '';

        if (sectionQuestions.length === 0) {
            sectionBodyHtml += `<p class="text-gray-400 italic">No data available for this section.</p>`;
        }

        // FIXED: Add Sticky Header ONCE at the top for Multiple Choice / Problem Solving in Preview too
        if (section.type !== "Journalizing") {
            sectionBodyHtml += `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics || 'N/A'}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Instruction:</span> ${section.instructions || "Refer to specific question details."}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}
                        </div>
                    </div>
                </div>
            `;
        }

        sectionQuestions.forEach((q, qIdx) => {
            const studentAnswer = resultData.answers ? resultData.answers[q.uiId] : null;

            const instructionText = (section.type === 'Journalizing' && q.instructions) 
                ? q.instructions 
                : (section.instructions || "Refer to specific question details.");

            const stickyHeaderHtml = `
                <div class="sticky top-0 bg-blue-50 border-b border-blue-200 px-4 py-2 z-10 shadow-sm mb-4">
                    <div class="flex flex-col gap-.5 text-xs text-gray-700">
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Topic:</span> ${section.topics || 'N/A'}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Instruction:</span> ${instructionText}
                        </div>
                        <div class="border-b pb-1">
                            <span class="font-bold text-blue-800">Rubric:</span> ${section.gradingRubrics || 'N/A'}
                        </div>
                    </div>
                </div>
            `;
            
            // --- 1. MULTIPLE CHOICE ---
            if (section.type === "Multiple Choice") {
                sectionMaxScore++;
                // FIXED: Check match OR check if student 0 matches null key
                const isCorrect = String(studentAnswer) === String(q.correctAnswer) || 
                                  (String(studentAnswer) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                
                if(isCorrect) sectionScore++;

                const optionsHtml = (q.options || []).map((opt, optIdx) => {
                    const isSelected = String(studentAnswer) === String(optIdx);
                    // FIXED: Correct option is the defined one OR 0 if defined is null
                    const isOptCorrect = String(q.correctAnswer) === String(optIdx) ||
                                         (String(optIdx) === "0" && (q.correctAnswer === null || q.correctAnswer === undefined));
                    
                    let bgClass = "bg-white border-gray-200";
                    let icon = "";
                    
                    if (isSelected && isOptCorrect) { bgClass = "bg-green-100 border-green-400 font-bold text-green-800"; icon = '<i class="fas fa-check text-green-600 ml-auto"></i>'; }
                    else if (isSelected && !isOptCorrect) { bgClass = "bg-red-100 border-red-400 text-red-800"; icon = '<i class="fas fa-times text-red-600 ml-auto"></i>'; }
                    else if (!isSelected && isOptCorrect) { bgClass = "bg-green-50 border-green-300 text-green-800 border-dashed"; icon = '<i class="fas fa-check text-green-600 ml-auto opacity-50"></i>'; }

                    return `<div class="p-2 border rounded mb-1 text-sm flex items-center ${bgClass}">${opt} ${icon}</div>`;
                }).join('');

                // FIXED: Removed stickyHeaderHtml from individual card
                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4">
                            <p class="font-bold text-gray-800 mb-2">${qIdx+1}. ${q.questionText}</p>
                            <div class="mb-3">${optionsHtml}</div>
                            <div class="bg-gray-50 p-2 rounded text-xs text-gray-600">
                                <strong>Explanation:</strong> ${q.explanation || 'No explanation provided.'}
                            </div>
                        </div>
                    </div>`;
            
            // --- 2. PROBLEM SOLVING ---
            } else if (section.type === "Problem Solving") {
                sectionMaxScore++;
                const isCorrect = studentAnswer && q.correctAnswer && studentAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                if(isCorrect) sectionScore++;

                // FIXED: Removed stickyHeaderHtml from individual card
                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4 space-y-4">
                            <p class="font-bold text-gray-800">${qIdx+1}. ${q.questionText}</p>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-blue-600">Your Answer:</p>
                                <div class="p-2 bg-blue-50 border border-blue-100 rounded text-sm font-mono whitespace-pre-wrap">${studentAnswer || "No Answer"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-green-600">Answer Key:</p>
                                <div class="p-2 bg-green-50 border border-green-100 rounded text-sm font-mono whitespace-pre-wrap">${q.correctAnswer || "N/A"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-gray-600">Explanation:</p>
                                <div class="bg-gray-50 p-2 rounded text-xs text-gray-700 whitespace-pre-wrap">${q.explanation || "No explanation provided."}</div>
                            </div>
                        </div>
                    </div>`;

            // --- 3. JOURNALIZING (FIXED LAYOUT & SCORING) ---
            } else if (section.type === "Journalizing") {
                let transactionsHtml = '';
                const transactions = q.transactions || [];

                transactions.forEach((trans, tIdx) => {
                    const rowCount = trans.rows || 2;
                    let studentRowsHtml = '';
                    let solutionRowsHtml = ''; 

                    const solRows = trans.solution || [];

                    // --- Build Student Answer Table WITH SCORING ---
                    for(let r=0; r < rowCount; r++) {
                        // FIXED: Adjusted key format to match saved data (t0_r0 instead of 0_0)
                        const cellKey = `t${tIdx}_r${r}`; 
                        const cellData = (studentAnswer && studentAnswer[cellKey]) ? studentAnswer[cellKey] : { date:'', acct:'', dr:'', cr:'' };
                        
                        const solRow = solRows[r] || null;

                        let dateValid = false;
                        let acctValid = false;
                        let drValid = false;
                        let crValid = false;
                        
                        const checkMark = '<i class="fas fa-check text-green-600 text-[10px]"></i>';

                        // === DATE VALIDATION ===
                        const sDate = cellData.date.trim();
                        // 1. Is an answer expected here?
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++; // Expecting answer
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 if (sDate.match(expectedRegex) && sDate === solRow.date) {
                                     dateValid = true;
                                     sectionScore++;
                                 }
                             } else {
                                 // Non-first rows should be empty if row exists in solution
                                 if (sDate === '') { dateValid = true; sectionScore++; }
                             }
                        } else {
                            // NOT Expecting Answer
                            if (sDate !== '') {
                                sectionScore--; // DEDUCTION
                            }
                        }

                        // === ACCOUNT / EXPLANATION VALIDATION ===
                        const sAcct = cellData.acct;
                        if (solRow) {
                             sectionMaxScore++; // Expecting answer
                             if (solRow.isExplanation) {
                                 if (sAcct.match(/^\s{5,8}\S/)) { acctValid = true; sectionScore++; }
                             } else {
                                 const cleanInput = sAcct.trim();
                                 const cleanSol = solRow.account.trim();
                                 if (cleanInput.toLowerCase() === cleanSol.toLowerCase()) {
                                     if (solRow.credit) {
                                         if (sAcct.match(/^\s{3,5}\S/)) { acctValid = true; sectionScore++; }
                                     } else {
                                         if (sAcct.match(/^\S/)) { acctValid = true; sectionScore++; }
                                     }
                                 }
                             }
                        }

                        // === DEBIT AMOUNT VALIDATION ===
                        const sDr = cellData.dr.trim();
                        const cleanSolDr = (solRow && solRow.debit) ? Number(solRow.debit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolDr !== "") {
                            sectionMaxScore++; // Expecting Answer
                            if (sDr === cleanSolDr && sDr.match(/^\d+\.\d{2}$/)) {
                                drValid = true;
                                sectionScore++;
                            }
                        } else {
                            // Not Expecting Answer
                            if (sDr !== "") sectionScore--; // Deduction
                        }

                        // === CREDIT AMOUNT VALIDATION ===
                        const sCr = cellData.cr.trim();
                        const cleanSolCr = (solRow && solRow.credit) ? Number(solRow.credit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolCr !== "") {
                            sectionMaxScore++; // Expecting Answer
                            if (sCr === cleanSolCr && sCr.match(/^\d+\.\d{2}$/)) {
                                crValid = true;
                                sectionScore++;
                            }
                        } else {
                            // Not Expecting Answer
                            if (sCr !== "") sectionScore--; // Deduction
                        }

                        // --- MODIFIED LAYOUT: CONCATENATED CHECKMARKS ---
                        // DATE: Checkmark LEFT
                        const dateContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${dateValid ? checkMark : ''} <span>${cellData.date}</span>
                            </div>`;
                        
                        // ACCOUNT: Checkmark RIGHT
                        const acctContent = `
                            <div class="flex justify-between items-center w-full">
                                <span class="whitespace-pre-wrap">${cellData.acct}</span> ${acctValid ? checkMark : ''}
                            </div>`;

                        // DR/CR: Checkmark LEFT
                        const drContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${drValid ? checkMark : ''} <span>${cellData.dr}</span>
                            </div>`;
                        const crContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${crValid ? checkMark : ''} <span>${cellData.cr}</span>
                            </div>`;

                        studentRowsHtml += `
                        <tr class="border-b border-gray-100 bg-white">
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-24">${dateContent}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-auto">${acctContent}</td>
                            <td class="p-1.5 border-r border-gray-200 font-mono text-xs align-middle w-28">${drContent}</td>
                            <td class="p-1.5 font-mono text-xs align-middle w-28">${crContent}</td>
                        </tr>`;
                    }

                    // --- B. Build Correct Solution Table ---
                    if (trans.solution && Array.isArray(trans.solution)) {
                        trans.solution.forEach(solRow => {
                            if (solRow.isExplanation) {
                                const indentHtml = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-green-50/30">
                                    <td class="p-1.5 border-r border-green-100"></td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left italic text-gray-500">${indentHtml}(${solRow.account})</td>
                                    <td class="p-1.5 border-r border-green-100"></td>
                                    <td class="p-1.5"></td>
                                </tr>`;
                            } else {
                                const indentHtml = solRow.credit ? '&nbsp;&nbsp;&nbsp;' : '';
                                const drFmt = solRow.debit ? Number(solRow.debit).toFixed(2) : '';
                                const crFmt = solRow.credit ? Number(solRow.credit).toFixed(2) : '';

                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-white">
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${solRow.date || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left font-semibold text-gray-800">${indentHtml}${solRow.account || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${drFmt}</td>
                                    <td class="p-1.5 font-mono text-xs text-right text-gray-800">${crFmt}</td>
                                </tr>`;
                            }
                        });
                    } else {
                        solutionRowsHtml = '<tr><td colspan="4" class="p-2 text-center text-xs italic text-gray-400">No solution key available.</td></tr>';
                    }

                    // --- VERTICAL LAYOUT FOR PREVIEW ---
                    transactionsHtml += `
                        <div class="mb-6 border border-gray-300 rounded overflow-hidden">
                            <div class="bg-gray-100 px-3 py-2 border-b border-gray-300">
                                <span class="font-bold text-gray-700 text-sm">Transaction ${tIdx + 1}:</span>
                                <span class="text-xs text-gray-600 ml-2 italic">${trans.date} - ${trans.description}</span>
                            </div>
                            
                            <div class="flex flex-col gap-0 divide-y divide-gray-300">
                                <div>
                                    <div class="bg-blue-50 py-1 px-3 text-[10px] font-bold text-blue-800 uppercase border-b border-blue-100">Your Answer</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead>
                                            <tr class="bg-gray-50 text-[10px] text-gray-500 uppercase border-b border-gray-200">
                                                <th class="py-1 px-1 w-24 text-right">Date</th>
                                                <th class="py-1 px-2 text-left w-auto">Account</th>
                                                <th class="py-1 px-1 w-28 text-right">Dr</th>
                                                <th class="py-1 px-1 w-28 text-right">Cr</th>
                                            </tr>
                                        </thead>
                                        <tbody>${studentRowsHtml}</tbody>
                                    </table>
                                </div>
                                <div>
                                    <div class="bg-green-50 py-1 px-3 text-[10px] font-bold text-green-800 uppercase border-b border-green-100">Standard Solution</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead>
                                            <tr class="bg-green-50/50 text-[10px] text-green-700 uppercase border-b border-green-100">
                                                <th class="py-1 px-1 w-24 text-right">Date</th>
                                                <th class="py-1 px-2 text-left w-auto">Account</th>
                                                <th class="py-1 px-1 w-28 text-right">Dr</th>
                                                <th class="py-1 px-1 w-28 text-right">Cr</th>
                                            </tr>
                                        </thead>
                                        <tbody>${solutionRowsHtml}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    `;
                });

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                         ${stickyHeaderHtml}
                        <div class="p-4">
                            ${transactionsHtml}
                        </div>
                    </div>`;
            }
        });

        // Score Calculation
        const percent = sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0;
        const letter = getLetterGrade(sectionScore, sectionMaxScore);

        contentHtml += `
            <div class="mb-8 border-b border-gray-300 pb-4">
                <div class="flex justify-between items-center mb-2">
                     <h3 class="font-bold text-lg text-blue-900 uppercase">Test ${index + 1}: ${section.type}</h3>
                     <span class="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded">
                        Score: ${sectionScore} / ${sectionMaxScore} | ${percent.toFixed(2)}% | ${letter}
                     </span>
                </div>
                ${sectionBodyHtml}
            </div>
        `;
    });

    const dateTaken = resultData.timestamp ? new Date(resultData.timestamp).toLocaleString() : "N/A";
    
    container.innerHTML = `
        <div class="h-full bg-gray-100 overflow-y-auto p-4 md:p-8">
            <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="bg-blue-900 text-white p-6 text-center">
                    <h1 class="text-2xl font-bold uppercase tracking-wider">FABM 1</h1>
                    <h2 class="text-xl font-semibold mt-1">${activityData.activityname}</h2>
                </div>
                
                <div class="bg-blue-50 p-4 border-b border-gray-200 text-sm md:text-base">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <div><strong>Class Number:</strong> ${user.CN || 'N/A'}</div>
                        <div><strong>Date:</strong> ${dateTaken}</div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between">
                        <div><strong>Name:</strong> ${user.LastName}, ${user.FirstName}</div>
                        <div><strong>Section:</strong> ${activityData.section}</div>
                    </div>
                </div>

                <div class="p-6 bg-gray-50/50">
                    ${contentHtml}
                </div>
                
                <div class="p-4 bg-gray-50 text-center border-t border-gray-200">
                    <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                        Back to Activity List
                    </button>
                </div>
            </div>
        </div>
    `;
}
