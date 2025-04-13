///////////////////
// Call Stack
///////////////////

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