const btn = document.querySelector("button");
const heading = document.querySelector("h1");

btn.addEventListener("click", () => {
  const color = makeRandomColor();
  const darkerOrLighter = filterIfDarker(color);
  if (darkerOrLighter === "dark") {
    btn.style.color = "white";
    heading.style.color = "white";
  } else {
    btn.style.color = "black";
    heading.style.color = "black";
  }

  document.body.style.backgroundColor = color;
  heading.textContent = color;
});

const makeRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const filterIfDarker = (color) => {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  console.log(r, g, b);
  return (r + g + b) / 3 < 128 ? "dark" : "light";
};
