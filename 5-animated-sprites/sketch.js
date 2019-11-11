// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var sprite;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between

  sprite = loadAnimation('IMG-4592.jpg', 'IMG-4593.jpg', 'IMG-4594.jpg','IMG-4595.jpg','IMG-4596.jpg','IMG-4597.jpg','IMG-4598.jpg','IMG-4599.jpg','IMG-4600.jpg',);

}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0, 255, 150);


  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  imageMode(CENTER)
  angleMode(DEGREES)
  rotate(90);
  scale(.2);
  animation(sprite, 2100, -2100);

}


//Collision detection - Bouncing behavior

var sprite;

function setup() {
  createCanvas(800, 400);
//
//   sprite = new Group();
//
//   for(var i=0; i<20; i++)
//   {
//     var sprite = createSprite(random(0, width), random(0, height));
//     sprite.addAnimation('IMG-4592.jpg', 'IMG-4593.jpg', 'IMG-4594.jpg','IMG-4595.jpg','IMG-4596.jpg','IMG-4597.jpg','IMG-4598.jpg','IMG-4599.jpg','IMG-4600.jpg');
//     sprite.setCollider('sprite', -2, 2, 55);
//     sprite.setSpeed(random(2, 3), random(0, 360));
//
//     //scale affects the size of the collider
//     circle.scale = random(0.5, 1);
//     //mass determines the force exchange in case of bounce
//     circle.mass = circle.scale;
//     //restitution is the dispersion of energy at each bounce
//     //if = 1 the circles will bounce forever
//     //if < 1 the circles will slow down
//     //if > 1 the circles will accelerate until they glitch
//     //circle.restitution = 0.9;
//     circles.add(circle);
//   }
//
//   //all sprites bounce at the screen edges
//   for(var i=0; i<allSprites.length; i++) {
//     var s = allSprites[i];
//     if(s.position.x<0) {
//       s.position.x = 1;
//       s.velocity.x = abs(s.velocity.x);
//     }
//
//     if(s.position.x>width) {
//       s.position.x = width-1;
//       s.velocity.x = -abs(s.velocity.x);
//     }
//
//     if(s.position.y<0) {
//       s.position.y = 1;
//       s.velocity.y = abs(s.velocity.y);
//     }
//
//     if(s.position.y>height) {
//       s.position.y = height-1;
//       s.velocity.y = -abs(s.velocity.y);
//     }
//   }
//
//   drawSprites();
//
// }
//
// //
// // check this link out!
// // http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions4.js
