"use strict";

const imgs = document.querySelectorAll("img");
const buttonsContainer = document.querySelector(".buttons-container");

//? Create automatic slider
let shift = -500;
function shiftImg() {
  if (shift < -1500) shift = 0;
  if (shift > 0) shift = -1500;
  imgs.forEach((img) => (img.style.transform = `translateX(${shift}px)`));
}
setInterval(() => {
  shiftImg();
  shift -= 500;
}, 2500);

//? Create manual slider
buttonsContainer.addEventListener("click", (e) => {
  const prevBtn = e.target.closest("#left");
  const nextBtn = e.target.closest("#right");

  if (!prevBtn && !nextBtn) return;

  if (prevBtn) {
    shift += 500;
    shiftImg();
  }
  if (nextBtn) {
    shift -= 500;
    shiftImg();
  }
  console.log(shift);
});
