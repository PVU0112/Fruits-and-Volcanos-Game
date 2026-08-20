class Mushroom_semi_Component extends Component {
    start() {
        const mushshroom = GameObject.find("Mushroom Game Object")
        if (mushshroom){
            this.gameObject.transform.setParent(mushshroom.transform)
        }
    }

    update() {

    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(
            this.transform.position.x,
            this.transform.position.y,
            50,
            Math.PI,
            0
        )
        ctx.closePath()
        ctx.fillStyle = 'rgb(255, 0, 234)'
        ctx.fill()
    }

    onDestroy() {

    }
}