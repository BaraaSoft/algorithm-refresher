const theArr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62]


const search = (arr = [], l, h, target) => {
    let i = l, j = h;
    let mid = Math.floor((i + j) / 2)
    if (arr[mid] > target) {
        return search(arr, l, mid, target)
    } else if (arr[mid] < target) {
        return search(arr, mid, h, target)
    } else {
        return mid
    }
}


const result = search(theArr, 0, theArr.length, 3)
console.log(">> index: " + result, " value: " + theArr[result])