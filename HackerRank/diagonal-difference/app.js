// https://www.hackerrank.com/challenges/diagonal-difference



function diagonalDifference(arr) {

    let mainDiag = 0;
    let secDiag = 0;
    for (let i = 0; i < arr.length; i++) {

        let offsetSec = Math.abs(arr[i].length - i - 1);
        let offsetPrim = i;
        if (arr[i][offsetPrim])
            mainDiag += arr[i][offsetPrim];

        if (arr[i][offsetSec])
            secDiag += arr[i][offsetSec];
    }

    return Math.abs(mainDiag - secDiag)
}
