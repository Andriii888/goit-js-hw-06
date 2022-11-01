let counterValue = 0;
const valueRef = document.querySelector('#value')
const subBtnRef = document.querySelector('button[data-action="decrement"]');
const addBtnRef = document.querySelector('button[data-action="increment"]');
const addFn = event => {
         counterValue += 1;
    valueRef.textContent = counterValue;
};
const subFn = sub => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

addBtnRef.addEventListener('click', addFn);
subBtnRef.addEventListener('click', subFn);

