import {getRandom} from './get-random' 
 
export function genBoard(cell){ 
    let cellRow = cell.parentNode.rowIndex;
    let cellColumn = cell.cellIndex;
    let bombs = Array(10).fill('9'); 
    let matrix = []; 
 
    for(let i = 0; i < 10; i++){ 
        let row = []; 
        for(let j = 0; j < 10; j++){ 
            row.push(0); 
        } 
        matrix.push(row); 
    } 
     
    bombs.forEach(el => { 
        let row = getRandom(0, 9);
        let column = getRandom(0, 9);

        while((row == cellRow && column == cellColumn) || (matrix[row][column] == 9)){
            row = getRandom(0, 9);
            column = getRandom(0, 9);
        }

        matrix[row].splice([column], 1, el); 
    }); 
     
    for(let i = 0; i < 10; i++){ 
        for(let j = 0; j < 10; j++){ 
            if(matrix[i][j] !== '9'){
                let count = 0;
                for(let k = i-1; k <= i+1; k++){
                    for(let l = j-1; l <= j+1; l++){
                        if(k >= 0 && k < 10 && l >= 0 && l < 10 && matrix[k][l] === '9'){
                            count++;
                        }
                    }
                }
                matrix[i][j] = count;
            } 
        } 
    } 

    return matrix;
}