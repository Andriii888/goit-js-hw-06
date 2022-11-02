const inputValidationRef = document.querySelector('#validation-input');
const inputDataref = document.querySelector('input[data-length="6"]');
const needLengthInputValue = inputDataref.dataset.length;


inputValidationRef.addEventListener('blur',onValidInput);

function onValidInput (event){
    let writeLengthValue = event.currentTarget.value.length;
    writeLengthValue == needLengthInputValue ?
               inputValidationRef.classList.replace('invalid','valid') ||
        inputValidationRef.classList.add('valid') :
        inputValidationRef.classList.add('invalid')
   
   
}
  