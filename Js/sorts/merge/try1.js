/************  Official method *************/
const merge = (arrA = [], arrB = []) => {
    let i = 0, j = 0, k = 0
    const arr = []
    const lenA = arrA.length
    const lenB = arrB.length

    do {
        if (arrA[i] < arrB[j]) {
            arr[k++] = arrA[i++]
        } else {
            arr[k++] = arrB[j++]
        }

    } while (i < lenA && j < lenB);

    for (; i < lenA; i++) {
        arr[k++] = arrA[i]
    }
    for (; j < lenB; j++) {
        arr[k++] = arrB[j]
    }
    return arr
}


console.log(merge([23, 25], [33, 34, 53, 55]))
