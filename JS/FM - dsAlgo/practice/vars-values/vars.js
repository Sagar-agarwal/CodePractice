let num = 6;
let str = 'string';
let date = new Date();
let nowDate;
const add = function (a, b) {
    return a + b;
};
const result = add(1, 2);
function myCar(car) {
    if (car.isElectric !== undefined) {
        console.log(car.isElectric);
    }
}
let car = {
    make: 'Toyota',
    name: 'Fortuner',
    year: 2012,
    color: 'green',
};
myCar({
    make: 'Toyota',
    name: 'Fortuner',
    year: 2012,
});
