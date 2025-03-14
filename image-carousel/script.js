"use strict";

const imgs = document.querySelectorAll("img");
const buttonsContainer = document.querySelector(".buttons-container");

const imgWidth = 500;
const totalImgs = imgs.length - 1;
const maxShift = imgWidth * totalImgs * -1;

//? Create automatic slider
let shift = 0;
let sliderInterval = startSlider();

function shiftImg() {
  if (shift < maxShift) shift = 0; // Loop back to start
  if (shift > 0) shift = maxShift; // Loop to end
  imgs.forEach((img) => (img.style.transform = `translateX(${shift}px)`));
}
function startSlider() {
  return setInterval(() => {
    shift -= imgWidth;
    shiftImg();
  }, 2500);
}

//? Create manual slider
buttonsContainer.addEventListener("click", (e) => {
  const prevBtn = e.target.closest("#left");
  const nextBtn = e.target.closest("#right");

  if (!prevBtn && !nextBtn) return;
  clearInterval(sliderInterval);

  if (prevBtn) shift += imgWidth;
  if (nextBtn) shift -= imgWidth;

  shiftImg();

  sliderInterval = startSlider(); // Restart auto-slide after manual interaction
});
