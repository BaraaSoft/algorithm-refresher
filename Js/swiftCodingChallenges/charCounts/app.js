

const charCounts = (str, char) => {
    let dict = {}
    for (const chr of str) {
        if (dict[chr]) {
            dict[chr] = dict[chr] + 1
        } else {
            dict[chr] = 1
        }
    }

    return dict[char]
}



const str = "Mississippi"
console.log(charCounts('Hacking with Swift', 'i'))