import { drawLine } from "./shapes";

export class CanvasRenderer {
  private width: number;
  private height: number;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = ctx;
  }

  private drawBoundaries(): void {
    // Boundaries
    this.ctx.strokeStyle = "cyan";
    this.ctx.lineWidth = 1;

    drawLine({ x: 0, y: 0 }, { x: this.width, y: 0 }, this.ctx);
    drawLine({ x: 0, y: 0 }, { x: 0, y: this.height }, this.ctx);
    drawLine(
      { x: 0, y: this.height },
      { x: this.width, y: this.height },
      this.ctx,
    );
    drawLine(
      { x: this.width, y: 0 },
      { x: this.width, y: this.height },
      this.ctx,
    );
  }

  public draw(): void {
    // Clean Backgrund
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.drawBoundaries();
  }

  public update(time: number): void {}
}
