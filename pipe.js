function Pipe() {
    this.x = width
    this.top = 0
    this.bot = 0
    this.xspeed = -5
    this.width = 20
    this.init = function() {
        pipeRandomChoice = Math.floor((Math.random()*375)+1)
        this.top = 100 + pipeRandomChoice
        this.bot = 800 - (pipeRandomChoice+275)
    }
    this.init()
    
    this.show = function() {
        fill(255)
        rect(this.x, 0, this.width, this.top)
        rect(this.x, (this.top+175), this.width, this.bot)
    }
    
    this.update = function() {
        this.x = this.x + this.xspeed
    }
    
    this.hits = function() {
        if ((square.y < this.top || square.y > (800 - this.bot - 50) || square.y <= -50) && (square.x+square.width >= this.x && this.x+this.width >= square.x)) {
            return(true)
        }
    }
}

function pipeTimer() {
    count++
    if (count === 60) {
        pipes.push(new Pipe())
        count = 0
    }
}