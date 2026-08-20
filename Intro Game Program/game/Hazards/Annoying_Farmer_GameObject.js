class Annoying_Farmer_GameObject extends GameObject{
    constructor(){
        super("Annoying Farmer Game Object",{layer : "background"})
        this.addComponent(new Collider())
        
        this.addComponent(new Annoying_Farmer_Component())
        
            this.addComponent(new Polygon(), {points:[
            
            
            new Vector2(-20, -50),  // front-left
            new Vector2(80, -50),   // front-right
            new Vector2(80, 50),    // back-right
            new Vector2(-80, 50)    // back-left





                // new Vector2(-50, -50), // top-left
                // new Vector2(50, -50), // top-right
                // new Vector2(50, 50), // bottom-right
                // new Vector2(-50, 50)  // bottom-left
                

            ],
        fillStyle:'rgb(33, 252, 9)'
           
         })

        }
        
        
        
    
    }
