class TextLabel extends Component{
    font = "20px Time" //Size followed by name 
    fillStyle = "black"
    text = "[No Text]"
    // ctx = context
    draw(ctx){
       
        ctx.save()
        //ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.textAlign = "center";      // horizontal center
        ctx.textBaseline = "middle";   // vertical center
        ctx.font= this.font
        ctx.fillStyle= this.fillStyle
        ctx.fillText(this.text,0, 0)
        
        ctx.restore()
    }
}