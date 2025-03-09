"use strict";

const textEl = document.getElementById("text");
const speedInput = document.getElementById("speed");
const textarea = document.querySelector("textarea");
let text = "We love Programming!";
let index = 1;
let speed = 300 / speedInput.value;

speedInput.addEventListener("input", (e) => {
  if (e.target.value > 10) e.target.value = 10;
  if (e.target.value < 1) e.target.value = 1;
  speed = 300 / e.target.value;
});

textarea.addEventListener("input", (e) => {
  text = e.target.value;
  if (!e.target.value) text = "We love Programming!";
  writeText();
});

function writeText() {
  textEl.textContent = text.slice(0, index);
  index++;

  if (index >= text.length) index = 1;

  setTimeout(writeText, speed);
}
writeText();
