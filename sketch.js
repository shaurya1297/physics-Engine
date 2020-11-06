const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine , world, object ;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options={isStatic:true}
  ground = Bodies.rectangle(400,390,800,50,options)
      World.add(world,ground)
      var ball_options={restitution:1.0}
  ball = Bodies.circle(400,100,20,ball_options)
  World.add(world,ball)
  var ball1_options={restitution:1.1}
  ball2 = Bodies.circle(400,100,15,ball1_options)
  World.add(world,ball2)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,15)
}