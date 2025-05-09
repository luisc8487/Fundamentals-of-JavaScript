// Single Coniditional
// const variable = true;

// if (!variable) {
//   console.log("This variable is true");
// }else{
//     console.log("This variable is false");
// }

// Multiple Conditionals
// const age = 18;

// if(age >= 18){
//     console.log("You are an adult");
// }else if(age >= 13){
//     console.log("You are a teenager");
// }else{
//     console.log("You are a child");
// }

// Nested Conditionals
// const password = prompt("Enter your password");

// if(password.length >= 8){
//     if(password.indexOf(" ") === -1){
//         console.log("Password is strong");
//     }else{
//         console.log("Password cannot contain spaces");
//     }
// }else{
//     console.log("Password is too short");
// }

// Falsey Values
// if(0){
//     console.log("Zero is truthy");
// }else{
//     console.log("Zero is falsey");
// }

// if(null){
//     console.log("Null is truthy");
// }else{
//     console.log("Null is falsey");
// }

// if(undefined){
//     console.log("Undefined is truthy");
// }else{
//     console.log("Undefined is falsey");
// }

// if(NaN){    
//     console.log("NaN is truthy");    
// }else{
//     console.log("NaN is falsey");
// }

// Logical Operators => AND, OR, NOT
const mystery = 'Password7'; 

if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

// OR Operator
const age = 25;

if(age >= 18 || age <= 65){
    console.log("You are an adult");
}else{
    console.log("You are not an adult");
}

// NOT Operator
if(!false){
    console.log("True");
}else{
    console.log("False");
}

// Switch Statement
const day = 'monday';

switch(day){
    case 'monday':
        console.log("Today is Monday");
        break;
    case 'tuesday':
        console.log("Today is Tuesday");
        break;
    case 'wednesday':
        console.log("Today is Wednesday");
        break;
    case 'thursday':    
        console.log("Today is Thursday");
        break;
    case 'friday':
        console.log("Today is Friday");
        break;
    case 'saturday':    
        console.log("Today is Saturday");
        break;        
    case 'sunday':                
        console.log("Today is Sunday");
        break;
    default:
        console.log("Not a valid day");
}