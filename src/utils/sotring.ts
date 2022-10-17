import { SortType, TItemArray } from "../types/utils";
import { swap } from "./utils";

export const selectionSort = (arr: Array<TItemArray>, sort: SortType) => {
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (sort === SortType.Asc) {
        if (arr[i].item < arr[j].item) {
          swap(arr, j, i);
        }
      } else {
        if (arr[i].item > arr[j].item) {
          swap(arr, j, i);
        }
      }
    }
  }

  return arr;
};
