class Mushroom_semi_GameObject extends GameObject {
  constructor() {
    super("Mushroom Hat",{ layer: "foreground" });
    
 
   
    // Add the logic
    this.addComponent(new Mushroom_semi_Component());
  }
}