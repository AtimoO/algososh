import React, { useState } from "react";
import { ElementStates } from "../../types/element-states";
import { TCharsArray } from "../../types/string";
import { reverseCharsArray } from "../../utils/string";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import style from "./string.module.css";

export const StringComponent: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loaderBtn, setLoaderBtn] = useState<boolean>(false);
  const [charsArray, setCharsArray] = useState<Array<TCharsArray>>([]);

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? setDisabled(false) : setDisabled(true);
    setCharsArray(
      e.currentTarget.value.split("").map((char: string) => {
        return {
          char,
          state: ElementStates.Default,
        };
      })
    );
  };

  const handlerBtnClick = async () => {
    setLoaderBtn(true);
    await reverseCharsArray(charsArray, setCharsArray);
    setLoaderBtn(false);
  };

  return (
    <SolutionLayout title="Строка">
      <div className={style.container}>
        <Input
          onChange={handlerChangeInput}
          placeholder="Введите текст"
          maxLength={11}
          isLimitText
        />
        <Button
          onClick={handlerBtnClick}
          text="Развернуть"
          linkedList="small"
          isLoader={loaderBtn}
          disabled={disabled}
        />
      </div>
      <div className={style.container__circle}>
        {charsArray?.map((char, index) => (
          <Circle state={char.state} letter={char.char} key={index} />
        ))}
      </div>
    </SolutionLayout>
  );
};
