const btn = document.querySelector("#v2");

btn.onclick = () => {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE YOU LIKE ME!");
};

function scream() {
  console.log("AHHHHHHHHHH!!!");
  console.log("STOP TOUCHING ME!");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("YOU CLICKED THE HEADING!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
    alert("CLICKED!")
});
