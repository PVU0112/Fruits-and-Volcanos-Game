class GoldenFruit_ItemGameObject extends GameObject{
    constructor(mod_speed){
        super("Golden Fruit Game Object",{ layer: "background" })
        this.addComponent(new Collider())
        this.addComponent(new Golden_Fruit_ItemComponent(),{mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left


        ],
        fillStyle: "yellow"
        
    })
        


    }


}