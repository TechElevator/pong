import DIRECTION from './direction.js';

class paddle {
    canvasHeight;
    color;
    direction;
    height;
    width;
    speed;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.canvasHeight = canvasHeight;
        this.color = 'rgb(255, 255, 255)';
        this.direction = DIRECTION.NONE;
        this.height = canvasHeight * .1; // 10% of view height
        this.speed = 8; // TODO: make responsive later
        this.width = canvasWidth * .01; // 1% of view width
        this.yPos = (canvasHeight / 2) - (this.height / 2);
    }

    getLeftEdge () {
        return this.xPos;
    }

    getRightEdge () {
        return this.xPos + this.width;
    }

    getTopEdge () {
        return this.yPos;
    }

    getBottomEdge () {
        return this.yPos + this.height;
    }

    move () {
        const topEdgePos = 0;
        const bottomEdgePos = this.canvasHeight;

        if (this.direction === DIRECTION.UP) {

            if (this.yPos > (topEdgePos + this.speed)) {
                this.yPos -= this.speed;
            } else if (this.yPos > topEdgePos) {
                this.yPos = topEdgePos;
            }

        } else if (this.direction === DIRECTION.DOWN) {

            if (this.yPos < (bottomEdgePos - this.height - this.speed)) {
                this.yPos += this.speed;
            } else if (this.yPos < (bottomEdgePos - this.height)) {
                this.yPos = bottomEdgePos - this.height;
            }
            
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