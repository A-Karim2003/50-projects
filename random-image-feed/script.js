"use strict";
const randomImgSrc = "https://picsum.photos/300/300";

const container = document.querySelector(".grid-container");
const amountEl = document.getElementById("amount");

let amount = 15;

displayImgs(); // display inital images
amountEl.addEventListener("change", () => {
  amount = amountEl.value;
  container.textContent = "";
  displayImgs();
});

function displayImgs() {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = `${randomImgSrc}?random=${i}`;
    div.append(img);
    container.append(div);
  }
}
