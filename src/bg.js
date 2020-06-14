const body = document.querySelector("body");

function genRandom() {
  const number = Math.floor(Math.random() * 4 + 1);
  return number;
}

function printImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();
