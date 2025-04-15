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
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayColor("red", 1000, () => {
//   delayColor("orange", 1000, () => {
//     delayColor("yellow", 1000, () => {
//       delayColor("green", 1000, () => {
//         delayColor("blue", 1000, () => {
//           delayColor("purple", 1000);
//         });
//       });
//     });
//   });
// });

// Using promises to make the code cleaner
const delayColorPromise = (newColor, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

delayColorPromise("red", 1000)
    .then(() => delayColorPromise("orange", 1000))
    .then(()=> delayColorPromise("yellow", 1000))
    .then(() => delayColorPromise("green", 1000))
    .then(() => delayColorPromise("blue", 1000))
    .then(() => delayColorPromise("purple", 1000))