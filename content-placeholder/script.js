"use strict";

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  const headImgHTML = `
    <img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80">
    `;

  const titleText = `Lorem ipsum dolor sit amet.`;
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium temporibus iste corrupti?";

  const profile_imgHTML = `
     <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">
    `;

  header.insertAdjacentHTML("beforeend", headImgHTML);
  title.textContent = titleText;
  excerpt.textContent = text;
  profile_img.insertAdjacentHTML("afterbegin", profile_imgHTML);
  name.text = "John Doe";
  date.text = "Oct 08, 2020";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text-bg");
  });
}

setTimeout(() => {
  getData();
}, 2500);
