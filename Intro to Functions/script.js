// declared a function with no parameters
function singSong() {
  console.log("Twinkle, twinkle, little star");
  console.log("How I wonder what you are");
  console.log("Up above the world so high");
  console.log("Like a diamond in the sky");
}
// call the function twice
singSong();
singSong();

///////////////////
// Arguments
///////////////////

// declaring a function with one parameter and calling it
function greet(firstname){
    console.log(`Hello ${firstname}`);
};

greet("John");


///////////////////
// Return
///////////////////

// declaring a function with one parameter and calling it with a return statement
function add(num1, num2){
    return num1 + num2
}

console.log(add(1, 2));