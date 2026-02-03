import { BaseShape } from "./Shapes.js";
export class Circle extends BaseShape {
    constructor(x, y, size, color) {
        super(x, y, size, color, "circle");
    }
    drawShape(ctx, currentSize) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    contains(mx, my) {
        const dx = this.x - mx;
        const dy = this.y - my;
        return Math.sqrt(dx * dx + dy * dy) < this.size / 2;
    }
}
