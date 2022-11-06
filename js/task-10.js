const refs = {
  boxControleRef: document.querySelector('#controls'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  perfomsBoxRef: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
};


refs.btnCreateRef.addEventListener('click', createBoxes);

function createBoxes() { 

  let amount = refs.boxControleRef.firstElementChild.value;
  
    let elementsString = "";

  for (let i = 1; i <= amount; i += 1) {

    let createSize = (i + 2) * 10;
    
    let elementString = `<div style="
    width:${createSize}px;
    height: ${createSize}px; 
    background-color: ${getRandomHexColor()};"></div>`;

    elementsString += elementString;
  };
  refs.perfomsBoxRef.innerHTML += elementsString;
}; 

refs.btnDestroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes(event) { 
  refs.boxControleRef.firstElementChild.value = ''; 
  refs.perfomsBoxRef.textContent = "";
};
////////////////////////не працює///////////////////////
// let element = document.createElement('div');
//     element.style.width= createSize;
//     element.style.height = createSize;
//     element.style.fontSize = "24px";
//     element.style.backgroundColor = `${getRandomHexColor()}`;
//      console.log(element);
//     elements.push(element);

////////////////////////////перша ///////////////////////////
// function createBoxes() { 

//  let amount = refs.boxControleRef.firstElementChild.value;
//     let elementsString = "";

//   for (let i = 1; i <= amount; i += 1) {

//     let createSize = 0;
//     if (i === 1) { createSize = 30 }
//     else { createSize = (i + 3) * 10 };
//     let createSize = (i + 2) * 10;
    
//      const styleForBox = document.createElement('style');
//   document.head.appendChild(styleForBox);
//     styleForBox.textContent = `.box_style${i}{
//     width : ${createSize}px;
//     height : ${createSize}px;
//     background-color : ${getRandomHexColor()};`;

//     const elements = document.createElement('div');
//     elements.classList.add(`box_style${i}`);
//      refs.perfomsBoxRef.appendChild(elements);
  
//     let elementString = `<div style="width:${createSize}px;
//     height: ${createSize}px; background-color: ${getRandomHexColor()};"></div>`;
//     elementsString += elementString;
//   };
//   refs.perfomsBoxRef.innerHTML += elementsString;
// }; 



