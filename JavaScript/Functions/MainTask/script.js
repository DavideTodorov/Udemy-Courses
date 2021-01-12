"use strict";

/*
//=================
//Return functions:
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetingHey = greet("Hey");
greetingHey("David");

greet("Hello")("John");
*/

//=====================================
//Call and Apply methods for functions:
//Method to invoke
const book = function (flightNumber, personName) {
  const flightName = `${this.iataCode}${flightNumber}`;

  console.log(
    `${personName} booked a seat on ${this.airline} Air Lines for flight ${flightName}`
  );

  this.bookings.push({ flight: flightName, name: personName });
};

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

book.call(lufthansa, 123, "George");
book.call(lufthansa, 123, "David");
book.call(lufthansa, [333, "John"]);
console.log(lufthansa);

book.apply(eurowings, [443, "Michael"]);
book.apply(eurowings, [673, "Jonas"]);
book.apply(eurowings, [673, "Bobo"]);
console.log(eurowings);
