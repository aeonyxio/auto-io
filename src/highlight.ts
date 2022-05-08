import { highlightRectangle, highlightRectangleSync } from "auto-io-addon";
import { Rectangle } from "./rectangle";

export const highlight = async (rect: Rectangle) => {
  await highlightRectangle(rect.x, rect.y, rect.width, rect.height);
};

export const highlightSync = (rect: Rectangle) => {
  highlightRectangleSync(rect.x, rect.y, rect.width, rect.height);
};
