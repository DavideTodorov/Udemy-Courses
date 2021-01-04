"use strict";

const numToGuess = Math.trunc(Math.random() * 20) + 1;

let currScore = Number(document.querySelector(".score").textContent);

//todo: remove
document.querySelector(".number").textContent = numToGuess;

document.querySelector(".check").addEventListener("click", function () {
  const enteredNum = Number(document.querySelector(".guess").value);

  //If input is invalid or empty
  if (enteredNum < 1 || enteredNum > 20) {
    document.querySelector(".message").textContent =
      "Enter number between 1 and 20!";

    //If there is a win condition
  } else if (enteredNum === numToGuess) {
    document.querySelector(".message").textContent = "Correct number!";

    document.querySelector("body").style.backgroundColor = 
    "#60b347";

    document.querySelector(".number").style.width = "30rem";


    //If entered num is greater than the num to guess
  } else if (enteredNum > numToGuess) {
    document.querySelector(".message").textContent = "Too high!";
    currScore--;

    //If entered num is lower than the num to guess
  } else if (enteredNum < numToGuess) {
    document.querySelector(".message").textContent = "Too low!";
    currScore--;
  }


  //If your score goes to 0
  if (currScore <= 0) {
    document.querySelector(".message").textContent =
      'Your score is 0! You lost! Press "Again" to play again!';
    document.querySelector(".check").disabled = true;
  }

  document.querySelector(".score").textContent = currScore;
});
