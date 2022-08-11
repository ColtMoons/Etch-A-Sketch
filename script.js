function setDivsGrid(){
    const grid = document.querySelector('.grid');

    for(let i = 0; i < 16; i++){
        for(let i = 0; i < 16; i++){
            const div = document.createElement('div');
            div.classList.add('element');
            grid.appendChild(div);
        }
    }
}

setDivsGrid();