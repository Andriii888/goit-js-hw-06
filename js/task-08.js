const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onTrueSubmit);
 
function onTrueSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Заповни поля');
    }
    const result = {
        email: email.value,
        password: password.value
};
    console.log(result);
    event.currentTarget.reset();

    
}
