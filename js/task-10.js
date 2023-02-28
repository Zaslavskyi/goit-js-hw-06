function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('[type = "number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function getNumber() {
  createBoxes(inputElement.value);
}

function createBoxes(number) {
  let size = 30;
  let newSize = 0;


  for (let index = 0; index < number; index ++) {
    let box = document.createElement('div');
    newSize = size + index * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px; background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}


createButton.addEventListener('click', getNumber);
destroyButton.addEventListener('click', destroyBoxes);