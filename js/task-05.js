const inputRef = document.querySelector('#name-input');
const spanForInputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onWriteTextSpan);
function onWriteTextSpan(event) {

    spanForInputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanForInputRef.textContent = "Anonymouse";
    }

}

