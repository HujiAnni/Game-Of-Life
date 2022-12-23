let position = 1;

const width = window.innerWidth;
const height = window.innerHeight;
const w = Math.floor(width/10);
const h = Math.floor(height/10);

const gridSize = w * h;

let content = document.querySelector(".content");
content.style.gridTemplateColumns = `repeat(${w},9.75px)`
content.style.gridTemplateRows = `repeat(${h},9.55px)`



function createGrid(){
    for (let i = 1; i<=gridSize; i++){
        var div = document.createElement("div");
        div.id = i;
        // div.innerText = i;
        document.getElementById("target").appendChild(div);
    }
}

function game(){
    nextCells = [];
    for (let i = 1; i <= gridSize; i++) {
        if (Math.floor(Math.random()*2) === 0) {
            toggle(i);        
        }
    }
    setTimeout(() => {
        // if (position > gridSize) return;
        // game();
        for (let i = 1; i <= gridSize; i++) {
            let numNeighbor = 0;
            const id = i;            
            // const element = document.getElementById(id);
            let add = 0;
            switch(id) {
                case 1: // for the first cell
                    let rightCell1 = document.getElementById(id+1);
                    add = rightCell1.classList.contains('on')? add++:add;
                    let bottomCell1 = document.getElementById(id+w);
                    add = bottomCell1.classList.contains('on')? add++:add;
                    let bottomRightCell1 = document.getElementById(id+w+1);
                    add = bottomRightCell1.classList.contains('on')? add++:add;
                    numNeighbor = numNeighbor + add;
                    break;
                case gridSize: // for the last cell
                    let leftCell1 = document.getElementById(id-1);
                    add = leftCell1.classList.contains('on')? add++:add;
                    let topCell1 = document.getElementById(id-w);
                    add = topCell1.classList.contains('on')? add++:add;
                    let topLeftCell1 = document.getElementById(id-w-1);
                    add = topLeftCell1.classList.contains('on')? add++:add;
                    numNeighbor = numNeighbor + add;
                    break;
                case w: // for the last cell of the first row
                    let leftCell2 = document.getElementById(id-1);
                    add = leftCell2.classList.contains('on')? add++:add;
                    let bottomCell2 = document.getElementById(id+w);
                    add = bottomCell2.classList.contains('on')? add++:add;
                    numNeighbor = numNeighbor + add;
                    break;
                case (gridSize - w + 1): // for the first cell of the last row
                    let rightCell2 = document.getElementById(id-1);
                    add = rightCell2.classList.contains('on')? add++:add;
                    let topCell2 = document.getElementById(id+w);
                    add = topCell2.classList.contains('on')? add++:add;
                    numNeighbor = numNeighbor + add;
                    break;
                default:
                    if (id % w === 1) {
                    } else if (id % w === 0) {
                         
                    } else if (id > 1 & id < w) {

                    } else if (id > gridSize - w + 1 & id < gridSize) {

                    } else {

                    }

            }
           
        }
    }, 1000);
}

function toggle(position){
     if (position < 1) return;            
    const name =  position;            
    const element = document.getElementById(name);
    element.classList.toggle('on');
}