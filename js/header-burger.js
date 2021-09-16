
let html2 = document.querySelector('html');
let headerBurger = document.querySelector('.header_burger');
let body = document.querySelector('body');
let headerMenu = document.querySelector('.header-menu-block');

/*
body.style.overflowX = "hidden";
html2.style.overflowX = "hidden";
*/

headerBurger.onclick = function() {
  headerBurger.classList.toggle('_active');
  headerMenu.classList.toggle('_active');
  body.classList.toggle('lock');

/*
  if (headerBurger.classList.contains('_active')) {
    body.style.removeProperty("overflow-x");
    html2.style.removeProperty("overflow-x");
    console.log('df');
  } else {
    body.style.overflowX = "hidden";
    html2.style.overflowX = "hidden";
  }
  */
}
