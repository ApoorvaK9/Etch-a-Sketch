const container = document.querySelector(".container");

// Adds a button, when pressed lets user change the number of squares in the grid
let NumOfSqBtn = document.createElement('button');

NumOfSqBtn.textContent = "Number of squares";
let squareNum = 0;
NumOfSqBtn.addEventListener('click',() => {
    // Prompt to user to input number of squares
    squareNum = prompt("Please enter a number(1-100) of squares for new grid",16);
    if (squareNum > 100 || squareNum < 1 || isNaN(squareNum))
        squareNum = 16;

    newGrid(squareNum);
});

const randomColorBtn = document.createElement('button');
randomColorBtn.textContent = "Random Color";

const darkenColorBtn = document.createElement('button');
darkenColorBtn.textContent = "Darkening effect";

let randomDefaultcolorEffect = 1;

randomColorBtn.addEventListener('click',()=> {
    randomDefaultcolorEffect = 1;
    newGrid(squareNum);
});

darkenColorBtn.addEventListener('click', () => {
    randomDefaultcolorEffect = 0;
    newGrid(squareNum);
});

// function creates a new grid
function newGrid (squareNum) {
    // Reset grid
    container.innerHTML = "";

    container.appendChild(NumOfSqBtn);
    container.appendChild(randomColorBtn);
    container.appendChild(darkenColorBtn);
    // Height and width of each square in grid
    let squareSideLen = 800 / squareNum;

    // Create a grid
    for (let row = 0; row < squareNum; row++) {
        for (let column = 0; column < squareNum; column++) {
            const div = document.createElement("div");
            div.classList.add("gridItem");
            // positioning the divs
            div.style.left = column * squareSideLen +   250 + "px";
            div.style.top = row * squareSideLen +   250 + "px";
            // Height and width of each div
            div.style.height = squareSideLen + "px";
            div.style.width = squareSideLen + "px";
            div.style.background = "white";
            container.appendChild(div);
        }
    }

    switch (randomDefaultcolorEffect) {
        case 0:
            displayDarkeningPattern();
            break;
        
        case 1:
            displayRandomPattern();
            break;
    
        default:
            break;
    }

    function displayDarkeningPattern() {
        let gridItems = document.querySelectorAll(".gridItem");
        for (let item of gridItems){
            let interaction = 0;
            const maxInteraction = 10;
            // The mouseover fires when the mouse cursor is outside of the element
            // and then moves inside the boundaries of the element.
            item.addEventListener('mouseover',() => {
                item.style.background = "red" ;
                interaction += 1;
                let newOpacity = interaction / maxInteraction; 
                item.style.opacity = newOpacity;
            });
        }
    }
    function displayRandomPattern() { 
        let gridItems = document.querySelectorAll(".gridItem");
        for (let item of gridItems){
            // The mouseover fires when the mouse cursor is outside of the element
            // and then moves inside the boundaries of the element.
            item.addEventListener('mouseover',() => {
                item.style.background = randomRGB();
            });
        }
    }    
}


// function generates random RGB
function randomRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return "rgb(" + r + "," + g + "," + b + ")"; 
}

//by default 16x16 grid will be displayed
newGrid(16);