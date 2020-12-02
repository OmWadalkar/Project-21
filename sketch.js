var wall,thickness;
var bullet,speed,weight;
var bulletWeight,bulletSpeed;
function setup() {
  createCanvas(1600,800);   
 bullet = createSprite(50,200,50,15);
 wall=createSprite(1200,200,thickness,height/2);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bulletWeight=random(30,52);
 bulletSpeed=random(223,321);
}

function draw() {
  background(255); 
  bullet.velocityX=speed;
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0;
  }
  drawSprites();
}