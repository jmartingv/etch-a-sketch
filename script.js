const container = document.querySelector('.grid-container');
const sizeBtn = document.querySelector('#size');
const clearBtn = document.querySelector('#clear');

// Function for creating the grid
function createGrid(size) {
  container.innerHTML = '';
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      let square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
      });

      container.style.gridTemplateRows = `repeat(${size},1fr)`;
      container.style.gridTemplateColumns = `repeat(${size},1fr)`;

      container.appendChild(square);
    }
  }
}

// Clearing the grid
function clearGrid() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = '';
  });
}

// Setting the size
function setSize() {
  let gridSize = Number(prompt('Set the size for the square grid (1 - 100): '));

  while (gridSize > 100 || gridSize < 1 || !Number.isInteger(gridSize)) {
    gridSize = Number(prompt('Please enter a valid value for the grid size: '));
  }

  return gridSize;
}

// Default grid size = 16
createGrid(16);

sizeBtn.addEventListener('click', () => {
  let size = setSize();
  createGrid(size);
});

clearBtn.addEventListener('click', () => {
  clearGrid();
});
