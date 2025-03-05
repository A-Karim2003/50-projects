"use strict";

const nav = document.querySelector("nav");
const hero = document.querySelector(".hero");
const html = document.documentElement;

const navHeight = parseFloat(window.getComputedStyle(nav).height);
const heroHeight = parseFloat(window.getComputedStyle(hero).height);
const rootMargin = `-${heroHeight - 3 * navHeight}px 0px 0px 0px`;

console.log(rootMargin);

//? Create Observer Options
const ObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: rootMargin,
};

//? Create observer callback

const observerCallback = ([entry]) => {
  if (entry.isIntersecting) {
    console.log("is intersecting");
    html.classList.remove("light");
  } else {
    console.log("is not intersecting");
    html.classList.add("light");
  }
};
//? Create the observer. observer is rules we set based on callback and options

const observer = new IntersectionObserver(observerCallback, ObserverOptions);

observer.observe(hero);
