var square = (x) => {
    var result = x * x;
    return result;
};


var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }

};


