// --- GLOBAL CONFIGURATION ---
// Change this value to update the "Academic Year" for the entire courseware.
// This affects dates in the Syllabus, Journals, and dynamic Question Banks.
export const COURSE_YEAR = 2026;


// --- DATA HELPERS ---

export function createPlaceholderDays(topics) {
    const days = topics.map((t, i) => ({
        day: `Day ${i + 1}`,
        topic: t,
        content: `
            <h3 class="text-xl font-bold mb-4">Topic Focus</h3>
            <p class="mb-4 text-gray-600">Content for <strong>${t}</strong> goes here. Edit the source code to update the lesson materials.</p>
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p class="font-bold text-blue-900">Learning Goal</p>
                <p class="text-blue-800">Define the specific learning objective for this day.</p>
            </div>
        `,
        exercises: [
            {
                type: "mcq",
                question: "Placeholder Question: Update this with a relevant question for the topic.",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctIndex: 0,
                explanation: "Add explanation here."
            }
        ]
    }));

    // Add Day 5 Quiz standard
    days.push({
        day: "Day 5",
        topic: "Recorded Summary Quiz",
        content: `
            <h3 class="text-xl font-bold mb-4">Assessment Activity</h3>
            <div class="space-y-4 text-gray-700">
                <p><strong>Format:</strong> Short recorded quiz (video or audio submission).</p>
                <p><strong>Content Coverage:</strong></p>
                <ul class="list-disc pl-5">
                    <li>Review of concepts covered in Days 1-4</li>
                    <li>Practical application exercises</li>
                    <li>Oral explanation of key terms</li>
                </ul>
            </div>
            <div class="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p class="font-bold text-blue-900">Purpose</p>
                <p class="text-blue-800">Reinforce weekly learning, check comprehension, and encourage students to articulate concepts clearly.</p>
            </div>
        `,
        exercises: []
    });

    return days;
}

// --- CALENDAR HELPERS ---

export function formatRange(start, end) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const startStr = start.toLocaleDateString('default', options);
    
    if (start.getTime() === end.getTime()) {
        return startStr;
    } else {
        // Check if same month and year for cleaner display: "Dec 9 - 10, 2025"
        if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
            return `${start.toLocaleDateString('default', { month: 'short', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
        }
        return `${startStr} - ${end.toLocaleDateString('default', options)}`;
    }
}

export function formatRanges(dates) {
    if (dates.length === 0) return "";

    // Convert to Date objects for math
    const dateObjs = dates.map(d => {
        const [y, m, da] = d.split('-').map(Number);
        return new Date(y, m - 1, da);
    });

    const ranges = [];
    let start = dateObjs[0];
    let end = dateObjs[0];

    for (let i = 1; i < dateObjs.length; i++) {
        const current = dateObjs[i];
        const diffTime = Math.abs(current - end);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        if (diffDays === 1) {
            end = current;
        } else {
            ranges.push(formatRange(start, end));
            start = current;
            end = current;
        }
    }
    ranges.push(formatRange(start, end));

    return ranges.join(', ');
}

export const getLetterGrade = (score, maxScore) => {
    if (maxScore === 0) return 'IR';
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 95) return 'A';    // Advanced
    if (percentage >= 85) return 'P';    // Proficient
    if (percentage >= 75) return 'D';    // Developing
    return 'IR';                         // Intervention Required
};
