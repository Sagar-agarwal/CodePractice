// Code variables
let min = 1,
    max = 10,
    winningNum = 2,
    attempts = 3,
    clrGreen = 'green',
    clrRed = 'red';

// Dom variables
const   minUI = document.querySelector('.min-num'),
        maxUI = document.querySelector('.max-num'),
        game = document.querySelector('#game'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');


// Set onLoad UI Elements
minUI.textContent = min;
maxUI.textContent = max;

// Guess button listener
guessBtn.addEventListener('click', checkNumber);

function checkNumber (e) {
    let guessNum = parseInt(guessInput.value);

    if (isNaN(guessNum) || guessNum < min || guessNum > max) {
        showErrorMessage(`Enter a number between ${min} and ${max}`, clrRed);
    }
    else {
        if (guessNum === winningNum) {
            showInGameMessage(`${guessNum} is Correct, YOU WON!!!`, clrGreen);
        }
        else {
            showInGameMessage(`Incorrect, TRY AGAIN!!`, clrRed);
        }
    }
};

function showErrorMessage (msg, color){
    message.textContent = msg;
    message.style.color = color;
};

function showInGameMessage (msg, color){
    message.textContent = msg,
    message.style.color = color;
    guessInput.style.borderColor = color;
};