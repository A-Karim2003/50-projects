"use strict";

const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("click", (e) => {
  const faqToggle = e.target.closest(".faq-toggle");
  if (!faqToggle) return;

  const faq = e.target.closest(".faq");
  faq.classList.toggle("active");
});
