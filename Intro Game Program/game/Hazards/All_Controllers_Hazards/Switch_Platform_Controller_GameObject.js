class Switch_Platform_Controller_GameObject extends GameObject{
    constructor(){
        super("Switch Platform Control Game Object")
        this.addComponent(new Switch_Platform_Controller_Component())
        
    }
}