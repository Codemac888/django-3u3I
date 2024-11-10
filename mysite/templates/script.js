// Select the right-grid container
const rightGrid = document.querySelector('.right-grid');

// Define the rows for the pyramid, each entry represents a row and the letter for the class
const rows = [
    { count: 10, className: 'a' },
    { count: 8, className: 'b' },
    { count: 6, className: 'c' },
    { count: 4, className: 'd' },
    { count: 2, className: 'e' }
];

// Loop through each row configuration to create the squares
rows.forEach(row => {
    for (let i = 0; i < row.count; i++) {
        const square = document.createElement('div');
        square.classList.add('square', row.className);
        
        // Randomize animation delay for each square
        const delay = Math.random() * 4; // Random delay up to 4 seconds
        square.style.animationDelay = `${delay}s`;
        
        // Randomize color of inner bar for each square
        const colors = ['#00ff00', '#00f7ff', '#ff00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.setProperty('--bar-color', randomColor);

        // Append the square to the right grid
        rightGrid.appendChild(square);
    }
});
