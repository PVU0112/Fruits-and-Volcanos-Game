class Dash_Timer_Component extends Component {
    start() {
        //console.log("Start")

    }
    update() {
        //console.log("Update")
            if (GameObject.find("Main Character Game Object").getComponent(Main_Character_Component).dash_cool_down <= 1){
                this.gameObject.getComponent(Transform).position = new Vector2(900,30)
                this.gameObject.getComponent(TextLabel).fillStyle= "green"
                this.gameObject.getComponent(TextLabel).font = "30px Time"
                this.gameObject.getComponent(TextLabel).text = "Dash Cooldown: Ready"
            }
            else{
                this.gameObject.getComponent(TextLabel).fillStyle= "red"
                this.gameObject.getComponent(TextLabel).font = "30px Time"
                this.gameObject.getComponent(TextLabel).text = "Dash Cooldown: "+Math.floor(GameObject.find("Main Character Game Object").getComponent(Main_Character_Component).dash_cool_down)
            }
            //when looking for a GameObject, you first find it by passsing a scene, then use getCompoenent and you pass a type
        
        
    }
    
    onDestroy() {
        //console.log("Destroy")
      
    }
    }