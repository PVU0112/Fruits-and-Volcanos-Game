class Lives_Component extends Component {
    hit_points 
    
 
    start() {
        //console.log("Start")
        

    }
    update() {
        //console.log("Update")

        
        this.gameObject.getComponent(Transform).position = new Vector2(200,30)
        this.gameObject.getComponent(TextLabel).fillStyle= "green"
        this.gameObject.getComponent(TextLabel).font = "30px Time"
        this.gameObject.getComponent(TextLabel).text = "LIVES: "+this.hit_points
        if (this.hit_points < 1){
            SceneManager.loadScene(Dead_Scene)

        }
                

            
            
            
        
    }
    onDestroy() {
        //console.log("Destroy")
      
    }
}