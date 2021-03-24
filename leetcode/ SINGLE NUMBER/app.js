// https://leetcode.com/problems/single-number


const single = (arr) => {
    let res = [];
    while (arr.length > 0) {
        let elm = arr.pop()
        let pos = res.indexOf(elm);
        if (pos > -1) {
            res.splice(pos, 1)
        } else {
            res.push(elm)
        }
    }
    return res
}


// Fast implemetation
var singleNumber = function (arr) {

    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let = elm = arr[i];
        if (map.has(elm)) {
            map.delete(elm);
        } else {
            map.set(elm, elm);
        }
    }
    return map.keys().next().value
};



let arr = [4, 1, 2, 1, 2]
console.log(single(arr));



