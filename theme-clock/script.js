"use strict";

const html = document.querySelector("html");
const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const circleEl = document.querySelector(".circle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  html.classList.toggle("dark");

  if (e.target.textContent === "Dark mode") {
    e.target.textContent = "Light mode";
  } else {
    e.target.textContent = "Dark mode";
  }
});

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

/*
 this scale function maps a range of numbers to anothe range of numbers.
For example we want to map hours 0 to 23, to degrees 0 t0 360deg
*/
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

function setTime() {
  const time = new Date();
  const month = months[time.getMonth()];
  const day = days[time.getDay()];
  const date = time.getDate();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hours = time.getHours();
  const hour = (time.getHours() % 12) + minutes / 60 + seconds / 3600;

  console.log(
    `Month: ${month}, Day: ${day}, Hour: ${hours}, Minutes: ${minutes}, Seconds:${seconds}`
  );

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    (hour / 12) * 360
  }deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    (minutes / 60) * 360
  }deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    (seconds / 60) * 360
  }deg)`;

  //* setting the time for the time class
  const formattedMinutes = String(time.getMinutes()).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");
  const AmPm = hours >= 12 && hours <= 23 ? "PM" : "AM";

  const times = `${formattedHours}:${formattedMinutes}${AmPm}`;
  timeEl.textContent = times;

  //* set the date
  dateEl.textContent = `${day}, ${month}`;
  dateEl.insertAdjacentHTML("beforeend", `<span class="circle">${date}</span>`);
}

setInterval(() => {
  setTime();
}, 1000);
