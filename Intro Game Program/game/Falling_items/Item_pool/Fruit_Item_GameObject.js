class Fruit_Item_GameObject extends GameObject{
    constructor(mod_speed){
        super("Fruit Item Game Object",{ layer: "background" })
        this.addComponent(new Collider())
        this.addComponent(new Fruit_Item_Component(),{mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left


        ],
        fillStyle: "green"
        
    })
        


    }


}
