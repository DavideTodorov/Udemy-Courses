"use strict";

//Select elements
const diceImgElement = document.querySelector(".dice");
const rollDiceButton = document.querySelector(".btn--roll");

const player0Score = document.getElementById("score--0");
const player1Score = document.getElementById("score--1");

const player0CurrentScore = document.getElementById("current--0");
const player1CurrnetScore = document.getElementById("current--1");

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

//Starting conditions
diceImgElement.classList.add("hidden");

//Roll dice number
const switchPlayer = function (player, currPlayerScore) {
  if(player.classList.contains("player--0")){
    currentScore =  
  }else{

  }
};

let currentScore = 0;

const handleDiceBehaviour = function (diceNum) {
  diceImgElement.classList.remove("hidden");
  diceImgElement.src = `dice-${diceNum}.png`;

  player0CurrentScore.textContent = currentScore;
  if (diceNum !== 1) {
    //increase score
    currentScore += diceNum;

    if (player0Element.classList.contains("player--active")) {
      player0CurrentScore.textContent = currentScore;
    } else {
      player1CurrnetScore.textContent = currentScore;
    }
  } else {
    //switch players
  }
};

rollDiceButton.addEventListener("click", function () {
  if (diceImgElement.classList.contains("hidden")) {
    diceImgElement.classList.remove("hidden");
  }

  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

  handleDiceBehaviour(randomDiceNumber);
});
