//MENU VARIABLES
const menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  menuNav = document.querySelector('.menu-nav'),
  menuNavList = document.querySelector('.menu-nav-list'),
  main = document.querySelector('main');
//set initial state of menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  // navFadeIn();
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBtn.setAttribute("style", "background:none");
    menuNav.classList.add('show');
    main.classList.add('blur');

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBtn.setAttribute("style", "background:auto");
    menuNav.classList.remove('show');
    main.classList.remove('blur');
    //set menu state
    showMenu = false;
  }
}


TweenMax.to('#home h1, #home h2', 1.1, {
  height: "100px",
  ease: Power4.easeOut
})

TweenMax.staggerFrom('#about .icon-container', 1.5, {
    opacity: 0,
    ease: Power4.easeOut
  },
  .1)

function navFadeIn() {
  TweenMax.from(menuNavList, 1, {
    opacity: 0,
    ease: Power4.easeOut
  });
}