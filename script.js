const gridContainer = document.querySelector('.grid-container');
const uiContainer = document.querySelector('.ui');
const userInput = document.querySelector('#user-input');
const drawGridButton = document.querySelector('.draw-grid');
const clearGridButton = document.querySelector('.clear');
const black = document.getElementById('default');

let colorSelection = 'black';

//Adding an event listener for all radio buttons and passing value of selcted
document.addEventListener('input', (f) => {
    if (f.target.getAttribute('name') == 'selections')
        colorSelection = f.target.value;
});


//not the most optimal way of setting up two buttons with essentialy the same logic.
drawGridButton.addEventListener('click', (e) => {
    clear();
    draw(userInput.value);
});

clearGridButton.addEventListener('click', (e) => {
    clear();
    draw(userInput.value);
});



//Draws Table of defined "amount" == size
function draw(amount) {
    let fragment = document.createDocumentFragment();
    //First for loop is creating columns at specified length, setting ID, then adding EventListener
    for (let i = 0; i < amount; i++) {
        const gridSpace = document.createElement('div');
        gridSpace.style.cssText = "margin: 0; display: flex; flex-direction: column; flex: 1 1 auto";
        gridSpace.setAttribute('id', 'columnSelector');
        
        //event listener currently just checking for clicked children of created column divs and avoiding 
        gridSpace.addEventListener('click', (event) => {
            let target = event.target;
            if(target.id !== 'columnSelector') {
                filler(target);
            }
        });

        //Nested for loop is adding specified amount of grid boxes to each column and setting ID
        for (let j = 0; j < amount; j++) {
            const gridBox = document.createElement('div');
            gridBox.style.cssText = "border: 1px solid black; border-collapse: seperate; margin: 0; flex: 1";
            gridBox.setAttribute('id', `gridSelector`);
            gridSpace.appendChild(gridBox);
        }
        fragment.appendChild(gridSpace);
    }

    gridContainer.appendChild(fragment);
}

//When called, checks for selected color input then draws with selection.
function filler(box) {
    if (colorSelection == 'black') {
        box.style.backgroundColor = 'black';
    }
    if (colorSelection == 'color') {
        let color = random();
        box.style.backgroundColor = color;
    }
    if (colorSelection == 'darken') {
        let scale = grayScale();
        box.style.backgroundColor = scale;
    }
}

//Selects six hex symbols at random for each click then returns final hex value
function random() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let final = '#';
    for (let i = 0; i < 6; i++) {
        final += hex[Math.floor(Math.random() * hex.length)];
    }
    return final;
}

function grayScale() {
    if ()
}

//Clears the board by removing all children of grid container. Only called after button draw grid is clicked
function clear() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}



