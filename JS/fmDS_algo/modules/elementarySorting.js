var bubbleSort = function (arr) {

    for (let j = 0; j < arr.length - 1; j++) {
        console.log('>>> j = ', arr);
        for (let i = 0; i < arr.length; i++) {
            console.log('i = ', arr[i]);
            const ele = arr[i];

            if (ele > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = ele;
            }
        }
    }


    return arr;
};

var insertionSort = function (arr, ele) {
    var arrLen = arr.length;
    if (arrLen === 0) {
        return arr.push(ele);
    }

    var swapEle, swapEle2, largestEle = true;

    for (let index = 0; index < arrLen; index++) {

        if (ele < arr[index]) {
            largestEle = false;
            swapEle2 = arr[index];
            arr[index] = ele;
            console.log('swapEle2: ' + swapEle2);
            console.log(`arr[${index}]: ${arr[index]}`);
            for (let i = index + 1; i < arrLen + 1; i++) {
                swapEle = arr[i] ? arr[i] : undefined;
                arr[i] = swapEle2;
                swapEle2 = swapEle;

            }
        }

    }
    if (largestEle) {
        arr.push(ele);
    }

    return arr;
};


var arr = [9, 7, 5, 6, 8, 3, 0, 4, 1, 2];

[1, 4, 8, 12]