class RedBar
{
constructor(x,y,height,width)
{
var redbar_options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,redbar_options)
          World.add(world,this.body);
          this.width=width;
          this.height=height;
}
display()
{
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
}
}