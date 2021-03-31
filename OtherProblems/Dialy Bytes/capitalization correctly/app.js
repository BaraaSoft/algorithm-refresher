
/*
This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
*/

function solve(str) {
    let validA = str[0].toUpperCase() + str.slice(1);
    let validB = str.toUpperCase();
    let validC = str.toLowerCase()

    switch (str) {
        case validA:
            return true;
        case validB:
            return true;
        case validC:
            return true;
        default:
            return false
    }
}


console.log(solve("USA"))
console.log(solve("Calvin"))
console.log(solve("compUter"))
console.log(solve("coding"))