
//Creating the grid
let container = document.querySelector("#container");

const button = document.getElementById("button");

function clearGrid() {
    container.style.backgroundColor = "black";
  }
 
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
//hover over the box to draw black boxes
function colorSquare(event) {
    event.target.style.backgroundColor = "black";
}

// clear the the boxes
function clearGrid() {
    let gridSquares = document.querySelectorAll(".box")
    gridSquares.forEach(box => {box.style.backgroundColor = null});
}
