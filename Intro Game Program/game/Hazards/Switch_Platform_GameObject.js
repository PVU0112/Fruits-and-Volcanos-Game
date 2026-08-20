class Swtich_Platform_GameObject extends GameObject{
    constructor(state){
        super("Switch Platform Game Object")
        this.addComponent(new Collider())
        this.addComponent(new Switch_Platform_Component(), {state:state})
        if (state === 1){
        
        this.addComponent(new Polygon(), {points:[
            new Vector2(-100, 25), // top-left
            new Vector2(100, 25), // top-right
            new Vector2(100, -25), // bottom-right
            new Vector2(-100, -25)  // bottom-left
            ],
        fillStyle:'rgb(245, 96, 1, 1)'})
    }
        if (state === 0){
        this.addComponent(new Polygon(), {points:[
            new Vector2(-100, 25), // top-left
            new Vector2(100, 25), // top-right
            new Vector2(100, -25), // bottom-right
            new Vector2(-100, -25)  // bottom-left
            ],
        fillStyle:'rgb(245, 96, 1, .3)'


        })
    
    }
    }
}