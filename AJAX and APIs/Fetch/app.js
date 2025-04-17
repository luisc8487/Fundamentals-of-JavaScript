// Using Fetch API to make a GET request to the PokeAPI
// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     res.json().then((data) => console.log("JSON DONE", data));
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// Using Fetch API to make a GET request to the PokeAPI with error handling and chaining
// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://pokeapi.co/api/v2/pokemon/2");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// Using Fetch with Async/Await
const loadPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://pokeapi.co/api/v2/pokemon/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("Error", e);
  }
};

loadPokemons();
