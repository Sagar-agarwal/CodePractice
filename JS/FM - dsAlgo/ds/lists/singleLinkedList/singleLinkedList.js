export default class singleLinkedList {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    _updateHeadAndTail(node) {
        if (!this.head) {
            this.head = this.tail = node;
        }
        this.tail = node;
    }
    _createNode(value, next) {
        let node = {
            value,
            next,
        };
        this._updateHeadAndTail(node);
        return node;
    }
    push(value) {
        let tailNode;
        if (!this.head) {
            tailNode = undefined;
        }
        else {
            tailNode = this.tail;
        }
        const node = this._createNode(value, tailNode);
        this._updateHeadAndTail(node);
        this.length += 1;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        if (!this.tail) {
            return undefined;
        }
        const popValue = this.tail.value;
        this.length -= 1;
        if (this.length === 1) {
            this.tail = this.head;
        }
        if (this.length === 0) {
            this.head = this.tail = undefined;
        }
        if (this.length > 1) {
            let i = 0;
            let currentNode = this.head;
            while (i < this.length) {
                let nextNode = currentNode.next;
                i++;
                if (i === this.length) {
                    this.tail = nextNode;
                }
            }
        }
        return popValue;
    }
    start() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
    end() {
        var _a;
        return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.value;
    }
}
