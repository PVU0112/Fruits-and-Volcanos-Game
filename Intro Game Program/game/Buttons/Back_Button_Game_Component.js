class Back_Button_Game_Component extends Component {
    
    
    start() {
       
        

    }
    update() {
         if(Input.KeysDownThisFrame.includes("KeyB")){
            if (Globals.cur_level == 0){
            SceneManager.loadScene(Start_Scene)
            Globals.cur_level = 0
            
            }
            else if (Globals.cur_level == 4){
            SceneManager.loadScene(Start_Scene)
            Globals.cur_level = 0
            }
            else{
                 SceneManager.loadScene(Level_Select_Scene)
                 
            }
            
        }
       
        
        
         

    
        
    }
    
    onMouseDown(){
      

        
        
        
    }
    // onMouseOver(){
    //     //console.log("Mouse Over")
    //     SceneManager.loadScene(Level_1)
        
    // }

    



}