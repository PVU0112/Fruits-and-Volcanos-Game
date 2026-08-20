class Guide_Component extends Component {
    
    
    start() {
       
        

    }
    update() {
        
        this.gameObject.getComponent(TextLabel).text ="Guide"
        
        
         

    
        
    }
    
    onMouseDown(){
        SceneManager.loadScene(Guide_Scene)

        
        
        
    }
    // onMouseOver(){
    //     //console.log("Mouse Over")
    //     SceneManager.loadScene(Level_1)
        
    // }

    



}