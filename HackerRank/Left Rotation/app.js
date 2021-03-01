/*
*   A left rotation operation on an array of (n) size  
*   shifts each of the array's elements 1  unit to the left.
*   Given an integer,(d) , rotate the array that many steps left and return the result.
*/
function rotateLeft(d, arr) {
    const len = arr.length;
    let res = []
    let leftArr = arr.filter((v, x) => x < d)
    let rightArr = arr.filter((v, x) => x >= d)
    return [...rightArr, ...leftArr]

}