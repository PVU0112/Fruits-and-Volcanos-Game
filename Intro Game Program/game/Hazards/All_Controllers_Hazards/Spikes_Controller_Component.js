class Spike_Controller_Component extends Component {
    spike_number
    location_x
    location_y
    spacing = 50
    start() {
        //console.log(this.spike_number)
        for (let i = 0; i < this.spike_number; i++){
            instantiate(new Spikes_GameObject(), new Vector2((this.location_x+this.spacing), this.location_y))
            this.spacing += 50
        }


    }
    update() {
        
        
    }
        
        
    }

