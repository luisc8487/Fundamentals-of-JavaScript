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
const arr = ["Bob", "Sally", "Tom"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

///////////////// ////////////////
// Loop through an Array in Reverse
///////////////// ///////////////
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

///////////////// ////////////////
// Nested Loops
///////////////// ///////////////
let str = "LOL";
for (let i = 0; i < 3; i++) {
  console.log(`Outter Loop: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Inner Loop: ${str[j]}`);
  }
}
