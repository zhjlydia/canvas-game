import FloorBase from "./floorBase";
import FloorImg from "@/images/floor4.png";
export default class FloorLeft extends FloorBase {
  constructor() {
    super(FloorImg, 100, 20);
  }

  hitRun(target) {
    target.x -= 2;
    if (this.hit) {
      return;
    }
    this.hit = true;
  }
  setView(ctx) {
    this.drawToCanvas(ctx, 100, 0);
  }
}
