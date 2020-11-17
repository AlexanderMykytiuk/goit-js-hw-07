
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

renderRef.addEventListener('click', getRender);
destroyRef.addEventListener('click', onDestroyBoxes);

function getRender() {
    let amount = document.querySelector('#controls input').value;
    onCreateBoxes(amount);
};

function  onDestroyBoxes() {
    boxRef.innerHTML = '';
};

 function randomBoxColor() {
    return Math.floor(Math.random() * 256);
};
 
function onCreateBoxes(amount) {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let size = basicSize + i * 10;
        let makersDiv = document.createElement('div');
        makersDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${randomBoxColor()} , ${randomBoxColor()} , ${randomBoxColor()} )`;
        fragment.appendChild(makersDiv);
       
    }
        boxRef.appendChild(fragment);
       
};
 
