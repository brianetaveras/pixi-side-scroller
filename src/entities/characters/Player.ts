import { BaseTexture, Rectangle, Sprite, Texture } from "pixi.js";
import Vector2D from "../../engine/math/Vector2D";
import PhysicsObject from "../../engine/physics/PhysicsObject";
import Game from "../../Game";
import spriteImage from "../../assets/graphics/sprites/2.png";

class Player extends PhysicsObject {
  public sprite: Sprite = new Sprite();
  public currentFrame: number = 0;

  constructor(game: Game, x: number, y: number, width: number, height: number) {
    super(game, x, y, width, height);
    this.speed = 5;
    this.direction = -Math.PI / 2;
    this.gravity = new Vector2D(0, 0.5);
    this.setupSprite();
    this.accelerate(this.gravity);
  }

  update(_delta: number) {
    this.handleInput();
    this.checkCollision();
    if (this.isColliding) {
      this.velocity = new Vector2D(this.velocity.x, 0);
      this.direction = 0;
      this.speed = 0;
      this.gravity = new Vector2D(0, 0);

      // @ts-ignore
      const inputs = this.app.inputs;
      if (inputs["Space"]) {
        console.log("jump!");
        this.velocity = new Vector2D(this.velocity.x, -5);
      }
    } else {
      this.gravity = new Vector2D(0, 0.1);
    }
    super.update(_delta);

    if (this.position.y > window.innerHeight) {
      this.position.y = 0;
    }

    if (this.position.x > window.innerWidth) {
      this.position.x = 0;
    }

    if (this.position.x < 24) {
      this.position.x = window.innerWidth;
    }
  }

  private setupSprite(): void {
    const baseTexture = new BaseTexture(spriteImage);
    this.sprite.texture = new Texture(baseTexture, new Rectangle(0, 0, 36, 24));
    this.sprite.anchor.set(0.5);
    this.container?.addChild(this.sprite);
    this.container.scale.set(3, 3);
    this.app.stage.addChild(this.container);
  }

  private handleInput(): void {
    // @ts-ignore;
    const inputs = this.app.inputs;

    if (inputs["KeyD"]) {
      this.thrust.x = 0.1;
    }

    if (inputs["KeyA"]) {
      this.thrust.x = -0.1;
    }

    this.accelerate(this.thrust);

    if (this.thrust.x != 0) {
      console.log(this.thrust.x);
      this.thrust.x -= this.thrust.x / 10;
    }
  }

  draw(): void {
    super.draw();
  }
}

export default Player;
