import ball from '../model/ball.js';
import DIRECTION from '../model/direction.js';
import net from '../model/net.js';
import { leftPaddle, rightPaddle } from '../model/paddle.js';

import canvasView from '../view/canvasView.js';

export default class pong {
    ball;
    net;
    leftPaddle;
    rightPaddle;

    view;

    constructor () {
        this.view = new canvasView(this);
        
        const viewWidth = this.view.getWidth();
        const viewHeight = this.view.getHeight();

        this.ball = new ball(viewWidth, viewHeight);
        this.net = new net(viewWidth, viewHeight);
        this.leftPaddle = new leftPaddle(viewWidth, viewHeight);
        this.rightPaddle = new rightPaddle(viewWidth, viewHeight);
    
        this.draw();
        this.loop();
    }

    isGameStopped () {
        return false;
    }

    draw () {
        this.view.draw(
            this.ball,
            this.net,
            this.leftPaddle,
            this.rightPaddle);
    }

    loop () {
        this.update();
        this.draw();

        if (!this.isGameStopped()) {
            window.requestAnimationFrame(() => {
                this.loop();
            });
        }
    }

    update () {
        this.ball.move();
        this.leftPaddle.move();
        this.rightPaddle.move();

        if (this.didBallCollideWithBoundary(this.ball, this.view.getHeight(), 0)) {
            this.ball.reverseY();
        } 

        if (this.didLeftPaddleHitBall(this.ball, this.leftPaddle)
         || this.didRightPaddleHitBall(this.ball, this.rightPaddle)) {
            this.ball.reverseX();
        }
    }

    didBallCollideWithBoundary (ball, lowerBoundaryYPos, upperBoundaryYPos) {
        return ball.getBottomEdge() >= lowerBoundaryYPos 
            || ball.getTopEdge() <= upperBoundaryYPos;
    }

    didLeftPaddleHitBall (ball, paddle) {
        return ball.getDX() < 0
            && ball.getLeftEdge() >= paddle.getLeftEdge()
            && ball.getLeftEdge() <= paddle.getRightEdge()
            && ball.getYPos() >= paddle.getTopEdge()
            && ball.getYPos() <= paddle.getBottomEdge();
    }

    didRightPaddleHitBall (ball, paddle) {
        return ball.getDX() > 0     
            && ball.getRightEdge() >= paddle.getLeftEdge()
            && ball.getRightEdge() <= paddle.getRightEdge()
            && ball.getYPos() >= paddle.getTopEdge()
            && ball.getYPos() <= paddle.getBottomEdge();
    }

    setLeftPaddleDirection (direction) {
        this.leftPaddle.setDirection(direction);
    }

    setRightPaddleDirection (direction) {
        this.rightPaddle.setDirection(direction);
    }
}