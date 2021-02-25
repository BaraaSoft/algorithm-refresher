
const partion = (arr, l, h) => {
    let i = l, j = h;
    let p = l;

    do {
        do { i++; } while (arr[i] <= arr[p])
        do { j--; } while (arr[j] > arr[p])
        if (i < j) {
            let [va, vb] = swap(arr[j], arr[i])
            arr[j] = va;
            arr[i] = vb;
        }
    } while (i < j);
    swap(arr[j], arr[p])
    let [va, vb] = swap(arr[j], arr[p])
    arr[j] = va;
    arr[p] = vb;
    return j;
}


const quickSort = (arr, l, h) => {
    let j = l;
    if (l < h) {
        j = partion(arr, l, h)
        quickSort(arr, l, j)
        quickSort(arr, j + 1, h)
    }

}

const swap = (a, b) => {
    return [b, a]
}

let myArr = [1, 3, 45, 3, 9, 4, 8, 1, 2, 5]
quickSort(myArr, 0, (myArr.length))
let a = 'aa', b = 'bb'
swap(a, b)
console.log(">> a:", a)
console.log(myArr)