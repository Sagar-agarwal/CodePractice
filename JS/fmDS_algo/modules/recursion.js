var recursiveExponential = function (base, expo) {
    if (expo <= 1){
        return base;
    }

    return base * recursiveExponential(base, expo-1);
};


var recursiveMultiplier = function (arr, num) {
    
    if (arr.length === 0) {
        return arr; 
    }
    var last = arr.pop();
    recursiveMultiplier (arr, num)
    
    arr.push(last*num);
    return arr;
};

var recursiveReverse = function (arr) {
    if (arr.length === 0) {
        return arr;
    }

    var last = arr.pop();
    recursiveReverse(arr);

    arr.unshift(last);

    return arr;
};

var fibonacci = function (n) {
    
    if (n < 2) {
        return n;
    }
    

    return fibonacci(n-1) + fibonacci(n-2);
};

var flatten = function (arr) {
    var flatMap = [];

    arr.forEach(function (el) {
        if (Array.isArray(el)){
            flatMap = flatMap.concat(flatten(el));
        }
        else {
            flatMap.push(el);
            
        }    
    });
    
    return flatMap;
};