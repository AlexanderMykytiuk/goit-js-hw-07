
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const numberRef = document.querySelector('input');
const boxRef = document.querySelector('#boxes');

// console.log(renderRef);
// console.log(destroyRef);
// console.log(numberRef);
// console.log(boxRef);
const submitInput = document.addEventListener('click', onCreateBoxes());
const clinPage = document.addEventListener('click', onDestroyBoxes());


function onCreateBoxes(amount) {
    for(let i = 0; i < amount; i += 1){
        let makersDiv = document.createElement('div');
        makersDiv.setAttribute('style', `width: ${30+i*10}px; height:${30+i*10}px; 
        background-color: ${randomBoxColor()}`);
        numberRef.boxRef.appendChild(makersDiv);
    }
};

function  onDestroyBoxes() {

};

function randomBoxColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const boxColor = `rgb(${x},${y},${z})`;
  
    makersDiv.style.color = boxColor;
    }
    // randomBoxColor();

console.log(onCreateBoxes(numberRef.textContent));