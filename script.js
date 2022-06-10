const container = document.querySelector('.grid-container');
const topContainer = document.querySelector('.btn-container');
const botContainer = document.querySelector('.bot-container');

// Create top buttons and add to container
const sizeBtn = document.createElement('button');
const clearBtn = document.createElement('button');

sizeBtn.innerHTML = 'Set grid size';
clearBtn.innerHTML = 'Clear grid';

topContainer.appendChild(sizeBtn);
topContainer.appendChild(clearBtn);

// Create bot buttons and add to container
const blackBtn = document.createElement('button');
const redBtn = document.createElement('button');
const rainbowBtn = document.createElement('button');

blackBtn.innerHTML = 'Black';
redBtn.innerHTML = 'Red';
rainbowBtn.innerHTML = 'Rainbow';

botContainer.appendChild(blackBtn);
botContainer.appendChild(redBtn);
botContainer.appendChild(rainbowBtn);

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
