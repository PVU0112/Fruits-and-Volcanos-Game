class Dash_Timer_GameObject extends GameObject{
    constructor(){
        super("Dash Timer Game Object", { layer: "UI"})
        this.addComponent(new TextLabel())
        this.addComponent(new Dash_Timer_Component())
    }


}