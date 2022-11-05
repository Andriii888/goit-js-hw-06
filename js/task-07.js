const inputRangeRef = document.querySelector('#font-size-control');
const sizeTextRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', onTextSizeReplace);

 
function onTextSizeReplace(event) {
    let inputSize = event.target.value;


    sizeTextRef.style.fontSize = `${inputSize}px`
}

