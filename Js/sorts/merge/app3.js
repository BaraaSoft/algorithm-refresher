
const merge = (arr, mid, low, high) => {
    let i = low, j = mid + 1, k = low;
    let res = [];
    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            res[k++] = arr[i++]
        } else {
            res[k++] = arr[j++]
        }
    };
    for (; i <= mid;) {
        res[k++] = arr[i++]
    }
    for (; j <= high;) {
        res[k++] = arr[j++]
    }
    for (let x = low; x <= high; x++) {
        arr[x] = res[x];
    }

    return res;
}

const mergeSort = (arr, n) => {
    let l, mid, h, p, i;

    for (p = 2; p <= n; p = p * 2) {
        for (i = 0; i + p - 1 < n; i = i + p) {
            l = i;
            h = i + p - 1;
            mid = Math.floor((l + h) / 2);
            merge(arr, mid, l, h);
        }
    }
    if ((p / 2) < n) {
        merge(arr, Math.floor(p / 2) - 1, 0, n - 1)
    }
    return arr;
}


let theArr = [1, 34, 3, 56, 4, 8, 9, 2, 17];
mergeSort(theArr, theArr.length)
console.log(theArr)