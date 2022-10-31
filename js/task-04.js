let counterValue = 0;
const valueRef = document.querySelector('#value')
const subBtnRef = document.querySelector('button[data-action="decrement"]');
const addBtnRef = document.querySelector('button[data-action="increment"]');

addBtnRef.addEventListener('click', add => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});
subBtnRef.addEventListener('click', sub => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});