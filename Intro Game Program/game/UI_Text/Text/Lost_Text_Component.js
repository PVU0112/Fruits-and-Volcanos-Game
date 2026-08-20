class Lost_Text_Component extends Component {
    
    start() {
        //console.log("Start")

    }
    update() {
        //console.log("Update")

        
        this.gameObject.getComponent(TextLabel).fillStyle= "blue"
        this.gameObject.getComponent(TextLabel).font = "30px Time"
        this.gameObject.getComponent(TextLabel).text = "You Died"
        
          
        
        
        
    
        
    }
    onDestroy() {
        //console.log("Destroy")
      
    }
}