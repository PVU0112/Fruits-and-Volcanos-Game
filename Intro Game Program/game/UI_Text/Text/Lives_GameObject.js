class Lives_GameObject extends GameObject{
    constructor(hit_points){
    super("Lives Game Object", { layer: "UI"})
    this.addComponent(new TextLabel())
    this.addComponent(new Lives_Component(),{hit_points:hit_points})

    }
}