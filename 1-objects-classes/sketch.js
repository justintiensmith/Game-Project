//create a variable to hold one ball
let b;
let anotherBall;
let anotheranotherBall;
let scope;
// let banana;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"blue"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"purple",20, 20, -1,-1);
  anotheranotherBall = new Ball(300, 69, "orange",35,20, 1,1);
  scope = new Ball (250,40, "red",20,30, 2,1);
  // banana = new Banana1 (100,100)
}

function draw(){
	background("green");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    anotheranotherBall.drawBall();
    anotheranotherBall.moveBall();
    scope.drawBall();
    scope.moveBall();
    // banana.drawBanana1();
    // banana.moveBanana1();
}


//ball class from which to create new balls with similar properties.
class Ball {
	constructor(x,y,color,diameter,speed){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter = diameter;
        this.speed = speed;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(2);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,this.diameter,this.speed,this.speed);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+1;
		this.y = this.y+1;
	}
}

// class Banana1() {
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//   }
//   function drawBanana1() {
//     push();
//     translate(this.x,this.y);
//   //scale(.5);
//   //VERTEX
//   scale(0.3);
//   //rotate(random());
//   fill(255,241,128);
//   beginShape();
//   vertex(25,309);
//   vertex(108,324);
//   vertex(183,329);
//   vertex(251,329);
//   vertex(300,319);
//   vertex(358,302);
//   vertex(394,279);
//   vertex(428,256);
//   vertex(450,231);
//   vertex(475,190);
//   vertex(490,148);
//   vertex(458,190);
//   vertex(410,226);
//   vertex(363,242);
//   vertex(242,265);
//   vertex(127,270);
//   vertex(39,279);
//   vertex(25,288);
//   vertex(28,310);
//   endShape();
//   //INSIDEVERTEX
//   fill(255,226,0);
//   beginShape();
//   vertex(10,326);
//   vertex(15,346);
//   vertex(56,391);
//   vertex(116,411);
//   vertex(195,433);
//   vertex(255,441);
//   vertex(306,438);
//   vertex(371,426);
//   vertex(451,385);
//   vertex(523,336);
//   vertex(567,278);
//   vertex(590,210);
//   vertex(587,161);
//   vertex(573,128);
//   vertex(552,104);
//   vertex(543,19);
//   vertex(495,39);
//   vertex(495,111);
//   vertex(484,157);
//   vertex(468,198);
//   vertex(429,255);
//   vertex(377,291);
//   vertex(317,317);
//   vertex(243,331);
//   vertex(175,330);
//   vertex(56,314);
//   vertex(24,308);
//   vertex(10,325);
//   endShape();
//   //BROWN LINE
//   strokeWeight(14)
//   stroke(204,161,12);
//   bezier(360,427,438,408,536,328,582,236);
//   //INSIDE BBANANA
//   stroke(255,226,0);
//   strokeWeight(15);
//   bezier(27,311,116,327,175,335,248,331);
//   bezier(248,331,306,324,372,301,426,260);
//   bezier(426,260,454,229,477,194,493,148);
//   //BROWN SPOT 1
//   strokeWeight(15);
//   stroke(68,36,0);
//   bezier(13,319,16,313,18,306,20,296);
//   bezier(499,27,508,25,524,17,543,13);
//   //FULL BANANA
//   strokeWeight(12);
//   stroke(0);
//   noFill();
//   bezier(15,347,3,319,6,294,33,281);
//   bezier(33,281,67,276,101,273,181,269);
//   bezier(181,269,253,269,343,255,399,235);
//   bezier(399,235,445,200,511,190,495,38);
//   bezier(495,38,480,19,511,8,527,5);
//   bezier(527,5,547,3,557,11,544,24);
//   bezier(544,24,541,51,545,80,550,106);
//   bezier(550,106,576,119,590,154,591,206);
//   bezier(591,206,560,340,514,340,458,385);
//   bezier(458,385,375,432,307,456,185,430);
//   bezier(185,430,132,420,98,408,61,398);
//   bezier(61,398,41,377,29,360,15,347);
//   //BROWN SPOTS
//   strokeWeight(6);
//   stroke(0)
//   bezier(500,39,512,37,523,27,539,22);
//   bezier(14,325,26,321,26,304,26,290);
//   pop();
// }
//
//
//
//
// }
