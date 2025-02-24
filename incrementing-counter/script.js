"use strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = 0;

  function updateCounter() {
    const target = Number(counter.dataset.target);
    const currNum = Number(counter.textContent);

    const increment = target / 200;

    if (currNum < target) {
      counter.textContent = Math.ceil(currNum + increment);

      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
});
