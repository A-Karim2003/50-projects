"use strict";

const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

container.addEventListener("click", (e) => {
  const panel = e.target.closest(".panel");
  if (!panel) return;
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });

  panel.classList.add("active");
});
