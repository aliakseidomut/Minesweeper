export function drawThemeChanger(){
    const themeChanger = document.createElement('button'); 
    themeChanger.classList.add('button', 'button_theme');
    themeChanger.textContent = 'Dark';
    
    themeChanger.addEventListener('click', (event) => {
        if(event.target.textContent == 'Light'){
            document.body.classList.remove('body_dark');
            document.querySelector('header').classList.remove('header_dark');
            document.querySelectorAll('button').forEach(el => {
                el.classList.remove('button_dark');
            })
            event.target.textContent = 'Dark';
        }else if(event.target.textContent == 'Dark'){
            document.body.classList.add('body_dark');
            document.querySelector('header').classList.add('header_dark');
            document.querySelectorAll('button').forEach(el => {
                el.classList.add('button_dark');
            })
            event.target.textContent = 'Light';
        }
    });

    return themeChanger;
}