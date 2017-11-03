import Phaser from 'phaser';

export default class Player extends Phaser.Group {

    constructor(game) {
        super(game);

        const blocks = [
            this.create(500, 400, 'crate'),
            this.create(200, 400, 'crate'),
            this.create(400, 400, 'crate'),
            this.create(600, 400, 'crate'),
            this.create(800, 400, 'crate'),
        ]

        blocks.forEach((block)=>{
            game.physics.arcade.enable(block);
            block.body.immovable = true;
        });

        game.world.add(this);
    }

}