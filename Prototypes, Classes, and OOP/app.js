// Define a constructor function
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Create an instance of Person
const alice = new Person("Alice");

// Call the method
alice.greet(); // Output: Hello, my name is Alice
