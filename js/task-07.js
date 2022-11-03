const inputRangeRef = document.querySelector('#font-size-control');
const sizeTextRef = document.querySelector('#text');
sizeTextRef.classList.add('inputTextSize');



inputRangeRef.addEventListener('input', onTextSizeReplace);

 
function onTextSizeReplace(event) {
    let styleForText = document.createElement('style');
    document.head.appendChild(styleForText);
    let inputSize = event.target.value;

    styleForText.textContent = `.inputTextSize{font-size:${inputSize}px}}`;

    // ТАК НЕ ПРАЦЮЄ  В МЕНЕ НЕМАЄ ТАКОГО ПАРАМЕТРА styleTextRef
    // на відео там виділений sizeTextRef
    // sizeTextRef.style.fontSize = `${inputSize}px}`;
    // ТАК НЕ ПРАЦЮЄ 
}

