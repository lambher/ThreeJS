import Game from "./game.js";

const game = new Game(document);
game.initScene();


function run() {
    requestAnimationFrame(run);
    game.update();
    game.render()
}

run();