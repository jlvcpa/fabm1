//--- quizResultPreview.js
//--- js/content/quizResultPreview.js

import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getLetterGrade } from "../utils.js"; 

// --- IMPORTS FOR LIVE LOOKUP ---
import { qbMerchMultipleChoice } from "./questionBank/qbMerchMultipleChoice.js";
import { qbMerchProblemSolving } from "./questionBank/qbMerchProblemSolving.js";
import { qbMerchJournalizing } from "./questionBank/qbMerchJournalizing.js";

// --- GLOBAL MAP BUILDER ---
// This ensures we can look up the LATEST version of a question by its ID
const globalQuestionMap = new Map();
function buildQuestionMap() {
    if (globalQuestionMap.size > 0) return;
    const allSources = [qbMerchMultipleChoice, qbMerchProblemSolving, qbMerchJournalizing];
    allSources.forEach(sourceArray => {
        if(Array.isArray(sourceArray)) {
            sourceArray.forEach(item => {
                const id = Object.keys(item)[0];
                globalQuestionMap.set(id, { id, ...item[id] });
            });
        }
    });
}
buildQuestionMap(); // Run immediately

/**
 * Renders the result preview with LIVE scoring and LIVE data lookup.
 * @param {Object} activityData - The activity metadata.
 * @param {Object} user - The current user object.
 * @param {Object} resultData - The student's submission data from Firebase.
 * @param {Object} db - (Optional) Firestore instance for updating scores.
 * @param {String} collectionName - (Optional) Firestore collection name for updating.
 * @param {String} docId - (Optional) Firestore document ID for updating.
 */
export async function renderQuizResultPreview(activityData, user, resultData, db = null, collectionName = null, docId = null) {
    const container = document.getElementById('qa-runner-container');
    container.innerHTML = '<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin text-4xl text-blue-800"></i><span class="ml-3">Loading Results...</span></div>';

    let contentHtml = '';
    const newSectionScores = {}; // To store the RE-CALCULATED scores

    // --- 1. LEGACY POLYFILL ---
    let savedQuestions = resultData.questionsTaken;
    if (!savedQuestions || Object.keys(savedQuestions).length === 0) {
        savedQuestions = {};
        const answers = resultData.answers || {};
        
        const ensureQ = (key, type) => {
            if (!savedQuestions[key]) {
                savedQuestions[key] = {
                    uiId: key,
                    type: type,
                    questionText: "Legacy Submission (Details Unavailable)",
                    correctAnswer: "N/A",
                    explanation: "This submission was made before detailed tracking was enabled.",
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
            const sectionType = (activityData.testQuestions[sectionIdx]) ? activityData.testQuestions[sectionIdx].type : 'Unknown';
            const qObj = ensureQ(qKey, sectionType);

            if (sectionType === 'Journalizing' && parts.length >= 4) {
                const tIdx = parseInt(parts[2].replace('t',''));
                const rIdx = parseInt(parts[3].replace('r',''));
                if (!qObj.transactions[tIdx]) qObj.transactions[tIdx] = { date: `Trans ${tIdx+1}`, description: "Legacy Transaction", rows: 0 };
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

    // --- 2. RENDER SECTIONS ---
    activityData.testQuestions.forEach((section, index) => {
        const sectionQuestions = questionsBySection[index] || [];
        
        // Sort questions by index
        sectionQuestions.sort((a, b) => {
            const aIdx = parseInt(a.uiId.split('_')[1].replace('q',''));
            const bIdx = parseInt(b.uiId.split('_')[1].replace('q',''));
            return aIdx - bIdx;
        });

        // Initialize Score Counters for Live Calculation
        let sectionScore = 0;
        let sectionMaxScore = 0;
        let sectionBodyHtml = '';

        if (sectionQuestions.length === 0) {
            sectionBodyHtml += `<p class="text-gray-400 italic p-4">No data available for this section.</p>`;
        }

        // --- STICKY HEADER (For MC/Problem) ---
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

        sectionQuestions.forEach((record, qIdx) => {
            const studentAnswer = resultData.answers ? resultData.answers[record.uiId] : null;

            // --- LIVE DATA LOOKUP ---
            let liveQ = null;
            if (record.dbId && globalQuestionMap.has(record.dbId)) {
                // Use FRESH data from file
                liveQ = globalQuestionMap.get(record.dbId);
            } else {
                // Use Saved Snapshot (Legacy)
                liveQ = { 
                    question: record.questionText, 
                    correctAnswer: record.correctAnswer, 
                    explanation: record.explanation,
                    options: record.options || [],
                    transactions: record.transactions || [],
                    instructions: record.instructions
                };
            }

            const instructionText = (section.type === 'Journalizing' && liveQ.instructions) 
                ? liveQ.instructions 
                : (section.instructions || "Refer to details.");

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
            
            // ==========================================
            //       1. MULTIPLE CHOICE RENDER
            // ==========================================
            if (section.type === "Multiple Choice") {
                // FIX: Look for 'answer' (from your JSON) OR 'correctAnswer'
                // We check explicitly for undefined/null so that index 0 is valid
                const finalKey = (liveQ.answer !== undefined && liveQ.answer !== null) 
                                 ? liveQ.answer 
                                 : liveQ.correctAnswer;

                sectionMaxScore++;
                
                // LIVE GRADING (Fixed: No fallback to 0 if key is missing)
                const isCorrect = (finalKey !== undefined && finalKey !== null) &&
                                  String(studentAnswer) === String(finalKey);
                
                if(isCorrect) sectionScore++;

                const optionsHtml = (liveQ.options || []).map((opt, optIdx) => {
                    const isSelected = String(studentAnswer) === String(optIdx);
                    
                    // HIGHLIGHTING (Fixed: Uses finalKey)
                    const isOptCorrect = (finalKey !== undefined && finalKey !== null) &&
                                         String(finalKey) === String(optIdx);
                    
                    let bgClass = "bg-white border-gray-200";
                    let icon = "";
                    
                    if (isSelected && isOptCorrect) { 
                        bgClass = "bg-green-100 border-green-400 font-bold text-green-800"; 
                        icon = '<i class="fas fa-check text-green-600 ml-auto"></i>'; 
                    }
                    else if (isSelected && !isOptCorrect) { 
                        bgClass = "bg-red-100 border-red-400 text-red-800"; 
                        icon = '<i class="fas fa-times text-red-600 ml-auto"></i>'; 
                    }
                    else if (!isSelected && isOptCorrect) { 
                        bgClass = "bg-green-50 border-green-300 text-green-800 border-dashed"; 
                        icon = '<i class="fas fa-check text-green-600 ml-auto opacity-50"></i>'; 
                    }

                    return `<div class="p-2 border rounded mb-1 text-sm flex items-center ${bgClass}">${opt} ${icon}</div>`;
                }).join('');

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4">
                            <p class="font-bold text-gray-800 mb-2">${qIdx+1}. ${liveQ.question}</p>
                            <div class="mb-3">${optionsHtml}</div>
                            <div class="bg-gray-50 p-2 rounded text-xs text-gray-600">
                                <strong>Explanation:</strong> ${liveQ.explanation || 'No explanation provided.'}
                            </div>
                        </div>
                    </div>`;
            }
            
            // ==========================================
            //       2. PROBLEM SOLVING RENDER
            // ==========================================
            else if (section.type === "Problem Solving") {
                sectionMaxScore++;
                // LIVE GRADING
                const isCorrect = studentAnswer && liveQ.correctAnswer && studentAnswer.trim().toLowerCase() === liveQ.correctAnswer.trim().toLowerCase();
                if(isCorrect) sectionScore++;

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        <div class="p-4 space-y-4">
                            <p class="font-bold text-gray-800">${qIdx+1}. ${liveQ.question}</p>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-blue-600">Your Answer:</p>
                                <div class="p-2 bg-blue-50 border border-blue-100 rounded text-sm font-mono whitespace-pre-wrap">${studentAnswer || "No Answer"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-green-600">Answer Key (Live):</p>
                                <div class="p-2 bg-green-50 border border-green-100 rounded text-sm font-mono whitespace-pre-wrap">${liveQ.correctAnswer || "N/A"}</div>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs font-bold text-gray-600">Explanation:</p>
                                <div class="bg-gray-50 p-2 rounded text-xs text-gray-700 whitespace-pre-wrap">${liveQ.explanation || "No explanation provided."}</div>
                            </div>
                        </div>
                    </div>`;
            } 

            // ==========================================
            //       3. JOURNALIZING RENDER
            // ==========================================
            else if (section.type === "Journalizing") {
                let transactionsHtml = '';
                // Use LIVE transactions
                const transactions = liveQ.transactions || [];

                transactions.forEach((trans, tIdx) => {
                    const solRows = trans.solution || [];
                    const rowCount = trans.rows || 2;
                    let studentRowsHtml = '';
                    let solutionRowsHtml = '';

                    // Score Logic Loop
                    for(let r=0; r < rowCount; r++) {
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
                        if (solRow && !solRow.isExplanation && (solRow.date || r === 0)) {
                             sectionMaxScore++;
                             if (r === 0) {
                                 const expectedRegex = (tIdx === 0) ? /^[A-Z][a-z]{2}\s\d{1,2}$/ : /^\d{1,2}$/;
                                 let isDateCorrect = false;
                                 if (tIdx === 0) {
                                     isDateCorrect = (sDate === solRow.date);
                                 } else {
                                     const parts = solRow.date ? solRow.date.split(' ') : [];
                                     const solDay = parts.length > 1 ? parts[parts.length - 1] : parts[0];
                                     isDateCorrect = (sDate === solDay);
                                 }

                                 if (sDate.match(expectedRegex) && isDateCorrect) {
                                     dateValid = true;
                                     sectionScore++;
                                 }
                             } else {
                                 if (sDate === '') { dateValid = true; sectionScore++; }
                             }
                        } else {
                            if (sDate !== '') sectionScore--; 
                        }

                        // === ACCOUNT VALIDATION ===
                        const sAcct = cellData.acct;
                        if (solRow) {
                             sectionMaxScore++;
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

                        // === DR VALIDATION ===
                        const sDr = cellData.dr.trim();
                        const cleanSolDr = (solRow && solRow.debit) ? Number(solRow.debit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolDr !== "") {
                            sectionMaxScore++;
                            if (sDr === cleanSolDr && sDr.match(/^\d+\.\d{2}$/)) {
                                drValid = true;
                                sectionScore++;
                            }
                        } else {
                            if (sDr !== "") sectionScore--; 
                        }

                        // === CR VALIDATION ===
                        const sCr = cellData.cr.trim();
                        const cleanSolCr = (solRow && solRow.credit) ? Number(solRow.credit).toFixed(2) : "";
                        
                        if (solRow && !solRow.isExplanation && cleanSolCr !== "") {
                            sectionMaxScore++;
                            if (sCr === cleanSolCr && sCr.match(/^\d+\.\d{2}$/)) {
                                crValid = true;
                                sectionScore++;
                            }
                        } else {
                            if (sCr !== "") sectionScore--; 
                        }

                        // HTML Generation with Checkmarks
                        const dateContent = `
                            <div class="flex justify-end items-center gap-1 w-full">
                                ${dateValid ? checkMark : ''} <span>${cellData.date}</span>
                            </div>`;
                        
                        const acctContent = `
                            <div class="flex justify-between items-center w-full">
                                <span class="whitespace-pre-wrap">${cellData.acct}</span> ${acctValid ? checkMark : ''}
                            </div>`;

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

                    // Build Solution Rows
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
                                const indent = solRow.credit ? '&nbsp;&nbsp;&nbsp;' : '';
                                const drFmt = solRow.debit ? Number(solRow.debit).toFixed(2) : '';
                                const crFmt = solRow.credit ? Number(solRow.credit).toFixed(2) : '';
                                
                                let displayDate = solRow.date || '';
                                if (tIdx > 0 && displayDate.includes(' ')) {
                                    const parts = displayDate.split(' ');
                                    displayDate = parts[parts.length - 1]; 
                                }

                                solutionRowsHtml += `
                                <tr class="border-b border-gray-100 bg-white">
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${displayDate}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-left font-semibold text-gray-800">${indent}${solRow.account || ''}</td>
                                    <td class="p-1.5 border-r border-green-100 font-mono text-xs text-right text-gray-800">${drFmt}</td>
                                    <td class="p-1.5 font-mono text-xs text-right text-gray-800">${crFmt}</td>
                                </tr>`;
                            }
                        });
                    } else {
                        solutionRowsHtml = '<tr><td colspan="4" class="p-2 text-center text-xs italic text-gray-400">No solution key available.</td></tr>';
                    }

                    transactionsHtml += `
                        <div class="mb-6 border border-gray-300 rounded overflow-hidden">
                            <div class="bg-gray-100 px-3 py-2 border-b border-gray-300">
                                <span class="font-bold text-gray-700 text-sm">Transaction ${tIdx + 1}:</span>
                                <span class="text-xs text-gray-600 ml-2 italic">${trans.date} - ${trans.description}</span>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                                <div>
                                    <div class="bg-blue-50 py-1 px-3 text-[10px] font-bold text-blue-800 uppercase border-b border-blue-100">Your Answer</div>
                                    <table class="w-full border-collapse table-fixed">
                                        <thead>
                                            <tr class="bg-gray-5 text-[10px] text-gray-500 uppercase border-b border-gray-200">
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
                        </div>`;
                });

                sectionBodyHtml += `
                    <div class="bg-white rounded shadow-sm border border-gray-200 mb-4 overflow-hidden">
                        ${stickyHeaderHtml}
                        <div class="p-4">${transactionsHtml}</div>
                    </div>`;
            }
        });

        // Store new scores for potential update
        const percent = sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0;
        const letter = getLetterGrade(sectionScore, sectionMaxScore);
        newSectionScores[index] = {
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: percent,
            letterGrade: letter,
            type: section.type
        };

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

                <div class="bg-yellow-50 p-4 border-b border-yellow-200 flex justify-between items-center">
                    <div class="text-sm text-yellow-800">
                        <i class="fas fa-info-circle mr-1"></i> These results are calculated live based on the latest answer key.
                    </div>
                    ${user.role === 'teacher' ? `<button id="btn-update-score" class="px-4 py-2 bg-yellow-600 text-white text-sm font-bold rounded hover:bg-yellow-700 shadow">Update Saved Score</button>` : ''}
                </div>

                <div class="p-6 bg-gray-50/50">${contentHtml}</div>
                
                <div class="p-4 bg-gray-50 text-center border-t border-gray-200">
                    <button onclick="document.getElementById('qa-toggle-sidebar').click()" class="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                        Back to Activity List
                    </button>
                </div>
            </div>
        </div>
    `;

    // --- UPDATE SCORE EVENT ---
    const updateBtn = document.getElementById('btn-update-score');
    if (updateBtn && db && collectionName && docId) {
        updateBtn.addEventListener('click', async () => {
            if(!confirm("Overwrite the student's saved score in the database with this new calculation?")) return;
            try {
                await updateDoc(doc(db, collectionName, docId), {
                    sectionScores: newSectionScores 
                });
                alert("Score updated successfully!");
            } catch (e) {
                alert("Error updating score: " + e.message);
            }
        });
    }
}
