class Farming_Hat_Component extends Component {
  
    start() {
        const player = GameObject.find("Main Character Game Object")
        if (player){
        this.gameObject.transform.setParent(player.transform)
        }

    }
    update() {
        

        
         
        
    }
    onDestroy() {
     
      
    }
}