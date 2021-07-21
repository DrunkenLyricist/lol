import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NDifPP extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "png-transparent-round-red-bubble-illustration-bubble-soap-bubbles-photography-sphere-magenta-thumbnail-removebg-preview",
        "./NDifPP/costumes/png-transparent-round-red-bubble-illustration-bubble-soap-bubbles-photography-sphere-magenta-thumbnail-removebg-preview.png",
        { x: 360, y: 360 }
      ),
      new Costume(
        "blue_bubble-removebg-preview",
        "./NDifPP/costumes/blue_bubble-removebg-preview.png",
        { x: 360, y: 353 }
      ),
      new Costume(
        "blue_bubble-removebg-preview2",
        "./NDifPP/costumes/blue_bubble-removebg-preview2.png",
        { x: 360, y: 353 }
      )
    ];

    this.sounds = [
      new Sound(
        "Bubble, pop sound effect",
        "./NDifPP/sounds/Bubble, pop sound effect.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.visible = false;
    yield* this.startSound("Bubble, pop sound effect");
    this.broadcast("thallophyta");
  }

  *whenIReceiveMessage1() {
    this.visible = true;
    while (true) {
      yield* this.glide(1, this.random(-100, 100), this.random(-100, 100));
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
