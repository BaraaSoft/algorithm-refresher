const sort = (arr, indexL, indexR) => {
    let i = indexL || 0;
    let j = indexR || arr.length;
    let pivot = 0;

    if (arr.length < 2) return arr

    do {
        i++;
        //console.log(i)
    } while (arr[i] < arr[pivot]);
    do {
        //console.log(j)
        j--;
    } while (j > -1 && arr[j] >= arr[pivot]);
    if (i > j) {
        let pivElm = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = pivElm;

        return [...sort(arr.slice(0, i), 0), ...sort(arr.slice(i, arr.length), 0)]
    } else {
        console.log(i)
        console.log(j)
        console.log("---------")

        let leftElm = arr[i];
        arr[i] = arr[j];
        arr[j] = leftElm;

        return [...sort(arr, i)];
    }
}

let res = []
let arry = [10, 100, 9, 13, 2, 7, 30]
let temp = sort(arry, 0, 7)
console.log(arry)