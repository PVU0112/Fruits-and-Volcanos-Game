class Score_Component extends Component {
  
    start() {
        //console.log("Start")

    }
    update() {
        //console.log("Update")

        
        this.gameObject.getComponent(Transform).position = new Vector2(600,30)
        this.gameObject.getComponent(TextLabel).fillStyle= "red"
        this.gameObject.getComponent(TextLabel).font = "30px Time"
        this.gameObject.getComponent(TextLabel).text = "SCORE: "+GameObject.find("Points Game Object").getComponent(PointsComponent).points+"/"+Globals.goal
        
    }
    onDestroy() {
        //console.log("Destroy")
      
    }
}