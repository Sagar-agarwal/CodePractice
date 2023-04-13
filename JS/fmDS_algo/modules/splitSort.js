// psedoCode



const mergeSortFunction = function (arr) {
    let outputArr = [];



    // 1 elem array
        if ( arr.length === 1) {
            return arr;
        } 
    // 2 element array
    if (arr.length === 2) {
        if (arr[0] > arr[1]){
            arr.reverse();
        }
        return arr;
    }

    // recursion
    let arrLen = arr.length;

    // split array in half's

    //
};