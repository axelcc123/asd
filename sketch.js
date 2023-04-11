
var jake1,jake2,jake3,jake4,jake5

var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

path=loadAnimation("path.png")

jake1=loadAnimation("jake1.png");

jake2=loadAnimation("jake2.png");

jake3=loadAnimation("jake3.png");

jake4=loadAnimation("jake4.png");

jake5=loadAnimation("jake5.png");




 
}

function setup(){
  
  createCanvas(400,400);

  jake1= createSprite(50,180,20,50);
  jake1.addAnimation("running",jake1_running)

  jake2= createSprite(50,180,20,50);
  jake2.addAnimation("running",jake2_running)

  jake3= createSprite(50,180,20,50);
  jake3.addAnimation("running",jake3_running)

  jake4= createSprite(50,180,20,50);
  jake4.addAnimation("running",jake4_running)

  jake5= createSprite(50,180,20,50);
  jake5.addAnimation("running",jake5_running)

  sprite.path("camino");
  path.velocityY=0.6

path.scale=1.2;


jake1.scale=0.08;
jake2.scale=0.08;
jake3.scale=0.08;
jake4.scale=0.08;
jake5.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);

rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo

invisibleGround = createSprite(0,0,400,10);
invisibleGround.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  jake1.velocityX=0.6
  jake2.velocityX=0.6
  jake3.velocityX=0.6
  jake4.velocityX=0.6
  jake5.velocityX=0.6



  edges= createEdgeSprites();
  jake1.collide(edges[3]);
  jake2.collide(edges[3]);
  jake3.collide(edges[3]);
  jake4.collide(edges[3]);
  jake5.collide(edges[3]);

  // colisión de boy con los límites derecho e izquierdo invisibles 

  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
