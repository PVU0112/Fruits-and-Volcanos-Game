class Collider extends Component {
    isTrigger = false
    get points() {
        return this.gameObject.getComponent(Polygon)?.points ?? []
    }
}