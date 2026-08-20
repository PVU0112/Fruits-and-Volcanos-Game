class Main_Character_GameObject extends GameObject{
    constructor(){
        super("Main Character Game Object",{ layer: "foreground" })
        this.addComponent(new Main_Character_Component())
        this.addComponent(new Collider())
        this.addComponent(new RigidBody(),{gravity: new Vector2(0,300)})
        
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left
           
        ]
        ,fillStyle:'rgb(0, 195, 255)'
        })
    }

}