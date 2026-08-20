class Back_Button_Game_Object extends GameObject{
    constructor(){
        super("B Game Button", { layer: "UI"})

        
        this.addComponent(new Back_Button_Game_Component())
        
    }
}