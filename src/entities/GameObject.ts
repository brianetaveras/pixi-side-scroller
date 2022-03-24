import { Application, Container, Graphics } from "pixi.js";
import Vector2D from "../engine/math/Vector2D";
import Game from "../Game";


abstract class GameObject {
  app: Application;
  id: string;
  container: Container = new Container();
  public position: Vector2D = new Vector2D(0, 0);
  public width: number = 0;
  public height: number = 0;
  private debugger?: Graphics|null = null;

  constructor(game: Game, x: number, y: number, width: number, height: number) {
    this.app = game.app;
    this.position = new Vector2D(x, y)
    this.container.position.set(x, y);
    this.height = height;
    this.width = width;
    this.container.width = width;
    this.container.height = height;
    this.id = crypto.randomUUID();
  }
  create() {
    this.app.stage.addChild(this.container);
  }

  update(_delta: number) {
    this.container.position.set(this.position.x, this.position.y);
  }

  draw() {
    this.app.renderer.render(this.container);
  }
  destroy() {}

  public debug(centerOffset = false) {
    if (!this.debugger) {
      this.debugger = new Graphics();
      this.container.addChild(this.debugger);
    }
    const normalizedX = centerOffset ? 0 - this.width	 / 2 : 0
    const normalizedY = centerOffset ? 0  - this.height / 2 : 0
    
    this.debugger.clear()
    this.debugger.lineStyle(2, 0xfc8f34, 1);
    this.debugger.drawRect(normalizedX, normalizedY, this.width, this.height);
    this.debugger.endFill();    

  }
}

export default GameObject;
