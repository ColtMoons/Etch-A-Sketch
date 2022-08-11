function setDivsGrid(){
    const grid = document.querySelector('.grid');

    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
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


setDivsGrid();

getElementAndPaint();