"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};


//Generate random number to guess in range [1...20]
let numToGuess = Math.trunc(Math.random() * 20) + 1;


//Logic for Again button
document.querySelector(".again").addEventListener("click", function () {
  numToGuess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  currScore = 20;

  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});


let currScore = 20;
let highscore = 0;


//Check button logic
document.querySelector(".check").addEventListener("click", function () {
  const enteredNum = Number(document.querySelector(".guess").value);

  //If input is invalid or empty
  if (enteredNum < 1 || enteredNum > 20) {
    displayMessage("Enter number between 1 and 20!");

    
    //If there is a win condition
  } else if (enteredNum === numToGuess) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = numToGuess;

    //Update highscore
    if (currScore > highscore) {
      highscore = currScore;
      document.querySelector(".highscore").textContent = highscore;
    }


    //If entered num is greater than the num to guess
  } else if (enteredNum > numToGuess) {
    displayMessage("Too high!");
    currScore--;


    //If entered num is lower than the num to guess
  } else if (enteredNum < numToGuess) {
    displayMessage("Too low!");
    currScore--;
  }


  //If your score goes to 0
  if (currScore <= 0) {
    displayMessage("Your score is 0! You lost! Press \"Again\" to play again!");
    document.querySelector(".check").disabled = true;
  }

  document.querySelector(".score").textContent = currScore;
});