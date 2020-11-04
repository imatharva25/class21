var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  
   gameObject1=createSprite(100,100,50,50);
   gameObject1.shapeColor="purple";

   gameObject2=createSprite(350,200,50,50);
   gameObject2.shapeColor="purple";


  


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
  gameObject2.x=mouseX;
  gameObject2.y=mouseY;
  //isTouching();
  if(isTouching(gameObject2,gameObject1)){
    gameObject1.shapeColor="red";
    gameObject2.shapeColor="red";
    
    }  
    else {
     gameObject1.shapeColor="purple";
     gameObject2.shapeColor="purple";
    }
    
    bounceOff(movingRect,fixedRect);  



  drawSprites();
}


