const arrayManipulations = (arrLen, queries) => {
    let lastArr = [...Array(arrLen).fill(0)];
    for (let arr of queries) {
        const [start, end, value] = arr;
        let newArr = createArr(start, end, value, arrLen);
        newArr = sum(newArr, lastArr);
        lastArr = newArr;
    }
    return max(lastArr);
}

const createArr = (l, h, vl, len) => {
    const res = [...Array(len).fill(0).map((item, index) => {
        if (index >= l - 1 && index <= h - 1) return vl;
        return item;
    })];
    return res;
}


const sum = (arr1, arr2) => {
    let res = [];
    for (let x = 0; x < arr1.length; x++) {
        res[x] = arr1[x] + arr2[x];
    }
    return res;
}

const max = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let item = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = item;
            }
        }

        return arr[arr.length - 1]
    }
}


let arr1 = createArr(1, 5, 3, 10);
let arr2 = createArr(4, 8, 7, 10);

console.log(sum(arr1, arr2))
console.log(max(sum(arr1, arr2)));