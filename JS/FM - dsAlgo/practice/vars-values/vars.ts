let num = 6;
let str = 'string';

let date = new Date();
let nowDate: Date;

// Function
const add = function (a: number, b: number): number {
  return a + b;
};

const result = add(1, 2);

// Objects
function myCar(car: {
  make: string;
  name: string;
  year: number;
  isElectric?: boolean; // optional property '?'
  // color property is not defined however it would not throw error
}) {
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
