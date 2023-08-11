type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class singleLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  _updateHeadAndTail(node: Node<T>): void {
    if (!this.head) {
      this.head = this.tail = node;
    }
    this.tail = node;
  }

  _createNode(value: T, next: Node<T>): Node<T> {
    let node: Node<T> = {
      value,
      next,
    };

    this._updateHeadAndTail(node);
    return node;
  }

  push(value: T): void {
    let tailNode: Node<T>;

    if (!this.head) {
      tailNode = undefined;
    } else {
      tailNode = this.tail;
    }
    const node: Node<T> = this._createNode(value, tailNode);
    this._updateHeadAndTail(node);
    this.length += 1;
  }

  pop(): T | undefined {
    // head does not exist
    if (!this.head) {
      return undefined;
    }

    if (!this.tail) {
      return undefined;
    }

    const popValue: T = this.tail.value;

    this.length -= 1;
    // List has 1 value
    if (this.length === 1) {
      this.tail = this.head;
    }
    // list has no value
    if (this.length === 0) {
      this.head = this.tail = undefined;
    }

    // todo: POP NOT WORKING, RETURNING UNDEFINED, below if block is the probable cause
    if (this.length > 1) {
      let i = 0;
      let currentNode: Node<T> = this.head;
      while (i < this.length) {
        let nextNode: Node<T> = currentNode.next;
        i++;
        if (i === this.length) {
          // nextNode.next = undefined;
          this.tail = nextNode;
        }
      }
    }

    return popValue;
  }

  start(): T | undefined {
    return this.head?.value;
  }

  end(): T | undefined {
    return this.tail?.value;
  }
}
