import FloorBase from "./floorBase";
import FloorImg from "@/images/floor0.png";
export default class FloorNormal extends FloorBase {
  constructor() {
    super(FloorImg, 100, 20);
  }

  hitRun(target) {
    if (this.hit) {
      return;
    }
    this.hit = true;
  }

  setView(ctx) {
    this.drawToCanvas(ctx);
  }
}
