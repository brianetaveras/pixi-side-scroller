import "gun/sea";
import Player from "./entities/characters/Player";
import Platform from "./entities/world/Platform";
import Game from "./Game";
import "./style.css";

const game = new Game();

const player = new Player(game, game.app.renderer.width / 2, 0, 36, 24);

const mainPlatform = new Platform(game, 150, 500, 500, 40);

game.addGameObject(mainPlatform);
game.addGameObject(player);
