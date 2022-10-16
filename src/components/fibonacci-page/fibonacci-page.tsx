import React, { useState } from "react";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";
import { delay } from "../../utils/utils";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import style from "./fibonacci-page.module.css";

export const FibonacciPage: React.FC = () => {
  const [input, setInput] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loaderBtn, setLoaderBtn] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<Array<number>>([]);

  const handlerChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    value > 0 && value < 20 ? setDisabled(false) : setDisabled(true);
    setInput(value);
  };

  const handlerBtnClick = async () => {
    setLoaderBtn(true);
    await fibo(input + 1);
    setLoaderBtn(false);
  };

  const fibo = async (num: number) => {
    const array: number[] = [];

    for (let i = 1; i <= num; i++) {
      array.push(calcFibo(i));
      setNumbers([...array]);
      await delay(SHORT_DELAY_IN_MS);
    }
  };

  // Из лекции
  const calcFibo = (n: number, memo: Record<number, number> = {}): number => {
    if (n in memo) {
      return memo[n];
    }
    if (n <= 2) {
      return 1;
    }
    memo[n] = calcFibo(n - 1, memo) + calcFibo(n - 2, memo);
    return memo[n];
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={style.container}>
        <Input
          onChange={handlerChangeInput}
          placeholder="Введите число"
          max={19}
          type={"number"}
          isLimitText
        />
        <Button
          onClick={handlerBtnClick}
          text="Рассчитать"
          linkedList="small"
          isLoader={loaderBtn}
          disabled={disabled}
        />
      </div>
      <div className={style.container__circle}>
        {numbers?.map((number, index) => (
          <Circle letter={`${number}`} key={index} index={index} />
        ))}
      </div>
    </SolutionLayout>
  );
};
