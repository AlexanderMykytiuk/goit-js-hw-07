
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
// console.dir(inputRef);
// console.dir(textRef);
inputRef.addEventListener('input', e => {
    textRef.style.fontSize = `${e.target.value}px`;
// console.log(e.target.value);
});


