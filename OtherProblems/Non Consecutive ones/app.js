
/*
Given an integer K. Task is Print All binary string of size K (Given number).
Input : K = 3
Output : 000 , 001 , 010 , 100 , 101

Input : K  = 4
Output :0000 0001 0010 0100 0101 1000 1001 1010

*/
function solve(num) {

    let str = '0'
    generate(num, str, 1)

    str = '1';
    generate(num, str, 1)

}

function generate(k, str, n) {
    if (k == n) {
        console.log(str)
        return;
    }

    if (str[n - 1] == '0') {
        temp = str.split('')
        temp[n] = '0'
        str = temp.join('')
        generate(k, str, n + 1)
        temp[n] = '1'
        str = temp.join('')
        generate(k, str, n + 1)
    }

    if (str[n - 1] == '1') {
        temp = str.split('')
        temp[n] = '0'
        str = temp.join('')
        generate(k, str, n + 1)
    }
}

/*********************************/
/******** Another Solution *******/
/*********************************/

function generateAdvance(k, str = "", n = 0) {
    if (k == n) {
        console.log(str)
        return;
    }

    if (str[n - 1] == '0' || str == '') {
        temp = str.split('')
        temp[n] = '0'
        str = temp.join('')
        generate(k, str, n + 1)
        temp[n] = '1'
        str = temp.join('')
        generate(k, str, n + 1)
    }

    if (str[n - 1] == '1') {
        temp = str.split('')
        temp[n] = '0'
        str = temp.join('')
        generate(k, str, n + 1)
    }

}


console.log(solve(3))