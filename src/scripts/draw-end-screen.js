export function endScreen(result){
    const endMessage = document.createElement('h1');
    endMessage.className = 'end-message';
    if(result == 'win'){
        endMessage.textContent = 'Win';
    }else if(result == 'lose'){
        endMessage.textContent = 'Lose';
    }

    const endStats = document.createElement('div');
    endStats.className = 'end-stats';

    const time = document.createElement('h2');
    time.textContent = `Time: ${document.querySelector('.timer').textContent}`;

    const steps = document.createElement('h2');
    steps.textContent = document.querySelector('.steps').textContent;

    const flags = document.createElement('h2');
    flags.textContent = document.querySelector('.flags').textContent;


    document.querySelector('table').remove();

    endStats.append(time, steps, flags)
    document.body.append(endMessage, endStats);
}