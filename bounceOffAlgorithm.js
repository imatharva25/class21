var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
   fixedRect.debug=true;

   movingRect=createSprite(700,200,80,50);
   movingRect.shapeColor="green";
   movingRect.debug=true;

   movingRect.velocityX=-3.5;
   fixedRect.velocityX=3.5;
}

function draw() {
  background("yellow"); 
 createEdgeSprites();
bounceOff(movingRect,fixedRect);  
  

drawSprites();
}
