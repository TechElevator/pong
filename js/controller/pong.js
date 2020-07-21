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
    }

    setLeftPaddleDirection (direction) {
        this.leftPaddle.setDirection(direction);
    }

    setRightPaddleDirection (direction) {
        this.rightPaddle.setDirection(direction);
    }
}