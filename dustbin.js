class dustbin
{
constructor(x,y)
{

    this.image = loadImage("dustbingreen.png");
this.x=x;
this.y=y;
this.dustbinWidth=160;
this.dustbinHeight=100;
this.wallThickness=200;
this.angle=0;

this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, 10, {isStatic:true})
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, 10, this.dustbinHeight, {isStatic:true})
Matter.Body.setAngle(this.leftWallBody, this.angle);


this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, 10, this.dustbinHeight+200, {isStatic:true})
Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
World.add(world, this.bottomBody)
World.add(world, this.leftWallBody)
World.add(world, this.rightWallBody);

}
display()
{
var posBottom=this.bottomBody.position;
var posLeft=this.leftWallBody.position;
var posRight=this.rightWallBody.position;


push()
translate(posBottom.x, posBottom.y);
imageMode(CENTER)
//strokeWeight(4);
stroke(0)
rectMode(CENTER);
rect(0,0,this.dustbinWidth,10);
angleMode(RADIANS)
fill(255)
image(this.image,0,-this.dustbinHeight+30,this.dustbinWidth, this.dustbinHeight*2);
pop()

rect(posRight.x,posRight.y,10,200)
rect(posLeft.x,posLeft.y,10,200)

}

}