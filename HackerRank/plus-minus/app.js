// https://www.hackerrank.com/challenges/plus-minus


function plusMinus(arr) {
    let len = arr.length
    let countArr = arr.reduce((acc, curr) => {
        if (curr > 0) {
            acc[0]++;
        } else if (curr < 0) {
            acc[1]++;
        } else {
            acc[2]++;
        }
        return acc;
    }, [0, 0, 0])

    let res = countArr.map((x) => x / len)
    res.forEach(x => console.log(x))

}