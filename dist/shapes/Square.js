import { BaseShape } from "./Shapes.js";
export class Square extends BaseShape {
    constructor(x, y, size, color) {
        super(x, y, size, color, "square");
    }
    drawShape(ctx, currentSize) {
        const half = currentSize / 2;
        ctx.beginPath();
        ctx.rect(this.x - half, this.y - half, currentSize, currentSize);
        ctx.fill();
        ctx.stroke();
    }
    contains(mx, my) {
        const half = this.size / 2;
        return (mx >= this.x - half &&
            mx <= this.x + half &&
            my >= this.y - half &&
            my <= this.y + half);
    }
}
