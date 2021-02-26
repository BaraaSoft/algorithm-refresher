

const permu = (currStr, resStr) => {
    let len = currStr.length;
    let arr = currStr.split("")

    if (len === 0) {
        console.log(">> ", resStr);
    } else {
        for (let i = 0; i < len; i++) {
            let before = [...arr].slice(0, i).join("");
            let after = [...arr].slice(i + 1, len).join("");
            permu(before + after, resStr + currStr[i]);
        }
    }
}
permu("abc", "")

