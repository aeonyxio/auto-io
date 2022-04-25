import {
  getWindowByTitle,
  dpiAware,
  getWindows,
  getWindowTitle,
  sleep,
} from ".";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs-node";
import { executeObjectDetection, waitForObject } from "./operators";
import { move } from "./mouse";
import { Point } from "./point";

const main = async () => {
  dpiAware();
  console.log(getWindows().map(getWindowTitle));
  const window = getWindowByTitle("test.ts - auto-io - Visual Studio Code");
  const model = await cocoSsd.load();

  window
    .watchScreen(1000)
    .pipe(executeObjectDetection(model, tf), waitForObject("car"))
    .subscribe((predictions) => {
      console.log(JSON.stringify(predictions, null, 2));
    });

  await sleep(5000);
  move(new Point(100, 100));
  await sleep(5000);
  move(new Point(1000, 1000));
};
main().then(() => {
  console.log("done");
});
