"use strict";
const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");

// initial setup
const totalSeconds = 60;
let playing = false;
let currSeconds = totalSeconds;
timerEl.textContent = formatTime(totalSeconds);

playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.classList.toggle("bg-green-500");
  const playIcon = playBtn.querySelector("i");

  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});
resetBtn.addEventListener("click", () => resetTimer());

const timerInterval = setInterval(run, 1000);

//Run timer
function run() {
  if (!playing) return;
  currSeconds--;
  if (currSeconds <= 0) {
    clearInterval(timerInterval);
    resetTimer();
  }
  timerEl.textContent = formatTime(currSeconds);
  root.style.setProperty("--degrees", calcDeg());
}

function calcDeg() {
  return `${360 - (currSeconds / totalSeconds) * 360}deg`;
}

function resetTimer() {
  playing = false;
  playBtn.classList.remove("bg-green-500");
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.add("fa-play");
  playIcon.classList.remove("fa-pause");
  currSeconds = totalSeconds;
  timerEl.textContent = formatTime(currSeconds);
  root.style.setProperty("--degrees", "0deg");
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(newSeconds).padStart(
    2,
    "0"
  )}`;
}
