function guess(){
    var num = prompt("Guess the number");

    if(num == 7){
        alert("You guessed correctly");
        return;
    }
    if (num > 7) {
        alert("Too high !!");
        guess();
    }
    if (num < 7) {
        alert("Too LOW !");
        guess();
        }

}

guess();