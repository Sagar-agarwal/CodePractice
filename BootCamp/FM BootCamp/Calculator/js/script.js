// Globals
let runningTotal = 0;
let buffer = "0";
let previousOperator = "";

// UI Control Flow
const screen = document.querySelector(".screen");
const updateScreen = (value) => (screen.innerHTML = value.toString());

// Functional Control Flow
const buttonClicked = (value) => {
	if (isNaN(value)) {
		// Clicked button is NOT a number(0-9)
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
};

// Functional Buttons
const reset = () => {
	updateRunningTotal(0);
	previousOperator = "";
	updateScreen(0);
	resetBuffer();
};

const back = () => {
	buffer = buffer.length === 1 ? resetBuffer() : buffer.slice(0, buffer.length - 1);
	updateScreen(buffer);
};

const equalsTo = () => {
	let value = 0;
	if (previousOperator === "") {
		// need two numbers to perform math
		return;
	}
	switch (previousOperator) {
		case "+":
			value = add();
			break;
		case "-":
			value = minus();
			break;
		case "÷":
			value = divide();
			break;
		case "×":
			value = multiply();
			break;
		default:
	}
	updateRunningTotal(value);
	updateScreen(value);
	// Resets after Equals To
	previousOperator = "";
	resetBuffer();
	// logValues("Equals");
};

// Math Buttons
const add = () => runningTotal + parseInt(buffer);
const minus = () => runningTotal - parseInt(buffer);
const multiply = () => runningTotal * parseInt(buffer);
const divide = () => runningTotal / parseInt(buffer);

// Utility functions

const resetBuffer = () => (buffer = "0");

const updateRunningTotal = (value) => (runningTotal = value);

const handleNumber = (value) => {
	buffer = buffer === "0" ? value : (buffer += value);
	updateScreen(buffer);
};

const handleSymbol = (value) => {
	switch (value) {
		case "C": // Reset
			reset();
			break;
		case "←": // remove last number from buffer
			back();
			break;
		case "=": // perform operation
			equalsTo();
			break;
		default:
			if (previousOperator === "" && runningTotal === 0) {
				updateRunningTotal(parseInt(buffer));
			}
			previousOperator = value;
			resetBuffer();
			updateScreen(value);
	}
	// logValues("symbol");
};

const logValues = (op) => {
	console.log(`
    ------- ${op} ------
    runningTotal: ${runningTotal}
    buffer: ${buffer}
    previousOperator: ${previousOperator}
    -----------------------
    
    `);
};

(() => {
	document.querySelector(".calc-buttons").addEventListener("click", (e) => buttonClicked(e.target.innerText));
})();
