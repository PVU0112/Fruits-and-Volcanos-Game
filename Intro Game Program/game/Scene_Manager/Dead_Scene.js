class Dead_Scene extends Scene{
    constructor(){
        super()
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        this.instantiate(new Lost_Text_GameObject(), new Vector2(650,200))
        this.instantiate(new LoadOne_Button_GameObject(), new Vector2(700,400))
        this.instantiate(new Back_Button_Game_Object())
    }}