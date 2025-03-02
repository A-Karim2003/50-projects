"use strict";

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const xInside = e.offsetX;
  const yInside = e.offsetY;

  const circle = document.createElement("span");

  circle.classList.add("circle");
  circle.style.top = `${yInside}px`;
  circle.style.left = `${xInside}px`;

  button.append(circle);

  setTimeout(() => {
    circle.remove(circle);
  }, 1000);
});
