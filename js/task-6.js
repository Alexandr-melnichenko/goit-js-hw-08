function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// крок 1 - підтягую з HTML змінні
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
let inputArea = document.querySelector('#controls input[type="number"]');
const btnDestroy = document.querySelector("button[data-destroy]");


// крок 3 - створюю функцію що рендерить діви (btnCreateFunction)

function btnCreateFunction () {
 let amount =  inputArea.valueAsNumber;
 let sizeBox = 30;
 let divArray = [];

const createBoxes = amount => {
if (amount >= 1 && amount <= 100) {
  
  for (let i = 1; i <= amount; i += 1){
    sizeBox += 10;
    let randomColor = getRandomHexColor();
    divArray.push(`<div style="background-color: ${randomColor}; width: ${sizeBox}px; height: ${sizeBox}px;"></div>`);
  }
  boxes.innerHTML = divArray.join('');
  
}
}
createBoxes(amount); //викликаю функцію всередині функції
inputArea.value = ''; //зачищаю інпут
}

// крок 4 - створюю функцію по зачистці (clearAll)
const clearAll = () => {
  boxes.innerHTML = '';
  inputArea.value = '';
}


// крок 2 - створюю слухачів
btnCreate.addEventListener("click", btnCreateFunction);
btnDestroy.addEventListener("click", clearAll);

