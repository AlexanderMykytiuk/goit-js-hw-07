
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', e => {
   const nameUser = outputRef.textContent = e.target.value ? e.target.value : 'незнакомец';

});  

inputRef.addEventListener('keydown', e => {
   if (e.code === 'Enter') {
        e.target.value = '';
        outputRef.textContent = 'незнакомец';
    }; 
});
 