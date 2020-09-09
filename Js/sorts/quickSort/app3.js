
var sort = (orgArr = [], l, h) => {
    let pivot = l;
    let i = l;
    let j = h

    do {
        do {
            i++;
        } while (orgArr[i] <= orgArr[pivot]);
        do {
            j--;
        } while (orgArr[j] > orgArr[pivot])

        if (i < j) {
            var temp = orgArr[i]
            orgArr[i] = orgArr[j]
            orgArr[j] = temp
        }

    } while (i < j);

    var temp = orgArr[j]
    orgArr[j] = orgArr[pivot]
    orgArr[pivot] = temp
    return j
}

const quickSort = (arr, l, h) => {
    let j;
    if (l < h) {
        j = sort(arr, l, h)
        quickSort(arr, l, j)
        quickSort(arr, j + 1, h)
    }
}


let arr = [23, 3, 56, 34, 2, 11, 5, 9, 8]
quickSort(arr, 0, arr.length)

console.log(arr)