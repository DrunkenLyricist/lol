import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Monocot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "blue_bubble-removebg-preview",
        "./Monocot/costumes/blue_bubble-removebg-preview.png",
        { x: 360, y: 353 }
      )
    ];

    this.sounds = [
      new Sound(
        "Bubble, pop sound effect",
        "./Monocot/sounds/Bubble, pop sound effect.mp3"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "monocots" },
        this.whenIReceiveMonocots
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveMonocots() {
    this.visible = true;
    while (true) {
      yield* this.glide(1, this.random(-100, 100), this.random(-100, 100));
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.visible = false;
    yield* this.startSound("Bubble, pop sound effect");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
