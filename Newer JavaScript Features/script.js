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
