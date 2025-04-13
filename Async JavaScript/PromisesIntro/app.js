const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 and 4 seconds
  setTimeout(() => {
    if (delay === 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 and 4 seconds
    setTimeout(() => {
      if (delay === 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCallback(
  "book.com",
  (response) => {
    console.log(response);
    console.log("1st Data received!");
    fakeRequestCallback(
      "book.com/page2",
      (response) => {
        console.log(response);
        console.log("2nd Data received!");
        fakeRequestCallback(
          "book.com/page3",
          (response) => {
            console.log(response);
            console.log("3rd Data received!");
          },
          (error) => {
            console.log(error);
            console.log("3rd Error!");
          }
        );
      },
      (error) => {
        console.log(error);
        console.log("2nd Error!");
      }
    );
  },
  (error) => {
    console.log(error);
    console.log("1st Error!");
  }
);
