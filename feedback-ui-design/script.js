"use strict";

const button = document.querySelector("button");
const ratings = document.querySelector(".ratings-container");
const panel = document.getElementById("panel");

let ratingValue = "Satisfied";
ratings.addEventListener("click", (e) => {
  const rating = e.target.closest(".rating");
  if (!rating) return;
  //? Loop through each rating and remove the active class
  ratings
    .querySelectorAll(".rating")
    .forEach((rating) => rating.classList.remove("active"));

  rating.classList.add("active");
  ratingValue = rating.textContent.trim();
});

button.addEventListener("click", () => {
  //? clear the container
  panel.textContent = "";

  const html = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <p>Feedback: ${ratingValue}</p>
        <p>We'll use your feedback to improve our customer support</p>
  `;
  panel.insertAdjacentHTML("beforeend", html);
});
