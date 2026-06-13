import type { V2 } from "./utils.ts";

export function drawLine(p1: V2, p2: V2, ctx: CanvasRenderingContext2D): void {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  ctx.closePath();
}

export function drawRectangle(
  pos: V2,
  size: V2,
  color: string,
  ctx: CanvasRenderingContext2D,
) {
  ctx.fillStyle = color;
  ctx.fillRect(pos.x, pos.y, size.x, size.y);
}
