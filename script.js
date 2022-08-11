function setDivsGrid(n = 16){
    const grid = document.querySelector('.grid');

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            const div = document.createElement('div');
            div.classList.add('element');
            grid.appendChild(div);
        }
    }
}

function paintElement(e){
    this.style.cssText= 'border: none; background-color: black;'
}

function getElementAndPaint(){
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => element.addEventListener('mouseover',paintElement))
}

function getGridSize(e){
    do{
        size = parseInt(prompt('Set the grid size n x n Between 1 and 100'));
    }while(isNaN(size) || size > 100 || size < 1);
}

function getGridSizeByUser(){
    const gridSize = document.querySelector('.size');
    let size;
    gridSize.addEventListener('click', getGridSize);
}

setDivsGrid();

getElementAndPaint();

getGridSizeByUser();
