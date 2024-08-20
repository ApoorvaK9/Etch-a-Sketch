// Prompt to user to input number of squares
let squareNum = prompt("Please enter a number(1-100) of squares for new grid",16);

if (squareNum > 100)
    squareNum = 16;

// Height and width of each square in grid
let squareSideLen = 800 / squareNum;

// Create a grid
const container = document.querySelector(".container");

for (let row = 0; row < squareNum; row++) {
    for (let column = 0; column < squareNum; column++) {
        const div = document.createElement("div");
        div.classList.add("gridItem");
        // positioning the divs
        div.style.left = column * squareSideLen + "px";
        div.style.top = row * squareSideLen + "px";
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
        item.style.background = "grey";
    });

    // The mouseover fires when the mouse cursor is outside of the element
    // and then moves inside the boundaries of the element.
    item.addEventListener('mouseover', () => {
        item.style.background = "pink";
    });
}


// Adds a button, when pressed lets user change the number of squares in the grid