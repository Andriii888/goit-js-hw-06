const changeColorElementRef = document.querySelector('.widget')
changeColorElementRef.classList.add('js-widget');
const changeColorBtnRef = document.querySelector('.change-color');
const currentColorTextRef = document.querySelector('.color');
const docStyleRef = document.querySelector('style');

changeColorBtnRef.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  let colorChoise = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  docStyleRef.textContent += `.js-widget{ background-color: ${colorChoise}}`;
  currentColorTextRef.textContent = `${colorChoise}`;
}
