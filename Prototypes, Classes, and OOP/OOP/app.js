//////////////////
// Factory Functions
//////////////////

// function hex(r, g, b) {
//   return (
//     "#" +
//     ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
//   );
// }

// function rgb(r, g, b) {
//   return "rgb(" + r + "," + g + "," + b + ")";
// }
// hex(255, 100, 25); // "#FF6419"
// rgb(255, 100, 25); // "rgb(255, 100, 25)"

// // Factory Function
// // A function that returns an object
// // It is a way to create objects without using the `new` keyword

// function makeColor() {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const {r, g, b} = this;
//     return (
//       "#" +
//       ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
//     );
//   };
//   return color;
// }

// const firstColor = makeColor(255, 100, 25);
// firstColor.rgb(); // "rgb(255, 100, 25)"

///////////////////
// Constructor Functions
///////////////////

// Constructor Function
// A function that creates an object using the `new` keyword
// It is a way to create objects using the `new` keyword

// Create a blank, plain JavaScript object
// Links (sets the constructor of) this object to another object
// Passes the newly created object from step 1 as the this context
// Returns this if the function doesn't return its own object

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Prototype Methods
// The prototype is an object that is shared by all instances of a constructor function
// It is a way to add methods to all instances of a constructor function

// Color.prototype.rgb = function () {
//   const {r, g, b} = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const {r, g, b} = this;
//   return (
//     "#" +
//     ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
//   );
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const {r, g, b} = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(255, 100, 25);
// const color2 = new Color(0, 0, 0);

//////////////////
// Classes Syntax
//////////////////

// The class syntax is a more modern way to create constructor functions and prototypes in JavaScript. It is a syntactical sugar over the existing prototype-based inheritance and constructor functions.
// It is a way to create objects using the `class` keyword

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     this.calcHSL();
//   }
//   innerRGB() {
//     const {r, g, b} = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     const {r, g, b} = this;
//     return (
//       "#" +
//       ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
//     );
//   }
//   hsl() {
//     const {h, s, l} = this;
//     return `hsl(${h}, ${s}%, ${l}%)`;
//   }
//   fullSaturation() {
//     const {h, l} = this;
//     return `hsl(${h}, 100%, ${l}%)`;
//   }
//   opposite() {
//     const newHue = (h + 180) % 360;
//     return `${newHue}, ${s}%, ${l}%`;
//   }
//   calcHSL() {
//     let {r, g, b} = this;
//     // Normalize r, g, b to [0, 1] range
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta === 0) h = 0;
//     // Red is max
//     else if (cmax === r) h = ((g - b) / delta) % 6;
//     // Green is max
//     else if (cmax === g) h = (b - r) / delta + 2;
//     // Blue is max
//     else h = (r - g) / delta + 4;
//     h = Math.round(h * 60);
//     // Make negative hues positive behind 360°
//     if (h < 0) h += 360;

//     // Lightness
//     l = (cmax + cmin) / 2;

//     // Saturation
//     s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Convert to percentage
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
// }

// const c1 = new Color(255, 67, 89, "tomato");

///////////////////
// Extends
///////////////////

// The extends keyword is used in class declarations or class expressions to create a child class from a parent class. The child class inherits all the properties and methods of the parent class, allowing for code reuse and the creation of more specific classes based on a general class.
// super is a special keyword that refers to the parent class. It is used to call the constructor of the parent class and to access methods and properties of the parent class from the child class.

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
