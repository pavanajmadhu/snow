const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var imagepos=[]

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
  

  
  
     snow1=new Snow(600,20)


   

snow1.display();


  
  drawSprites();
  
  
}



  
  