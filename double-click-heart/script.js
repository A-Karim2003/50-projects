"use strict";

const loveMe = document.querySelector(".loveMe");
const countEl = document.querySelector(".count");

let count = 0;
loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
  incrementCount();
  setTimeout(() => {
    removeHeart();
  }, 2000);
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");
  heart.style.left = `${e.offsetX}px`;
  heart.style.top = `${e.offsetY}px`;
  loveMe.append(heart);
}

function incrementCount() {
  countEl.textContent = count++;
}

function removeHeart() {
  loveMe.removeChild(loveMe.firstElementChild);
}
