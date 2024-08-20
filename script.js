const container = document.querySelector(".container");

// Adds a button, when pressed lets user change the number of squares in the grid
let button = document.createElement('button');
container.appendChild(button);
button.textContent = "Number of squares";

//by default 16x16 grid will be displayed
newGrid(16);

button.addEventListener('mousedown',() => {
    // Prompt to user to input number of squares
    let squareNum = prompt("Please enter a number(1-100) of squares for new grid",16);
    if (squareNum > 100)
        squareNum = 16;

    newGrid(squareNum);
});

// function creates a new grid
function newGrid (squareNum) {
    // Height and width of each square in grid
    let squareSideLen = 800 / squareNum;

    // Create a grid
    for (let row = 0; row < squareNum; row++) {
        for (let column = 0; column < squareNum; column++) {
            const div = document.createElement("div");
            div.classList.add("gridItem");
            // positioning the divs
            div.style.left = column * squareSideLen+100 + "px";
            div.style.top = row * squareSideLen+100 + "px";
            // Height and width of each div
            div.style.height = squareSideLen + "px";
            div.style.width = squareSideLen + "px";
            container.appendChild(div);
        }
    }

    // Displays a pixelated trails whn mouse hovers over grid divs
    let gridItems = document.querySelectorAll(".gridItem");

    for (let item of gridItems){
        // The mouseout fires when the mouse cursor is over an element and 
        // then moves another element.
        item.addEventListener('mouseout',() => {
            item.style.background = randomRGB();
        });

        // The mouseover fires when the mouse cursor is outside of the element
        // and then moves inside the boundaries of the element.
        item.addEventListener('mouseover', () => {
            item.style.background = "black";
        });
    }
}

// function generates random RGB
function randomRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return "rgb(" + r + "," + g + "," + b + ")"; 
}