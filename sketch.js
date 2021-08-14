
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;
var object;
var angle = 60;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
 var wall_option={
  isStatic : true
 }

  wall = Bodies.rectangle(300,200,300,20,wall_option);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  var object_options = {
    isStatic: true
  }

  object = Bodies.rectangle(100,50,100,20,object_options);
  World.add(world,object);

  var rock_options = {
    resitution:0.95,
    frictionAir:0.01
  }

  rock = Bodies.circle(250,10,30,rock_options);
  World.add(world,rock);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(object,angle)
  push()
  translate(object.position.x,object.position.y)
  rotate(angle)
  rect(0,0,100,20);
  pop()
  angle = angle + 0.1;
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,30,30);
  rect(wall.position.x,wall.position.y,300,20);
  
}

