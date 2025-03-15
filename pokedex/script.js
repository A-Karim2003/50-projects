"use strict";

const container = document.querySelector(".container");

async function getPokemons() {
  try {
    const response = await fetch(
      " https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    if (!response.ok)
      throw new Error(`Could not fetch data ${response.status}`);

    const data = await response.json();
    const { results } = data;

    //? Create an array of promises for each fetch request
    const pokemonPromises = results.map(async (result) => {
      const response = await fetch(result.url);
      return response.json();
    });

    //? Wait for all requests to complete
    const pokemonDataArr = await Promise.all(pokemonPromises);

    const filteredData = pokemonDataArr.map((data) => {
      return {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        img: data.sprites.front_default,
      };
    });

    filteredData.forEach((pokemon) => {
      GeneratePokemonHTML(pokemon.id, pokemon.name, pokemon.type, pokemon.img);
    });
  } catch (error) {
    console.log(error);
  }
}

function GeneratePokemonHTML(id, name, type, img) {
  const typeTocolorMap = {
    grass: "#DEFDE0",
    fire: "#FDDFDF",
    water: "#DEF3FD",
    bug: "#F8D5A3",
    normal: "#F5F5F5",
    poison: "#98D7A5",
    electric: "#FCF7DE",
    ground: "#F4E7DA",
    fairy: "#FCEAFF",
    fighting: "#E6E0D4",
    psychic: "#EAEDA1",
    rock: "#D5D5D4",
    ghost: "#71ABC0",
    ice: "#D6D5DA",
    dragon: "#97B3E6",
  };
  console.log();

  const html = `
    <div class="card" style="background:${typeTocolorMap[type]} ">

        <div>
            <div class="pokemon-img-container">
                <img src="${img}">
            </div>
        </div>

        <div class="pokemon-info">

            <div class="pokemon-id-container">
                <span>#${String(id).padStart(3, "0")}</span>
            </div>

            <div class="pokemon-name">
                <h3>${name}</h3>
            </div>

            <div class="pokemon-type">
                <h4>Type: ${type}</h4>
            </div>
        </div>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", html);
}

getPokemons();
