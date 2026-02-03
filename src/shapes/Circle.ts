import { BaseShape } from "./Shapes.js";

export class Circle extends BaseShape {
  constructor(x: number, y: number, size: number, color: string) {
    super(x, y, size, color, "circle");
  }

  drawShape(ctx: CanvasRenderingContext2D, currentSize: number): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentSize / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  contains(mx: number, my: number): boolean {
    const dx = this.x - mx;
    const dy = this.y - my;
    return Math.sqrt(dx * dx + dy * dy) < this.size / 2;
  }
}
