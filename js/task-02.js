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

ingredients.reduce((acc, item) => {
  const createLi = document.createElement("li");
  createLi.insertAdjacentHTML("afterbegin", item);
  list.appendChild(createLi);
});
