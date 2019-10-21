
const bubbleSort = (list) => {
    let arr = [];
    let alreadySorted;
    for (let i = 0; i < list.length - 1; i++) {
        arr = swap(list, i, (sorted) => {
            alreadySorted = sorted;
        });

        if (alreadySorted == 0) {
            console.log(">> already sorted!");
            return arr;
        }
    }
    return arr;
}


const swap = (list, pass, callback) => {
    let alreadySorted = 0;

    // adding pass because in each pass iteration, the already sorted elements we don't need to include. 
    for (let i = 0; i < list.length - (1 + pass); i++) {
        let elmOne = list[i];
        let elmTwo = list[i + 1];

        if (elmOne > elmTwo) {
            list[i + 1] = elmOne;
            list[i] = elmTwo;

            alreadySorted = 1;
        }
    }
    callback(alreadySorted);
    return list
}

let myList = [3, 2, 5, 7, 8];//[8, 5, 7, 3, 2]

console.log(bubbleSort(myList))