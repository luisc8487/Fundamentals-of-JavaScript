// axios
//   .get("https://pokeapi.co/api/v2/pokemon/1")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("rejected", error);
//   });

// Using async/await with axios
const getPokemon = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log("error", error);
  }
};
getPokemon(1);
getPokemon(2);
