var fixedRect
var movingRect
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(200, 200, 90, 50);
 fixedRect= createSprite(500, 200, 70, 50);
 box =createSprite (400,200,50,76);
 
 movingRect2= createSprite(200, 200, 90, 50);
 movingRect2.velocityX = 3
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
if (istouching(movingRect,fixedRect)){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
  bounceoff(box,movingRect2);
  bounceoff(movingRect,movingRect2)
  drawSprites();
  
}

   
    
  
    