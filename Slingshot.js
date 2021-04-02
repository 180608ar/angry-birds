class Slingshot {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.06,
            length : 20
        }
        this.pointB = pointB;
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
       
        this.sling = Constraint.create(opt);
        
        World.add(myWorld,this.sling);

    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        image(this.image1,307,82);
        image(this.image2,277,82);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("#301608");

        if(pointA.x<220){
        strokeWeight(9);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.image3,pointA.x-30,pointA.y-10,15,30);
        }

        else{
            strokeWeight(4);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.image3,pointA.x+25,pointA.y-10,15,30);
        }
        pop();
        }
    }
}