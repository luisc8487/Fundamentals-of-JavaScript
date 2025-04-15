// const sing = async () => {
//   throw new Error("I am a bad singer!");
//   return "LA LA LA LA";
// };

// // The function is declared as async, so it returns a promise
// sing()
//   .then((data) => {
//     console.log("Promise resolved with: ", data);
//   })
//   .catch((err) => {
//     console.log("Promise rejected with: ", err.message);
//   });

// The use of Async Keyword
// const login = async (username, password) => {
//   if (!username || !password) {
//     throw new Error("Please provide username and password");
//   }
//   if (password === "luis") {
//     return "Welcome back, Luis!";
//   }
// };

// login("lucho", "luis")
//   .then((msg) => {
//     console.log("Login successful!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Login failed: ", err.message);
//   });

const delayColorPromise = (newColor, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

// delayColorPromise("red", 1000)
//   .then(() => delayColorPromise("orange", 1000))
//   .then(() => delayColorPromise("yellow", 1000))
//   .then(() => delayColorPromise("green", 1000))
//   .then(() => delayColorPromise("blue", 1000))
//   .then(() => delayColorPromise("purple", 1000));

// Using async/await to make the code cleaner
const rainbow = async () => {
  await delayColorPromise("red", 1000);
  await delayColorPromise("orange", 1000);
  await delayColorPromise("yellow", 1000);
  await delayColorPromise("green", 1000);
  await delayColorPromise("blue", 1000);
  await delayColorPromise("purple", 1000);
  return "All done!";
};

// rainbow().then(() => console.log("END OF RAINBOW!"));

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();
