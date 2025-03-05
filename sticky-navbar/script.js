"use strict";

const nav = document.querySelector("nav");
const hero = document.querySelector(".hero");
const html = document.documentElement;

const navHeight = parseFloat(window.getComputedStyle(nav).height);
const heroHeight = parseFloat(window.getComputedStyle(hero).height);
const rootMargin = `-${heroHeight - 3 * navHeight}px 0px 0px 0px`;

//? Create Observer Options
const ObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: rootMargin,
};

//? Create observer callback

const observerCallback = ([entry]) => {
  if (entry.isIntersecting) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }
};
//? Create the observer. observer is rules we set based on callback and options

const observer = new IntersectionObserver(observerCallback, ObserverOptions);

observer.observe(hero);

//? adding click effects the on nav links

nav.addEventListener("click", (e) => {
  const links = nav.querySelectorAll("a");
  const clickedLink = e.target.closest("a");
  if (!clickedLink) return;

  links.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
});
