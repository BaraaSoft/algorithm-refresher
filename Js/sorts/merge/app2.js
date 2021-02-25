

const merge = (arr1, arr2) => {
    let arr = [];
    const l = arr1.length > arr2.length ? arr2.length : arr1.length;
    let i = 0, j = 0, k = 0
    do {
        if (arr1[i] < arr2[j]) {
            arr[k++] = arr1[i++];
        } else {
            arr[k++] = arr2[j++]
        }

    } while (i < l && j < l);

    for (; i < arr1.length;) {
        arr[k++] = arr1[i++]
    }
    for (; j < arr2.length;) {
        arr[k++] = arr2[j++]
    }


    return arr;
}

console.log(merge([2, 4, 51], [3, 7, 9, 77]))