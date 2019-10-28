//create an empty array called balls
let balls = [];
let rectangles = [];
//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/3, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 60 == 0) {
      let  b = new Ball(width, random(0,height), -3,2);
      let  r = new Rect(width,random(0,height),-3,2)
      balls.push(b);
      console.log(balls); //print the balls array to the console
      rectangles.push(r);
      console.log(rectangles);
    }

	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

  for (let i = 0; i < rectangles.length; i++) {
          rectangles[i].drawRect();
          rectangles[i].moveRect();
          rectangles[i].bounceRect();
      }
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("purple");
        strokeWeight(3);
    		fill("purple");
		    ellipse(this.x,this.y,15,15);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, yspeed){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.yspeed = yspeed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("turquoise");
		  ellipse(this.x,this.y,20,20);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+ this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-30 && this.x <= me.x+30 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
        if (this.y>=400){
          this.yspeed=-this.yspeed;
        }
        if (this.y<=0){
          this.yspeed=-this.yspeed;
        }
  	}


}

class Rect {
  constructor(x,y,speed,yspeed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.yspeed = yspeed;
  }

  drawRect(){
    stroke(0);
    fill("red")
    rect(this.x,this.y,20,20)
}
  moveRect(){
    this.x += this.speed;
    this.y += this.yspeed
  }
  bounceRect(){
      if (this.x >= me.x-30 && this.x <= me.x+30 && this.y > me.y-40 && this.y < me.y+40){
          this.speed = -this.speed;
      }
      if (this.y>=400){
        this.yspeed=-this.yspeed;
      }
      if (this.y<=0){
        this.yspeed=-this.yspeed;
      }
}
}
