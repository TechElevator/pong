import DIRECTION from './direction.js';

class paddle {
    color;
    direction;
    height;
    width;
    speed;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.color = 'rgb(255, 255, 255)';
        this.direction = DIRECTION.NONE;
        this.height = canvasHeight * .1; // 10% of view height
        this.speed = 5; // TODO: make responsive later
        this.width = canvasWidth * .01; // 1% of view width
        this.yPos = (canvasHeight / 2) - (this.height / 2);
    }

    move () {
        if(this.direction === DIRECTION.UP) {
            this.yPos -= this.speed;
        } else if (this.direction === DIRECTION.DOWN) {
            this.yPos += this.speed;
        }
    }

    setDirection (direction) {
        this.direction = direction;
    }
}

export class leftPaddle extends paddle {
    constructor (canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.xPos = 0 + (5 * this.width);
    }
}

export class rightPaddle extends paddle {
    constructor (canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.xPos = canvasWidth - (6 * this.width);
    }
}