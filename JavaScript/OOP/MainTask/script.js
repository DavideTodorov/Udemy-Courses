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

//ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1995);
console.log(jessica);
jessica.calcAge();
console.log(jessica.fullName);

//Inheritance
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName}`);
};

const mike = new Student("Mike", 2000, "IT");

//Inheritance with ES6 classes

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  calcAge() {
    console.log(`${this._fullName} is ${2021 - this.birthYear} years old.`);
  }
}

const alice = new StudentCl("Alice Red", 2003, "IT");
alice.calcAge();

//Object.create inheritance
const CarProto = {
  init(make, year) {
    this.make = make;
    this.year = year;
  },

  displayCar() {
    console.log(`This ${this.make} was made in ${this.year}`);
  },
};

const SportCarProto = Object.create(CarProto);
SportCarProto.init = function (make, year, hp) {
  CarProto.init.call(this, make, year);
  this.hp = hp;
};

const audi = Object.create(SportCarProto);
audi.init("Audi", 2015, 200);
audi.displayCar();