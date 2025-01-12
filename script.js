class QuizPlatform {
    constructor() {
        this.setupEventListeners();
        this.showPopupWithDelay();
    }

    setupEventListeners() {
        const biologyCard = document.getElementById('biology');
        const biologyMenu = document.getElementById('biologyMenu');
        
        biologyCard.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const { clientX: mouseX, clientY: mouseY } = e;
            biologyMenu.style.display = 'block';
            biologyMenu.style.left = `${mouseX}px`;
            biologyMenu.style.top = `${mouseY}px`;
        });

        document.addEventListener('click', () => {
            biologyMenu.style.display = 'none';
        });

        const lockedSubjects = document.querySelectorAll('.subject-card.locked');
        lockedSubjects.forEach(subject => {
            subject.addEventListener('click', () => {
                this.showUpgradeAlert();
            });
        });

        const closePopup = document.querySelector('.close-popup');
        const overlay = document.getElementById('overlay');
        
        closePopup.addEventListener('click', () => {
            this.hidePopup();
        });

        overlay.addEventListener('click', () => {
            this.hidePopup();
        });
    }

    showUpgradeAlert() {
        const alert = document.createElement('div');
        alert.style.position = 'fixed';
        alert.style.top = '20px';
        alert.style.left = '50%';
        alert.style.transform = 'translateX(-50%)';
        alert.style.background = '#e74c3c';
        alert.style.color = 'white';
        alert.style.padding = '1rem 2rem';
        alert.style.borderRadius = '5px';
        alert.style.zIndex = '1000';
        alert.textContent = '🔒 Upgrade to PRO to unlock this subject!';
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    showPopupWithDelay() {
        setTimeout(() => {
            const popup = document.getElementById('telegramPopup');
            const overlay = document.getElementById('overlay');
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }, 3000);
    }

    hidePopup() {
        const popup = document.getElementById('telegramPopup');
        const overlay = document.getElementById('overlay');
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

const quizPlatform = new QuizPlatform();

document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02) translateY(-5px)';
    });

    card.addEventListener('mouseout', function() {
        this.style.transform = 'none';
    });
});
