
let arrys = [8, 6, 3, 2, 5, 4]
const algo = (orgArr) => {
    for (let x = 0; x < orgArr.length; x++) {
        let elm = orgArr[x];
        let j = x, k = x;
        while (k < (orgArr.length)) {
            if (orgArr[k] < orgArr[j]) {
                j = k;
            }
            k++;
        }
        if (j != x) {
            orgArr[x] = orgArr[j];
            orgArr[j] = elm;
        }

    }
    return orgArr;
}


console.log(algo(arrys));