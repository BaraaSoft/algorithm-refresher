

function flatten(arr) {
    if (!Array.isArray(arr)) {
        return [arr]
    }
    if (arr && arr.length == 0) return []
    let [first, ...rest] = arr;

    if (Number.isInteger(first)) {
        return [first, ...flatten(rest)]
    } else {
        return [...flatten(first), ...flatten(rest)]
    }

}



function flate(arr) {

    let queue = [arr[0]]
    let res = []
    while (queue.length != 0) {
        let elm = queue.shift();

        if (Array.isArray(elm)) {
            for (let item of elm) {
                if (Array.isArray(item)) {
                    queue.push(item)
                } else {
                    res.push(item)
                }
            }
        } else {
            res.push(elm)
        }
    }
    return res
}


console.log(flate([[1, 1], 2, [1, 1]]))
console.log(flatten([1, [4, [6]]]))


