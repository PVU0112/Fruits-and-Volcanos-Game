class Guide_Scene extends Scene{
    constructor(){
        super()
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        const Left_Text = new GameObject("Left Text",{layer:"UI"})
        Left_Text.addComponent(new TextLabel(),{
            text: "Move Left- Left Arrow Key",
            fillStyle: "Black",
            font: "40px Arial"

        })
        const Right_Text = new GameObject("Right Text",{layer:"UI"})
        Right_Text.addComponent(new TextLabel(),{
            text: "Move Right- Right Arrow Key",
            fillStyle: "Black",
            font: "40px Arial"

        })
        const Up_Text = new GameObject("Up Text",{layer:"UI"})
        Up_Text.addComponent(new TextLabel(),{
            text: "Move Up- Up Arrow Key",
            fillStyle: "Black",
            font: "40px Arial"

        })
        const Dash_Text = new GameObject("Dash Text",{layer:"UI"})
        Dash_Text.addComponent(new TextLabel(),{
            text: "Dash- Arrow Key + D",
            fillStyle: "Black",
            font: "40px Arial"

        })
        const Exit_Text = new GameObject("Exit Text",{layer:"UI"})
        Exit_Text.addComponent(new TextLabel(),{
            text: "B- Exit",
            fillStyle: "Black",
            font: "40px Arial"

        })
       
       
        
       
        this.instantiate(Left_Text, new Vector2(700, 200));
        this.instantiate(Right_Text, new Vector2(700, 300));
        this.instantiate(Up_Text, new Vector2(700, 400));
        this.instantiate(Dash_Text, new Vector2(700, 500));
        this.instantiate(Exit_Text, new Vector2(700, 600));


        this.instantiate(new Back_Button_Game_Object())
        this.instantiate(new LoadOne_Button_GameObject(), new Vector2(700,700))
    }}