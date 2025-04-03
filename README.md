# Fundamentals-of-JavaScript

## Table of Contents

1. [JavaScript Decision Making: Boolean Logic, Comparsion Operators, and Logical Operations](#javascript-decision-making-boolean-logic-comparsion-operators-and-logical-operations)
   - [Introduction to Decision Making](#introduction-to-descision-making)
   - [What is Decision Making?](#what-is-decision-making)
     - [What is Boolean Logic?](#what-is-boolean-logic)
     - [Comparison Operators](#comparison-operators)
     - [Logic Operators](#logic-operators)
   - [Conclusion](#conclusion)
2. [Understanding JavaScript Arrays](#understanding-javascript-arrays)
   - [Introduction to Arrays](#introduction-to-arrays)
   - [What is an Array?](#what-is-an-array)
   - [How Arrays are Stored in Memory](#how-arrays-are-stored-in-memory)
   - [Modifying Arrays with Built-in Methods](#modifying-arrays-with-built-in-methods)
   - [Comparing Arrays](#comparing-arrays)
   - [Conclusion](#conclusion)
3. [Understanding JavaScript Object Literals](#understanding-javascript-object-literals)
   - [Introduction to Object Literals](#introduction-to-object-literals)
   - [What is an Object Literal?](#what-is-an-object-literal)
   - [Accessing and Modifying Object Properties](#accessing-and-modifying-object-properties)
     - [1. Dot Notation](#1-dot-notation)
     - [2. Square Notation](#2-square-notation)
   - [Adding New Properties](#adding-new-properties)
   - [Nesting Arrays & Objects](#nesting-arrays-&-objects)
   - [How Objects are Stored in Memory](#how-objects-are-stored-in-memory)
   - [Conclusion](#conclusion)
4. [Loops in JavaScript](#loops-in-javascript)
   - [Introduction to Loops](#introduction-to-loops)
   - [Why Use Loops?](#why-use-loops)
   - [Types of Loops](#types-of-loops)
     - [For Loops](#for-loops)
     - [For...Of Loops](#forof-loops)
     - [Iterating through Strings and Arrays](#iterating-through-strings-and-arrays)
   - [Project Todo List App](#project-todo-list-app)
     - [How it Works](#how-it-works)
   - [Conclusion](#conclusion)
5. [Function in JavaScript](#function-in-javascript)
   - [Introduction to Function](#introduction-to-function)
   - [What are Functions?](#what-are-functions)
   - [Why are Functions Useful?](#why-are-functions-useful)
   - [Writing a Basic Function](#writing-a-basic-function)
   - [Passing Arguments to a Function](#passing-arguments-to-a-function)
   - [Multiple Arguments and Data Types](#multiple-arguments-and-data-types)
   - [Using the Return Keyword](#using-the-return-keyword)

_This content has been provided by Colt Steele's course, The Web Developer Bootcamp 2025_

# JavaScript Decision Making: Boolean Logic, Comparsion Operators, and Logical Operations

### Introduction

This guide will help you understand decision-making in JavaScript. Decision-making involves evaluating conditions and executing code based on those conditions. Even if you're not a technical engineer, this document will make it easy for you to grasp the concepts of Boolean logic, comparison operators, and logical operations.

### What is Boolean Logic?

Boolean logic is the foundation of decision-making in JavaScript. It deals with values that are either `true` or `false`. These values are used to control the flow of your code.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boolean Logic Example</title>
  </head>
  <body>
    <h1>Boolean Logic in JavaScript</h1>

    <script>
      let isSunny = true;
      if (isSunny) {
        alert("It's a sunny day!");
      } else {
        alert("It's not sunny today.");
      }
    </script>
  </body>
</html>
```

# Understanding JavaScript Arrays

## Introduction

This guide is designed to help you understand JavaScript arrays. Arrays are used to store multiple values in a single variable. They can hold objects, numbers, strings, and other data types. Arrays are indexed, meaning each element is associated with a numeric position, starting from zero.

## What is an Array?

An array is a special data structure that allows you to store and manipulate multiple values. For example:

```js
let fruits = ["apple", "banana", "cherry"];
```

In this example, the array `fruits` stores three string values. The first element (`'apple'`) is at index `0`, the second element (`'banana'`) is at index `1`, and so on.

## How Arrays are Stored in Memory

When you create an array and assign it to a variable, the variable itself doesn't store the array. Instead, it stores a reference to the array's location in memory. This is why comparing two identical arrays results in `false`.

```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);
```

Even though both arrays have the same content, they are stored in different locations in memory, and the comparison checks the reference, not the content.

## Modifying Arrays with Built-in Methods

JavaScript provides several methods to manipulate arrays:

- `push()`: Adds an element to the end of the array.
- `pop()`: Removes the last element.
- `unshift()`: Adds an element to the beginning.
- `shift()`: Removes the first element.
- `splice()`: Adds or removes elements at a specified index.
- `reverse()`: Reverses the order of the array.
- `concat()`: Combines two or more arrays.
- `split()`: Converts a string to an array.

### Example:

```js
let numbers = [1, 2, 3, 4];
numbers.push(5); // [1, 2, 3, 4, 5]
numbers.pop(); // [1, 2, 3, 4]
numbers.unshift(0); // [0, 1, 2, 3, 4]
numbers.shift(); // [1, 2, 3, 4]

let newNumbers = numbers.concat([5, 6]); // [1, 2, 3, 4, 5, 6]
let reversed = newNumbers.reverse(); // [6, 5, 4, 3, 2, 1]
```

## Comparing Arrays

Since arrays are reference types, comparing two arrays directly will return false unless they reference the same object in memory.

```js
let a = [1, 2, 3];
let b = a;

console.log(a === b); // true

let c = [1, 2, 3];

console.log(a === c); // false
```

## Conclusion

Understanding JavaScript arrays is essential for effective data management. By leveraging built-in methods and recognizing how arrays are stored in memory, you can efficiently manipulate and manage data in your applications.

# Understanding JavaScript Object Literals

## Introduction to Object Literals

This guide will help you understand JavaScript object literals. An object literal is a way to store multiple related values, including variables, functions, and other objects, within a single entity. This document is designed to be comprehensible for non-technical readers.

## What is an Object Literal?

In JavaScript, an object is a collection of key-value pairs. Each key is a string (or symbol), and each value can be any data type, such as numbers, strings, arrays, or even other objects.

### **Example**

```js
let person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
  isStudent: false,
};
```

In this example, the object `person` stores a string, a number, an array, and a boolean value.

## Accessing and Modifying Object Properties

You can access and modify object properties using two methods:

### 1. Dot Notation

```js
console.log(person.name); // Output: John
person.age = 31; // Modifies the age property
```

### 2. Square Notation

```js
console.log(person["age"]); // Output: 31
person["isStudent"] = true; // Modifies the isStudent property
```

## Adding New Properties

You can add new key-value pairs using either notation:

```js
person.city = "New York";
person["country"] = "USA";
```

## Nesting Arrays & Objects

JavaScript allows you to store arrays within an object or objects within an array.

### Example of Arrays within an Object:

```js
let car = {
  brand: "Toyota",
  models: ["Corolla", "Camry", "Prius"],
};
```

### Example of Objects with an Array:

```js
let users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
];
```

## How Objects are Stored in Memory

When you assign an object to a variable, the variable holds a reference to the memory location where the object is stored, not the actual object itself. This is why comparing two identical objects results in `false`.

```js
let obj1 = {a: 1};
let obj2 = {a: 1};

console.log(obj1 === obj2); // false
```

Even though the objects have the same content, they occupy different locations in memory.

## Conclusion

JavaScript object literals are powerful tools for organizing and managing data. By understanding how to access, modify, and nest data within objects, you can create more dynamic and efficient programs.

# Loops in JavaScript

## Introduction to Loops

Loops are a fundamental concept in programming that allow us to execute a block of code repeatedly for a specified number of times. In this section, we will explore the different types of loops in JavaScript, their use cases, and how to implement them.

## Why Use Loops?

Loops are useful when we need to perform a repetitive task, such as iterating through an array or string, or executing a block of code for a specified number of times. Loops help us to avoid writing duplicate code and make our programs more efficient.

## Types of Loops

### For Loops

For loops are used to iterate through an array or string and execute a block of code for each element. The syntax for a for loop is:

```js
for (let i = 0; i < array.length; i++) {
  // code to be executed
}
```

### For...Of Loops

For...of loops are used to iterate through an array or string and execute a block of code for each element. The syntax for a for...of loop is:

```js
for (let element of array) {
  // code to be executed
}
```

### Iterating through Strings and Arrays

Loops can be used to iterate through strings and arrays, allowing us to perform operations on each element. For example:

```js
let string = "hello";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

let array = [1, 2, 3, 4, 5];
for (let element of array) {
  console.log(element);
}
```

## Project Todo List App

In this project, we created a simple todo list app using **HTML and JavaScript**. The app allows users to add new items to the todo list and constantly checks whether the list is empty.

### How it Works

1. The user is prompted to enter a `"new"` item to add to the list.
2. The item is added to the `"list"` and displayed on the page.
3. The user can delete items from the list by typing `"delete"` followed by the number of the item.
4. The user can quit the application by typing `"quit"`.

![todo-list+loops](https://github.com/user-attachments/assets/dff56d79-9d42-4957-8af3-0dd2e1d79594)

## Conclusion

In this project, we explored the basics of loops in JavaScript and created a simple todo list app using HTML and JavaScript. We learned about the different types of loops, including for loops, for...of loops, and while loops, and how to use them to iterate through strings and arrays. We also saw how loops can be used to create interactive applications that respond to user input. With this knowledge, you can start building your own projects and exploring the many possibilities of JavaScript programming!

# Function in JavaScript

## Introduction to Function

Functions are a fundamental concept in programming that allow us to write reusable code that can be executed multiple times. In this README, I'll explain what functions are, why they're useful, and how to write and use them.

## What are Functions?

A function is a block of code that can be executed multiple times from different parts of a program. Think of a function like a recipe: you write down the steps to make a cake, and then you can use that recipe to make multiple cakes without having to rewrite the steps each time.

## Why are Functions Useful?

Functions are useful because they:

- Allow us to reuse code, making our programs more efficient and easier to maintain.
- Help us organize our code into smaller, more manageable chunks.
- Enable us to write more complex programs by breaking them down into smaller, more manageable pieces.

## Writing a Basic Function

Here's an example of basic function that says hello:

```js
function sayHello() {
  console.log("Hello!");
}
```

To use this function, we need to invoke it, like this:

```js
sayHello(); // Output: "Hello!"
```

## Passing Arguments to a Function

Functions can also take arguments, which are values that are passed to the function when it's invoked. Here's an example:

```js
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
```

To use this function, we need to pass an argument, like this:

```js
sayHello("Alice"); // Output: "Hello, Alice!"
```

### Important Note

When passing arguments to a function, the arguments must follow the exact order of the parameters declared within the function. For example:

```js
function sayHello(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
```

If we pass the arguments in the wrong order, the function will not work as expected:

```js
sayHello(25, "Alice"); // Output: "Hello, 25! You are Alice years old."
```

## Multiple Arguments and Data Types

Functions can also take multiple arguments of different data types. Here's an example:

```js
function calculateArea(length, width) {
  console.log(`The area is ${length * width} square meters.`);
}
```

We can pass arguments of different data types, like this:

```js
calculateArea(5, 3.5); // Output: "The area is 17.5 square meters."
```

## Using the Return Keyword

Functions can also return values using the `return` keyword. Here's an example:

```js
function add(x, y) {
  return x + y;
}
```

We can use the returned value like this:

```js
let result = add(2, 3);
console.log(result); // Output: 5
```

# Understanding Scope and Key JavaScript Concepts

This guide will help you understand the concept of **scope** in JavaScript and how it determines the accessibility of variables based on where they are defined. We will also explore **function scope**, **block scope**, **lexical scope**, **higher-order functions**, creating methods within objects using shorthand, and the use of the `this` keyword.

## What is Scope?

In JavaScript, **scope** refers to the context in which variables are accessible. Depending on where a variable is defined, it may or may not be accessible in different parts of your code. Scope ensures that variables are only available where they are needed, helping to avoid conflicts and bugs.

## Function Scope

Variables declared inside a function are only accessible within that function. This is called **function scope**.

### Example

```js
function greet() {
  let message = "Hello, World!";
  console.log(message); // Accessible inside the function
}

greet();
// console.log(message); // Unaccessible, would throw an error
```

In this example, the variable `message` is only accessible inside the `greet` function.

---

### Block Scope

Variables declared with let or const inside a block (e.g., inside {}) are only accessible within that block. This is called **block scope**.

Example:

```js
{
  let blockVariable = "I'm in a block!";
  console.log(blockVariable); // Accessible inside the block
}
// console.log(blockVariable); // Unaccessible, would throw an error
```

Here, `blockVariable` is only accessible within the block where it is defined.

### Lexical Scope

**Lexical scope** means that a function can access variables from its outer scope (where it was defined), even if the outer function has already finished executing.

Example:

```js
function outerFunction() {
  let outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable); // Accessible due to lexical scoping
  }

  innerFunction();
}

outerFunction();
```

In this example, `innerFunction` can access `outerVariable` because it is defined in the outer scope.

---

### Higher Order Functions

A **higher-order function** is a function that either:

1. Takes another function as an argument or
2. Return a function

Example:

```js
function higherOrderFunction(callback) {
  console.log("Before executing the callback");
  callback(); // Executes the passed function
  console.log("After executing the callback");
}

function sayHello() {
  console.log("Hello, World!");
}

higherOrderFunction(sayHello);
```

Here, `higherOrderFunction` takes sayHello as an argument and executes it.

---

### Creating Methods in Objects Using Shorthand

In JavaScript, you can define methods (functions inside objects) using shorthand syntax.

Example:

```js
const myObject = {
  myMethod() {
    console.log("I'm a shorthand method inside an object!");
  },
};

myObject.myMethod(); // Calls the method
```

---

### The `this` Keyword

The `this` keyword refers to the object that is currently executing the code. Its value depends on how and where it is used.

Example:

```js
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Logs: "Hello, my name is Alice"
```

In this example, `this.name` refers to the `name` property of the `person` object.

## Conclusion

- **Scope** determines where variables are accessible.
  - **Function Scope**: Variables are accessible only within the function where they are defined.
  - **Block Scope**: Variables are accessible only within the block where they are defined.
  - **Lexical Scope**: Functions can access variables from their outer scope.
- **Higher-Order Functions**: Functions that take other functions as arguments or return functions.
- **Shorthand Methods**: A cleaner way to define methods inside objects.
- **The `this` Keyword**: Refers to the object that is executing the code.

# JavaScript Modern Features: Default Parameters, Spread Operator, Rest Parameters, and Destructuring

This guide will help you understand some modern JavaScript features, including **default parameters**, the **spread operator**, **rest parameters**, and **destructuring**. These features make your code cleaner, more efficient, and easier to read.

## Default Parameters

Default parameters allow you to set a default value for a function's parameter. If no value is provided when the function is called, the default value will be used.

### Old Way (Before ES6):

```javascript
function greet(name) {
  name = name || "Guest"; // Use "Guest" if no name is provided
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

### New Way (With ES6 Default Parameters):

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

**Why is this useful?**

- It makes your code cleaner and easier to read.
- You no longer need to write extra logic to handle missing parameters.

## Spread Operator (`...`)

The **spread operator** allows you to "spread" the elements of an array or object into another array or object. It is incredibly useful for copying, combining, or expanding arrays and objects.

### Using Spread with Arrays:

```js
const fruits = ["apple", "banana", "cherry"];
const moreFruits = ["orange", ...fruits, "grape"];

console.log(moreFruits);
// Output: ["orange", "apple", "banana", "cherry", "grape"]
```

### Using Spread with Objects:

```js
const person = {name: "Alice", age: 25};
const updatedPerson = {...person, city: "New York"};

console.log(updatedPerson);
// Output: { name: "Alice", age: 25, city: "New York" }
```

**Why is the spread operator beneficial?**
- It simplifies copying and merging arrays or objects.
- It avoids modifying the original data (maintains immutability).
