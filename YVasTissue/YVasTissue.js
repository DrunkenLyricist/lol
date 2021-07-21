import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class YVasTissue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "blue_bubble-removebg-preview",
        "./YVasTissue/costumes/blue_bubble-removebg-preview.png",
        { x: 360, y: 353 }
      )
    ];

    this.sounds = [
      new Sound(
        "Bubble, pop sound effect",
        "./YVasTissue/sounds/Bubble, pop sound effect.mp3"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message 2" },
        this.whenIReceiveMessage2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMessage2() {
    this.visible = true;
    while (true) {
      yield* this.glide(1, this.random(-100, 100), this.random(-100, 100));
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.visible = false;
    yield* this.playSoundUntilDone("Bubble, pop sound effect");
    this.broadcast("message 3");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
