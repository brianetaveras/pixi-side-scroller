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
    // @ts-ignore;
    this.app.inputs = {};
    document.body.appendChild(this.app.view);
    this.handleKeyboardInput();
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

  addGameObject( gameObject: GameObject): void {
    if (!gameObject) {
      console.log("gameObject is required params");
      return;
    }
    this.gameObjects[gameObject.id] = gameObject;
    this.gameObjects[gameObject.id].create();
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

  handleKeyboardInput() {
    document.addEventListener("keydown", ({ code }) => {
      // @ts-ignore
      this.app.inputs[code] = true;
    });
    document.addEventListener("keyup", ({ code }) => {
      // @ts-ignore
      delete this.app.inputs[code];
    });
  }
}

export default Game;
