"use strict";

const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("button");

runAnimation();

replay.addEventListener("click", () => {
  resetAnimation();
  runAnimation();
});

function runAnimation() {
  const lastNum = nums.length - 1; // <span> 0 </span>

  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn") {
        // if num is coming in, send it out
        num.classList.remove("in");
        num.classList.add("out");
      }
      // if num is coming out, send in next element in
      if (e.animationName === "goOut") nums[idx + 1]?.classList.add("in");

      // check if its last num,
      if (idx === lastNum) {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

function resetAnimation() {
  nums.forEach((num, i) => {
    num.className = "";
    i === 0 ? num.classList.add("in") : "";
  });

  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
}
