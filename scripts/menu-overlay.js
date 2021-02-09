const menuOptions = document.querySelector('.menu-options');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuIcon = document.querySelector('.hamburger-menu i');

const openOverlay = document.querySelector('.hamburger-overlay');
const closeOverlay = document.querySelector('.menu-options .close-overlay')

hamburgerMenu.addEventListener('click', () => {
    openOverlay.style.visibility = 'visible';
});

closeOverlay.addEventListener('click', () => {
    openOverlay.style.visibility = 'hidden';
});

document.body.addEventListener('click', event => {
    if(event.target === openOverlay){
        openOverlay.style.visibility = 'hidden';
    };
});