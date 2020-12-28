'use strict';

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const populations = new Array(1441000000, 13000000, 7000000, 33000000);

if (populations.length === 4) {
    console.log("Array \"populations\" has 4 elements");
} else {
    console.log("Array \"populations\" doesn't have 4 elements");
}


const calcPopulationPercentages = function (currPopulation) {
    return currPopulation / 7900000000 * 100;
}

const percentages = new Array(4);

for (let i = 0; i < percentages.length; i++) {
    percentages[i] = calcPopulationPercentages(populations[i]);
}

console.log(percentages);