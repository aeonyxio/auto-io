import { Rectangle } from "./rectangle";

export class Region extends Rectangle {
  label = "Unknown";
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    label?: string
  ) {
    super(x, y, width, height);
    if (label) this.label = label;
  }
}
