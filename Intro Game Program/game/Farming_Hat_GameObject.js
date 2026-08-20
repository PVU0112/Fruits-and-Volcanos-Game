
class Farming_Hat_GameObject extends GameObject {
  constructor() {
    super("Farming Hat",{ layer: "foreground" });
    
    // Add the pink triangle visuals
    this.addComponent(new Polygon(), {
      points: [
        new Vector2(0, 0),
        new Vector2(100, 0),
        new Vector2(50, -25)
      ],
      fillStyle: 'rgb(255, 0, 234)'
    });

    // Add the logic
    this.addComponent(new Farming_Hat_Component());
  }
}