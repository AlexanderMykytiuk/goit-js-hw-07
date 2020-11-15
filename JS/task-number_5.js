
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onNameUser);  
inputRef.addEventListener('keydown', onCleanNameUser);
 
function onNameUser(e) {
   const nameUser = outputRef.textContent = e.target.value 
   ? e.target.value 
   : 'незнакомец';
};

function onCleanNameUser(e) {
    if (e.code === 'Enter') {
        e.target.value = '';
        outputRef.textContent = 'незнакомец';
    }; 
};