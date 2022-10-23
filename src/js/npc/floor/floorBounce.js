import FloorBase from "./floorBase";
import FloorImg from "@/images/floor2.png";
export default class FloorBounce extends FloorBase {
  constructor() {
    super(FloorImg, 100, 20);
  }

  hitRun(target) {
    this.ctrlIndex = 0;
    target.y -= 15;
    target.speed = -4;
    target.isJump = true;
  }
  setView(ctx) {
    this.ctrlIndex += 1;
    if (this.ctrlIndex <= 10) {
      this.drawToCanvas(ctx, 100, 0);
    } else if (this.ctrlIndex === 40) {
      this.drawToCanvas(ctx, 0, 0);
    } else {
      this.drawToCanvas(ctx, 0, 0);
    }
  }
}
