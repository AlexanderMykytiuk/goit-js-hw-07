
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlurInput);
// inputRef.addEventListener('focus', onFocusInput);

function onBlurInput(e) {
    e.target.value.length === 6
    ? inputRef.classList.add('valid') 
    : inputRef.classList.add('invalid')
};
