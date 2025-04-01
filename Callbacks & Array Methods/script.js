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
