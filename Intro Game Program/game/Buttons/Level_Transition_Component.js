class Level_Transition_Component extends Component {
    
    
    start() {
       
        

    }
    update() {
        
        this.gameObject.getComponent(TextLabel).text ="Start"
        
        
         

    
        
    }
    
    onMouseDown(){
        SceneManager.loadScene(Level_Select_Scene)

        
        
        
    }
    // onMouseOver(){
    //     //console.log("Mouse Over")
    //     SceneManager.loadScene(Level_1)
        
    // }

    



}