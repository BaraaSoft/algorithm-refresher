
const fairSolver = (arr, count = 0) => {
    let i = 0;
    let out = true;
    let numOfOdd = 0;

    // check if all even if so set the flag 'out=true' to break
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] % 2 != 0) {
            numOfOdd++;
            out = false;
        }
    }



    if (out) return count;
    if (numOfOdd % 2 != 0) return 'NO';

    while (i < arr.length && arr[i] % 2 == 0) { i++; }

    if (arr[i] % 2 != 0) {
        arr[i]++;
        arr[i + 1]++;
        count += 2;
        return fairSolver(arr, count)
    } else {
        return count;
    }
}

console.log(fairSolver([4, 5, 6, 7]))