"use strict";

const container = document.querySelector(".container");

const squares = 500;

function setRandomColor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return `rgb(${R},${G},${B})`;
}

function resetRandomColor() {
  return `#1d1d1d`;
}

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
}

const squaresEl = container.querySelectorAll(".square");
squaresEl.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.background = setRandomColor();
    square.style.boxShadow = `0 0 2px ${setRandomColor()}, 0 0 10px ${setRandomColor()}`;
  });

  square.addEventListener("mouseleave", () => {
    square.style.background = resetRandomColor();
    square.style.boxShadow = ` 0 0 2px black`;
  });
});
