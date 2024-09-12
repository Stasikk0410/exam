// Toggle theme button
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Set the current year in footer
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;
