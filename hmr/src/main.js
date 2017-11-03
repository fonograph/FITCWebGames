import Phaser from 'phaser';
import Player from './player';
import Level from './level';
// import { AssetLoader } from 'phaser-manifest-loader';
// import manifest from './manifest';

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let player;
let level;
let cursors;

function preload() {
    game.load.image('player', require('./assets/betty.png'));
    game.load.image('crate', require('./assets/crate.png'));
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.disableVisibilityChange = true;

    player = new Player(game);

    level = new Level(game);

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    player.body.velocity.x = 0;
    if (cursors.left.isDown) {
        player.body.velocity.x = -150;
    }
    if (cursors.right.isDown) {
        player.body.velocity.x = 150;
    }
    if (cursors.up.isDown) {
        player.body.velocity.y = -450;
    }

    game.physics.arcade.collide(player, level);
}

if (module.hot) {
    module.hot.accept('./player', ()=>{
        const newPlayer = new Player(game, player.x, player.y);
        player.destroy();
        player = newPlayer;
    });
    module.hot.accept('./level', ()=>{
        const newLevel = new Level(game);
        level.destroy();
        level = newLevel;
    });
}

// const manifestLoader = game.plugins.add(AssetLoader, require.context('./assets', true, /.*\.png|json|ttf|woff|woff2|xml|mp3|jpg|wav|ogg$/));
// manifestLoader.loadManifest(manifest).then();