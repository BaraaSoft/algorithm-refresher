
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
        let visited = new Set();

        const traverse = (node, graph, seen = new Set(), visited, prev) => {
            if (node === undefined) return;
            if (seen.has(node)) {
                hasCycle = true
                return;
            }
            visited.add(node)
            seen.add(node)

            for (let neighbor of graph[node]) {

                if (neighbor !== prev)
                    traverse(neighbor, graph, seen, visited, node)
            }
            seen.delete(node)

            return;
        }


        traverse(n - 1, graph, new Set(), visited)

        return visited.size == n && !hasCycle

    }


}
