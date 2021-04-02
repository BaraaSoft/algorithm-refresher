// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function (S, T) {

    let len = Math.max(S.length, T.length)
    let stackS = [];
    let stackT = []
    for (let i = 0; i < len; i++) {
        if (S[i] == '#') {
            stackS.pop()
        } else if (S[i]) {
            stackS.push(S[i])
        }

        if (T[i] == '#') {
            stackT.pop()
        } else if (T[i]) {
            stackT.push(T[i])
        }
    }


    let strS = stackS.join("");
    let strT = stackT.join("");

    return ((strS.length == strT.length) && strS.indexOf(strT) > -1)
};