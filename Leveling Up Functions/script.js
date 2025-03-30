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