"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const list = document.querySelector("#ingredients");

function createList() {
  return ingredients.map(ingredient => {
    const elemLi = document.createElement("li");
    elemLi.textContent = ingredient;
    return elemLi;
  });
}

list.append(...createList());
