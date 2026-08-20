class Super_Bomb_Explosion_GameObject extends GameObject{
    constructor(direction_x,mod_speed){
        super("Super Bomb Explo Game Object",{ layer: "background" })
        this.addComponent(new Collider(),{ isTrigger: true })
        this.addComponent(new Super_Bomb_Explosion_Component(),{direction_x:direction_x, mod_speed:mod_speed})
        this.addComponent(new Polygon(), {points:[
            new Vector2(-25, -125), // top-left
            new Vector2(25, -125), // top-right
            new Vector2(25, 125), // bottom-right
            new Vector2(-25, 125)  // bottom-left
            


            
             


        ],
        fillStyle: 'rgba(243, 114, 16, 0.5)'
        
    })
     


    }


}