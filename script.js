const gridContainer = document.querySelector('.grid-container');

//Future change to user input size up to 100
let amount = 32;

//Draws Table of defined "amount" == size
function draw(amount) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount * amount; i++) {
        const gridBox = document.createElement('div');
        gridBox.style.cssText = "border: 1px solid black; border-collapse: seperate; margin: 0; height: 50px; width: 50px; flex: 1 1 auto";
        fragment.appendChild(gridBox);
    }
    gridContainer.appendChild(fragment);
}

draw(amount);



