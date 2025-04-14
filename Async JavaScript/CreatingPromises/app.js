// Creating a promise
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.5) {
//         resolve("Your fake data here!");
//       }
//       reject("Request failed!");
//     }, 1000);
//   });
// };

// Using the promise
// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("Request succeeded!");
//     console.log("Data is: ", data);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const delayColor = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay);
// };

