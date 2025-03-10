"use strict";

const cheap = document.getElementById("cheap");
const good = document.getElementById("good");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => doTheTrick(e.target));
});

function doTheTrick(clickedOne) {
  if (good.checked && cheap.checked && fast.checked && clickedOne === good) {
    fast.checked = false;
  }

  if (good.checked && cheap.checked && fast.checked && clickedOne === fast) {
    cheap.checked = false;
  }

  if (good.checked && cheap.checked && fast.checked && clickedOne === cheap) {
    good.checked = false;
  }
}
