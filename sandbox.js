// What is 'this' in JavaScript?

// 'this' refers to the object that is executing the current function
// In a method, 'this' refers to the owner object
// In a function, 'this' refers to the global object (window in browsers, global in Node.js)

/* what is the benefit of using 'this' in JavaScript?
'this' allows you to create methods that can be reused across different objects
It allows you to access properties and methods of the object that is executing the function
- dynamic functions that can work with different objects
- more flexible and reusable code
- etc

// What is the difference between 'this' in a method and 'this' in a function?
// In a method, 'this' refers to the object that owns the method
// In a function, 'this' refers to the global object (window in browsers, global in Node.js)
// In strict mode, 'this' in a function is undefined 
// Example to demonstrate the difference between 'this' in a method and 'this' in a function
*/

function outerFunction() {
  let outerVariable = "I'm in the outer function!";

  function innerFunction() {
    console.log(outerVariable); // Accessible due to lexical scoping
  }

  innerFunction();
}
outerFunction();

const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Call the method, 'this' refers to the person object

// lexical scope is the scope created by the function itself and its nested functions
// 'This' is not tied to where a function is defined but rather to how it is invoked. 'This' in a function that relies on lexical scope, it won't work as expected because 'this' is not lexically scoped.
function outerFunction() {
    console.log(this); // 'this' depends on how outerFunction is called
}

outerFunction(); // In non-strict mode, 'this' refers to the global object (e.g., 'window' in browsers)
