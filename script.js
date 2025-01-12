document.addEventListener('DOMContentLoaded', () => {
    const biology = document.getElementById('biology');
    const biologyDropdown = document.getElementById('biologyDropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const lockedSubjects = document.querySelectorAll('.subject-card.locked');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('telegramPopup');
    const closePopup = document.getElementById('closePopup');

    // Show biology dropdown
    biology.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        const rect = biology.getBoundingClientRect();
        biologyDropdown.style.position = 'absolute';
        biologyDropdown.style.top = `${rect.bottom + window.scrollY}px`;
        biologyDropdown.style.left = `${rect.left}px`;
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
    });

    // Show upgrade message for locked subjects
    lockedSubjects.forEach(subject => {
        subject.addEventListener('click', () => {
            alert('🔒 Upgrade to PRO to unlock this subject!');
        });
    });

    // Show Telegram popup after 3 seconds
    setTimeout(() => {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }, 3000);

    // Close popup
    closePopup.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

    // Close popup when clicking overlay
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});
