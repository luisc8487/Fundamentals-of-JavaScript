# Fundamentals-of-JavaScript

## Table of Contents

1. [JavaScript Decision Making: Boolean Logic, Comparsion Operators, and Logical Operations](#javascript-decision-making-boolean-logic-comparsion-operators-and-logical-operations)
   - [Introduction](#introduction)
   - [What is Decision Making?](#what-is-decision-making)
     - [What is Boolean Logic?](#what-is-boolean-logic)
     - [Comparison Operators](#comparison-operators)
     - [Logic Operators](#logic-operators)
   - [Conclusion](#conclusion)
2. [Understanding JavaScript Arrays](#understanding-javascript-arrays)
   - [Introduction](#introduction)
   - [What is an Array?](#what-is-an-array?)
   - [How Arrays are Stored in Memory](#how-arrays-are-stored-in-memory)
   - [Modifying Arrays with Built-in Methods](#modifying-arrays-with-built-in-methods)
   - [Comparing Arrays](#comparing-arrays)
   - [Conclusion](#conclusion)
3. [Understanding JavaScript Object Literals](#understanding-javascript-object-literals)
   - [Introduction](#introduction)
   - [What is an Object Literal?](#what-is-an-object-literal?)
   - [Accessing and Modifying Object Properties](#accessing-and-modifying-object-properties)
     - [1. Dot Notation](#1-dot-notation)
     - [2. Square Notation](#2-square-notation)
   - [Adding New Properties](#adding-new-properties)
   - [Nesting Arrays & Objects](#nesting-arrays-&-objects)
   - [How Objects are Stored in Memory](#how-objects-are-stored-in-memory)
   - [Conclusion](#conclusion)
4. [Loops in JavaScript](#loops-in-javascript)
   - [Introduction](#introduction)
   - [Why Use Loops?](#why-use-loops?)
   - [Types of Loops](#types-of-loops)
     - [For Loops](#for-loops)
     - [For...Of Loops](#forof-loops)
     - [Iterating through Strings and Arrays](#iterating-through-strings-and-arrays)
   - [Project Todo List App](#project-todo-list-app)
     - [How it Works](#how-it-works)
   - [Conclusion](#conclusion)

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

## Introduction

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

## Introduction

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

## Introduction

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
