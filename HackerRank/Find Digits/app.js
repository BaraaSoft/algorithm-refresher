

function findDigits(num) {
    const numsArr = num.toString().split('');
    const divNum = num;
    let resArr = [];
    for (let i = 0; i < numsArr.length; i++) {
        let theNum = parseInt(numsArr[i], 10);
        if (theNum == 0) continue;
        if (divNum % theNum == 0) {
            if (!resArr[i]) resArr[i] = 0;
            resArr[i]++;
        }
    }
    return resArr.filter(x => x != undefined).reduce((accum, next) => accum + next)
}



console.log(findDigits(1012))
