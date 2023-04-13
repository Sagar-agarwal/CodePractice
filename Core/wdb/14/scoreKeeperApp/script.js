var player1Score = 0;
var player2Score = 0;
var gamePoint = 5;
var player;





function _checkGameStatus(points, playerDOM) {
    if (points == gamePoint) {
        playerDOM.classList.add("win");
        var scoreButtons = document.querySelectorAll('input[type="button"]');
            for (var i = 0; i < scoreButtons.length ; i++) {
                scoreButtons[i].setAttribute('disabled', '');
            }
    }
}

(function() {
    var customGamePoint = document.querySelector("#customGamePoint");
    customGamePoint.addEventListener("input", function() {
        gamePoint = customGamePoint.value;
        var customPlayingTo = document.querySelector("#playingTo");
        customPlayingTo.textContent = gamePoint.toString();
    });


}());


function player1Scores() {
    var player1DOM = document.querySelector("#player1Score");

    player1Score += 1;
    player1DOM.textContent = player1Score.toString();

    _checkGameStatus(player1Score, player1DOM);

}

function player2Scores() {
    var player2DOM = document.querySelector("#player2Score");

    player2Score += 1;
    player2DOM.textContent = player2Score.toString();

    _checkGameStatus(player2Score, player2DOM);
}

function gameReset() {
    player1Score = 0;
    player2Score = 0;
    gamePoint = 5;

    // Player Scores
    var player1DOM = document.querySelector("#player1Score");
    player1DOM.textContent = player1Score.toString();
    player1DOM.classList.remove("win");
    var player2DOM = document.querySelector("#player2Score");
    player2DOM.textContent = player2Score.toString();
    player2DOM.classList.remove("win");

    // Game Point
    var customPlayingTo = document.querySelector("#playingTo");
    customPlayingTo.textContent = gamePoint.toString();
    var customGamePoint = document.querySelector("#customGamePoint");
    customGamePoint.value = '';

    // Buttons Reset
    var scoreButtons = document.querySelectorAll('input[type="button"]');
            for (var i = 0; i < scoreButtons.length ; i++) {
                scoreButtons[i].removeAttribute('disabled');
            }
}