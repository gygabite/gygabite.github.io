// jumpy block
// blame sarene for this

var playing = false
var pipes = []
var count = 0

function setup() {
    createCanvas(600,800)
    frameRate(30)
    pipes.push(new Pipe())
};

function draw() {
    background(64)
    rect(square.x,square.y,square.length,square.width)
    if (!playing) {
        drawText()
    }
    if (playing) {
        gravity()
        for(i = 0; i < pipes.length; i++){
            pipes[i].show()
            pipes[i].update()
            if (pipes[i].x <= -20) {
                pipes.splice(i,1)
            }
            if (pipes[i].hits()) {
                veryDead()
            }
        }
        pipeTimer()
        deadCheck()
    }
};

function keyPressed() {
    if (!playing) {
        if (keyCode === 32) {
            playing = true
        }
    }
    if (playing) {
        if (keyCode === 32) {
            square.yspeed = 15
        }
    }
}