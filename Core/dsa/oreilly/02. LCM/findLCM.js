var findLCM = function(a, b) {
    var product = a * b;

    while (b != 0) {
        var rem = a % b;
        a = b;
        b = rem;
    }

    return console.log("LCM: " + product / a);
};
