
const partition = (arr = [], l, h) => {
    let i = l, j = h
    let pivot = arr[l]
    do {
        do { i++; } while (arr[i] <= pivot);
        do { j--; } while (arr[j] > pivot);
        if (i < j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    } while (i < j);

    let temp = arr[j]
    arr[j] = pivot
    arr[l] = temp
    return j
}


// Object.defineProperty(Array.prototype, "quickSort", {
//     value: function qSort() {

//     },
//     configurable: true,
//     writable: true
// })


function quickSort(arr = [], l, h) {
    let j;
    if (l < h) {
        j = partition(arr, l, h)
        quickSort(arr, l, j)
        quickSort(arr, j + 1, h)
    }
    return arr
}
let thearr = [15, 10, 100, 9, 13, 2, 23, 7, 30]

console.log(quickSort(thearr, 0, thearr.length))