class Level_Select_Scene extends Scene{
    constructor(){
        super()
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))

        const Level_Text = new GameObject("Title", { layer: "UI" })
        Level_Text.addComponent(new TextLabel(),{
            text: "Select Level",
            fillStyle: "black",
            font: "40px Arial"

        })
        this.instantiate(Level_Text, new Vector2(600, 200));
        this.instantiate(new Level_Selector_GameObject(1),new Vector2(500,400))
        this.instantiate(new Level_Selector_GameObject(2),new Vector2(700,400))
        this.instantiate(new Level_Selector_GameObject(3),new Vector2(900,400))
        
        this.instantiate(new Back_Button_Game_Object())
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        
    }

}