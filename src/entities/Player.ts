import { Application, BaseTexture, Rectangle, Sprite, Texture } from "pixi.js";
import GameObject from "./GameObject";
import spriteImage from "../assets/graphics/sprites/2.png";

class Player extends GameObject {
  sprite: Sprite = new Sprite();
  playerSpeed: number = 3.5;
  currentFrame = 0;
  constructor(app: Application) {
    super(app);
  }

  create() {
    this.setupSprite();
    this.attachInputListeners();
  }

  update(_delta: number): void {
    console.log(this.container.position.x);
  }

  private setupSprite(): void {
    const baseTexture = new BaseTexture(spriteImage);
    this.sprite.texture = new Texture(baseTexture, new Rectangle(0, 0, 36, 24));
    this.container.position.set(
      this.app.renderer.width / 2,
      this.app.renderer.height / 2
    );
    this.sprite.anchor.set(0.5);

    this.container?.addChild(this.sprite);
    this.container.scale.set(3, 3);
    this.container.position.set(50, 601);
    this.app.stage.addChild(this.container);
  }

  private attachInputListeners(): void {
    document.addEventListener("keypress", (e) => {
      if (this.currentFrame == 5) {
        this.currentFrame = 0;
      }
      this.sprite.texture = new Texture(
        this.sprite.texture.baseTexture,
        new Rectangle(this.currentFrame * 36, 0, 36, 24)
      );
      switch (e.code) {
        case "KeyA":
          this.container.position.x -= this.playerSpeed;
          this.container.scale.x = -3;
          this.currentFrame++;

          if (this.container.position.x <= -24) {
            this.container.position.x = this.app.renderer.width;
          }
          break;
        case "KeyD":
          this.container.scale.x = 3;
          this.container.position.x += this.playerSpeed;
          this.currentFrame++;

          if (this.container.position.x >= this.app.renderer.width + 24) {
            this.container.position.x = 0;
          }
          break;
        case "KeyW":
          break;
        case "KeyS":
          break;
        default:
          break;
      }
      e.preventDefault();
      e.stopPropagation();
    });
  }
}

export default Player;
