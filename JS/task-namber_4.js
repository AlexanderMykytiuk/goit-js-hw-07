
let counterValue = 0;

function decrement() {
    counterValue -= 1;
    
    render();
};

function increment() {
    counterValue += 1;
    
    render();
};

function render() {
    ref.counterValueRef.textContent = counterValue;
};
// const btnDecrement = document.querySelector('.decrement');
// const btnIncrement = document.querySelector('.increment');
// const counterValueRef = document.querySelector('#value');

const ref = {
     btnDecrement: document.querySelector('.decrement'),
     btnIncrement: document.querySelector('.increment'),
     counterValueRef: document.querySelector('#value'),
};

ref.btnDecrement.addEventListener('click', decrement);
ref.btnIncrement.addEventListener('click', increment);










// btnDecrement.classList.add('decrement');
// btnIncrement.classList.add('increment');
// console.log(ref.btnIncrement);
// console.log(ref.btnDecrement);
