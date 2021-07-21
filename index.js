import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Plants from "./Plants/Plants.js";
import NDifPP from "./NDifPP/NDifPP.js";
import Thallophyta from "./Thallophyta/Thallophyta.js";
import YDifPP from "./YDifPP/YDifPP.js";
import NoVasTissue from "./NoVasTissue/NoVasTissue.js";
import Bryophta from "./Bryophta/Bryophta.js";
import YVasTissue from "./YVasTissue/YVasTissue.js";
import ProSeedPhan from "./ProSeedPhan/ProSeedPhan.js";
import DoNotProduceSeeds from "./DoNotProduceSeeds/DoNotProduceSeeds.js";
import Pteridophyta from "./Pteridophyta/Pteridophyta.js";
import BearNakedSeeds from "./BearNakedSeeds/BearNakedSeeds.js";
import Gymnosperm from "./Gymnosperm/Gymnosperm.js";
import BearSeedsInsideFruits from "./BearSeedsInsideFruits/BearSeedsInsideFruits.js";
import Angiosperms from "./Angiosperms/Angiosperms.js";
import HaveSeedsWithTwoCotyledons from "./HaveSeedsWithTwoCotyledons/HaveSeedsWithTwoCotyledons.js";
import HaveSeedsWithOneCotyledon from "./HaveSeedsWithOneCotyledon/HaveSeedsWithOneCotyledon.js";
import Monocot from "./Monocot/Monocot.js";
import Dicot from "./Dicot/Dicot.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Plants: new Plants({
    x: 70.576,
    y: 43.891,
    direction: -101.5369590328155,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 1
  }),
  NDifPP: new NDifPP({
    x: 36.313,
    y: -76.51899999999999,
    direction: 101.53695903281549,
    costumeNumber: 3,
    size: 50,
    visible: false,
    layerOrder: 2
  }),
  Thallophyta: new Thallophyta({
    x: 10.594000000000001,
    y: -90.18781499481202,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 3
  }),
  YDifPP: new YDifPP({
    x: 62.373999999999995,
    y: 15.331,
    direction: -101.5369590328155,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 4
  }),
  NoVasTissue: new NoVasTissue({
    x: -94.465,
    y: -20.485,
    direction: -101.5369590328155,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 5
  }),
  Bryophta: new Bryophta({
    x: -48.441,
    y: -20.441000000000003,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 6
  }),
  YVasTissue: new YVasTissue({
    x: -23.575,
    y: 5.5600000000000005,
    direction: -101.5369590328155,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 7
  }),
  ProSeedPhan: new ProSeedPhan({
    x: 70.27,
    y: 73.828,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 18
  }),
  DoNotProduceSeeds: new DoNotProduceSeeds({
    x: -70.925,
    y: -13.169,
    direction: 101.53695903281549,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 8
  }),
  Pteridophyta: new Pteridophyta({
    x: 9.36399999999999,
    y: 43.242,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 9
  }),
  BearNakedSeeds: new BearNakedSeeds({
    x: 36.364999999999995,
    y: 89.085,
    direction: -101.5369590328155,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 10
  }),
  Gymnosperm: new Gymnosperm({
    x: 80.975,
    y: 44.03,
    direction: 101.53695903281549,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 16
  }),
  BearSeedsInsideFruits: new BearSeedsInsideFruits({
    x: -28.855,
    y: 50.66,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 11
  }),
  Angiosperms: new Angiosperms({
    x: -32.798,
    y: 16.09,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 17
  }),
  HaveSeedsWithTwoCotyledons: new HaveSeedsWithTwoCotyledons({
    x: 81.996,
    y: 1.5119999999999998,
    direction: 101.53695903281549,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 12
  }),
  HaveSeedsWithOneCotyledon: new HaveSeedsWithOneCotyledon({
    x: -7.944,
    y: 82.572,
    direction: 101.53695903281549,
    costumeNumber: 2,
    size: 20,
    visible: false,
    layerOrder: 13
  }),
  Monocot: new Monocot({
    x: -28.1,
    y: 86.275,
    direction: 101.53695903281549,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 14
  }),
  Dicot: new Dicot({
    x: -26.652,
    y: 75.556,
    direction: 101.53695903281549,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 15
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
