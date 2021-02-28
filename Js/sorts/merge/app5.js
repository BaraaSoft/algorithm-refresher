

const merge = (arr, l, mid, h) => {
    let i = l, j = mid + 1, k = l;
    let res = [];
    while (i <= mid && j <= h) {
        if (arr[i] < arr[j]) {
            res[k++] = arr[i++]
        } else {
            res[k++] = arr[j++]
        }
    }

    for (; i <= mid; i++) {
        res[k++] = arr[i]
    }
    for (; j <= h; j++) {
        res[k++] = arr[j]
    }

    for (let x = l; x < res.length; x++) {
        arr[x] = res[x]
    }
    return res;
}


const sort = (arr) => {
    let p = 2, i = 0;
    let l = 0, h = 0, mid = 0;
    let len = arr.length

    for (p = 2; p <= len; p = 2 * p) {
        for (i = 0; (i + p - 1) < len; i = p + i) {
            l = i;
            h = (i + p - 1);
            mid = Math.floor((l + h) / 2);
            merge(arr, l, mid, h)
        }
    }

    if ((p / 2) < len) {
        merge(arr, 0, Math.floor(p / 2) - 1, len - 1)
    }

    return arr;
}


let theArr = [1, 34, 3, 56, 4, 8, 9, 2, 17];

console.log(sort(theArr))