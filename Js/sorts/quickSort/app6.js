
const arr = [10, 20, 34, 24, 5, 2, 1]

const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let privot = arr[Math.floor(arr.length / 2)]
    const subArrLess = arr.filter(x => x < privot)
    const subArrGreat = arr.filter(x => x > privot)
    const equal = arr.filter(x => x == privot)

    return [...quickSort(subArrLess), ...quickSort(equal), ...quickSort(subArrGreat)]
}


console.log(quickSort(arr))
