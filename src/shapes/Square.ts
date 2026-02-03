import { BaseShape } from "./Shapes.js";

export class Square extends BaseShape {
  constructor(x: number, y: number, size: number, color: string) {
    super(x, y, size, color, "square");
  }

  drawShape(ctx: CanvasRenderingContext2D, currentSize: number): void {
    const half = currentSize / 2;
    ctx.beginPath();
    ctx.rect(this.x - half, this.y - half, currentSize, currentSize);
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
