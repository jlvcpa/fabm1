// antiCheat.js

export class AntiCheatSystem {
    constructor(config) {
        // Configuration defaults
        this.onCheatDetected = config.onCheatDetected || (() => {}); // Callback when focus is lost
        this.onUnlock = config.onUnlock || (() => {}); // Callback when student resumes
        this.testActive = false;
        this.unlockClicks = 0;
        
        // Bind methods to 'this' context
        this.handleWindowBlur = this.handleWindowBlur.bind(this);
        this.handleKeyGuard = this.handleKeyGuard.bind(this);
        this.handleUnlockClick = this.handleUnlockClick.bind(this);
    }

    /**
     * Call this when the student actually starts the exam.
     */
    startMonitoring() {
        this.testActive = true;
        this.unlockClicks = 0;

        // 1. Monitor Tab Switching / Minifying
        window.addEventListener('blur', this.handleWindowBlur);

        // 2. Monitor Keyboard Shortcuts
        document.addEventListener('keydown', this.handleKeyGuard);

        // 3. Disable Context Menu
        document.addEventListener('contextmenu', event => event.preventDefault());

        console.log("Anti-Cheat Monitoring Started");
    }

    /**
     * Call this when the exam is submitted or finished.
     */
    stopMonitoring() {
        this.testActive = false;
        window.removeEventListener('blur', this.handleWindowBlur);
        document.removeEventListener('keydown', this.handleKeyGuard);
        // Note: We generally leave context menu disabled, but you could remove it if needed.
    }

    handleWindowBlur() {
        if (!this.testActive) return;

        // Show the lockout screen (assuming you have this ID in your HTML)
        const lockout = document.getElementById('cheat-lockout');
        if (lockout) {
            lockout.classList.remove('hidden');
            this.unlockClicks = 0;
            this.updateUnlockButton();
        }
    }

    handleKeyGuard(e) {
        if (!this.testActive) return;

        // Block PrintScreen
        if (e.key === 'PrintScreen') {
            this.triggerBlackCurtain();
            this.showWarning();
        }

        // Block Ctrl/Cmd + C, V, X, P, S
        if ((e.ctrlKey || e.metaKey) && 
            (['c', 'v', 'x', 'p', 's'].includes(e.key.toLowerCase()))) {
            e.preventDefault();
            this.triggerBlackCurtain();
            this.showWarning();
        }
    }

    triggerBlackCurtain() {
        const curtain = document.getElementById('black-curtain');
        if (curtain) {
            curtain.style.display = 'block';
            setTimeout(() => {
                curtain.style.display = 'none';
            }, 1000);
        }
    }

    showWarning() {
        alert("Security Warning: Copying, pasting, or screenshots are not allowed.");
    }

    /**
     * Linked to the "Resume Test" button in HTML
     */
    handleUnlockClick() {
        this.unlockClicks++;
        const clicksNeeded = 3 - this.unlockClicks;

        if (clicksNeeded <= 0) {
            // Unlock successful
            const lockout = document.getElementById('cheat-lockout');
            if (lockout) lockout.classList.add('hidden');
            
            this.unlockClicks = 0;
            
            // Trigger the "Penalty" callback (regenerate questions)
            this.onCheatDetected(); 
        } else {
            this.updateUnlockButton();
        }
    }

    updateUnlockButton() {
        const btn = document.getElementById('btn-unlock');
        if (btn) {
            const remaining = 3 - this.unlockClicks;
            btn.innerText = `Resume Test (${remaining})`;
            
            // Visual feedback animation
            btn.classList.add('scale-95');
            setTimeout(() => btn.classList.remove('scale-95'), 100);
        }
    }
}
