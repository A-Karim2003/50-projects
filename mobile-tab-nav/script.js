"use strict";

const phone = document.querySelector(".phone");
const imgs = document.querySelectorAll("img");
const navEls = document.querySelectorAll("li");

phone.addEventListener("click", (e) => {
  //? 1. when a user clicks on a nav, add he active class
  const clickedNav = e.target.closest("li");

  if (!clickedNav) return;

  navEls.forEach((nav) => nav.classList.remove("active"));
  clickedNav.classList.add("active");

  const navElTextContent = getTextContent(clickedNav);
  const matchingImg = matchingAtrr(navElTextContent);

  //? 5 loop through all the images and remove show class
  imgs.forEach((img) => img.classList.remove("show"));

  //? 6 add the show class to the corresponding img
  matchingImg.classList.add("show");
});

//? 2. get the text content from the navs p element
function getTextContent(element) {
  //? 3. convert it to lowercase
  return element.querySelector("p").textContent.toLowerCase();
}

//? 4 find the imgs with an alt attr thats === to p element text
function matchingAtrr(navElTextContent) {
  return Array.from(imgs).find((img) => img.alt === navElTextContent);
}
