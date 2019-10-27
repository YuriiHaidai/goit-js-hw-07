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
  const arr = [];
  const createLi = document.createElement("li");
  ingredients.forEach(ingredient => {
    createLi.textContent = ingredient;
    arr.push(createLi.outerHTML);
  });
  return arr.join("");
}

list.insertAdjacentHTML("afterbegin", createList());
