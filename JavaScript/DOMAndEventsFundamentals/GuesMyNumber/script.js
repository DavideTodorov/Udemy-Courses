"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const enteredNum = Number(document.querySelector(".guess").value);

  if (!enteredNum) {
    document.querySelector(".message").textContent = "No number entered!";
  }
});