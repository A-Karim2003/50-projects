"use strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = 0;
  const target = Number(counter.dataset.target);
  const increment = target / 200;

  function updateCounter() {
    const currNum = Number(counter.textContent);
    if (currNum < target) {
      counter.textContent = Math.ceil(currNum + increment);

      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
});
