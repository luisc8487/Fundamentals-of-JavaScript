function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        let innerVariable = "I'm inside!";
        console.log(outerVariable); // Accessible
        console.log(innerVariable); // Accessible
    }

    innerFunction();
    // console.log(innerVariable); // Unaccessible, would throw an error
}

outerFunction();

// Block Scope Example
{
    let blockVariable = "I'm in a block!";
    console.log(blockVariable); // Accessible
}

// Lexical Scope Example
function lexicalScopeExample() {
    let lexicalVariable = "I'm in the outer function!";

    function innerFunction() {
        console.log(lexicalVariable); // Accessible due to lexical scoping
    }

    innerFunction();
}
lexicalScopeExample();

// Higher Order Function Example
function higherOrderFunction(callback) {
    console.log("Before executing the callback");
    callback();
    console.log("After executing the callback");
}

function sayHello() {
    console.log("Hello, World!");
}

higherOrderFunction(sayHello);

// Function Returning Another Function Example
function outerFunction() {
    return function innerFunction() {
        console.log("I'm the inner function!");
    };
}

const innerFunc = outerFunction(); // Call outerFunction to get innerFunction
innerFunc(); // Call the inner function returned by outerFunction

// Defining a Method in an Object Example
const myObject = {
    myMethod: function() {
        console.log("I'm a method inside an object!");
    }
};

myObject.myMethod(); // Call the method inside the object

// Shothand Method Definition Example
const anotherObject = {
    anotherMethod() {
        console.log("I'm a shorthand method inside an object!");
    }
};

anotherObject.anotherMethod(); // Call the shorthand method inside the object

// This Keyword Example
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // Call the method, 'this' refers to the person object  

// Try / Catch Example
try {
    // Code that may throw an error
    let result = riskyFunction(); // Assume this function is not defined
}
catch (error) {
    console.error("An error occurred:", error.message);
}