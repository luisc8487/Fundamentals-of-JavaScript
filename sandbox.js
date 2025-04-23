///////////////////
// Extends
///////////////////

class Pet {
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
    console.log("Dog constructor called");
    this.name = name; // Call the constructor of the parent class (Pet)
    this.age = age; // Add a new property specific to Dog
  }
  bark() {
    return `${this.name} is barking`;
  }
}

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