"use strict";

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", updateText);

function updateText(inputName) {
  outputName.textContent = inputName.target.value;
  if (inputName.target.value == "") {
    outputName.textContent = "незнакомец";
  }
}
