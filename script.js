"use strict";

const imgsContainer = document.querySelector(".imgs");
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const images = document.querySelectorAll(".desserts");

let idx = 0;
let interval = setInterval(init, 2000);

function changeImage() {
  if (idx >= images.length) idx = 0;
  else if (idx < 0) idx = images.length - 1;

  imgsContainer.style.transform = `translateX(${-idx * 100}vw)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(init, 2000);
}

rightBtn.addEventListener("click", function (e) {
  resetInterval();
  idx++;
  changeImage();
});

leftBtn.addEventListener("click", function (e) {
  resetInterval();
  idx--;
  changeImage();
});

function init() {
  idx++;
  changeImage();
}
