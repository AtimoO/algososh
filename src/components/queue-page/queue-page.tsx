import React, { useEffect, useState } from "react";
import { ElementStates } from "../../types/element-states";
import { Queue, TQueueElement } from "../../utils/queue";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { Input } from "../ui/input/input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import style from "./queue-page.module.css";

export const QueuePage: React.FC = () => {
  const sizeQueue: number = 7;
  const queue = new Queue<string | null>(sizeQueue);
  const initArr = Array(sizeQueue).fill({
    item: "",
    state: ElementStates.Default,
    head: 0,
    tail: 0,
  });

  const [input, setInput] = useState<string>("");
  const [queueArray, setQueueArray] = useState<Array<TQueueElement>>(initArr);
  const [addBtn, setAddBtn] = useState<boolean>(true);
  const [clearBtn, setClearBtn] = useState<boolean>(true);

  useEffect(() => {
    !input ? setAddBtn(true) : setAddBtn(false);
  }, [input]);

  const handlerChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handlerAddItem = async () => {
    console.log("add");
  };

  const handlerRemoveItem = async () => {
    console.log("remove");
  };

  const handlerClearQueue = async () => {
    console.log("clear");
  };

  return (
    <SolutionLayout title="Очередь">
      <div className={style.container}>
        <div className={style.container_buttons}>
          <Input
            extraClass={style.input}
            onChange={handlerChangeInput}
            placeholder="Введите текст"
            maxLength={4}
            isLimitText
            value={input}
          />
          <Button
            onClick={handlerAddItem}
            text={"Добавить"}
            disabled={addBtn}
          />
          <Button
            onClick={handlerRemoveItem}
            text={"Удалить"}
            disabled={clearBtn}
          />
        </div>
        <Button
          onClick={handlerClearQueue}
          text={"Очистить"}
          disabled={clearBtn}
        />
      </div>
      <div className={style.container__circle}>
        {queueArray?.map((item, index) => (
          <Circle
            key={index}
            state={item.state}
            letter={`${item.item}`}
            index={index}
            head={index === 0 && item.item !== "" ? "head" : ""}
            tail={
              index === queueArray.length - 1 && item.item !== "" ? "tail" : ""
            }
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
