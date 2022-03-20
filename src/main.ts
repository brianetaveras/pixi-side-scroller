import Player from "./entities/Player";
import WorldScene from "./entities/WorldScene";
import Game from "./Game";
import "./style.css";

const game = new Game();

const player = new Player(game.app);
const world1 = new WorldScene(game.app);

game.addGameObject("world1", world1);
game.addGameObject("me", player);
