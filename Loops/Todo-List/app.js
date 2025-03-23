window.onload = function () {
  const todos = [];
  let command = prompt("What would you like to do: ");

  while (command !== "quit") {
    if (command === "new") {
      let = newTodo = prompt("Enter a new todo: ");
      todos.push(newTodo);
    } else if (command === "list") {
      console.log("**********");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`);
      }
      console.log("**********");
    } else if (command === "delete") {
      let index = prompt("Enter an index to delete: ");
      todos.splice(index, 1);
    }
    command = prompt("What would you like to do: ");
  }
  console.log("OK, YOU QUIT THE APP!");
};
