const inputValidationRef = document.querySelector('#validation-input');
const inputDataref = document.querySelector('input[data-length="6"]');
const needLengthInputValue = Number(inputDataref.dataset.length);


inputValidationRef.addEventListener('blur',onValidInput);

function onValidInput (event){
    let writeLengthValue = event.currentTarget.value.length;
    if (writeLengthValue === needLengthInputValue)
    {
        inputValidationRef.classList.remove('invalid') ||
        inputValidationRef.classList.add('valid')
    }
    else {
        inputValidationRef.classList.add('invalid')
            inputValidationRef.classList.remove('valid') 
}
}
  