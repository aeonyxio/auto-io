const randomNumber = (
  min: number,
  max: number // min and max included
) => Math.random() * (max - min) + min;

export const forAround = (sec: number) => randomNumber(sec, sec + sec * 0.3);
