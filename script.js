// Example JavaScript for accessibility: focus nav links with Tab
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.background = '#003366';
        });
        link.addEventListener('blur', () => {
            link.style.background = '';
        });
    });
});
// You can add more interactivity as needed
