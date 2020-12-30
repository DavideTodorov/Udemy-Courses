'use strict';

/*
LECTURE: Iteration: The for Loop

    1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): `Voter number 1 is currently voting`
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}


/*
LECTURE: Looping Arrays, Breaking and Continuing

    1. Let's bring back the 'populations' array from a previous assignment

    2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier

    3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

const populations = new Array(1441000000, 13000000, 7000000, 33000000);

const calcPopulationPercentages = function (currPopulation) {
    return currPopulation / 7900000000 * 100;
}

const percentages = new Array(populations.length);

for (let i = 0; i < populations.length; i++) {
    percentages[i] = calcPopulationPercentages(populations[i]);
}

console.log(percentages);

if (percentages.length === populations.length) {
    console.log("Both arrays have the same length!")
}


/*
LECTURE: Looping Backwards and Loops in Loops

    1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

    2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let outerIndex = 0; outerIndex < listOfNeighbours.length; outerIndex++) {
    let innerArr = listOfNeighbours[outerIndex];
    
    for (let innerIndex = 0; innerIndex < innerArr.length; innerIndex++) {
        console.log(`Neighbour: ${innerArr[innerIndex]}`);
    }
}