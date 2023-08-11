type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class singleLinkedList<T> {
    length: number;
    private head?;
    private tail?;
    constructor();
    _updateHeadAndTail(node: Node<T>): void;
    _createNode(value: T, next: Node<T>): Node<T>;
    push(value: T): void;
    pop(): T | undefined;
    start(): T | undefined;
    end(): T | undefined;
}
export {};
