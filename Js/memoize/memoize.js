const memoizer = (memo, formula) => {

    const recu = (n) => {
        let result = memo[n];
        if (typeof result != 'number') {
            result = formula(n, recu);
            memo[n] = result
        }
        return result;
    }
    return recu;
}


const factorial = memoizer([1, 1], (n, recu) => {
    return n * recu(n - 1);
});

const fabnan = memoizer([0, 1], (n, recu) => {
    const secondlast = recu(n - 2)
    const last = recu(n - 1)

    console.log(`fibonacci (${n})nth`)
    console.log(` >> ${last + secondlast}`)

    return last + secondlast
});

console.log(fabnan(20))