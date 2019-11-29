




function solve() {
    const seperator = ['-', '/', '_'];
    const myStr2 = 'baraa-d_google-react/shopee';
    let newStr = myStr2.split('');

    /**  getting seperators list (which we called magic2) **/
    let seperatorsList = split(myStr2, seperator);

    for (let sp of seperatorsList) {
        newStr[sp.pos] = "@"
    }
    /** after the loop >> newStr:: baraa-d_google-react/shopee **/
    /**  spilt newStr to get words arrs (which we called magic1) **/
    const words = newStr.join('').split('@');

    /**  getting an object contains each word and it's index **/
    const apprvWordsObj = getWordIndex(newStr, words).map(({ l, pos }) => { return { l: apprev(l), pos } });

    /** now I join seperatorsList(magic2) and  apprvWordsObj(magic1) and sort them to get the result**/
    return [...seperatorsList, ...apprvWordsObj].sort((a, b) => a.pos - b.pos).map(x => x.l).join('')
}

function apprev(str) {
    const lenStr = str.length - 2;
    const first = str[0];
    const last = str[lenStr - 1];
    if (str.length < 2) {
        return `${first}`
    }
    if (str.length == 2) return `${first}${last}`
    return `${first}${lenStr}${last}`
}

function getWordIndex(strArr = [], wordsArr = []) {
    const str = strArr.join('')
    const arr = [];
    for (let i = 0; i < wordsArr.length; i++) {
        arr.push({ l: wordsArr[i], pos: str.match(wordsArr[i]).index })
    }
    return arr;
}

function split(str, seperators, resArr = [], indx = 0) {
    const letter = str[indx];
    if (checkContains(letter, seperators)) resArr.push({ l: letter, pos: indx });
    if (indx >= str.length) return resArr
    return split(str, seperators, resArr, indx + 1)
}


function checkContains(str = "", sprs) {
    let res = sprs.filter(x => str == x);
    return res.length > 0;
}

console.log(solve())