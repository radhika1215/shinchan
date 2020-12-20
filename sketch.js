var shinchan,shinchanImage;
var bg,bgImage;
var ground;
var chocoB,chocoBImage,chocoBGroup;
var enemy,enemyImage,enemyGroup;
var PLAY=1;
var time=PLAY;
var score=0;


function preload(){
bgImage=loadImage("bg.jpg");
  shinchanImage=loadImage("ShinChan.png");
 chocoBImage=loadImage("obstacle.png");
  enemyImage=loadImage("enemy.png");
  
}

function setup() {
 createCanvas(500,400);

  bg=createSprite(150,120,500,500);
  bg.addImage(bgImage);
  bg.scale=0.5;
  
  shinchan=createSprite(50,250,20,20);
  shinchan.addImage(shinchanImage);
  shinchan.scale=0.5;

  ground=createSprite(250,380,500,10);
  
chocoBGroup=new Group();
  
    //collider
  shinchan.setCollider("circle",0,0,130);
  shinchan.collide(ground);
  //shinchan.debug=true;
}

function draw() {

bg.velocityX=-4;
  if (bg.x<10){
    bg.x=bg.width/5
  }
  
  if(keyDown("space")){
    shinchan.velocityY=-12;
  }
  
        //adding gravity
 shinchan.velocityY=shinchan.velocityY+0.8
    shinchan.collide(ground);
  if (chocoBGroup.isTouching(shinchan)){
    chocoBGroup.destroyEach();
    score=score+2;
  }
 /* if (enemyGroup.isTouching(shinchan)){
    enemyGroup.destroyEach();
    score=score-1;
  }*/

time=time+Math.round(getFrameRate()/50);
  
  
    spawnchocoB();
  enemies();

  drawSprites();
  stroke("black");
  textSize(20);
      fill("black")
    text("score:  "+score,100,80);
  textSize(30);
  text("Time: "+ time,100,50)
}
function spawnchocoB(){
 if(frameCount%200===0){
   chocoB=createSprite(500,200,20,20);
  chocoB.y=Math.round(random(100,250))
   chocoB.addImage(chocoBImage);
   chocoB.scale=0.3;
   chocoB.velocityX=-15;
   chocoB.setLifetime=100;
   chocoBGroup.add(chocoB);
 }
  
}
function enemies(){
  if (frameCount%300===0){
    enemy=createSprite(500,200,20,20)
    enemy.y=Math.round(random(100,250))
   enemy.addImage(enemyImage);
   enemy.scale=0.2;
   enemy.velocityX=-9;
   enemy.setLifetime=100;
 //  enemyGroup.add(enemy);
  }
}