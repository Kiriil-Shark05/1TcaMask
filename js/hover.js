'use strict'
let a1 = document.querySelector('.header-basket-button2');
let a2 = document.querySelector('.header-basket-button1');
let a3 = document.querySelector('.section-project-button1');
let a4 = document.querySelector('.section-project-button2');
let a5 = document.querySelector('.section-project-button3');
let a6 = document.querySelector('.section-donat-a');
let a7 = document.querySelector('.header-menu-item1');
let a8 = document.querySelector('.header-menu-item2');
let a9 = document.querySelector('.header-menu-item3');
let a10 = document.querySelector('.header-menu-item4');
let a11 = document.querySelector('.header-menu-item5');
let a12 = document.querySelector('.header-menu-item6');

let body = document.querySelector('body');


let rate1 = document.querySelector('.section-rates-main-block1');
let rate2 = document.querySelector('.section-rates-main-block2');
let rate3 = document.querySelector('.section-rates-main-block3');

let rate1Img = document.querySelector('.section-rates-main-img1-img');
let rate2Img = document.querySelector('.section-rates-main-img2-img');
let rate3Img = document.querySelector('.section-rates-main-img3-img');
let ratesDescription1 = document.querySelector('.section-rates-main-description');
let ratesDescription2 = document.querySelector('.section-rates-main-description2');
let ratesDescription3 = document.querySelector('.section-rates-main-description3');

// let headerMenuItem1 = document.querySelector('.header-menu-item1');
// let headerMenuItem2 = document.querySelector('.header-menu-item2');
// let headerMenuItem3 = document.querySelector('.header-menu-item3');
// let headerMenuItem4 = document.querySelector('.header-menu-item4');
// let headerMenuItem5 = document.querySelector('.header-menu-item5');
// let headerMenuItem6 = document.querySelector('.header-menu-item6');

let advantages = document.querySelector('.section-reasons-advantages-item5');



let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let sectionInformationImg = document.querySelector('.section-information-img');
let sectionReasonsImg = document.querySelector('.section-reasons-item2');

let img01 = document.querySelector('.img1');
let img02 = document.querySelector('.img2');
let img03 = document.querySelector('.img3');

let img14;
let img15;

let icon81 = document.getElementById("icon81");
let icon82 = document.getElementById("icon82");
let icon83 = document.getElementById("icon83");
let span2 = document.getElementById("span2");

let html = document.querySelector('html');
let htmlWidth = html.clientWidth;

let breakpoint1 = 457;
let difference;

let startWidthImgInformation1 = 416;
let startWidthImgInformation2 = 258.4;
let startWidthImgInformation3 = 223.2;

let imgInformation1 = document.querySelector('.img1');
let imgInformation2 = document.querySelector('.img2');
let imgInformation3 = document.querySelector('.img3');

let widthImgInformation1;
let widthImgInformation2;
let widthImgInformation3;

let abc = body.removeProperty('overflow-x');
let fds = html.removeProperty('overflow-x');




/*
if (html.clientWidth <= 457) {
  difference = breakpoint1 - htmlWidth;
  console.log(difference);

  widthImgInformation1 = startWidthImgInformation1 - difference;
  widthImgInformation2 = startWidthImgInformation2 - difference;
  widthImgInformation3 = startWidthImgInformation3 - difference;

  imgInformation1.style.width = widthImgInformation1 + 'px';
  imgInformation2.style.width = widthImgInformation2 + 'px';
  imgInformation3.style.width = widthImgInformation3 + 'px';

  console.log(widthImgInformation3);

}

let f = breakpoint1 - htmlWidth;
*/

if (html.clientWidth <= 457) {
  sectionInformationImg.innerHTML = "";
  img14 = document.createElement('img');
  img14.className = "img14";
  img14.src = "img/img14.png";
  sectionInformationImg.append(img14);

}

if (html.clientWidth <= 638) {
  sectionReasonsImg.innerHTML = "";
  img15 = document.createElement('img');
  img15.className = "img15";
  img15.src = "img/img15.png";
  sectionReasonsImg.append(img15);

}



if (htmlWidth <= 342) {
  ratesDescription1.innerHTML = "HeiQ viroblock works to deactivate. the virus with minutes and effective for 30 washes.";
  ratesDescription2.innerHTML = "HeiQ viroblock works to deactivate. the virus with minutes and effective for 30 washes.";
  ratesDescription3.innerHTML = "HeiQ viroblock works to deactivate. the virus with minutes and effective for 30 washes.";
}

if (htmlWidth <= 1210) {
  advantages.innerHTML = '<img src="img/icon10.svg" alt="icon10"><div id="span2">Cost-effective with all profits donated to <span>our chosen charities</span>';
}










a1.onmouseover = function a1_true() {
  a1.classList.add('active');
}

a1.onmouseout = function a1_false() {
  a1.classList.remove('active');
}

a2.onmouseover = function a2_true() {
  a2.classList.add('active');
}

a2.onmouseout = function a2_false() {
  a2.classList.remove('active');
}

a3.onmouseover = function a3_true() {
  a3.classList.add('active');
}

a3.onmouseout = function a3_false() {
  a3.classList.remove('active');
}

a4.onmouseover = function a4_true() {
  a4.classList.add('active');
}

a4.onmouseout = function a4_false() {
  a4.classList.remove('active');
}

a5.onmouseover = function a5_true() {
  a5.classList.add('active');
}

a5.onmouseout = function a5_false() {
  a5.classList.remove('active');
}

a6.onmouseover = function a6_true() {
  a6.classList.add('active');
}

a6.onmouseout = function a6_false() {
  a6.classList.remove('active')
}

// a7.onmouseover = function a7_true() {
//   a7.classList.add('active');
// }
//
// a7.onmouseout = function a7_false() {
//   a7.classList.remove('active');
// }
//
// a8.onmouseover = function a8_true() {
//   a8.classList.add('active');
// }
//
// a8.onmouseout = function a8_false() {
//   a8.classList.remove('active');
// }
//
// a9.onmouseover = function a9_true() {
//   a9.classList.add('active');
// }
//
// a9.onmouseout = function a9_false() {
//   a9.classList.remove('active');
// }
//
// a10.onmouseover = function a10_true() {
//   a10.classList.add('active');
// }
//
// a10.onmouseout = function a10_false() {
//   a10.classList.remove('active');
// }
//
// a11.onmouseover = function a11_true() {
//   a11.classList.add('active');
// }
//
// a11.onmouseout = function a11_false() {
//   a11.classList.remove('active');
// }
//
// a12.onmouseover = function a12_true() {
//   a12.classList.add('active');
// }
//
// a12.onmouseout = function a12_false() {
//   a12.classList.remove('active');
// }



rate1.onmouseover = function rate1_true() {
  rate1.classList.add('active')
  img1.src = "img/icon-17.png";
  icon81.src = "img/vector4.png";

}

rate1.onmouseout = function rate1_false() {
  rate1.classList.remove('active')
  img1.src = "img/icon-5.png";
  icon81.src = "img/icon-8.png";
}

rate2.onmouseover = function rate2_true() {
  rate2.classList.add('active')
  img2.src = "img/icon-6.png";
  icon82.src = "img/vector4.png";
}

rate2.onmouseout = function rate2_false() {
  rate2.classList.remove('active')
  img2.src = "img/icon-15.png";
  icon82.src = "img/icon-8.png";
}

rate3.onmouseover = function rate3_true() {
  rate3.classList.add('active')
  img3.src = "img/icon-16.png";
  icon83.src = "img/vector4.png";
}

rate3.onmouseout = function rate3_false() {
  rate3.classList.remove('active')
  img3.src = "img/icon-7.png";
  icon83.src = "img/icon-8.png";
}
