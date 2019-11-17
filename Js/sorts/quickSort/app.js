


const partition = (arr, l, h) => {
    let i = l;
    let j = h;
    let pivot = l;

    // if (arr) {
    //     pivot = Math.floor((arr.length - 1) / 2);
    //     console.log(`pivot ${pivot}, length ${arr.length}`);
    // }

    let elm;
    do {
        do { i++; } while (arr[i] <= arr[pivot]);
        do { j--; } while (arr[j] > arr[pivot]);
        if (i < j) {
            elm = arr[i];
            arr[i] = arr[j];
            arr[j] = elm;
        }
    } while (i < j);

    elm = arr[j];
    arr[j] = arr[pivot];
    arr[pivot] = elm;
    return j;
}

const quickSort = (arr, l, h) => {
    let j;
    if (l < h) {
        j = partition(arr, l, h);
        quickSort(arr, l, j);
        quickSort(arr, j + 1, h)
    }
}

let myArr = [10, 1, 100, 30, 7, 11, 13];
quickSort(myArr, 0, myArr.length);

let stressTest = [...Array(10000000).fill(0).map(x => Math.random() * 100)]
quickSort(stressTest, 0, stressTest.length)
console.log(stressTest);