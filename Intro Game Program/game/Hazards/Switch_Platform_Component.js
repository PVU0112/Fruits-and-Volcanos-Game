class Switch_Platform_Component extends Component {
    state 
    
    start() {
        this.get_state = this.state
    
    
        

    }
    update() {

        if(Input.KeysDownThisFrame.includes("ArrowUp")){
            if (this.state === 1){
            
            this.gameObject.getComponent(Polygon).fillStyle = 'rgba(245, 96, 1, 0.3)'
            this.state = 0
            }
            else if (this.state === 0){
            this.gameObject.getComponent(Polygon).fillStyle = 'rgba(245, 96, 1, 1)'
            this.state = 1
            }
            
            }
            
            
  
        }



   
    }
