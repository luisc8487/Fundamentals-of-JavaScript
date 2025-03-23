/////////////////
// For Loop
/////////////////

/////////////////
// Increment
/////////////////
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

/////////////////
// Decrement
/////////////////
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

/////////////////
// Infinite Loop
/////////////////
// for (let i = 1; i >= 10; i++) {
//     console.log("Hello");
// }

// for (let num = 0; num <= 10; num += 2) {
//   console.log(`Console.log(${num});`);
// }

/////////////////////////
// Loop through an Array
////////////////////////
// const arr = ["Bob", "Sally", "Tom"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

///////////////// ////////////////
// Loop through an Array in Reverse
///////////////// ///////////////
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

///////////////// ////////////////
// Nested Loops
///////////////// ///////////////
// let str = "LOL";
// for (let i = 0; i < 3; i++) {
//   console.log(`Outter Loop: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Inner Loop: ${str[j]}`);
//   }
// }

///////////////// ////////////////
// While Loop
///////////////// ///////////////
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

///////////////// ////////////////
// Break
///////////////// ///////////////
// for (let i = 0; i < 10; i++) {
//     // stop the loop when i is 5
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

///////////////// ////////////////
// Writing a Guessing Game
///////////////// ///////////////

const theGuess = Math.floor(Math.random() * 4) + 1;
console.log(`The guess is ${theGuess} to guess`);
let amountOfGuesses = 0;
let guess = prompt("Guess a number between 1 and 10");
while (guess != theGuess) {
  if (guess > theGuess) {
    alert("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
  amountOfGuesses++;
  if (amountOfGuesses === "q") {
    alert(`You guessed ${amountOfGuesses} of times!`);
  }
}
alert(
  `You guessed ${amountOfGuesses} times in order to get the correct guess!`
);
