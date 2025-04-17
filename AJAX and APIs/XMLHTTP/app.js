// https://swap.dev/api/people/1/
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("It loaded");
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(
    `Name: ${data.name}, Height: ${data.height}, Weight: ${data.weight}`
  );
};

req.onerror = function () {
  console.log("Error loading data");
  console.log(this);
};

req.open("GET", "https://pokeapi.co/api/v2/pokemon/1");
req.send();
