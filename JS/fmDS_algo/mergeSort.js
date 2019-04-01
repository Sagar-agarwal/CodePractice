mergeSortFunction = function (arrL, arrR){
    const outputArr = [];
    let lPr = 0,
        rPr = 0;

    while (arrL.length > lPr || arrR.length > rPr) {
        if (arrL[lPr] >= arrR[rPr]) {
            console.log(`arrR[rPr]: ${arrR[rPr]}, rPr: ${rPr}`);
            outputArr.push(arrR[rPr]);
            rPr++;
        }
        else {
            console.log(`arrL[lPr]: ${arrL[lPr]}, lPr: ${lPr}, rPr: ${rPr}`);
            outputArr.push(arrL[lPr]);
            lPr++;
        }
    }
    return outputArr;
};


const arr1 = [2,4,7,9, 10, 11, 14]; 
const arr2 = [0, 3, 6, 7, 8, 13];