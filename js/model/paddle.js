class paddle {
    color;
    height;
    width;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.color = 'rgb(255, 255, 255)';
        this.height = canvasHeight * .1; // 10% of view height
        this.width = canvasWidth * .01; // 1% of view width
        this.yPos = (canvasHeight / 2) - (this.height / 2);
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