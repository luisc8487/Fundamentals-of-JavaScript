// https://swap.dev/api/people/1/
const req = new XMLHttpRequest();

req.load = function () {
  console.log("It loaded");
  console.log(this);
};

req.error = function () {
  console.log("Error loading data");
  console.log(this);
};

req.open("GET", "https://swap.dev/api/people/1/");
req.send();
