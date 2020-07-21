export default class ball {
    angle; // in degrees
    color;
    dx;
    dy;
    radius;
    speed;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.angle = 45;
        this.color = 'rgb(255, 255, 255)';
        this.radius = 5;
        this.speed = 5;
        this.xPos = canvasWidth / 2;
        this.yPos = canvasHeight / 2;

        const rad = this.degreesToRadians(this.angle);
        this.dx = this.speed * Math.cos(rad);
        this.dy = this.speed * Math.sin(rad);
    }

    degreesToRadians (deg) {
        return (deg / 180) * Math.PI;
    }

    move () {
        this.xPos += this.dx;
        this.yPos += this.dy;
    }
}