import Animation from "../base/animation";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const canvas = document.getElementById("gameCanvas");

// 玩家相关常量设置
import PLAYER_IMG_SRC from "@/images/player.png";
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 50;
const g = 0.16;
const MOVE_STEP = 4;

export default class Player extends Animation {
  constructor() {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT);

    // 玩家默认位置
    this.x = screenWidth / 2 - this.width / 2;
    this.y = this.height + 30;

    this.isJump = true;
    this.speed = 0;
    this.blood = 3;
    this.moveType = null;
    this.initFrames(PLAYER_IMG_SRC, [
      [
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
      ],
      [
        [0, 10],
        [0, 11],
        [0, 12],
        [0, 13],
        [0, 14],
        [0, 15],
        [0, 16],
        [0, 17],
      ],
    ]);
    // 初始化事件监听
    this.initEvent();
  }

  onFrame(ctx) {
    if (!this.isPlaying) {
      if (this.isJump) {
        this.drawToCanvas(ctx, 40, 0);
      } else {
        this.drawToCanvas(ctx, 0, 0);
      }
    }
  }
  /**
   * 玩家响应手指的触摸事件
   */
  initEvent() {
    canvas.addEventListener(
      "touchstart",
      ((e) => {
        e.preventDefault();

        let x = e.touches[0].clientX;
        this.moveType = x > screenWidth / 2 ? "right" : "left";
        this.setAction(this.moveType === "left" ? 1 : 0);
        this.playAnimation(0, true, 3);
      }).bind(this)
    );
    canvas.addEventListener(
      "touchend",
      ((e) => {
        this.moveType = null;
        this.stop();
        e.preventDefault();
      }).bind(this)
    );
  }

  update() {
    this.y += this.speed;
    this.speed += g;
    if (this.speed > 30) {
      this.speed = 30;
    }
    if (this.y > screenHeight) {
      this.blood = 0;
    } else if (this.y < 12) {
      this.blood -= 1;
      this.y += 20;

      if (this.speed < 0) {
        this.speed = 0;
      }
    }
    if (this.moveType === "left") {
      this.x -= MOVE_STEP;
    } else if (this.moveType === "right") {
      this.x += MOVE_STEP;
    }
    if (this.x < -10) {
      this.x = -10;
    }
    if (this.x > screenWidth - 10) {
      this.x = screenWidth - 10;
    }
  }
}
