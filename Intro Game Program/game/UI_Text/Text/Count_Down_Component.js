class Count_Down_Component extends Component {
    time 
    start() {
        //console.log("Start")

    }
    update() {
        
       //console.log("Update")
       this.gameObject.getComponent(Transform).position = new Vector2(400,30)
       this.gameObject.getComponent(TextLabel).fillStyle= "blue"
       this.gameObject.getComponent(TextLabel).font = "30px Time"
       this.gameObject.getComponent(TextLabel).text = "TIME: "+Math.floor(this.time)
       if (this.time<=1){
            this.time = Math.floor(0)
            
            SceneManager.loadScene(Dead_Scene)


       }
       else{
        this.time -= Time.deltaTime * 1

       }
            
            //when looking for a GameObject, you first find it by passsing a scene, then use getCompoenent and you pass a type
        
        
    }
    
    onDestroy() {
        //console.log("Destroy")
      
    }
    }