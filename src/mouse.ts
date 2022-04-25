import {
  move as mouseMove,
  moveSync as mouseMoveSync,
  mouseDown,
  mouseDownSync,
  mouseUp,
  mouseUpSync,
  Mouse,
  sleep,
  getMousePosition as getMousePositionSync,
  sleepSync,
} from "auto-io-addon";
import { Point } from "./point";

export const getMousePosition = (): Point => {
  const pos = getMousePositionSync();
  return new Point(pos.x, pos.y);
};

export async function move(
  this: { delay: number } | void,
  ...points: Point[]
): Promise<void> {
  const sleepFor = this?.delay ?? 0.000001;
  for (let i = 0; i < points.length; i++) {
    await mouseMove(points[i].x, points[i].y);
    if (i !== points.length - 1) {
      await sleep(sleepFor);
    }
  }
}

export function moveSync(
  this: { delay: number } | void,
  ...points: Point[]
): void {
  const sleepFor = this?.delay ?? 0.000001;
  for (let i = 0; i < points.length; i++) {
    mouseMoveSync(points[i].x, points[i].y);
    if (i !== points.length - 1) {
      sleepSync(sleepFor);
    }
  }
}

export const moveRight = async (px: number): Promise<void> => {
  const point = getMousePosition();
  await mouseMove(point.x + px, point.y);
};

export const moveLeft = async (px: number): Promise<void> => {
  const point = getMousePosition();
  await mouseMove(point.x - px, point.y);
};

export const moveUp = async (px: number): Promise<void> => {
  const point = getMousePosition();
  await mouseMove(point.x, point.y - px);
};

export const moveDown = async (px: number): Promise<void> => {
  const point = getMousePosition();
  await mouseMove(point.x, point.y + px);
};

export const moveRightSync = (px: number): void => {
  const point = getMousePosition();
  mouseMoveSync(point.x + px, point.y);
};

export const moveLeftSync = (px: number): void => {
  const point = getMousePosition();
  mouseMoveSync(point.x - px, point.y);
};

export const moveUpSync = (px: number): void => {
  const point = getMousePosition();
  mouseMoveSync(point.x, point.y - px);
};

export const moveDownSync = (px: number): void => {
  const point = getMousePosition();
  mouseMoveSync(point.x, point.y + px);
};

export const clickSync = (button: Mouse = Mouse.Left) => {
  mouseDownSync(button);
  mouseUpSync(button);
};

export const click = async (button: Mouse = Mouse.Left) => {
  await mouseDown(button);
  await mouseUp(button);
};

export const doubleClick = async (button: Mouse = Mouse.Left) => {
  await mouseDown(button);
  await mouseUp(button);
  await sleep(0.2);
  await mouseDown(button);
  await mouseUp(button);
};
