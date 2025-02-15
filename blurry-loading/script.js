"use strict";

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

//* Get the current blur value and convert to number
const blurValue = window.getComputedStyle(bg).filter;
let blurNum = Number(
  blurValue
    .split("")
    .filter((value) => !isNaN(value))
    .join("")
);

let opacity = 1;
let loadPercent = 0;
const blurDecrement = blurNum / 100;

let interval = setInterval(() => {
  //* Subtract by 0.3 each interval till it gets to blurNum becomes less than 0.
  //* 0.3 is obtained by doing (30/100). 30 = blur pixel value, 100 = num of intervals
  blurNum -= blurDecrement;
  loadPercent++;

  //* since theres 100 intervals, each interval will  -0.01 so opacity will be 0
  loadText.style.opacity = opacity -= 0.01;
  loadText.textContent = `${loadPercent}%`;
  bg.style.filter = `blur(${blurNum}px)`;

  if (loadPercent > 99) {
    loadText.textContent = "";
    clearInterval(interval);
  }
}, 30);
