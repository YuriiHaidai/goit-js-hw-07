"use strict";

const range = document.getElementById("font-size-slider");
const text = document.getElementById("text");

range.addEventListener("input", changeFontSize);

function changeFontSize() {
  text.style.fontSize = `${range.value}px`;
}
