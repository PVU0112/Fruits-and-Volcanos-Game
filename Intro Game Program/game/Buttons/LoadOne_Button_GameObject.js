class LoadOne_Button_GameObject extends GameObject{
    constructor(){
        super("Load Level Game Button", { layer: "UI"})

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

        this.addComponent(new LoadOne_Button_Component())
        this.addComponent(new Collider())
    }
}