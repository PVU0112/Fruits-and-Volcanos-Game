class Norm_Bomb_Explosion_Component extends Component {
    bomb_duration
    mod_speed
    start() {
        this.farmer = GameObject.find("Main Character Game Object")
        
        this.bomb_duration = 1

    }
    update() {
        //console.log("Update")

        if (this.bomb_duration > 0){
            // if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.farmer)){
            //     this.farmer.destroy()
                
            //     }
            this.bomb_duration-= Time.deltaTime * .5 * this.mod_speed
        }
        else{
            this.gameObject.destroy()
        }
        
        

       
    }
     onDestroy() {
       
        
    }
       
    }
