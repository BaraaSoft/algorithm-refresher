


const rmSeqDuplicate = (str) => {
    let arr = str.split("");
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            arr.splice(i, 1)
        }
    }

    return arr.join("");
}

const rmDuplicate = (str) => {
    let res = []

    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) > -1) {

        } else {
            res.push(str[i])
        }
    }
    return res.join("")
}

console.log(rmDuplicate("hello"))
console.log(rmDuplicate("Mississippi"))

