import { cellsClickHandler, cellsRightClickHandler } from "./cells-click-handler";
import { genBoard } from "./gen-board";

export function drawBoard(){
    let matrix;
    let id;
    let clickCounter = 0;
    const table = document.createElement('table');
    for(let i = 0; i < 10; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            const cell = document.createElement('td');
            cell.className = 'unactive';
            cell.id = `cell-${i}-${j}`;
            row.append(cell);
        }
        table.append(row);
    }
    
    table.addEventListener('click', event => { 
        if(event.target.className == 'unactive' && !event.target.childNodes[0]) { 
            if(clickCounter == 0){ 
                matrix = genBoard(event.target); 
                id = setInterval(()=>{
                    document.querySelector('.timer').textContent++;
                }, 1000)
                document.querySelector('.button_new-game').addEventListener('click', () => {
                    document.querySelector('.timer').textContent = '0';
                    clearInterval(id);
                });
            } 
            cellsClickHandler(event.target, matrix); 
            clickCounter++;  
            document.querySelector('.steps').textContent = `Steps: ${clickCounter}`;
            document.querySelector('.button_new-game').addEventListener('click', ()=>{
                clickCounter = 0;
                document.querySelector('.steps').textContent = `Steps: ${clickCounter}`;
            });
        } 
    });

    table.addEventListener('contextmenu', event => {
        if(event.target.className == 'unactive' || event.target.className == 'flag') { 
            cellsRightClickHandler(event.target);
            return false;
        }
    })

    return table;
}


