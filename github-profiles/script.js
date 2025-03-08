"use strict";
const API_URL = `https://api.github.com/users/`;

//? Get DOM elements
const card = document.querySelector(".card");
const avatar = document.querySelector(".avatar");
const userInfo = document.querySelector(".user-info");
const form = document.querySelector(".user-form");
const inputEl = document.getElementById("search");
//=====================================================//

//? Hide card in the beginning
hideInfo();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //? Take input from user and fetch data
  const input = inputEl.value;
  getUser(input.trim());

  //? Clear input
  inputEl.value = "";
  showInfo();
});

async function getUser(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const {
      avatar_url,
      followers,
      following,
      name,
      html_url,
      repos_url,
      bio,
      public_repos,
    } = response.data;

    setUserAvatar(avatar_url, html_url);
    setUsernameBIO(name, bio);
    setUserProfileData(followers, following, repos_url, public_repos);
  } catch (error) {
    showError("No profile found with this username.");
  }
}

function setUserAvatar(avatar_url, url) {
  avatar.textContent = "";
  const imgHTML = `
    <a href="${url}">
        <img src="${avatar_url}">
    </a>
    `;
  avatar.insertAdjacentHTML("afterbegin", imgHTML);
}

function setUsernameBIO(name, bio) {
  //? Clear container first
  userInfo.textContent = "";

  //? Create html elements
  const nameEl = document.createElement("h2");
  const bioEl = document.createElement("p");

  //? Add user info to the elements
  nameEl.textContent = name;
  bioEl.textContent = bio;

  //? Append the elements to the DOM
  userInfo.append(nameEl, bioEl);
}

function setFollowInfo(followers, following, reposCount) {
  const html = `
    <ul>
        <li>${followers} <strong>Followers</strong></li>
        <li>${following} <strong>Following</strong></li>
        <li>${reposCount} <strong>Repos</strong></li>
    </ul>
    `;
  userInfo.insertAdjacentHTML("beforeend", html);
}

async function getRepos(repos) {
  const response = await axios.get(`${repos}`);
  const { data } = response;

  const repoInfo = data.map((repo) => {
    return {
      name: repo.name,
      repoUrl: repo.svn_url,
    };
  });

  return repoInfo;
}

function setRepoInfo(repositories) {
  const div = document.createElement("div");
  div.id = "repos";

  repositories.forEach((repo, i) => {
    // if (i > 4) return; // This will limit the num of repos

    const html = `
         <a href="${repo.repoUrl}" class="repo">${repo.name}</a>
        `;
    div.insertAdjacentHTML("beforeend", html);
  });

  userInfo.append(div);
}

async function setUserProfileData(followers, following, repos, reposCount) {
  //? Insert the follow info and repo count in the DOM
  setFollowInfo(followers, following, reposCount);

  //? Insert the repo names in the DOM
  const repositories = await getRepos(repos);
  setRepoInfo(repositories);
}

function hideInfo() {
  card.style.display = "none";
}

function showInfo() {
  card.style.display = "flex";
}

function showError(errMessage) {
  userInfo.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = errMessage;
  userInfo.append(h1);
}
