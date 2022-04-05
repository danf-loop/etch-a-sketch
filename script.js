
//Creating the grid
let container = document.querySelector("#container");
 
function createGrid(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < numSquares; j++) {
            const square = document.createElement('div');
            square.className = 'box'
            row.appendChild(square)
            square.addEventListener("mouseover",colorSquare)
        }

    }
}
createGrid(16);


//on click the box keeps the color


function colorSquare(event) {
    event.target.style.backgroundColor = "red"
}

