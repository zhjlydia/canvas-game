import Sprite from "../base/sprite";
import CellingImg from "@/images/celling.png";

const WIDTH = 320;
const HEIGHT = 16;

export default class Celling extends Sprite {
  constructor() {
    super(CellingImg, WIDTH, HEIGHT, window.innerWidth);

    this.x = 0;
    this.y = 0;
  }
}
