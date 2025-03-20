"use strict";
const resultsEl = document.getElementById("result");
const inputFilter = document.getElementById("filter");
const API_URL = "https://randomuser.me/api?results=50";

inputFilter.addEventListener("input", (e) => filterData(e.target.value));

async function fetchUser() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  //clear results before adding new data
  resultsEl.textContent = "";

  results.forEach((user) => {
    const {
      name: { first: name = "Name not found" },
      location: { city = "City not found", country = "Country Not found" },
      picture: { large: profilePic },
    } = user;

    const HTML = `
     <li>
        <img src="${profilePic}">
        <div class="user-info">
            <h4 class="user-name">${name}</h4>
            <p class="user-location">${city}, ${country}</p>
        </div>
    </li>
    `;

    resultsEl.insertAdjacentHTML("beforeend", HTML);
  });
}
fetchUser();

function filterData(searchValue) {
  const listItemNames = resultsEl.querySelectorAll("li h4");

  listItemNames.forEach((name) => {
    //? Get the parent element of the <h4> element
    const listItem = name.closest("li");

    //? Check item's text content contains the search value
    if (name.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
      //? remove the hide class to shows the element
      listItem.classList.remove("hide");
    } else {
      //? hide the rest of users that do not match search term
      listItem.classList.add("hide");
    }
  });
}
