
const bubbleSort = (list) => {
    let arr = [];
    for (let i = 0; i < list.length - 1; i++) {
        arr = swap(list)
    }
    return arr;
}

const swap = (list) => {

    for (let i = 0; i < list.length - 1; i++) {
        let elmOne = list[i];
        let elmTwo = list[i + 1];

        if (elmOne > elmTwo) {
            list[i + 1] = elmOne;
            list[i] = elmTwo;
        }
    }
    return list
}

let myList = [8, 5, 7, 3, 2]

console.log(bubbleSort(myList))