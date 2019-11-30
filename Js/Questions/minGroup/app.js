const gp = [1, 1.5, 1, 2, 3, 5, 6, 6, 7];


function solve(arr = []) {
    let groupArr = [];
    let n = 0;
    let start = 0;
    while (n < arr.length) {
        start = n;
        let minGroup = []
        while (start < arr.length) {
            let elm = arr[start];
            let range = Math.abs(elm - arr[n])

            if (range > 1) break;
            minGroup.push(elm)
            start += 1;
        }
        groupArr = [...groupArr, [...minGroup]];
        // start from the last ended position.
        n = start;
    }
    return groupArr;
}

console.log(solve(gp))

