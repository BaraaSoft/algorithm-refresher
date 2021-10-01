
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const levenshteinDistance = (s1, s2) => {
    return solve(s1, s2)
}

const solve = (s1, s2, memo = {}) => {
    const key = s1 + ',' + s2
    if (key in memo) return memo[key]
    if (s1 == s2) return 0;

    if (s1 == '' && s2 == '') return 0;
    if (s1 == '') return s2.length;
    if (s2 == '') return s1.length;

    const rmS1 = s1.slice(0, -1)
    const rmS2 = s2.slice(0, -1)

    if (s1[s1.length - 1] == s2[s2.length - 1]) {
        return solve(rmS1, rmS2, memo)
    }

    memo[key] = Math.min(solve(s1, rmS2, memo) + 1, solve(rmS1, s2, memo) + 1, solve(rmS1, rmS2, memo) + 1)

    return memo[key];
}


/*
-----------------------------------------------
                EXAMPLE (1)
-----------------------------------------------

Input: s1 = "a", s2 = "bba"
Output: 2

Explanation:
    "a" -> "ba" (insert 'b' to the start)
    "ba" -> "bba" (insert 'b' to the start)

-----------------------------------------------
                EXAMPLE (2)
-----------------------------------------------

Input: s1 = "intention", s2 = "execution"
Output: 5

Explanation:
    "intention" -> "inention" (delete 't')
    "inention" -> "enention" (replace 'i' with 'e')
    "enention" -> "exention" (replace 'n' with 'x')
    "exention" -> "exection" (replace 'n' with 'c')
    "exection" -> "execution" (insert 'u')

*/