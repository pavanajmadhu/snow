const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow=[]

function preload(){
  backgroundImg=loadImage("snow3.jpg")
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);
  
if(frameCount%40===0){
  
  
     snow.push(new Snow(random(0,600),20))
    }

for(var t=0;t<snow.length;t++){
  snow[t].display();
}

   



  
  drawSprites();
  
  
}



  
  