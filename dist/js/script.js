const menuNav = document.querySelector('.menu-navigation');
const menuBar = document.querySelector('.menu-bar');
const headerShrink = document.querySelector('.header');
const dashboardContentShrink = document.querySelector('.dashboard-content');
const footerShrink = document.querySelector('.footer');

menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
    headerShrink.classList.toggle('shrink');
    dashboardContentShrink.classList.toggle('shrink')
    footerShrink.classList.toggle('shrink');
});