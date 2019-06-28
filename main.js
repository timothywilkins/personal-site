document.addEventListener('DOMContentLoaded', function() {
 
//MENU VARIABLES
const menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  menuNav = document.querySelector('.menu-nav'),
  menuNavList = document.querySelector('.menu-nav-list'),
  main = document.querySelector('main'),
//PAGE VARIABLES
  h1 = document.querySelector('h1'),
  h2 = document.querySelector('h2');

//set initial state of menu
let showMenu = false;

if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu)
}


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

var pageTl = new TimelineMax;
pageTl
.from(h1, .6, {
  x:"-=20",
  autoAlpha:0,
  ease: Power4.easeOut
})
.add("endh1");

if( h2 ){
  pageTl.shiftChildren(0)
  .from(h2, 1, {
    x:"-=20",
    autoAlpha:0,
    ease: Power4.easeOut
  })
}



//ICON FADE-IN
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

var lol = document.querySelector('#about .icon-container')
console.log(lol)

}, false);

