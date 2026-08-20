class SuperBomb_ItemComponent extends Component {
    Explo_location
    mod_speed
    start() {
        this.farmer = GameObject.find("Main Character Game Object")
        this.platform = GameObject.find("Platform Game Object")
        this.spike = GameObject.find("Spikes Game Object")

    }
    update() {
        //console.log("Update")
        this.transform.position.y += Time.deltaTime*75* this.mod_speed
        
        if (GameObject.find("Count Down Game Object").getComponent(Count_Down_Component).game_timer <= 0 
        || GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points<=0){
            this.gameObject.destroy()
        }

        let spikes = GameObject.find("Spikes Game Object")

        if (spikes) {
            let hit = Collisions.isCollisionGameObjectGameObject(this.gameObject, spikes)
            //console.log("collision:", hit)
        }
            
        
        
        // if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.farmer)){
        //     this.gameObject.destroy()
        //     this.farmer.destroy()
            
        //     if (GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points < 0){
        //         GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points = 0
        //     }


        // }
        if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.platform)){
            instantiate(new Super_Bomb_Explosion_GameObject(1,this.mod_speed),new Vector2(this.Explo_location+50,this.transform.position.y-70))
            instantiate(new Super_Bomb_Explosion_GameObject(-1,this.mod_speed),new Vector2(this.Explo_location-50,this.transform.position.y-70))
            this.gameObject.destroy()
        }


    for (const obj of this.gameObject.scene.gameObjects) {
        
        if (obj.name === "Spikes Game Object") {
            
            if (Collisions.isCollisionGameObjectGameObject(this.gameObject, obj)) {
               
                this.gameObject.destroy()
            }

        }
    }
        
       
    }
   
     onDestroy() {
        //console.log("Destroy")
        if (GameObject.find("Count Down Game Object").getComponent(Count_Down_Component).game_timer > 0){
            GameObject.find("Item Spawn Game Object").getComponent(Item_Spawn_Component).fruit_count -=1
        }
        
    }
}