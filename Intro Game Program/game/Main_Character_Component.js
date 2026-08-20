class Main_Character_Component extends Component {
    speed = 250
    dash = 1000
    jump = 450
    dash_duration = 3
    dash_cool_down = 0
    protection_duration
    directionX
    dash_lock = false
    mod_speed = 1
    point_multiply = 1
    dash_multiply = 1
   
 
   
       

    // timeSinceLastFire = 1
    // timeBetweenFire = 1

    start() {
        console.log(this.gameObject)
        this.rigidBody = this.gameObject.getComponent(RigidBody);
        this.hat = GameObject.find("Farming Hat")
        this.camera = GameObject.find("Camera")
        
        // this.left_end = GameObject.find("Invis Wall Game Object L")
        // this.right_end = GameObject.find("Invis Wall Game Object R")
        
        // Look for the object
        // I was trying to implement a new Platform object here, but it did not work, so I had to get rid of it
    let platformObj = GameObject.find("Switch Platform Game Object")
  
    if (platformObj != undefined) {
        // If found, update the component reference
        this.switchPlatform = platformObj.getComponent(Switch_Platform_Component).state
    } else {
        // If NOT found (disabled or destroyed), nullify the reference
        this.switchPlatform = undefined;
        
        
    }
    
      

        
        if (Globals.Mushroom_Duration != 0){
            if(Globals.Mushroom_Active){
                this.mod_speed = 2
                this.point_multiply = 2
                this.dash_multiply = 4
                
            }

        }
        this.ground = false
        this.protection = true
        this.protection_duration = 2
        
        this.rigidBody = this.gameObject.getComponent(RigidBody)  

        
        

    }


    
    onTriggerEnter(other, mtv) {
         if ((other.name === "Bomb Explo Game Object"|| other.name === "Super Bomb Explo Game Object") && this.protection == true){
        other.destroy()
            }
        if ((other.name === "Bomb Explo Game Object"|| other.name === "Super Bomb Explo Game Object") && this.protection == false){
        
        this.hat.destroy()
        this.gameObject.destroy()
        this.protection = true
        this.protection_duration = 2
        GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points -=1
            }
    }
    onCollisionEnter(other, mtv) {

    if(other.name === "Golden Fruit Game Object")
    
        {   
            GameObject.find("Points Game Object").getComponent(PointsComponent).points +=5 * this.point_multiply
            other.destroy()
            
            
        }
    
        if(other.name === "Fruit Item Game Object")
   
        {   
            GameObject.find("Points Game Object").getComponent(PointsComponent).points +=1 * this.point_multiply
            other.destroy()
            
            
        }

        if(other.name === "Mushroom Game Object")
   
        {   
             for (const obj of this.gameObject.scene.gameObjects) {
        
                if (obj.name === "Bomb Item Game Object" || obj.name === "Super Bomb Game Object" ||
        obj.name ==="Bomb Explo Game Object" || obj.name === "Super Bomb Explo Game Object" || obj.name ===  "Fruit Item Game Object"
        || obj.name ===  "Golden Fruit Game Object") {
                    
                        obj.destroy()
                }
                    

                }
            Globals.Mushroom_Duration = 10
            this.camera.getComponent(Camera).backgroundColor = "rgba(247, 190, 2, 0.1)"
            Globals.Mushroom_Active = true
            GameObject.find("Item Spawn Game Object").getComponent(Item_Spawn_Component).mod_speed = 5
            this.mod_speed = 2
            this.point_multiply = 2
            this.dash_multiply = 4
            
            other.destroy()
            GameObject.find("Mushroom Hat").destroy()
            
            
        }

    
    
    if ((other.name === "Bomb Item Game Object" || other.name === "Super Bomb Game Object" ||
        other.name ==="Bomb Explo Game Object" || other.name=="Spikes Game Object" || other.name === "Super Bomb Explo Game Object"
    )&&(mtv.y != 0 || mtv.x !=0 )&& this.protection == false){
        this.hat.destroy()
        this.gameObject.destroy()


        
        // this.gameObject.transform.position.y = 300
        // this.gameObject.transform.position.x = 300
        this.protection = true
        this.protection_duration = 2
        GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points -=1
        

    }

    if ((other.name === "Bomb Item Game Object" || other.name === "Super Bomb Game Object" ||
        other.name ==="Bomb Explo Game Object" || other.name === "Super Bomb Explo Game Object"
        )&&(mtv.y != 0 || mtv.x !=0 )&& this.protection == true){
        
        other.destroy()
        

    }
    if((other.name=="Spikes Game Object"&& this.protection == true))
        this.rigidBody.velocity.y = -400 

    
    if (this.rigidBody.velocity.y > 0 && mtv.y < 0 &&other.name=== "Platform Game Object") {
        
        this.ground = true
        this.rigidBody.velocity.y = 0 // Stop falling
        this.transform.position.y += mtv.y
    
    }

    if (this.rigidBody.velocity.y > 0 &&other.name=== "Switch Platform Game Object"&&this.switchPlatform==1) {
        
        this.rigidBody.velocity.y = 0
        this.ground = true    
    } 
    
    if (this.rigidBody.velocity.y > 0 && mtv.y < 0 &&other.name=== "Switch Platform Game Object"&&this.switchPlatform===0) {
        return
             
    }   

    


    
   
    
}

    
    update() {
        
        
        //console.log(this.rigidBody);
        
        if(Globals.Mushroom_Duration <= 0){
            this.camera.getComponent(Camera).backgroundColor = "white"
            if(Globals.Mushroom_Active){
                instantiate(new Mushroom_GameObject(), new Vector2(700,400))
                instantiate(new Mushroom_semi_GameObject(), new Vector2(0,0))
                Globals.Mushroom_Active = false
                this.dash_multiply = 1
            }
            GameObject.find("Item Spawn Game Object").getComponent(Item_Spawn_Component).mod_speed = 2
            this.mod_speed = 1
            this.point_multiply = 1

        }
        else{
            Globals.Mushroom_Duration -= Time.deltaTime
        }

        if (this.protection === true){
            this.gameObject.getComponent(Polygon).fillStyle = 'rgba(0, 0, 0, 0.3)'
        
            this.protection_duration -= Time.deltaTime * 1
            if (this.protection_duration <= 0){
                this.protection = false
                this.gameObject.getComponent(Polygon).fillStyle = 'rgba(0, 195, 255, 1)'
                
            }


        }
            if (GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points < 0){
                GameObject.find("Lives Game Object").getComponent(Lives_Component).hit_points = 0
            }

       
        // //console.log(Input.keysDown)
        ////console.log(Input.mousePosition)
        // if(Input.mousePosition){
        if(Input.mousePosition){
            //console.log(Collisions.isOverlap(Input.mousePosition, this.gameObject))
        }
       
        this.directionX = 0
        
        if(Input.keysDown.includes("ArrowRight")){
            this.directionX = 1
        }
       
      
        if(Input.keysDown.includes("ArrowLeft")){
            this.directionX = -1
        }
        if(Input.KeysDownThisFrame.includes("ArrowUp")&& this.ground === true){
            this.rigidBody.velocity.y = -400
            this.ground = false
  
        }
        this.dash_cool_down -= Time.deltaTime * this.dash_multiply
        if (this.dash_cool_down <= 1&&(this.directionX != 0)&&Input.keysDown.includes("KeyD")){
            this.dash_lock = true
            
           
        }
        if (this.dash_lock) {
            this.onDash();
        } else {
            
            this.transform.position.x += Time.deltaTime * this.speed * this.directionX* this.mod_speed
        }
        if(Input.keysDown.includes("KeyB")){
            SceneManager.loadScene(Level_Select_Scene)
        }


        //Was used to make Demo Reel
        // if(Input.keysDown.includes("KeyS")){
        //     GameObject.find("Points Game Object").getComponent(PointsComponent).points +=1000
        // }
        
      
        
       
         

                
            // && this.ground == false)
        }

        onDash(){

                if(this.dash_duration >= 0){
                        this.transform.position.x+= Time.deltaTime * this.dash * this.directionX* this.mod_speed
                        this.dash_duration -= Time.deltaTime * 15
                    }
                    else{
                        this.dash_lock = false
                        this.dash_cool_down = 4
                        this.dash_duration = 3
                    }

            }
        onDestroy(){
            instantiate(new Main_Character_GameObject(), new Vector2(300, 300))
            instantiate(new Farming_Hat_GameObject(),new Vector2(-50,-15))
            
            
        }
        
        
        

        
        

        
        // else{
        //     this.transform.position.x+= Time.deltaTime * this.speed * this.directionX
        

        // this.timeSinceLastFire += Time.deltaTime
        // if (this.timeSinceLastFire>this.timeBetweenFire){
        //     this.timeSinceLastFire = 0
        //     instantiate(new LaserGameObject(), this.transform.position.clone())
        // }
    // need a statement that will multiple the direction by the speed, the speed will be either speed or Dash 
    //based on the direction input multiply dash or speed.

    
}
 




  // if (this.left_end) {
        //     if (Collisions.isCollisionGameObjectGameObject(this.gameObject, this.left_end)){
                
        //         if(Input.keysDown.includes("ArrowLeft")){
        //             this.speed = 0
        //             this.dash = 0
                
                    
        //         }
        //         if(Input.keysDown.includes("ArrowRight")&& (!Input.keysDown.includes("ArrowLeft") )){
                
        //             this.speed = 180
        //             this.dash = 900
        //         }
        //     }
        // }
        
        




        // let collision = Collisions.isCollisionGameObjectGameObject(this.gameObject, this.platform)

        // if (collision) {
        //     // Only treat as ground if hitting from above
        //     if (collision.y < 0) {  // negative Y = pushed upward = landing
        //         this.transform.position.y += collision.y   // resolve overlap
        //         this.rigidBody.velocity.y = 0
        //         this.ground = true
        //     }
        // }