class Level_Selector_GameObject extends GameObject{
    constructor(Level){
        super("Load Level Select Game Object", {layer: "UI"})

        this.addComponent(new Polygon(), {
            points:[
                new Vector2(-25, -25),
                new Vector2(25, -25),
                new Vector2(25, 25),
                new Vector2(-25, 25)
            ]
        })

        this.addComponent(new TextLabel(), {
                
                fillStyle: "white",
                font: "30px Arial"
            })

        this.addComponent(new Level_Selector_Component(),{Level:Level})
        this.addComponent(new Collider())
    }
}