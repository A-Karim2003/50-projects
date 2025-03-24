"use strict";

const screens = document.querySelectorAll(".screen");
const playGameBtn = document.querySelector(".btn");
const chooseInsectBtn = document.querySelector(".choose-insect-btn");
const gameContainer = document.getElementById("game-container");

const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectInsects = {};

playGameBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

//? Add event listener to the 2nd screen
screens[1].addEventListener("click", (e) => {
  const chooseBtn = e.target.closest(".choose-insect-btn");
  if (!chooseBtn) return;

  const img = chooseBtn.querySelector("img");
  const src = img.src;
  const alt = img.alt;
  selectInsects = { src, alt };
  screens[1].classList.add("up");

  setTimeout(createInsect, 1000);
  startGame();
});

function startGame() {
  setInterval(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const m = min < 10 ? String(min).padStart(2, 0) : min;
    const s = sec < 10 ? String(sec).padStart(2, 0) : sec;
    timeEl.textContent = `Time: ${m}:${s}`;
    seconds++;
  }, 1000);
}

function createInsect() {
  const insect = document.createElement("div");
  const insectImg = document.createElement("img");

  insect.classList.add("insect");
  insectImg.src = selectInsects.src;
  insectImg.alt = selectInsects.alt;
  insectImg.style.transform = `rotate(${Math.random() * 360}deg)`;

  const { x, y } = getRandomLocation();
  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;
  insect.append(insectImg);

  insect.addEventListener("click", catchInsect);

  console.log(insect);

  gameContainer.append(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);

  setTimeout(() => createInsect(), 1000);
  setTimeout(() => createInsect(), 1000);
}

// When an insect is clicked, the score is increased
function increaseScore() {
  score++;
  if (score > 20) messageEl.classList.add("visible");

  scoreEl.textContent = `Score: ${score}`;
}
