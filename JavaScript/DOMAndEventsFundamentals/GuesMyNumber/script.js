"use strict";

const numToGuess = Math.trunc(Math.random() * 20) + 1;

let currScore = Number(document.querySelector(".score").textContent);

//todo: remove
document.querySelector(".number").textContent = numToGuess;

document.querySelector(".check").addEventListener("click", function () {
  const enteredNum = Number(document.querySelector(".guess").value);

  if (enteredNum < 1 || enteredNum > 20) {
    document.querySelector(".message").textContent =
      "Enter number between 1 and 20!";
  } else if (enteredNum === numToGuess) {
    document.querySelector(".message").textContent = "Correct number!";
  } else if (enteredNum > numToGuess) {
    document.querySelector(".message").textContent = "Too high!";
    currScore--;
  } else if (enteredNum < numToGuess) {
    document.querySelector(".message").textContent = "Too low!";
    currScore--;
  }

  if (currScore <= 0) {
    document.querySelector(".message").textContent =
      "Your score is 0! You lost! Press \"Again\" to play again!";
      document.querySelector(".check").disabled = true
  }

  document.querySelector(".score").textContent = currScore;
});
