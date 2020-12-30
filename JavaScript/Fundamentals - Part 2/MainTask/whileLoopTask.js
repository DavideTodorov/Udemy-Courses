'use strict';

/*
LECTURE: The while Loop

    1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')

    2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

const populations = new Array(1441000000, 13000000, 7000000, 33000000);

const calcPopulationPercentages = function (currPopulation) {
    return currPopulation / 7900000000 * 100;
}

const percentages = new Array(populations.length);

let index = 0;
while (index < populations.length) {
    percentages[index] = calcPopulationPercentages(populations[index]);
    index++;
}

console.log(percentages);

if (percentages.length === populations.length) {
    console.log("Both arrays have the same length!")
}