class SuperBomb_item_GameObject extends GameObject{
    constructor(Explo_location,mod_speed){
        super("Super Bomb Game Object",{ layer: "background" })
        this.addComponent(new Collider())
        this.addComponent(new SuperBomb_ItemComponent(),{Explo_location:Explo_location, mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left
            ],
        fillStyle: "red",
        })
    }
    
    }