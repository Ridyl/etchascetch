const gridContainer = document.querySelector('.grid-container');

//Future change to user input size up to 100
let amount = 64;

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
                target.style.backgroundColor = 'black';
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




draw(amount);



