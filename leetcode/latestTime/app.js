const permutation = (arr, arrCount, callback, result = [], level = 0) => {

    if (level == 4) {
        callback(result)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arrCount[i] == 0)
            continue;
        result[level] = arr[i]
        arrCount[i]--;
        permutation(arr, arrCount, callback, [...result], level + 1);
        arrCount[i]++;
    }
}

const digitFormater = (num) => {
    return num.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
}


const latestTime = (arr) => {
    let maxTime = -1;
    let maxTimeLeteral = ""
    let permutationsArr = []
    permutation(arr, [1, 1, 1, 1], x => permutationsArr.push(x))
    for (let [i, j, k, l] of permutationsArr) {
        let mins = (k * 10) + l;
        let hours = (i * 10) + j;
        if (mins <= 59 && (hours <= 23)) {
            let timeInMins = (hours * 60) + mins
            if (timeInMins > maxTime) {
                maxTimeLeteral = `${digitFormater(hours)}:${digitFormater(mins)}`
            }
            maxTime = Math.max(timeInMins, maxTime)
        }
    }
    return maxTime == -1 ? '' : maxTimeLeteral
}


let res = latestTime([0, 0, 0, 0])
console.log(res)