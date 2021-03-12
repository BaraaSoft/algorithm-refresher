

function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) {
        return 1;
    }
    memo[n] = fib(n - 2) + fib(n - 1);
    return memo[n];
}



function pathCombination(n, m, memo = {}) {
    const key = n + ',' + m
    if (key in memo) return memo[key];
    if (n == 0 || m == 0) return 0;
    if (n < 2 || m < 2) return 1

    memo[key] = pathCombination(n - 1, m, memo) + pathCombination(n, m - 1, memo);
    return memo[key];
}


//console.log(pathCombination(3, 3))
//console.log(pathCombination(18, 18))


function canSum(target, arr, memo = {}) {
    if (target in memo) return memo[target]
    if (target == 0) return true;
    if (target < 0) return false;

    for (let num of arr) {
        target -= num;
        if (canSum(target, arr) == true) {
            memo[target] = true
            return true;
        }
    }
    memo[target] = false;
    return false;
}

// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [2, 4]))
// console.log(canSum(700, [2, 4]))


function howSum(target, arr) {
    if (target === 0) return []
    if (target < 0) return null

    for (let num of arr) {
        let reminder = target - num;
        let res = howSum(reminder, arr)
        if (res !== null) {
            return [...res, num]
        }
    }

    return null
}



console.log(howSum(14, [3, 2, 5]))