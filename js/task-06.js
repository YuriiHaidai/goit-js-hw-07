"use strict";

const validationInput = document.querySelector("#validation-input");
const inputLength = validationInput.getAttribute("data-length");

function val() {
  if (validationInput.value.length == inputLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}

validationInput.addEventListener("blur", val);
