import { getMousePosition } from "auto-io-addon";
import { Point } from "../point";
import { bresenham } from "./bresenham";

export const straightTo = (to: Point) => bresenham(getMousePosition(), to);
