


function solve(num) {
    let x = Math.log2(num)
    let check = String(x).split(".")
    return check.length < 2
}


console.log(solve(256))
