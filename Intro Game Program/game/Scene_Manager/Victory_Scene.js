class Victory_Scene extends Scene{
    constructor(){
        console.log(Globals.cur_level)
        super()
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        const Level_Text = new GameObject("Title",{layer:"UI"})
        Level_Text.addComponent(new TextLabel(),{
            text: "You Win",
            fillStyle: "Green",
            font: "40px Arial"

        })
        this.instantiate(Level_Text, new Vector2(700, 200));
        this.instantiate(new LoadOne_Button_GameObject(), new Vector2(700,400))
        this.instantiate(new Back_Button_Game_Object())
    }}