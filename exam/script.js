const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

const year = new Date().getFullYear();
document.getElementById('year').textContent = year;
