const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var launcher1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(50, 250,20)

	dustbin1 = new Dustbin(600, 600, 100, 100)
	
	ground1 = new ground(width / 2, 50, 800, 20)

	launcher1 = new launcher(paper1.body,{x: 100, y:200});


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("pink");
	paper1.display();
	dustbin1.display();
	ground1.display();
	launcher1.display()
	drawSprites();

}


function mouseDragged() {
Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY})
}
function mouseReleased() {
    launcher1.fly() 
}