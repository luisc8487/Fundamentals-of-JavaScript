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