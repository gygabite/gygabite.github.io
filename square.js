var square = {
    x: 50,
    y: 350,
    length: 50,
    width: 50,
    yspeed: 0
}


function gravity() {
    square.yspeed = square.yspeed - 1;
    square.y = square.y - square.yspeed;
}

function veryDead() {
    playing = false
        square.x = 50
        square.y = 350
        square.yspeed = 0
        pipes = []
}

function deadCheck() {
    if (square.y >= 810) {
        veryDead()
    }
}
