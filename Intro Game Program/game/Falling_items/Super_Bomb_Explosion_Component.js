class Super_Bomb_Explosion_Component extends Component {
    bomb_duration
    direction_x
    mod_speed
    start() {
        this.farmer = GameObject.find("Main Character Game Object")
        this.left_end = GameObject.find("Invis Wall Game Object L")
        this.right_end = GameObject.find("Invis Wall Game Object R")
        this.bomb_duration = 1

    }
    update() {
        this.transform.position.x +=Time.deltaTime*100 *this.direction_x *this.mod_speed
        //console.log("Update")

        
            
        // if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.farmer)){
        //     this.farmer.destroy()
                
        //     }
        
        if (
            Collisions.isCollisionGameObjectGameObject(this.gameObject, this.right_end) || 
            Collisions.isCollisionGameObjectGameObject(this.gameObject, this.left_end)
        ) {
            this.gameObject.destroy()
        }
                
        

       
    }
     onDestroy() {
       
        
    }
       
    }
