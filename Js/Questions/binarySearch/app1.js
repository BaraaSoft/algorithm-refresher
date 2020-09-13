const theArr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62]


const bSearch = (arr, target) => {
    let start = 0, end = arr.length
    let mid;
    do {
        mid = Math.floor(((start + end) / 2))
        if (target < arr[mid]) {
            end = mid
        } else if (target > arr[mid]) {
            start = mid
        } else {
            break
        }
        console.log(start, end)
    } while (start < end);


    return (arr[mid] == target) ? mid : -1
}


let index = bSearch(theArr, 3)

console.log(index, " value:" + theArr[index])