/**
 * 游戏基础的精灵类
 */
export default class Sprite {
  constructor(
    imgSrc = "",
    originWidth = 0,
    originHeight = 0,
    width = originWidth,
    height = originHeight
  ) {
    this.img = new Image();
    this.img.src = imgSrc;

    this.originWidth = originWidth;
    this.originHeight = originHeight;

    this.width = width;
    this.height = height;

    this.x = 0;
    this.y = 0;

    this.visible = true;
  }

  /**
   * 将精灵图绘制在canvas上
   * 支持部分裁剪显示
   */
  drawToCanvas(ctx, sx = 0, sy = 0) {
    if (!this.visible) return;
    ctx.drawImage(
      this.img,
      sx || 0,
      sy || 0,
      this.originWidth,
      this.originHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  /**
   * 简单的碰撞检测定义：
   * 另一个精灵的中心点处于本精灵所在的矩形内即可
   * @param{Sprite} sp: Sptite的实例
   */
  isCollideWith(sp) {
    let spX = sp.x + sp.width / 2;
    let spY = sp.y + sp.height / 2;

    if (!this.visible || !sp.visible) return false;

    return !!(
      spX >= this.x &&
      spX <= this.x + this.width &&
      spY >= this.y &&
      spY <= this.y + this.height
    );
  }
}
