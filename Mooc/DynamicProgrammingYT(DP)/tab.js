
// conventional
function grid(row, col) {
    if (row == 0 || col == 0) return 0;
    if (row < 2 || col < 2) return 1;

    let ans = grid(row - 1, col) + grid(row, col - 1)

    return ans;
}

function pathCombination(rw, cl) {
    let table = Array(rw + 1)
        .fill(0)
        .map(x => Array(cl + 1).fill(0))
    table[1][1] = 1
    for (let i = 0; i <= rw; i++) {
        for (let k = 0; k <= cl; k++) {
            let val = table[i][k];
            table[i][k + 1] += val
            if (table[i + 1])
                table[i + 1][k] += val
        }
    }

    return table[rw][cl]
}
//console.log(pathCombination(3, 3))

// Summation

function canSum(target, arr) {
    if (target == 0) return true;
    if (target < 0) return false;

    for (let elm of arr) {
        let remainder = target - elm;
        let res = canSum(remainder, arr)
        if (res == true) return true;
    }

    return false
}



console.log(canSum(7, [2, 4, 3]))



