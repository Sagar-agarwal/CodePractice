function primeNumber (start, end){
    if (end < 3){
        return [1, 2];
    }

    if (end < 4){
        return [1, 2, 3];
    }

    var primeArr = [2, 3];

    for(var i = 4; i < end; i++){
        if (i % 2 !== 0 && i % 3 !== 0){
            primeArr.push(i);
        }
    }

    var counter = 2;
    while (primeArr.length > counter){
        primeArr = primeArr.filter(function (num, index, primeArr){
            return num % primeArr[counter] != 0;
        }, this);
        counter++;
    }
    
    return primeArr.join(',');
};

primeNumber(1, 100);