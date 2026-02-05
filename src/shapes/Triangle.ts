import { Shape } from "./Shape.js";

export class Triangle extends Shape {
  size = 50;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size);
    ctx.lineTo(this.x - this.size, this.y + this.size);
    ctx.lineTo(this.x + this.size, this.y + this.size);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.stroke();
  }

  isPointInside(px: number, py: number) {
    return (
      px > this.x - this.size &&
      px < this.x + this.size &&
      py > this.y - this.size &&
      py < this.y + this.size
    );
  }
}
