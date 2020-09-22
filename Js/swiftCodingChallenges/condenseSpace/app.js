
const condenseSpace = (str) => {
    let result = "";
    let prev = ''
    for (var char of str.split('')) {

        if ((prev == ' ') && (char != ' ')) {
            result = result + " "
            result = result + char
        } else if (char != ' ') {
            result = result + char
        }
        else {
            prev = char;
            continue;
        }
        prev = char

    }
    return result
}


console.log(condenseSpace("a     bc"))


// console.log("a   b   c".split(''))