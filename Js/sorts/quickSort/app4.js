
const partition = (arr = [], l, h) => {
    const pivot = arr[l]
    let i = l, j = h;
    do {
        do { i++; } while (arr[i] <= pivot);
        do { j--; } while (arr[j] > pivot);
        if (i < j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    } while (i < j);

    let replace = arr[l]
    arr[l] = arr[j]
    arr[j] = replace
    return j
}

const quickSort = (arr = [], l, h) => {
    let j;
    if (l < h) {
        j = partition(arr, l, h)
        quickSort(arr, l, j)
        quickSort(arr, j + 1, h)
    }
    return arr
}


let arry = [15, 10, 100, 9, 13, 2, 23, 7, 30]

console.log(quickSort(arry, 0, arry.length))
