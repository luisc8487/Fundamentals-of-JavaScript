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

*This content has been provided by Colt Steele's course, The Web Developer Bootcamp 2025*

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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
let fruits = ['apple', 'banana', 'cherry'];
```
In this example, the array `fruits` stores three string values. The first element (`'apple'`) is at index `0`, the second element (`'banana'`) is at index `1`, and so on.

## How Arrays are Stored in Memory
When you create an array and assign it to a variable, the variable itself doesn't store the array. Instead, it stores a reference to the array's location in memory. This is why comparing two identical arrays results in `false`.

```js
let arr1 = [1,2,3];
let arr2 = [1,2,3];

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
  name: 'John',
  age: 30,
  hobbies: ['reading', 'gaming'],
  isStudent: false
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
console.log(person['age']); // Output: 31
person['isStudent'] = true; // Modifies the isStudent property
```

