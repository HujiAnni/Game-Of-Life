
let position = 1;

const width = window.innerWidth;
const height = window.innerHeight;
const w = Math.floor(width/20);
const h = Math.floor(height/20);

const gridSize = w * h;

let content = document.querySelector(".content");
content.style.gridTemplateColumns = `repeat(${w},19.75px)`
content.style.gridTemplateRows = `repeat(${h},19px)`


let condition = true;

function createCells(){
    // let block = document.createElement("main");
    // block.classList.add("cotent");
    // block.setAttribute("id","target");
    // document.getElementById("dynamic").appendChild(block);
    for (let i = 1; i<=gridSize; i++){
        var div = document.createElement("div");
        div.id = i;
        // div.innerText = i;
        document.getElementById("target").appendChild(div);
        
    }
}

function random(){
    for (let i = 1; i <= gridSize; i++) {
        if (Math.floor(Math.random()*13) === 0) {
            toggle(i);        
        }
    }
}


addEventListener('keydown', () => {
    condition = !condition;
    setInterval(()=>{
        let block = document.getElementById("target");
        block.remove();
    }, 2000);
});

function game(){
    setTimeout(() => {
        if (!condition ) return;
        
        for (let i = 1; i <= gridSize; i++) {
            let numNeighbor = 0;
            const id = i;            
            const element = document.getElementById(id);
            let add = 0;
            switch(id) {
                case 1: // for the first cell
                    let rightCell1 = document.getElementById(id+1);
                    add = rightCell1.classList.contains('on')? add+1: add;
                    let bottomCell1 = document.getElementById(id+w);
                    add = bottomCell1.classList.contains('on')? add+1: add;
                    let bottomRightCell1 = document.getElementById(id+w+1);
                    add = bottomRightCell1.classList.contains('on')? add+1: add;
                    numNeighbor = numNeighbor + add;
                    break;
                case gridSize: // for the last cell
                    let leftCell1 = document.getElementById(id-1);
                    add = leftCell1.classList.contains('on')? add+1: add;
                    let topCell1 = document.getElementById(id-w);
                    add = topCell1.classList.contains('on')? add+1: add;
                    let topLeftCell1 = document.getElementById(id-w-1);
                    add = topLeftCell1.classList.contains('on')? add+1: add;
                    numNeighbor = numNeighbor + add;
                    break;
                case w: // for the last cell of the first row
                    let leftCell2 = document.getElementById(id-1);
                    add = leftCell2.classList.contains('on')? add+1: add;
                    let bottomCell2 = document.getElementById(id+w);
                    add = bottomCell2.classList.contains('on')? add+1: add;
                    let bottomLeftCell1 = document.getElementById(id+w-1);
                    add = bottomLeftCell1.classList.contains('on')? add+1: add;
                    numNeighbor = numNeighbor + add;
                    break;
                case (gridSize - w + 1): // for the first cell of the last row
                    let rightCell2 = document.getElementById(id+1);
                    add = rightCell2.classList.contains('on')? add+1: add;
                    let topCell2 = document.getElementById(id-w);
                    add = topCell2.classList.contains('on')? add+1: add;
                    let topRightCell1 = document.getElementById(id-w+1);
                    add = topRightCell1.classList.contains('on')? add+1: add;
                    numNeighbor = numNeighbor + add;
                    break;
                default:
                    if (id % w === 1) {
                        // All cells in the first column
                        let rightCell = document.getElementById(id+1);
                        add = rightCell.classList.contains('on')? add+1: add;
                        let topCell = document.getElementById(id-w);
                        add = topCell.classList.contains('on')? add+1: add;
                        let bottomCell = document.getElementById(id+w);
                        add = bottomCell.classList.contains('on')? add+1: add;
                        let topRightCell = document.getElementById(id-w+1);
                        add = topRightCell.classList.contains('on')? add+1: add;
                        let bottomRightCell = document.getElementById(id+w+1);
                        add = bottomRightCell.classList.contains('on')? add+1: add;
                        numNeighbor = numNeighbor + add;

                    } else if (id % w === 0) {
                        // All cells in the last column
                        let leftCell = document.getElementById(id-1);
                        add = leftCell.classList.contains('on')? add+1: add;
                        let topCell = document.getElementById(id-w);
                        add = topCell.classList.contains('on')? add+1: add;
                        let bottomCell = document.getElementById(id+w);
                        add = bottomCell.classList.contains('on')? add+1: add;
                        let bottomLeftCell = document.getElementById(id+w-1);
                        add = bottomLeftCell.classList.contains('on')? add+1: add;
                        let topLeftCell = document.getElementById(id-w-1);
                        add = topLeftCell.classList.contains('on')? add+1: add;
                        numNeighbor = numNeighbor + add;
                         
                    } else if (id > 1 & id < w) {
                        // Cells on the top row
                        let leftCell = document.getElementById(id-1);
                        add = leftCell.classList.contains('on')? add+1: add;
                        let rightCell = document.getElementById(id+1);
                        add = rightCell.classList.contains('on')? add+1: add;
                        let bottomCell = document.getElementById(id+w);
                        add = bottomCell.classList.contains('on')? add+1: add;
                        let bottomLeftCell = document.getElementById(id+w-1);
                        add = bottomLeftCell.classList.contains('on')? add+1: add;
                        let bottomRightCell = document.getElementById(id+w+1);
                        add = bottomRightCell.classList.contains('on')? add+1: add;
                        numNeighbor = numNeighbor + add;

                    } else if (id > gridSize - w + 1 & id < gridSize) {
                        // Cells on the bottom row
                        let leftCell = document.getElementById(id-1);
                        add = leftCell.classList.contains('on')? add+1: add;
                        let rightCell = document.getElementById(id+1);
                        add = rightCell.classList.contains('on')? add+1: add;
                        let topCell = document.getElementById(id-w);
                        add = topCell.classList.contains('on')? add+1: add;
                        let topRightCell = document.getElementById(id-w+1);
                        add = topRightCell.classList.contains('on')? add+1: add;
                        let topLeftCell = document.getElementById(id-w-1);
                        add = topLeftCell.classList.contains('on')? add+1: add;
                        numNeighbor = numNeighbor + add;
                    } else { 
                        // All other cells in the middle
                        let leftCell = document.getElementById(id-1);
                        add = leftCell.classList.contains('on')? add+1: add;
                        let rightCell = document.getElementById(id+1);
                        add = rightCell.classList.contains('on')? add+1: add;
                        let topCell = document.getElementById(id-w);
                        add = topCell.classList.contains('on')? add+1: add;
                        let bottomCell = document.getElementById(id+w);
                        add = bottomCell.classList.contains('on')? add+1: add;
                        let topRightCell = document.getElementById(id-w+1);
                        add = topRightCell.classList.contains('on')? add+1: add;
                        let bottomLeftCell = document.getElementById(id+w-1);
                        add = bottomLeftCell.classList.contains('on')? add+1: add;
                        let topLeftCell = document.getElementById(id-w-1);
                        add = topLeftCell.classList.contains('on')? add+1: add;
                        let bottomRightCell = document.getElementById(id+w+1);
                        add = bottomRightCell.classList.contains('on')? add+1: add;
                        numNeighbor = numNeighbor + add;
                    }
            }
            if (element.classList.contains('on') == false) {
                if (numNeighbor === 3) {
                    element.classList.toggle('on');
                }
            } else {
                if (numNeighbor != 3 && numNeighbor != 2) {
                    element.classList.toggle('on');
                }
            }
            // if (!element.classList.contains('on') && (numNeighbor === 3)) {
            //     element.classList.toggle('on');
            // } else if (element.classList.contains('on') && (numNeighbor === 3)) {
            //     // element.classList.add('on');
            // }
            // else {
            //     if (element.classList.contains('on')) {
            //         element.classList.toggle('on');
            //     } else {

            //     }
            //     // element.classList.remove('on');
            // }
           game();
        }
    }, 1000);
}

function toggle(position){
     if (position < 1) return;            
    const name =  position;            
    const element = document.getElementById(name);
    element.classList.toggle('on');
}