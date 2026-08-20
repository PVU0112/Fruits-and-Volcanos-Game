class Score_GameObject extends GameObject{
    constructor(){
    super("Score Game Object", { layer: "UI"})
    this.addComponent(new TextLabel())
    this.addComponent(new Score_Component())

    }
}