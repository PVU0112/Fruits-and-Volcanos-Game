class PointsComponent extends Component{
    
    start(){
        
    }
    
    points = 0
    timer = 120
    update(){
        if (this.points >= Globals.goal){
            if (Globals.cur_level ==3){
                Globals.Final_Level_Message = 1
                SceneManager.loadScene(Victory_Scene)
                
            }
            Globals.cur_level +=1

            SceneManager.loadScene(Victory_Scene)
        }
       
    }
}