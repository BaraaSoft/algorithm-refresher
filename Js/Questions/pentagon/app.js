function solve(n) {
    if (n == 1) return 1;
    let num = n - 1;

    const prevPentagon = solve(n - 1) + (num * 5);
    return prevPentagon;
}

console.log(solve(5))