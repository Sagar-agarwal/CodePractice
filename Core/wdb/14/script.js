function clickMeButton () {
    var manupulate = document.querySelector("#manupulate");
    manupulate.classList.toggle("custom-jumbotron");

}

var h2 = document.querySelector("h2");
console.log(h2);
h2.addEventListener("mouseover", function(){
    h2.style.color = "red";
});
