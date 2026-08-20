class Level_Selector_Component extends Component {
    Level
    
    start() {
        Globals.cur_level = 0
       
        

    }
    update() {
        if (this.Level == 1){
            this.gameObject.getComponent(TextLabel).text ="1"
        }
        if (this.Level == 2){
            this.gameObject.getComponent(TextLabel).text ="2"
        }
        if (this.Level == 3){
            this.gameObject.getComponent(TextLabel).text ="3"
        }
        
         

    
        
    }
    
    onMouseDown(){


        if (SceneManager.nextScene) return
        //console.log("Mouse Down")
        if (this.Level == 1){
            Globals.cur_level = 1
            Globals.goal = 50
            SceneManager.loadScene(Level_1)
        }
        if (this.Level == 2){
            Globals.cur_level = 2
            Globals.goal = 50
            SceneManager.loadScene(Level_2)
           
        }
        if (this.Level == 3){
            
            Globals.cur_level = 3
            Globals.goal = 150

            SceneManager.loadScene(Level_3)
            
        }
        
    }
    // onMouseOver(){
    //     //console.log("Mouse Over")
    //     SceneManager.loadScene(Level_1)
        
    // }

    



}