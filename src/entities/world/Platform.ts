import { Sprite, Texture } from "pixi.js";
import Vector2D from "../../engine/math/Vector2D";
import PhysicsObject from "../../engine/physics/PhysicsObject";
import Game from "../../Game";

class Platform extends PhysicsObject {
    private sprite: Sprite;
    constructor(game: Game, x: number, y: number, width: number, height: number) {
        super(game, x, y, width, height);
        this.sprite = new Sprite();
        this.sprite.width = width;
        this.sprite.height = height;
        this.sprite.texture = Texture.WHITE;
        this.container.addChild(this.sprite);
        this.gravity = new Vector2D(0, 0);

    }


 
    draw(): void {
        this.debug();
        super.draw();
    }


   
}


export default Platform;