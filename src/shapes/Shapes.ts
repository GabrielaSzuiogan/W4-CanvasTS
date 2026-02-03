import { IShape } from "../types.js";

// --- Abstract Base Class ---
export abstract class BaseShape implements IShape {
  public id: string;
  public isDragging: boolean = false;
  protected pulseOffset: number = 0;

  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string,
    public type: "circle" | "square" | "triangle",
  ) {
    // Uses current time + a random number to create a unique enough ID
    this.id = "shape-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    this.pulseOffset = Math.random() * 2;
  }

  abstract drawShape(ctx: CanvasRenderingContext2D, currentSize: number): void;
  abstract contains(x: number, y: number): boolean;

  update(): void {
    this.pulseOffset += 0.05;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const breath = Math.sin(this.pulseOffset) * 2;
    const currentSize = this.size + breath;

    ctx.save();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;

    if (this.isDragging) {
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(0,0,0,0.4)";
      ctx.globalAlpha = 0.8;
      ctx.scale(1.1, 1.1);
      ctx.translate(-(this.x * 0.1), -(this.y * 0.1));
    }

    this.drawShape(ctx, currentSize);
    ctx.restore();
  }

  getBoundingBox() {
    const half = this.size / 2;
    return {
      x: this.x - half,
      y: this.y - half,
      w: this.size,
      h: this.size,
    };
  }
}

// --- Concrete Classes ---
