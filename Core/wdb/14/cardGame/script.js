(function() {
    var clickedColor = '';
    var color = generateColor();
    /*color.pop();*/
    
    var pickedColor = color[Math.floor((Math.random()*6))];    

    var message = document.querySelector("#message");
    var play = document.querySelector("#playButton");
    var headerColor = document.querySelector(".top-header");
    var h1Span = document.querySelector("#headerRGB");
    var squares = document.querySelectorAll(".square");
    
    function gameOn_cards () {
        /*   T O P - H E A D E R    Manupulation*/
        h1Span.textContent = pickedColor.toUpperCase();
        
        /*    S Q U A R E   Manupulation   */
        for (var i = 0; i < (squares.length); i++) {
            squares[i].style.background = color[i];

            /* Squares Event handlers */
            squares[i].addEventListener('click', function() {
                clickedColor = this.style.background;
                console.log(clickedColor);
                if (clickedColor === pickedColor){
                    _correctCardClicked(squares);
                }
                else{
                    this.style.background = "#f7f7f7";
                    message.textContent = "-- Try Again! --";
                }
            });
        }
    }
  

    function _correctCardClicked (squares){
        
        message.textContent = "-- Correct --";
        play.textContent = "Play Again?";

        headerColor.style.background = pickedColor;
        for(var i = 0; i < squares.length ; i++){
            squares[i].style.background = pickedColor;
        }
    }

    function _numGenerator (){
        return Math.floor(Math.random()*256);
    }


    function generateColor (){
        var rgbColors = [];
        for(var i = 1; i <= 6 ; i++){
            rgbColors.push('rgb(' + _numGenerator() + ', ' + _numGenerator() + ', ' + _numGenerator() + ')');
        }
            
        return rgbColors;        
    }

    play.addEventListener('click', function(){
        console.log("play clicked");
        headerColor.style.background = "#3b5998";
        color = generateColor();
        color.pop();
        pickedColor = color[Math.floor(Math.random()*6)];
        gameOn_cards();
    });




    gameOn_cards();
}());