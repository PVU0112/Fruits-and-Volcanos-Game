class Mushroom_Component extends Component {
    x = 10
    start() {
        this.farmer = GameObject.find("Main Character Game Object")
        this.platform = GameObject.find("Platform Game Object")

    }
    update() {
        //console.log("Update")

        this.transform.position.y += Time.deltaTime*10 * this.x


        if (GameObject.find("Count Down Game Object").getComponent(Count_Down_Component).game_timer <= 0 
        || GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points<=0){
            this.gameObject.destroy()
        }
        
        if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.platform)){
            this.x = 0
            


        }
    
   
       
    }
    
     onDestroy() {
        //console.log("Destroy")
        
        
    }
}
