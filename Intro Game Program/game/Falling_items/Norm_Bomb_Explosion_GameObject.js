class Norm_Bomb_Explosion_GameObject extends GameObject{
    constructor(mod_speed){
        super("Bomb Explo Game Object",{ layer: "background" })
        this.addComponent(new Collider(), { isTrigger: true })
        this.addComponent(new Norm_Bomb_Explosion_Component(), {mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            new Vector2(-125, -100), // top-left
            new Vector2(125, -100), // top-right
            new Vector2(125, 100), // bottom-right
            new Vector2(-125, 100),  // bottom-left
            


            
             


        ],
        fillStyle: 'rgba(243, 114, 16, 0.5)'
        
    })
     


    }


}

// new Vector2(150, 100), 
// new Vector2(150, 100), 
// new Vector2(250, 100), 
// new Vector2(250, 200),
// new Vector2(90, 200),