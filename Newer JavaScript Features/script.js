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


