function namesIterator(arr) {
    let index = 0;

    return {
        next: function() {
            return arr.length ? { value: arr.shift(), done: false, arr: arr } : { done: true };
        }
    };
}

const namesArr = ["a", "b", "c"];
const names = new namesIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
