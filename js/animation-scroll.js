window.onload = function() {
let oneBlock = document.querySelector('.section-home');
let twoBlock = document.querySelector('.section-rates');
let threeBlock = document.querySelector('.section-information');
let fourBlock = document.querySelector('.section-project');
let fiveBlock = document.querySelector('.section-reasons');
let sixBlock = document.querySelector('.section-reviews');
let sevenBlock = document.querySelector('.swiper-container');
let eightBlock = document.querySelector('.donat-and-footer');

let body = document.getElementById('body');

const animItems = document.querySelectorAll('._anim-items');
// let swiper_button_prev = document.querySelector('.swiper-button-prev');
// let swiper_button_next = document.querySelector('.swiper-button-next');


// swiper_button_prev.onclick = function() {
//   swiper_button_prev.classList.add('active');
// }
//
// swiper_button_next.onclick = function() {
//   swiper_button_next.classList.add('active');
// }






setTimeout(function() {
      if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
          for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active')
            } else {
              if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
              }

            }
          }
        }

        function offset(el) {
          const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
          animOnScroll();
        }, 300);

      }



}, 1000);




}
