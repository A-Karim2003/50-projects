"use strict";
const KEY = "10a16c24785f36a93feb2c45c634a29c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
`https://image.tmdb.org/t/p/w1280/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query="`;

const main = document.getElementById("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

async function renderMovies(url) {
  const response = await fetch(url);
  const results = await response.json();

  const data = results.results.map((result) => {
    const { title, vote_average, poster_path: image, overview } = result;
    return { title, vote_average, image, overview };
  });

  data.forEach((movie) => {
    const image = IMG_PATH + movie.image;
    const rating = movie.vote_average;
    const title = movie.title;
    const overview = movie.overview;

    const html = `
    <div class="movie">
            <img src="${image}"
                alt="">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(rating)}">${rating.toFixed(
      1
    )}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                <p>
                ${overview}
                </p>

            </div>

    </div>
    `;
    main.insertAdjacentHTML("beforeend", html);
  });
}

function getClassByRate(rating) {
  if (rating >= 8) return "green";
  if (rating >= 5) return "orange";
  return "red";
}

//? Render initial movies
renderMovies(API_URL);

//? Render searched movies
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (searchTerm.trim() === "") return;
  main.innerHTML = "";
  renderMovies(SEARCH_API + searchTerm);
  search.value = "";
});
