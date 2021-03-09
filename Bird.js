class Bird extends Baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
        this.image2 = loadImage("sprites/smoke.png");
        this.trajectory=[];
    }

    display(){
        
        super.display();

        if(this.body.velocity.x>8 && this.body.position.x>250){
        var position=[this.body.position.x,this.body.position.y];
        this.trajectory.push(position);
        }

        for(var i = 0; i<this.trajectory.length; i++){
            image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);
        }
    }
}