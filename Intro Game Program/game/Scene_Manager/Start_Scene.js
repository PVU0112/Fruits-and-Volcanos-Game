class Start_Scene extends Scene{
    constructor(){
        super()
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        const Start_Text = new GameObject("Fruits and Volcanos",{layer:"UI"})
        Start_Text.addComponent(new TextLabel(),{
            text: "Fruits and Volcanos",
            fillStyle: "Black",
            font: "40px Arial"

        })
        this.instantiate(Start_Text, new Vector2(700, 200));
        this.instantiate(new Level_Transition_GameObject(), new Vector2(700,400))
        this.instantiate(new Guide_GameObject(), new Vector2(700,500))
    }}