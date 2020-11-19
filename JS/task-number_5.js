
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onNameUser);  
 
function onNameUser(e) {
   const nameUser = outputRef.textContent = e.target.value 
   ? e.target.value 
   : 'незнакомец';
};

