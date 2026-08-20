class Spike_Controller_GameObject extends GameObject{
    constructor(spike_number,location_x,location_y){
        super("Spike Control Game Object")
        this.addComponent(new Spike_Controller_Component(),{spike_number:spike_number,location_x:location_x,location_y:location_y})
       
    }
}