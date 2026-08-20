class PointsGameObject extends GameObject{
    constructor(){
        super("Points Game Object", { layer: "UI"})
        this.addComponent(new PointsComponent())
    }


}