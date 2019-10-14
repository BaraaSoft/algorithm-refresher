const strsA = "aab";
const strsB = "azb";


const lcs = (strA, strB) => {

    const lastCharA = lastChar(strA);
    const lastCharB = lastChar(strB);

    const subStrA = strA.slice(0, -1);
    const subStrB = strB.slice(0, -1);


    if (!strA || !strB) return 0;

    if (lastCharA == lastCharB) {
        return 1 + lcs(subStrA, subStrB)
    } else {
        return max(lcs(subStrB, strA), lcs(subStrA, strB))
    }
}
const lastChar = (str) => {
    const [last, ...rest] = str.split('').reverse();
    return last;
}

const max = (numA, numB) => (numA >= numB) ? numA : numB



console.log(lcs(strsA, strsB));