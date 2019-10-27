// The elegant solution;
const insertSort = (orgArr) => {
    for (let i = 1; i < orgArr.length; i++) {
        let elm = orgArr[i];
        let j = i - 1;
        while (j > -1 && elm < orgArr[j]) {
            orgArr[j + 1] = orgArr[j];
            j--;
        }
        orgArr[j + 1] = elm;
    }
    return orgArr;
}


console.log(insertSort([8, 2, 7, 5, 3]));
