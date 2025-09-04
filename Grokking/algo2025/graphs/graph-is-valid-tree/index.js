
// Graph Valid Tree

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if (edges.length == 0) return true

        const graph = {};

        for (let [a, b] of edges) {
            graph[a] ||= [];
            graph[a].push(b)
            graph[b] ||= []
            graph[b].push(a)
        }

        let hasCycle = false;
        let seen = new Set();

        const traverse = (node, graph, seen, prev) => {
            if (node === undefined) return;
            if (seen.has(node)) {
                hasCycle = true
                return;
            }
            seen.add(node)

            for (let neighbor of graph[node]) {

                if (neighbor !== prev)
                    traverse(neighbor, graph, seen, node)
            }
         

            return;
        }


        traverse(n - 1, graph, seen)

        return seen.size == n && !hasCycle

    }


}
