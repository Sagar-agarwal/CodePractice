var Queue = function (capacity) {
  this._storage = {};
  this._capacity = capacity || 100;
  this._count = 0;
};

Queue.prototype = {

    enqueue: function (value) {
        if (this._count < this._capacity) {
            this._storage[this._count++] = value;
            return this._count;
        }
        else {
            return 'Error: Queue size overflow';
        }
    },
    dequeue: function () {

        if (this._count == 0) {
            return 'ERROR: Queue empty';
        }

        var queueItem = this._storage[0];

        for (var i = 0; i < this._count; i++) {
            this._storage[i] = this._storage[i+1];
        }
        delete this._storage[this._count-1];
        
        this._count--;
        return queueItem;
    },
    peek: function () {
        if (this._count == 0) {
            return 'ERROR: Queue empty';
        }

        return this._storage[0];
    },
    count: function () {
        return this._count;
    }
};


var myQ = new Queue();