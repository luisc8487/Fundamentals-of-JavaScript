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
const fullAddress = restaurant["address" + "city" + "state" + "zipcode"];

console.log(fullAddress);
