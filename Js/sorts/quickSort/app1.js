
const quickSort = (orgArr) => {

    //const pvIndx = Math.floor(Math.random() * orgArr.length);
    const pvIndx = 0;
    //console.log("pvIndx ::" + orgArr.length)
    let pivot = orgArr[pvIndx];
    let i = 0;
    let j = orgArr.length - 1;

    if (orgArr.length < 2) {
        return orgArr;
    }


    do {
        do { i++; } while (orgArr[i] <= pivot)
        do { j--; } while (orgArr[j] > pivot)
        if (i < j) {
            const temp = orgArr[i]
            orgArr[i] = orgArr[j]
            orgArr[j] = temp;
        }
    } while (i < j)


    orgArr[pvIndx] = orgArr[j]
    orgArr[j] = pivot;
    console.log("j :: " + j)
    const arr1 = orgArr.slice(0, j);
    const arr2 = orgArr.slice(j + 1, orgArr.length);

    return [...quickSort(arr1), orgArr[j], ...quickSort(arr2)];

}


console.log(quickSort([12, 8, 5, 10, 1, 9, 3]))

//console.log([12, , 8, 5, 10, 1, 9].slice(0))