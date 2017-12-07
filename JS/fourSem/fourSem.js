'use strict';
// @ Insertion sort
function insertionSort(nums) {
    'use strict';
    var swapped = true;
    var count = 0;
    var i,j,spliced;
    for (i = 1; i < nums.length; i += 1) {
        for (j = 0; j < i; j += 1) {
            if (nums[i] < nums[j]) {
                spliced = nums.splice(i,1);
                nums.splice(j, 0, spliced[0]);
                console.log(nums);
                count++;
            }
        }
    }

    console.log(count);
    return nums;
}

// @ Merge sort
function mergeSort(nums) {
    'use strict';
    if (nums.length ==1) {
        return nums;
    }

    var len = nums.length;
    var mid = Math.floor(len / 2);

    var left = nums.slice(0, mid);
    var right = nums.slice(mid, len);

    console.log("left: " + left);
    console.log("right: " + right);
    return stitch(mergeSort(left),mergeSort(right));

}
function stitch(left, right) {
    'use strict';
    var results = [];

    while(left.length && right.length) {

        if (left[0] <= right[0]) {
            results.push(left.shift());
        }
        else{
            results.push(right.shift());
        }
    }

    while(left.length) {
        results.push(left.shift());
    }
    while(right.length) {
        results.push(right.shift());
    }

    console.log("results: " + results);
    return results;
}

// @ Quick sort
function quickSort(nums) {
    // body...
    'use strict';
    if (nums.length <= 1) {
        return nums;
    }

    var pivot = nums.splice(nums.length - 1 , 1);
    var left = [];
    var right = [];
    var i;

    for (i = 0; i < nums.length; i += 1) {
        if (nums[i] <= pivot) {
            left.push(nums[i]);
        }
        if(nums[i] > pivot) {
            right.push(nums[i]);
        }
    }


    return quickSort(left).concat(pivot, quickSort(right));
}




/*
var arrBasic = [10, 8, 4, 6, 3, 5, 2, 9, 7, 1];
var arrAdv = [10,8,4,6,10,8,4,6,30,8,4,6,3,5,2,9,7,1,5,2,9,7,1,3,50,8,4,6,3,5,2,9,7,1,2,9,7,10,8,4,6,3,10,10,8,4,6,3,5,2,9,7,1,8,4,6,3,5,2,9,7,1,5,2,9,7,1,1];
var arr1 = [1,3,3,5,7,9];
var arr2 = [2,4,6,6,8,8];
var arrSort = arr1.concat(arr2);


//console.log(arrSort.sort());

//console.log(insertionSort(arrBasic));

//console.log(mergeSort(arrBasic));

//console.log(quickSort(arrSort));


*/

