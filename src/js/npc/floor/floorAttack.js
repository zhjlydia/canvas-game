import FloorBase from "./floorBase";
import FloorImg from "@/images/floor3.png";

export default class FloorAttack extends FloorBase {
  constructor() {
    super(FloorImg, 100, 20);
  }

  hitRun(target) {
    if (this.hit) {
      return;
    }
    this.hit = true;
    target.blood -= 1;
  }
  setView(ctx) {
    this.drawToCanvas(ctx);
  }
}
