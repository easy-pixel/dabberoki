document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Health = document.querySelector('#score');
    const StartBtn = document.querySelector('#start_button');
    const width = 20;

    const RedRoki = [1,width,width+1,width+2,width*2+1];
    const BlueRoki = [1,width,width+1,width+2,width*2+1];

    let redPosition = Math.floor(Math.random()*18);
    let bluePosition = Math.floor(Math.random()*18);

    StartBtn.onclick = function() {init()};

    init =()=> {
        undrawRoki =()=> {
            RedRoki.forEach(index => {
                boxes[redPosition + index].classList.remove('redRoki')
            })
            BlueRoki.forEach(index => {
                boxes[bluePosition + index].classList.remove('blueRoki')
            })
        }

        drawRoki =()=> {
            RedRoki.forEach(index => {
                boxes[redPosition + index].classList.add('redRoki')
            })
            BlueRoki.forEach(index => {
                boxes[bluePosition + index].classList.add('blueRoki')
            })
        }
        undrawRoki();
        redPosition = Math.floor(Math.random()*18);
        bluePosition = Math.floor(Math.random()*18);
        drawRoki();
        StartBtn.innerHTML = "Reset Game";
    } 
})