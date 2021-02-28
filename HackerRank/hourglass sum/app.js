function hourglassSum(arr) {
    //     a b c
    //       d
    //     e f g

    let a, b, c;
    let d;
    let e, f, g;

    let width = arr[0].length
    let height = arr.length;
    let resArr = [];
    for (let row = 0; row <= height - 3; row++) {
        for (let col = 0; col <= (width - 3); col++) {
            a = arr[row][col];
            b = arr[row][col + 1];
            c = arr[row][col + 2];
            //
            d = arr[row + 1][col + 1];
            //
            e = arr[row + 2][col];
            f = arr[row + 2][col + 1];
            g = arr[row + 2][col + 2];

            resArr.push((a + b + c + d + e + f + g));
        }
    }

    const [largest, ...rest] = resArr.sort((a, b) => b - a);
    console.log(resArr)
    return largest;
}