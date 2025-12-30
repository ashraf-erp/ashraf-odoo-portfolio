const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // حفظ حالة الثيم في المتصفح
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// استعادة الثيم عند التحميل
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
