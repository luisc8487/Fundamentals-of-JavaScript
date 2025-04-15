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
// const rainbow = async () => {
//   await delayColorPromise("red", 1000);
//   await delayColorPromise("orange", 1000);
//   await delayColorPromise("yellow", 1000);
//   await delayColorPromise("green", 1000);
//   await delayColorPromise("blue", 1000);
//   await delayColorPromise("purple", 1000);
//   return "All done!";
// };

// // rainbow().then(() => console.log("END OF RAINBOW!"));

// async function printRainbow() {
//   await rainbow();
//   console.log("END OF RAINBOW!");
// }

// printRainbow();

// Handling Errors with Async/Await
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2 + 1) * 1000; // Random delay between 1 and 2 seconds
    setTimeout(() => {
      if (delay === 2000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeRequest() {
  try {
    let data1 = await fakeRequestPromise("yelp.com/api/coffee/page1");
    console.log(data1);
    let data2 = await fakeRequestPromise("yelp.com/api/coffee/page2");
    console.log(data2);
  } catch (err) {
    console.log("Caught an error: ", err);
  }
}
