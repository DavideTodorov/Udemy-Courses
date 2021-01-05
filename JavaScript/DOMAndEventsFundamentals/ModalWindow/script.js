"use strict";

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

for (let i = 0; i < buttonsShowModal.length; i++) {
  buttonsShowModal[i].addEventListener("click", openModal);
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
