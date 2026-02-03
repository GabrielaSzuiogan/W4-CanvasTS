// --- Abstract Base Class ---
export class BaseShape {
    constructor(x, y, size, color, type) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.type = type;
        this.isDragging = false;
        this.pulseOffset = 0;
        // Uses current time + a random number to create a unique enough ID
        this.id = "shape-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
        this.pulseOffset = Math.random() * 2;
    }
    update() {
        this.pulseOffset += 0.05;
    }
    draw(ctx) {
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
