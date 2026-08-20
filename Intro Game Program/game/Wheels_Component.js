class Wheel_Component extends Component {
    start() {
        const annoying_farmer = GameObject.find("Annoying Farmer Game Object")
        if (annoying_farmer){
            this.gameObject.transform.setParent(annoying_farmer.transform)
        }
    }

    update() {

    }

    draw(ctx) {
        ctx.arc(
        this.transform.position.x,
        this.transform.position.y,
        25,
        0,          // start
        Math.PI * 2 // end  

        )
        ctx.closePath()
        ctx.fillStyle = 'rgb(68, 63, 68)'
        ctx.fill()
    }

    onDestroy() {

    }
}