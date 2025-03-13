# Fundamentals-of-JavaScript

## Table of Contents
1. [Introduction](#introduction)
2. [What is Decision Making?](#what-is-decision-making)
    - [What is Boolean Logic?](#what-is-boolean-logic)
    - [Comparison Operators](#comparison-operators)
    - [Logic Operators](#logic-operators)
3. [Conclusion](#conclusion)

## JavaScript Decision Making: Boolean Logic, Comparsion Operators, and Logical Operations

### Introduction
This guide will help you understand decision-making in JavaScript. Decision-making involves evaluating conditions and executing code based on those conditions. Even if you're not a technical engineer, this document will make it easy for you to grasp the concepts of Boolean logic, comparison operators, and logical operations.

*This content has been provided by Colt Steele's course, The Web Developer Bootcamp 2025*

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