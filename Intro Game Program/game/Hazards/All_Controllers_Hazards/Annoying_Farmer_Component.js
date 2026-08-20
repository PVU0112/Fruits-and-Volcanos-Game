class Annoying_Farmer_Component extends Component {
    direction = -1
    expo = 1
    start() {
        console.log(this.gameObject)
       
            
    
        

    }
    update() {

        if (!this.left_end || !this.right_end) {
        this.left_end = GameObject.find("Invis Wall Game Object L")
        this.right_end = GameObject.find("Invis Wall Game Object R")
        return
    }
        
        
        this.transform.position.x +=Time.deltaTime*350 *this.direction
        if (
            Collisions.isCollisionGameObjectGameObject(this.gameObject, this.right_end) || 
            Collisions.isCollisionGameObjectGameObject(this.gameObject, this.left_end)
        ) {
           this.gameObject.destroy()
           
}



        

        
        
    }
    onDestroy() {
        for (const obj of this.gameObject.scene.gameObjects){
        if(obj.name === "Wheels"){
            obj.destroy()
        }
    }
        //console.log("Destroy")
        instantiate(new Annoying_Farmer_GameObject(), new Vector2(1300, 525))
        instantiate(new Wheels_GameObject(), new Vector2(0,20))
        instantiate(new Wheels_GameObject(), new Vector2(30,20))
        
    }

        



   
}
