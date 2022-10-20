import React, { useState } from "react";
import { Stack } from "../../utils/stack";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import style from "./stack-page.module.css";

export const StackPage: React.FC = () => {
  const array = new Stack<string>();

  const [input, setInput] = useState<string>("");
  const [addBtn, setAddBtn] = useState<boolean>(true);
  const [removeBtn, setRemoveBtn] = useState<boolean>(true);
  const [clearBtn, setClearBtn] = useState<boolean>(true);

  array.push("прив");
  array.push("как");
  array.pop();
  console.log(array.peak()); // как
  array.push("дела?");
  console.log(array.peak()); // дела?

  return (
    <SolutionLayout title="Стек">
      <div className={style.container}>
        <div className={style.container_buttons}>
          <Input
            extraClass={style.input}
            onChange={() => console.log("input change")}
            placeholder="Введите текст"
            maxLength={4}
            isLimitText
          />
          <Button
            onClick={() => console.log("click add")}
            text={"Добавить"}
            disabled={addBtn}
          />
          <Button
            onClick={() => console.log("click delete")}
            text={"Удалить"}
            disabled={removeBtn}
          />
        </div>
        <Button
          onClick={() => console.log("click clear list")}
          text={"Очистить"}
          disabled={clearBtn}
        />
      </div>
      <div className={style.container__circle}>
        {array.getContainer()?.map((item, index) => (
          <Circle
            key={index}
            letter={`${item}`}
            index={index}
            head={index === array.getSize() - 1 ? "top" : ""}
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
