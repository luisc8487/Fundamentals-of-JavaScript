const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
const h1 = document.querySelectorAll("h1");

buttons.forEach((button) => {
  button.addEventListener("click", colorize);
});

h1.forEach((h) => {
  h.addEventListener("click", colorize);
});

function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}
