"use strict";

const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userEl = document.querySelector(".user");

let testimonials;

//? Fetch the data (only responsible for fetching)
async function loadTestimonies() {
  const res = await fetch("./testimonials.json");
  const { testimonials } = await res.json();
  return testimonials;
}

let currIdx = 0;
//? Initialize the app (responsible for logic)
async function init() {
  testimonials = await loadTestimonies();
  setInterval(() => {
    updateTestimonials();
    currIdx++;
    if (currIdx >= testimonials.length) currIdx = 0;
  }, 10000);
}

function updateTestimonials() {
  const currentTestimonial = testimonials[currIdx];
  const { name, photo, position, text } = currentTestimonial;
  testimonial.textContent = text;

  const userHTML = `
    <img src="${photo}" class="user-image">

    <div class="user-details">
        <h4 class="username">${name}</h4>
        <p class="role">${position}</p>
    </div>
  `;

  userEl.textContent = "";
  userEl.insertAdjacentHTML("beforeend", userHTML);
}
init();
