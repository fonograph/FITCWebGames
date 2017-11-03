import Phaser from 'phaser';

export default class Player extends Phaser.Sprite {

    constructor(game, x=0, y=0) {
        super(game, x, y, 'player');
        this.anchor.set(0.5, 1);

        this.scale.set(0.3);

        game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 1000;
        game.world.add(this);
    }

}