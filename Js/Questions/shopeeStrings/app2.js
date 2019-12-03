const theSeperators = ['-', '/', '_'];
const theString = 'baraa-d_google-react/shopee';



const solver = (mainStr = "", seperatators = [], result = []) => {

    if (!mainStr) return result
    const sptIndex = find(mainStr, seperatators);
    const strA = mainStr.slice(0, sptIndex);
    let strB;
    // Just to include the first character in last substr IE. [b] of baraa-d_google-react/shopee 
    if (strA) strB = mainStr.slice(sptIndex + 1, mainStr.length);
    else strB = mainStr.slice(sptIndex, mainStr.length);

    const strSprt = mainStr[sptIndex];

    const apprevStr = apprev(strB);

    result.push(apprevStr)
    result.push(strSprt)

    return solver(strA, seperatators, result);
}




const find = (mainStr = "", seperatators = []) => {
    let sptIndex = null;
    const check = mainStr.split('').filter((x, index) => {
        let isSeper = seperatators.includes(x);
        if (isSeper) {
            sptIndex = index;
            return isSeper;
        }
        return isSeper;
    });
    return sptIndex;
}

function apprev(str) {

    const lenStr = str.length - 2;
    const first = str[0];
    const last = str[str.length - 1];
    if (str.length < 2) {
        return `${first}`
    }
    if (str.length == 2) return `${first}${last}`
    return `${first}${lenStr}${last}`
}


/** Another way to find the index of seperators in string **/
const findElegant = (mainStr = "", seperatators = []) => {
    const specialChar = mainStr.split('').map((x) => {
        if (seperatators.includes(x)) return mainStr.indexOf(x)
        return null;
    }).filter(x => x)[0]
    return specialChar;
}

//const res = solver('baraa-d_google-react/shopee', theSeperators)
//console.log(res.reverse().join(''))

const res = findElegant('baraa', theSeperators)
console.log(res);
