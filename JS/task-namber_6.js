
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', e => {
    e.target.value.length <= 6 
    ? inputRef.classList.add('valid') 
    : inputRef.classList.add('invalid')
    console.log(e);
});

inputRef.addEventListener('focus', e => {
    e.target.value = ''
    inputRef.classList.remove('valid', 'invalid')
});