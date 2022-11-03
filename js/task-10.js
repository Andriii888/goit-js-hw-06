const refs = {
  boxControleRef: document.querySelector('#controls'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  perfomsBoxRef: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


refs.btnCreateRef.addEventListener('click', createBoxes);

function createBoxes() { 

 let amount = refs.boxControleRef.firstElementChild.value;

  for (let i = 1; i <= amount; i += 1) {

    let createSize = 0;
    if (i === 1) { createSize = 30 }
    else { createSize = (i + 3) * 10 };
    
     const styleForBox = document.createElement('style');
  document.head.appendChild(styleForBox);
    styleForBox.textContent = `.box_style${i}{
    width : ${createSize}px;
    height : ${createSize}px;
    background-color : ${getRandomHexColor()};`;

    const elements = document.createElement('div');
    elements.classList.add(`box_style${i}`);
     refs.perfomsBoxRef.appendChild(elements);
  
  };
}; 

refs.btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes(event) { 
  refs.boxControleRef.firstElementChild.value = ''; 
  refs.perfomsBoxRef.textContent = "";
};

