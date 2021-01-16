const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new paper(500,400,40)
	bob2 = new paper(350,400,40)
	bob3 = new paper(400,400,40)
	bob4 = new paper(450,400,40)
	bob5 = new paper(300,400,40)

  ground = createSprite(410,100,300,30)
  ground.shapeColor = "white"

  rope1 = new Chain(bob1.body,ground.body,-paperDiameter*2,0)
  rope2 = new Chain(bob2.body,ground.body,-paperDiameter*2,0)
  rope3 = new Chain(bob3.body,ground.body,-paperDiameter*2,0)
  rope4 = new Chain(bob4.body,ground.body,-paperDiameter*2,0)
  rope5 = new Chain(bob5.body,ground.body,-paperDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  drawSprites();
 
}



