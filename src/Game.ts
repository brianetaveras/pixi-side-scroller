import * as PIXI from "pixi.js";
import GameObject from "./entities/GameObject";

class Game {
  app: PIXI.Application;
  private gameObjects: Record<string, GameObject> = {};
  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      resizeTo: window,
    });

    document.body.appendChild(this.app.view);
    this.startGameLoop();
  }

  private startGameLoop(): void {
    this.app.ticker.add((delta) => {
      for (let id in this.gameObjects) {
        this.gameObjects[id].update(delta);
        this.gameObjects[id].draw();
      }
    });
  }

  addGameObject(id: string, gameObject: GameObject): void {
    if (!id || !gameObject) {
      console.log("id and gameObject are required params.");
      return;
    }
    this.gameObjects[id] = gameObject;
    this.gameObjects[id].create();
    
  }

  removeGameObject(id: string): boolean {
    if (id in this.gameObjects) {
      delete this.gameObjects[id];
      return true;
    }
    return false;
  }

  getAllGameObjects(): Record<string, GameObject> {
    return this.gameObjects;
  }

  getGameObject(id: string): GameObject | null {
    if (id in this.gameObjects) {
      return this.gameObjects[id];
    }
    return null;
  }
}

export default Game;
