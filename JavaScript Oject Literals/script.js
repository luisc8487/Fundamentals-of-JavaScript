// const fitBitData = {
//     totalSteps: 10000,
//     totalMiles: 10,
//     avgCalories: 500,
//     workoutsThisWeek: ["day1", "day2", "day3"],
//     avgGoodSleep: '2:13'
// }

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
const fullAddress =
  restaurant["address"] +
  ", " +
  restaurant["city"] +
  ", " +
  restaurant["state"] +
  " " +
  restaurant["zipcode"];

console.log(fullAddress); // 99 Johnson Ave, Brooklyn, NY 11206

// Nesting Arrays & Objects

const comments = [
  {
    user: "John",
    comment: "This is a comment",
  },
  {
    user: "Jane",
    comment: "This is another comment",
  },
];

console.log(comments[0].user);

const comments2 = [
  {
    user: "John",
    comment: "This is a comment",
  },
  {
    user: "Jane",
    comment: "This is another comment",
  },
];

console.log(comments2[0].user);
