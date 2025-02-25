"use strict";
const smallCupsContainer = document.querySelector(".cups");
const smallCups = document.querySelectorAll(".cup-small");

const litres = document.getElementById("litres");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, i) => (cup.dataset.index = i));

smallCupsContainer.addEventListener("click", (e) => {
  const clickCupIdx = Number(e.target.dataset.index);
  highlightCups(clickCupIdx);
});

function highlightCups(clickCupIdx) {
  if (
    smallCups[clickCupIdx].classList.contains("full") &&
    !smallCups[clickCupIdx].nextElementSibling?.classList.contains("full")
  ) {
    clickCupIdx--;
    console.log(clickCupIdx);
  }

  /*--------------------------------------------- */
  //* 1) Loop through each cup, if its index is less than clicked cup's index.
  //* 2) Then that cup should be marked as full, else keep it empty

  smallCups.forEach((cup, i) => {
    if (i <= clickCupIdx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  //? Get the number of full glasses and the total number of cups.

  const fullCups = Array.from(smallCups).filter((cup) => {
    return cup.classList.contains("full");
  }).length;

  const totalCups = smallCups.length;

  //? If cup is empty, the percentage sigh should not be visible.

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    const fillPercentage = `${(fullCups / totalCups) * 100}%`;
    const litreCount = 2 - (fullCups / totalCups) * 2;

    percentage.style.visibility = "visible";
    percentage.style.height = fillPercentage;
    percentage.textContent = fillPercentage;
    litres.textContent = litreCount;
  }
}
