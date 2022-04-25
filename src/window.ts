import {
  getActiveWindow,
  getWindowRect,
  getWindows,
  getWindowTitle,
  screenCapture,
  setActiveWindow,
} from "auto-io-addon";
import { map, Observable, timer } from "rxjs";
import { Rectangle } from "./rectangle";

export class Window {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }

  get region(): Rectangle {
    const { x, y, width, height } = getWindowRect(this.id);
    return new Rectangle(x, y, width, height);
  }

  focus = () => {
    const active = getActiveWindow();
    if (this.id !== active) setActiveWindow(this.id);
  };

  screenshot = (): Buffer => {
    const region = this.region;
    return screenCapture(region.x, region.y, region.width, region.height);
  };

  watchScreen = (duration = 1000): Observable<Buffer> => {
    return timer(duration, duration).pipe(
      map(() => {
        const region = this.region;
        console.log(region);
        return screenCapture(region.x, region.y, region.width, region.height);
      })
    );
  };
}

export const getWindowByTitle = (title: string): Window => {
  const id = getWindows().find((id) => getWindowTitle(id) === title);
  if (id === undefined) {
    throw new Error(`Window with title '${title}' not found`);
  }
  return new Window(id);
};
