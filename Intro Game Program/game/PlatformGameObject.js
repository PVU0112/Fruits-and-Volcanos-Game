class PlatformGameObject extends GameObject{
    constructor(x){
        super("Platform Game Object",{ layer: "foreground" })
        this.addComponent(new PlatformGameComponent())
        this.addComponent(new Collider())
        this.addComponent(new Polygon(), {points:[
            new Vector2(-x, -25), // top-left
            new Vector2(x, -25), // top-right
            new Vector2(x, 25), // bottom-right
            new Vector2(-x, 25)  // bottom-left

            ],
        fillStyle: "#fb0303",
        })
    }
    
    }
    
            


            // new Vector2(300, 50), // top-left
            // new Vector2(1200, 50), // top-right
            // new Vector2(1200, 100), // bottom-right
            // new Vector2(-300, 100)  // bottom-left