function multiply(a, b) {
  return a * b;
}

function square(x) {
  return multiply(x, x);
} 

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5); // true