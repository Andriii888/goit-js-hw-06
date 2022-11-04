const changeColorElementRef = document.querySelector('.widget')
changeColorElementRef.classList.add('js-widget');
const changeColorBtnRef = document.querySelector('.change-color');
const currentColorTextRef = document.querySelector('.color');
const docStyleRef = document.querySelector('style');

changeColorBtnRef.addEventListener('click', onCreateColor);

function onCreateColor(event) {
  const getColorFn = getRandomHexColor();
  document.body.style.backgroundColor = getColorFn;
  currentColorTextRef.textContent = `${getColorFn}`;
};

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
