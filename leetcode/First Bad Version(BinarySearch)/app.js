// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        return search(n, isBadVersion)
    };
};

function search(n, isBadVersion) {
    let l = 0;
    let r = n;
    let lastBad;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (isBadVersion(mid)) {
            lastBad = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return lastBad
}