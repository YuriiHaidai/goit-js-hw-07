"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const list = document.querySelector("#gallery");

function createGalery() {
  return images.map(image => {
    const elemLi = document.createElement("li");
    const elemImg = document.createElement("img");
    elemImg.setAttribute("src", image.url);
    elemImg.setAttribute("alt", image.alt);
    elemLi.appendChild(elemImg);
    return elemLi;
  });
}

list.append(...createGalery());
