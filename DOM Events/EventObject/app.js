document.querySelector("button").addEventListener("click", (event) => {
  console.log(event); // logs the event object
});

const input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      console.log("Up arrow key pressed");
      break;
    case "ArrowDown":
      console.log("Down arrow key pressed");
      break;
    case "ArrowLeft":
      console.log("Left arrow key pressed");
      break;
    case "ArrowRight":
      console.log("Right arrow key pressed");
      break;
    default:
      console.log(`Key pressed: ${event.key}`);
      break;
  }
});
