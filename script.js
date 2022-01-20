const nav = document.querySelector('.nav-links');
const menu = document.querySelector('.menu-btn');
menu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu')
})