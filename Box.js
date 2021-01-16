class Block{
    constructor(x,y,width,height){

        var op={
            isStatic:false,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);   
    }
     
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
