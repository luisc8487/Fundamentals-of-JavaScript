const form = document.querySelector("#myForm");
const input = document.querySelector("#name");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  const catName = input.value;
  const newLI = document.createElement("li");
  newLI.textContent = catName;
  list.appendChild(newLI);
  input.value = ""; // Clear the input field after submission
});
