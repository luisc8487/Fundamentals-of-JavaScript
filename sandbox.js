///////////////////
// Extends
///////////////////

// Extends | allows us to reuse code by inheriting properties and methods from a parent class.
// Super |  ensures that the parent class's constructor and methods are properly called.
// Class | syntax is a modern, cleaner way to create objects and implement inheritance.

class Pet {
  // The constructor method is a special method for creating and initializing an object created with a class.
  // It is called automatically when a new instance of the class is created.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Pet {
  constructor(name, age) {
    super(name, age); // Call the constructor of the parent class (Pet)
    console.log("Dog constructor called");
  }
  bark() {
    return `${this.name} is barking`;
  }
}

// the class cat extends the class pet
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("Cat constructor called");
    // Call the constructor of the parent class (Pet)
    super(name, age); // Call the constructor of the parent class (Pet)
    this.livesLeft = livesLeft; // Add a new property specific to Cat
  }
  meow() {
    return `${this.name} is meowing`;
  }
}
