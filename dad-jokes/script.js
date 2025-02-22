"use strict";

const button = document.querySelector("button");
const jokeElement = document.getElementById("joke");

async function getJoke() {
  try {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error(`API not found ${response.status}`);

    const joke = await response.json();

    return joke.joke;
  } catch (error) {
    console.error(error);
  }
}

async function displayJoke() {
  const joke = await getJoke();
  jokeElement.textContent = joke;
}

displayJoke();
button.addEventListener("click", displayJoke);
