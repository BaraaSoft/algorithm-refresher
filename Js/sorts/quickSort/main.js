const sort = (arr, indexL, indexR) => {
    let i = indexL || 0;
    let j = indexR || arr.length;
    let pivot = 0;

    if (arr.length < 2) return arr

    do { i++; } while (arr[i] <= arr[pivot]);
    do { j--; } while (arr[j] > arr[pivot]);


    if (i > j) {
        const pivElm = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = pivElm;
        return [...sort(arr.slice(0, j)), arr[j], ...sort(arr.slice(j + 1, arr.length))]
    } else {
        let leftElm = arr[i];
        arr[i] = arr[j];
        arr[j] = leftElm;

        return [...sort(arr, i, j)];
    }
}

let arry = [15, 10, 100, 9, 13, 2, 23, 7, 30]

const stressTest = [...Array(1000).fill(0).map(x => Math.random() * 10)]

console.log(sort(stressTest))