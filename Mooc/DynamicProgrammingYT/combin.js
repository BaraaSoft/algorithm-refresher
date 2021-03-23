

const combin = (arr) => {
    if (arr.length == 0) return [[]]
    let [first, ...rest] = arr;
    let combinsWithoutFirst = combin(rest);
    let combinsWithFirst = []

    for (let combo of combinsWithoutFirst) {
        combinsWithFirst.push([...combo, first])
    }

    return [...combinsWithoutFirst, ...combinsWithFirst]
}


let res = combin(['a', 'b', 'c', 'd', 'e', 'f']).filter(x => x.length == 2)


console.log(res)