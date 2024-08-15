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
