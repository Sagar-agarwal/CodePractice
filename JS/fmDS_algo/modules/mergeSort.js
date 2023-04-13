const merge = function (arrL, arrR){
    const outputArr = [];
    let lPr = 0,
        rPr = 0;
    console.log(`merger called: arrL: ${arrL}, arrR: ${arrR}`);
    while (arrL.length > lPr || arrR.length > rPr) {
        if (arrL[lPr] >= arrR[rPr]) {
            console.log(`inside arrR`);
            outputArr.push(arrR[rPr]);
            rPr++;
        }
        // if (arrL[lPr] == undefined) {
        //     outputArr.push(arrR[rPr]);
        //     rPr++;
        // }
        
        // if (arrR[rPr] == undefined) {
        //     outputArr.push(arrL[lPr]);
        //     lPr++;
        // }
        else {
            console.log(`inside arrL ${arrL}`);
            outputArr.push(arrL[lPr]);
            lPr++;
        }
    }
    return outputArr;
};

const mergeSort = function (list) {
    const listLen = list.length;
    const arrHalfLength = Math.floor(listLen/2);
    if (listLen < 2) {
        return list;
    }

    // console.log(`lArr ${list.slice(0, arrHalfLength)}`);
    // console.log(`rArr ${list.slice(arrHalfLength, listLen)}`);


    let lList = mergeSort(list.slice(0, arrHalfLength));
    let rList = mergeSort(list.slice(arrHalfLength, listLen));
    console.log(`calling merge`);
    return merge(lList, rList);
};


const list0 = [1,6,2,8,3,4,7,0,3,6,86,84,68,43,36,647,78,57,4,2,42,76,34,4,3434,43,43];
const list1 = [1,6,2,8,3,4,7,0,3,6,86];
const list2 = [2];

mergeSort(list1);