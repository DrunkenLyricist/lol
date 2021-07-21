import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Plants extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "blue_bubble-removebg-preview",
        "./Plants/costumes/blue_bubble-removebg-preview.png",
        { x: 360, y: 353 }
      ),
      new Costume(
        "blue_bubble-removebg-preview2",
        "./Plants/costumes/blue_bubble-removebg-preview2.png",
        { x: 360, y: 353 }
      )
    ];

    this.sounds = [
      new Sound(
        "Bubble, pop sound effect",
        "./Plants/sounds/Bubble, pop sound effect.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.visible = false;
    yield* this.startSound("Bubble, pop sound effect");
    this.broadcast("message1");
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      yield* this.glide(1, this.random(-100, 100), this.random(-100, 100));
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
