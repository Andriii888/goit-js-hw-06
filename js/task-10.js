const refs = {
  boxControleRef: document.querySelector('#controls'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  perfomsBoxRef: document.querySelector('#boxes'),
};
const amount = refs.boxControleRef.firstElementChild.value;
let sizeOfBox = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
/////////////////////////////ще дописую/////////

refs.btnCreateRef.addEventListener('click',createBoxes)

function createBoxes(amount) { 
  const styleForBox = document.createElement('style');
  styleForBox.textContent = `.box_style{
    width : ${sizeOfBox}px;
    height : ${sizeOfBox}px;
    background-color : ${getRandomHexColor()};`;
  document.head.appendChild(styleForBox);

  const firstElement = document.createElement('div');
  firstElement.classList.add('box_style');
  console.log(firstElement.style.backgroundColor);

  if (amount > 1) {
    createAllBoxes();
    return refs.perfomsBoxRef.appendChild(firstElement);
}
     return refs.perfomsBoxRef.appendChild(firstElement);
 
}; 
function createAllBoxes(amount) {
  for (let i = 1; i <= amount;i += 1) {
    let otherElements = document.createElement('div');
    let sizeForOtherBox = sizeOfBox + 10;
    styleForBox.textContent += `.box_style${i}{
      width : ${sizeForOtherBox}px;
      height : ${sizeForOtherBox}px;
      background-color : ${getRandomHexColor()};`;

    firstElement.appendChild(otherElements);
    }
};

function createSize(number) {
  for (let i = 1; i <= number; i += 1) {
    let sizeOfBoxr = 30;
    sizeOfBoxr[i] = sizeOfBoxr[i]+10;
    console.dir(sizeOfBoxr[i])
   }
}
createSize(10);

function destroyBoxes() { 
  
};

