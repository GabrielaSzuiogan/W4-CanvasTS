import { Shape } from "./shapes/Shape.js";
import { Circle } from "./shapes/Circle.js";
import { Triangle } from "./shapes/Triangle.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let shapes: Shape[] = [];
let draggingShape: Shape | null = null;
let offset = { x: 0, y: 0 };

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
window.addEventListener("resize", resize);
resize();

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shapes.forEach((s) => s.draw(ctx));
  requestAnimationFrame(render);
}

canvas.addEventListener("mousedown", (e) => {
  for (let i = shapes.length - 1; i >= 0; i--) {
    if (shapes[i].isPointInside(e.clientX, e.clientY)) {
      draggingShape = shapes[i];
      offset.x = e.clientX - draggingShape.x;
      offset.y = e.clientY - draggingShape.y;

      shapes.push(shapes.splice(i, 1)[0]);
      break;
    }
  }
});

window.addEventListener("mousemove", (e) => {
  if (draggingShape) {
    draggingShape.x = e.clientX - offset.x;
    draggingShape.y = e.clientY - offset.y;
  }
});

window.addEventListener("mouseup", () => (draggingShape = null));

document.getElementById("addCircle")?.addEventListener("click", () => {
  shapes.push(
    new Circle(window.innerWidth / 2, window.innerHeight / 2, "#3498db"),
  );
});

document.getElementById("addTriangle")?.addEventListener("click", () => {
  shapes.push(
    new Triangle(window.innerWidth / 2, window.innerHeight / 2, "#e74c3c"),
  );
});

document
  .getElementById("clear")
  ?.addEventListener("click", () => (shapes = []));

render();
