// Code variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    attempts = 3,
    clrGreen = 'green',
    clrRed = 'red';

    

// Dom variables
const   minUI = document.querySelector('.min-num'),
        maxUI = document.querySelector('.max-num'),
        game = document.querySelector('#game'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message'),

        // Sounds constants
        wrongMoveSound = "wrong-move",
        winSound = "win",
        gameOverSound = "gameOver",
        reloadSound = "reloadSound";


// Set onLoad UI Elements
minUI.textContent = min;
maxUI.textContent = max;

// Guess button listener
guessBtn.addEventListener('click', checkNumber);

// page load event
window.addEventListener('load', () => setTimeout(() => createjs.Sound.play(reloadSound), 100));

// Play Again - Game reset event listener
game.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('play-again')){
        window.location.reload();
    }
});

function checkNumber (e) {
    let guessNum = parseInt(guessInput.value);

    if (isNaN(guessNum) || guessNum < min || guessNum > max) {
        showErrorMessage(`Enter a number between ${min} and ${max}`, clrRed);
    }
    else {
        if (guessNum === winningNum) {
            showInGameMessage(`${guessNum} is Correct, YOU WON!!!`, clrGreen);
            createjs.Sound.play(winSound);
            playAgain();
        }
        else {
            attempts -= 1;
            if (attempts === 0) {
                showInGameMessage(`--- GAME OVER ---`);
                createjs.Sound.play(gameOverSound);
                playAgain();
            }
            else {
                showInGameMessage(`Incorrect, TRY AGAIN!! , attempts left ${attempts}`, clrRed);
                createjs.Sound.play(wrongMoveSound);
            }
            
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

function playAgain () {
    guessInput.disabled = true;
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
};

function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// SoundJS audio loads
function loadSound (){
     createjs.Sound.registerSound("assets/audio/wrong-move.wav", wrongMoveSound);
     createjs.Sound.registerSound("assets/audio/win.wav", winSound);
     createjs.Sound.registerSound("assets/audio/lose.wav", gameOverSound);
     createjs.Sound.registerSound("assets/audio/reload.wav", reloadSound);
}; 

