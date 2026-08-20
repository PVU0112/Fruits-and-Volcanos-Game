class Bomb_Item_GameObject extends GameObject{
    constructor(explo_location,mod_speed){
        super("Bomb Item Game Object",{ layer: "background" })
      
        this.addComponent(new Collider())
        
        this.addComponent(new Bomb_Item_Component(),{Explo_location:explo_location, mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -25), // top-left
            new Vector2(25, -25), // top-right
            new Vector2(25, 25), // bottom-right
            new Vector2(-25, 25)  // bottom-left


        ],
        fillStyle: "black"
        
    })
     


    }


}