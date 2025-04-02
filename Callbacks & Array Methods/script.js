// The forEach method executes a provided function once for each array element.

// It is a higher-order function that takes a callback function as an argument and applies it to each element in the array.

// forEach method with arrow function
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2); // Output: 2, 4, 6, 8, 10
});

// forEach method with an Object
const person = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
];

person.forEach((trait) => {
  console.log(`${trait.name} is ${trait.age} years old.`); // Output: John is 30 years old.
  console.log(`${trait.name} lives in ${trait.city}.`); // Output: John lives in New York.
});

// map method with the use of Arrow function

// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It is also a higher-order function that takes a callback function as an argument and applies it to each element in the array, returning a new array. 

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

person.map((trait) => {
  console.log(`${trait.name} would be ${trait.age * 2} years old if it was `); // Output: John is 30 years old.
});

// setTimeout
console.log('Hello!');
setTimeout(() => {
  console.log('This message is delayed by 2 seconds: .....are you still there?'); // Output: This message is delayed by 2 seconds.

}, 2000); // Output: This message is delayed by 2 seconds.

console.log('Goodbye!');

// setInterval
console.log('Hello!');
const id = setInterval(() => {
  console.log('This message is repeated every 2 seconds: .....are you still there?'); // Output: This message is repeated every 2 seconds.
}, 2000); // Output: This message is repeated every 2 seconds.

clearInterval(id, 2000); // Stops the interval after 2 seconds
console.log('Goodbye!');

// Filter method with the use of Arrow function
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] 

// Some method with the use of Arrow function
// The some method tests whether at least one element in the array passes the test implemented by the provided function.

const numbers4 = [1, 2, 3, 4, 5];
const hasEvenNumbers = numbers4.some((number) => number % 2 === 0);
console.log(hasEvenNumbers); // Output: true

// Every method with the use of Arrow function
// The every method tests whether all elements in the array pass the test implemented by the provided function.

const numbers5 = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers5.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // Output: false

// Reduce method with the use of Arrow function
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers6 = [1, 2, 3, 4, 5];
const sum = numbers6.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 15
