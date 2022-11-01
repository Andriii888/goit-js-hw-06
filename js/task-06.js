const inputValidationRef = document.querySelector('#validation-input');
const needLengthInputValue = inputValidationRef.getAttribute('data-length');


inputValidationRef.addEventListener('blur',onValidInput);

function onValidInput (event){
    let writeLengthValue = event.currentTarget.value.length;
    writeLengthValue === 6 ?
               inputValidationRef.classList.replace('invalid','valid') ||
        inputValidationRef.classList.add('valid') :
        inputValidationRef.classList.add('invalid')
   
   
}
  