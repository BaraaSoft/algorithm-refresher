


function longest(str) {

    let stack = []
    let count = 0
    for (let elm of str) {
        let len = stack.length;
        if (elm == '(') {
            stack.push("(")
        } else if (elm == ')' && stack[len - 1] == '(') {
            count += 2
            stack.pop()
        }
    }

    return count;

}


console.log(longest(")()())"))
console.log(longest("(()"))