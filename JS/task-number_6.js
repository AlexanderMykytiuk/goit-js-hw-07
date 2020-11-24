
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlurInput);
// inputRef.addEventListener('focus', onFocusInput);

function onBlurInput(e) {
    const dataLength = Number(inputRef.getAttribute("data-length"));
    if(e.target.value.length === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid'); 
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};
