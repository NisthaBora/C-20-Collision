var f1,m1;

function setup() {
  createCanvas(1200,800);
  f1=createSprite(600, 200, 50, 80);
  f1.shapeColor="yellow";
  f1.debug=true;

  m1=createSprite(400,400,80,50);
  m1.shapeColor='yellow';
  m1.debug=true;
}

function draw() {
  background(0);
  m1.x=mouseX;
  m1.y=mouseY;
  if(m1.x-f1.x<f1.width/2+m1.width/2
    && f1.x-m1.x<f1.width/2+m1.width/2
    && f1.y-m1.y<f1.height/2+m1.height/2
    && m1.y-f1.y<f1.height/2+m1.height/2){
      f1.shapeColor='red';
      m1.shapeColor='red';
    } 
    else{
      f1.shapeColor='yellow';
      m1.shapeColor='yellow';
    } 
  drawSprites();
}