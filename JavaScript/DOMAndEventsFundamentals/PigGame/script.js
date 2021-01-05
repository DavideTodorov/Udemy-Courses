"use strict";

//Select elements
const diceImgElement = document.querySelector(".dice");
const rollDiceButton = document.querySelector(".btn.btn--roll");

//Starting conditions
diceImgElement.classList.add("hidden");

//Roll dice implementation
let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

const handleDicePicDisplay = function (diceNum) {
  diceImgElement.classList.remove("hidden");

  if (diceNum === 1) {
    diceImgElement.src = "dice-1.png";
  } else if (diceNum === 2) {
    diceImgElement.src = "dice-2.png";
  } else if (diceNum === 3) {
    diceImgElement.src = "dice-3.png";
  } else if (diceNum === 4) {
    diceImgElement.src = "dice-4.png";
  } else if (diceNum === 5) {
    diceImgElement.src = "dice-5.png";
  } else if (diceNum === 6) {
    diceImgElement.src = "dice-6.png";
  }
};
