//https://pokeapi.co/api/v2/pokemon/${name}

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
  try {
    const res = await fetch(url);
    const data = await res.json();
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
    };
    console.log(pokemon);
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
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
};
