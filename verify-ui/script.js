"use strict";

const inputContainer = document.querySelector(".code-container");
const inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputContainer.addEventListener("input", (e) => {
  const currInput = e.target.closest(".code");
  //? Only allow inputs to have 1 digit
  if (currInput.value.length > 1) {
    currInput.value = currInput.value.slice(0, 1);
  }

  //? Automatically move to the next input
  inputs.forEach((input, i) => {
    if (input.value !== "") inputs[i + 1]?.focus();
  });
});

window.addEventListener("keydown", (e) => {
  if (isNaN(Number(e.key)) && e.key !== "Backspace") return;

  if (e.key === "Backspace") {
    const currentIndex = Array.from(inputs).indexOf(e.target);
    setTimeout(() => inputs[currentIndex - 1]?.focus());
  }
});
