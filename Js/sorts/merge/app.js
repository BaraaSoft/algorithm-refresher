

const merge = (arrA = [], arrB = []) => {
    let i = 0;
    let j = 0
    let k = 0;
    let arr = []

    let totalLen = (arrA.length + arrB.length) - 1
    do {
        if (arrA[i] && arrB[j]) {
            arr[k++] = arrA[i] < arrB[j] ? arrA[i++] : arrB[j++]
        } else if (arrA[i]) {
            arr[k++] = arrA[i++]
        } else if (arrB[j]) {
            arr[k++] = arrB[j++]
        }
    } while (k <= totalLen);

    return arr
}


console.log(merge([2, 4, 51], [9, 3, 7, 13, 50]))
