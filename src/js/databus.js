import Pool from "./base/pool";

let instance;

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if (instance) return instance;

    instance = this;

    this.pool = new Pool();

    this.reset();
  }

  reset() {
    this.frame = 0;
    this.score = 0;
    this.floors = [];
    this.items = [];
    this.animations = [];
    this.gameOver = false;
    this.lastFloorIndex = 0;
    this.fps = 60;
    this.now = 0;
    this.then = 0;
    this.delta = 0;
    this.interval = 1000/this.fps;
  }

  /**
   * 回收地板，进入对象池
   * 此后不进入帧循环
   */
  removeFloor(floor) {
    let temp = this.floors.shift();
    temp.visible = false;
    this.pool.recover("floor", floor);
  }

  removeItem(item) {
    let temp = this.items.shift();
    temp.visible = false;
    this.pool.recover("item", item);
  }
}
