class Stone
{
    constructor(x,y,width,height)
    {   var options = 
        {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.image = loadImage("Plucking mangoes/stone.png")

        this.body.position.x = x
        this.body.position.y = y
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}