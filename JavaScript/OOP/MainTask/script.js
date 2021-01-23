"use strict";

//Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const david = new Person("David", 2002);
console.log(david);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

david.calcAge();
