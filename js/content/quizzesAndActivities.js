// --- CONTENT GENERATOR ---
async function generateQuizContent(activityData) {
    let html = '';
    let questionData = []; 

    if (!activityData.testQuestions || !Array.isArray(activityData.testQuestions)) {
        return { html: '<p>No test sections defined.</p>', data: [] };
    }

    // Loop through each test section (e.g., Test 1: Multiple Choice, Test 2: Problem Solving)
    for (const [index, section] of activityData.testQuestions.entries()) {
        
        // 1. Get topics SPECIFIC to this section only
        const sectionTopics = section.topics ? section.topics.split(',').map(t => t.trim()) : [];

        // 2. Render Section Header
        html += `
            <div class="test-section">
                <h3 class="text-xl font-bold text-gray-800 mb-2 border-b pb-2">Test ${index + 1}: ${section.type}</h3>
                
                <div class="text-sm text-gray-600 mb-2">
                    <strong>Topics:</strong> <span class="text-blue-700">${section.topics || 'General'}</span>
                </div>

                <div class="bg-blue-50 p-3 rounded text-sm text-blue-800 mb-4 italic">
                    <strong>Instructions:</strong> ${section.instructions}
                </div>
        `;

        const count = parseInt(section.noOfQuestions) || 5;
        let questions = [];

        // 3. Determine Collection Name
        let collectionName = '';
        if (section.type === "Multiple Choice") collectionName = 'qbMultipleChoice';
        else if (section.type === "Problem Solving") collectionName = 'qbProblemSolving';
        else if (section.type === "Journalizing") collectionName = 'qbJournalizing';

        // 4. Fetch Questions
        if (collectionName && sectionTopics.length > 0) {
            try {
                const qRef = collection(db, collectionName);
                
                // *** CRITICAL FIX HERE ***
                // 1. Changed "FABM 1" to "FABM1" to match your database.
                // 2. Used 'sectionTopics' to ensure we get the right topics for this specific test.
                const qQuery = query(
                    qRef, 
                    where("subject", "==", "FABM1"), 
                    where("topic", "in", sectionTopics.slice(0, 10)) 
                );
                
                const qSnap = await getDocs(qQuery);
                
                let candidates = [];
                qSnap.forEach(doc => {
                    candidates.push({ id: doc.id, ...doc.data() });
                });

                // Randomize and limit to the requested count
                candidates.sort(() => 0.5 - Math.random());
                questions = candidates.slice(0, count);

            } catch (error) {
                console.error(`Error fetching ${section.type} questions:`, error);
                html += `<p class="text-red-500">Error loading questions: ${error.message}</p>`;
            }
        } else if (sectionTopics.length === 0) {
             html += `<p class="text-gray-400 italic">No topics selected for this section.</p>`;
        }

        // 5. Render Questions based on Type
        questions.forEach((q, i) => {
            const qId = `s${index}_q${i}`;
            
            // Store data for submission/checking
            questionData.push({ 
                uiId: qId, 
                dbId: q.id, 
                type: section.type,
                correctAnswer: q.answer || q.solution 
            });

            // --- RENDER MULTIPLE CHOICE ---
            if (section.type === "Multiple Choice") {
                const opts = q.options ? q.options.map((opt, idx) => `
                    <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors bg-white mb-2">
                        <input type="radio" name="${qId}" value="${idx}" class="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300">
                        <span class="text-sm text-gray-700 font-medium">${opt}</span>
                    </label>
                `).join('') : '<p class="text-red-400">Error: Options missing</p>';

                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.question}</p>
                        <div class="flex flex-col">${opts}</div>
                    </div>
                `;

            // --- RENDER PROBLEM SOLVING ---
            } else if (section.type === "Problem Solving") {
                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.question}</p>
                        <textarea name="${qId}" class="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow font-mono text-sm" placeholder="Type your final answer and solution here..."></textarea>
                    </div>
                `;

            // --- RENDER JOURNALIZING ---
            } else if (section.type === "Journalizing") {
                let transactionHtml = '';
                if(q.transactions && Array.isArray(q.transactions)) {
                   q.transactions.forEach((trans, tIdx) => {
                       const tId = `${qId}_t${tIdx}`;
                       const rowCount = trans.rows || 2;
                       let rows = '';
                       for(let r=0; r < rowCount; r++) {
                           rows += `
                           <tr class="border-b border-gray-200 bg-white">
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_date" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="Date"></td>
                               <td class="p-0 border-r border-gray-300"><input type="text" name="${tId}_r${r}_acct" class="w-full h-full p-2 text-left outline-none bg-transparent font-mono text-sm" placeholder="Account Title"></td>
                               <td class="p-0 border-r border-gray-300 w-32"><input type="number" name="${tId}_r${r}_dr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                               <td class="p-0 w-32"><input type="number" name="${tId}_r${r}_cr" class="w-full h-full p-2 text-right outline-none bg-transparent font-mono text-sm" placeholder="0.00"></td>
                           </tr>`;
                       }
                       transactionHtml += `
                           <div class="mb-4 border border-gray-300 rounded-lg overflow-hidden">
                               <div class="bg-gray-100 px-4 py-2 border-b border-gray-300 flex justify-between items-center text-sm font-semibold text-gray-700"><span>${trans.date} - ${trans.description}</span></div>
                               <table class="w-full border-collapse">
                                   <thead><tr class="bg-gray-200 text-xs text-gray-600 font-bold uppercase border-b border-gray-300">
                                        <th class="py-2 border-r border-gray-300 w-24">Date</th>
                                        <th class="py-2 border-r border-gray-300 text-left pl-4">Account Titles</th>
                                        <th class="py-2 border-r border-gray-300 w-32 text-right pr-2">Debit</th>
                                        <th class="py-2 w-32 text-right pr-2">Credit</th>
                                   </tr></thead>
                                   <tbody>${rows}</tbody>
                               </table>
                           </div>`;
                   });
                }
                html += `
                    <div class="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <p class="font-bold text-gray-800 mb-4 text-lg"><span class="text-blue-600 mr-2">${i+1}.</span>${q.title || 'Journalize the transactions'}</p>
                        ${transactionHtml}
                    </div>
                `;
            }
        });

        html += `</div>`; // End Test Section Wrapper
    }

    return { html, data: questionData };
}
