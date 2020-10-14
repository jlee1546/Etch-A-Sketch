// Javascript for the Etch-A-Sketch project @The_Odin_Peoject

function createGrid(rows, cols) {
    let grid = document.getElementById('grid');
    grid.style.setProperty('--grid-rows',rows);
    grid.style.setProperty('--grid-cols',cols);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let cells = document.createElement('div');
            cells.addEventListener('mouseover', (e) => {
                cells.style.backgroundColor = 'orange';
                cells.style.cursor = 'crosshair';
            });
            grid.appendChild(cells).className = "grid-item";
        }   
    }
}

function resetGrid() {
    let cells = document.getElementsByClassName('grid-item');
    let arr = Array.from(cells);
    for (i = 0; i <= arr.length; i++) {
        arr[i].style.cssText = 'background-color: white;'
    }
}
function changeGridSize() {
    let keepRunning = true;
    
    while (keepRunning) {
        let gridSize = parseInt(prompt("How many squares (100 or less)" ));
        if (gridSize <= 100) {
            document.querySelectorAll('.grid-item').forEach(el => el.remove());
            createGrid(gridSize,gridSize);
            keepRunning = false;
        } else {
            alert('Please enter a NUMBER equal to 100 or less!')
        }
    }
}

function changeColorRed() {
    let cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = 'red'
            
        });
    });
    
}

function changeColorBlue() {
    let cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = 'blue'
        });
    });
}

function changeColorGreen() {
    let cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = 'green'
        });
    });
}

function changeColorRandom() {
    let cells = document.getElementsByClassName('grid-item');
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = 'rgb('+makeRandom()+','+makeRandom()+','+makeRandom()+')';
        })
    })
}
function makeRandom() {
    let max = 256;
    let min = 0;
    return Math.random() * ((max - min) + min);
}




createGrid(50,50);


let btn = document.getElementById('button');
btn.addEventListener('click', changeGridSize);

let red = document.getElementById('red');
red.addEventListener('click', changeColorRed);

let blue = document.getElementById('blue');
blue.addEventListener('click', changeColorBlue);

let green = document.getElementById('green');
green.addEventListener('click', changeColorGreen);

let random = document.getElementById('random');
random.addEventListener('click',changeColorRandom);
