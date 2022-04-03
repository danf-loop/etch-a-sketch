

//Creating the grid
let container = document.querySelector("#container");
 
function createGrid(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < numSquares; j++) {
            const square = document.createElement('div');
            square.className = 'box'
            row.appendChild(square)
        }

    }
}

createGrid(16);