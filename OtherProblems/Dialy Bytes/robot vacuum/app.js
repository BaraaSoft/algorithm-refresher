
/* 
    This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
*/

function solve(str) {

    let map = new Map()

    for (let char of str) {
        let val = map.get(char) || 0
        map.set(char, val + 1)
    }

    if (map.get("L") != map.get("R")) return false;
    if (map.get("D") != map.get("U")) return false;

    return true
}

console.log(solve("LR"))
console.log(solve("URURD"))
console.log(solve('RUULLDRD'))
