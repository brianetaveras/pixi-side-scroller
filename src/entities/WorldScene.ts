import { Application, Sprite } from "pixi.js";
import GameObject from "./GameObject";
import backgroundSpriteImage from "../assets/graphics/backgrounds/1.png";
import floorSpriteImage from "../assets/graphics/backgrounds/4.png";
class WorldScene extends GameObject {
  backgroundSprite?: Sprite;
  sceneFloor?: Sprite;
  constructor(app: Application) {
    super(app);
  }

  create(): void {
    this.container.height = this.app.renderer.height;
    this.container.width = this.app.renderer.width;
    this.setupSceneBackground();
    this.app.stage.addChild(this.container);
  }

  private setupSceneBackground() {
    this.backgroundSprite = Sprite.from(backgroundSpriteImage);
    this.backgroundSprite.width = this.app.renderer.width;
    this.backgroundSprite.height = this.app.renderer.height;
    this.container.addChild(this.backgroundSprite);

    this.sceneFloor = Sprite.from(floorSpriteImage);
    this.sceneFloor.width = this.app.renderer.width;
    this.sceneFloor.height = 540;
    this.sceneFloor.position.y =
      this.app.renderer.height - this.sceneFloor.height;

    this.container.addChild(this.sceneFloor);
  }
}

export default WorldScene;
