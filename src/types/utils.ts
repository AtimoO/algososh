import { ElementStates } from "./element-states";

export type TItemArray = {
  item: string | number;
  state: ElementStates;
};

export enum SortType {
  Asc = "Asc",
  Desc = "Desc",
}

export enum SortMethod {
  Choise = "Choise",
  Bubble = "Bubble",
}
