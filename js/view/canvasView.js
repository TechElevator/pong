import DIRECTION from '../model/direction.js';

export default class canvasView {
    HEIGHT = 400;
    WIDTH = 800;

    canvas;
    pong;

    constructor (pong) {
        this.canvas = document.getElementById('pongCanvas');
        this.pong = pong;

        this.addEventListeners();
    }

    addEventListeners () {
        // Left Player will use 'w' for UP and 's' for DOWN
        const LEFT_PLAYER_UP = 87;
        const LEFT_PLAYER_DOWN = 83; 

        // Right Player will use 'up arrow' for UP and 'down arrow' for DOWN
        const RIGHT_PLAYER_UP = 38;
        const RIGHT_PLAYER_DOWN = 40;

        window.addEventListener("keydown", (e) => {
            if(e.keyCode === LEFT_PLAYER_UP) {
                this.pong.setLeftPaddleDirection(DIRECTION.UP);
            } 
            else if (e.keyCode === LEFT_PLAYER_DOWN) {
                this.pong.setLeftPaddleDirection(DIRECTION.DOWN);
            }
            else if(e.keyCode === RIGHT_PLAYER_UP) {
                this.pong.setRightPaddleDirection(DIRECTION.UP);
            } 
            else if (e.keyCode === RIGHT_PLAYER_DOWN) {
                this.pong.setRightPaddleDirection(DIRECTION.DOWN);
            }
        });

        window.addEventListener("keyup", (e) => {
            if(e.keyCode === LEFT_PLAYER_UP || e.keyCode === LEFT_PLAYER_DOWN) {
                this.pong.setLeftPaddleDirection(DIRECTION.NONE);
            }
            else if(e.keyCode === RIGHT_PLAYER_UP || e.keyCode === RIGHT_PLAYER_DOWN) {
                this.pong.setRightPaddleDirection(DIRECTION.NONE);
            }
        });
    }

    getHeight () {
        return this.HEIGHT;
    }

    getWidth () {
        return this.WIDTH;
    }

    getContext () {
        return this.canvas.getContext('2d');
    }


    draw (ball, net, leftPaddle, rightPaddle) {
        // draw the canvas
        this.drawCanvas();

        // draw the ball
        this.drawBall(ball);

        // draw the net
        this.drawNet(net);

        // draw the left paddle
        this.drawPaddle(leftPaddle);

        // draw the right paddle
        this.drawPaddle(rightPaddle);
    }

    drawCanvas () {
        this.canvas.width = this.getWidth();
        this.canvas.height = this.getHeight();
        this.canvas.style.background = 'rgb(0, 0, 0)';
    }

    drawBall (ball) {
        const ctx = this.getContext();

        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.xPos, ball.yPos, ball.radius, 0, 2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    drawNet (net) {
        const ctx = this.getContext();

        ctx.beginPath();
        ctx.setLineDash([7, 15]);
        ctx.moveTo(net.xPos, net.yPos);
        ctx.lineTo(net.xPos, net.yPos + net.length);
        ctx.lineWidth = net.strokeWidth;
        ctx.strokeStyle = net.color;
        ctx.stroke();

    }

    drawPaddle (paddle) {
        const ctx = this.getContext();

        ctx.fillStyle = paddle.color;
        ctx.fillRect(paddle.xPos, paddle.yPos, paddle.width, paddle.height);
    }
}