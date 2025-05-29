const menuNav = document.querySelector('.menu-navigation');
const menuBar = document.querySelector('.menu-bar');
const headerShrink = document.querySelector('.header');
const dashboardContentShrink = document.querySelector('.dashboard-content');
const contentShrink = document.querySelector('.content');
const formContentShrink = document.querySelector('.form-content');
const footerShrink = document.querySelector('.footer');

menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('menu-active');
    if (headerShrink) headerShrink.classList.toggle('shrink');
    if (dashboardContentShrink) dashboardContentShrink.classList.toggle('shrink');
    if (contentShrink) contentShrink.classList.toggle('shrink');
    if (formContentShrink) formContentShrink.classList.toggle('shrink');
    if (footerShrink) footerShrink.classList.toggle('shrink');
});