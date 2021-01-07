const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var bg;

function preload(){
  bg = loadImage("sprites/bg.png");
}

function setup(){
  createCanvas(1200,600);
   
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,590,1200,20);

  box1 = new Box(800,550);
  box2 = new Box(1000,550); 
  pig1 = new Pig(900,550);
  log1 = new Log(900,500,300,PI/2);

  box3 = new Box(800,450);
  box4 = new Box(1000,450);
  pig2 = new Pig(900,450);
  log2 = new Log(900,400,300,PI/2);

  box5 = new Box(900,350);
  log3 = new Log(810,350,150,PI/7);
  log4 = new Log(990,350,150,-PI/7);
  
platform = new Ground(200,430,400,300);
  bird = new Bird(100,100);

  sling = new Slingshot(bird.body,{x:300,y:100});
}

function draw(){
  background(bg);
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  bird.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  platform.display();
  sling.display();
}


