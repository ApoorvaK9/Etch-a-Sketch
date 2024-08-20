const container = document.querySelector(".container");

for (let row = 1; row < 17; row++) {
    for (let column = 1; column < 17; column++) {
        const div = document.createElement("div");
        div.classList.add("gridItem");
        // positioning the divs
        div.style.left = column * 50 + "px";
        div.style.top = row * 50 + "px";
        container.appendChild(div);
    }
}

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
