export abstract class Shape {
  constructor(
    public x: number,
    public y: number,
    public color: string,
  ) {}

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract isPointInside(px: number, py: number): boolean;
}
