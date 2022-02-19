// arguments object - no longer bound with arrow functions

//arguments will prints in this case
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(50, 2));

//arguments will not prints in this case and return an error (not defined)
const add2 = (a, b) => {
  //console.log(arguments);
  return a + b;
};

// this keyword - no longer bound

//es5
// In this case we will get error because this.name
//const user = {
// name: "Muhannad",
//cities: ["Kristianstand", "Malmö", "Stockholm"],
//printPlacesLived: function () {
// this.cities.forEach(function (city) {
//  console.log(this.name + " has lived in " + city);
//});
// },
//};

//user.printPlacesLived();

// es6
// in es6 it will work
const user = {
  name: "Muhannad",
  cities: ["Kristianstand", "Malmö", "Stockholm"],
  //Two ways
  //printPlacesLived: function(){}
  printPlacesLived() {
    return this.cities.map((city) => this.name + "has lived in " + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplier: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
// using map
