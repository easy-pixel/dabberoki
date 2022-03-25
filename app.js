document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Health = document.querySelector('#score');
    const StartBtn = document.querySelector('#start_button');
    const ShootBtn = document.querySelector('#shoot');
    const width = 20;
    const height = 40; 

    //Roki array values
    const RedRoki = [1,width,width+1,width+2,width*2+1];
    const BlueRoki = [1,width,width+1,width+2,width*2+1];
    const bullet = [1, width+1];

    //Roki positions
    let redPosition = Math.floor(Math.random()*18);
    let bluePosition = Math.floor(Math.random()*18);
    let bulletPosition = redPosition;

    //Start button initiates game
    StartBtn.onclick = function() {init()};

    //Shoot
    ShootBtn.onclick = function() {shoot()};

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
        bulletPosition = redPosition;
        drawRoki();
        StartBtn.innerHTML = "Reset Game";
    } 

    shoot =()=> {
        unspawnBullet =()=> {
            bullet.forEach(index => {
                boxes[bulletPosition + index].classList.remove('bullet')
            })
        }
        spawnBullet =()=> {
            bullet.forEach(index => {
                boxes[bulletPosition + index].classList.add('bullet')
            })
        }
        moveDown =()=> {
            unspawnBullet();
            bulletPosition += width;
            spawnBullet();
        }
        setInterval(moveDown, 50)
    }
})