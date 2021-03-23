
// https://leetcode.com/problems/valid-parentheses

const solve = (str) => {
    let stack = [];
    let last;
    for (let char of str) {
        last = stack.length - 1
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char)
        }
        else if (char == ")" && stack[last] == "(") {
            stack.pop()
        }
        else if (char == "}" && stack[last] == "{") {
            stack.pop()
        }
        else if (char == "]" && stack[last] == "[") {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length == 0

}

console.log(solve("()()()()"))

