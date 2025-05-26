const menuNav = document.querySelector('.menu-navigation');
const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
});