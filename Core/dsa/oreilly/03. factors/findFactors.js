var findFactors = function(num) {
    var originalNum = num;
    var factors = "Factors: 1";
    var factor = 3;
    if (num == 1) {
        factors = num;
        return "Factor: " + factors;
    }
    var sqrRoot = Math.floor(Math.sqrt(num));

    if (sqrRoot > 2) {
        while (num % 2 == 0) {
            factors += "*2";
            num = num / 2;
        }
    }

    sqrRoot = Math.floor(Math.sqrt(num));
    if (sqrRoot > 3) {
        while (num % 3 == 0) factors += "*3";
        num = num / 3;
    }

    sqrRoot = Math.floor(Math.sqrt(num));
    while (factor != num && factor <= sqrRoot) {
        factor = factor + 2;
        if (factor < sqrRoot) {
            while (num % factor == 0) {
                factors += "*" + factor;
                num = num / factor;
            }
        }
    }

    if (num > sqrRoot) return console.log(factors);
};
