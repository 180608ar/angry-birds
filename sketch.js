const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

function setup(){
  createCanvas(1200,600);
   
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,590,1200,20);

  box1 = new Box(800,550);
  box2 = new Box(1000,550); 
  pig1 = new Pig(900,550);

  bird = new Bird(100,100);
}

function draw(){
  background(0);
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  bird.display();
}


