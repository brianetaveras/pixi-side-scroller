import GameObject from "../../entities/GameObject";
import Game from "../../Game";
import Vector2D from "../math/Vector2D";

class PhysicsObject extends GameObject {
  public velocity: Vector2D;
  public acceleration: Vector2D;
  public gravity: Vector2D;
  public thrust: Vector2D;
  public speed: number = 0;
  public direction: number = 0;
  public game: Game;
  public isColliding: boolean = false;

  constructor(game: Game, x: number, y: number, width: number, height: number) {
    super(game, x, y, width, height);
    this.game = game;
    this.velocity = new Vector2D(0, 0);
    this.acceleration = new Vector2D(0.0, 0.0);
    this.thrust = new Vector2D(0, 0);
    this.gravity = new Vector2D(0, 0.1);
    this.velocity.setLength(this.speed);
    this.velocity.setAngle(this.direction);
  }

  accelerate(accelerationVector: Vector2D): void {
    this.velocity.addTo(accelerationVector);
  }

  update(_delta: number) {
    super.update(_delta);
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }

  checkCollision() {
    const gameObjects = this.game.getAllGameObjects();
    const myGameObject = gameObjects[this.id];
    for (let id in gameObjects) {
      if (myGameObject.id === id) {
        continue;
      }

      const {
        width: objectWidth,
        height: objectHeight,
        position: { x: objectX, y: objectY },
      } = gameObjects[id];
      const {
        width: myWidth,
        height: myHeight,
        position: { x: myX, y: myY },
      } = myGameObject;

      if (
        myX < objectX + objectWidth &&
        myX + myWidth > objectX &&
        myY < objectY + objectHeight &&
        myHeight + myY > objectY
      ) {
        this.isColliding = true;
      } else {
        this.isColliding = false;
      }
    }
  }
}

export default PhysicsObject;
