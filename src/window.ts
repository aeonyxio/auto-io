import {
  getActiveWindow,
  getWindowRect,
  getWindows,
  getWindowTitle,
  setActiveWindow,
} from "auto-io-addon";
import { Rectangle } from "./rectangle";
import { screenCaptureSync } from "./screen-capture";

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
    return screenCaptureSync(this.region);
  };
}

export const getWindowByTitle = (title: string): Window => {
  const id = getWindows().find((id) => getWindowTitle(id) === title);
  if (id === undefined) {
    throw new Error(`Window with title '${title}' not found`);
  }
  return new Window(id);
};
