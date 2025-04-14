///////////////////
// Call Stack
///////////////////

// The call stack is a data structure that keeps track of function calls in JavaScript.

// When you call a function, it's like placing a new plate on top of the stack. Each plate represents a function that needs to be completed.
// If that function calls another function, you add another plate on top of the stack.
// The stack grows as more functions are called, with the most recent function (plate) always on top.
// When a function finishes (returns a value), you remove the top plate from the stack.
// This process continues until there are no more plates (functions) left on the stack.

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

////////////////
// Web APIs & Single Threaded
////////////////

// Web APIs are not part of the JavaScript engine. They are provided by the browser environment.
// They allow JavaScript to perform tasks like making network requests, manipulating the DOM, and handling timers.
// These tasks are handled by the browser, not the JavaScript engine itself.
// The JavaScript engine is single-threaded, meaning it can only execute one piece of code at a time.

console.log('Start'); // 1
setTimeout(() => console.log('Timeout 1'), 0); // 4
console.log('Middle'); // 2
setTimeout(() => console.log('Timeout 2'), 0); // 5 
console.log('End'); // 3
// Output: Start, Middle, End, Timeout 1, Timeout 2
// The order of execution is determined by the call stack and the event loop.
// The call stack executes the synchronous code first, and then the event loop processes the asynchronous code in the order they were added to the queue.