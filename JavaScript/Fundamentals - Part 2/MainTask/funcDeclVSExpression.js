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

/*
LECTURE: Functions Calling Other Functions
    1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'

    2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier

    3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation(country, population) {
    const averagePopulationPercentage = percentageOfWorld3(population);
    return `${country} has ${population / 1000000} million people, which is about ${averagePopulationPercentage.toFixed(1)}% of the world.`
}

console.log(describePopulation("China", 1441000000));