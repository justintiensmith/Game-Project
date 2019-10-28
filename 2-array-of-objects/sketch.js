
//create an empty array called balls

let balls = [];
let rectangles = [];
let triangles = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
  background(252,128,128);

for (let i = 0; i < rectangles.length; i++) {
  rectangles[i].drawRect();
  rectangles[i].moveRect();
}

	for (let i = 0; i < balls.length; i++) {
	 balls[i].drawBall();
   balls[i].moveBall();
}

	for (let i = 0; i < triangles.length; i++) {
   triangles[i].drawTriangle();
   triangles[i].moveTriangle();
  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(200, 200);
  let  r = new Rect (100, 100);
  let  t = new Triangle (250,100);
  balls.push(b);
  console.log(balls);
  rectangles.push(r);
  console.log(rectangles);
  triangles.push(t);
  console.log(triangles);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}
  	drawBall(){  // draw a ball on the screen at x,y
      		stroke(0);
      		fill("red");
  		    ellipse(this.x,this.y,10,10);
  }
  	moveBall(){ //update the location of the ball, so it moves across the screen
  		this.x = this.x+2;
  		this.y = this.y+.5;
	}
}

class Rect {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  drawRect(){
    stroke(0);
    fill("blue")
    rect(this.x,this.y,10,10)
}
  moveRect(){
    this.x = this.x+1;
    this.y = this.y+1
  }
}

class Triangle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  drawTriangle(){
    stroke(0);
    fill("green")
    triangle(this.x,this.y, this.x+10,this.y-20,this.x+20,this.y)
}
  moveTriangle(){
    this.x = this.x+2.5;
    this.y = this.y+1

  }
}
