/* ******* Functions ******** */
const clickEvent = (domNode, func) => {
	domNode().addEventListener("click", func);
};
const buttonClicked = (e) => {
	let screenText = "";
	let buttonValue = e.target.innerText;
	let notNum = isNaN(buttonValue);
	let num = "";
	console.log(`button Clicked: ${buttonValue} and is NOT number ${notNum}`);
	if (!notNum) {
		num += buttonValue;
	}
	if (notNum) {
		Calc.setSymbol(buttonValue);
		Calc.addNumberToArray(num);
		num = "";

		if (Calc.getSymbol() === Calc.SIGNS.equals) {
			screenText = Calc.equalsTo();
		}
	}
	createScreenText(screenText);
	e.preventDefault();
};

// Get DOM Elements
const getScreenDOM = () => document.querySelector(".screen");
const getCalcButtonsDom = () => document.querySelector(".calc-buttons");

// Utility Functions
const updateScreen = (str) => (getScreenDOM().innerText = str);
const resetScreen = () => (getScreenDOM().innerText = 0);
const reset = () => {
	Calc.reset();
	resetScreen();
};

const parseSymbol = (str) => {
	Calc.symbol = str;
};

const createScreenText = (btn) => {
	let screen = getScreenDOM();
	let screenText = screen.innerText;
	let newText = screenText - 0 === 0 ? btn : screenText + btn;
	updateScreen(newText);
};

/* ******* Calculator Class ******************************** */
class Calculator {
	constructor() {
		this.arr = [];
		this.num1 = 0;
		this.num2 = 0;
		this.symbol = "";
		const SIGNS = {
			add: "+",
			sub: "-",
			multiply: "",
			divide: "÷",
			equals: "=",
			back: "←",
			c: "C",
		};
	}

	addNumberToArray = (num) => this.arr.push(num - 0);

	add = (a, b) => a + b;

	subtract = (a, b) => a - b;

	multiply = (a, b) => a * b;

	divide = (a, b) => a / b;

	reset = () => {
		this.arr = [];
		this.num1 = 0;
		this.num2 = 0;
		this.symbol = "";
	};

	equalsTo = () => {};

	setSymbol = (str) => (this.symbol = str);

	getSymbol = () => this.symbol;

	checkReset = (str) => str === this.SIGNS.c;
}

/* ******* Initialize ******** */
clickEvent(getCalcButtonsDom, buttonClicked);
const Calc = new Calculator();
