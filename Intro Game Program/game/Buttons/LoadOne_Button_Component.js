class LoadOne_Button_Component extends Component {
    
    start() {
         
        if (Globals.cur_level == 0){
            this.gameObject.getComponent(TextLabel).text ="Return to Menu"
        }
        if (Globals.Final_Level_Message == 1){
            this.gameObject.getComponent(TextLabel).fillStyle = "green"
            this.gameObject.getComponent(TextLabel).text ="Congratulations you beat Fruits and Volcano"
            Globals.Final_Level_Message = 0
        }
       
        if (Globals.cur_level == 1){
            this.gameObject.getComponent(TextLabel).text ="Load Level 1"
        }
        if (Globals.cur_level == 2){
            this.gameObject.getComponent(TextLabel).text ="Load Level 2"
        }
        if (Globals.cur_level == 3){
            this.gameObject.getComponent(TextLabel).text ="Load Level 3"
        }
        
       
        

    }
    update() {
       

    
        
    }
    
    onMouseDown(){

         if (SceneManager.nextScene) return
        
        //console.log("Mouse Down")
        if (Globals.cur_level == 0){
            
            SceneManager.loadScene(Start_Scene)
            
        }
        if (Globals.cur_level == 1){
            Globals.goal = 50
            SceneManager.loadScene(Level_1)

        }
        if (Globals.cur_level == 2){
            
            SceneManager.loadScene(Level_2)
            Globals.goal = 50
        }
        if (Globals.cur_level == 3){
            
            SceneManager.loadScene(Level_3)
            Globals.goal = 150
        }
        
    }
    // onMouseOver(){
    //     //console.log("Mouse Over")
    //     SceneManager.loadScene(Level_1)
        
    // }

    



}