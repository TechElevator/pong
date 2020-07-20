export default class ball {
    color;
    radius;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.color = 'rgb(255, 255, 255)';
        this.radius = 5;
        this.xPos = canvasWidth / 2;
        this.yPos = canvasHeight / 2;
    }
}