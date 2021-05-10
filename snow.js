class Snow{
    constructor(x,y) {
        var options = {
            'restitution':0.2,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,30,30, options);
        
        this.image = loadImage("snow1.png");
        World.add(world, this.body);
       this.imagepos=[]
      }
      display(){
       
        imageMode(CENTER);
        var pos=this.body.position;
          image(this.image,pos.x,pos.y, 30,30)
        
        }
       
      }
