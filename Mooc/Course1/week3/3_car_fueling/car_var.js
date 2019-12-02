


function solve(target, startFuel, statations) {

    let dp = Array(statations.length).fill(0);
    let i = 0;
    dp[i] = startFuel;
    for (let [location, capacity] of statations) {
        for (let t = i; t >= 0; t--) {
            if (dp[t] >= location)
                dp[t + 1] = Math.max(dp[t + 1], dp[t] + capacity)
        }
        i++;
    }
    for (let x = 0; x < dp.length; x++) {
        if (dp[x] >= target) return x;
    }
    return -1;
}

console.log(solve(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]))
