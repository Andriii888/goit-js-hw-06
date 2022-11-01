const inputRangeRef = document.querySelector('#font-size-control');
const sizeTextRef = document.querySelector('#text');
sizeTextRef.classList.add('inputTextSize');



inputRangeRef.addEventListener('input', onTextSizeReplace);

 
function onTextSizeReplace(event) {
    const styleForText = document.createElement('style');
    let inputSize = event.target.value;
styleForText.textContent = (`.inputTextSize{font-size : ${inputSize}px}`)
document.head.appendChild(styleForText);
     
   
    
}

