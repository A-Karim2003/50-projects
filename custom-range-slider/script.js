"use strict";

const range = document.getElementById("range");
const label = document.querySelector("label");

range.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  label.textContent = value;

  const rangeWidth = parseInt(e.target.clientWidth);
  const labelWidth = parseInt(label.clientWidth);
  const min = Number(e.target.min);
  const max = Number(e.target.max);

  // Normalize the value between 0 and 1
  const percent = (value - min) / (max - min);
  const thumbOffset = percent * rangeWidth;

  label.style.left = `${thumbOffset}px`;
});
