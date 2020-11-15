
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
// console.dir(inputRef);
// console.dir(textRef);
inputRef.addEventListener('input', onChangeInput);

function onChangeInput(e) {
    textRef.style.fontSize = `${e.target.value}px`;
};
