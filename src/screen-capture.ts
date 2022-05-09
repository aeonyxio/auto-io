import {
  screenCapture as screenCap,
  screenCaptureSync as screenCapSync,
} from "auto-io-addon";
import { Rectangle } from "./rectangle";

export const screenCaptureSync = (area: Rectangle) => {
  return screenCapSync(area.x, area.y, area.width, area.height);
};

export const screenCapture = async (area: Rectangle) => {
  return screenCap(area.x, area.y, area.width, area.height);
};
