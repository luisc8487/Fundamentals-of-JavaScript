// Push Method
const numbers = [2, 1, 4, 3, 5];
numbers.push(6);
console.log(numbers);

// Pop Method
numbers.pop();
console.log(numbers);   

// Shift Method
numbers.shift();
console.log(numbers);   

// Unshift Method   
numbers.unshift(0); 
console.log(numbers);

// Splice Method
numbers.splice(1, 2);
console.log(numbers);

// Slice Method
numbers.slice(1, 4);
console.log(numbers);

// More Methods
numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

//Concat Method
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = numbers1.concat(numbers2);
console.log(numbers3);  

// Join Method
const numbers4 = [1, 2, 3];
const numbers5 = numbers4.join('-');
console.log(numbers5);

// IndexOf Method
const numbers6 = [1, 2, 3];
const index = numbers6.indexOf(2);
console.log(index);

