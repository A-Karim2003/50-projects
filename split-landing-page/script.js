"use strict";

const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

function handleEvents(element, position) {
  element.addEventListener("mouseenter", () =>
    container.classList.add(`hover-${position}`)
  );

  element.addEventListener("mouseleave", () =>
    container.classList.remove(`hover-${position}`)
  );
}

handleEvents(left, "left");
handleEvents(right, "right");
