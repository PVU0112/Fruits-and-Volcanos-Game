class Invincible_Camera_GameObject extends GameObject {
  constructor() {
    super("Camera");
    // this.addComponent(new Polygon(), {
    //   points: [
    //     new Vector2(0, 0),
    //     new Vector2(100, 0),
    //     new Vector2(50, -25)
    //   ],
    //   fillStyle: 'rgb(0, 255, 225)'
    // });
    
   
    this.addComponent(new Invincible_Camera_Component());
  }
}