class Slingshot {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 20
        }
        this.pointB = pointB;
        this.sling = Constraint.create(opt);
        World.add(myWorld,this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("brown");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}