import { filter, from, Observable, switchMap } from "rxjs";
import { writeFileSync } from "fs";

export const executeObjectDetection = (model: any, tf: any) =>
  switchMap((image: Buffer) => {
    const imgTensor = tf.node.decodeImage(new Uint8Array(image), 3);

    writeFileSync("test.png", image);

    return from(model.detect(imgTensor)) as Observable<
      {
        bbox: number[];
        class: string;
        score: number;
      }[]
    >;
  });

export const waitForObject =
  (className: string) =>
  (source: Observable<{ bbox: number[]; class: string; score: number }[]>) => {
    return new Observable((subscriber) => {
      return source.subscribe((data) => {
        const matches = data.filter((item) => item.class === className);
        if (matches.length > 0) {
          subscriber.next(matches);
          subscriber.complete();
        }
      });
    });
  };

export const filterByObject =
  (className: string) =>
  (source: Observable<{ bbox: number[]; class: string; score: number }[]>) => {
    return new Observable((subscriber) => {
      return source.subscribe((data) => {
        const matches = data.filter((item) => item.class === className);
        if (matches.length > 0) {
          subscriber.next(matches);
        }
      });
    });
  };
