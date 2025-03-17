"use strict";

const boxesContainer = document.querySelector(".boxes");
const button = document.querySelector("button");

button.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-col * 125}px ${-row * 125}px`;
      boxesContainer.append(box);
      console.log(box);
    }
  }
}

createBoxes();
