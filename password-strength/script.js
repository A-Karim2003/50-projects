"use strict";

const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const length = e.target.value.trim().length;
  const blur = Math.max(20 - length * 2, 0);
  background.style.filter = `blur(${blur}px)`;
});
