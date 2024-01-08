export function setColor(num, cell){
    let color;

    if(num == 1){
        color = 'blue';
    }else if(num == 2){
        color = 'green';
    }else if(num == 3){
        color = 'red';
    }else if(num == 4){
        color = 'purple';
    }else{
        color = 'yellow';
    }

    cell.style.color = color;
}