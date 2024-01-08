import { setColor } from "./color-coding";
import { endScreen } from "./draw-end-screen";

const clickAudio = new Audio('../src/assets/click.mp3');
const flagAudio = new Audio('../src/assets/tick.mp3');
const loseAudio = new Audio('../src/assets/lose.mp3');
const winAudio = new Audio('../src/assets/win.mp3');

export function cellsClickHandler(cell, matrix){  
    clickAudio.play();
    
    let row = cell.parentNode.rowIndex;  
    let column = cell.cellIndex;       

    cell.className = 'active';  
    if(matrix[row][column] == 9) {  
        loseAudio.play();
        
        const img = document.createElement('img');  
        img.src = '../src/assets/bomb.png';  
        cell.append(img);  
        setTimeout(() => {
            endScreen('lose');
        }, 1000);
    }else if(matrix[row][column] == 0) {  
        cell.textContent = '';  
        for(let i = Math.max(row-1, 0); i <= Math.min(row+1, matrix.length-1); i++){ 
            for(let j = Math.max(column-1, 0); j <= Math.min(column+1, matrix[0].length-1); j++){ 
                if(matrix[i][j] != 9 && !document.getElementById(`cell-${i}-${j}`).classList.contains('active')){ 
                    document.getElementById(`cell-${i}-${j}`).classList.add('active'); 
                    cellsClickHandler(document.getElementById(`cell-${i}-${j}`), matrix); 
                } 
            } 
        } 
    }else{  
        cell.textContent = matrix[row][column];  
        setColor(matrix[row][column], cell);
    }  

    if(document.querySelectorAll('.unactive').length == 10){
        winAudio.play();
        
        setTimeout(() => {
            endScreen('win');
        }, 1000);
    }
}

let flags = 0;
export function cellsRightClickHandler(cell){
    flagAudio.play();
    
    if(!cell.childNodes[0] && cell.className != 'flag'){
        const img = document.createElement('img');
        img.className = 'flag';
        img.src = '../src/assets/flag.png'
        cell.append(img);
        flags++;
        document.querySelector('.flags').textContent = `Flags: ${flags}`;
    }else if(cell.childNodes[0]){
        cell.removeChild(cell.childNodes[0]);
        flags--;
        document.querySelector('.flags').textContent = `Flags: ${flags}`;
    }else if(cell.className == 'flag'){
        cell.remove();
        flags--;
        document.querySelector('.flags').textContent = `Flags: ${flags}`;
    }
    document.querySelector('.button_new-game').addEventListener('click', ()=>{
        flags = 0;
        document.querySelector('.flags').textContent = `Flags: ${flags}`;
    });
}
