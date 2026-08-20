class Invincible_Camera_Component extends Component {
  
    start() {
        
    }
    update() {
        Camera.main.transform.position = this.transform.position
        Camera.main.transform.scale = new Vector2(.95, .95)
        
        

        
         
        
    }
    onDestroy() {
     
      
    }
}