"use strict";

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressBar = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

let value = 0;
let currentActive = 0;
nextBtn.addEventListener("click", () => {
  if (value > 66) return;

  currentActive++;
  prevBtn.disabled = false;
  progressBar.style.width = `${(value += 33)}%`;
  circles[currentActive].classList.add("active");

  if (value === 99) nextBtn.disabled = true;
});

prevBtn.addEventListener("click", () => {
  nextBtn.disabled = false;

  if (value <= 0) return;

  progressBar.style.width = `${(value -= 33)}%`;
  circles[currentActive].classList.remove("active");
  currentActive--;
  if (value === 0) prevBtn.disabled = true;
});
