//calculate square size

function getSquareSize(grid, squares){
    const gridSize = grid.getBoundingClientRect().height - 4;
    const squareSize = gridSize / squares;
    return squareSize;
}

//create squares for the grid initialy 16 x 16 squares 
function setDivsGrid(squares = 16){
    const grid = document.querySelector('.grid');

    const squareSize = getSquareSize(grid, squares);

    for(let i = 0; i < squares; i++){
        for(let j = 0; j < squares; j++){
            const div = document.createElement('div');
            div.classList.add('element');
            div.style.cssText = `height: ${squareSize}px; width: ${squareSize}px`
            grid.appendChild(div);
        }
    }
}

//delete elements from grid 
function deleteElementsFromGrid(){
    const grid = document.querySelector('.grid');

    const elements = document.querySelectorAll('.element');
    elements.forEach(element => grid.removeChild(element));

}

//get the element where the mouse is over and call paint function
function getElementAndPaint(squares = 16){
    const elements = document.querySelectorAll('.element');

    elements.forEach(element => element.addEventListener('mouseover',e=>{
        const grid = document.querySelector('.grid');

        const squareSize = getSquareSize(grid, squares);
        element.style.cssText= `border: none; background-color: black; height: ${squareSize}px; width: ${squareSize}px;`
    }))
}


//this will set the grid size from initial 16 x 16 squares to numbers between 1 and 100
function setGridSquares(e){
    do{
        squares = parseInt(prompt('Set the grid size n x n Between 1 and 100'));
    }while(isNaN(squares) || squares > 100 || squares < 1);

    deleteElementsFromGrid();
    setDivsGrid(squares);
    getElementAndPaint(squares);
}

function setGridSizeByUser(){
    const gridSize = document.querySelector('.size');
    let size;
    gridSize.addEventListener('click', setGridSquares);
}


//call methods to work
//create divs for the grid
setDivsGrid();

//first time created grid will paint when the mouse is over and element
getElementAndPaint();

//user set the quantity of squares and paint when the mouse is over
setGridSizeByUser();

