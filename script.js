
//Creating the grid
let container = document.querySelector("#container");

const button = document.getElementById("button");


function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "box";
        cell.addEventListener("mouseover", colorSquare)
    }
}
createGrid(16,16)
// hover over the box to draw black boxes
function colorSquare(event) {
    event.target.style.backgroundColor = "black";
}

// clear the grid
function clearGrid() {
    let container = document.querySelector("#container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"))
}


