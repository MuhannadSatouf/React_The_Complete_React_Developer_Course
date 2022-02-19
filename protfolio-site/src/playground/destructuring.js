//Object destructuring

// const person = {
//   age: 32,
//   location: {
//     city: "Kristianstad",
//     temp: -4,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(name, age);
// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// //We can access the variable like bellow, we can rename them, and we can give them a default values.
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-publisher" } = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = ["Ängwsvägen 19 A", "Kristianstad", "Skåne", "29133"];
const [street, city, state, zip] = address;

//If i do not have others
//const [, , state ] = address;
//And we can set a default :) as objects
console.log(
  `The street address ${street}, City ${city}, state ${state}, zip code ${zip} `
);
