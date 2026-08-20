class Wheels_GameObject extends GameObject {
  constructor() {
    super("Wheels",{ layer: "foreground" });
    
 
   
    // Add the logic
    this.addComponent(new Wheel_Component());
  }
}