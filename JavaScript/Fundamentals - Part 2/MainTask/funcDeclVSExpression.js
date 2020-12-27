'use strict';

/*
LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population

    2. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(currPopulation) {
    return currPopulation / 7900000000 * 100;
}

const currPopulationPercentage = percentageOfWorld1(1441000000);
console.log(`${currPopulationPercentage.toFixed(1)}%`);

const percentageOfWorld2 = function (currPopulation) {
    return currPopulation / 7900000000 * 100;
}

const currPopulationPercentage2 = percentageOfWorld2(1441000000);
console.log(`${currPopulationPercentage2.toFixed(1)}%`);

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = currPopulation => currPopulation / 7900000000 * 100;
const currPopulationPercentage3 = percentageOfWorld3(1441000000);
console.log(`${currPopulationPercentage3.toFixed(1)}%`);