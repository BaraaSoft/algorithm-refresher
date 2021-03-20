

function premu(arr) {
    if (arr.length == 0) return [[]];
    let [first, ...rest] = arr

    let subArr = premu([...rest])
    let res = []

    subArr.forEach((prem) => {
        for (let i = 0; i <= prem.length; i++) {
            let left = prem.slice(0, i)
            let right = prem.slice(i)
            res.push([...left, first, ...right])
        }
    })
    return res;
}



function permutation(arr) {
    if (arr.length == 0) return [[]]
    let [first, ...rest] = arr;

    let subArr = permutation(rest)
    let res = []
    for (let prem of subArr) {
        for (let i = 0; i <= prem.length; i++) {
            res.push([...prem.slice(0, i), first, ...prem.slice(i)])
        }
    }

    return res
}


console.log(permutation([1, 5, 3]))