var eg = {};

eg.factorial = function (num){
    var fac = 1;
    for (var i = 1; i <= num ; i++) {
        fac *= i;
    }
    return fac;
},

eg.even = function (num){
    if (num%2 == 0) {
        return "Number is even";
    }
    else{
        return "Number is odd";
    }
};


