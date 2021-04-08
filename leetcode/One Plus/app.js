
function increment(arr, num = 1) {
    if (arr.length == 0) return []

    let last = arr.pop();
    if (last == 9) {
        let res = [...increment(arr, 1), 0]
        if (res[0] == 0) return [1, ...res]
        else return res
    } else {
        return [...increment(arr, 0), last + num]
    }

}

console.log(increment([7, 9, 9]))