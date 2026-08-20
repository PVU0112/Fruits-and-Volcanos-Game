class Level_1 extends Scene{
    constructor(){
        super("White")
        this.instantiate(new VolcanoParticleSystemGameObject(), new Vector2(380,130))
        this.instantiate(new BlueParticleGameObject(), new Vector2(300,700))
         
        
        this.instantiate(new Invincible_Camera_GameObject(),new Vector2(700,400))
        const Rect_UI = this.instantiate(new GameObject({ layer: "UI" }), new Vector2(0, -50))
        Rect_UI.addComponent(new Polygon(), {points:[
            new Vector2(0, 50), // top-left
            new Vector2(1440, 50), // top-right
            new Vector2(1440, 100), // bottom-right
            new Vector2(0, 100)  // bottom-left
           
        ],
        fillStyle:'rgba(0, 0, 0, 1)'
        })
        this.instantiate(new Item_Spawn_GameObject([1,4,1,2,1,2,1,4],2))
        
        //this.instantiate(new Switch_Platform_Controller_GameObject())


        // this.instantiate(new BatSymbolGameObject(), new Vector2(0, 0))
        // this.instantiate(new BatSymbolGameObject(), new Vector2(100, 100))
        
        
        this.instantiate(new Main_Character_GameObject(), new Vector2(300, 300))
        this.instantiate(new Farming_Hat_GameObject(),new Vector2(-50,-15))
        this.instantiate(new PlatformGameObject(720), new Vector2(720, 750))
        

        
        
        
        //this.instantiate(new Annoying_Farmer_GameObject(), new Vector2(550, 100))
        
        this.instantiate(new Dash_Timer_GameObject())
        this.instantiate(new Count_Down_GameObject(180))
        this.instantiate(new Lives_GameObject(5))
        this.instantiate(new Score_GameObject())
        const Curr_Level = new GameObject("C_Level Text",{layer:"UI"})
        Curr_Level.addComponent(new TextLabel(),{
            text: "Level -1",
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

    
    



    
    
    this.instantiate(new Spike_Controller_GameObject(4,150,700))
    this.instantiate(new Spike_Controller_GameObject(4,1050,700))
    this.instantiate(new Wall_Control_GameObject())
     

    }


}
//Engine.canvas.height 778
//Engine.canvas.width 588