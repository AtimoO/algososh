import { TItemArray } from "../types/utils";

export type TQueueElement = TItemArray<string | null> & {
  head: any;
  tail: any;
};

interface IQueue<T> {
  enqueue: (item: T) => void;
  dequeue: () => void;
  peak: () => T | null;
  isEmpty: () => boolean;
  getHead: () => number;
  getTail: () => number;
}

export class Queue<T> implements IQueue<T> {
  private container: (T | null)[] = [];
  private head = 0;
  private tail = 0;
  private readonly size: number = 0;
  private length: number = 0;

  constructor(size: number) {
    this.size = size;
    this.container = Array(size);
  }

  enqueue = (item: T) => {
    if (this.length >= this.size) {
      throw new Error("Превышена максимальная длина");
    }
    this.container[this.tail % this.size] = item;
    this.tail++;
    this.length++;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("Нет элементов в очереди");
    }
    this.container[this.head % this.size] = null;
    this.head++;
    this.length--;
  };

  peak = (): T | null => {
    if (this.isEmpty()) {
      throw new Error("Нет элементов в очереди");
    }
    return this.container[this.head % this.size] || null;
  };

  isEmpty = () => this.length === 0;
  getHead = () => this.head;
  getTail = () => this.tail;

  getContainer = () => this.container; // для проверки контейнера
}
