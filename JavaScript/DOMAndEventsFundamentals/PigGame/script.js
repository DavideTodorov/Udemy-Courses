"use strict";

//Select elements
const diceImgElement = document.querySelector(".dice");
const rollDiceButton = document.querySelector(".btn--roll");

const player0Score = document.getElementById("score--0");
const player1Score = document.getElementById("score--1");

const player0CurrentScore = document.getElementById("current--0");
const player1CurrentScore = document.getElementById("current--1");

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

//Starting conditions
diceImgElement.classList.add("hidden");

//Roll dice number
const switchPlayer = function (currPlayerScore, diceNumber) {
  if (player0Element.classList.contains("player--active")) {
    if (diceNumber !== 1) {
      currPlayerScore += Number(player0Score.textContent);
      player0Score.textContent = currPlayerScore;
    }
    player0CurrentScore.textContent = 0;
    player0Element.classList.remove("player--active");
    player1Element.classList.add("player--active");
    currentScore = 0;

  } else if (player1Element.classList.contains("player--active")) {
    if (diceNumber !== 1) {
      currPlayerScore += Number(player1Score.textContent);
      player1Score.textContent = currPlayerScore;
    }
    player1CurrentScore.textContent = 0;
    player1Element.classList.remove("player--active");
    player0Element.classList.add("player--active");
    currentScore = 0;
  }
};

//Method to handle Dice behaviour
let currentScore = 0;
const handleDiceBehaviour = function (diceNum) {
  diceImgElement.classList.remove("hidden");
  diceImgElement.src = `dice-${diceNum}.png`;


  if (diceNum !== 1) {
    //increase score
    currentScore += diceNum;

    if (player0Element.classList.contains("player--active")) {
      player0CurrentScore.textContent = currentScore;
    } else {
      player1CurrentScore.textContent = currentScore;
    }
    
  } else {
    //switch players
    switchPlayer(currentScore, 1);
  }
};

//Roll Dice Button
rollDiceButton.addEventListener("click", function () {
  if (diceImgElement.classList.contains("hidden")) {
    diceImgElement.classList.remove("hidden");
  }

  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

  handleDiceBehaviour(randomDiceNumber);
});
