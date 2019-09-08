

function pickingNumbers(a) {
    // Write your code here
    const maxOccur = occurenceArry(a.sort((a, b) => a - b)).sort((a, b) => b[1] - a[1]).reduce((occu, current) => {
        if (occu.a.includes(current[0])) return occu;
        occu.a.push(current[0]);
        occu.b.push(current);
        return occu;
    }, { a: [], b: [] })
    const firsMaxOccur = maxOccur.b[0];
    const secodMaxOccurA = maxOccur.b.filter(x => {
        return x[0] == firsMaxOccur[0] + 1;
    })[0]
    console.log(maxOccur.b)
    const secodMaxOccurB = maxOccur.b.filter(x => {

        return x[0] == firsMaxOccur[0] - 1;
    })[0] || [0, 0]

    console.log(secodMaxOccurB)
    return secodMaxOccurA[1] > secodMaxOccurB[1] ? secodMaxOccurA[1] + firsMaxOccur[1] : secodMaxOccurB[1] + firsMaxOccur[1];
}


const occurenceArry = (arr, n = 0) => {
    if (n >= arr.length) return [];

    return [...occurenceArry(arr, n + 1), [arr[n], occurence(arr, arr[n])]]
}

const occurence = (arr, num, n = 0) => {
    if (n >= arr.length) return 0;
    if (arr[n] == num) return occurence(arr, num, n + 1) + 1;
    return occurence(arr, num, n + 1);
}




//const testArry = [1, 2, 2, 3, 1, 2];
const testArry = [4, 6, 5, 3, 3, 1]

//console.log(pickingNumbers(testArry, 0, 0));
console.log(pickingNumbers(testArry));
