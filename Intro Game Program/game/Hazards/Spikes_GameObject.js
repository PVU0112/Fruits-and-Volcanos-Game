class Spikes_GameObject extends GameObject{
    constructor(){
       
        super("Spikes Game Object",{ layer: "foreground" })
        this.addComponent(new Collider())
        this.addComponent(new Spikes_Component())
        
            this.addComponent(new Polygon(), {points:[
            new Vector2(0, -25),   // Top Point (The tip)
            new Vector2(25, 25),   // Bottom Right
            new Vector2(-25, 25)   // Bottom Left
            
            ],
        fillStyle:'rgb(0, 0, 0)'
           
         })

        }
        
        
        
    
    }
