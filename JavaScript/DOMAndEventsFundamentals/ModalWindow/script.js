"use strict";

//Store all fields 
const buttonsShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Listen for press to open modal window
for (let i = 0; i < buttonsShowModal.length; i++) {
  buttonsShowModal[i].addEventListener("click", openModal);
}

//Close modal when click close button
buttonCloseModal.addEventListener("click", closeModal);

//Close modal when click overlay
overlay.addEventListener("click", closeModal);

//Close when "Esc" is pressed
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});