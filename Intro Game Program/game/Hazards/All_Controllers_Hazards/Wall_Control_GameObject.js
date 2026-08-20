class Wall_Control_GameObject extends GameObject{
    constructor(){
        super("Wall Control Game Object")
        this.addComponent(new Wall_Control_Component())
        
    }
}