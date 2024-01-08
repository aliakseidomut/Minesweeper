import { drawBoard } from "./draw-board";
import { drawThemeChanger } from "./theme-changer";

export function drawMenu(){
    const header = document.createElement('header');
     
    const newGame =  document.createElement('button');
    newGame.classList.add('button', 'button_new-game');
    newGame.textContent = 'New game';
    newGame.addEventListener('click', () => {
        if(!document.querySelector('table')) {
            document.querySelector('.end-message').remove();
            document.querySelector('.end-stats').remove();
            document.body.append(drawBoard());
        } else {
            document.querySelector('table').remove();
            document.body.append(drawBoard());
        }
    })

    const stats = document.createElement('div');
    stats.className = 'stats';

    const timer = document.createElement('p');
    timer.textContent = '0';
    timer.className = 'timer';

    const flags = document.createElement('p');
    flags.className = 'flags';
    flags.textContent = 'Flags: 0';

    const steps = document.createElement('p');
    steps.className = 'steps';
    steps.textContent = 'Steps: 0';

    stats.append(timer, flags, steps);

    header.append(newGame, stats, drawThemeChanger());

    return header;
}



