document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    let boxes = Array.from(document.querySelectorAll('.box'));
    const Health = document.querySelector('#score');
    const StartBtn = document.querySelector('#start_button');
    const ShootBtn = document.querySelector('#shoot');
    const width = 20;
    const height = 38; //2 less than actual height

    //Roki array values
    const RedRoki = [1,width,width+1,width+2,width*2+1];
    const BlueRoki = [1,width,width+1,width+2,width*2+1];
    const bullet = [1, width+1];

    //Roki positions
    let redPosition = (Math.floor(Math.random()*18))+((Math.floor(Math.random()*height)*width));
    let bluePosition = (Math.floor(Math.random()*18))+((Math.floor(Math.random()*height)*width));
    let redBulletPosition = redPosition;
    let blueBulletPosition = bluePosition;

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
        redPosition = (Math.floor(Math.random()*18))+((Math.floor(Math.random()*height)*width));
        bluePosition = (Math.floor(Math.random()*18))+((Math.floor(Math.random()*height)*width));
        redBulletPosition = redPosition;
        blueBulletPosition = bluePosition;
        drawRoki();
        StartBtn.innerHTML = "Reset Game";
    } 

    shoot =()=> {
        unspawnBullet =()=> {
            bullet.forEach(index => {
                boxes[redBulletPosition + index].classList.remove('redBullet');
                boxes[blueBulletPosition + index].classList.remove('blueBullet');
            })
        }
        spawnBullet =()=> {
            bullet.forEach(index => {
                boxes[redBulletPosition + index].classList.add('redBullet')
                boxes[blueBulletPosition + index].classList.add('blueBullet');
            })
        }
        moveDown =()=> {
            unspawnBullet();
            redBulletPosition += width;
            blueBulletPosition += width;
            spawnBullet();
        }
        setInterval(moveDown, 50)
    }
})