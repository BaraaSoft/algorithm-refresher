

const solve = (num) => {
    let binaryArr = Number(num).toString(2).split("");
    let baseArr = [...Array(8).fill(0)];
    if (binaryArr.length < 8) {
        let padding = 8 - binaryArr.length;
        for (let i = padding, k = 0; i <= 8;) {
            baseArr[i++] = binaryArr[k++];
        }
    }
    return baseArr.reverse().join("")
}

console.log(parseInt(solve(4), 2))