var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,40,40);
box.shapeColor = "blue";
}

function draw() 
{
  background("white");
if(keyIsDown(RIGHT_ARROW)){

 background("yellow")
}
if(keyIsDown(LEFT_ARROW)){

  background("orange")
}

if(keyIsDown(UP_ARROW)){

  background("red")
}
if(keyIsDown(DOWN_ARROW)){

  background("green")
}


drawSprites();
}



