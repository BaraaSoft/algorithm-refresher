
// const fun = (callback, arg) => {
//     callback.call(this, arg)
// }


// for (var i = 0; i < 10; i++) {
//     fun((i) => {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000)
//     }, i)

// }

// let project = [
//     { name: "baraa", list: ["Iphone 10", "IPhone 6", "Iphone 52"] },
//     { name: "baraa", list: ["Iphone 12", "IPhone 12 mini", "Iphone 7"] },
// ]


// for (const { name, list } of project) {

//     console.log(name)
// }


//let arr = [7, 1, 3, 2, 4, 5, 6];



const sort = (arr, a, b) => {
    if (isSorted(arr)) return [];
    let res = [];
    if (a >= 0) {
        sort(swap(arr, a, b), a - 1, b)
        res.push([a, b])
    }
    else if (b >= 0) {
        sort(swap(arr, a, b), a, b - 1)
        res.push([a, b])
    }

    return res;
}

const isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) return false;
    }
    return true;
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
    return arr
}

let arr = [7, 1, 3, 2, 4, 5, 6]
console.log(sort(arr, arr.length - 1, arr.length - 1))


