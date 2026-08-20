class Guide_GameObject extends GameObject{
    constructor(){
        super("How to Game Button", { layer: "UI"})

        this.addComponent(new Polygon(), {
            points:[
                new Vector2(-400, -25),
                new Vector2(400, -25),
                new Vector2(400, 25),
                new Vector2(-400, 25)
            ]
        })

        this.addComponent(new TextLabel(), {
                
                fillStyle: "white",
                font: "30px Arial"
            })

        this.addComponent(new Guide_Component())
        this.addComponent(new Collider())
    }
}