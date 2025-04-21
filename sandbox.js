//https://pokeapi.co/api/v2/pokemon/${name}

// API == Application Programming Interface
//API => a way to access data or functionality from a remote server or service

// This code fetches Pokemon data from the PokeAPI and displays it on a webpage.
// It uses the Fetch API to make a GET request to the PokeAPI, retrieves the data, and then displays it in a list format.
// The user can input a Pokemon name, and upon submission, the data for that Pokemon will be fetched and displayed.
// The code also handles errors in case the Pokemon is not found or if there are issues with the API request.
// The code is structured to be modular and easy to read, with clear separation of concerns for fetching data and updating the DOM.

const form = document.querySelector("form");
const input = document.querySelector("#pokemonName");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value.toLowerCase();
  fetchPokemon(name);
  input.value = ""; // Clear the input field after submission
});

const fetchPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try { // Try to fetch the Pokemon data from the API
    const res = await fetch(url); // Fetch the data from the API
    const data = await res.json(); // Parse the response as JSON
    console.log(data);
    const pokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name).join(", "),
      sprites: {
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
      },
    }; // Create a Pokemon object with relevant data
    console.log(pokemon);
    // Create a list item to display the Pokemon data
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${pokemon.name}</h2>
      <p>ID: ${pokemon.id}</p>
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
      <p>Types: ${pokemon.types}</p>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} front" />
    `;
    document.querySelector("#pokemonList").appendChild(li);
  } catch (error) { // Handle errors if the fetch fails or if the Pokemon is not found
    console.error("Error fetching Pokemon:", error);
  }
};
