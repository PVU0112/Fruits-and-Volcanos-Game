class Mushroom_GameObject extends GameObject{
    constructor(){
        super("Mushroom Game Object",{ layer: "foreground" })
        this.addComponent(new Collider())
        this.addComponent(new Mushroom_Component())
        this.addComponent(new Polygon(), {points:[
            
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left


        ],
        fillStyle: "purple"
        
    })
        


    }


}
