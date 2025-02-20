"use strict";

const sounds = document.querySelectorAll("audio");
const buttonsContainer = document.getElementById("buttons");

sounds.forEach((sound) => {
  const button = document.createElement("button");

  button.classList.add("btn");
  button.dataset.sound = sound.id;
  button.textContent = sound.id;

  buttonsContainer.append(button);
});

buttonsContainer.addEventListener("click", (e) => {
  stopSounds();
  const curBtn = e.target.closest(".btn");
  if (!curBtn) return;
  //? get the audio with the corresponding id.
  const audio = document.getElementById(curBtn.dataset.sound);

  audio.play();
});

function stopSounds() {
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}
