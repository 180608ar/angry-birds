class Baseclass {
    constructor(x,y,width,height,angle){
        var abc = {
            restitution:1,
            friction:2,
            density:1
        }
        this.body= Bodies.rectangle(x,y,width,height,abc);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}