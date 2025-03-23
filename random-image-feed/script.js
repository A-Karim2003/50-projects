"use strict";
const randomImgSrc = "https://picsum.photos/300/300";

const container = document.querySelector(".grid-container");

for (let i = 0; i < 21; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = `${randomImgSrc}?random=${i}`;
  div.append(img);
  container.append(div);
}
