var Stack = function () {
    this.storage = '';
    this.size = 0;
};

Stack.prototype = {
    push: function (val) {
        if (this.storage == ''){
            this.storage = val + '';
        }
        else {
            this.storage += ',' + val;
        }

        this.size++;
    },
    pop: function () {
        var stackFrame;
        var lastDelimiter = this.storage.lastIndexOf(',');
        
        if (lastDelimiter < 0){
            stackFrame = this.storage;
            this.storage = '';
        }
        else{
            stackFrame = this.storage.substring(lastDelimiter + 1);
            this.storage = this.storage.slice(0, lastDelimiter);
        }
       
        this.size--;
        return stackFrame;
    },
    size: function () {
        return this.size;
    }
};

var n = new Stack();
