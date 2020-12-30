'use strict';

/*
LECTURE: Introduction to Objects

1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country: "Bulgaria",
    capital: "Sofia",
    language: "Bulgarian",
    population: 7000000,
    neighbours: ["Romania", "Greece", "Turkey", "Macedonia", "Serbia"],

    describe: function () {
        return `${this.country} has ${this.population / 1000000} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};


/*
LECTURE: Dot vs. Bracket Notation

    1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'

    2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/

// console.log(`${myCountry.country} has ${myCountry.population / 1000000} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2000000;
myCountry["population"] = myCountry["population"] - 2000000;

if (myCountry.population === 7000000) {
    console.log("Successfuly modified population!");
}


/*
LECTURE: Object Methods

    1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.

    2. Call the 'describe' method

    3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property
*/

console.log(myCountry.describe());

console.log(myCountry.checkIsIsland());
console.log(myCountry.isIsland);