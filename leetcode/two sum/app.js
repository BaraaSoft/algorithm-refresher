

function twoSum(arr, target) {
    if (target == 0) return []
    if (target < 1) return null

    for (let i = 0; i < arr.length; i++) {
        let remain = target - arr[i]
        let res = twoSum(arr, remain, map)
        if (res !== null) {
            if (!res.includes(i))
                return [...res, i]
        }
    }
    return null;
}

function twoSumHash(arr, target) {
    let res = []
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let difference = target - arr[i]
        if (map.has(difference)) {
            res[0] = i;
            res[1] = map.get(difference)
            return res;
        }
        map.set(arr[i], i)
    }
    return []
}


// console.log(twoSum([2, 7, 11, 15], 13))

console.log(twoSumHash([2, 7, 11, 15], 18))