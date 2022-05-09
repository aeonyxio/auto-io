export {
  mouseDown,
  mouseDownSync,
  mouseUp,
  mouseUpSync,
  Mouse,
  keyDown,
  keyDownSync,
  keyUp,
  keyUpSync,
  KeyboardLayout,
  Code,
  getWindows,
  getWindowTitle,
  dpiAware,
  sleep,
  shutdown,
} from "auto-io-addon";
export { click, clickSync, doubleClick } from "./mouse";
export { type, hotkey } from "./keyboard";
export { Point } from "./point";
export { Rectangle } from "./rectangle";
export { Region } from "./region";
export { straightTo } from "./easing";
export {
  move,
  moveSync,
  moveDown,
  moveDownSync,
  moveLeft,
  moveLeftSync,
  moveRight,
  moveRightSync,
  moveUp,
  moveUpSync,
  getMousePosition,
} from "./mouse";
export { getWindowByTitle, Window } from "./window";
export { forAround } from "./sleep";
export { highlight, highlightSync } from "./highlight";
export { screenCaptureSync } from "./screen-capture";
