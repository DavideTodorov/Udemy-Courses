'use strict';

/*
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
    1. Create an array 'bills' containing all 10 test bill values

    2. Create empty arrays for the tips and the totals ('tips' and 'totals')

    3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus:

    4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array.
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array(bills.length);
const totalValue = new Array(bills.length);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totalValue[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totalValue);


let totalToPayAverage = 0;
for (let i = 0; i < totalValue.length; i++) {
    totalToPayAverage += totalValue[i];
}

totalToPayAverage /= totalValue.length;

console.log("Average: " + totalToPayAverage.toFixed(2))