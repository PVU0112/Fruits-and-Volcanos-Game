class Invis_Wall_R_GameObject extends GameObject{
    constructor(){
        
        super("Invis Wall Game Object R",{ layer: "foreground" })
        this.addComponent(new Collider())
        this.addComponent(new Invis_Wall_R_Component())
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -350), // top-left
            new Vector2(25, -350), // top-right
            new Vector2(25, 350), // bottom-right
            new Vector2(-25, 350)  // bottom-left
           
        ]
        ,fillStyle:'rgb(0, 0, 0)'
        })

        
    
    }

}
