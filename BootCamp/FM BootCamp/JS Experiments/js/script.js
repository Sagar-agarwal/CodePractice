/*const multiply = (a, b) => a * b;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

const math = (a, b, func) => func(a, b);

console.log(math(2, 5, subtract));
*/
class Matho {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add = (a = this.a, b = this.b) => a + b;
}

const m = new Matho(1, 2);
console.log(m.add());
