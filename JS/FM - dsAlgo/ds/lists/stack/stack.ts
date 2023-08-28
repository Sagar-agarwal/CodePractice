type QNode<T> = {
  prev?: QNode<T>;
  value: T;
};

export default class Stack<T> {
  public length: number;
  private head?: QNode<T>;

  constructor() {}

  push(item: T): void {}

  pop(): T | undefined {}

  peek(): T | undefined {}
}
