// https://www.hackerrank.com/challenges/the-birthday-bar/problem

/*

*/

function birthday(s, d, m) {
    let len = s.length;
    let h = 0, l = 0;
    let res = 0;
    for (let i = 0; i <= len - m; i++) {
        l = i;
        h = i + m
        sum(s, l, h) == d ? res++ : 0;
    }
    return res

}