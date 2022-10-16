import { TCharsArray } from "../types/string";

export const delay = (milliseconds: number) =>
  new Promise((res) => setTimeout(res, milliseconds));

export const swap = (
  array: TCharsArray[],
  firstIndex: number,
  secondIndex: number
): void => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};
