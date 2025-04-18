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
// const getPokemon = async (id) => {
//   try {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// getPokemon(1);
// getPokemon(2);

const btn = document.querySelector("#jokeBtn");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newLi = document.createElement("li");
  newLi.innerText = jokeText;
  const ul = document.querySelector("#jokeContainer");
  ul.append(newLi);
};

// Setting headers with axios
const getDadJoke = async () => {
  try {
    const config = {
      headers: {Accept: "application/json"},
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    console.log("error", error);
  }
};

btn.addEventListener("click", addNewJoke);
