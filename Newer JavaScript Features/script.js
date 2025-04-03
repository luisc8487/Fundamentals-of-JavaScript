// Default Parameters
function multiply(a, b) {
  if (b === undefined) {
    b = 1; // Default value for b
  }
  return a * b;
}

console.log(multiply(5)); // Output: 5 (5 * 1)

// New Default Parameters
function multiply(a, b = 1, c = 2) {
  return a * b * c;
}

console.log(multiply(5)); // Output: 10 (5 * 1 * 2)

// Spread Operator with Arrays Literals

// The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments are expected, such as in function calls or array literals.
// It is denoted by three dots (...).
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Spread operator to combine arrays
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator with function calls
function add(x, y, z) {
  return x + y + z;
}
const numbers4 = [1, 2, 3];
const sum = add(...numbers4); // Spread operator to pass array elements as arguments
console.log(sum); // Output: 6

// Spread operator with objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = {...obj1, ...obj2}; // Spread operator to combine objects
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Rest Parameters
// The rest parameters syntax allows us to represent an indefinite number of arguments as an array.
// It is denoted by three dots (...) before the parameter name.

function sum(...numbers) {
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)

function raceResults(gold, silver, ...others) {
  console.log(`Gold medal: ${gold}`);
  console.log(`Silver medal: ${silver}`);
  console.log(`Other participants: ${others.join(', ')}`);
}

console.log(raceResults('Alice', 'Bob', 'Charlie', 'David', 'Eve'));
// Output:
// Gold medal: Alice    
// Silver medal: Bob
// Other participants: Charlie, David, Eve

// Destructuring Assignment
// Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables.
// It provides a more concise way to extract values from arrays or objects. 
// It is denoted by curly braces {} for objects and square brackets [] for arrays.

const arr5 = [1, 2, 3];
const [x, y, z] = arr5; // Destructuring assignment for arrays
// x = 1, y = 2, z = 3
console.log(x, y, z); // Output: 1 2 3
