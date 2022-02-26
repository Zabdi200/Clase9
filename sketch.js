var cuadrito;


function setup() {
  createCanvas(400,400);
cuadrito=createSprite(200,200,50,50);

}

function draw() 
{
  
  background("white");
cuadrito.shapeColor="purple";
if (keyDown("up")){
  cuadrito.y=cuadrito.y-10;
}
if(keyDown("down")){
  cuadrito.y=cuadrito.y+10;
}

if(keyDown("left")){
  cuadrito.x=cuadrito.x-10;
}

if(keyDown("right")){
cuadrito.x=cuadrito.x+10;

}


drawSprites();
}




