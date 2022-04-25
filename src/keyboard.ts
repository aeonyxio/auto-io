import { Code, keyDown, keyUp, unicodeDown, unicodeUp } from "auto-io-addon";

export const hotkey = async (...keys: Code[]) => {
  const localKeys = [...keys];

  if (localKeys.length === 0) {
    throw new Error("Hotkey cannot be empty");
  }

  const nextKey = localKeys.shift()!;

  await keyDown(nextKey as Code);
  if (localKeys.length > 0) await hotkey(...localKeys);
  await keyUp(nextKey as Code);
};

export const type = async (str: string) => {
  const chars = [...str];

  for (const char of chars) {
    const unicodeHex = char.charCodeAt(0).toString(16);
    await unicodeDown(unicodeHex);
    await unicodeUp(unicodeHex);
  }
};
