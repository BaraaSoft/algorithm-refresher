// CONTAINS DUPLICATE
//  https://leetcode.com/problems/contains-duplicate


const containDuplicate = (arr) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]))
            return true
        else
            map.set(arr[i], arr[i])
    }


    return false;
}






let arr = [1, 2, 3, 4]

console.log(containDuplicate(arr))