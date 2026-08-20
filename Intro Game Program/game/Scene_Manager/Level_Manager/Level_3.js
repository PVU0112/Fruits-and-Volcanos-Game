class Level_3 extends Scene{
    constructor(){
        super("White")
        Globals.Mushroom_Active = false   
        Globals.Mushroom_Duration = -1
        this.instantiate(new VolcanoParticleSystemGameObject(), new Vector2(380,130))
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        this.instantiate(new Mushroom_GameObject(), new Vector2(700,400))
       this.instantiate(new Mushroom_semi_GameObject(), new Vector2(0,0))
        const Rect_UI = this.instantiate(new GameObject({ layer: "UI" }), new Vector2(0, -50))
        Rect_UI.addComponent(new Polygon(), {points:[
            new Vector2(0, 50), // top-left
            new Vector2(1440, 50), // top-right
            new Vector2(1440, 100), // bottom-right
            new Vector2(0, 100)  // bottom-left
           
        ],
        fillStyle:'rgba(0, 0, 0, 1)'
        })
        this.instantiate(new Item_Spawn_GameObject([1.1,2,1,4,3,1,1,1,4,3,1,1],2))
        


  

        this.instantiate(new Main_Character_GameObject(), new Vector2(300, 300))
        this.instantiate(new Farming_Hat_GameObject(),new Vector2(-50,-15))
        this.instantiate(new PlatformGameObject(500), new Vector2(700, 600))
        

        
        
        
     
        
        this.instantiate(new Dash_Timer_GameObject())
        this.instantiate(new Count_Down_GameObject(90))
        this.instantiate(new Lives_GameObject(5))
        this.instantiate(new Score_GameObject())
         const Curr_Level = new GameObject("C_Level Text",{layer:"UI"})
        Curr_Level.addComponent(new TextLabel(),{
            text: "Level -3",
            fillStyle: "Purple",
            font: "30px Time"

        })
          this.instantiate(Curr_Level, new Vector2(1150, 30));
        
        
        
    

       
        

        

        

        const VolcanoRS = this.instantiate(new GameObject(), new Vector2(740, 680))
        VolcanoRS.addComponent(new Polygon(), {points:[
            new Vector2(50,-400),
            new Vector2(50,50),
            new Vector2(700,50)
           
        ],
        fillStyle:'rgba(255, 0, 0, 0.1)'
        ,
        strokeStyle: 'rgba(255, 0, 0, 0.1)'})

        const VolcanoLS = this.instantiate(new GameObject(), new Vector2(690, 680))
        VolcanoLS.addComponent(new Polygon(), {points:[
            new Vector2(50,-400),
            new Vector2(50,50),
            new Vector2(-700,50)
           
        ],
        fillStyle:'rgba(255, 0, 0, 0.1)'
        ,
        strokeStyle: 'rgba(255, 0, 0, 0.1)'})

        const Lava = this.instantiate(new GameObject(), new Vector2(740, 640))
        Lava.addComponent(new Polygon(), {points:[
            new Vector2(0, -380), // top-left
            new Vector2(50, -380), // top-right
            new Vector2(50, 95), // bottom-right
            new Vector2(0, 95)  // bottom-left
           
        ],
        fillStyle:'rgba(255, 0, 0, 0.1)'
        })

    this.instantiate(new PointsGameObject())

    
    



    
    
    this.instantiate(new Spike_Controller_GameObject(30,-30,760))
    
    this.instantiate(new Wall_Control_GameObject())
        
    }}