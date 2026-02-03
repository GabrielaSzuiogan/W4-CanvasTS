import { BaseShape } from "./Shapes.js";
export class Triangle extends BaseShape {
  constructor(x: number, y: number, size: number, color: string) {
    super(x, y, size, color, "triangle");
  }

  drawShape(ctx: CanvasRenderingContext2D, currentSize: number): void {
    const height = (Math.sqrt(3) / 2) * currentSize;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - height / 2);
    ctx.lineTo(this.x - currentSize / 2, this.y + height / 2);
    ctx.lineTo(this.x + currentSize / 2, this.y + height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  contains(mx: number, my: number): boolean {
    const half = this.size / 2;
    return (
      mx >= this.x - half &&
      mx <= this.x + half &&
      my >= this.y - half &&
      my <= this.y + half
    );
  }
}
