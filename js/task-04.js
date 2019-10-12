"use strict";

let counterValue = 0;

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const value = document.querySelector("#value");

function increment() {
  // value.innerHTML = counterValue += 1;
  value.textContent = counterValue += 1;
}
function decrement() {
  value.innerHTML = counterValue -= 1;
}

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
