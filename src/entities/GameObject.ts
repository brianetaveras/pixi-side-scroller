import { Application, Container } from "pixi.js";

abstract class GameObject {
  app: Application;
  container: Container = new Container();
  constructor(app: Application) {
    this.app = app;
  }
  create() {
    this.app.stage.addChild(this.container);
  }

  update(_delta: number) {}

  draw() {
    this.app.renderer.render(this.container);
  }
  destroy() {}
}

export default GameObject;
