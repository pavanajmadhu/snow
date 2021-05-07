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
        if(frameCount>60){
        var position=[(random(20,790)),30]
       this.imagepos.push(position)
        imageMode(CENTER);
        for(var i=0;i<100;i++){
          image(this.image,this.imagepos[i][0],this.imagepos[i][1], 30,30)
        }
        }
       
      }
}