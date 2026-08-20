class Count_Down_GameObject extends GameObject{
    constructor(time){
        super("Count Down Game Object",{layer: "UI"})
        this.addComponent(new TextLabel())
        this.addComponent(new Count_Down_Component(),{time:time})
    }


}