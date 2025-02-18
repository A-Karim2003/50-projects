"use strict";

const boxes = document.querySelectorAll(".box");

const observerOptions = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px 400% -100px 400%",
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

boxes.forEach((box) => {
  observer.observe(box);
});
