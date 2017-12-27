(function (){
    $('div.jumbotron').on('mouseover', function(){
        $(this).fadeOut(800);
    });
    $('div.jumbotron').on('mouseout', function(){
        $(this).fadeIn(800);
    });


}());