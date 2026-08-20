class Item_Spawn_Component extends Component {
    fruit_count = 0
    fruit_cooldown = 0
    Fruit_limit = 20
    item_index = 0
    LevelItems 
    mod_speed
    start() {
        //console.log("Start")
        this.countDown = GameObject.find("Count Down Game Object").getComponent(Count_Down_Component).game_timer
        this.lives = GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points
        



    }
    update() {
        this.fruit_count = this.gameObject.scene.gameObjects.filter(go => 
            go.name === "Fruit Item Game Object" || 
            go.name === "Bomb Item Game Object" ||
            go.name === "Super Bomb Game Object" ||
            go.name === "Golden Fruit Game Object"
        ).length
        console.log(this.fruit_count)
        //console.log(this.LevelItems)
        this.randomize_location = Math.floor(Math.random()* 1120+100)
        if (this.countDown <= 0 
        || this.lives<=0){
            this.gameObject.destroy()
            this.countDown  = 0 
            


        }  
       if(this.fruit_cooldown > 1 ){
            
            if(this.fruit_count<this.Fruit_limit){

                this.item_order = this.LevelItems[this.item_index%this.LevelItems.length] 
                
                
                if(this.item_order === 1){
                    
                    
                    instantiate(new Fruit_Item_GameObject(this.mod_speed), new Vector2(this.randomize_location, 0))
                    
                }

                if(this.item_order === 2){
                    
                    instantiate(new Bomb_Item_GameObject(this.randomize_location,this.mod_speed), new Vector2(this.randomize_location, 0))
                    

                }

                if(this.item_order === 3){
                    
                    instantiate(new SuperBomb_item_GameObject(this.randomize_location,this.mod_speed), new Vector2(this.randomize_location, 0))
                    
                    
                }

                if(this.item_order === 4){
                    
                    instantiate(new GoldenFruit_ItemGameObject(this.mod_speed), new Vector2(this.randomize_location, 0))
                

                }
                this.item_index+=1
              
                this.fruit_cooldown = 0
        
                
        }
    }
    else{
        this.fruit_cooldown += 1*Time.deltaTime*this.mod_speed
    }   
}
   onDestroy() {
        //console.log("Destroy")
        //Engine.currentScene = new Dead_Scene()
       
      
    }
        
    }



