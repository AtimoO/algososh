import React, { useState } from "react";
import { Direction } from "../../types/direction";
import { ElementStates } from "../../types/element-states";
import { SortMethod, SortType, TItemArray } from "../../types/utils";
import { selectionSort } from "../../utils/sotring";
import { getRandomArr } from "../../utils/utils";
import { Button } from "../ui/button/button";
import { Column } from "../ui/column/column";
import { RadioInput } from "../ui/radio-input/radio-input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import style from "./sorting-page.module.css";

export const SortingPage: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [array, setArray] = useState<Array<TItemArray>>([]);

  const generateArray = () => {
    setArray(
      getRandomArr(0, 100).map((item: number) => {
        return {
          item,
          state: ElementStates.Default,
        };
      })
    );
  };

  const handlerSort = (
    array: Array<TItemArray>,
    sort: SortType = SortType.Asc,
    method: SortMethod = SortMethod.Bubble
  ) => {
    if (method === SortMethod.Choise) {
      setArray(selectionSort(array, sort));
    } else {
      // other method sort
    }
  };

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={style.container}>
        <div className={style.radioBtn__group}>
          <RadioInput
            label="Выбор"
            defaultChecked
            name="radio"
            disabled={disabled}
          />
          <RadioInput label="Пузырёк" name="radio" disabled={disabled} />
        </div>
        <div className={style.btn__group}>
          <Button
            text="По возрастанию"
            sorting={Direction.Ascending}
            disabled={disabled}
            onClick={() => handlerSort(array)}
          />
          <Button
            text="По убыванию"
            sorting={Direction.Descending}
            disabled={disabled}
          />
        </div>
        <Button text="Новый массив" onClick={generateArray} />
      </div>
      <div className={style.container__array}>
        {array.map((item, index) => (
          <Column index={+item.item} state={item.state} key={index} />
        ))}
      </div>
    </SolutionLayout>
  );
};
