//What to do?

/*
- Getting the base key on the iteration function
- use that key to dictate whether the other element that iteration
  - if element iteration exist create an array with the element in it
  - if not add an empty array 
- make sure this is surround within an object

- HASHMap


*/

// The Use of a HashMap

// function groupBy(array, iteratee) {
//   // your code goes here
//   const hashmap = new Map();
//   // Getting the base key on the iteration function
//   for (el of array) {
//     const key = iteratee(el);
//     console.log(key);

//     if (!hashmap.has(key)) {
//       hashmap.set(key, []);
//     }
//     // Put the element into the appropriate group
//     hashmap.get(key).push(el);
//   }
//   return hashmap;
// }

// // debug your code below
// console.log(groupBy([1.1, 2.2, 2.9], Math.floor));

// The Use of a Regular Object

// function groupBy(array, iteratee) {
//   // your code goes here
//   const obj = {};

//   for (let el of array) {
//     const key = iteratee(el);

//     if (!obj[key]) {
//       obj[key] = [];
//     }
//     obj[key].push(el);
//   }
//   return obj;
// }

// // debug your code below
// console.log(groupBy([1.1, 2.2, 2.9], Math.floor));
