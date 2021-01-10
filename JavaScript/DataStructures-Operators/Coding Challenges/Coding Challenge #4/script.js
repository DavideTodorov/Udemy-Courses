"use strict";

/*
Coding Challenge #4
    Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
    underscore_case
    first_name
    Some_Variable
    calculate_AGE
    delayed_departure
Should produce this output (5 separate console.log outputs):
    underscoreCase ✅
    firstName ✅✅
    someVariable ✅✅✅
    calculateAge ✅✅✅✅
    delayedDeparture ✅✅✅✅✅
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const camelCaseWords = new Array();
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const textArr = text.split("\n");

  for (const [i, word] of textArr.entries()) {
    const newWordArr = word.trim().split("_");
    let firstWord = newWordArr[0];
    let secondWord = newWordArr[1];

    firstWord = firstWord.toLocaleLowerCase();
    secondWord =
      secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();

    const newWord = firstWord + secondWord;
    console.log(`${newWord.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
  }
});
