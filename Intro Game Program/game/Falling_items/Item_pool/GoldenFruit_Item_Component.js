class Golden_Fruit_ItemComponent extends Component {
    mod_speed
    start() {
        this.farmer = GameObject.find("Main Character Game Object")
        this.platform = GameObject.find("Platform Game Object")
  

    }
    update() {
        //console.log("Update")
        this.transform.position.y += Time.deltaTime*150* this.mod_speed

        if (GameObject.find("Count Down Game Object").getComponent(Count_Down_Component).game_timer <= 0 
        || GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points<=0){
            this.gameObject.destroy()
        }
        
       

        // if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.farmer)){
        //     GameObject.find("Points Game Object").getComponent(PointsComponent).points +=5
        //     this.gameObject.destroy()
            
        // }

        if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.platform)){
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