import ball from '../model/ball.js';
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
        this.view = new canvasView();
        
        const viewWidth = this.view.getWidth();
        const viewHeight = this.view.getHeight();

        this.ball = new ball(viewWidth, viewHeight);
        this.net = new net(viewWidth, viewHeight);
        this.leftPaddle = new leftPaddle(viewWidth, viewHeight);
        this.rightPaddle = new rightPaddle(viewWidth, viewHeight);
    
        this.view.draw(
            this.ball,
            this.net,
            this.leftPaddle,
            this.rightPaddle);
    }
}