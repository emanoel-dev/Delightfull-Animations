const toogle = document.getElementById('toogle')
toogle.addEventListener('checked', btnOpen)

const navbar = document.querySelector('nav ul')
navbar.addEventListener('click', closeMenu)

const trace0 = document.getElementsByClassName('trace')[0];
const trace1 = document.getElementsByClassName('trace')[1];
const trace2 = document.getElementsByClassName('trace')[2];

trace0.classList.toggle('traceChild1')
trace1.classList.toggle('traceChild2')
trace2.classList.toggle('traceChild3')

function btnOpen() {
    const menu = document.querySelector('.menu')
    const menuItems = document.querySelector('.menu-items')
    const trace0 = document.getElementsByClassName('trace')[0];
    const trace1 = document.getElementsByClassName('trace')[1];
    const trace2 = document.getElementsByClassName('trace')[2];

    menu.classList.toggle('menuBgOpen')
    menuItems.classList.toggle('menuOpen')
    trace0.classList.toggle('trace1')
    trace1.classList.toggle('trace2')
    trace2.classList.toggle('trace3')
    
    trace0.classList.toggle('traceChild1')
    trace1.classList.toggle('traceChild2')
    trace2.classList.toggle('traceChild3')
};
function closeMenu() {
    const menu = document.querySelector('.menu')
    const menuItems = document.querySelector('.menu-items')

    menu.classList.remove('menuBgOpen')
    menuItems.classList.remove('menuOpen')
};