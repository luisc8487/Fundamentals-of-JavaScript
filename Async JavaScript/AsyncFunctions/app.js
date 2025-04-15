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
const login = async (username, password) => {
  if (!username || !password) {
    throw new Error("Please provide username and password");
  }
  if (password === "luis") {
    return "Welcome back, Luis!";
  }
};

login("lucho", "luis")
  .then((msg) => {
    console.log("Login successful!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Login failed: ", err.message);
  });
