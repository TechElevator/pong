export default class ball {
    angle; // in degrees
    canvasHeight;
    canvasWidth;
    color;
    dx;
    dy;
    radius;
    speed;
    xPos;
    yPos;

    constructor (canvasWidth, canvasHeight) {
        this.angle = 45;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.color = 'rgb(255, 255, 255)';
        this.radius = 5;
        this.speed = 5;
        this.reset();

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

    reset () {
        this.xPos = this.canvasWidth / 2;
        this.yPos = this.canvasHeight / 2;
    }

    reverseX () {
        this.dx *= -1;
    }

    reverseY () {
        this.dy *= -1;
    }

    getDX () {
        return this.dx;
    }

    getRadius () {
        return this.radius;
    }

    getYPos () {
        return this.yPos;
    }

    getLeftEdge () {
        return this.xPos - this.radius;
    }

    getRightEdge () {
        return this.xPos + this.radius;
    }

    getTopEdge () {
        return this.yPos - this.radius;
    }

    getBottomEdge () {
        return this.yPos + this.radius;
    }
}