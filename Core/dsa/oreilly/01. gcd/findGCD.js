findGCD = function(a, b) {
    while (b != 0) {
        var remainder = a % b;
        a = b;
        b = remainder;
        console.log(a, b, remainder);
    }
    return console.log("GCD: " + a);
};
