// Single Coniditional
const variable = true;

if (!variable) {
  console.log("This variable is true");
}else{
    console.log("This variable is false");
}

// Multiple Conditionals
const age = 18;

if(age >= 18){
    console.log("You are an adult");
}else if(age >= 13){
    console.log("You are a teenager");
}else{
    console.log("You are a child");
}

// Nested Conditionals
const password = prompt("Enter your password");

if(password.length >= 8){
    if(password.indexOf(" ") === -1){
        console.log("Password is strong");
    }else{
        console.log("Password cannot contain spaces");
    }
}else{
    console.log("Password is too short");
}