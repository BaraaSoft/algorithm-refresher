/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {

    const unionFind = new UnionFind(n);

    for (const [a, b] of edges) {
        unionFind.union(a, b);
    }

    let count = 0

    for (let i = 0; i < unionFind.arr.length; i++) {
        if (unionFind.arr[i] == i) count++
    }


    return count

};


class UnionFind {
    constructor(length) {
        this.arr = Array.from({ length }, (_, i) => i);
    }

    find(a) {
        let next = a;
        while (this.arr[next] != next) {
            next = this.arr[next]
        }
        this.arr[a] = next;
        return next;
    }

    union(a, b) {
        const numA = this.find(a);
        const numB = this.find(b);

        if (numA == numB) return false;

        this.arr[numA] = numB;

        return false;
    }
}