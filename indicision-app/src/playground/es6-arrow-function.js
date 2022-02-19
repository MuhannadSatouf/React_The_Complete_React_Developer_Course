//es5
const square = function (x) {
  return x * x;
};

function square2(x) {
  return x * x;
}
console.log(square(8));

//es6

//First way
const squareArrow = (x) => {
  return x * x;
};

//Second way
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(10));
console.log(squareArrow(9));

const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Muhannad Satouf"));

const getFirstName2 = (fullName) => {
  return fullName.split(" ")[0];
};

console.log(getFirstName2("Muhannad Satouf"));
