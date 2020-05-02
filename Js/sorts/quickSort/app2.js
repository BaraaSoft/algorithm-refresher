let theArry = [9, 2, 3, 4, 7, 1, 8, 5]


const swap = (arr, a, b) => {
    let mid = arr[a];
    arr[a] = arr[b];
    arr[b] = mid;
}


const subSort = (arr = [], nextI, nextJ) => {
    let pivot = nextI;
    let i = nextI, j = nextJ;
    do {
        do { i++; } while (arr[i] <= arr[pivot]);
        do { j--; } while (arr[j] > arr[pivot]);
        if (i < j) {
            swap(arr, i, j)
        }
    } while (i < j);
    swap(arr, pivot, j);

    return j;
}

const sort = (arr, l, h) => {
    let j;
    if (l < h) {
        j = subSort(arr, l, h)
        sort(arr, l, j);
        sort(arr, j + 1, h)
    }

    return arr;
}


console.log(sort(theArry, 0, theArry.length))