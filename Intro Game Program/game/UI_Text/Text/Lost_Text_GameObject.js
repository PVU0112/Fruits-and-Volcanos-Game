class Lost_Text_GameObject extends GameObject{
    constructor(){
    super("Lost Text Game Object", { layer: "UI"})
    this.addComponent(new TextLabel())
    this.addComponent(new Lost_Text_Component())

    }
}