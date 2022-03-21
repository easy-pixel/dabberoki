document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Score = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    const width = 20;

    const RedRoki = [1,width,width+1,width+2,width*2+1];
    const BlueRoki = [1,width,width+1,width+2,width*2+1];

    let redPosition = Math.floor(Math.random()*18);
    let bluePosition = Math.floor(Math.random()*18);

    draw =()=> {
        RedRoki.forEach(index => {
            boxes[redPosition + index].classList.add('redRoki')
        })
        BlueRoki.forEach(index => {
            boxes[bluePosition + index].classList.add('blueRoki')
        })
    }
    draw();
})