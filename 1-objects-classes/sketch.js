//create a variable to hold one ball
let b;
let anotherBall;
let anotheranotherBall;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"blue"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"purple");
  anotheranotherBall = new Ball(300, 69, "orange")
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    anotheranotherBall.drawBall();
    anotheranotherBall.moveBall();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(2);
    		fill(this.color);
		    ellipse(this.x,this.y,20,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+20;
		this.y = this.y+5;
	}
}
