function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let getBody = document.querySelector("body");
const btn = document.querySelector("button.change-color");
let spanColor = document.querySelector("span.color");

const btnClick = event => {
  event.preventDefault();
  let clr = getRandomHexColor();
getBody.style.backgroundColor = clr;
spanColor.style.backgroundColor = clr;
};

btn.addEventListener("click", btnClick);

