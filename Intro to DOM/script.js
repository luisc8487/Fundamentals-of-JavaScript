const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}

document.querySelectorAll("div").forEach((pokemon) => {
  pokemon.style.border = "solid black 1px";
  pokemon.style.borderRadius = "10px";
  pokemon.style.backgroundColor = "lightblue";
  pokemon.style.display = "inline-block";
  pokemon.style.margin = "10px";
  pokemon.style.padding = "10px";
  pokemon.style.textAlign = "center";
});

document.querySelectorAll("img").forEach((img) => {
  img.style.width = "100px";
  img.style.height = "100px";
});
