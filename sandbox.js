//https://pokeapi.co/api/v2/pokemon/${name}

const form = document.querySelector("form");
const input = document.querySelector("#pokemonName");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value.toLowerCase();
  fetchPokemon(name);
});

const fetchPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
};
