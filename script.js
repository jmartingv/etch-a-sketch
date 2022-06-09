const container = document.querySelector('.grid-container');

function setSize(size) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      let square = document.createElement('div');

      square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
      });

      container.style.gridTemplateRows = `repeat(${size},1fr)`;
      container.style.gridTemplateColumns = `repeat(${size},1fr)`;
      container.appendChild(square);
    }
  }
}

setSize(100);

console.log(container);
