const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const main = document.querySelector('main');
//set initial state of menu
let showMenu = false;
menuBtn.addEventListener('click',toggleMenu)
function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    main.classList.add('blur');

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    main.classList.remove('blur');
    //set menu state
    showMenu = false;
  }
}

// TweenMax.from("body", 1, {color:"white"}, 0.5);